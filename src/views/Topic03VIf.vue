<template>

  <div class="border-2 m-4">
    <div v-if="isVisible">何も表示されません</div>
    v-showによる非表示時にはdisplay:noneにより画面に表示されなくなるがv-ifの場合は要素そのものが出力されなくなる。

    <div v-if="status === 404">Not Found</div>
    <div v-else-if="status === 500">Server Error</div>
    <div v-else>Success</div>

    v-if, v-else-if, v-elseは上から順番に並んで記述しなければならない。途中に要素などを追加するとエラーになる。
  </div>

  <CardComponent title="v-ifを使用して条件に応じて表示する要素を切り替える">
    <ParagraphComponent>
      v-showを使用して非表示にする場合display:noneにより画面に表示されなくなるがv-ifの場合は要素そのものが出力されなくなる。
    </ParagraphComponent>
    <SwitchCodeView :code="sources.example1">
      <div v-show="visible">display:noneにより非表示になります</div>
      <button
        v-on:click="toggle('visible')"
        class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        toggle visible
      </button>
    </SwitchCodeView>
  </CardComponent>

</template>

<style>
</style>

<script>
import CardComponent from "@/components/CardComponent.vue";
import ParagraphComponent from "@/components/ParagraphComponent.vue";
import SwitchCodeView from "@/components/SwitchCodeView.vue";

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
  components: { CardComponent, ParagraphComponent, SwitchCodeView },
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
