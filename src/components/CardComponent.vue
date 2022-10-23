<template>
  <div class="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div class="flex items-center justify-between">
        <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">v-if</a>
    </div>
    <div class="mt-2">
      <a href="#" class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">
        {{ title }}
      </a>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "CardComponent",
  props: {
    title: String
  },
  data() {
    return {
    }
  }
};
</script>
