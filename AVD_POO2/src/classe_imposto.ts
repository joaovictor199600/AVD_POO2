/* 3)*/

class Imposto {
    private _nome: string;
    private _renda_anual: number;

    constructor(nome: string, renda_anual: number) {
        this._nome = nome;
        this._renda_anual = renda_anual;
    }

    get nome() {
        return this._nome
    }

    get renda_anual() {
        return this._renda_anual
    }

    set nome(nome: string) {
        if (nome === '') {
            throw new Error('Nome inválido, preencha o campo!')
        }
        this._nome = nome
    }

    set renda_anual(renda_anual: number) {
        if (renda_anual === 0) {
            throw new Error('Renda anual inválida, preencha o campo!')
        }
        this._renda_anual = renda_anual
    }
}

class Pessoa_fisica extends Imposto {
    public _gasto_saude: number;

    constructor(nome: string, renda_anual: number, gasto_saude: number) {
        super(nome, renda_anual);
        this._gasto_saude = gasto_saude;
    }

    get gasto_saude() {
        return this._gasto_saude
    }

    set gasto_saude(gasto_saude: number) {
        if (gasto_saude = 0) {
            throw new Error('Gasto com saúde inválida, preencha o campo!')
        }
        this._gasto_saude = gasto_saude
    }

    public calculoImpostoFI() {
        if (this.renda_anual <= 20000) {
            return (this.renda_anual * 0.15) - (this.gasto_saude * 0.5)
        } else {
            return (this.renda_anual * 0.25) - (this.gasto_saude * 0.5)
        }
    }
}

class Pessoa_juridica extends Imposto {
    public _numero_func: number;

    constructor(nome: string, renda_anual: number, numero_func: number) {
        super(nome, renda_anual);
        this._numero_func = numero_func
    }

    get numero_func() {
        return this._numero_func
    }

    set numero_func(numero_func: number) {
        if (numero_func = 0) {
            throw new Error('Numero de funcionários inválido, preencha o campo corretamente!')
        }
        this._numero_func = numero_func
    }

    public calculoImpostoJR() {
        if (this.numero_func <= 10) {
            return this.renda_anual * 0.16
        } else {
            return this.renda_anual * 0.14
        }
    }
}

let imposto = new Imposto('Pedro', 20000)
let pessoa_fisica = new Pessoa_fisica('Ana', 50000, 2000)
let pessoa_juridica = new Pessoa_juridica('Joao', 400000, 50)

console.log(`Imposto pessoa fisica: ${pessoa_fisica.calculoImpostoFI()}`)
console.log(`Imposto pessoa juridica: ${pessoa_juridica.calculoImpostoJR()}`)

/* try {
    imposto.nome = ''
    console.log(imposto.nome)
} catch(error) {
    console.log(error.message)
}

try {
    imposto.renda_anual = 0
    console.log(imposto.nome)
} catch(error) {
    console.log(error.message)
}

try {
    pessoa_fisica.gasto_saude = 0
    console.log(pessoa_fisica.gasto_saude)
} catch(error) {
    console.log(error.message)
}

try {
    pessoa_juridica.numero_func = 0
    console.log(pessoa_juridica.numero_func)
} catch(error) {
    console.log(error.message)
} */