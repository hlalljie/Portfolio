// warmup.js
import fetch from 'node-fetch'

/**
 * warmupPayload: Function to warm up Payload routes by pinging them.
 * Needed to trigger just-in-time route loading so frontend can correctly check that Payload is available and so admin is ready to go
 * @returns {Promise<void>}
 */
async function warmupPayload() {
  console.log('Warming up Payload routes...')

  const routesToWarmup = ['http://localhost:3000/api', 'http://localhost:3000/admin']

  try {
    await Promise.all(
      routesToWarmup.map(async (route) => {
        try {
          console.log(`Warming up: ${route}`)
          const response = await fetch(route)
          console.log(`Status for ${route}: ${response.status}`)
        } catch (error) {
          console.log(`Failed to warm up ${route}: ${error.message}`)
        }
      }),
    )

    console.log('Warmup completed')
  } catch (error) {
    console.error('Warmup failed:', error)
  }
}

warmupPayload()
