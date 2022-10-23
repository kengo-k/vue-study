<template>

  <div class="border-2 m-4">
    <div v-if="isVisible">何も表示されません</div>
    v-showによる非表示時にはdisplay:noneにより画面に表示されなくなるがv-ifの場合は要素そのものが出力されなくなる。

    <div v-if="status === 404">Not Found</div>
    <div v-else-if="status === 500">Server Error</div>
    <div v-else>Success</div>

    v-if, v-else-if, v-elseは上から順番に並んで記述しなければならない。途中に要素などを追加するとエラーになる。
  </div>

</template>

<style>
</style>

<script>
export default {
  name: "Topic03VIf",
  data() {
    return {
      isVisible: false,
      status: 200,
    }
  }
};
</script>
