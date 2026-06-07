const included = [
  "Friendly in-home companionship visit",
  "Conversation, activities & shared hobbies",
  "Accompanied walks & light outings",
  "Shopping trips & errand assistance",
  "Appointment companionship & support",
  "Family respite cover",
  "Wellbeing & emotional support check-in",
  "DBS checked companion, fully vetted",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Transparent Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1B3878] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Simple, Honest Rates
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            No hidden fees. No complicated packages. Just warm, quality
            companionship at a straightforward rate.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-[#1B3878] rounded-3xl overflow-hidden shadow-2xl shadow-[#1B3878]/20">
            {/* Price header */}
            <div className="px-10 pt-10 pb-8 border-b border-white/10 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-52 h-52 rounded-full opacity-10"
                style={{
                  background:
                    "radial-gradient(circle, #F47920 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div className="flex items-end gap-2 mb-2 relative">
                <span
                  className="text-7xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  £23
                </span>
                <span className="text-blue-200 text-xl mb-2">/hour</span>
              </div>
              <p className="text-[#F47920] font-semibold text-sm relative">
                Minimum 2hr visits
              </p>
              <p className="text-blue-200/70 text-sm mt-1 relative">
                Starting from £46 per visit
              </p>
            </div>

            {/* Discounts */}
            <div className="px-10 py-6 border-b border-white/10">
              <p className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">
                Loyalty discounts:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F47920]/15 border border-[#F47920]/30 rounded-xl px-4 py-3.5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F47920] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">5%</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Monthly Booking</p>
                    <p className="text-blue-200 text-xs mt-0.5">5% off when you book a regular monthly schedule</p>
                  </div>
                </div>
                <div className="bg-[#F47920]/20 border border-[#F47920]/40 rounded-xl px-4 py-3.5 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F47920] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">10%</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">3-Month Booking</p>
                    <p className="text-blue-200 text-xs mt-0.5">10% off when you commit to a 3-month schedule</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Included list */}
            <div className="px-10 py-8">
              <p className="text-white font-semibold mb-6 text-xs uppercase tracking-wider">
                Every visit includes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" fill="#F47920" opacity="0.2" />
                        <path
                          d="M6 10l3 3 5-5"
                          stroke="#F47920"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-blue-100 text-sm leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="px-10 pb-10">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-[#F47920] text-white font-semibold py-4 rounded-full hover:bg-[#e06810] transition-all hover:shadow-xl hover:shadow-[#F47920]/30 hover:-translate-y-0.5 text-sm"
              >
                Book a Visit Today
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-center text-blue-200/50 text-xs mt-4">
                No commitment required. Contact us to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
