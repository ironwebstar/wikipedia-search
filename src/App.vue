<template>
  <v-app>
    <v-main>
      <bar v-model="drawer" />
      <div class="mt-10 text-center">
        Welcome to our search component!
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import Vue from 'vue'
  import Bar from './components/Bar.vue'

  export default Vue.extend({
    name: 'App',
    components: {
      Bar,
    },
  })
</script>
<style scoped>
h1 {
  text-align: left !important;
}
</style>
