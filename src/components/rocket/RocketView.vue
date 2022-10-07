<template>
  <q-carousel
    v-if="images && images.length > 0"
    animated
    v-model="slide"
    v-model:fullscreen="fullscreen"
    arrows
    navigation
  >
    <q-carousel-slide
      v-for="(image, index) in images"
      :name="index"
      :key="index"
      :img-src="image"
    />
    <template v-slot:control>
      <q-carousel-control position="bottom-right" :offset="[18, 18]">
        <q-btn
          push
          round
          dense
          color="white"
          text-color="primary"
          :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="fullscreen = !fullscreen"
        />
      </q-carousel-control>
    </template>
  </q-carousel>

  <div>
    <q-card-section>
      <h1>{{ rocket?.name }}</h1>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ rocket?.description }}
    </q-card-section>
    <q-card-section>
      <RocketTable :rocket="rocket" />
    </q-card-section>
    <q-card-section>
      <RocketEnginesTable :engines="engines" />
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { Rocket, RocketEngines } from 'src/types';
import RocketTable from './RocketTable.vue';
import RocketEnginesTable from './RocketEnginesTable.vue';

const props = defineProps<{
  rocket: Rocket;
}>();
const { rocket } = $(props);
const engines = rocket?.engines as RocketEngines;
const images = rocket?.images;
const slide = $ref(0);
const fullscreen = $ref(false);
</script>
