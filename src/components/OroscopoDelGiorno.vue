<template>
  <div>
    <h1>Oroscopo del Giorno</h1>
    <b-list-group>
      <b-list-group-item v-for="segno in elencoSegni" v-bind:key="segno">
        <router-link :to="{'name':'OroscopoDelGiornoDettaglio',params:{'segno':segno}}">
          {{segno}}
        </router-link>
      </b-list-group-item>

      <b-list-group-item v-for="segno in elencoSegniGlobal" v-bind:key="segno">
        <router-link :to="{'name':'OroscopoDelGiornoDettaglio',params:{'segno':segno}}">
          {{segno}}
        </router-link>
      </b-list-group-item>
    </b-list-group>
  </div>

</template>

<script>
    export default {
      name: 'OroscopoDelGiorno',
      data() {
        return {
          elencoSegni: process.env.elencoSegni,
          elencoSegniGlobal: this.$root.elencoSegniGlobal,
        };
      },
    };
</script>

<style scoped>

</style>
