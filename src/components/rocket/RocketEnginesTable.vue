<template>
  <DataTable title="Engines" :data="data" />
</template>

<script setup lang="ts">
import { RocketEngines } from 'src/types';
import DataTable from 'components/DataTable.vue';

const props = defineProps<{
  engines: RocketEngines;
}>();
const { engines } = $(props);

const data = [
  { name: 'Type', value: engines.type },
  { name: 'Version', value: engines.version },
  { name: 'Number', value: engines.number },
  { name: 'Layout', value: engines.layout },
  { name: 'Propellant 1', value: engines.propellant_1 },
  { name: 'Propellant 2', value: engines.propellant_2 },
  { name: 'Thrust Sea Level (lbf)', value: engines.thrust_sea_level?.lbf },
  { name: 'Thrust Vacuum (lbf)', value: engines.thrust_vacuum?.lbf },
];
</script>
