import { Link, Route, Routes } from "react-router-dom";
import "./styles.css";
import Other from "./Other";

export default function SingleProduct() {
  return (
    <div>
      <h1>SingleProduct Page</h1>
      <Link to="other">Other Products</Link>

      <Routes>
        <Route path="other" element={<Other />} />
      </Routes>
    </div>
  );
}
