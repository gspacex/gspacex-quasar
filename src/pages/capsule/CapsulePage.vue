<template>
  <q-page padding>
    <CapsuleView :capsule="capsule" />
    <Teleport to="#layout-navbox">
      <CapsuleNavbox :capsule="capsule" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Capsule } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetCapsuleDocument } from 'src/types';
import CapsuleView from 'components/capsule/CapsuleView.vue';
import CapsuleNavbox from './CapsuleNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = await useQuery({
  query: GetCapsuleDocument,
  variables: { id },
});
const capsule = data.value?.capsule as Capsule;
</script>
