// External imports
import type { CollectionConfig } from 'payload'

// Internal imports
import { TextBlock } from '../blocks/TextBlock'
import triggerRebuild from '../app/utils/triggerRebuild'

export const PortfolioItems: CollectionConfig = {
  slug: 'portfolioItems',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow anyone to read
  },
  hooks: {
    afterChange: [triggerRebuild],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'text',
      required: true,
      hasMany: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'technologies',
      type: 'text',
      required: true,
      hasMany: true,
    },
    {
      name: 'year',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'github',
      type: 'text',
    },
    {
      name: 'pageContent',
      type: 'group',
      fields: [
        {
          name: 'bannerImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [TextBlock],
        },
      ],
    },
  ],
}
