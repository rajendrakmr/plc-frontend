"use client";

import Link from "next/link";
import MegaMenu from "./MegaMenu";
import Image from "next/image";
import { resources, brands } from "@/app/data/content";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MegaMenuResourcesSection from "../sections/MegaMenuResourcesSection";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const closeMobileNav = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobileNav = () => {
    setIsOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>📞 <Link href="tel:+65 6980 8259 ,HP: +65 8950 7034">+65 6980 8259 ,HP: +65 8950 7034</Link></span>
            <span>✉ <Link href="mailto:sales@plcautomat.com">sales@plcautomat.com</Link></span>
          
          </div>
          <div className="topbar-right">
            <a href="#">🌐</a>
            <div className="social-icons">
              <Link href="https://www.facebook.com/plcautomat"><i className="fab fa-facebook-f"></i></Link>
              <Link href="https://www.linkedin.com/company/78855232"><i className="fab fa-linkedin-in"></i></Link>
              <Link href="https://www.youtube.com/@salesplcautomationpteltd"><i className="fab fa-youtube"></i></Link>
              <Link href="https://twitter.com/plc_ltd"><i className="fab fa-twitter"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="header-inner">
          <Link className="logo brand-logo" href="/">
            <Image
              src="/assets/clogo.png"
              alt="PLC Automation"
              width={300}
              height={70}

            />
          </Link>

          <nav>
            <ul className="nav-list">
              {/* <li className={`nav-item ${pathname === "/" ? "active" : ""}`}>
                <Link className="nav-link" href="/">Home</Link>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}>
                  Manufacturers
                  <svg viewBox="0 0 10 6">
                    <path d="M0 0l5 6 5-6z" />
                  </svg>
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-inner">
                    <div className="mega-grid" style={{ 'gap': '1.5rem' }}>
                      <div className="mega-col">
                        <h4>
                          Top Brands
                        </h4>
                        {
                          brands.map((brand) => (
                            <Link href={brand.url} key={brand.url}>
                              {brand.name}
                            </Link>
                          ))
                        }
                      </div>
                      <MegaMenu />
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}>
                  Resources
                  <svg viewBox="0 0 10 6">
                    <path d="M0 0l5 6 5-6z" />
                  </svg>
                </a>
                <div className="mega-menu">
                  <div className="mega-menu-inner">
                    <div className="mega-grid" style={{ 'gap': '1.5rem' }}>
                      <div className="mega-col">
                        {
                          resources.map((brand) => (
                            <Link href={brand.url} key={brand.url}>
                              {brand.name}
                            </Link>
                          ))
                        }
                      </div>
                      <MegaMenuResourcesSection />
                    </div>
                  </div>
                </div>
              </li>
              <li className={`nav-item ${pathname === "/offer-product-list" ? "active" : ""}`}>
                <Link className="nav-link" href="/offer-product-list">Offer Product</Link>
              </li>
              {/* <li className={`nav-item ${pathname === "/contact-us" ? "active" : ""}`}>
                <Link className="nav-link" href="/contact-us">Contact Us</Link>
              </li> */}
              <div className="search-box" id="search-box">
                <button className="search-icon-btn" aria-label="Search">
                  <svg viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zm-.82-1.16a6 6 0 10-8.49-8.49 6 6 0 008.49 8.49z" />
                  </svg>
                </button>
                <div className="search-input-wrap" id="search-input-wrap">
                  <input type="text" id="search-input" placeholder="Search part number…" />
                  <button className="search-clear" title="Clear">
                    ✕
                  </button>
                </div>
              </div>
            </ul>
          </nav>
          <button className="hamburger" id="hamburger" aria-label="Open menu" onClick={toggleMobileNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-nav-overlay ${isOpen ? "open" : ""}`} id="mob-overlay" onClick={closeMobileNav} />
      {/* MOBILE NAV DRAWER */}
      <nav className={`mobile-nav ${isOpen ? "open" : ""}`} id="mobile-nav">
        <div className="mobile-nav-header">
          <div className="logo">
            <div className="logo-icon" style={{ 'width': '36px', 'height': '36px', 'fontSize': '0.9rem' }}>
              PLC
            </div>
            <div className="logo-text">
              <strong>
                PLC Automation
              </strong>
            </div>
          </div>
          <button className="mobile-nav-close" onClick={closeMobileNav}>
            ✕
          </button>
        </div>
        <div className="mobile-nav-body">
          {/* Mobile Search */}
          <div className="mob-search" style={{ 'margin': '1rem 1.5rem' }}>
            <svg viewBox="0 0 20 20">
              <path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zm-.82-1.16a6 6 0 10-8.49-8.49 6 6 0 008.49 8.49z" />
            </svg>
            <input type="text" placeholder="Search part number…" />
          </div>
          <div className="mob-item">
            <Link className="mob-link" href="/">Home</Link>
          </div>
          <div className={`mob-item ${openIndex === 0 ? "open" : ""}`}>
            <div className="mob-link" onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}>
              Manufacturers
              <span className="mob-arrow">
                ›
              </span>
            </div>
            <div className="mob-submenu">
              <div className="mob-sub-section">
                Top Brands
              </div>
              {
                brands.map((brand) => (
                  <Link href={brand.url} key={brand.url}>
                    {brand.name}
                  </Link>
                ))
              }
            </div>
          </div>
          <div className="mob-item">
            <Link className="mob-link" href="/offer-product-list">Offer Product</Link>
          </div>

          <div className={`mob-item ${openIndex === 1 ? "open" : ""}`}>
            <div
              className="mob-link"
              onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
            >
              Resources
              <span className="mob-arrow">
                ›
              </span>
            </div>
            <div className="mob-submenu">
              <Link href="/blogs"> Blog & Articles</Link>
              <Link href="/faq"> FAQ</Link>
              <Link href="/careers"> Careers</Link>
            </div>
          </div>
          <div className="mob-item">
            <Link className="mob-link" href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </nav>
      {/* HERO */}

    </>
  );
}