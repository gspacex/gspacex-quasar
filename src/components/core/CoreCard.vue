<template>
  <q-card class="row">
    <q-card-section class="col-8">
      <router-link class="text-h6" :to="`/cores/${core?.id}`">{{
        name
      }}</router-link>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Maybe, Core } from 'src/types';
const props = defineProps<{
  core: Maybe<Core>;
}>();
const { core } = $(props);
const name = core?.serial;
</script>
