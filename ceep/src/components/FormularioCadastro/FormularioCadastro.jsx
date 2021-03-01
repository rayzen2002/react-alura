import React, { Component } from "react";
import "./FormularioCadastro.css";
class FormularioCadastro extends Component {

    constructor() {
        super();
        this.titulo = "";
    }
    handleMudancaTitulo(event) {
        this.titulo = event.target.value;
    }



    render() {
        return (
            <form className="form-cadastro ">
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this.handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
        </button>
            </form>
        );
    }
}

export default FormularioCadastro;