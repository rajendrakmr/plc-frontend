import BreadCrumb from "@/app/components/sections/BreadCrumb";
import CareerSection from "@/app/components/sections/CareerSection";
import JobOpeningSection from "@/app/components/sections/JobOpeningSection";

export const metadata = {
  title: "Careers",
  description: "Reach out to PLC Automation Group through our contact page. Connect with our experts to discuss tailored industrial solutions that enhance productivity and efficiency. Let's transform your processes together.",
};

export default function CareersPage() {
  return (
    <main>
      <BreadCrumb
        title="Careers"
        bgImage="/assets/engineering-services-4.jpg"
        items={[
          { label: "Home", link: "/" },
          { label: "Careers" },
        ]}
      />
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span />
              Open Positions
            </div>
            <h1>
              Build your career in
              <em>
                industrial automation
              </em>
              with PLC Automation
            </h1>
            <p>
              Explore customer-facing full-time roles and hands-on internships designed for people who want to grow with a practical, fast-moving automation team.
            </p>
           
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">
                  3+
                </div>
                <div className="stat-label">
                  Full-time Roles
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-num">
                  5+
                </div>
                <div className="stat-label">
                  Open Roles
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-num">
                  5+
                </div>
                <div className="stat-label">
                  Internships
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Image Slider */}
           <div className="hero-right">
            <div className="hero-search-card">
              <h3>
                What you can expect ?
              </h3>
              <p>
               Customer-facing roles with real industrial problem solving.
              </p>
               <p>
             Exposure to PLC systems, automation products, and client projects.
              </p>
               <p>
              A practical environment for both experienced hires and early-career talent.
              </p>
              
               
               
              {/* <div className="quick-links">
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
              </div> */}
            </div>
          </div>
           

        </div>
      </section>


      <JobOpeningSection type="Full-Time" />
      <CareerSection />
      <JobOpeningSection type="Internship" />
    </main>
  );
}