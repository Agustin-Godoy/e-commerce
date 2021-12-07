import react from "react"
import "../css/NavBar.css"
function NavBar () {
    return (<div className= "navBar">
                <a className href = "#"><h2 className= "title">Kiveve</h2></a>
                <nav className= "nav">
                    <ul>
                        <li><a className = "nav-link" href = "#">Inicio</a></li>
                        <li><a className = "nav-link" href = "#">Tienda</a></li>
                        <li><a className = "nav-link" href = "#">Nosotros</a></li>
                        <li><a className = "nav-link" href = "#">Sucursales</a></li>
                    </ul>
                </nav>
           </div>)
}

export default NavBar;