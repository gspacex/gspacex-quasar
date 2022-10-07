<template>
  <q-page padding>
    <CoreView :core="core" />
    <Teleport to="#layout-navbox">
      <CoreNavbox :core="core" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Core } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetCoreDocument } from 'src/types';
import CoreView from 'components/core/CoreView.vue';
import CoreNavbox from './CoreNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = await useQuery({
  query: GetCoreDocument,
  variables: { id },
});
const core = data.value?.core as Core;
</script>
