<template>
  <div class="inline-flex border-b border-gray-200 dark:border-gray-700">
    <button
      v-on:click="selectedTab = 1"
      class="h-10 px-4 py-2 -mb-px text-sm text-center bg-transparent border-b-2 sm:text-base whitespace-nowrap focus:outline-none
      text-blue-600 border-blue-500
    ">
        Code
    </button>

    <button
      v-on:click="selectedTab = 2"
      class="h-10 px-4 py-2 -mb-px text-sm text-center  bg-transparent border-b-2 sm:text-base whitespace-nowrap cursor-base focus:outline-none
      text-gray-700 hover:border-gray-400 border-transparent
    ">
        View
    </button>
  </div>
  <div v-show="selectedTab === 1">
    <SourceComponent :code="code" />
  </div>
  <div v-show="selectedTab === 2">
    <slot></slot>
  </div>
</template>

<script>
import SourceComponent from "@/components/SourceComponent.vue";
export default {
  name: "SwitchCodeView",
  components: {
    SourceComponent
  },
  props: {
    code: String
  },
  data() {
    return {
      selectedTab: 1
    }
  }
};
</script>
