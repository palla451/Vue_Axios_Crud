<template>
  <div>
    <h1>{{segno}}</h1>
    <ul>
      <li v-for="sezione in sezioni" v-bind:key="sezione">
        <div role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion1 variant="info">{{sezione.label}}</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{sezione.testo}}
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </li>
    </ul>
  </div>

</template>


<script>
  /* eslint no-console: ["error", { allow: ["log", "error"] }] */
  import axios from 'axios';

  export default {
    name: 'OroscopoDelMeseDettaglio',
    data() {
      return {
        segno: this.$route.params.segno.toUpperCase(),
        sezioni: '',
        testo: '',
      };
    },
    mounted() {
      const wsEndPoint = process.env.oroscopiEndPoint
        .replace('[type]', 'mese')
        .replace('[sign]', this.$route.params.segno.toLowerCase());

      // effettuo la chiamata axios
      axios.get(wsEndPoint)
        .then((response) => {
          console.log(response.data);
          this.sezioni = response.data.oroscopo[0].sezioni;
        })
        .catch((error) => { console.log(error); });
    },
  };
</script>

<style scoped>
  ul li {
    list-style: none;
  }
</style>
