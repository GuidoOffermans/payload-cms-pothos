import { CollectionConfig } from 'payload/types';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'enableCoolStuff', // required
      type: 'checkbox', // required
      label: 'Click me to see fanciness',
      defaultValue: false,
    }
  ],
};

export default Users;
