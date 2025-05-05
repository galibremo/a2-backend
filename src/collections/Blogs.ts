import type { CollectionConfig } from 'payload'

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Whats on your mind!!!',
      type: 'textarea',
      required: true,
    },
    {
      name: 'Whats the current data!!',
      type: 'date',
      required: true,
    },
  ],
  upload: true,
}
