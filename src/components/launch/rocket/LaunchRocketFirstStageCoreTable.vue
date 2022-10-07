<template>
  <q-table
    :rows="rows"
    :columns="columns"
    row-key="name"
    hide-header
    hide-pagination
    :pagination="pagination"
    style="max-width: 32em"
  />
</template>

<script setup lang="ts">
import { LaunchRocketFirstStageCore } from 'src/types';
const props = defineProps<{
  core: LaunchRocketFirstStageCore;
}>();
const { core } = $(props);
const columns = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    style: 'width: 16em',
  },
  { name: 'value', label: 'Value', field: 'value', align: 'left' },
];
const rows = [
  { name: 'Landing Vehicle', value: core.landing_vehicle },
  { name: 'Block', value: core.block },
  { name: 'Landing Type', value: core.landing_type },
  { name: 'Landing Intent', value: core.landing_intent },
  { name: 'Land Success', value: core.land_success },
  { name: 'Grid Fins', value: core.grid_fins },
  { name: 'Flight', value: core.flight },
  { name: 'Legs', value: core.legs },
  { name: 'Reused', value: core.reused },
];
const pagination = {
  rowsPerPage: 10,
};
</script>
