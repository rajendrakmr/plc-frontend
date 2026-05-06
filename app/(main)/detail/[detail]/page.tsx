import BreadCrumb from "@/app/components/sections/BreadCrumb";
import "@/app/components/css/product.css"
type Product = {
  slug: string;
  name: string;
  brand: string;
  partNumber: string;
  type: string;
  description: string;
};

const product: Product = {
  slug: "1336-l9e",
  name: "Control Interface 1336 115Vac Encoder Loss Detection",
  brand: "Allen Bradley",
  partNumber: "1336-L9E",
  type: "Inverter Drives",
  description: `PLC Automation specializes in delivering top-notch automation solutions, 
  with a focus on Allen Bradley products like the 1336-L9E. Our team ensures seamless 
  integration and optimal industrial performance.`,
};

export default function ProductDetails() {
  return (
    <main>
      <BreadCrumb
        title={product.partNumber}
        bgImage="/assets/engineering-services-4.jpg"
        items={[
          { label: "Home", link: "/" },
          { label: "brands", link: "/offer-product-list" },
            { label: "Allen Bradley", link: "/offer-product-list" },
          { label: product.partNumber },
        ]}
      />

      <section className="pd-section">
        <div className="pd-inner">

          {/* LEFT */}
          <div className="pd-left">

            <h1 className="pd-code">{product.partNumber}</h1>

            <h2 className="pd-title">
              {product.name}
            </h2>

            {/* BADGES */}
            <div className="pd-badges">
              <span>✅ In Stock</span>
              <span>🌍 Global Delivery</span>
              <span>🛡️ 12 Months Warranty</span>
              <span>✔ 100% Authentic Parts</span>
              <span>⚡ Dispatch Immediately</span>
              <span>🔄 Hassle-free Return</span>
            </div>

            {/* TABLE */}
            <table className="pd-table">
              <tbody>
                <tr>
                  <td>Manufacturer</td>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <td>Part Number</td>
                  <td>{product.partNumber}</td>
                </tr>
                <tr>
                  <td>Product Type</td>
                  <td>{product.type}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>NA</td>
                </tr>
              </tbody>
            </table>

            {/* DESCRIPTION */}
            <div className="pd-desc">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

          </div>

          {/* RIGHT (RFQ FORM) */}
          <div className="pd-right">
            <div className="rfq-card">
              <h3>
                Get a price for {product.brand} {product.partNumber}
              </h3>

              <form className="rfq-form">
                <input placeholder="Name" />
                <input placeholder="Company Name" />

                <div className="phone-group">
                  <select>
                    <option>Singapore (+65)</option>
                    <option>India (+91)</option>
                  </select>
                  <input placeholder="Phone Number" />
                </div>

                <input placeholder="Email" />
                <textarea placeholder="Message"></textarea>

                <button type="submit">Request Quote</button>
              </form>

              <p className="privacy">
                For more information on how your data is processed, read our privacy policy.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Continue Searching</h2>
        <p>Explore thousands of automation spare parts</p>
      </section>
    </main>
  );
}