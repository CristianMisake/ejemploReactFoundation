import React, { useState } from 'react';
import { hijo } from '../interfaces/interfaceHijo';
//componentes
import Hijo from './componenteHijo';

const Padre = () => {
    const [hijos, setHijos] = useState<hijo[]>([]);
    const [form, setFrom] = useState<hijo>({ nombre: '', edad: 0 });

    const editForm = (key:string) => (value:any) => setFrom({...form, [key]:value });

    const guardar = () => {
        setHijos([...hijos, form]);
        setFrom({ nombre: '', edad: 0 });
    }

    return (
        <div>
            <h1 className="text-center">Agregar Hijo</h1>
            <div className="grid-x grid-margin-x">
                <div className="cell medium-5">
                    <div className="input-group">
                        <span className="input-group-label">Nombre</span>
                        <input className="input-group-field" type="text" value={form.nombre} onChange={(e) => editForm('nombre')(e.target.value)}/>
                    </div>
                </div>
                <div className="cell medium-5">
                    <div className="input-group">
                        <span className="input-group-label">Edad</span>
                        <input className="input-group-field" type="number" value={form.edad} onChange={(e) => editForm('edad')(e.target.value)}/>
                    </div>
                </div>
                <div className="cell medium-2">
                    <button className="button expanded" type="button" onClick={guardar} >Guardar</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                {   (hijos.length > 0) ?
                    hijos.map((item, index) => (
                        <Hijo key={`key-${index}`} datos={item} />
                    ))
                :
                    <tr>
                        <td colSpan={2}>No hay datos</td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    );
}

export default Padre;
