<template>
  <div>
    404<br/>
    <button @click="goHome">戻る</button>
  </div>

</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    }
  }
}
</script>

<style>

</style>
