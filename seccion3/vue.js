new Vue({
    el: '#vm',
    data: {
        contador: 0,
        x: 0,
        y: 0
    },
    methods: {
        sumaruno: function() {
        this.contador += 1;

        },
        restaruno: function() {
            this.contador -=1;
        },
        alerta: function(mensaje){
            alert(mensaje);
        },
        mostrarUbicacion: function(evento) {
            this.x = evento.clientX;
            this.y = evento.clientY;
        },
        sumar: function(){
            this.contador++;
        }
    }
})