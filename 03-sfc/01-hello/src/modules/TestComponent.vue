<template>
  <div>{{message}}</div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      message: "Hello Vue SFC!"
    }
  }
}
</script>

// divタグに対しグローバルにcssを適用してしまう
<style>
  div {
    color: blue;
  }
</style>

// scopedを指定することでこのコンポーネント内に閉じたスタイルを定義できる
<style scoped>
  div {
    color: pink;
    font-size: xx-large;
  }
</style>
