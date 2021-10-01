"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Imposto = /** @class */ (function () {
    function Imposto(nome, renda_anual) {
        this._nome = nome;
        this._renda_anual = renda_anual;
    }
    Object.defineProperty(Imposto.prototype, "nome", {
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
    Object.defineProperty(Imposto.prototype, "renda_anual", {
        get: function () {
            return this._renda_anual;
        },
        set: function (renda_anual) {
            if (renda_anual === 0) {
                throw new Error('Renda anual inválida, preencha o campo!');
            }
            this._renda_anual = renda_anual;
        },
        enumerable: false,
        configurable: true
    });
    return Imposto;
}());
var Pessoa_fisica = /** @class */ (function (_super) {
    __extends(Pessoa_fisica, _super);
    function Pessoa_fisica(nome, renda_anual, gasto_saude) {
        var _this = _super.call(this, nome, renda_anual) || this;
        _this._gasto_saude = gasto_saude;
        return _this;
    }
    Object.defineProperty(Pessoa_fisica.prototype, "gasto_saude", {
        get: function () {
            return this._gasto_saude;
        },
        set: function (gasto_saude) {
            if (gasto_saude = 0) {
                throw new Error('Gasto com saúde inválida, preencha o campo!');
            }
            this._gasto_saude = gasto_saude;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa_fisica.prototype.calculoImpostoFI = function () {
        if (this.renda_anual <= 20000) {
            return (this.renda_anual * 0.15) - (this.gasto_saude * 0.5);
        }
        else {
            return (this.renda_anual * 0.25) - (this.gasto_saude * 0.5);
        }
    };
    return Pessoa_fisica;
}(Imposto));
var Pessoa_juridica = /** @class */ (function (_super) {
    __extends(Pessoa_juridica, _super);
    function Pessoa_juridica(nome, renda_anual, numero_func) {
        var _this = _super.call(this, nome, renda_anual) || this;
        _this._numero_func = numero_func;
        return _this;
    }
    Object.defineProperty(Pessoa_juridica.prototype, "numero_func", {
        get: function () {
            return this._numero_func;
        },
        set: function (numero_func) {
            if (numero_func = 0) {
                throw new Error('Numero de funcionários inválido, preencha o campo corretamente!');
            }
            this._numero_func = numero_func;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa_juridica.prototype.calculoImpostoJR = function () {
        if (this.numero_func <= 10) {
            return this.renda_anual * 0.16;
        }
        else {
            return this.renda_anual * 0.14;
        }
    };
    return Pessoa_juridica;
}(Imposto));
var imposto = new Imposto('José', 20000);
var pessoa_fisica = new Pessoa_fisica('Maria', 50000, 2000);
var pessoa_juridica = new Pessoa_juridica('Vanderson', 400000, 50);
console.log("Imposto pessoa fisica: " + pessoa_fisica.calculoImpostoFI());
console.log("Imposto pessoa juridica: " + pessoa_juridica.calculoImpostoJR());
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
