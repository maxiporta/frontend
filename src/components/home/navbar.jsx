import './style.css'
import Not from '../utility/notification'
import { Link } from "react-router-dom"

function Navbar(){
    return(<div className="navbar">
   <div className="options">

    {/* LISTADOS */}
    <Link to="/libro/listadolibro" className="link left">Listado de libros</Link>
    <Link to="/categoria/listadocategoria" className="link middle">Listado de generos</Link> 
    <Link to="/persona/listadopersona" className="link right">Listado de personas</Link>
    <Not/>

   
   </div>
    </div>)
}


export default Navbar