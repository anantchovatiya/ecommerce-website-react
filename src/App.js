import Navbar from "./Components/Navbar/Navbar.jsx";
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Shop from "./Pages/Shop.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import banner1 from "./Components/Assets/banner-1.png";
import banner2 from "./Components/Assets/banner-2.png";
import banner3 from "./Components/Assets/banner-3.png";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory category="Men" banner={banner1}/>} />
        <Route path="/womens" element={<ShopCategory category="Women" banner={banner2}/>} />
        <Route path="/kids" element={<ShopCategory category="Kids" banner={banner3}/>} />
        <Route path="/product" element={<Product/>}>
          <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
