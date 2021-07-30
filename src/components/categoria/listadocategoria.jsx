import React, { useEffect, useState } from 'react';
import handleGet from '../../middleware/get';
import handleDelete from '../../middleware/delete';
import Boton from '../utility/boton';
import Card from '../utility/card';
import './style.css'
import { useSelector } from 'react-redux';
import EntradaDeTexto from '../utility/input';
import { startFlag } from '../../functions/functions';

import InfillCategoria from './infillcategoria';
import MostrarLibro from '../libro/MostrarLibros';

import IngresarCategoria from './ingresarcategoria';


export default function ListadoCategoria() {
    const data = useSelector((state) => state);
    const [nombre, setNombre] = useState('');
    const [actualCategoria, setActualCategoria] = useState(null);
    const[flag, setFlag] = useState([...startFlag(data.categoria.length)]);
    const okText = "Genero borrado con exito";
    const url = 'http://localhost:3000/categoria/';
    const form = {
        nombre: nombre
    };


    let listaCategoria = data.categoria.map((categoria, index) => {
      const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/></>;
      let modificando = "";
      if(flag[index]===true)
      {
        modificando = input;
      }
      const infill = <InfillCategoria botom={modificando} text={"VER LIBROS"} categoria={data.categoria[index]} index={index} url = {url} form = {form} flag={flag}  okText={okText} setFlag={setFlag} verLibro ={setActualCategoria}/>;
      return (
        <Card infill = {infill} keys ={"categoria" + categoria.id}/>
      );
    });
    if(actualCategoria !== null)
    {
        const input = <><br></br><EntradaDeTexto placeholder = "Nombre" id="nombre" value={nombre} function={e => setNombre(e.target.value)}/></>;
        let modificando = "";
        if(flag[actualCategoria]===true)
        {
            modificando = input;
        }
        const infill = <InfillCategoria botom={modificando} text={"DEJAR DE VER"} categoria={data.categoria[actualCategoria] }index= {actualCategoria} url = {url} form = {form} flag={flag}  okText={okText} setFlag={setFlag} verLibro ={() => setActualCategoria(null)}/>;
        listaCategoria = <><Card infill = {infill} keys ={"categoria" + data.categoria[actualCategoria].id}/>{<MostrarLibro index = {actualCategoria} filtro = {true} compareValue={data.categoria[actualCategoria].id} typeCompare={"categoria_id"}/>}</>;

    }
    return(
      <>
          <IngresarCategoria/>
          <div className="container">{listaCategoria}</div>
      </>
    );
}