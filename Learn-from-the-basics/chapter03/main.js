var app = new Vue({
    el: "#app",
    data: {
        count: 0,
        show: false,
        message: 'Hello!',
        val: true,
        val2: 'yes',
        val3: [],
        val4: [],
        val5: '',
        val6: [],
        preview: '',
        price: 100,
        scrollY: 0,
        timer: null
    },
    created: function() {
        // ハンドラを登録
        window.addEventListener('scrolle', this.handleScroll)
    },
    beforeDestory: function() {
        // ハンドラを解除
        window.removeEventListener('scrolle', this.handleScroll)
    },
    methods: {
        handleScroll: function() {
            console.log(this.scrollY)
            if (this.timer === null) {
                this.timer = setTimeout(function(){
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null
                }.bind(this), 200)
            }
        },
        clickHandler: function() {
            alert("クリックされました！")
        },
        eventHandler: function(event) {
            alert(event)
        },
        handle: function(comment) {
            console.log(comment)
        },
        handleChange: function(event) {
            var file = event.target.files[0];
            if (file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        }
    }
})