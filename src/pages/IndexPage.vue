<template>
  <q-page padding>
    <CompanyView :company="companies[0]" />
  </q-page>
</template>

<script setup lang="ts">
import CompanyView from 'components/company/CompanyView.vue';
import { useQuery } from '@urql/vue';
import { Company, GetCompaniesDocument } from 'src/types';

let offset = $ref(0);
const limit = 10;
const result = await useQuery({
  query: GetCompaniesDocument,
  variables: { offset: $$(offset), limit },
});
let companies: Array<Company> = $ref([]);

const { data } = result.executeQuery({
  variables: { offset: $$(offset), limit },
});
const data_companies = data.value?.companies as [];
for (let node of data_companies) {
  companies.push(node as Company);
}

/*function onLoad(index: number, done: CallableFunction) {
  setTimeout(() => {
    const { data } = result.executeQuery({
      variables: { offset: $$(offset), limit },
    });
    const data_companies = data.value?.companies as [];
    for (let node of data_companies) {
      companies.push(node as Company);
    }
    offset += limit;
    done(data_companies.length < limit);
  });
}*/
</script>
