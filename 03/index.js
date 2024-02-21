
let PreçoTotal = 0
let quantidadeDeProdutos = 0

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function ImprimirResumoDoCarinho() {
        for (let i = 0; i < this.produtos.length; i++) {
            PreçoTotal = PreçoTotal + this.produtos[i].qtd * this.produtos[i].precoUnit / 100
            quantidadeDeProdutos = quantidadeDeProdutos + this.produtos[i].qtd;
        }
        console.log(`
        cliente:${this.nomeDoCliente}
        total de itens:${quantidadeDeProdutos}
        total a pagar:R$${PreçoTotal.toFixed(2)}`)
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

function addProdutoAoCarrinho(carrinho, produto) {
    for (let i = 0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].nome == produto.nome) {
            carrinho.produtos[i].qtd = carrinho.produtos[i].qtd + produto.qtd
            break;
        } else {
            carrinho.produtos.push(produto)
            break;
        }
    }
}

addProdutoAoCarrinho(carrinho, novaBermuda)

console.log(carrinho)
