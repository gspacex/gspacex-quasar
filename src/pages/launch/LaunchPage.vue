<template>
  <q-page padding>
    <LaunchView :launch="launch" />
    <Teleport to="#layout-navbox">
      <LaunchNavbox :launch="launch" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Launch } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetLaunchDocument } from 'src/types';
import LaunchView from 'components/launch/LaunchView.vue';
import LaunchNavbox from './LaunchNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = $(
  await useQuery({
    query: GetLaunchDocument,
    variables: { id },
  })
);
const launch = data?.launch as Launch;
</script>
