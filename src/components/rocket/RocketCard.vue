<template>
  <q-card>
    <router-link :to="`/rockets/${rocket?.id}`">
      <q-img
        class="rounded-borders"
        style="max-height: 256px"
        v-if="imgSrc"
        :src="imgSrc"
        :ratio="16 / 9"
      />
    </router-link>
    <q-card-section>
      <router-link class="text-h6" :to="`/rockets/${rocket?.id}`">{{
        rocket?.name
      }}</router-link>
      <p>{{ rocket?.description }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Maybe, Rocket } from 'src/types';
const props = defineProps<{
  rocket: Maybe<Rocket>;
}>();
const { rocket } = $(props);
const imgSrc = rocket?.images?.at(0) as string;
</script>
