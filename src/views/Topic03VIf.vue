<template>

  <div class="border-2 m-4">
    <div v-if="isVisible">何も表示されません</div>
    v-showによる非表示時にはdisplay:noneにより画面に表示されなくなるがv-ifの場合は要素そのものが出力されなくなる。

    <div v-if="status === 404">Not Found</div>
    <div v-else-if="status === 500">Server Error</div>
    <div v-else>Success</div>

    v-if, v-else-if, v-elseは上から順番に並んで記述しなければならない。途中に要素などを追加するとエラーになる。
  </div>

  <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-between">
        <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">v-if</a>
    </div>
    <div class="mt-2">
      <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">
        v-ifを使用して条件に応じて表示する要素を切り替える
      </a>
      <p class="mt-2 text-gray-600 dark:text-gray-300">
        v-showを使用して非表示にする場合display:noneにより画面に表示されなくなるがv-ifの場合は要素そのものが出力されなくなる。
      </p>

      <div class="inline-flex border-b border-gray-200 dark:border-gray-700">

        <button
          v-on:click="switches.example1 = true"
          class="h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none
          text-blue-600 border-blue-500
        ">
            Code
        </button>

        <button
          v-on:click="switches.example1 = false"
          class="h-10 px-4 py-2 -mb-px text-sm text-center  bg-transparent border-b-2 sm:text-base whitespace-nowrap cursor-base focus:outline-none
          text-gray-700 hover:border-gray-400 border-transparent
        ">
            View
        </button>
      </div>
      <div v-show="switches.example1">
        <SourceComponent :code="sources.example1" />
      </div>
      <div v-show="!switches.example1">
        <div v-show="visible">display:noneにより非表示になります</div>
        <button
          v-on:click="toggle('visible')"
          class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          toggle visible
        </button>
      </div>
    </div>
</div>

</template>

<style>
</style>

<script>
import SourceComponent from "@/components/SourceComponent.vue";

const sources = {
  example1: `
\`\`\`markup
  <div v-show="visible">display:noneにより非表示になります</div>
\`\`\`
`
};

const switches = {
  example1: true
}

export default {
  name: "Topic03VIf",
  components: { SourceComponent },
  data() {
    return {
      visible: true,
      status: 200,
      sources,
      switches,
    }
  },
  methods: {
    // 任意のbool値のトグルする
    toggle(key) {
      this[key] = !this[key]
    }
  }
};
</script>
