class DateHelper {

    constructor(){
        //Isolando a responsabilidade de conversão de datas
        throw new Error('Datehelper não pode ser instanciada');
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
      }

    //  static não precisa stanciar a class no arquivo onde é chamado
    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        return new Date(...texto.split('-').map((item,indice) => item - indice % 2));

    }
}