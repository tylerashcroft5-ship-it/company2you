export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-[#FBF8F3]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual panel */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-[#1B3878] rounded-3xl max-w-[420px] mx-auto lg:mx-0 p-10 relative overflow-hidden min-h-[420px] flex flex-col justify-end">
              <div
                className="absolute top-0 right-0 w-56 h-56 rounded-full opacity-12"
                style={{
                  background:
                    "radial-gradient(circle, #F47920 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(155deg, #1B3878 0%, #0f2456 100%)",
                }}
              />

              {/* Decorative concentric rings */}
              <svg
                className="absolute top-8 left-8 opacity-10"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
              >
                <circle cx="60" cy="60" r="30" stroke="white" strokeWidth="1" />
                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="58" stroke="white" strokeWidth="0.5" />
              </svg>

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-[#F47920] text-white text-xs font-bold px-4 py-2 rounded-full mb-5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
                  </svg>
                  Founder &amp; Lead Companion
                </div>
                <h3
                  className="text-white text-4xl font-bold mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Nicola
                  <br />
                  Wilson
                </h3>
                <p className="text-blue-200/70 text-sm">
                  Company2You &middot; Rainford &amp; West Lancashire
                </p>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute bottom-6 -right-2 sm:right-4 bg-white rounded-2xl shadow-xl p-5 max-w-[155px]">
              <p
                className="text-[#F47920] text-4xl font-bold leading-none"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                100%
              </p>
              <p className="text-gray-500 text-xs leading-tight mt-1.5">
                Dedicated to your loved one&apos;s wellbeing &amp; dignity
              </p>
            </div>
          </div>

          {/* Right: story */}
          <div className="order-1 lg:order-2">
            <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Meet the Founder
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1B3878] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              A Life Spent
              <br />
              Caring for Others
            </h2>

            <div className="space-y-5 text-gray-500 leading-relaxed text-[0.95rem]">
              <p>
                Nicola brings a rich background in care work and years of
                hands-on experience supporting vulnerable individuals. As a
                mother of four, she has always understood the true importance
                of compassion, connection, and making people feel seen,
                valued, and supported.
              </p>
              <p>
                Every day, Nicola witnesses the reality that many older adults
                are facing — loneliness, isolation, and long periods without
                meaningful companionship. That&apos;s why she founded Company2You:
                to build a befriending and companionship service that brings
                comfort, connection, friendship, and dignity to those who may
                otherwise feel invisible.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 border-l-4 border-[#F47920] pl-6 py-1">
              <p
                className="text-[#1B3878] text-xl sm:text-2xl font-bold leading-snug italic"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                &ldquo;No one should feel forgotten or alone — especially after
                spending a lifetime caring for others.&rdquo;
              </p>
              <p className="text-gray-400 text-sm mt-3 font-medium">
                — Nicola Wilson, Founder
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-[#1B3878] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#2a4a96] transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Get in Touch with Nicola
              <svg
                width="13"
                height="13"
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
          </div>
        </div>
      </div>
    </section>
  );
}
