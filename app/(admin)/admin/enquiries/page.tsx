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
const enquiries = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        message: "Is the wireless headphone available in black color?",
        time: "10:30 AM",
        status: "new",
    },
    {
        id: 2,
        name: "Sarah Smith",
        email: "sarah@example.com",
        message: "We want 50 office chairs for bulk order.",
        time: "Yesterday",
        status: "replied",
    },
];

export default function Enquiries() {
    return (
        <div id="tab-products">

            {/* Header */}

            {/* Stats */}
            <div className="admin-stats">
                <div className="stat-card">
                    <span>Total Enquiries</span>
                    <h3>1,284</h3>
                </div>
                <div className="stat-card">
                    <span>Today Enquiries</span>
                    <h3>12</h3>
                </div>
                <div className="stat-card">
                    <span>Latest Enquiries</span>
                    <h3>28</h3>
                </div>
            </div>

           

            {/* Table */}
            <div className="admin-table">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Messages</th>
                            <th>From Email</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Enquiry Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {enquiries.map((item) => (
                            <tr key={item.id}>

                                <td><input type="checkbox" /></td> 

                                <td>
                                    <span className="badge">{item.message}</span>
                                </td>

                                <td>{item.email}</td>
                                 <td>{item.name}</td>
                                  <td>{  }</td>

                                <td>
                                   <td>{item.time}</td>
                                </td> 
                                <td className="actions">
                                    ✏️ 🗑️
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
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