import type { Metadata } from "next"
import { site } from "@/lib/site"
import ContactForm from "./ContactForm"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact All Used Auto Parts Warehouse – get a free quote, ask about a part, or visit our warehouse. We're here to help Monday through Saturday.",
}

const faqs = [
  {
    q: "Do you ship parts nationwide?",
    a: "Yes! We ship to all 50 states via UPS, FedEx, and freight carriers for large items. Most orders ship same or next business day.",
  },
  {
    q: "What warranty do your parts come with?",
    a: "Most parts include our 90-day hassle-free replacement warranty. Warranty details vary by part type — ask us when you order.",
  },
  {
    q: "Can I pick up parts in person?",
    a: "Absolutely. Our warehouse is open for in-person pickup Mon–Fri 8–6 and Sat 9–4. Please call ahead to confirm the part is ready.",
  },
  {
    q: "How do I know if a part will fit my vehicle?",
    a: "Our team verifies compatibility using VIN data and OEM fitment guides. Providing your VIN when you inquire gives us the most accurate match.",
  },
  {
    q: "Do you accept returns?",
    a: "Yes. Parts can be returned within 30 days if unused and in the original packaging. Parts covered by the 90-day warranty are replaced, not refunded.",
  },
]

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1 className="text-balance">Contact Us</h1>
          <p>Have a question or need a part? Our team is ready to help.</p>
        </div>
      </div>

      {/* Contact */}
      <section>
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div className="contact-info">
              <h3>Get In Touch</h3>

              <div className="contact-detail">
                <span className="icon" aria-hidden="true">
                  &#128222;
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                  <p style={{ fontSize: ".82rem", color: "#7f8c8d" }}>
                    {site.hours.weekdays}
                    <br />
                    {site.hours.saturday}
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="icon" aria-hidden="true">
                  &#9993;
                </span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                  <p style={{ fontSize: ".82rem", color: "#7f8c8d" }}>We typically respond within 2 business hours.</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="icon" aria-hidden="true">
                  &#128205;
                </span>
                <div>
                  <h4>Location</h4>
                  <p>{site.address}</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="icon" aria-hidden="true">
                  &#9201;
                </span>
                <div>
                  <h4>Hours of Operation</h4>
                  <p>{site.hours.weekdays}</p>
                  <p>{site.hours.saturday}</p>
                  <p>{site.hours.sunday}</p>
                </div>
              </div>

              <div className="contact-note">
                <p>
                  <strong>Need a part fast?</strong> Call us directly for the quickest response. Our parts specialists
                  can check availability and pricing in real time.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="contact-form-wrap">
              <h3>Request a Part or Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-light">
        <div className="container">
          <div className="section-title">
            <h2>
              Find <span>Our Warehouse</span>
            </h2>
            <p>Conveniently located with easy truck and trailer access.</p>
          </div>
          <div className="map-placeholder">
            <span aria-hidden="true" style={{ fontSize: "3rem" }}>
              &#128205;
            </span>
            <p style={{ fontWeight: 600 }}>{site.address}</p>
            <p style={{ fontSize: ".85rem" }}>
              Open: {site.hours.weekdays} &nbsp;|&nbsp; {site.hours.saturday}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-title">
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
