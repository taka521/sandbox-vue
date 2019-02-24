<template>
  <div>
    <p>{{ status ? 'on' : 'off'}}</p>
    <button type="button" @click="status = !status">toggle</button>
  </div>
</template>

<script>
  export default {
    name: "AppToggleButton",
    data() {
      return {
        status: false
      };
    }
  };
</script>

<style scoped>

</style>
