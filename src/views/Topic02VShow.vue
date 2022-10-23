<template>
  <div class="border-2 m-4">
    <div v-show="isVisible1">
      isVisible1がtrueの場合このテキストが表示されます
    </div>
    <div v-show="!isVisible2">
      isVisible2がfalseの場合このテキストが表示されます
    </div>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'Topic02VShow',
  data() {
    return {
      isVisible1: true,
      isVisible2: false,
    }
  },
}
</script>
