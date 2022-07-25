import './styles/App.css';
import './styles/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar />
          <div id='id-body'>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
