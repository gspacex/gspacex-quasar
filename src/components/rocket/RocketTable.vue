<template>
  <DataTable title="General" :data="data" />
</template>

<script setup lang="ts">
import { Rocket } from 'src/types';
import DataTable from 'components/DataTable.vue';

const props = defineProps<{
  rocket: Rocket;
}>();
const { rocket } = $(props);

const data = [
  { name: 'Active', value: rocket.active },
  { name: 'Diameter (ft)', value: rocket.diameter.feet },
  { name: 'Boosters', value: rocket.boosters },
];
</script>
