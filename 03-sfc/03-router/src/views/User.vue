<template>
  <div>ユーザ情報
    <router-link to="profile">プロフィール</router-link>
    <router-link to="post">記事</router-link>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: "UserComponent"
}
</script>

<style>

</style>
