<template>
  <q-card class="row">
    <q-card-section class="col-8">
      <router-link class="text-h6" :to="`/capsules/${capsule?.id}`">{{
        name
      }}</router-link>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Maybe, Capsule } from 'src/types';
const props = defineProps<{
  capsule: Maybe<Capsule>;
}>();
const { capsule } = $(props);
const name = capsule?.serial;
</script>
