import type { CollectionConfig } from 'payload'

import triggerRebuild from '../app/utils/triggerRebuild'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  access: {
    read: () => true, // Allow anyone to read
  },
  hooks: {
    afterChange: [triggerRebuild],
  },
  fields: [
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: false,
    },
    {
      name: 'serviceAreas',
      type: 'select',
      required: false,
      hasMany: true,
      options: [
        {
          label: 'Development',
          value: 'development',
        },
        {
          label: 'Design',
          value: 'design',
        },
        {
          label: 'Tutoring/Mentorship',
          value: 'tutoring-mentorship',
        },
        {
          label: 'Other',
          value: 'other',
        },
      ],
    },
    {
      name: 'live',
      type: 'checkbox',
      required: false,
      defaultValue: true,
    },
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      required: false,
    },
  ],
}
