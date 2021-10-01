"use strict";

var Pessoas = /** @class */ (function () {
    function Pessoas(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoas.prototype, "nome", {
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
    Object.defineProperty(Pessoas.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (sexo) {
            if (!Pessoas.SEXOS.includes(sexo)) {
                throw new Error('Sexo Inválido, digite M para masculino, e F para feminino');
            }
            this._sexo = sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade <= 0) {
                throw new Error('Idade inválida!');
            }
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Pessoas.prototype.obtemIdade = function () {
        if (pessoas.idade >= 18) {
            console.log('Pessoa maior de idade!');
        }
        else {
            console.log('Pessoa menor de idade!');
        }
        return "A pessoa tem " + this.idade + " anos";
    };
    Pessoas.SEXOS = ['M', 'F', 'masculino', 'feminino'];
    return Pessoas;
}());
var pessoas = new Pessoas('João', 'M', 19);
console.log(pessoas.obtemIdade());
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
