import './styles/App.css';
import './styles/card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext'



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
          <Navbar />
          <div id='id-body'>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
