import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Customer from "./components/customer";
import Product from "./components/product";
import Order from "./components/order";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img
                src="https://cfcdn.apowersoft.info/astro/picwish/_astro/scene-logo-after@530w.df3314dd.png"
                alt="logo"
                className="logo"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/customer">
                  customer
                </Link>
                <Link className="nav-link" to="/product">
                  Product
                </Link>
                <Link className="nav-link" to='/order'>
                  Order
                </Link>
              </div>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

{
  /* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/customer'>Customer</Link>
            </li>
            <li>
              <Link to='/product'>Product</Link>
            </li>
          </ul>
        </nav> */
}
