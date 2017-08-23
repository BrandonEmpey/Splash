<template>
  <v-card class="grey lighten-4 elevation-0 login-card">
    <v-card-text>
      <v-container fluid>

        <v-layout row>
          <v-flex xs4>
            <v-subheader></v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-1"
              label="Username"
              id="username"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout row>
          <v-flex xs4>
            <v-subheader></v-subheader>
          </v-flex>
          <v-flex xs8>
            <v-text-field
              name="input-2"
              label="Password"
              id="password"
            ></v-text-field>
          </v-flex>
        </v-layout>

        <div>
          <v-btn small info outline class="button">Login</v-btn>
        </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>

  export default {
    name: 'SerenadeCard',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.login-card{
  width: 25vw;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

}

  .v-card{
    display: flex;
    align-content: center;
    justify-content: center;
    border: 1px black solid;
  }

  .button{
    display: flex;
    justify-content: center;
  }




</style>
