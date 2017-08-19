<template>
  <div class="form">
    <form>
      <fieldset>
        <legend>Customer Input</legend>
        Name:<br>
        <input type="text" name="name"><br>
        Width:<br>
        <input type="number" name="width"><br>
        Length:<br>
        <input type="number" name="length"><br>
        Depth:<br>
        <input type="number" name="depth"><br>
        Cost:<br>
        <input type="number" name="cost"><br>
        Profit:<br>
        <input type="number" name="msrp"><br><br>
        <input type="submit" value="Submit">
      </fieldset>
    </form>

    <div class="dbWindow">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CustomerAdd',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  form{
    width: 33vw;
    display: flex;
    justify-content: center;
  }

  .dbWindow{
    border: 1px black solid;
    width: 33vw;
    height: 25vh;
    justify-content center;
    display: flex;
  }
</style>
