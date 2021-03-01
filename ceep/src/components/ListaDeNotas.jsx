import React, { Component } from "react";
import CardNota from "./CardNota";

export class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "zzz").map((categoria) => {
                    return (
                        <li>
                            <div>{categoria}</div>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }

}


export default ListaDeNotas