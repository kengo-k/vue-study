<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-text-field label="本のタイトルを検索" v-model="keyword"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <v-btn
          color="primary"
          @click="search(keyword)">
          検索する
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn
          color="secondary"
          to="/">
          一覧に戻る
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="(book, index) in searchResult" :key="book.index">
        <v-card class="mx-auto">
          <v-row>
            <v-col cols="4">
              <v-img :src="book.image"></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-title>{{book.title}}</v-card-title>
              {{book.description}}
              <v-spacer></v-spacer>
              <v-card-actions>
                <v-btn fab dark color="indigo" @click="addBookList(index)">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "BookSearch",
  data() {
    return {
      keyword: "",
      searchResult: []
    };
  },
  methods: {
    addBookList(index) {
      // MEMO イベント名はケバブケースで書く必要があるらしい
      this.$emit("add-book-list", this.searchResult[index]);
    },
    async search(keyword) {
      this.searchResult = [];
      // クエリストリングを作成
      const params = {
        q: `intitle:${keyword}`,
        maxResult: 40
      };
      const baseUrl = "https://www.googleapis.com/books/v1/volumes?";
      const queryParams = new URLSearchParams(params);
      const response = await
        fetch(baseUrl + queryParams)
        .then(res => res.json())
        ;
      for (let book of response.items) {
        let title = book.volumeInfo.title;
        let img = book.volumeInfo.imageLinks;
        let desc = book.volumeInfo.description;
        this.searchResult.push({
          title: title ? title : "",
          image: img ? img.thumbnail : "",
          description: desc ? desc : ""
        })
      }
    }
  }
}
</script>

<style>

</style>
