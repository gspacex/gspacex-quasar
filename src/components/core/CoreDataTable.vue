<template>
  <DataTable title="Data" :data="data" />
</template>

<script setup lang="ts">
import { Core } from 'src/types';
import DataTable from 'components/DataTable.vue';

const props = defineProps<{
  core: Core;
}>();
const { core } = $(props);

const data = [
  { name: 'ASDS Attempts', value: core.asds_attempts },
  { name: 'ASDS Landings', value: core.asds_landings },
  { name: 'Block', value: core.block },
  { name: 'Reuse Count', value: core.reuse_count },
  { name: 'RTLS Attempts', value: core.rtls_attempts },
  { name: 'RTLS Landings', value: core.rtls_landings },
  { name: 'Status', value: core.status },
];
</script>
