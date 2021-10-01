/* 7) */
class Funcionarios {
    public _nome: string;
    public _salarioh: number;
    public _diast: number;
    public _tfaltas: number;

    constructor(nome: string, salarioh: number, diast: number, tfaltas: number) {
        this._nome = nome,
            this._salarioh = salarioh,
            this._diast = diast,
            this._tfaltas = tfaltas
    }

    get nome() {
        return this._nome
    }

    get salarioh() {
        return this._salarioh
    }

    get diast() {
        return this._diast
    }

    get tfaltas() {
        return this._tfaltas
    }

    set nome(nome: string) {
        if (nome === '') {
            throw new Error('Nome inválido, preencha o campo!')
        }
        this._nome = nome
    }

    set salarioh(salarioh: number) {
        if (salarioh < 0) {
            throw new Error('Salário inválido, coloque um numero maior que 0')
        }
        this._salarioh = salarioh
    }

    set diast(diast: number) {
        if (diast < 0) {
            throw new Error('Dias trabalhados inválido, coloque um numero maior que 0')
        }
        this._diast = diast
    }

    set tfaltas(tfaltas: number) {
        if (tfaltas < 0) {
            throw new Error('Total de faltas inválido, coloque um numero maior que 0')
        }
        this._tfaltas = tfaltas
    }

    public salarioBruto(): number {
        return this.salarioh * this.diast
    }

    public calcularPLR(): number {
        if (this.tfaltas === 0) {
            return this.salarioBruto()
        } else if (this.tfaltas === 1) {
            return this.salarioBruto() * 0.94
        } else if (this.tfaltas === 2) {
            return this.salarioBruto() * 0.92
        } else if (this.tfaltas === 3) {
            return this.salarioBruto() * 0.90
        } else if (this.tfaltas === 4) {
            return this.salarioBruto() * 0.88
        } else if (this.tfaltas === 5) {
            return this.salarioBruto() * 0
        } else { }
        return this.tfaltas
    }

    public calcularDesconto() {
        return this.salarioBruto() * 0.05
    }

    public salarioLiquido() {
        return (this.salarioBruto() - this.calcularDesconto()) + this.calcularPLR()
    }
}


let func = new Funcionarios('João', 1000, 2, 2)
console.log(func.salarioBruto())
console.log(`O funcionário de nome ${func.nome} tem o salário bruto de ${func.salarioBruto()}, 
teve ${func.tfaltas} falta(s) e sua PLR foi de ${func.calcularPLR()}`)
console.log(`O funcionário de nome ${func.nome} tem o salário bruto de ${func.salarioBruto()}, 
o desconto de ${func.calcularDesconto()}, a PLR de ${func.calcularPLR()} e o salário líquido de ${func.salarioLiquido()}`)

/* try {
    func.nome = ''
    console.log(func.nome)
} catch(error) {
    console.log(error.message)
}

try {
    func.salarioh = -1
    console.log(func.salarioh)
} catch(error) {
    console.log(error.message)
}

try {
    func.diast = -1
    console.log(func.diast)
} catch(error) {
    console.log(error.message)
}

try {
    func.tfaltas = -1
    console.log(func.tfaltas)
} catch(error) {
    console.log(error.message)
} */