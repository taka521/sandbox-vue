var app = new Vue({
    el: "#app",
    data: {
        count: 0,
        show: false
    },
    methods: {
        clickHandler: function() {
            alert("クリックされました！")
        },
        eventHandler: function(event) {
            alert(event)
        }
    }
})