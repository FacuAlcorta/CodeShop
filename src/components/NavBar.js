import CartWidget from "./CartWidget";

const Navbar= () => {
    return(
    <>
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">PC/MasterRace</div>
            <a className="navbar-brand" href="#">#Home</a>
            <a className="navbar-brand" href="#">Productos</a>
            <a className="navbar-brand" href="#">Contacto</a>
            <a className="navbar-brand" href="#">Ayuda</a>
            <a className="navbar-brand" href="#"><CartWidget /></a>
          </div>
        </nav>
    </>
)}

export default Navbar;