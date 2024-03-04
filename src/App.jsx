import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import NoPage from './pages/NoPage';
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <div id="app" className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/shopping-cart-reactjs/" element={<Shop />} />
            <Route path="/shopping-cart-reactjs/cart" element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
