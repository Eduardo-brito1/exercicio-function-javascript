const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function depositar(valor) {
        this.saldo = valor + this.saldo
        this.historicos.push({
            tipo: 'deposito',
            valor: valor
        })
    }
}

contaBancaria.depositar(1000)
console.log(contaBancaria)