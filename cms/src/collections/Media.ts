import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // Allow anyone to read
  },
  upload: {
    staticDir: 'public/media',

    // Define responsive image sizes
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: undefined, // Keep aspect ratio
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 90,
          },
        },
      },
      {
        name: 'small',
        width: 768,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 85,
          },
        },
      },
      {
        name: 'medium',
        width: 1200,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
      },
      {
        name: 'large',
        width: 1800,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
      },
      {
        name: 'hero',
        width: 2500,
        height: undefined,
        position: 'centre',
        formatOptions: {
          format: 'webp',
          options: {
            quality: 80,
          },
        },
      },
    ],

    // Format conversion with quality optimization for the original
    formatOptions: {
      format: 'webp',
      options: {
        quality: 85, // Good balance between quality and file size
      },
    },

    // Additional resize options
    resizeOptions: {
      position: 'centre',
      withoutEnlargement: true, // Don't upscale smaller images
    },
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false, // Not required as mentioned
    },
    {
      name: 'name',
      type: 'text',
      admin: {
        description: 'Custom name for the image (optional)',
      },
    },
    {
      name: 'credit',
      type: 'text',
      admin: {
        description: 'Photographer or source credit (e.g., "Photo by John Doe on Unsplash")',
      },
    },
  ],
}
