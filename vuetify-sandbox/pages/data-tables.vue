<template>
  <v-layout column>
    <h3>なにもしない</h3>
    <v-data-table :headers="headers" :items="items" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.no }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.age }}</td>
        <td class="text-xs-right">{{ props.item.gender }}</td>
      </template>
    </v-data-table>

    <br>
    <h3>入力された文字で検索（全ての項目が対象）</h3>
    <v-text-field v-model="search" label="検索文字" append-icon="search"/>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :filter="simpleFilter"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.no }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.age }}</td>
        <td class="text-xs-right">{{ props.item.gender }}</td>
      </template>
    </v-data-table>

    <h3>カスタムフィルタ</h3>
    <v-flex>
      <v-select :items="headers" label="Standard" v-model="selectFeald"></v-select>
      <v-text-field v-model="customSearch" label="検索文字" append-icon="search"/>
    </v-flex>
    <!-- カスタムフィルタは、searchの値をウォッチしてフィルタリング関数を実行しているっぽい -->
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :custom-filter="customFilter"
      :search="filterCondition.toString()"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.no }}</td>
        <td class="text-xs-right">{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.age }}</td>
        <td class="text-xs-right">{{ props.item.gender }}</td>
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "No", value: "no" },
        { text: "名前", value: "name" },
        { text: "年齢", value: "age" },
        { text: "性別", value: "gender" }
      ],
      items: [
        { no: 1, name: "田中", age: 30, gender: "男" },
        { no: 2, name: "松本", age: 28, gender: "男" },
        { no: 3, name: "小松", age: 19, gender: "女" },
        { no: 4, name: "山崎", age: 42, gender: "男" },
        { no: 5, name: "新垣", age: 31, gender: "女" }
      ],
      search: null,
      selectFeald: null,
      customSearch: null,
      filterCondition: { field: null, value: null }
    };
  },
  methods: {
    simpleFilter(val, search) {
      return val.toString().toLowerCase() === search;
    },

    // カスタムフィルタは、3つの引数をとる。
    //   items  -> 1行のデータ
    //   search -> 検索文字
    //   filter -> 登録されているfilter関数
    // 戻り値は、テーブルに表示する1レコード分のオブジェクト。
    customFilter(items, search, filter) {
      console.log("カスタムフィルタ!")
      if (!this.filterCondition.field || !this.filterCondition.value) return items;

      return items.filter(item => {
        console.log(item);
        return (
          item[this.filterCondition.field]
            .toString()
            .toLowerCase()
            .indexOf(this.filterCondition.value) !== -1
        );
      });
    }
  },
  watch: {
    selectFeald: function(val) {
      this.filterCondition.field = val;
      console.log(this.filterCondition);
    },
    customSearch: function(val) {
      this.filterCondition.value = val;
      console.log(this.filterCondition);
    }
  }
};
</script>
