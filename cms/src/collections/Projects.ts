// External imports
import type { CollectionConfig } from 'payload'

// Internal imports
import slugify from '../app/utils/slugify'
import { TextBlock } from '../blocks/TextBlock'
import triggerRebuild from '../app/utils/triggerRebuild'

export const Projects: CollectionConfig = {
  slug: 'projects',
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
      name: 'fullTitle',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Personal',
          value: 'personal',
        },
        {
          label: 'Professional',
          value: 'professional',
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (!data) {
              return
            }
            if (data.title && !data.slug) {
              return slugify(data.title)
            }
            return data.slug
          },
        ],
      },
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
      name: 'itchio',
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
