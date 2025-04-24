// Docs: https://www.instantdb.com/docs/permissions

import type { InstantRules } from '@instantdb/core';

const rules = {
  attrs: {
    allow: {
      $default: 'false'
    }
  },
  items: {
    allow: {
      view: 'true'
    }
  },
  $default: {
    allow: {
      $default: 'false'
    }
  }
} satisfies InstantRules;

export default rules;
