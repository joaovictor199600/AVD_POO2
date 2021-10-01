/* 5) */
class Produtos {
    constructor(
        public _produto: string,
        public _preco: number,
        public _quant: number
    ) { }

    get produto() {
        return this._produto
    }

    get preco() {
        return this._preco
    }

    get quant() {
        return this._quant
    }

    set produto(produto: string) {
        if (produto === '') {
            throw new Error('Produto inválido, preencha o campo!')
        }
        this._produto = produto
    }

    set preco(preco: number) {
        if (preco <= 0) {
            throw new Error('Preço Inválido, coloque um numero maior que 0')
        }
        this._preco = preco
    }

    set quant(quant: number) {
        if (quant <= 0) {
            throw new Error('Quantidade inválida, coloque um numero maior que 0!')
        }
        this._quant = quant
    }

    public calculoDesconto(): number {
        if (this.quant <= 10) {
            return this.preco * 0
        } else if (this.quant >= 11 && this.quant <= 20) {
            return this.preco * 0.10
        } else if (this.quant >= 21 && this.quant <= 50) {
            return this.preco * 0.20
        } else if (this.quant >= 50) {
            return this.preco * 0.25
        } else { }
        return this.quant
    }

    public valorTotal() {
        return (this.preco - this.calculoDesconto()) * this.quant
    }
}

let produtos = new Produtos('notebook', 10, 5)
console.log(`O produto ${produtos.produto} de preço R$${produtos.preco} reais, quantidade comprada
de ${produtos.quant} teve o desconto de ${produtos.calculoDesconto()} e o valor pago foi de ${produtos.valorTotal()}`)

/* try {
    produtos.produto = ''
    console.log(produtos.produto)
} catch(error) {
    console.log(error.message)
}

try {
    produtos.preco = 0
    console.log(produtos.preco)
} catch(error) {
    console.log(error.message)
}

try {
    produtos.quantidade = 0
    console.log(produtos.quantidade)
} catch(error) {
    console.log(error.message)
}
 */