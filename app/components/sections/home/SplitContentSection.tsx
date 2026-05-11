"use client";

import Image from "next/image";
import Link from "next/link";

export default function SplitContentSection() {
  return (
    <section className="split-section split-section--reverse">

      {/* LEFT IMAGE */}
      <div className="split-image">
        <Image
          src="/assets/banner1.jpg"
          alt="PLC Automation"
          fill
          className="img"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="split-content">
        {/* <span className="sub-title">Industrial Automation</span> */}

        <h2 className="title">
          Trusted Global Supplier of Industrial Automation Spare Parts
        </h2>

        <p className="desc">
          At PLC Automation Group, we specialize in the supply of new and obsolete automation spare parts across Singapore, Australia, Malaysia, Indonesia, Thailand, Taiwan, Vietnam, Philippines, India, and over 100 other countries worldwide. As a top automation spare parts supplier, we help industries like yours, buy and sell automation parts globally, including hard-to-find and discontinued models. Whether you’re in our local industrial automation market or beyond, we deliver speed, reliability, and expertise.
        </p>

        <Link href="/offer-product-list" className="btn-primary explore-btn">
          Explore Products →
        </Link>
      </div>
    </section>
  );
}