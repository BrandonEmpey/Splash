<template>
  <div class="form">
    <form method="post">
      <fieldset>
        <legend>Swimming Pool Input</legend>
        Owner Name:<br>
        <input type="text" name="owner"><br>
        Name:<br>
        <input type="text" name="name"><br>
        Width:<br>
        <input type="text" name="width"><br>
        Length:<br>
        <input type="text" name="length"><br>
        Depth:<br>
        <input type="text" name="depth"><br>
        Cost:<br>
        <input type="number" name="cost"><br>
        Profit:<br>
        <input type="number" name="msrp"><br>
        <br>
        Image:<br>
        <input type="number" name="image"><br><br>
        <h5 class="msrp">Final Price:</h5>
        <input type="submit" value="Add" v-bind="pools">
      </fieldset>
    </form>

    <div class="dbWindow">
    </div>
  </div>
</template>

<script>

    export default {
      name: 'PoolAdd',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>



</style>
