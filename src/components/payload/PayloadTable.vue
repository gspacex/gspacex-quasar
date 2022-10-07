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
import { Payload } from 'src/types';
const props = defineProps<{
  payload: Payload;
}>();
const { payload } = $(props);
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
  { name: 'Manufacturer', value: payload.manufacturer },
  { name: 'Nationality', value: payload.nationality },
  { name: 'Orbit', value: payload.orbit },
  { name: 'Payload Mass (lbs)', value: payload.payload_mass_lbs },
  { name: 'Payload Type', value: payload.payload_type },
  { name: 'Reused', value: payload.reused },
];
const pagination = {
  rowsPerPage: 10,
};
</script>
