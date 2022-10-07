<template>
  <div class="fit">
    <q-list>
      <q-item-label header>Dragon</q-item-label>
      <q-item :to="`/dragon/${dragon?.id}`" exact> Overview </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Dragon } from 'src/types';
const props = defineProps<{
  dragon: Dragon;
}>();
const { dragon } = $(props);
</script>
