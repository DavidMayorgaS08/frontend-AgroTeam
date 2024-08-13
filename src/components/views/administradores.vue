<template>
    <div class="app">
        <div class="q-pa-md">
        <q-table title="Planes" :rows="rows" :columns="columns" row-key="name">
          <template v-slot:body-cell-opciones="props">
            <q-btn
              flat
              round
              dense
              icon="edit"
              @click="editRow(props.row)"
            />
            <q-btn
              flat
              round
              dense
              icon="delete"
              @click="deleteRow(props.row)"
            />
          </template>
          <template v-slot:body-cell-estado="props">
            <div class="estados">
              <span v-if="props.row.estado == 1">Activo</span>
              <span v-else>Inactivo</span>
            </div>
          </template>
        </q-table>
      </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
</style>