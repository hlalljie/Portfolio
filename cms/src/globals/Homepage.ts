import type { GlobalConfig } from 'payload'

import triggerRebuild from '../app/utils/triggerRebuild'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true, // Allow anyone to read
  },
  hooks: {
    afterChange: [triggerRebuild],
  },
  fields: [
    {
      name: 'homeHeroBanner',
      type: 'group',
      label: 'Hero Banner',
      fields: [
        {
          name: 'headline',
          type: 'text',
          required: true,
        },
        {
          name: 'subHeadline',
          type: 'text',
          required: true,
          hasMany: true,
          minRows: 3,
          maxRows: 3,
          minLength: 4,
          maxLength: 12,
        },
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'homeExperience',
      type: 'group',
      label: 'Home Experience',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'experienceItems',
          type: 'relationship',
          relationTo: 'experienceItems',
          required: true,
          hasMany: true,
        },
      ],
    },
    {
      name: 'homeAbout',
      type: 'group',
      label: 'Home About',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraph',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'homeContact',
      type: 'group',
      label: 'Home Contact',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'paragraph',
          type: 'textarea',
          required: true,
        },
        {
          name: 'email',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
