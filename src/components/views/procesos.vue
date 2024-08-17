<template>
  <div class="app">
    <div class="q-pa-md">
      <q-table :rows="rows" :columns="columns" row-key="name" />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useProcesosStore} from "../../stores/Procesos.js";

let useProcesos = useProcesosStore();

let r = null;

let rows = ref([]);
let columns = ref([])
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin-top: 90px;
}
</style>