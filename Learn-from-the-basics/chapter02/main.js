var app = new Vue({
    el: "#app",
    data: {
        message: {
            value: 'Hello Vue.js!'
        },
        message2: 'Vue.js!!',
        list: ['りんご', 'ばなな', 'おれんじ'],
        num: 1,
        scroll: 0,
        count: 0,

        isChaild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        classObject: {
            child: true,
            'is-active': true
        },
        ok: true,
        name: 'キマイラ',
        items: [
            { id: 1, name: 'スライム', hp: 100 },
            { id: 2, name: 'ゴブリン', hp: 200 },
            { id: 3, name: 'ドラゴン', hp: 500 }
        ],
        list: []
    },
    methods: {
        increment: function(){
            this.count++;
        },
        doAdd: function() {
            let max = this.items.reduce((left, right) => left > right.id ? left : right.id, 0);
            this.items.push({
                id: max + 1,
                name: this.name,
                hp: 500
            })
        },
        doRemove: function(index) {
            this.items.splice(index, 1);
        },
        doAttack: function(index) {
            this.items[index].hp -= 10;
        }
    },
    created: function() {
        // jsonファイルを読み込む
        // chromeだとローカルのjsonファイルは読み込めないらしい（解除できる）
        axios.get('list.json').then(function(response){
            this.list = response.data;
        }.bind(this)).catch(function(e){
            console.error(e);
        });

        // すべての要素に `active` プロパティを追加する
        this.items.forEach(function(item){
            this.$set(item, 'active', false);
        }, this);
    }
})