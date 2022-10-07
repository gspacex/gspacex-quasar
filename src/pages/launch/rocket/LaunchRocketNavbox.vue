<template>
  <div class="fit">
    <q-list>
      <q-item-label header>Launch Rocket</q-item-label>
      <q-item :to="`/launches/${launch.id}/rocket`" exact> Overview </q-item>
      <q-item
        v-if="fairings"
        :to="`/launches/${launch.id}/rocket/fairings`"
        exact
      >
        Fairings
      </q-item>
      <q-item :to="`/launches/${launch.id}/rocket/first-stage`" exact>
        First Stage
      </q-item>
      <q-item :to="`/launches/${launch.id}/rocket/second-stage`" exact>
        Second Stage
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Launch } from 'src/types';
const props = defineProps<{
  launch: Launch;
}>();
const { launch } = $(props);
const fairings = launch.rocket.fairings;
console.log(fairings);
</script>
