import { brands } from "@/app/data/content";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo" style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '0.7rem', 'marginBottom': '0.5rem' }}>
            <Image
              src="/assets/logo.png"
              alt="PLC Automation"
              width={320}
              height={80}

            />
          </div>

          <p>
            PLC Automation Australia Pty Ltd Suite 302, 13/15 Wentworth Ave Australia (2000)


          </p>
          <div className="footer-contact-item">
            📞 +65 8950 7034
          </div>
          <div className="footer-contact-item">
            ✉ sales@plcautomat.com
          </div>
          <div className="footer-contact-item">
            📍 PLC Automation Pte. Ltd. 10 Ubi Crescent, Blk 10, Lobby B Ubi Techpark #05-31, Singapore 408564
          </div>
          <div className="social-icons">
            <Link href="https://www.facebook.com/plcautomat"><i className="fab fa-facebook-f"></i></Link>
            <Link href="https://www.linkedin.com/company/78855232"><i className="fab fa-linkedin-in"></i></Link>
            <Link href="https://www.youtube.com/@salesplcautomationpteltd"><i className="fab fa-youtube"></i></Link>
            <Link href="https://twitter.com/plc_ltd"><i className="fab fa-twitter"></i></Link>
          </div>
        </div>
        <div className="footer-col">
          <h4>
            Brands
          </h4>
          {
            brands.map((brand, index) => (
              <Link href={brand.url} key={index}>
                {brand.name}
              </Link>
            ))
          }
        </div>
        <div className="footer-col">
          <h4>
            Services
          </h4>
          {
            brands.map((brand, index) => (
              <Link href={brand.url} key={index}>
                {brand.name}
              </Link>
            ))
          }
        </div>
        <div className="footer-col">
          <h4>
            Quick Links
          </h4>

          <Link href="/contact-us">About Us</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/faq">FAQ`s</Link>
          <Link href="/contact-us">Privacy & Policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          ©  2022-25 PLC Automation Group All Rights Reserved.
        </span>
        <div className="footer-bottom-links">
          <Link href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link href="/terms-of-use">
            Terms of Use
          </Link>

        </div>
      </div>
    </footer>
  );
}