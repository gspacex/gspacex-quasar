<template>
  <DataTable title="Data" :data="data" />
</template>

<script setup lang="ts">
import { Company } from 'src/types';
import DataTable from 'components/DataTable.vue';

const props = defineProps<{
  company: Company;
}>();
const { company } = $(props);

/*
{
    "_id":{"$oid":"5eb75edc42fea42237d7f3ed"},
    "name":"SpaceX",
    "founder":"Elon Musk",
    "founded":{"$numberInt":"2002"},
    "employees":{"$numberInt":"9500"},
    "vehicles":{"$numberInt":"4"},
    "launch_sites":{"$numberInt":"3"},
    "test_sites":{"$numberInt":"3"},
    "ceo":"Elon Musk",
    "cto":"Elon Musk",
    "coo":"Gwynne Shotwell",
    "cto_propulsion":"Tom Mueller",
    "valuation":{"$numberLong":"74000000000"},
    "headquarters":{"address":"Rocket Road","city":"Hawthorne","state":"California"},
    "links":{
      "website":"https://www.spacex.com/",
      "flickr":"https://www.flickr.com/photos/spacex/",
      "twitter":"https://twitter.com/SpaceX",
      "elon_twitter":"https://twitter.com/elonmusk"
    },
    "summary":"SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets."}
*/

const data = [
  //{ name: 'Name', value: company.name },
  { name: 'Founder', value: company.founder },
  { name: 'Founded', value: company.founded },
  { name: 'Employees', value: company.employees },
  { name: 'Vehicles', value: company.vehicles },
  { name: 'Launch Sites', value: company.launch_sites },
  { name: 'Test Sites', value: company.test_sites },
  { name: 'CEO', value: company.ceo },
  { name: 'CTO', value: company.cto },
  { name: 'COO', value: company.coo },
  { name: 'CTO Propulsion', value: company.cto_propulsion },
  { name: 'Valuation', value: company.valuation },
  //{ name: 'Summary', value: company.summary },
];
</script>
