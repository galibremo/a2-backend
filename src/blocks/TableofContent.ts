import { Block } from 'payload'

export const TableofContent: Block = {
  slug: 'tableofContents',
  fields: [
    {
      name: 'contents',
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'header',
        },
        {
          type: 'text',
          name: 'link',
        },
      ],
    },
  ],
}
