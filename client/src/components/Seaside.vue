
<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>

      <v-card>
        <v-card-media :src="require('../assets/Seaside.jpg')" height="50vh">
        </v-card-media>
      </v-card>
    </v-flex>
    <h2>$24,000</h2>
  </v-layout>
</template>

<script>

  export default {
    name: 'Seaside',
    data () {
      return {
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        ex1: true,
        ex2: false
      }
    },
    props: {
      hover: true,
      raised: true,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
