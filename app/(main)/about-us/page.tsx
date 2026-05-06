
import SplitContentSection from "@/app/components/sections/about/SplitContentSection";
import BreadCrumb from "@/app/components/sections/BreadCrumb";
import BrandSlider from "@/app/components/sections/common/BrandSlider";
import HeroSection from "@/app/components/sections/HeroSection";
import TeamSlider from "@/app/components/sections/TeamSlider";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "PLC automation spare parts supplier",
};

export default function AboutUs() {
  return (
    <main>
      <BreadCrumb
        title="About Us"
        bgImage="/assets/engineering-services-4.jpg"
        items={[
          { label: "Home", link: "/" },
          { label: "About Us" },
        ]}
      />
      <SplitContentSection />

      <section className="split-section" style={{ 'background': 'var(--white)' }}>
        <div className="split-inner">
          {/* LEFT: Content */}
          <div className="split-content">
            <h2 className="split-title">
              The Experts Behind Your Automation Success
            </h2>
            <p className="split-subtitle">

              At PLC Automation Group, our leadership team brings together deep industry expertise, strategic foresight, and a relentless commitment to customer success.

              With proven experience across industrial automation components, PLC parts, and obsolete automation spares, we ensure that companies across Southeast Asia, Australia, and beyond can minimize downtime and keep operations moving.
            </p>


          </div>
          <div className="hero-right">
            <div className="hero-search-card">
              <h3>
                🔎 Find Your Part
              </h3>
              <p>
                Enter part number, model, or description
              </p>
              <div className="part-search">
                <input type="text" placeholder="e.g. 6ES7 315-2AG10-0AB0" />
                <button>
                  Search
                </button>
              </div>
              <p style={{ 'fontSize': '0.75rem', 'color': 'rgba(255,255,255,0.45)', 'marginBottom': '0.6rem' }}>
                Popular brands:
              </p>
              <div className="popular-brands">
                <span className="brand-tag">
                  Siemens
                </span>
                <span className="brand-tag">
                  ABB
                </span>
                <span className="brand-tag">
                  Allen Bradley
                </span>
                <span className="brand-tag">
                  Fanuc
                </span>
                <span className="brand-tag">
                  Mitsubishi
                </span>
                <span className="brand-tag">
                  Omron
                </span>
                <span className="brand-tag">
                  Schneider
                </span>
                <span className="brand-tag">
                  Yaskawa
                </span>
              </div>
              <div className="quick-links">
                <div className="quick-link-item">
                  <div className="ql-icon">
                    ⚙️
                  </div>
                  <div className="ql-text">
                    <strong>
                      Obsolete Parts
                    </strong>
                    <span>
                      Discontinued stock
                    </span>
                  </div>
                </div>
                <div className="quick-link-item">
                  <div className="ql-icon">
                    🔧
                  </div>
                  <div className="ql-text">
                    <strong>
                      Repair Service
                    </strong>
                    <span>
                      Fast turnaround
                    </span>
                  </div>
                </div>
                <div className="quick-link-item">
                  <div className="ql-icon">
                    📦
                  </div>
                  <div className="ql-text">
                    <strong>
                      Surplus Stock
                    </strong>
                    <span>
                      Clearance deals
                    </span>
                  </div>
                </div>
                <div className="quick-link-item">
                  <div className="ql-icon">
                    🤝
                  </div>
                  <div className="ql-text">
                    <strong>
                      Exchange Program
                    </strong>
                    <span>
                      Trade your old parts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" >
        <div className="section-inner">
          <div className="section-header">
            <div>
              <h2 className="section-title">
                Our Certifications & Recognitions
              </h2>
              <p className="section-sub">
                At PLC Automation Group, we take pride in upholding the highest standards of excellence, safety, and service quality—values that are reflected in the certifications and accolades we have achieved over the years.
              </p>
            </div>
          </div>
          <div className="cats-grid">
            <div className="cat-card">
              <div className="cat-icon bg-blue">
                <Image width={90} height={90} src="/assets/cert/NSMARK_Gold.png" alt="NS Mark (Gold)" />
              </div>
              <h3>
                NS Mark (Gold)
              </h3>
              <p>
                Awarded by MINDEF Singapore, this recognition reflects our strong support for National Service and a supportive workplace culture.
              </p>

            </div>
            <div className="cat-card">
              <div className="cat-icon bg-orange">
                <Image width={90} height={90} src="/assets/cert/2.jpg" alt="BizSAFE" />
              </div>
              <h3>
                BizSAFE
              </h3>
              <p>
                This certification proves our dedication to maintaining a safe and healthy work environment across all operations.
              </p>

            </div>
            <div className="cat-card">
              <div className="cat-icon" style={{ 'background': 'rgba(16,185,129,0.1)' }}>
                <Image width={90} height={90} src="/assets/cert/3.jpg" alt="ISO" />
              </div>
              <h3>
                ISO
              </h3>
              <p>
                Our ISO certification ensures consistent performance and customer satisfaction through internationally recognised quality standards.
              </p>

            </div>
            <div className="cat-card">
              <div className="cat-icon bg-purple">
                <Image width={90} height={90} src="/assets/cert/SME500_2025.png" alt="SME 500" />
              </div>
              <h3>
                SME 500 (2023–2025)
              </h3>
              <p>
                Recognised for three consecutive years for growth, resilience, and impact in the automation industry.
              </p>

            </div>
          </div>
          <p className="section-sub-hub">
            These recognitions reflect our culture of continuous improvement, compliance, and credibility as a trusted industrial automation spare parts supplier.
          </p>
        </div>
      </section>

        <BrandSlider />

      <TeamSlider />
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