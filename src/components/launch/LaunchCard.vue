<template>
  <q-card>
    <router-link class="text-h6" :to="`/launches/${launch?.id}`">
      <q-img
        class="rounded-borders"
        style="max-height: 256px"
        v-if="imgSrc"
        :src="imgSrc"
        :ratio="16 / 9"
      />
    </router-link>

    <q-card-section>
      <router-link class="text-h6" :to="`/launches/${launch?.id}`">{{
        launch?.name
      }}</router-link>
      <q-list dense padding>
        <q-item>
          <q-item-section avatar>
            <q-icon name="o_event" size="xs" />
          </q-item-section>
          <q-item-section>
            <div class="text-subtitle2">{{ date }}</div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="o_location_on" size="xs" />
          </q-item-section>
          <q-item-section>
            <div class="text-subtitle2">{{ site_name }}</div>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon name="o_rocket" size="xs" />
          </q-item-section>
          <q-item-section>
            <div class="text-subtitle2">{{ rocket_name }}</div>
          </q-item-section>
        </q-item>
      </q-list>
      <p>{{ launch?.details }}</p>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { Launch } from 'src/types';

const props = defineProps<{
  launch: Launch;
}>();
const { launch } = $(props);
const imgSrc = launch?.links?.flickr?.original?.at(0) as string;
const date = new Date(launch.date_utc).toString();
const site_name = launch.launchpad.name;
const rocket_name = launch.rocket?.name;
</script>
