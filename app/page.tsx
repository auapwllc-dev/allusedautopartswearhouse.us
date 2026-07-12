import Link from "next/link"
import { site } from "@/lib/site"

const features = [
  { icon: "\u{1F69A}", title: "Nationwide Shipping", text: "Same-day or next-day shipping on most orders to all 50 states." },
  { icon: "\u2705", title: "Quality Inspected", text: "Every part is hand-inspected and tested before it reaches you." },
  { icon: "\u{1F4B0}", title: "Unbeatable Prices", text: "Save up to 70% versus buying new — without sacrificing quality." },
  { icon: "\u{1F6E1}", title: "90-Day Warranty", text: "Hassle-free replacement warranty on most parts, guaranteed." },
]

const categories = [
  { icon: "\u{1F527}", name: "Engines" },
  { icon: "\u2699", name: "Transmissions" },
  { icon: "\u{1F695}", name: "Body Parts" },
  { icon: "\u{1F4A1}", name: "Electrical" },
  { icon: "\u{1F3C1}", name: "Wheels & Tires" },
  { icon: "\u2744", name: "A/C & Heating" },
  { icon: "\u{1F553}", name: "Suspension" },
  { icon: "\u{1F600}", name: "Interior" },
]

const stats = [
  { num: "50,000+", label: "Parts in Inventory" },
  { num: "20+", label: "Years in Business" },
  { num: "100k+", label: "Customers Served" },
  { num: "50", label: "States Served" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1 className="text-balance">
            Quality Used Auto Parts for <span>Every Make &amp; Model</span>
          </h1>
          <p className="text-pretty">
            {site.description} Search our massive inventory or request a fast, free quote from our parts specialists.
          </p>
          <div className="hero-btns">
            <Link href="/inventory" className="btn btn-primary btn-lg">
              Browse Inventory
            </Link>
            <Link href="/contact" className="btn btn-white btn-lg">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>
              Why Choose <span>Us</span>
            </h2>
            <p>Two decades of trusted service, quality parts, and fast nationwide delivery.</p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="icon" aria-hidden="true">
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>
              Browse by <span>Category</span>
            </h2>
            <p>Thousands of parts across every major system, ready to ship.</p>
          </div>
          <div className="categories-grid">
            {categories.map((c) => (
              <Link href="/inventory" className="category-card" key={c.name}>
                <div className="icon" aria-hidden="true">
                  {c.icon}
                </div>
                <h3>{c.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2>{"Can't Find the Part You Need?"}</h2>
          <p>
            We have access to an extended network of 200+ salvage yards. Describe the part and we&apos;ll track it down
            for you.
          </p>
          <Link href="/contact" className="btn btn-white btn-lg">
            Submit a Part Request
          </Link>
        </div>
      </div>
    </>
  )
}
