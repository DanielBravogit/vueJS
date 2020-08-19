new Vue({
    el: '#vm',
    data: {
        imagen: 'https://vuejs.org/images/logo.png',
        texto:"Bienvenidos",
        texto2: "<strong>Esto es con directiva html</strong>",
        parrafo: 3,
        mostrar: true,
        paises: [
            {nombre: 'Mexico', idioma: 'español'}, {nombre: 'España',idioma: 'español'}, {nombre: 'Colombia',idioma: 'español'}
        ]
    }
})