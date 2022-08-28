new Vue({
    el: '#desafio',
    data: {
        nome: 'Piêtro Braga Aquino Júnior',
        idade: '23',
        imagemVue: 'https://br.vuejs.org/images/logo.png'
    },
    methods: {
        numeroRandomico: function() {
            return Math.random()
        },
        idadeVezesTres: function() {
            return this.idade*3 
        }
    }
})