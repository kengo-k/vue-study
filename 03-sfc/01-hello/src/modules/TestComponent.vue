<template>
  <div class="parent">
    {{message}}
    <div class="child">
      SCSSスタイルテスト
    </div>
  </div>
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
<style scoped lang="scss">
  div {
    color: pink;
    font-size: xx-large;
  }
  .parent {
    .child {
      width: 200px;
      border: 1px solid red;
    }
  }
</style>
