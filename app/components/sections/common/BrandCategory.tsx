"use client";

import { useState } from "react";
import CardProductItem from "@/app/components/sections/common/CardProductItem";
import { catalogProducts } from "@/app/data/content";

export default function BrandCategory() {
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;

    /* UNIQUE BRANDS */
    const brands = [
        "All",
        ...new Set(catalogProducts.map((p) => p.brand)),
    ];

    /* FILTER PRODUCTS */
    const filteredProducts = catalogProducts.filter((p) => {

        const brandMatch =
            selectedBrand === "All" ||
            p.brand === selectedBrand;

        const searchMatch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.partNumber.toLowerCase().includes(search.toLowerCase()) ||
            p.brand.toLowerCase().includes(search.toLowerCase());

        return brandMatch && searchMatch;
    });

    /* PAGINATION */
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;

    const currentProducts = filteredProducts.slice(
        indexOfFirst,
        indexOfLast
    );

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    return (
        <section className="product-section">
            <div className="product-container">

                {/* SIDEBAR */}
                <aside className="brand-sidebar">

                    <h3>Brands</h3>

                    <div className="brand-list">

                        {brands.map((brand) => {

                            const count =
                                brand === "All"
                                    ? catalogProducts.length
                                    : catalogProducts.filter(
                                        (p) => p.brand === brand
                                    ).length;

                            return (
                                <button
                                    key={brand}
                                    className={`brand-item ${selectedBrand === brand
                                            ? "active"
                                            : ""
                                        }`}
                                    onClick={() => {
                                        setSelectedBrand(brand);
                                        setCurrentPage(1);
                                    }}
                                >
                                    <span>{brand}</span>

                                    <small>{count}</small>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                {/* CONTENT */}
                <div className="product-content">

                    {/* TOPBAR */}
                    <div className="product-topbar">

                        {/* SEARCH */}
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Enter Part Number, Manufacturer..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>

                        {/* RESULT COUNT */}
                        <div className="product-count">
                            {filteredProducts.length} parts found
                        </div>
                    </div>

                    {/* PRODUCTS */}
                    <div className="product-grid">
                        <CardProductItem
                            products={currentProducts}
                        />
                    </div>

                    {/* EMPTY */}
                    {filteredProducts.length === 0 && (
                        <div className="no-products">
                            No products found.
                        </div>
                    )}

                    {/* PAGINATION */}
                    {totalPages > 1 && (
                        <div className="pagination">
                            {[...Array(totalPages)].map(
                                (_, i) => (
                                    <button
                                        key={i}
                                        className={
                                            currentPage === i + 1
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() =>
                                            setCurrentPage(i + 1)
                                        }
                                    >
                                        {i + 1}
                                    </button>
                                )
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}