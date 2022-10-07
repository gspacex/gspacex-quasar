<template>
  <q-page padding>
    <LaunchFairingsView :fairings="fairings" />
    <Teleport to="#layout-navbox">
      <LaunchNavbox :launch="launch" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Launch, LaunchFairings } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetLaunchFairingsDocument } from 'src/types';
import LaunchFairingsView from 'components/launch/fairings/LaunchFairingsView.vue';
import LaunchNavbox from './LaunchNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = await useQuery({
  query: GetLaunchFairingsDocument,
  variables: { id },
});
const launch = data.value?.launch as Launch;
const fairings = data.value?.launch?.fairings as LaunchFairings;
</script>
