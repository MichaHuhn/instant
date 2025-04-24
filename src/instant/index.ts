import { init, type InstaQLEntity } from '@instantdb/core';
import schema, { type AppSchema } from './instant.schema.ts';

export const db = init({
  appId: import.meta.env.VITE_INSTANT_APP_ID,
  schema
});

export type Item = InstaQLEntity<AppSchema, 'items'>;
