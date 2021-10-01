/* 4) */

class Vendedores {
    public _nome: string;
    public _salario: number;
    public _valor_venda: number;

    constructor(nome: string, salario: number, valor_venda: number) {
        this._nome = nome,
            this._salario = salario,
            this._valor_venda = valor_venda
    }

    get nome() {
        return this._nome
    }

    get salario() {
        return this._salario
    }

    get valor_venda() {
        return this._valor_venda
    }

    set nome(nome: string) {
        if (nome === '') {
            throw new Error('Nome inválido, preencha o campo!')
        }
        this._nome = nome
    }

    set salario(salario: number) {
        if (salario === 0) {
            throw new Error('Salário inválido, preencha o campo!')
        }
        this._salario = salario
    }

    set valor_venda(valor_venda: number) {
        if (valor_venda === 0) {
            throw new Error('Valor de venda inválido, preencha o campo!')
        }
        this._valor_venda = valor_venda
    }

    public desconto() {
        return this.salario * 0.08
    }
}

class Vendedor_PF extends Vendedores {
    static REGIOES = ['sul', 'sudeste', 'centro-oeste', 'norte', 'nordeste']
    public _regiao: string;

    constructor(nome: string, salario: number, valor_venda: number, regiao: string) {
        super(nome, salario, valor_venda)
        this._regiao = regiao
    }

    get regiao() {
        return this._regiao
    }

    set regiao(regiao: string) {
        if (!Vendedor_PF.REGIOES.includes(regiao)) {
            throw new Error('Região Inválida!')
        }
        this._regiao = regiao
    }

    public comissao() {
        if (this.regiao === 'sul') {
            return this.valor_venda * 0.10
        } else if (this.regiao === 'sudeste') {
            return this.valor_venda * 0.12
        } else if (this.regiao === 'centro-oeste') {
            return this.valor_venda * 0.14
        } else if (this.regiao === 'norte') {
            return this.valor_venda * 0.15
        } else if (this.regiao === 'nordeste') {
            return this.valor_venda * 0.17
        } else { }
    }

    public salarioTotal() {
        if (this.regiao === 'sul') {
            return this.valor_venda * 0.10 + this.salario
        } else if (this.regiao === 'sudeste') {
            return this.valor_venda * 0.12 + this.salario
        } else if (this.regiao === 'centro-oeste') {
            return this.valor_venda * 0.14 + this.salario
        } else if (this.regiao === 'norte') {
            return this.valor_venda * 0.15 + this.salario
        } else if (this.regiao === 'nordeste') {
            return this.valor_venda * 0.17 + this.salario
        } else { }
    }
}

class Pessoajuridica extends Vendedores {
    public _nome_empresa: string;
    public _total_func: number;

    constructor(nome: string, salario: number, valor_venda: number, nome_empresa: string, total_func: number) {
        super(nome, salario, valor_venda)
        this._nome_empresa = nome_empresa
        this._total_func = total_func
    }

    get nome_empresa() {
        return this._nome_empresa
    }

    get total_func() {
        return this._total_func
    }

    set nome_empresa(nome_empresa: string) {
        if (nome_empresa === '') {
            throw new Error('Nome da empresa inválido, preencha o campo!')
        }
        this._nome_empresa = nome_empresa
    }

    set total_func(total_func: number) {
        if (total_func === 0) {
            throw new Error('Total de funcionários inválido, preencha o campo!')
        }
        this._total_func = total_func
    }

    public comissaoPJ(): number {
        if (this.valor_venda < 5000) {
            return this.valor_venda * 0.02
        } else if (this.valor_venda >= 5000 && this.valor_venda < 10000) {
            return this.valor_venda * 0.04
        } else if (this.valor_venda >= 10000) {
            return this.valor_venda * 0.06
        } else { }
        return this.valor_venda
    }

    public salarioTotalPJ() {
        if (this.total_func < 100) {
            return this.comissaoPJ() + this.salario + 200
        } else if (this.total_func >= 100) {
            return this.comissaoPJ() + this.salario + 300
        } else { }
    }
}


let vendedores = new Vendedores('João', 10000, 500)
let vendedorpf = new Vendedor_PF('Pedro', 20000, 3000, 'nordeste')
let pessoajuridica = new Pessoajuridica('Josefina', 20000, 4000, 'Google', 100)


console.log(`Desconto: ${vendedores.desconto()}`)

console.log(`Comissão pela região: ${vendedorpf.comissao()}`)
console.log(`Salário total: ${vendedorpf.salarioTotal()}`)
console.log(`Comissão pelo valor de venda: ${pessoajuridica.comissaoPJ()}`)
console.log(`Salário total pelo total de funcionários: ${pessoajuridica.salarioTotalPJ()}`)

/* try {
    vendedores.nome = ''
    console.log(vendedores.nome)
} catch(error) {
    console.log(error.message)
}

try {
    vendedores.salario = 0
    console.log(vendedores.salario)
} catch(error) {
    console.log(error.message)
}

try {
    vendedores.valor_venda = 0
    console.log(vendedores.valor_venda)
} catch(error) {
    console.log(error.message)
}

try {
    vendedorpf.regiao = ''
    console.log(vendedorpf.regiao)
} catch(error) {
    console.log(error.message)
}

try {
    pessoajuridica.nome_empresa = ''
    console.log(pessoajuridica.nome_empresa)
} catch(error) {
    console.log(error.message)
}

try {
    pessoajuridica.total_func = 0
    console.log(pessoajuridica.total_func)
} catch(error) {
    console.log(error.message)
} */