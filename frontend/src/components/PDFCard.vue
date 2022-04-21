<script setup>
  // methods
  const GerarArquivo = async () =>{

  }
</script>

<template>
<div class="row">
  <q-card class="rounded-border q-pa-xl hsize justify-center col-12 text-center">
    <h1 class="text-h3">Gerar Arquivo</h1>
    <q-form ref="form" class="q-gutter-sm q-mt-xl row">
      <q-btn
        rounded
        color="secondary"
        class="col-12"
        size="lg"
        @click="GerarArquivo"
        data-test-button-filtro="Gerar Arquivo"
      >Gerar PDF</q-btn>
    </q-form>
  </q-card>
</div>
</template>

<style scoped>
.hsize {
  height: 500px;
}
.rounded-border{
  border-radius: 25px;
}
</style>

