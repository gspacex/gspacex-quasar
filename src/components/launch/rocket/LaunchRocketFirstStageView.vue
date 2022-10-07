<template>
  <h1>First Stage</h1>
  <h2>Cores</h2>
  <div class="card-column">
    <LaunchRocketFirstStageCoreCard
      v-for="core in cores"
      :key="(core.id as string)"
      :core="core"
    />
  </div>
</template>

<script setup lang="ts">
import { LaunchRocketFirstStage } from 'src/types';
import LaunchRocketFirstStageCoreCard from './LaunchRocketFirstStageCoreCard.vue';

const props = defineProps<{
  stage: LaunchRocketFirstStage;
}>();
const { stage } = $(props);
const cores = stage.cores;
</script>
