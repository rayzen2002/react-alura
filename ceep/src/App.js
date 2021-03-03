import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      notas: [],
      categorias: []
    };
  }
  criarNota(titulo, texto , categoria) {
    const novaNota = {
      titulo,
      texto,
      categoria
    };
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas })
  }

  adicionarCategoria(nomeCategoria) {
    const NovoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: NovoArrayCategorias }
    this.setState(novoEstado)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota={this.criarNota.bind(this)} 
          categorias={this.state.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />
        </main>
      </section >
    );
  }
}


export default App;
