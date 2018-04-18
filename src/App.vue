<template>
  <div id="app">
    <h1>{{titolo}}</h1>
    <!-- menu -->
    <navigation-menu></navigation-menu>

    <b-container>
      <b-row>
        <b-col>
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu';

export default {
  name: 'app',
  components: { NavigationMenu },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
