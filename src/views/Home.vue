<template>
  <v-app>
    <v-main>
      <bar />
      <div
        v-if="!content"
        class="mt-10 text-center"
      >
        Welcome to our search component!
      </div>
      <div
        v-else
        class="mt-10 text-center"
        v-html="content"
      />
    </v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
  import { mapGetters } from 'vuex'
  import Bar from '@/components/Bar'

  export default {
    name: 'Home',
    components: {
      Bar,
    },

    computed: {
      ...mapGetters(['content']),
    },
  }
</script>
