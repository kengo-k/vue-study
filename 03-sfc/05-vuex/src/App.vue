<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    {{$store.state.count}}
    <br/>
    <ul>
      <li v-for="(u, index) in visibleUsers" :key="u.id">
        [{{index}}]: id={{u.id}}, name={{u.name}}
      </li>
    </ul>
    <br/>
    {{getUserById}}
  </div>
</template>

<script>
export default {
  computed: {
    visibleUsers() {
      return this.$store.getters.visibleUsers;
    },
    getUserById() {
      return this.$store.getters.getUserById(2);
    }
  }
};
</script>
