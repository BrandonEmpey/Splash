
<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>

      <v-card>
        <v-card-media :src="require('../assets/Seaside.jpg')" height="50vh">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Seaside</h3>
            <div>11' 11" x 27' 10" x 6'</div>
          </div>
        </v-card-title>
        <v-card-actions>
        </v-card-actions>
        <v-card-text>
        </v-card-text>
      </v-card>
      <v-checkbox v-bind:label="`Checkbox 1: ${ex1.toString()}`" v-model="ex1" light color="blue"></v-checkbox>
      <v-checkbox v-bind:label="`Checkbox 2: ${ex2.toString()}`" v-model="ex2" light color =blue"></v-checkbox>
    </v-flex>
  </v-layout>
</template>

<script>

  import VCardMedia from "vuetify/src/components/cards/VCardMedia";

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
      raised: true
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
