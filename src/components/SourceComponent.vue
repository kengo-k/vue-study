<template>
  <div v-html="md"/>
</template>

<script>

import { marked } from 'marked'
import prism from 'prismjs'
import "prism-themes/themes/prism-dracula.css"

console.log(prism.languages);

marked.setOptions({
  highlight: function(code, lang) {
    if (prism.languages[lang]) {
      return prism.highlight(code, prism.languages[lang], lang);
    } else {
      return code;
    }
  }
});

const text = `
# hello
\`\`\`js
const x = 5;
\`\`\`
`;

export default {
  name: "SourceComponent",
  data() {
    return {
      md: marked(text)
    }
  }
};
</script>
