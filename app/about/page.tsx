import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about All Used Auto Parts Warehouse – a family-owned business with over 20 years of experience supplying quality used auto parts nationwide.",
}

const values = [
  "Inspected and tested parts — no surprises",
  "90-day hassle-free replacement warranty",
  "Same-day or next-day shipping on most orders",
  "Knowledgeable staff with decades of experience",
  "Environmentally responsible recycling practices",
]

const stats = [
  { num: "2003", label: "Year Founded" },
  { num: "50,000+", label: "Parts in Inventory" },
  { num: "100k+", label: "Customers Served" },
  { num: "50,000 sq ft", label: "Warehouse Facility" },
]

const process = [
  { icon: "\u{1F50D}", title: "1. Inspection", text: "Parts are visually inspected for damage, wear, and overall condition the moment they arrive." },
  { icon: "\u2699", title: "2. Testing", text: "Mechanical and electrical components are tested on our in-house testing equipment." },
  { icon: "\u{1F3ED}", title: "3. Cataloging", text: "Passing parts are logged into our system with full vehicle VIN and compatibility data." },
  { icon: "\u{1F69A}", title: "4. Packaging & Shipping", text: "Parts are carefully packaged to prevent damage in transit and shipped promptly." },
]

const team = [
  { avatar: "\u{1F469}", name: "Sandra M.", role: "Owner & General Manager" },
  { avatar: "\u{1F468}", name: "Carlos R.", role: "Parts Manager" },
  { avatar: "\u{1F468}", name: "Mike T.", role: "Lead Technician" },
  { avatar: "\u{1F469}", name: "Jess L.", role: "Customer Service Lead" },
  { avatar: "\u{1F468}", name: "Dave K.", role: "Shipping & Logistics" },
]

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 className="text-balance">About All Used Auto Parts Warehouse</h1>
          <p>Family-owned. Customer-focused. Over 20 years of trusted service.</p>
        </div>
      </div>

      {/* Intro */}
      <section>
        <div className="container">
          <div className="about-intro">
            <div className="about-img" aria-hidden="true">
              &#127981;
            </div>
            <div className="about-text">
              <h2>Your Trusted Source for Quality Used Auto Parts</h2>
              <p>
                Founded in 2003, All Used Auto Parts Warehouse started as a small family operation with a simple
                mission: give everyday drivers access to high-quality used parts at prices they can afford. Over two
                decades later, we&apos;ve grown into one of the most trusted names in the used auto parts industry.
              </p>
              <p>
                Our 50,000+ sq. ft. facility houses tens of thousands of parts for nearly every make and model on the
                road. Every piece in our inventory is hand-inspected by our experienced technicians before being made
                available for sale.
              </p>
              <ul className="values-list">
                {values.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
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

      {/* Process */}
      <section className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>
              Our <span>Process</span>
            </h2>
            <p>Every part goes through our rigorous 4-step process before it reaches you.</p>
          </div>
          <div className="features-grid">
            {process.map((p) => (
              <div className="feature-card" key={p.title}>
                <div className="icon" aria-hidden="true">
                  {p.icon}
                </div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="container">
          <div className="section-title">
            <h2>
              Meet the <span>Team</span>
            </h2>
            <p>Our experienced team is here to help you find exactly what you need.</p>
          </div>
          <div className="team-grid">
            {team.map((t) => (
              <div className="team-card" key={t.name}>
                <div className="team-avatar" aria-hidden="true">
                  {t.avatar}
                </div>
                <h3>{t.name}</h3>
                <span>{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="bg-light">
        <div className="container" style={{ maxWidth: 780, textAlign: "center" }}>
          <div className="section-title">
            <h2>
              Environmentally <span>Responsible</span>
            </h2>
            <p>
              We are committed to reducing automotive waste. By reusing quality parts, we keep millions of pounds of
              metal, rubber, and fluids out of landfills every year. All fluids are drained and properly recycled, and
              scrap metal is sent to certified recycling facilities.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
