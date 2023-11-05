/// This is a generated file. It should not be edited manually.
//
// You can decide to commit this file or add it to your `.gitignore`.
//
// By convention, this module is imported as `@grafbase/generated`. To make this syntax possible,
// add a `paths` entry to your `tsconfig.json`.
//
//  "compilerOptions": {
//    "paths": {
//      "@grafbase/generated": ["./grafbase/generated"]
//    }
//  }

export type Schema = {
  'User': {
    __typename?: 'User';
    id: string;
    name: string;
    username: string;
    password: string;
  };
  'CreateUserInput': {
    name: string;
    username: string;
    password: string;
  };
  'Mutation': {
    __typename?: 'Mutation';
    createUser?: Schema['User'] | null;
  };
};

import { ResolverFn } from '@grafbase/sdk'

export type Resolver = {
  'Mutation.createUser': ResolverFn<Schema['Mutation'], {  }, Schema['User'] | null>
}

