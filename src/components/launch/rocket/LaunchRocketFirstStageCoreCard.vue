<template>
  <q-card>
    <q-card-section>
      <router-link class="text-h6" :to="`/cores/${name}`">{{
        name
      }}</router-link>
    </q-card-section>
    <q-card-section>
      <LaunchRocketFirstStageCoreTable :core="core" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import LaunchRocketFirstStageCoreTable from './LaunchRocketFirstStageCoreTable.vue';
import { Maybe, LaunchRocketFirstStageCore } from 'src/types';
const props = defineProps<{
  core: Maybe<LaunchRocketFirstStageCore>;
}>();
const { core } = $(props);
const name = core.core.id;
</script>
