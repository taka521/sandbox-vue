var app = new Vue({
    el: "#app",
    data: {
        width: 800,
        height: 600,

        bugget: 300,
        limit: 2,
        list: [
            { id: 1, name: 'りんご', price: 100 },
            { id: 2, name: 'ばなな', price: 200 },
            { id: 3, name: 'いちご', price: 300 },
            { id: 4, name: 'おれんじ', price: 400 },
            { id: 5, name: 'めろん', price: 500 },
        ],
        order: false,
        // GitHubからリポジトリ一覧を取得する
        list: [],
        current: '',
        topics: [
            {value: 'vue', name: `Vue.js`},
            {value: 'JQuery', name: 'jQuery'}
        ],
        // フィルタ
        price: 198000
    },
    computed: {
        // 算出プロパティ「halfWidth」を定義
        // computedで定義した関数は、Vueインスタンスの初期化時に、内部でVueインスタンスのプロパティとして定義される。
        halfWidth: {
            // haflWIdthのゲッター
            get: function() {
                return this.width / 2
            },
            // halfWidthのセッター
            set: function(val) {
                this.width = val * 2
            }
        },
        halfHeight: function() {
            return this.height / 2
        },
        // 「width * height」の中心座標をオブジェクトで返す
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        computedData: function() {
            return Math.random();
        },
        matched: function() {
            return this.list.filter(function(el){
                return el.price <= this.bugget
            }, this);
        },
        limited: function() {
            return this.sorted.slice(0, this.limit);
        },
        sorted: function() {
            // orderByはライブラリ「lodash」の関数
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        }
    },
    methods: {
        methodsData: function() {
            return Math.random();
        }
    },
    watch: {
        current: function(val) {
            axios.get('https://api.github.com/search/repositories', {
                params: { q: 'topic:' + val }
            }).then(function(response){
                this.list = response.data.items
            }.bind(this))
        }
    },
    filters: {
        localeNum: function(val) {
            return val.toLocaleString()
        }
    }
})