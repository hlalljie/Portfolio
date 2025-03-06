import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
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
  ],
}
