import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom'

const Navbar= () => {
    return(
    <>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/"><div className="navbar-brand">PC/MasterRace</div></Link>
            <a className="navbar-brand" href="#">#Home</a>
            <Link to="/category/1"><a className="navbar-brand" href="#">Placas de Video</a></Link>
            <Link to="/category/2"><a className="navbar-brand" href="#">Procesadores</a></Link>
            <a className="navbar-brand" href="#">Contacto</a>
            <a className="navbar-brand" href="#"><CartWidget /></a>
          </div>
        </nav>
    </>
)}

export default Navbar;