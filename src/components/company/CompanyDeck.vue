<template>
  <div class="card-column">
    <CompanyCard
      v-for="company in companies"
      :key="(company.id as string)"
      :company="company"
    />
  </div>
</template>

<script setup lang="ts">
import CompanyCard from './CompanyCard.vue';
import { Company } from 'src/types';

const props = defineProps<{
  companies?: Array<Company>;
}>();
const { companies } = $(props);
</script>
