import { CollectionConfig } from 'payload/types';

const Examples: CollectionConfig = {
  slug: 'examples',
  admin: {
    useAsTitle: 'someField',
  },
  fields: [
    {
      name: 'someField',
      type: 'text',
    },
    {
      name: 'enableCoolStuff', // required
      type: 'checkbox', // required
      label: 'Click me to see fanciness',
      defaultValue: false,
    }
  ],
}

export default Examples;
