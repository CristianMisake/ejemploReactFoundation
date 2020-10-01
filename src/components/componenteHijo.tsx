import React from 'react';
//interfaces
import { hijo } from '../interfaces/interfaceHijo';

const Hijo = ({ datos }:{ datos:hijo }) => {
    return (
        <tr>
            <td>{datos.nombre}</td>
            <td>{datos.edad}</td>
        </tr>
    );
}

export default Hijo;
