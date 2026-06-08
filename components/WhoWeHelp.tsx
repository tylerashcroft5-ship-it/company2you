const audience = [
  {
    title: "People Living Alone",
    description:
      "Those who would benefit from regular, friendly company and a consistent, caring presence in their lives.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M4 20a8 8 0 0116 0"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Those with Disabilities or Long-Term Conditions",
    description:
      "Anyone living with physical or health challenges who deserves kind support, real companionship, and care that always respects their independence.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M12 8v4l3 3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Mental Health & Emotional Wellbeing",
    description:
      "Anyone feeling lonely, low, or anxious who would treasure regular, meaningful company and a caring person to talk to.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: "Families Seeking Respite",
    description:
      "Devoted family carers who deserve a trusted, caring pair of hands to step in — so they can rest, recover, and look after themselves too.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function WhoWeHelp() {
  return (
    <section className="pt-12 pb-24 px-5 bg-[#FBF8F3]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Who We Support
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1B3878] mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Caring for the People
              <br />
              Who Matter Most
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-lg">
              We support older adults in living safely, happily, and
              independently in the comfort of their own home. Our service is
              for anyone who would benefit from a little extra company and
              care.
            </p>

            <div className="space-y-6">
              {audience.map((a, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#1B3878]/8 rounded-xl flex items-center justify-center text-[#1B3878]">
                    {a.icon}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[#1B3878] mb-1 text-sm"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {a.title}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {a.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: callout */}
          <div className="bg-[#1B3878] rounded-3xl p-10 text-white relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10"
              style={{
                background:
                  "radial-gradient(circle, #F47920 0%, transparent 70%)",
                transform: "translate(30%, -30%)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-36 h-36 rounded-full opacity-8"
              style={{
                background:
                  "radial-gradient(circle, white 0%, transparent 70%)",
                transform: "translate(-30%, 30%)",
              }}
            />

            <p
              className="text-3xl sm:text-4xl font-bold leading-snug mb-6 relative"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              &ldquo;Better Together.
              <br />
              <span className="text-[#F47920] italic">Every Day.&rdquo;</span>
            </p>
            <p className="text-blue-200 leading-relaxed mb-10 relative text-sm">
              Companionship that brings comfort, joy, and peace of mind —
              right to your door.
            </p>

            <div className="grid grid-cols-2 gap-3 relative">
              {[
                { label: "In-Home Service", icon: "⌂" },
                { label: "Fully Insured", icon: "✓" },
                { label: "DBS Checked", icon: "✓" },
                { label: "Min. 2hr Visits", icon: "⏱" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="bg-white/10 rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2"
                >
                  <span className="text-[#F47920] font-bold">{b.icon}</span>
                  {b.label}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-[#F47920] text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#e06810] transition-all hover:shadow-lg hover:shadow-[#F47920]/30 hover:-translate-y-px relative"
            >
              Enquire Now
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
