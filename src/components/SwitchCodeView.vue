<template>
  <div class="inline-flex border-b border-gray-200 dark:border-gray-700">
    <button v-on:click="switchTab(1)" :class="viewClass">Code</button>

    <button v-on:click="switchTab(2)" :class="codeClass">View</button>
  </div>
  <div v-show="selectedTab === 1">
    <Code :code="code" :lang="lang" />
  </div>
  <div v-show="selectedTab === 2">
    <Card title="実行結果">
      <slot></slot>
    </Card>
  </div>
</template>

<script>
const buildClass = (classes) => {
  const clsObj = {}
  for (const cls of classes) {
    clsObj[cls] = true
  }
  return clsObj
}
const baseClasses = [
  'h-10',
  'px-4',
  'py-2',
  '-mb-px',
  'text-sm',
  'text-center',
  'bg-transparent',
  'border-b-2',
  'sm:text-base',
  'whitespace-nowrap',
  'focus:outline-none',
]
const baseClass = buildClass(baseClasses)
const activeClass = Object.assign(
  {},
  baseClass,
  buildClass(['text-blue-600', 'border-blue-500'])
)
const inactiveClass = Object.assign(
  {},
  baseClass,
  buildClass(['text-gray-700', 'hover:border-gray-400', 'border-transparent'])
)
import Code from '@/components/Code.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'SwitchCodeView',
  components: {
    Code,
    Card,
  },
  props: {
    code: String,
    lang: String,
  },
  data() {
    return {
      selectedTab: 1,
      viewClass: activeClass,
      codeClass: inactiveClass,
    }
  },
  methods: {
    switchTab(tabIndex) {
      if (tabIndex === 1) {
        this.selectedTab = tabIndex
        this.viewClass = activeClass
        this.codeClass = inactiveClass
      }
      if (tabIndex === 2) {
        this.selectedTab = tabIndex
        this.viewClass = inactiveClass
        this.codeClass = activeClass
      }
    },
  },
}
</script>
