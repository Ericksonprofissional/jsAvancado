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
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, indece) => item - indece % 2)
        );
        console.log(data)
        
        let negociacao = new Negociacao(
            data,
            this._inputOperacao.value,
            this._inputPapel.value,
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        console.log(negociacao)
    }

}