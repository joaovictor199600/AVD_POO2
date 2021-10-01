/* 6) */
class ConversaoDeUnidadesDeTempo {
    constructor(
        public _segundos: number,
        public _minutos: number,
        public _horas: number,
        public _dias: number,
        public _semanas: number,
        public _meses: number,
        public _anos: number
    ) { }

    get segundos() {
        return this._segundos
    }

    get minutos() {
        return this._minutos
    }

    get horas() {
        return this._horas
    }

    get dias() {
        return this._dias
    }

    get semanas() {
        return this._semanas
    }

    get meses() {
        return this._meses
    }

    get anos() {
        return this._anos
    }

    public converMinutoParaSegundo() {
        return this.minutos * 60
    }

    public converHoraParaMinutos() {
        return this.horas * 60
    }

    public converDiaParaHoras() {
        return this.dias * 24
    }

    public converSemanaParaDias() {
        return this.semanas * 7
    }

    public converMesParaDias() {
        return this.meses * 30
    }

    public converAnoParaDias() {
        return this.anos * 365.25
    }
}

let conversao = new ConversaoDeUnidadesDeTempo(0, 5, 10, 5, 10, 0, 2)
// Segundos, minutos, horas, dias, semanas, meses, anos
console.log(`${conversao.minutos} minutos tem ${conversao.converMinutoParaSegundo()} segundos`)
console.log(`${conversao.horas} horas tem ${conversao.converHoraParaMinutos()} minutos`)
console.log(`${conversao.dias} dias tem ${conversao.converDiaParaHoras()} horas`)
console.log(`${conversao.semanas} semanas tem ${conversao.converSemanaParaDias()} dias`)
console.log(`${conversao.anos} anos tem ${conversao.converAnoParaDias()} dias`)