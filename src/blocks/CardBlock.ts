import { Block } from 'payload'

export const CardBlock: Block = {
  slug: 'cardBlock',
  labels: {
    singular: 'Card Block',
    plural: 'Card Blocks',
  },
  fields: [
    {
      type: 'array',
      name: 'cards',
      label: 'Cards',
      fields: [
        {
          type: 'text',
          name: 'numberValue',
          label: 'Number Value',
        },
        {
          type: 'text',
          name: 'content',
          label: 'Content',
        },
      ],
    },
  ],
}
