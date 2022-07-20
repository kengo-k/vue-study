<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="checkRouteInfo">ルート情報確認</button>
    <button @click="gotoHome">Homeに戻る</button>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
  methods: {
    checkRouteInfo() {
      // this.$routeで現在<route-view>に表示しているコンポーネントのルート情報を取得できる
      console.log(this.$route)
    },
    gotoHome() {
      this.$router.push("/");
    }
  }
}
</script>
