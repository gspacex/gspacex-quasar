<template>
  <DataTable title="Data" :data="data" />
</template>

<script setup lang="ts">
import { Capsule } from 'src/types';
import DataTable from 'components/DataTable.vue';

const props = defineProps<{
  capsule: Capsule;
}>();
const { capsule } = $(props);

const data = [
  { name: 'Reuse Count', value: capsule.reuse_count },
  { name: 'Status', value: capsule.status },
];
</script>
