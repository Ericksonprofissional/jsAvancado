class NegociacaoController {

    constructor (){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputOperacao = $('#operacao');
        this._inputPapel = $('#papel');
        this._inputQuantidade = $('#quantidade');
        this._inputValor= $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView = new NegociacaoView($('#negociacaoView'));

        this._negociacaoView.update(this._listaNegociacoes);

    }
    adiciona(event){
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._negociacaoView.update(this._listaNegociacoes);
        this._limpaFormulario();
       
    }

    _criaNegociacao(){
        return  new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputOperacao.value,
            this._inputPapel.value,
            this._inputQuantidade.value,
            this._inputValor.value,
        );
    }
    
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputOperacao.value = '';
        this._inputPapel.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0;
        this._inputData.focus();
    }

}