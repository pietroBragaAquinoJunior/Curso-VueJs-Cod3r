new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Alerta!')
        },
        atualizarValor(e) {
            this.valor = e.target.value
        }
    }
})