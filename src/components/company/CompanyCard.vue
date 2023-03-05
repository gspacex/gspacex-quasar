<template>
  <q-card class="row">
    <q-card-section class="col-8">
      <router-link class="text-h6" :to="`/companies/${company?.id}`">{{
        name
      }}</router-link>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Maybe, Company } from 'src/types';
const props = defineProps<{
  company: Maybe<Company>;
}>();
const { company } = $(props);
const name = company?.name;
</script>
