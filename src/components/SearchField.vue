<template>
  <v-text-field
    v-model="name"
    outlined
    flat
    solo
    label="Search here..."
    class="rounded"
    type="text"
    color="black--text"
    :prepend-inner-icon="mdiMagnify"
    :loading="loading"
    :hide-details="true"
    @keydown="search"
  >
    <template v-slot:append>
      <v-fade-transition leave-absolute>
        <v-progress-circular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />
      </v-fade-transition>
    </template>
  </v-text-field>
</template>

<script>
  import { mdiMagnify } from '@mdi/js'
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        mdiMagnify,
        loading: false,
        name: '',
      }
    },

    methods: {
      ...mapActions(['searchForArticlesByName']),

      async search () {
        this.loading = true
        await this.searchForArticlesByName(this.name)

        setTimeout(() => {
          this.loading = false
        }, 2000)
      },
    },
  }
</script>
