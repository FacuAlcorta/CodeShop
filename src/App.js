import './styles/App.css';
import './styles/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
    <Navbar />
    <div id='id-body'>
      <ItemListContainer />
    </div>
    </>
  );
}

export default App;
