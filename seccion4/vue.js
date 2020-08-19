new Vue({
    el: '#vm',
    data: {
        titulo: "Lista de Tareas",
        tareas: [
            {
                texto: "aprender vue", terminada: false
            },
            {
                texto: "aprender angular", terminada: false
            },
            {
                texto: "aprender react", terminada: false
            }
        ],
        nuevatarea: ''

        
    },
    methods: {
        agregarTarea: function() {
            var texto = this.nuevatarea.trim();
            if(texto){
                this.tareas.push({
                    texto: texto,
                    terminada: false
                })
            }
            this.nuevatarea='';
        },
        borrar: function(indice){
            this.tareas.splice(indice,1);
        }
    }
})