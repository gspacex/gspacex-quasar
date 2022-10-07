<template>
  <q-page padding>
    <LaunchRocketFirstStageView :stage="stage" />
    <Teleport to="#layout-navbox">
      <LaunchRocketNavbox :launch="launch" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Launch, LaunchRocketFirstStage } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetLaunchRocketFirstStageDocument } from 'src/types';
import LaunchRocketFirstStageView from 'components/launch/rocket/LaunchRocketFirstStageView.vue';
import LaunchRocketNavbox from './LaunchRocketNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = await useQuery({
  query: GetLaunchRocketFirstStageDocument,
  variables: { id },
});
const launch = data.value?.launch as Launch;
const stage = data.value?.launch?.rocket?.first_stage as LaunchRocketFirstStage;
</script>
