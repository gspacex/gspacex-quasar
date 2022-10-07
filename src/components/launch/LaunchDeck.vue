<template>
  <div class="card-column">
    <LaunchCard
      v-for="launch in launches"
      :key="(launch.id as string)"
      :launch="launch"
    />
  </div>
</template>

<script setup lang="ts">
import LaunchCard from './LaunchCard.vue';
import { Launch } from 'src/types';

const props = defineProps<{
  launches: Array<Launch>;
}>();
const { launches } = $(props);
</script>
