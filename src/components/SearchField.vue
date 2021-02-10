<template>
  <v-text-field
    class="rounded"
    outlined
    flat
    label="Search here..."
    type="text"
    color="black--text"
    :prepend-inner-icon="mdiMagnify"
    :loading="loading"
    solo
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
  export default {
    data: function () {
      return {
        mdiMagnify,
        loading: false,
      }
    },
    methods: {
      search: function () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 2000)
      },
    },
  }
</script>
