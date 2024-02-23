const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function depositar(valor) {
        valor = valor / 10
        this.saldo = this.saldo + valor

        this.historicos.push({
            tipo: 'deposito',
            valor: valor
        })
        console.log(`Deposito de R$ ${valor.toFixed(2)} realizado para o cliente: Maria`)
    },
    sacar: function sacar(valor) {
        valor = valor / 10

        if (valor > this.saldo) {
            return console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else {
            console.log(this.saldo)
            this.saldo = this.saldo - valor
            this.historicos.push({
                tipo: 'saque',
                valor: valor
            })
            console.log(`Saque de R${valor.toFixed(1)}$ realizado para o cliente: Maria`)

        }
    },
    extrato: function extrato() {

        let historicoDeposito = 0
        let historicoSaque = 0
        for (let i = 0; i < this.historicos.length; i++) {
            if (this.historicos[i].tipo == 'deposito') {
                historicoDeposito = this.historicos[i].valor
            } else {
                historicoSaque = this.historicos[i].valor
            }

        }
        console.log(`extrato de ${this.nome} - Saldo:R$ ${this.saldo}
        Histórico:
        Depósito de $ ${historicoDeposito}
        Saque de $ ${historicoSaque}
        `)

    }

}


contaBancaria.depositar(1000)
contaBancaria.sacar(500)
contaBancaria.extrato()
console.log(contaBancaria)
