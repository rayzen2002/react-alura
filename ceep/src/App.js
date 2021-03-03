import React, { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias;
    this.notas = new ArrayDeNotas;
  }
  /*deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas })
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


  adicionarCategoria(nomeCategoria) {
    const NovoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: NovoArrayCategorias }
    this.setState(novoEstado)
  }*/
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota={this.notas.criarnota} 
          categorias={this.categorias.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias} />
          <ListaDeNotas
            notas={this.notas.notas}
            apagarNota={this.notas.apagarNota}
          />
        </main>
      </section >
    );
  }
}


export default App;
