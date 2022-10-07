<template>
  <DataTable title="Data" :data="data" />
</template>

<script setup lang="ts">
import { Dragon } from 'src/types';
import DataTable from 'components/DataTable.vue';

const props = defineProps<{
  dragon: Dragon;
}>();
const { dragon } = $(props);

const data = [{ name: 'Active', value: dragon.active }];
</script>
