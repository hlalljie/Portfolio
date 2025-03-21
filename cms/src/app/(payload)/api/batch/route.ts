// app/api/batch/route.ts
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Payload } from 'payload'
import { CollectionSlug, GlobalSlug } from 'payload' // Import generated types

// Define types for the request and resources
interface CollectionResource {
  type: 'collection'
  slug: CollectionSlug // Use the generated type
}

interface GlobalResource {
  type: 'global'
  slug: GlobalSlug
}

type Resource = CollectionResource | GlobalResource

interface BatchRequestBody {
  resources: Resource[]
}

interface BatchResponse {
  collections: Record<string, any>
  globals: Record<string, any>
}

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { resources } = (await request.json()) as BatchRequestBody

    // Check if resources is a valid array
    if (!Array.isArray(resources) || resources.length === 0) {
      return Response.json(
        { error: 'Invalid request. The body must contain a non-empty resources array.' },
        { status: 400 },
      )
    }

    // Get the payload instance
    const payload = (await getPayload({
      config: configPromise,
    })) as Payload

    // Initialize response structure
    const result: BatchResponse = {
      collections: {},
      globals: {},
    }

    // Process each resource
    await Promise.all(
      resources.map(async (resource: Resource) => {
        const { type, slug } = resource

        if (!type || !slug) {
          console.error('Invalid resource format:', resource)
          return
        }

        try {
          if (type === 'collection') {
            // TypeScript knows slug is CollectionSlug here
            const collectionData = await payload.find({
              collection: slug,
            })

            // Add to collections in the result
            result.collections[slug] = collectionData
          } else if (type === 'global') {
            // Fetch global data
            const globalData = await payload.findGlobal({
              slug,
            })

            // Add to globals in the result
            result.globals[slug] = globalData
          }
        } catch (error) {
          console.error(`Error fetching ${type} '${slug}':`, error)
          // Store the error in the appropriate section
          if (type === 'collection') {
            result.collections[slug] = {
              error: error instanceof Error ? error.message : 'Unknown error',
            }
          } else if (type === 'global') {
            result.globals[slug] = {
              error: error instanceof Error ? error.message : 'Unknown error',
            }
          }
        }
      }),
    )

    // Return the combined result
    return Response.json(result)
  } catch (error) {
    console.error('Batch request error:', error)
    return Response.json(
      {
        error:
          'Failed to process batch request: ' +
          (error instanceof Error ? error.message : 'Unknown error'),
      },
      { status: 500 },
    )
  }
}
