// External imports
import type { CollectionConfig } from 'payload'

// Internal imports
// Blocks
import { TextBlock } from '../blocks/TextBlock'
// Utils
import slugify from '../app/utils/slugify'
import triggerRebuild from '../app/utils/triggerRebuild'
import { requiredToPublish } from '../app/utils/validation'

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
      name: 'publicationStatus',
      type: 'select',
      options: [
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Draft',
          value: 'draft',
        },
      ],
      defaultValue: 'draft',
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
      validate: requiredToPublish(),
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'text',
      validate: requiredToPublish(),
      hasMany: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      validate: requiredToPublish(),
    },
    {
      name: 'technologies',
      type: 'text',
      validate: requiredToPublish(),
      hasMany: true,
    },
    {
      name: 'year',
      type: 'text',
      validate: requiredToPublish(),
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
