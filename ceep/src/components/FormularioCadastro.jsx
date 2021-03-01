import React, { Component } from 'react'

export class FormularioCadastro extends Component {
    render() {
        return (
            <form action="">
                <input type="text" placeholder="Titulo" />
                <textarea name="" id="" cols="30" rows="10" placeholder="Escreva sua nota" ></textarea>
                <button>Criar nota</button>
            </form>
        );
    }


}

export default FormularioCadastro