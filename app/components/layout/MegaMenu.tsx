"use client";
const partsData = {
  plc: {
    title: "PLC & Controllers",
    items: [
      { name: "Siemens S7-200/300/400", count: 2840, href: "/detail/siemens-s7" },
      { name: "Siemens S7-1200/1500", count: 1950, href: "/detail/siemens-s7-plus" },
      { name: "Allen Bradley ControlLogix", count: 1620, href: "/detail/ab-controllogix" },
      { name: "Allen Bradley CompactLogix", count: 1340, href: "/detail/ab-compactlogix" },
      { name: "Mitsubishi MELSEC-Q", count: 980, href: "/detail/mitsubishi-q" },
      { name: "Mitsubishi MELSEC-FX", count: 870, href: "/detail/mitsubishi-fx" },
      { name: "Omron CP1/CJ2", count: 760, href: "/detail/omron-cp" },
      { name: "Schneider Modicon", count: 650, href: "/detail/schneider-modicon" },
      { name: "GE Fanuc RX3i", count: 540, href: "/detail/ge-rx3i" },
      { name: "Delta DVP/AS", count: 430, href: "/detail/delta-dvp" },
      { name: "Mitsubishi MELSEC-FX", count: 870, href: "/detail/mitsubishi-fx" },
      { name: "Omron CP1/CJ2", count: 760, href: "/detail/omron-cp" },
      { name: "Schneider Modicon", count: 650, href: "/detail/schneider-modicon" },
      { name: "GE Fanuc RX3i", count: 540, href: "/detail/ge-rx3i" },
      { name: "Delta DVP/AS", count: 430, href: "/detail/delta-dvp" },
      { name: "Mitsubishi MELSEC-FX", count: 870, href: "/detail/mitsubishi-fx" },
      { name: "Omron CP1/CJ2", count: 760, href: "/detail/omron-cp" },
      { name: "Schneider Modicon", count: 650, href: "/detail/schneider-modicon" },
      { name: "GE Fanuc RX3i", count: 540, href: "/detail/ge-rx3i" },
      { name: "Delta DVP/AS", count: 430, href: "/detail/delta-dvp" },
    ]
  },
  drives: {
    title: "Drives & Inverters",
    items: [
      { name: "ABB ACS880/ACS580", count: 1240, href: "/parts/abb-acs" },
      { name: "Siemens G120/S120", count: 1180, href: "/parts/siemens-g120" },
      { name: "Schneider Altivar", count: 380, href: "/parts/schneider-altivar" },
    ]
  },

};




import s from "./MegaMenu.module.css"

export function chunkArray<T>(arr: T[], size: number): T[][] {
  const out: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size))
  }
  return out
}


export default function MegaMenu() {
  const cols = chunkArray(partsData.plc.items, 5)
  return (

    <div className={s.megaMenuInner} >
      <div
        className={s.megaGrid}
        style={{ gridTemplateColumns: `repeat(${cols.length}, 1fr)`, color: "var(--white)" }}
      >
        {cols.map((col: any, ci: any) => (
          <div key={ci} className={s.megaCol}>
            {col.map((item: any) => (
              <a key={item.href} href={item.href} className={s.megaLink}>
                <span className={s.megaLinkName}>{item.name}</span>
                {/* <span className={s.megaLinkCount}>
                  {item.count.toLocaleString()}
                </span> */}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div >
  );
}

