
<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media :src="require('../assets/Sundial.jpg')" height="50vh">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Seaside</h3>
            <div>11' 9" x 23' 9" x 5' 7"</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <!--<v-btn outline class="blue&#45;&#45;text">Share</v-btn>-->
          <!--<v-btn outline class="blue&#45;&#45;text">Explore</v-btn>-->
        </v-card-actions>
        <v-card-text>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

  import VCardMedia from "vuetify/src/components/cards/VCardMedia";

  export default {
    name: 'Sundial',
    data () {
      return {
        snackbar: false,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000
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
