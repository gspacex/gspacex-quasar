<template>
  <div class="fit">
    <q-list>
      <q-item-label header>Capsule</q-item-label>
      <q-item :to="`/capsule/${capsule?.id}`" exact> Overview </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Capsule } from 'src/types';
const props = defineProps<{
  capsule: Capsule;
}>();
const { capsule } = $(props);
</script>
