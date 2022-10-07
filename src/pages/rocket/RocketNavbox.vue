<template>
  <div class="fit">
    <q-list>
      <q-item-label header>Rocket</q-item-label>
      <q-item :to="`/rocket/${rocket?.id}`" exact> Overview </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { Rocket } from 'src/types';
const props = defineProps<{
  rocket: Rocket;
}>();
const { rocket } = $(props);
</script>
