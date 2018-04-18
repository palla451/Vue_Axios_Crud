<template>
  <b-row>
    <b-col>
      <h1>Oroscopo del Giorno dettaglio</h1>
      <b-card v-bind:title="segno"
              style="max-width: 20rem;"
              class="mb-2">
        <p class="card-text">
          {{testo}}
        </p>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log", "error"] }] */
import axios from 'axios';

export default {
  name: 'OroscopoDelGiornoDettaglio',
  data() {
    return {
      segno: this.$route.params.segno.toUpperCase(),
      testo: '',
    };
  },
  mounted() {
    const wsEndPoint = process.env.oroscopiEndPoint
        .replace('[type]', 'giorno')
        .replace('[sign]', this.$route.params.segno.toLowerCase());

    // effettuo la chiamata axios
    axios.get(wsEndPoint)
      .then((response) => {
        console.log(response.data);
        this.testo = response.data.oroscopo[0].testo;
      })
      .catch((error) => { console.log(error); });
  },
};
</script>

<style scoped>

</style>
