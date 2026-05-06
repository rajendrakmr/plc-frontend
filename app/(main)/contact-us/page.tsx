import BreadCrumb from "@/app/components/sections/BreadCrumb";
import TeamSlider from "@/app/components/sections/TeamSlider";

export const metadata = {
  title: "Contact",
  description: "PLC automation spare parts supplier",
};

export default function ContactUs() {
  return (
    <main>
      <BreadCrumb
        title="Contact Us"
        bgImage="/assets/engineering-services-4.jpg"
        items={[
          { label: "Home", link: "/" },
          { label: "Contact Us" },
        ]}
      />
      <section className="address-section">
  <div className="section-inner">
    <div className="section-header">
      <h2 className="section-title">Our Offices</h2>
      <p className="section-sub">
        We operate globally with strong presence across key regions.
      </p>
    </div>

    <div className="address-grid">

      {/* Singapore */}
      <div className="address-card">
        <h3>🇸🇬 Singapore (HQ)</h3>
        <p>10 Anson Road, #12-14</p>
        <p>International Plaza</p>
        <p>Singapore 079903</p>

        <div className="address-contact">
          <span>📞 +65 1234 5678</span>
          <span>✉️ sales@plcautomationgroup.com</span>
        </div>

        <a href="#" className="map-link">View on Map →</a>
      </div>

      {/* Australia */}
      <div className="address-card">
        <h3>🇦🇺 Australia</h3>
        <p>Level 5, 115 Pitt Street</p>
        <p>Sydney NSW 2000</p>

        <div className="address-contact">
          <span>📞 +61 2 1234 5678</span>
          <span>✉️ au@plcautomationgroup.com</span>
        </div>

        <a href="#" className="map-link">View on Map →</a>
      </div>

      {/* Europe */}
      <div className="address-card">
        <h3>🇪🇺 Europe</h3>
        <p>Friedrichstraße 123</p>
        <p>10117 Berlin, Germany</p>

        <div className="address-contact">
          <span>📞 +49 30 123456</span>
          <span>✉️ eu@plcautomationgroup.com</span>
        </div>

        <a href="#" className="map-link">View on Map →</a>
      </div>

      {/* Middle East */}
      <div className="address-card">
        <h3>🇦🇪 Middle East</h3>
        <p>Sheikh Zayed Road</p>
        <p>Dubai, UAE</p>

        <div className="address-contact">
          <span>📞 +971 4 123 4567</span>
          <span>✉️ me@plcautomationgroup.com</span>
        </div>

        <a href="#" className="map-link">View on Map →</a>
      </div>

    </div>
  </div>
</section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-inner">

          {/* LEFT INFO */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Need help sourcing automation parts or have a question? 
              Our team is ready to assist you.
            </p>

            <div className="info-item">
              <span>📍</span>
              <p>Singapore / Global Supply Network</p>
            </div>

            <div className="info-item">
              <span>📞</span>
              <p>+65 1234 5678</p>
            </div>

            <div className="info-item">
              <span>✉️</span>
              <p>sales@plcautomationgroup.com</p>
            </div>

            <div className="info-item">
              <span>⏰</span>
              <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>

            <form>
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
              </div>

              <div className="form-row">
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Company Name" />
              </div>

              <input
                type="text"
                placeholder="Part Number / Inquiry Subject"
              />

              <textarea
                rows={5}
                placeholder="Your Message..."
              ></textarea>

              <button type="submit">Send Message →</button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <iframe
          src="https://maps.google.com/maps?q=singapore&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        ></iframe>
      </section>

      

      {/* CTA */}
      <section className="cta-section">
        <div style={{ maxWidth: "700px", margin: "auto" }}>
          <h2>Need Urgent Support?</h2>
          <p>We respond within hours for critical requests</p>
          <div className="cta-btns">
            <a href="#" className="btn-white">
              📋 Submit Part Request
            </a>
            <a href="#" className="btn-outline-white">
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}