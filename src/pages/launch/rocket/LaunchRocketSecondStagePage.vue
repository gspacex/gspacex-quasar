<template>
  <q-page padding>
    <LaunchRocketSecondStageView :stage="stage" />
    <Teleport to="#layout-navbox">
      <LaunchRocketNavbox :launch="launch" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Launch, LaunchRocketSecondStage } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetLaunchRocketSecondStageDocument } from 'src/types';
import LaunchRocketSecondStageView from 'components/launch/rocket/LaunchRocketSecondStageView.vue';
import LaunchRocketNavbox from './LaunchRocketNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = $(
  await useQuery({
    query: GetLaunchRocketSecondStageDocument,
    variables: { id },
  })
);
const launch = data?.launch as Launch;
const stage = data?.launch?.rocket?.second_stage as LaunchRocketSecondStage;
</script>
