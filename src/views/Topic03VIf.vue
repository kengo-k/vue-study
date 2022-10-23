<template>

  <div class="border-2 m-4">
    <div v-if="isVisible">何も表示されません</div>
    v-showによる非表示時にはdisplay:noneにより画面に表示されなくなるがv-ifの場合は要素そのものが出力されなくなる。

    <div v-if="status === 404">Not Found</div>
    <div v-else-if="status === 500">Server Error</div>
    <div v-else>Success</div>

    v-if, v-else-if, v-elseは上から順番に並んで記述しなければならない。途中に要素などを追加するとエラーになる。
  </div>

  <div class="max-w-4xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-between">
        <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Design</a>
    </div>

    <div class="mt-2">
        <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">Accessibility tools for designers and developers</a>
        <p class="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
        </p>
    </div>
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
