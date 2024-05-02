class contaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0

    }
    get saldo() {
        return this._saldo
    }
    set saldo(valor) {
        this.saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Operação negada"

        }
        this._saldo = this.saldo - valor
        return this._saldo
    }


    depositar(valor) {
        this._saldo = this.saldo + valor
        return this._saldo
    }
}
class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero,)
        this.tipo = 'corrente'
        this.cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    }
}


class contaPoupanca extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero,)
        this.tipo = 'Poupanca'

    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero,)
        this.tipo = 'Universitaria'

    }

    sacar(valolr) {
        if (valor > 500) {
            return "Operação negada"
        }
        this._saldo = this._saldo - valor
    }
}