import { buildConfig } from 'payload/config';
import path from 'path';
import Examples from './collections/Examples';
import Users from './collections/Users';

export default buildConfig({
  serverURL: process.env.DOMAIN_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Examples
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
