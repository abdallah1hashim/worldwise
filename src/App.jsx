import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import "./index.css";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://mocki.io/v1/a4cdc8dc-8c1f-48fd-b2dd-850971ab4ad2`
        );
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert("There was an error");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

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
