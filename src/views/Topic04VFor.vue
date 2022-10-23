<template>

  <div class="border-2 m-4">
    <ul>
      <li v-for="name in names" :key="name">
        name is {{ name }}
      </li>
    </ul>

    v-for="item in items"で配列itemsから要素を先頭から取り出しながらループする。
    inではなくofでも動作する

    <ul>
      <li v-for="name of names" :key="name">
        name is {{ name }}
      </li>
    </ul>

    値を取り出すとき指定する要素の変数に続けて2番目の変数を指定するとインデックスを受け取ることができる。
    <ul>
      <li v-for="(name, i) of names" :key="name">
        name[{{ i }}] is {{ name }}
      </li>
    </ul>

    配列だけでなくオブジェクトの要素でループすることもできる。引数は最大で三つまで取れる。先頭から順に、値、名前、インデックスとなる。
    <ul>
      <li v-for="(value, key, i) in bookInfo" :key="i">
        {{ i }}: {{ key }} = {{ value }}
      </li>
    </ul>

    <SourceComponent />

  </div>

</template>

<script>

import SourceComponent from "@/components/SourceComponent.vue";

// const text = `
// # hello
// \`\`\`js
// const x = 5;
// \`\`\`
// `;

export default {
  name: "Topic04VFor",
  components: { SourceComponent },
  data() {
    return {
      names: ["Yamada", "Tanaka", "Suzuki"],
      bookInfo: {
        title: "Vue Basics",
        author: "Yamada Taro",
        price: 2980
      }
    }
  }
};
</script>

<style>
</style>
