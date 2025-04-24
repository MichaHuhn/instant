<script setup lang="ts">
import { ref } from 'vue';
import { db, type Item } from '@/instant';

const items = ref<Item[]>([]);

const queryDurationInMilliseconds = ref();
const performanceStart = performance.now();

db.subscribeQuery({ items: {} }, (response) => {
  const performanceEnd = performance.now();
  queryDurationInMilliseconds.value = Math.round(performanceEnd - performanceStart);

  items.value = response.data?.items ?? [];
});
</script>

<template>
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">{{ item }}</div>
  </div>

  <br />

  <div>{{ queryDurationInMilliseconds }} ms</div>
</template>

<style scoped></style>
