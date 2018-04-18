<template>
  <div>
    <h1>Oroscopo del Mese</h1>
    <b-list-group>
      <b-list-group-item v-for="segno in elencoSegni" v-bind:key="segno">
        <router-link :to="{'name':'OroscopoDelMeseDettaglio',params:{'segno':segno}}">
          {{segno}}
        </router-link>
      </b-list-group-item>

      <b-list-group-item v-for="segno in elencoSegniGlobal" v-bind:key="segno">
        <router-link :to="{'name':'OroscopoDelMeseDettaglio',params:{'segno':segno}}">
          {{segno}}
        </router-link>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
    export default {
      name: 'OroscopoDelMese',
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
