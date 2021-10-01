/* 1) */

class Pessoas {
    static SEXOS = ['M', 'F', 'masculino', 'feminino']
    constructor(
        public _nome: string,
        public _sexo: string,
        public _idade: number
    ) { }

    get nome() {
        return this._nome
    }

    get sexo() {
        return this._sexo
    }

    get idade() {
        return this._idade
    }

    set nome(nome: string) {
        if (nome === '') {
            throw new Error('Nome inválido, preencha o campo!')
        }
        this._nome = nome
    }

    set sexo(sexo: string) {
        if (!Pessoas.SEXOS.includes(sexo)) {
            throw new Error('Sexo Inválido, digite M para masculino, e F para feminino')
        }
        this._sexo = sexo
    }

    set idade(idade: number) {
        if (idade <= 0) {
            throw new Error('Idade inválida!')
        }
        this._idade = idade
    }

    public obtemIdade() {
        if (pessoas.idade >= 18) {
            console.log('Pessoa maior de idade!')
        } else {
            console.log('Pessoa menor de idade!')
        }
        return `A pessoa tem ${this.idade} anos`
    }
}

const pessoas = new Pessoas('João', 'M', 19)
console.log(pessoas.obtemIdade())

/* try {
  pessoas.nome = ''
  console.log(pessoas.nome)
} catch(error) {
  console.log(error.message)
}
try {
  pessoas.sexo = ''
  console.log(pessoas.sexo)
} catch(error) {
  console.log(error.message)
}
try {
  pessoas.idade = 0
  console.log(pessoas.idade)
} catch(error) {
  console.log(error.message)
} */