"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { site, nav } from "@/lib/site"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname === href + "/"

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <span>&#128222; {site.phone}</span>
          <span>&#9993; {site.email}</span>
          <span>
            &#9201; {site.hours.weekdays} &nbsp;|&nbsp; {site.hours.saturday} &nbsp;|&nbsp; {site.hours.sunday}
          </span>
        </div>
      </div>

      {/* Header / Navigation */}
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="logo" onClick={() => setOpen(false)}>
            <span className="logo-icon" aria-hidden="true">
              &#128663;
            </span>
            <span className="logo-text">
              <span className="logo-main">All Used Auto Parts</span>
              <span className="logo-sub">Warehouse</span>
            </span>
          </Link>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            &#9776;
          </button>

          <nav className={`site-nav${open ? " open" : ""}`}>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={isActive(item.href) ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}
