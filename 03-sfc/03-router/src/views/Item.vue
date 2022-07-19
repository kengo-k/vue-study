<template>
  <div>Item
    <router-link to="1">Item1</router-link><br/>
    <router-link to="2">Item2</router-link><br/>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: "ItemComponent",
  created() {
    console.log("created");
  },
  // router-linkでURLを切り替えを行っても描画するコンポーネントが同じ場合
  // (ここではitem/1とitem/2など)ライフサイクルが動かない場合がある
  // たとえばcreatedは最初に作成された場合のみ実行されるので1 → 2に遷移しても呼ばれない
  // そのようなときはwatchで$routeオブジェクト自身を監視することでタイミングを判定できる
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  }
}
</script>

<style>

</style>
