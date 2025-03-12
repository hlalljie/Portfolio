import { getPayload } from 'payload'
import config from './src/payload.config.ts'
import fs from 'fs'
import path from 'path'

// Define output directories
const outputDir = path.join(process.cwd(), '..', 'frontend')
const dataOutputDir = path.join(outputDir, 'src', 'data', 'globals')
const mediaOutputDir = path.join(outputDir, 'public', 'media')

const generateStatic = async () => {
  console.log('🚀 Generating static data...')

  // Create directories if they don't exist
  if (!fs.existsSync(dataOutputDir)) {
    fs.mkdirSync(dataOutputDir, { recursive: true })
  }

  if (!fs.existsSync(mediaOutputDir)) {
    fs.mkdirSync(mediaOutputDir, { recursive: true })
  }

  // Get data from Payload
  const payloadData = await getData()

  // Define output file path
  const filename = 'homepage.json'
  const outputPath = path.join(dataOutputDir, filename)

  // Write data to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(payloadData, null, 2))

  console.log(`✅ Static data saved to ${outputPath}`)

  // Copy media files
  await copyMediaFiles()

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

const copyMediaFiles = async () => {
  console.log('📷 Copying media files...')

  // Source directory where Payload stores media files
  const mediaSourceDir = path.join(process.cwd(), 'public', 'media')

  if (!fs.existsSync(mediaSourceDir)) {
    console.log('⚠️ Media source directory does not exist, skipping media copy.')
    return
  }

  // Recursive function to copy directory contents
  const copyDir = (src: string, dest: string) => {
    // Create destination directory if it doesn't exist
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true })
    }

    // Get all files and directories in the source directory
    const entries = fs.readdirSync(src, { withFileTypes: true })

    for (const entry of entries) {
      const srcPath = path.join(src, entry.name)
      const destPath = path.join(dest, entry.name)

      if (entry.isDirectory()) {
        // Recursively copy subdirectories
        copyDir(srcPath, destPath)
      } else {
        // Copy files
        fs.copyFileSync(srcPath, destPath)
      }
    }
  }

  // Start copying files
  copyDir(mediaSourceDir, mediaOutputDir)

  console.log(`✅ Media files copied to ${mediaOutputDir}`)
}

// Run the script
generateStatic()
