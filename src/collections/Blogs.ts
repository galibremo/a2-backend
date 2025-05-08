import { CardBlock } from '@/blocks/CardBlock'
import { TableofContent } from '@/blocks/TableofContent'
import { BlocksFeature, FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Textarea',
      type: 'textarea',
    },
    {
      name: 'Richtext',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [CardBlock, TableofContent],
          }),
          FixedToolbarFeature(),
        ],
      }),
      required: true,
    },
    {
      name: 'statsBlock',
      type: 'code',
      admin: {
        language: 'html',
      },
    },
    {
      name: 'Date',
      type: 'date',
    },
    {
      name: 'Title',
      type: 'text',
    },
  ],
  upload: true,
}
