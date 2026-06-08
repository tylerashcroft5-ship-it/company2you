import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2456] py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 bg-white rounded-xl px-4 py-3 inline-block">
              <Image
                src="/logo.png"
                alt="Company2You"
                width={380}
                height={72}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-5">
              Companionship &amp; Befriending Service.
              <br />
              Social Interaction.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#F47920"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-white text-xs font-semibold">DBS Checked</span>
            </div>
          </div>

          {/* Services col */}
          <div>
            <p className="text-white font-semibold text-sm mb-5">Our Services</p>
            <ul className="space-y-2.5">
              {[
                "Friendly Visits",
                "Conversation & Activities",
                "Accompanied Walks",
                "Shopping Assistance",
                "Appointment Companionship",
                "Respite Support",
                "Wellbeing Support",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-blue-200/60 text-sm hover:text-[#F47920] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links col */}
          <div>
            <p className="text-white font-semibold text-sm mb-5">Quick Links</p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "About Nicola", href: "#about" },
                { label: "Pricing", href: "#pricing" },
                { label: "Book a Visit", href: "#contact" },
                { label: "Downloads", href: "#downloads" },
                { label: "Terms & Conditions", href: "/terms" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-blue-200/60 text-sm hover:text-[#F47920] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <p className="text-white font-semibold text-sm mb-5">Contact</p>
            <ul className="space-y-4">
              <li>
                <a href="tel:07599955100" className="flex items-center gap-2.5 text-blue-200/60 text-sm hover:text-[#F47920] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.75" fill="none"/>
                  </svg>
                  07599 955100
                </a>
              </li>
              <li>
                <a href="mailto:Company2You.uk@gmail.com" className="flex items-start gap-2.5 text-blue-200/60 text-sm hover:text-[#F47920] transition-colors break-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.75"/>
                  </svg>
                  Company2You.uk@gmail.com
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-blue-200/60 text-sm">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="1.75" fill="none"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.75" fill="none"/>
                  </svg>
                  West Lancashire &amp; Surrounding Areas
                </div>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1BRHGc742C/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-blue-200/60 text-sm hover:text-[#F47920] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M22 12a10 10 0 10-11.563 9.875v-6.987H7.898V12h2.539V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.987A10.002 10.002 0 0022 12z"/>
                  </svg>
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200/40">
          <p>&copy; {year} Company2You. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/terms" className="hover:text-blue-200/70 transition-colors">Terms &amp; Conditions</a>
            <span>·</span>
            <a href="#downloads" className="hover:text-blue-200/70 transition-colors">Downloads</a>
          </div>
          <p className="text-blue-200/25">Site by tyl3rbuilds</p>
        </div>
      </div>
    </footer>
  );
}
