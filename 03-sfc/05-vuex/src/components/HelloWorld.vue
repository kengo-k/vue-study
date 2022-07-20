<template>
  <div>
    <button @click="incrementAction">+1</button>
    <button @click="addCount">+20</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions(["incrementAction", "addCountAction"]),
    // increment() {
    //   this.$store.dispatch("incrementAction");
    // },
    addCount() {
      this.addCountAction({ value: 20 });
    }
  }
}
</script>
