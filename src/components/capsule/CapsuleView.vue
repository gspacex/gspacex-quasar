<template>
  <h1>{{ name }}</h1>
  <CapsuleTable :capsule="capsule" />
  <h2>Last Update</h2>
  <p>{{ capsule.last_update }}</p>
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
import { Capsule } from 'src/types';
import CapsuleTable from './CapsuleTable.vue';

const props = defineProps<{
  capsule: Capsule;
}>();
const { capsule } = $(props);
const name = capsule.serial;
const launches = capsule.launches;
</script>
