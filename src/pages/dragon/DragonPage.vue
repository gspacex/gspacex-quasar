<template>
  <q-page>
    <DragonView :dragon="dragon" />
    <Teleport to="#layout-navbox">
      <DragonNavbox :dragon="dragon" />
    </Teleport>
  </q-page>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { Dragon } from 'src/types';
import { useQuery } from '@urql/vue';
import { GetDragonDocument } from 'src/types';
import DragonView from 'components/dragon/DragonView.vue';
import DragonNavbox from './DragonNavbox.vue';

const route = useRoute();

const id = route.params.id as string;

const { data } = await useQuery({
  query: GetDragonDocument,
  variables: { id },
});
const dragon = data.value?.dragon as Dragon;
</script>
