<template>
  <v-layout>
    <v-flex xs12 sm12 >
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
              :key="n"
            >
              <v-card flat tile>
                <v-card-media
                  :src="require('../assets/PleasureIsland.jpg')" height="45vh"
                >
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
  export default {
    name: 'Portfolio',
    data: () => ({
      size: 'sm',
      items: [
        { text: 'Extra small (1px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' }
      ]
    }),
    props: {
      raised: true,
      hover: true
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  v-card-media{
    border-radius: 30px;
  }

</style>
