import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer listaItems= "Aquí encontrarás tu lista de productos!"/>
     
    </div>
  );
}

export default App;
