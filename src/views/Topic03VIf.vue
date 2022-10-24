<template>
  <Card title="v-ifを使用して条件に応じて表示する要素を切り替える">
    <Para>
      v-showを使用して非表示にする場合display:noneにより画面に表示されなくなるがv-ifの場合は要素そのものが出力されなくなる。
    </Para>
    <SwitchCodeView :code="sources.example1" lang="markup">
      <ul>
        <li>visible: {{ visible }}</li>
        <li v-show="visible">display:noneにより非表示になります</li>
        <li v-if="visible">要素自体が出力されず非表示になります</li>
      </ul>
      <button
        v-on:click="toggle('visible')"
        class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        toggle visible
      </button>
      <Para>
        ボタンをクリックするとvisibleのフラグ値を反転します。Developer
        Toolで要素の出力を確認してみましょう
      </Para>
    </SwitchCodeView>
  </Card>

  <Card title="v-ifを使用して条件分岐で表示内容を出しわける">
    <Para> v-if, v-else-if, v-elseを使い条件分岐を行うことができる。 </Para>
    <SwitchCodeView :code="sources.example2" lang="markup">
      <div v-if="status === 404">Not Found</div>
      <div v-else-if="status === 500">Server Error</div>
      <div v-else>Success</div>
      <Para>
        条件にマッチしたdivだけが出力されます。注意点として v-if, v-else-if,
        v-elseは上から順番に並んで記述しなければならない。途中に要素などを追加するとエラーになる。
      </Para>
    </SwitchCodeView>
  </Card>
</template>

<style></style>

<script>
import Card from '@/components/Card.vue'
import Para from '@/components/Para.vue'
import SwitchCodeView from '@/components/SwitchCodeView.vue'

const sources = {
  example1: `
<ul>
  <li>visible: {{ visible }}</li>
  <li v-show="visible">display:noneにより非表示になります</li>
  <li v-if="visible">要素自体が出力されず非表示になります</li>
</ul>
`,
  example2: `
<div v-if="status === 404">Not Found</div>
<div v-else-if="status === 500">Server Error</div>
<div v-else>Success</div>
`,
}

const switches = {
  example1: true,
}

export default {
  name: 'Topic03VIf',
  components: { Card, Para, SwitchCodeView },
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
    },
  },
}
</script>
