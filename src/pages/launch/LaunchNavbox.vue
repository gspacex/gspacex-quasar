<template>
  <div class="fit">
    <q-list>
      <q-item-label header>Launch</q-item-label>
      <q-item :to="`/launches/${launch?.id}`" exact> Overview </q-item>
      <q-item :to="`/launches/${launch.id}/fairings`" exact> Fairings </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Launch } from 'src/types';
const props = defineProps<{
  launch: Launch;
}>();
const { launch } = $(props);
</script>
