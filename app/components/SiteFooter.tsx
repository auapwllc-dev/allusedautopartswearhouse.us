import Link from "next/link"
import { site, nav } from "@/lib/site"

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>All Used Auto Parts Warehouse</h3>
          <p>{site.description}</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>{site.address}</p>
          <p>{site.phone}</p>
          <p>{site.email}</p>
        </div>
        <div className="footer-col">
          <h4>Hours</h4>
          <p>{site.hours.weekdays}</p>
          <p>{site.hours.saturday}</p>
          <p>{site.hours.sunday}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} All Used Auto Parts Warehouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
