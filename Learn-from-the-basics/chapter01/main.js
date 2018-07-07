var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue.js',
        items: ['いちご', 'バナナ', 'メロン'],
        handleClick: function(event) {
            alert(event.target);
        },
        show: true
    }
})