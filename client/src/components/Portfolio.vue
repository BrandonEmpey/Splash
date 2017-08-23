<template>
  <v-layout>
    <v-flex xs12 sm12>
      <v-card>
        <v-card-actions>
          <v-select label="Size" :items="items" v-model="size"></v-select>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex
              xs4
              v-for="n in 9"
              :key="n">
              <v-card flat tile>
                <v-card-media
                  v-if="pools.length > 0"
                  :src="pools[0].image" height="45vh">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>


    </v-flex>
  </v-layout>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'Portfolio',
    data: () => ({
      size: 'sm',
      items: [
        {text: 'Extra small (1px)', value: 'xs'},
        {text: 'Small (4px)', value: 'sm'},
        {text: 'Medium (8px)', value: 'md'},
        {text: 'Large (16px)', value: 'lg'},
        {text: 'Extra large (24px)', value: 'xl'}
      ],
      pools: [],
    }),
    props: {
      raised: true,
      hover: true
    },
    created ()
    {
      const server = axios.create({
        baseURL: process.env.NODE_ENV === "production" ? '/api' : "http://localhost:3000/api"
      });
      server.get('/pools').then(response =>
      {
        return response.data
      })
        .then(pools =>
        {
          this.pools = pools
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  v-card-media
  {
    border-radius: 30px;
  }

</style>
