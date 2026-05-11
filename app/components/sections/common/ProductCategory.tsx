"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
    Button,
    CardContent,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

import { catalogProductPages } from "@/app/data/content";
import ProductCard from "@/app/components/sections/common/ProductCard";
/* ───────────────── TYPES ───────────────── */

interface Product {
    id?: number;
    name: string;
    brand: string;
    price?: string;
    image?: string;
    partNumber?: string;
    description?: string;
    stock?: "In Stock" | "Limited" | "Obsolete";
    status?: "In Stock" | "Limited" | "Obsolete";
 
    category?: string;
    href?: string;
}

/* ───────────────── STOCK CONFIG ───────────────── */

const stockConfig = {
    "In Stock": {
        label: "In Stock",
        className: "badge-stock badge-in",
    },
    "Limited": {
        label: "Limited",
        className: "badge-stock badge-limited",
    },
    "Obsolete": {
        label: "Obsolete",
        className: "badge-stock badge-obsolete",
    },
};

/* ───────────────── PAGE ───────────────── */

export default function ProductCategory() {
    const [manufacturer, setManufacturer] = useState("");
    const [availability, setAvailability] = useState("");
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;

    /* ALL PRODUCTS */
    const allProducts: Product[] = useMemo(
        () => catalogProductPages.flat(),
        []
    );

    /* FILTER OPTIONS */
    const manufacturerOptions = useMemo(
        () =>
            Array.from(
                new Set(allProducts.map((p) => p.brand))
            ).sort(),
        [allProducts]
    );

    const availabilityOptions = useMemo(
        () =>
            Array.from(
                new Set(
                    allProducts
                        .map((p) => p.status)
                        .filter(Boolean)
                )
            ),
        [allProducts]
    );

    /* FILTER PRODUCTS */
    const filteredProducts = useMemo(() => {
        return allProducts.filter((p) => {
            const manufacturerMatch =
                !manufacturer || p.brand === manufacturer;

            const availabilityMatch =
                !availability || p.status === availability;

            const searchMatch =
                p.name
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                p.brand
                    ?.toLowerCase()
                    .includes(search.toLowerCase()) ||
                p.partNumber
                    ?.toLowerCase()
                    .includes(search.toLowerCase());

            return (
                manufacturerMatch &&
                availabilityMatch &&
                searchMatch
            );
        });
    }, [allProducts, manufacturer, availability, search]);

    /* PAGINATION */
    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    const currentProducts = useMemo(() => {
        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;

        return filteredProducts.slice(start, end);
    }, [filteredProducts, currentPage]);

    /* RESET */
    const resetFilters = () => {
        setManufacturer("");
        setAvailability("");
        setSearch("");
        setCurrentPage(1);
    };

    return (
        <section className="product-section">
            <div className="product-container">

                {/* FILTER SIDEBAR */}
                <aside className="product-filter">
                    <CardContent>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Filters
                        </Typography>

                        <Stack spacing={1}>
                            {/* Manufacturer */}
                            <TextField
                                select
                                label="Manufacturer"
                                value={manufacturer}
                                onChange={(e) => {
                                    setManufacturer(e.target.value);
                                    setCurrentPage(1);
                                }}
                            >
                                <MenuItem value="">
                                    All Manufacturers
                                </MenuItem>

                                {manufacturerOptions.map((option) => (
                                    <MenuItem
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* Availability */}
                            <TextField
                                select
                                label="Availability"
                                value={availability}
                                onChange={(e) => {
                                    setAvailability(e.target.value);
                                    setCurrentPage(1);
                                }}
                            >
                                <MenuItem value="">
                                    All Availability
                                </MenuItem>

                                {availabilityOptions.map((option) => (
                                    <MenuItem
                                        key={option}
                                        value={option}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>

                            {/* Search */}
                            <TextField
                                label="Search"
                                placeholder="Search parts"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />

                            <Button
                                variant="text"
                                onClick={resetFilters}
                            >
                                Reset filters
                            </Button>
                        </Stack>
                    </CardContent>
                </aside>

                {/* PRODUCT LIST */}
                <div className="product-list"> 
                    < ProductCard products={currentProducts} />

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