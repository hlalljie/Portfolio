import { getPayload } from 'payload'
import config from './src/payload.config.ts'
import fs from 'fs'
import path from 'path'

const generateStatic = async () => {
  console.log('🚀 Generating static data...')

  // Initialize Payload (dotenv is handled by Next.js automatically)
  const payload = await getPayload({ config })

  // Fetch data from Payload Global
  const homepageData = await payload.findGlobal({
    slug: 'homepage',
  })
  // Define output file path
  const outputPath = path.join(process.cwd(), 'static-data.json')

  // Write data to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(homepageData, null, 2))

  console.log(`✅ Static data saved to ${outputPath}`)

  process.exit(0) // Exit the script
}

// Run the script
generateStatic()
