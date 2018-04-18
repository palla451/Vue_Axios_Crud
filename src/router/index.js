import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import OroscopoDelGiorno from '@/components/OroscopoDelGiorno';
import OroscopoDelGiornoDettaglio from '@/components/OroscopoDelGiornoDettaglio';
import OroscopoDelMese from '@/components/OroscopoDelMese';
import OroscopoDelMeseDettaglio from '@/components/OroscopoDelMeseDettaglio';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/del-giorno',
      name: 'OroscopoDelGiorno',
      component: OroscopoDelGiorno,
    },
    {
      path: '/del-giorno/:segno',
      name: 'OroscopoDelGiornoDettaglio',
      component: OroscopoDelGiornoDettaglio,
    },
    {
      path: '/del-mese',
      name: 'OroscopoDelMese',
      component: OroscopoDelMese,
    },
    {
      path: '/del-mese/:segno',
      name: 'OroscopoDelMeseDettaglio',
      component: OroscopoDelMeseDettaglio,
    },
  ],
});
