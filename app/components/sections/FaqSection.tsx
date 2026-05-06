"use client";


import { faqByCategory } from "@/app/data/content";
import { useMemo, useState } from "react";

// type Category = "general" | "sourcing" | "shipping" | "warranty";

type Category = keyof typeof faqByCategory;
export default function FaqSection() {
    const [activeTab, setActiveTab] = useState<Category>("Ordering");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // ✅ Memoized categories
    const categories = useMemo(
        () => Object.keys(faqByCategory) as Category[],
        []
    );

    // ✅ Memoized active FAQ list
    const activeFaqs = useMemo(
        () => faqByCategory[activeTab],
        [activeTab]
    );

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    

    return (
        <section className="faq-section">
            <div className="faq-inner">
                <div className="faq-left">
                    <span className="section-tag">
                        Got Questions?
                    </span>
                    <h2 className="faq-title">
                        Frequently Asked
                        <br />
                        <span className="faq-highlight">
                            Questions
                        </span>
                    </h2>
                    <p className="faq-sub">
                       Find quick answers to common questions about ordering, shipping, and product authenticity.
                    </p>
                    <div className="faq-contact-cards">
                        <a href="tel:+919876543210" className="faq-contact-card">
                            <div className="fcc-icon">
                                📞
                            </div>
                            <div className="fcc-text">
                                <strong>
                                    Call Us
                                </strong>
                                <span>
                                    +91 98765 43210
                                </span>
                            </div>
                        </a>
                        <a href="mailto:info@plcautomation.in" className="faq-contact-card">
                            <div className="fcc-icon">
                                ✉️
                            </div>
                            <div className="fcc-text">
                                <strong>
                                    Email Us
                                </strong>
                                <span>
                                    info@plcautomation.in
                                </span>
                            </div>
                        </a>

                    </div>

                </div>
                {/* RIGHT SIDE */}
                <div className="faq-right">

                    {/* Tabs */}
                    <div className="faq-tabs">
                        {["Ordering", "Shipping", "Parts Authenticity"].map((tab) => (
                            <button
                                key={tab}
                                className={`faq-tab ${activeTab === tab ? "active" : ""}`}
                                onClick={() => {
                                    setActiveTab(tab as Category);
                                    setOpenIndex(0);
                                }}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Accordion */}
                    <div className="faq-group active">
                        {faqByCategory[activeTab].map((item, i) => (
                            <div
                                key={i}
                                className={`faq-item ${openIndex === i ? "active" : ""}`}
                            >
                                <button className="faq-q" onClick={() => toggleFaq(i)}>
                                    <span>{item.question}</span>
                                    <span className="faq-icon">
                                        {openIndex === i ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className="faq-a"
                                    style={{
                                        maxHeight: openIndex === i ? "200px" : "0px",
                                    }}
                                >
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
// import { useState } from "react";

// export default function FaqSection() {
//     const [fileName, setFileName] = useState("");

//     return (
//         <section className="faq-section">
//             <div className="faq-inner">
//                 {/* Left: heading + contact CTA */}
//                 <div className="faq-left">
//                     <span className="section-tag">
//                         Got Questions?
//                     </span>
//                     <h2 className="faq-title">
//                         Frequently Asked
//                         <br />
//                         <span className="faq-highlight">
//                             Questions
//                         </span>
//                     </h2>
//                     <p className="faq-sub">
//                         Can't find your answer here? Our expert team is ready to help you within 2 hours.
//                     </p>
//                     <div className="faq-contact-cards">
//                         <a href="tel:+919876543210" className="faq-contact-card">
//                             <div className="fcc-icon">
//                                 📞
//                             </div>
//                             <div className="fcc-text">
//                                 <strong>
//                                     Call Us
//                                 </strong>
//                                 <span>
//                                     +91 98765 43210
//                                 </span>
//                             </div>
//                         </a>
//                         <a href="mailto:info@plcautomation.in" className="faq-contact-card">
//                             <div className="fcc-icon">
//                                 ✉️
//                             </div>
//                             <div className="fcc-text">
//                                 <strong>
//                                     Email Us
//                                 </strong>
//                                 <span>
//                                     info@plcautomation.in
//                                 </span>
//                             </div>
//                         </a>

//                     </div>

//                 </div>
//                 {/* Right: accordion */}
//                 <div className="faq-right">
//                     {/* Category tabs */}
//                     <div className="faq-tabs">
//                         <button className="faq-tab active" onClick="faqTab(this,'general')">
//                             General
//                         </button>
//                         <button className="faq-tab" onClick="faqTab(this,'sourcing')">
//                             Sourcing
//                         </button>
//                         <button className="faq-tab" onClick="faqTab(this,'shipping')">
//                             Shipping
//                         </button>
//                         <button className="faq-tab" onClick="faqTab(this,'warranty')">
//                             Warranty
//                         </button>
//                     </div>
//                     {/* General */}
//                     <div className="faq-group active" id="faq-general">
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     What types of automation parts do you supply?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     We supply new, refurbished, and obsolete automation spare parts across all major categories — PLC & controllers, AC/DC drives, HMI & SCADA, servo systems, CNC controllers, power supplies, sensors, and more. We cover 500+ brands including Siemens, ABB, Allen Bradley, Fanuc, Mitsubishi, Omron, and Schneider.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Are your parts genuine and tested?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Yes — every part undergoes a rigorous multi-point verification process before dispatch. New parts come with original manufacturer packaging and certificates. Refurbished parts are tested under load conditions and shipped with a test certificate. We offer a 100% counterfeit-free guarantee or full refund.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Can you supply parts for equipment that is 15–20 years old?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Absolutely. Obsolete and discontinued parts are our specialty. Our global network of 2,000+ verified suppliers allows us to source components that OEMs stopped manufacturing years ago. If a part exists anywhere in the world, we will find it.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Do you work with individual buyers or only large companies?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     We work with everyone — from a small workshop needing a single sensor to Fortune 500 plants requiring annual spare parts contracts. No order is too small. Our minimum order value is just ₹2,500.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     How do I get a quote for a part?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Simply click "Get Quote" on our website, fill in the part number and quantity, and our sourcing team will respond within 2 business hours with pricing, availability, and lead time. You can also WhatsApp or email us directly.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Sourcing */}
//                     <div className="faq-group" id="faq-sourcing">
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     How quickly can you source an urgent/emergency part?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Our emergency sourcing desk operates 24/7. For critical production-line-down situations, we prioritize your request and typically provide availability confirmation within 4–6 hours and dispatch within 24 hours depending on global stock location.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     What if you can't find my part?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     In rare cases where a part cannot be sourced, we offer alternative solutions — functional equivalents from other brands, repair of your faulty unit, or engineering support for a substitute. We never simply say "not available" without exploring every option.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Do you offer repair and refurbishment services?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Yes. We have an in-house repair centre for PLCs, drives, HMIs, and servo systems. All repaired units are tested under operating conditions and shipped with a 6-month repair warranty. Typical turnaround is 5–10 working days.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Can I exchange my old/faulty unit for credit?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Yes — our Exchange Program lets you trade in your faulty or surplus automation parts for credit toward a new purchase. Send us photos and the part number, and we'll provide an exchange valuation within 24 hours.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Do you support bulk or annual procurement contracts?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Yes. We offer Annual Maintenance Contracts (AMC) and bulk procurement agreements with dedicated account managers, preferential pricing, priority sourcing, and quarterly stock reviews. Contact our enterprise team for details.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Shipping */}
//                     <div className="faq-group" id="faq-shipping">
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Do you deliver across India?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Yes — we deliver PAN India via trusted courier partners. Next-day delivery is available for in-stock items to major metros (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune). Remote locations typically receive delivery within 3–5 working days.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Do you ship internationally?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Yes. We export to 40+ countries including UAE, Saudi Arabia, Bangladesh, Sri Lanka, Kenya, Nigeria, and Southeast Asia. We handle all customs documentation, export invoices, and shipping insurance for international orders.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     How are fragile or sensitive parts packaged?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     All electronic parts are packed with anti-static packaging, foam inserts, and moisture barrier bags. Fragile components receive double-box packing with shock-absorbing material. We use industrial-grade packaging certified for air and road freight.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     What payment methods do you accept?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     We accept NEFT/RTGS, UPI, credit/debit cards, cheque, and demand draft. Verified clients with a good track record are eligible for 30–45 day credit terms. International payments via wire transfer (SWIFT) or PayPal are also accepted.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Can I track my order?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Yes. Once dispatched, you will receive an SMS and email with a tracking link. You can also track your order on our website using your order number, or contact our support team for real-time updates.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Warranty */}
//                     <div className="faq-group" id="faq-warranty">
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     What warranty do you offer on parts?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     All new parts carry a minimum 12-month warranty. Refurbished parts come with a 6-month warranty. Repaired units are warranted for 3 months post-repair. Warranty is valid from the date of delivery and covers manufacturing defects and performance failures under normal operating conditions.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     What is your return policy?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     We accept returns within 30 days for unused parts in original packaging. For faulty or incorrectly supplied parts, we arrange free pickup and offer a full replacement or refund within 7 working days. Raise a return request via email or our support portal.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     What if the part is damaged on arrival?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Please photograph the damage and notify us within 48 hours of delivery. We will arrange an immediate replacement at no cost to you. All shipments are insured, so transit damage claims are fully covered.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     Does warranty cover installation issues?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Warranty covers the part itself under correct installation and operating conditions per manufacturer specifications. Our technical support team is available to guide you through installation. Damage caused by incorrect wiring, overvoltage, or misuse is not covered under warranty.
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="faq-item">
//                             <button className="faq-q" onClick="toggleFaq(this)">
//                                 <span>
//                                     How do I raise a warranty claim?
//                                 </span>
//                                 <span className="faq-icon">
//                                     +
//                                 </span>
//                             </button>
//                             <div className="faq-a">
//                                 <p>
//                                     Email us at warranty@plcautomation.in with your order number, part number, description of the issue, and photos or a short video of the fault. Our team will respond within 24 hours with next steps. Most claims are resolved within 5–7 working days.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* end faq-right */}
//             </div>
//         </section>
//     );
// }