<template>
  <q-table
    :title="title"
    :rows="data"
    :columns="columns"
    row-key="name"
    hide-header
    hide-pagination
    :pagination="pagination"
    style="max-width: 32em"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  data: Array<{ name: string; value: unknown }>;
}>();
const { title, data } = $(props);

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
const pagination = {
  rowsPerPage: 10,
};
</script>
