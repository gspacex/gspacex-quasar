<template>
  <div>
    <q-card-section>
      <h1>{{ company?.name }}</h1>
    </q-card-section>
    <q-card-section class="q-pt-none">
      {{ company?.summary }}
    </q-card-section>
    <q-card-section class="q-pt-none">
      <h2>Links</h2>
      Website:
      <a :href="websiteLink">{{ websiteLink }}</a>
    </q-card-section>
    <q-card-section class="q-pt-none">
      Flickr:
      <a :href="flickrLink">{{ flickrLink }}</a>
    </q-card-section>
    <q-card-section class="q-pt-none">
      Twitter:
      <a :href="twitterLink">{{ twitterLink }}</a>
    </q-card-section>
    <q-card-section class="q-pt-none">
      Elon Musk Twitter:
      <a :href="elonTwitterLink">{{ elonTwitterLink }}</a>
    </q-card-section>
    <q-card-section>
      <CompanyDataTable :company="company" />
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { Company } from 'src/types';
import CompanyDataTable from './CompanyDataTable.vue';

const props = defineProps<{
  company: Company;
}>();
const { company } = $(props);
const websiteLink = company.links.website;
const flickrLink = company.links.flickr;
const twitterLink = company.links.twitter;
const elonTwitterLink = company.links.elon_twitter;
</script>
