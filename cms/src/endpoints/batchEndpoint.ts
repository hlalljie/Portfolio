// src/endpoints/batchEndpoint.ts
import { Endpoint } from 'payload'
import { headersWithCors } from 'payload'
import type { PayloadHandler, PayloadRequest } from 'payload'

// Higher-order function to add CORS support to our handler
export const withCors = (handler: PayloadHandler) => async (req: PayloadRequest) => {
  if (req.method === 'OPTIONS') {
    return new Response('', {
      headers: headersWithCors({ headers: new Headers(), req }),
      status: 200,
    })
  }

  const response = await handler(req)

  return new Response(response.body, {
    headers: headersWithCors({ headers: response.headers, req }),
    status: response.status,
    statusText: response.statusText,
  })
}

// Your batch endpoint using the withCors wrapper
export const batchEndpoint: Endpoint = {
  path: '/batch',
  method: 'post',
  handler: withCors(async (req) => {
    try {
      // Parse request body
      let data
      if (req.body && req.body.constructor.name === 'ReadableStream') {
        // Stream handling code...
        const reader = req.body.getReader()
        const chunks = []

        let done = false
        while (!done) {
          const { value, done: doneReading } = await reader.read()
          done = doneReading
          if (value) {
            chunks.push(value)
          }
        }

        const concatenated = new Uint8Array(chunks.reduce((acc, chunk) => acc + chunk.length, 0))
        let position = 0
        for (const chunk of chunks) {
          concatenated.set(chunk, position)
          position += chunk.length
        }

        const decoder = new TextDecoder()
        const text = decoder.decode(concatenated)
        data = JSON.parse(text)
      } else {
        data = req.body
      }

      const { resources } = data || {}

      if (!Array.isArray(resources) || resources.length === 0) {
        return Response.json(
          {
            error: 'Invalid request. The body must contain a non-empty resources array.',
          },
          {
            status: 400,
          },
        )
      }

      const result: {
        collection: Record<string, any>
        global: Record<string, any>
      } = {
        collection: {},
        global: {},
      }

      for (const resource of resources) {
        const { type, slug } = resource

        try {
          if (type === 'collection') {
            const collectionData = await req.payload.find({
              collection: slug,
            })

            result.collection[slug] = collectionData
          } else if (type === 'global') {
            const globalData = await req.payload.findGlobal({
              slug,
            })

            result.global[slug] = globalData
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error'

          if (type === 'collection') {
            result.collection[slug] = { error: errorMessage }
          } else if (type === 'global') {
            result.global[slug] = { error: errorMessage }
          }
        }
      }

      return Response.json(result)
    } catch (error) {
      console.error('Error in batch endpoint:', error)
      return Response.json(
        {
          error:
            'Error processing request: ' +
            (error instanceof Error ? error.message : 'Unknown error'),
        },
        {
          status: 500,
        },
      )
    }
  }),
}
