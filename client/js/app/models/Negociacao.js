class Negociacao {
    constructor(data, operacao, papel, quantidade, valor){
        this._data = data;
        this._operacao = operacao;
        this._papel = papel;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }  

    get data(){
        return this._data;
    }

    get operacao(){
        return this._operacao;
    }

    get papel(){
        return this._papel;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._valor * this._quantidade;
    }
  
}