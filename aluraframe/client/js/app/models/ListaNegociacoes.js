class ListaNegociacoes{
    constructor(){
        this._negociacoes = [];

    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }


    get negociacoes(){
        //Blinda e evita que seja alterado a lista original,
        //Esse método envia uma cópia da lista
        return [].concat(this._negociacoes);
    }
}