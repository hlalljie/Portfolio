import type { CollectionConfig } from 'payload'

import triggerRebuild from '../app/utils/triggerRebuild'

export const ExperienceItems: CollectionConfig = {
  slug: 'experienceItems',
  admin: {
    useAsTitle: 'company',
  },
  access: {
    read: () => true, // Allow anyone to read
  },
  hooks: {
    afterChange: [triggerRebuild],
  },
  fields: [
    {
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'titles',
      type: 'text',
      required: true,
      hasMany: true,
    },
    {
      name: 'dates',
      type: 'group',
      fields: [
        {
          name: 'startDate',
          type: 'text',
          required: true,
        },
        {
          name: 'endDate',
          type: 'text',
          required: true,
        },
        {
          name: 'shortLabel',
          type: 'text',
          required: false,
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'technologies',
      type: 'text',
      required: true,
      hasMany: true,
    },
  ],
}
