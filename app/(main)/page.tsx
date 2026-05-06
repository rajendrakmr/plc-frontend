import { Home } from "lucide-react";
import HomeSliderSection from "../components/sections/home/HomeSliderSection";
import SplitContentSection from "../components/sections/home/SplitContentSection";
import BrandSlider from "../components/sections/common/BrandSlider";


export const metadata = {
  title: "Home",
  description: "PLC automation spare parts supplier",
};

export default function OfferProductList() {
  return (
    <main>
      <HomeSliderSection />
      <SplitContentSection />
      <section className="split-section" style={{ background: "var(--navy)" }}>
        <div className="split-inner">
          {/* LEFT: Content */}
          <div className="split-content">
            {/* <span className="section-tag">
              Why PLC Automation
            </span> */}
            <h2 className="split-title section-title" style={{ color: "var(--white)" }}>
              Global Delivery You Can Count On
              {/* <span className="split-highlight">
                Industrial Automation
              </span>
              Parts */}
            </h2>
            <p className="split-subtitle" style={{ background: "color:rgba(255,255,255,0.6)" }}>
              We know how critical fast turnaround is when it comes to industrial automation. That’s why we provide efficient order processing and on-time global delivery all the way from initial order to installation support.
              From order confirmation, procurement, system configuration, and testing to secure packaging and worldwide logistics, we ensure your automation solutions arrive exactly when and where you need them.
              Trust PLC Automation Group to deliver with precision - because downtime isn't an option.
            </p>

            <div className="split-actions">
              <a href="#" className="btn-primary">
                📋 Get Free Quote
              </a>
              <a href="#" className="split-link">
                <span className="sl-play">
                  ▶
                </span>
                Watch How It Works
              </a>
            </div>
            {/* Mini counter row */}
            <div className="split-counters">
              <div className="sc-item">
                <strong>
                  54+
                </strong>
                <span>
                  Automation Parts
                </span>
              </div>
              <div className="sc-divider" />
              <div className="sc-item">
                <strong>
                  99+
                </strong>
                <span>
                  Happy Customers
                </span>
              </div>
              <div className="sc-divider" />
              <div className="sc-item">
                <strong>
                  5+
                </strong>
                <span>
                  Countries Serve
                </span>
              </div>
              <div className="sc-divider" />
            </div>
          </div>

          <div className="split-slider-wrap" aria-label="Featured PLC products">
            <div className="img-slider">
              <article className="img-slide active">

                <div className="slide-graphic">
                  <video
                    className="bg-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/images/plc-globe-thumbnail.jpg"
                  >
                    <source src="https://plcautomationgroup.com/images/globe.mp4" type="video/mp4" />
                  </video>
                </div>

              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="pcag-why">
        <div className="pcag-why__inner">
           {/* RIGHT */}
          <aside className="pcag-why__aside">
            <div className="pcag-card">

              <h3>🔎 Find Your Part</h3>
              <p>Enter part number, model, or description</p>

              <div className="pcag-search">
                <input type="text" placeholder="e.g. 6ES7 315-2AG10-0AB0" />
                <button>Search</button>
              </div>

              <div className="pcag-brands">
                <span>Siemens</span>
                <span>ABB</span>
                <span>Allen Bradley</span>
                <span>Fanuc</span>
                <span>Mitsubishi</span>
                <span>Omron</span>
                <span>Schneider</span>
                <span>Yaskawa</span>
              </div>

            </div>
          </aside>

          {/* LEFT */}
          <div className="pcag-why__content">
            <span className="pcag-why__tag">Why Choose</span>

            <h2 className="pcag-why__title">
              PLC <span>Automation</span> Group?
            </h2>

            <div className="pcag-why__features">

              <div className="pcag-why__item">
                <div className="pcag-why__icon">🚀</div>
                <div>
                  {/* <strong>Fast Global Delivery</strong> */}
                  <p>Fast Global Delivery: 24 Hours to 14 Days</p>
                </div>
              </div>

              <div className="pcag-why__item">
                <div className="pcag-why__icon">⚡</div>
                <div>
                  {/* <strong>Flexible Lead Times</strong> */}
                  <p>Rapid, flexible lead times tailored to your needs</p>
                </div>
              </div>

              <div className="pcag-why__item">
                <div className="pcag-why__icon">🌐</div>
                <div>
                  {/* <strong>Global Shipping Network</strong> */}
                  <p>24-hour express delivery to 14-day global shipping</p>
                </div>
              </div>

              <div className="pcag-why__item">
                <div className="pcag-why__icon">✅</div>
                <div>
                  {/* <strong>100% Authentic Parts</strong> */}
                  <p>100% Authentic Parts</p>
                </div>
              </div>

              <div className="pcag-why__item">
                <div className="pcag-why__icon">🏭</div>
                <div>
                  {/* <strong>Obsolete Parts</strong> */}
                  <p>Only authentic parts, directly sourced from authorized partners</p>
                </div>
              </div>

              <div className="pcag-why__item">
                <div className="pcag-why__icon">🧰</div>
                <div>
                  {/* <strong>Hassle-Free Experience</strong> */}
                  <p>Specialize in obsolete parts: your cost-effective solution for replacing discontinued or hard-to-find parts / equipment</p>
                </div>
              </div>

              <div className="pcag-why__item">
                <div className="pcag-why__icon">👍</div>
                <div>
                  {/* <strong>Hassle-Free Experience</strong> */}
                  <p>Hassle-Free Experience</p>
                </div>
              </div>
              <div className="pcag-why__item">
                <div className="pcag-why__icon">🔒</div>
                <div>
                  {/* <strong>Hassle-Free Experience</strong> */}
                  <p>Trusted payment gateways</p>
                </div>
              </div>

            </div>
          </div>

         

        </div>
      </section>
    







      <BrandSlider />
      <section className="section blog-section">
        <div className="section-inner">
          <div className="section-header">
            <div>
              <span className="section-tag">
                Latest News
              </span>
              <h2 className="section-title">
                Insights, Updates & Articles
              </h2>
              <p className="section-sub">
                Stay updated with the latest trends, tips and business news.
              </p>
            </div>
            <a href="#" className="view-all">
              All Articles →
            </a>
          </div>
          <div className="blog-grid">
            {/* Featured Post */}
            <article className="blog-card blog-featured">
              <div className="blog-img" style={{ 'background': 'linear-gradient(135deg,#0a1628 0%,#1a4fd6 100%)' }}>
                <div className="blog-img-content">
                  <span style={{ 'fontSize': '3rem' }}>
                    ⚙️
                  </span>
                  <p style={{ 'color': 'rgba(255,255,255,0.5)', 'fontSize': '0.8rem', 'marginTop': '0.5rem' }}>
                    Maintenance Guide
                  </p>
                </div>
                <div className="blog-cat-badge">
                  Maintenance
                </div>
              </div>
              <div className="blog-body">
                <div className="blog-meta">
                  <span className="blog-author">
                    <span className="blog-avatar">
                      RK
                    </span>
                    Rahul Kumar
                  </span>
                  <span className="blog-date">
                    Apr 28, 2025
                  </span>
                  <span className="blog-read">
                    8 min read
                  </span>
                </div>
                <h3 className="blog-title">
                  How to Extend the Life of Your Siemens S7 PLC: 10 Maintenance Practices Every Plant Engineer Must Know
                </h3>
                <p className="blog-excerpt">
                  Siemens S7 PLCs are workhorses of Indian industry — but even the best hardware needs proper care. Here's a practical checklist covering firmware, battery, I/O modules and more...
                </p>
                <div className="blog-footer">
                  <div className="blog-tags">
                    <span className="blog-tag-item">
                      Siemens
                    </span>
                    <span className="blog-tag-item">
                      PLC Maintenance
                    </span>
                    <span className="blog-tag-item">
                      S7-300
                    </span>
                  </div>
                  <a href="#" className="blog-read-link">
                    Read More →
                  </a>
                </div>
              </div>
            </article>
            {/* Side Posts */}
            <div className="blog-side">
              <article className="blog-card blog-small">
                <div className="blog-img-sm" style={{ 'background': 'linear-gradient(135deg,#f97316,#ea580c)' }}>
                  <span style={{ 'fontSize': '1.8rem' }}>
                    🔌
                  </span>
                  <div className="blog-cat-badge blog-cat-sm">
                    Drives
                  </div>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-date">
                      Apr 22, 2025
                    </span>
                    <span className="blog-read">
                      5 min read
                    </span>
                  </div>
                  <h3 className="blog-title">
                    ABB vs Siemens Drives: Which is Easier to Source in India When Things Break?
                  </h3>
                  <p className="blog-excerpt">
                    A practical comparison of parts availability, lead times and local expertise for ABB ACS and Siemens SINAMICS drives.
                  </p>
                  <a href="#" className="blog-read-link">
                    Read More →
                  </a>
                </div>
              </article>
              <article className="blog-card blog-small">
                <div className="blog-img-sm" style={{ 'background': 'linear-gradient(135deg,#10b981,#059669)' }}>
                  <span style={{ 'fontSize': '1.8rem' }}>
                    🤖
                  </span>
                  <div className="blog-cat-badge blog-cat-sm">
                    Robotics
                  </div>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-date">
                      Apr 15, 2025
                    </span>
                    <span className="blog-read">
                      6 min read
                    </span>
                  </div>
                  <h3 className="blog-title">
                    Fanuc Robot Controller Fault Codes: What They Mean & Where to Find Replacement Parts Fast
                  </h3>
                  <p className="blog-excerpt">
                    When your Fanuc robot throws an error code and the OEM says 16 weeks, here's what you can do right now.
                  </p>
                  <a href="#" className="blog-read-link">
                    Read More →
                  </a>
                </div>
              </article>
              <article className="blog-card blog-small">
                <div className="blog-img-sm" style={{ 'background': 'linear-gradient(135deg,#8b5cf6,#6d28d9)' }}>
                  <span style={{ 'fontSize': '1.8rem' }}>
                    📋
                  </span>
                  <div className="blog-cat-badge blog-cat-sm">
                    Procurement
                  </div>
                </div>
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-date">
                      Apr 8, 2025
                    </span>
                    <span className="blog-read">
                      4 min read
                    </span>
                  </div>
                  <h3 className="blog-title">
                    The Ultimate Checklist for Buying Refurbished Automation Parts Without Getting Burnt
                  </h3>
                  <p className="blog-excerpt">
                    5 things every procurement manager must verify before signing off on a refurbished PLC or drive purchase.
                  </p>
                  <a href="#" className="blog-read-link">
                    Read More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div style={{ 'maxWidth': '700px', 'margin': 'auto' }}>
          <h2>
            Can't Find Your Part? We'll Source It.
          </h2>
          <p>
            We're here when you need us
          </p>
          <div className="cta-btns">
            <a href="#" className="btn-white">
              📋 Submit Part Request
            </a>
            <a href="#" className="btn-outline-white">
              📞 Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}