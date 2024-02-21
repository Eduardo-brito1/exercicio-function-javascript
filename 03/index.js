
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
    },
    addProduto:
        function addProdutoAoCarrinho(produto) {
            for (let i = 0; i < this.produtos.length; i++) {
                if (this.produtos[i].nome == produto.nome) {
                    this.produtos[i].qtd = this.produtos[i].qtd + produto.qtd
                    break;
                } else {
                    this.produtos.push(produto)
                    break;
                }
            }
        }
}




const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


carrinho.addProduto(novaBermuda)
carrinho.addProduto(novoTenis)
carrinho.imprimirResumo()