import React, {useEffect, useState} from 'react';
import './style.css'
import Boton from '../utility/boton';
import Libro from './libro';
import Card from '../utility/card';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import IngresarLibro from './ingresarlibro';

const url = 'http://localhost:3000/libro/';

export default function ListadoLibro() {
    const [data, setdata] = useState([]);
    const okText = "Libro borrado con exito";

    useEffect(() => {
        handleGet(url, data, setdata);
      }, [data]);
      
    const listaLibro = data.map((libro) => {
        var infill = <><Libro nombre={libro.nombre} descripcion={libro.descripcion}/>
                        <Boton class = "btn btn-primary" text = "MODIFICAR"/>
                        <Boton class = "btn btn-danger" text = "PRESTAR"/>
                        <Boton class = "btn btn-outline-primary" text = "BORRAR" function={() => handleDelete(url + libro.id, okText)}/></>
        return ( 
            // eslint-disable-next-line react/style-prop-object
            <Card infill = {infill} key ={"libro" + libro.id}/>
        );
    });
    return(
        <>
            <IngresarLibro/>
            <div className="container">{listaLibro}</div>
        </>
    );
}