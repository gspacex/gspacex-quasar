<template>
  <div>
    <h1>Fairings</h1>
    <LaunchFairingsTable :fairings="fairings" />
  </div>
</template>

<script setup lang="ts">
import { LaunchFairings } from 'src/types';
import LaunchFairingsTable from './LaunchFairingsTable.vue';

const props = defineProps<{
  fairings: LaunchFairings;
}>();
const { fairings } = $(props);
</script>
