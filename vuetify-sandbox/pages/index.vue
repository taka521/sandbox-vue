<template>
  <v-layout column justify-center align-center>
    <h1>Vuetify道場</h1>
    <br/>
    <v-expansion-panel>
      <v-expansion-panel-content v-for="item in items" :key="item.id">
        <div slot="header">{{item.name}}</div>
        <v-card>
          <v-card-text>
            <p>{{ item.description }}</p>リンク：
            <nuxt-link :to="item.link">ページへ</nuxt-link>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          name: "データテーブル",
          link: "/data-tables",
          description: "データテーブルを使ったサンプルや絞り込み機能を試した"
        }
      ]
    };
  },
  mounted() {
    console.log(typeof window.bubbly());
  }
};
</script>
