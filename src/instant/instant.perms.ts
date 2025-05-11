// Docs: https://www.instantdb.com/docs/permissions

import type { InstantRules } from '@instantdb/core';

const rules = {
  attrs: {
    allow: {
      $default: 'false'
    }
  },
  $default: {
    allow: {
      $default: 'false'
    }
  }
} satisfies InstantRules;

export default rules;
