import React, { Component } from "react";
import "./FormularioCadastro.css";
class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.categoria = "Sem Categoria";
    }
    _handleMudancaTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _handleMudancaTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _handleMudancaCategoria(event){
        event.stopPropagation();
        this.categoria = event.target.value;
    }

    _criarNota(event) {
        event.preventDefault();
        event.stopPropagation();

        this.props.criarNota(this.titulo, this.texto , this.categoria);
    }

    render() {
        return (
            <form className="form-cadastro "
                onSubmit={this._criarNota.bind(this)}
                onChange={this._handleMudancaCategoria.bind(this)}
            >

                <select 
                    name=""
                    id=""
                    className="form-cadastro_input"
                >
                    <option>Sem Categoria</option>
                    {this.props.categorias.map(categoria => {
                        return <option >{categoria}</option>
                    })}

                </select>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
        </button>
            </form>
        );
    }
}

export default FormularioCadastro;