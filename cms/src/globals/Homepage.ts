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
      name: 'sharedImages',
      type: 'group',
      label: 'Shared Images',
      fields: [
        {
          name: 'homeHeroBannerImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'homeBottomBackgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
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
          required: true,
        },
        {
          name: 'portraitImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
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
