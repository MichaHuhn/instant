<script setup lang="ts">
import { ref } from 'vue';
import { db } from '@/instant';

const room = db.joinRoom('name', 'id', { initialPresence: { example: 'value' } });
const presenceResponse = ref();

function joinRoom() {
  room.subscribePresence({}, (response) => (presenceResponse.value = response));
}
</script>

<template>
  <button @click="joinRoom">room.subscribePresence()</button>
  <pre>{{ presenceResponse }}</pre>
</template>

<style scoped></style>
