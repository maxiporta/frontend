import React, { useState } from 'react';
import handleSubmitPost from "../../middleware/post";
import Boton from '../utility/boton';
import { useSelector } from 'react-redux';
import Libroformulario from './libroformulario';
import { urllibro, urlroot, port} from '../../urls';


export default function IngresarLibro() {

    const [libr, setLibro] = useState({categoria: ''});
    const data = useSelector((state) => state);
    const url = urlroot + port +urllibro;
    const okText = "Libro ingresado";
    const form = {
        nombre: libr.nombre,
        descripcion: libr.descripcion,
        categoria_id: libr.categoria,
        persona_id: libr.persona 
    };

    const handleSubmit = async (e) => {
        if(form.categoria_id === ''){
            form.categoria_id = data.categoria[0].id;
        }
        if(form.persona_id === '')
        {
            form.persona_id = data.persona[0].id;
        }
        handleSubmitPost(e, form, url, okText);
    }
    
    return (
        <>
            <div className="ingreso_container">
            <h3>Ingresar nuevo libro</h3> 
            <form className="ingreso_form">
                <div className="inputs">
                    <Libroformulario  setLibro ={setLibro} libr={libr} datap={data.persona} datac={data.categoria}/>
                    <Boton class="btn btn-primary btn-sm" text="Enviar" function={handleSubmit}/>
                </div>
            </form>
            </div>
        </>
    );
}