import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>list of cities</p>} />
          <Route path="cities" element={<p>list of cities</p>} />
          <Route path="countries" element={<p>list of countries</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;