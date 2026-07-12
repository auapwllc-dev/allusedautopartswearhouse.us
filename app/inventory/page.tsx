import type { Metadata } from "next"
import Link from "next/link"
import { categories } from "@/lib/inventory"
import InventorySearch from "./InventorySearch"

export const metadata: Metadata = {
  title: "Inventory",
  description:
    "Browse All Used Auto Parts Warehouse inventory – engines, transmissions, body parts, electrical components, and more for all makes and models.",
}

export default function InventoryPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 className="text-balance">Parts Inventory</h1>
          <p>50,000+ quality-inspected parts ready to ship. Search below or call us for a custom quote.</p>
        </div>
      </div>

      <InventorySearch />

      {/* Categories */}
      <section className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>
              Browse by <span>Category</span>
            </h2>
          </div>
          <div className="categories-grid">
            {categories.map((c) => (
              <div className="category-card" key={c.name}>
                <div className="icon" aria-hidden="true">
                  {c.icon}
                </div>
                <h3>{c.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner">
        <div className="container">
          <h2>{"Don't See What You're Looking For?"}</h2>
          <p>
            We have access to an extended network of 200+ salvage yards. Describe the part and we&apos;ll find it for
            you.
          </p>
          <Link href="/contact" className="btn btn-white btn-lg">
            Submit a Part Request
          </Link>
        </div>
      </div>
    </>
  )
}
