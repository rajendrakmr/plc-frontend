"use client";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
};

const productsData: Product[] = [
  { id: 1, name: "Siemens S7 PLC Module", brand: "Siemens", image: "/assets/products/1712807362.jpg", price: "$1200" },
  { id: 2, name: "ABB Drive Controller", brand: "ABB", image: "/assets/products/1713098462.jpg", price: "$980" },
  { id: 3, name: "Allen Bradley CompactLogix", brand: "Allen Bradley", image: "/assets/products/1713101180.jpg", price: "$1500" },
  { id: 4, name: "Schneider PLC Unit", brand: "Schneider", image: "/assets/products/1713337514.jpg", price: "$870" },
  { id: 5, name: "Omron PLC Unit", brand: "Omron", image: "/assets/products/1713337514.jpg", price: "$760" },
  { id: 6, name: "Fanuc Controller", brand: "Fanuc", image: "/assets/products/1713337514.jpg", price: "$1320" },
  { id: 7, name: "Mitsubishi PLC", brand: "Mitsubishi", image: "/assets/products/1713337514.jpg", price: "$990" },
  { id: 8, name: "Yaskawa Drive", brand: "Yaskawa", image: "/assets/products/1713337514.jpg", price: "$840" },
];

export default function ProductSection() {
  const [selectedBrand, setSelectedBrand] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const filteredProducts =
    selectedBrand === "All"
      ? productsData
      : productsData.filter((p) => p.brand === selectedBrand);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <section className="product-section">
      <div className="product-container">

        {/* FILTER */}
        <aside className="product-filter">
          <h3>Filter</h3>

          <div className="filter-group">
            <label>Brand</label>
            <select
              onChange={(e) => {
                setSelectedBrand(e.target.value);
                setCurrentPage(1); // reset page
              }}
            >
              <option value="All">All</option>
              <option value="Siemens">Siemens</option>
              <option value="ABB">ABB</option>
              <option value="Allen Bradley">Allen Bradley</option>
              <option value="Schneider">Schneider</option>
              <option value="Omron">Omron</option>
              <option value="Fanuc">Fanuc</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="Yaskawa">Yaskawa</option>
            </select>
          </div>

          <button className="filter-btn">Apply Filters</button>
        </aside>

        {/* PRODUCTS */}
        <div className="product-list">
          <div className="product-grid">
            {currentProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div
                  className="product-img"
                  style={{ backgroundImage: `url(${product.image})` }}
                />

                <div className="product-content">
                  <span className="product-brand">{product.brand}</span>
                  <h4>{product.name}</h4>
                  <p className="price">{product.price}</p>
                  <button className="view-btn">View Details →</button>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? "active" : ""}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}