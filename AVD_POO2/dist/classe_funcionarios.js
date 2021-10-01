"use strict";

var Funcionarios = /** @class */ (function () {
    function Funcionarios(nome, salarioh, diast, tfaltas) {
        this._nome = nome,
            this._salarioh = salarioh,
            this._diast = diast,
            this._tfaltas = tfaltas;
    }
    Object.defineProperty(Funcionarios.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            if (nome === '') {
                throw new Error('Nome inválido, preencha o campo!');
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "salarioh", {
        get: function () {
            return this._salarioh;
        },
        set: function (salarioh) {
            if (salarioh < 0) {
                throw new Error('Salário inválido, coloque um numero maior que 0');
            }
            this._salarioh = salarioh;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "diast", {
        get: function () {
            return this._diast;
        },
        set: function (diast) {
            if (diast < 0) {
                throw new Error('Dias trabalhados inválido, coloque um numero maior que 0');
            }
            this._diast = diast;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionarios.prototype, "tfaltas", {
        get: function () {
            return this._tfaltas;
        },
        set: function (tfaltas) {
            if (tfaltas < 0) {
                throw new Error('Total de faltas inválido, coloque um numero maior que 0');
            }
            this._tfaltas = tfaltas;
        },
        enumerable: false,
        configurable: true
    });
    Funcionarios.prototype.salarioBruto = function () {
        return this.salarioh * this.diast;
    };
    Funcionarios.prototype.calcularPLR = function () {
        if (this.tfaltas === 0) {
            return this.salarioBruto();
        }
        else if (this.tfaltas === 1) {
            return this.salarioBruto() * 0.06;
        }
        else if (this.tfaltas === 2) {
            return this.salarioBruto() * 0.08;
        }
        else if (this.tfaltas === 3) {
            return this.salarioBruto() * 0.10;
        }
        else if (this.tfaltas === 4) {
            return this.salarioBruto() * 0.12;
        }
        else if (this.tfaltas === 5) {
            return this.salarioBruto() * 0;
        }
        else { }
        return this.tfaltas;
    };
    Funcionarios.prototype.calcularDesconto = function () {
        return this.salarioBruto() * 0.05;
    };
    Funcionarios.prototype.salarioLiquido = function () {
        return (this.salarioBruto() - this.calcularDesconto()) + this.calcularPLR();
    };
    return Funcionarios;
}());
var func = new Funcionarios('João', 1000, 2, 2);
console.log(func.salarioBruto());
console.log("O funcion\u00E1rio de nome " + func.nome + " tem o sal\u00E1rio bruto de " + func.salarioBruto() + ", \nteve " + func.tfaltas + " falta(s) e sua PLR foi de " + func.calcularPLR());
console.log("O funcion\u00E1rio de nome " + func.nome + " tem o sal\u00E1rio bruto de " + func.salarioBruto() + ", \no desconto de " + func.calcularDesconto() + ", a PLR de " + func.calcularPLR() + " e o sal\u00E1rio l\u00EDquido de " + func.salarioLiquido());
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
