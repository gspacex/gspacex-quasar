<template>
  <DataTable title="Engines" :data="data" />
</template>

<script setup lang="ts">
import { LaunchFairings } from 'src/types';
import DataTable from 'components/DataTable.vue';

const props = defineProps<{
  fairings: LaunchFairings;
}>();
const { fairings } = $(props);

const data = [
  { name: 'Recovered', value: fairings.recovered },
  { name: 'Recovery Attempt', value: fairings.recovery_attempt },
  { name: 'Reused', value: fairings.reused },
];
</script>
