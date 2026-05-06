import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        sku: "WHP-001-BK",
        category: "Electronics",
        stock: 45,
        price: 299,
        image: "/assets/products/1712807183.jpg",
    },
    {
        id: 2,
        name: "Ergonomic Office Chair",
        sku: "CHR-442-GR",
        category: "Furniture",
        stock: 12,
        price: 450,
        image: "/assets/products/1712807183.jpg",
    },
];

export default function Dashboard() {
    return (
        <div id="tab-products"> 
            <div className="admin-stats">
                <div className="stat-card">
                    <span>Total Items</span>
                    <h3>1,284</h3>
                </div>
                <div className="stat-card">
                    <span>Out of Stock</span>
                    <h3>12</h3>
                </div>
                <div className="stat-card">
                    <span>Low Stock</span>
                    <h3>28</h3>
                </div>
                
            </div> 
             <div className="admin-stats">
                <div className="stat-card">
                    <span>Total Items</span>
                    <h3>1,284</h3>
                </div>
                <div className="stat-card">
                    <span>Out of Stock</span>
                    <h3>12</h3>
                </div>
                <div className="stat-card">
                    <span>Low Stock</span>
                    <h3>28</h3>
                </div>
                
            </div> 

        </div>
    );
}

/* Helpers */
function getStatusText(stock: number) {
    if (stock === 0) return "Out of Stock";
    if (stock < 20) return "Low Stock";
    return "In Stock";
}

function getStatusClass(stock: number) {
    if (stock === 0) return "out-of-stock";
    if (stock < 20) return "low-stock";
    return "in-stock";
}