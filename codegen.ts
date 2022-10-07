import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: ['src/types/graphql/*.graphql'],
  //documents: ['src/types/graphql/core.graphql'],
  generates: {
    './src/types/graphql/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
};

export default config;
