var app = new Vue ( {
    el: '.vue',
    data: {
        mensaje: 'Aprende Vue.js Facilmente',
        src: 'https://vuejs.org/images/logo.png'
    },
    methods: {
        mostrarMensaje: function() {
            return 'Aprende Vue.js facilmente - MM'
        }
    }
})