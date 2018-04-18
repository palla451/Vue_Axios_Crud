<template>

      <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">Oroscopi</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <b-nav-item href="#/del-giorno">Oroscopo del Giorno</b-nav-item>
            <b-nav-item href="#/del-mese">Oroscopo del Mese</b-nav-item>
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>

</template>

<script>
    export default {
      name: 'NavigationMenu',
    };
</script>

<style scoped>

</style>
