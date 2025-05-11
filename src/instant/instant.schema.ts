// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from '@instantdb/core';

const _schema = i.schema({
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed().optional(),
      url: i.any().optional()
    }),
    $users: i.entity({
      email: i.string().unique().indexed().optional()
    })
  },
  links: {},
  rooms: {
    name: {
      presence: i.entity({
        example: i.string().unique().indexed()
      })
    }
  }
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
