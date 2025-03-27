import { CollectionConfig } from 'payload'

export const Patterns: CollectionConfig = {
  slug: 'patterns',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'filename',
    description: 'SVG pattern files only',
  },
  upload: {
    staticDir: 'public/patterns',
    mimeTypes: ['image/svg+xml'],
  },

  fields: [],
}
