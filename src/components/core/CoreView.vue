<template>
  <h1>{{ name }}</h1>
  <CoreDataTable :core="core" />
  <h2>Last Update</h2>
  <p>{{ core.last_update }}</p>
  <h2>Launches</h2>
  <q-list>
    <q-item
      v-for="launch in launches"
      :key="launch.id"
      :to="`/launches/${launch.id}`"
      exact
    >
      {{ launch.name }}
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { Core } from 'src/types';
import CoreDataTable from './CoreDataTable.vue';

const props = defineProps<{
  core: Core;
}>();
const { core } = $(props);
const name = core.serial;
const launches = core.launches;
</script>
