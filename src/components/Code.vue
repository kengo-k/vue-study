<template>
  <div v-html="getHtml()" />
</template>

<script>
import { marked } from 'marked'
import prism from 'prismjs'
import 'prism-themes/themes/prism-dracula.css'

console.log(prism.languages)

marked.setOptions({
  highlight: function (code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang)
    } else {
      return code
    }
  },
})

export default {
  name: 'Code',
  props: {
    code: String,
    lang: String,
  },
  methods: {
    getHtml() {
      const code = `\`\`\`${this.lang}\n${this.code}\n\`\`\``
      console.log('code:', this.code)
      console.log('lang:', this.lang)
      return marked(code)
    },
  },
}
</script>
