import type { GlobalConfig } from 'payload'

import triggerRebuild from '../app/utils/triggerRebuild'

export const PortfolioPage: GlobalConfig = {
  slug: 'portfolio',
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
      name: 'description',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
