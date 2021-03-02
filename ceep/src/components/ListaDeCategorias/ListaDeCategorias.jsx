import React, { Component } from 'react'
import "./ListaDeCategorias.css"

class ListaDeCategorias extends Component {

    _handleEventoInput(event) {
        if (event.key == "Enter") {
            let valorCategoria = event.target.value;
            this.props.adicionarCategoria(valorCategoria)
        }
    }

    render() {

        return (
            <section className="lista-categorias">
                <ul>
                    {this.props.categorias.map((categoria, index) => {
                        return (
                            <li
                                key={index}
                                className="lista-categorias_item"
                            >
                                {categoria}
                            </li>
                        );
                    })}
                    <input
                        type="text"
                        placeholder="Adicionar Categoria"
                        onKeyUp={this._handleEventoInput.bind(this)}
                    />
                </ul>

            </section>
        );
    }
}

export default ListaDeCategorias;