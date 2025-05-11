import { init } from '@instantdb/core';
import schema from './instant.schema.ts';

export const db = init({
  appId: import.meta.env.VITE_INSTANT_APP_ID,
  schema
});
