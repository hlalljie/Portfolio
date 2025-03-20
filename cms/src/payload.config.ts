// storage-adapter-import-placeholder

// External Imports
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Internal Imports
// Globals
import { Homepage } from './globals/Homepage'
import { ProjectsPage } from './globals/ProjectsPage'
import { PortfolioPage } from './globals/PortfolioPage'
// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { ExperienceItems } from './collections/ExperienceItems'
import { Projects } from './collections/Projects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Homepage, ProjectsPage, PortfolioPage],
  collections: [Users, Media, ExperienceItems, Projects],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  cors: [
    'http://localhost:5173', // Allow Vite React frontend
  ],
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
})
