"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { featuredParts, makes, partTypes } from "@/lib/inventory"

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1990 + 1 }, (_, i) => currentYear - i)

export default function InventorySearch() {
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [part, setPart] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const results = useMemo(() => {
    return featuredParts.filter((p) => {
      const haystack = p.title.toLowerCase()
      if (make && !haystack.includes(make.toLowerCase())) return false
      if (model && !haystack.includes(model.toLowerCase())) return false
      if (part && p.partType !== part) return false
      return true
    })
  }, [make, model, part])

  const showFiltered = submitted && (make || model || part)
  const list = showFiltered ? results : featuredParts

  return (
    <>
      {/* Search */}
      <section>
        <div className="container">
          <div className="part-search">
            <h3>&#128269; Search Our Inventory</h3>
            <form
              className="search-grid"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <div className="form-group">
                <label htmlFor="year">Year</label>
                <select id="year" name="year">
                  <option value="">Select Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="make">Make</label>
                <select id="make" name="make" value={make} onChange={(e) => setMake(e.target.value)}>
                  <option value="">Select Make</option>
                  {makes.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  placeholder="e.g., Camry, F-150"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="part">Part Type</label>
                <select id="part" name="part" value={part} onChange={(e) => setPart(e.target.value)}>
                  <option value="">All Parts</option>
                  {partTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group search-btn-wrap">
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Search Parts
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Notice */}
      <div className="notice">
        <div className="container">
          <span aria-hidden="true" style={{ fontSize: "1.4rem" }}>
            &#9888;
          </span>
          <p>
            <strong>Looking for a specific part?</strong> Our full inventory is best searched by calling{" "}
            <strong>(800) 555-AUTO</strong> or submitting a quote request. Our team can check availability and price in
            seconds.
          </p>
        </div>
      </div>

      {/* Featured / Results */}
      <section className="inventory-section">
        <div className="container">
          <div className="section-title">
            <h2>
              {showFiltered ? "Search " : "Featured "}
              <span>{showFiltered ? "Results" : "Parts"}</span>
            </h2>
            <p>
              {showFiltered
                ? `${list.length} matching part${list.length === 1 ? "" : "s"} — call or email for current availability and pricing.`
                : "A sample of recently added inventory — call or email for current availability and pricing."}
            </p>
          </div>

          {list.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--mid)" }}>
              No matching parts in our featured list. Please{" "}
              <Link href="/contact">submit a quote request</Link> and we&apos;ll locate it for you.
            </p>
          ) : (
            <div className="parts-grid">
              {list.map((p) => (
                <div className="part-card" key={p.sku}>
                  <div className="part-card-img" aria-hidden="true">
                    {p.icon}
                  </div>
                  <div className="part-card-body">
                    <h3>{p.title}</h3>
                    <p className="part-sku">SKU: {p.sku}</p>
                    <p className="part-price">{p.price}</p>
                    <span className="part-condition">{p.condition}</span>
                  </div>
                  <div className="part-card-footer">
                    <Link href="/contact" className="btn btn-outline" style={{ width: "100%", textAlign: "center" }}>
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
