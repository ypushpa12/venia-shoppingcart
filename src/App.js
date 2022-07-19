import '../src/sass/App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Basket from './component/Basket';
import { useState } from 'react';
import Login from './component/Login/LoginApp';
import LoginForm from './component/Login/LoginForm';
import Footer from './component/Footer';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <>

      <Navbar countCartItems={cartItems.length} />

      <Routes>

        <Route exact path='/' element={<Home />} />

        {/* <Route exact path='/product' element={<Modal onAdd={onAdd} />} /> */}
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Login' element={<Login onAdd={LoginForm} />} />
        <Route exact path='/products/:id' element={<Product onAdd={onAdd} />} />
        <Route exact path='/cart' element={<Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
