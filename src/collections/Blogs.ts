import { lexicalEditor } from '@payloadcms/richtext-lexical'
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
      editor: lexicalEditor({}),
      required: true,
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
