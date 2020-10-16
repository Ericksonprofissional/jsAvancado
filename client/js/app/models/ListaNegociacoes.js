class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];
    }

    adiciona(negociacoes){
        this._negociacoes.push(negociacoes)
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}

//https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-1/task/23135//