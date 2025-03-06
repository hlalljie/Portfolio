import { getPayload } from 'payload'
import config from './src/payload.config.ts'
import fs from 'fs'
import path from 'path'

const generateStatic = async () => {
  console.log('🚀 Generating static data...')

  // Get data from Payload
  const payloadData = await getData()

  // Define output file path
  const filename = 'homepage.json'
  const outputPath = path.join(process.cwd(), '..', 'frontend', 'src', 'data', 'globals', filename)

  // Write data to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(payloadData, null, 2))

  console.log(`✅ Static data saved to ${outputPath}`)

  process.exit(0) // Exit the script
}

const getData = async () => {
  // Initialize Payload (dotenv is handled by Next.js automatically)
  const payload = await getPayload({ config })

  // Fetch data from Payload Global
  // Fetch data from homepage
  const homepageData = await payload.findGlobal({
    slug: 'homepage',
  })

  //structure data for export
  const data = homepageData

  return data
}

// Run the script
generateStatic()
