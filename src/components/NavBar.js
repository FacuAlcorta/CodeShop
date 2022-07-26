import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

const Navbar= () => {
    return(
    <>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" style={{textDecoration: "none"}}><div className="navbar-brand">PC/MasterRace</div></Link>
            <Link to="/category/1" style={{textDecoration: "none"}}><a className="navbar-brand" href="GPUs">Placas de Video</a></Link>
            <Link to="/category/2" style={{textDecoration: "none"}}><a className="navbar-brand" href="CPUs">Procesadores</a></Link>
            <a className="navbar-brand" href="Contacto">Contacto</a>
            <Link to="/cart"><a className="navbar-brand" href="#"><CartWidget /></a></Link>
          </div>
        </nav>
    </>
)}

export default Navbar;