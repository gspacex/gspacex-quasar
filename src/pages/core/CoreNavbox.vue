<template>
  <div class="fit">
    <q-list>
      <q-item-label header>Core</q-item-label>
      <q-item :to="`/core/${core?.id}`" exact> Overview </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Core } from 'src/types';
const props = defineProps<{
  core: Core;
}>();
const { core } = $(props);
</script>
