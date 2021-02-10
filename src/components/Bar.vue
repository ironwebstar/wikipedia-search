<template>
  <v-app-bar
    color="transparent"
    outlined
    elevation="0"
    class="mx-auto"
  >
    <router-link to="/">
      <p
        class="div-box mb-0 centered text-h4"
      >
        Wiki Seach
      </p>
    </router-link>
    <div
      style="display: contents"
    >
      <v-spacer />
      <search-field />
      <v-spacer />
    </div>
  </v-app-bar>
</template>
<script>
  import SearchField from './SearchField.vue'
  export default {
    components: {
      SearchField,
    },
  }
</script>
<style scoped>
.div-box {
  word-break: break-all;
  max-width: 350px;
}
</style>
