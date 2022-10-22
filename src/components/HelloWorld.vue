<template>

  <div class="border-2 m-4">
    <h1>dataの値を画面に表示する</h1>
    <article>
      data()が返したオブジェクトは{{"\{\{ プロパティ名 \}\}"}}で画面に表示することができる。
      <ul>
        <li>テンプレート: Hello, {{"\{\{ name \}\}"}}</li>
        <li>実際の表示: Hello, {{ name }}!!</li>
      </ul>
    </article>

    <h1>dataの値を属性に設定する</h1>
    <article>
      HTML要素の属性にdataの値を設定する場合は上記のような{{"\{\{ プロパティ名 \}\}"}}の構文を使うことができない。
      <div>
        例: {{ '<input type="text" value="\{\{ name \}\}" />' }}
      </div>
      属性にdataの値を設定するにはv-bindを使用する
      <div>
        例: {{ '<input type="text" v-bind:value="name" />' }} <input type="text" v-bind:value="name" />
      </div>
      v-bindを指定する場合は{{ '\{\{ ... \}\}' }}ではなくダブルクオートの中に直接プロパティ名を指定する。固定文字列"name"を入れているわけではないので注意。

      v-bind:xxxを使う場合はさらに省略記法として:xxxと記述することができる。上記の例の場合は、
      例: {{ '<input type="text" :value="name" />' }} <input type="text" :value="name" />

      <br/>
      <input :type="formAttrs.type" :placeholder="formAttrs.placeholder" /> <br/>
      <input v-bind="{type:formAttrs.type, placeholder:formAttrs.placeholder}" /> <br/>
      <input v-bind="formAttrs" /> <br/>

    </article>

  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "Vue",
      formAttrs: {
        placeholder: "your email",
        type: "email" ,
      }
    }
  }
};
</script>
