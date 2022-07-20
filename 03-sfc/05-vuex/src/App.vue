<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
    <button @click="setLogin">ログイン名表示</button>
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
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["setLoginUser"]),
    setLogin() {
      this.setLoginUser({ name: "yamada"});
    }
  },
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
