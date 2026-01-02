import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const ITEMS = 6;

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice(
    (page - 1) * ITEMS,
    page * ITEMS
  );

  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN DASHBOARD */}
        <Route
          path="/"
          element={
            <div className="max-w-7xl mx-auto p-6">
              <h1 className="text-3xl font-bold mb-6">Product Dashboard</h1>

              {/* ADD PRODUCT */}
              <ProductForm setProducts={setProducts} />

              {/* SEARCH */}
              <SearchBar onSearch={setSearch} />

              {/* VIEW TOGGLE */}
              <div className="flex gap-3 mb-4">
                <button
                  onClick={() => setView("grid")}
                  className={`px-4 py-2 rounded ${
                    view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`px-4 py-2 rounded ${
                    view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
                  }`}
                >
                  List View
                </button>
              </div>

              {/* PRODUCT LIST */}
              <ProductList products={paginated} view={view} />

              {/* PAGINATION */}
              <Pagination
                total={filtered.length}
                perPage={ITEMS}
                current={page}
                setCurrent={setPage}
              />
            </div>
          }
        />

        {/* PRODUCT DETAILS PAGE */}
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
