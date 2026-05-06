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
        <p className="desc">
          Our customers span across industries such as oil & gas, marine, manufacturing, pharmaceuticals, power generation, water treatment, and semiconductor — where every second of downtime counts.

          We support them with genuine, OEM, and replacement spares from leading automation brands such as: Allen-Bradley, Siemens, ABB, B&R, Mitsubishi, Beckhoff, Fuji Electric, Omron, Yokogawa, Phoenix Contact, Honeywell, Fanuc, Lenze, Schneider Electric, GE, Danfoss, Yaskawa, Indramat, Emerson, KUKA and many more.
        </p>
        <p className="desc">

          industrial parts supplier
          Our global automation management capabilities mean we can source and ship critical industrial automation components within 24 hours to 14 days, anywhere in the world — including Southeast Asia, Australia, Europe, and the Middle East.
        </p>

        <Link href="/offer-product-list" className="btn-primary">
          Explore Products →
        </Link>
      </div>
    </section>
  );
}