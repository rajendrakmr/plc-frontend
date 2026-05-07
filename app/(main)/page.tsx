
import HomeSliderSection from "@/app/components/sections/home/HomeSliderSection";
import SplitContentSection from "@/app/components/sections/home/SplitContentSection";
import PartnerSlider from "@/app/components/sections/common/PartnerSlider";
import ContactSection from "@/app/components/sections/common/ContactSection";
import LatestBlogSection from "@/app/components/sections/common/LatestBlogSection";


export const metadata = {
  title: "PLC Automation Group – Your Global Partner for Industrial Automation & PLC Solutions",
  description: "Empowering Industries Worldwide. PLC Automation Group is a trusted global supplier of industrial automation spare parts, specializing in both new and obsolete PLC components. From Australia to across the globe, we provide reliable automation solutions that keep your systems running efficiently.",
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








      <PartnerSlider />
      <LatestBlogSection />
      <ContactSection />
    </main>
  );
}