import { exec } from 'child_process'

/**
 * triggerRebuild: Payload hook to trigger static build (used on save)
 */
export default async function triggerRebuild() {
  try {
    console.log('Content changed, triggering rebuild...')

    // execute the generate static script
    exec('pnpm generate-static', (error, stdout, stderr) => {
      if (error) {
        console.error(`Static generation error: ${error}`)
        return
      }
      console.log(`Static data regenerated successfully`)
    })
  } catch (error) {
    console.error('Error triggering static build:', error)
  }
}
