import './styles/App.css';
import './styles/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar />
          <div id='id-body'>
            <ItemListContainer />
            {/* <ItemDetailContainer /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
