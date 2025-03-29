import { getPayload, BasePayload, GlobalSlug, CollectionSlug } from 'payload'
import config from '../payload.config.ts'
import fs from 'fs'
import path from 'path'

// Define output directories
const outputDir = path.join(process.cwd(), '..', 'frontend')
const globalOutputDir = path.join(outputDir, 'src', 'data', 'globals')
const collectionOutputDir = path.join(outputDir, 'src', 'data', 'collections')
const mediaOutputDir = path.join(outputDir, 'public', 'media')
const patternsOutputDir = path.join(outputDir, 'public', 'patterns')

/**
 * generateStatic - Function to generate static data and save to frontend
 */
const generateStatic = async () => {
  console.log('🚀 Generating static data...')

  // Create directories if they don't exist
  createStaticDirectories()

  // Initialize Payload (dotenv is handled by Next.js automatically)
  const payload = await getPayload({ config })

  // Save homepage data
  await saveGlobalData('homepage', payload)
  await saveGlobalData('portfolio', payload)
  await saveGlobalData('projects-page', payload)

  // Save project data
  await saveCollectionData('projects', payload)

  // Copy media files
  await copyFiles('media', mediaOutputDir)

  // Copy patterns files
  await copyFiles('patterns', patternsOutputDir)

  console.log('✅ Static data finished generating')

  process.exit(0) // Exit the script
}

/**
 * createStaticDirectories - Function to create static directories if they don't exist
 */
const createStaticDirectories = () => {
  // Global output directory
  if (!fs.existsSync(globalOutputDir)) {
    fs.mkdirSync(globalOutputDir, { recursive: true })
  }
  // Collection output directory
  if (!fs.existsSync(collectionOutputDir)) {
    fs.mkdirSync(collectionOutputDir, { recursive: true })
  }
  // Media output directory
  if (!fs.existsSync(mediaOutputDir)) {
    fs.mkdirSync(mediaOutputDir, { recursive: true })
  }
  // Patterns output directory
  if (!fs.existsSync(patternsOutputDir)) {
    fs.mkdirSync(patternsOutputDir, { recursive: true })
  }
}

/**
 * getGlobalData - Function to save global data to frontend static json
 * @param pageSlug - The slug of the global to save
 */
const saveGlobalData = async <T extends GlobalSlug>(pageSlug: T, payload: BasePayload) => {
  // Fetch data from Payload Global
  const payloadData = await payload.findGlobal({
    slug: pageSlug,
  })

  // Define output file path
  const filename = `${pageSlug}.json`
  const outputPath = path.join(globalOutputDir, filename)

  // Write data to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(payloadData, null, 2))

  console.log(`✅ Static data for ${pageSlug} saved to ${outputPath}`)
}

const saveCollectionData = async (collectionSlug: CollectionSlug, payload: BasePayload) => {
  // Fetch data from Payload Collection
  const payloadData = await payload.find({
    collection: collectionSlug,
  })

  // remove drafts
  payloadData.docs = payloadData.docs.filter(
    (doc) =>
      !Object.hasOwn(doc, 'publicationStatus') || (doc as any).publicationStatus === 'published',
  )

  // Define output file path
  const filename = `${collectionSlug}.json`
  const outputPath = path.join(collectionOutputDir, filename)

  // Write data to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(payloadData, null, 2))

  console.log(`✅ Static data for ${collectionSlug} saved to ${outputPath}`)
}

/**
 * copyMediaFiles - Function to copy media files to frontend public directory
 */
const copyFiles = async (slug: string, outputDir: string) => {
  console.log(`📷 Copying ${slug} files...`)

  // Source directory where Payload stores media files
  const sourceDir = path.join(process.cwd(), 'public', slug)

  if (!fs.existsSync(sourceDir)) {
    console.log(`⚠️ ${slug} source directory does not exist, skipping ${slug} copy.`)
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
  copyDir(sourceDir, outputDir)

  console.log(`✅ ${slug} files copied to ${outputDir}`)
}

// Run the script
generateStatic()
