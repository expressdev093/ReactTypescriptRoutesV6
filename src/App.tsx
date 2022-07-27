import "./styles.css";
import {
  Routes,
  Route,
  Link,
  Outlet,
  unstable_HistoryRouter as HistoryRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import { createBrowserHistory } from "history";

const Layout = () => {
  return (
    <div className="app">
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/products/12">Single Products</Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default function App() {
  const history = createBrowserHistory();

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="/products/:id/*" element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}
