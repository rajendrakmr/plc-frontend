"use client";

import { useState } from "react";
import CardProductItem from "@/app/components/sections/common/CardProductItem";
import { catalogProducts } from "@/app/data/content";

export default function ProductCategory() {
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedAvailability, setSelectedAvailability] = useState("All");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;

    /* FILTER PRODUCTS */
    const filteredProducts = catalogProducts.filter((p) => {

        const brandMatch =
            selectedBrand === "All" ||
            p.brand === selectedBrand;

        const availabilityMatch =
            selectedAvailability === "All" ||
            p.status === selectedAvailability;

        const searchMatch =
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.partNumber.toLowerCase().includes(search.toLowerCase()) ||
            p.brand.toLowerCase().includes(search.toLowerCase());

        return (
            brandMatch &&
            availabilityMatch &&
            searchMatch
        );
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

    /* RESET FILTERS */
    const resetFilters = () => {
        setSelectedBrand("All");
        setSelectedAvailability("All");
        setSearch("");
        setCurrentPage(1);
    };

    return (
        <section className="product-section">
            <div className="product-container">

                {/* FILTER SIDEBAR */}
                <aside className="product-filter">

                    <h3>Filters</h3>

                    {/* BRAND */}
                    <div className="filter-group">
                        <label>Manufacturer</label>

                        <select
                            value={selectedBrand}
                            onChange={(e) => {
                                setSelectedBrand(e.target.value);
                                setCurrentPage(1);
                            }}
                        >
                            <option value="All">All</option>

                            <option value="Siemens">Siemens</option>

                            <option value="ABB">ABB</option>

                            <option value="Rockwell">Rockwell</option>

                            <option value="Schneider">
                                Schneider
                            </option>

                            <option value="FANUC">
                                FANUC
                            </option>

                            <option value="Omron">
                                Omron
                            </option>

                            <option value="Mitsubishi">
                                Mitsubishi
                            </option>

                            <option value="Yaskawa">
                                Yaskawa
                            </option>
                        </select>
                    </div>

                    {/* AVAILABILITY */}
                    <div className="filter-group">
                        <label>Availability</label>

                        <select
                            value={selectedAvailability}
                            onChange={(e) => {
                                setSelectedAvailability(
                                    e.target.value
                                );

                                setCurrentPage(1);
                            }}
                        >
                            <option value="All">
                                All
                            </option>

                            <option value="In Stock">
                                In Stock
                            </option>

                            <option value="Limited">
                                Limited
                            </option>

                            <option value="Obsolete">
                                Obsolete
                            </option>
                        </select>
                    </div>

                    {/* SEARCH */}
                    <div className="filter-group filter-search">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>

                    {/* RESET */}
                    <div className="filter-reset">
                        <button onClick={resetFilters}>
                            Reset Filters
                        </button>
                    </div>
                </aside>

                {/* PRODUCT LIST */}
                <div className="product-list">

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