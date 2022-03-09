<template>
  <v-app :style="{background: $vuetify.theme.theme.dark.background}">
    <Navbar />
  </v-app>
</template>

<script>
  import Navbar from '../components/Navbar'

  export default {
    name: 'Nii',

    components: {
      Navbar,
    },
  }
</script>
