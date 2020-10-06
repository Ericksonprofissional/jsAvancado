class NegociacaoController {

    constructor (){
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputOperacao = $('#operacao');
        this._inputPapel = $('#papel');
        this._inputQuantidade = $('#quantidade');
        this._inputValor= $('#valor');

    }
    adiciona(event){
        event.preventDefault();
       let helper = new DateHelper();
       let data = helper.textoParaData(this._inputData.value);
        let negociacao = new Negociacao(
            data,
            this._inputOperacao.value,
            this._inputPapel.value,
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        console.log(helper.dataParaTexto(negociacao.data))
    }

}