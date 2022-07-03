import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <nav className="navbar sticky-top navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand">PC/MasterRace</div>
            <a className="navbar-brand" href="#">#Home</a>
            <a className="navbar-brand" href="#">Productos</a>
            <a className="navbar-brand" href="#">Contacto</a>
            <a className="navbar-brand" href="#">Ayuda</a>
          </div>
        </nav>
      <header className="App-header">
        Bienvenido a tu tienda de insumos para tu PC Master Race!!
      </header>
    </div>
  );
}

export default App;
