<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル: {{title}}</p>
    <p>コンテント: {{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String
  }
}
</script>

<style>

</style>
