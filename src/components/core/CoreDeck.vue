<template>
  <div class="card-column">
    <CoreCard v-for="core in cores" :key="(core.id as string)" :core="core" />
  </div>
</template>

<script setup lang="ts">
import CoreCard from './CoreCard.vue';
import { Core } from 'src/types';

const props = defineProps<{
  cores?: Array<Core>;
}>();
const { cores } = $(props);
</script>
