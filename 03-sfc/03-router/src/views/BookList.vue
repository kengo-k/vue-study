<template>
  <div>
    <h1>BookList</h1>
    <ul>
      <li @click="showBookDetail(book.id)" v-for="(book,index) in books"  :key="book.id">
        [{{index}}] {{book.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {
      books: [
        { id: 1, title: "title1", content: "content1" },
        { id: 2, title: "title2", content: "content2" },
        { id: 3, title: "title3", content: "content3" }
      ]
    }
  },
  methods: {
    showBookDetail(id) {
      this.bookIndex = id - 1;
      this.$router.push({
        name: "Book",
        params: {
          id: this.books[this.bookIndex].id,
          title: this.books[this.bookIndex].title,
          content: this.books[this.bookIndex].content
        }
      })
    }
  }
}
</script>

<style>

</style>
