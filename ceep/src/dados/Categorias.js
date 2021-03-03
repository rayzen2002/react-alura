export default class Categorias {
    constructor(){
        this.Categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func)
    }

    notificar(){
        this._inscritos.forEach(func =>{ 
            func(this.categorias); 
        })
    }

    adicionarCategorias(novaCategoria){
        this.categorias.push(novaCategoria);
    }
}