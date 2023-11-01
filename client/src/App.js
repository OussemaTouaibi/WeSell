import "./App.css";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddProduct from "./pages/createProduct";
import ProductDetails from "./pages/details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
