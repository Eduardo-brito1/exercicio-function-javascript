const carro = {
    ligado: true,
    velocidade: 0,
    ligar: function ligar() {
        if (this.ligado === true) {
            console.log('este carro esta ligado')
        } else {
            this.ligado = true
        }
        console.log(`carro ligado,velocidade ${this.velocidade}`)
    },
    desligar: function desligar() {
        if (this.ligado === false) {
            return console.log('este carro ja esta desligado')
        } else {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`carro desligado,velocidade ${this.velocidade}`)

        }

    },
    acelerar: function acelerar() {
        if (this.ligado === false) {
            console.log('não e possivel acelerar um carro desligado')
        } else {
            this.velocidade = this.velocidade + 10;
            console.log(`carro ligado,velocidade ${this.velocidade}`)

        }

    },
    desacelerar: function desacelerar() {
        if (this.ligado === false) {
            console.log('Não é possível desacelerar um carro desligado.')
        } else {
            this.velocidade = this.velocidade - 10;
            console.log(`carro ligado,velocidade ${this.velocidade}`)

        }


    }

}
carro.desligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()



