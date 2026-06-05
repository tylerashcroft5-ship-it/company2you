export default function Hero() {
  return (
    <section className="relative bg-[#FBF8F3] min-h-screen flex items-center overflow-hidden pt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, #F47920 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #1B3878 0%, transparent 65%)",
          }}
        />
        <svg
          className="absolute top-0 right-0 h-full w-1/2 opacity-[0.04]"
          viewBox="0 0 400 900"
          fill="none"
        >
          <circle
            cx="300"
            cy="220"
            r="180"
            stroke="#1B3878"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="300"
            cy="220"
            r="240"
            stroke="#1B3878"
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="300"
            cy="220"
            r="300"
            stroke="#1B3878"
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="150"
            cy="680"
            r="120"
            stroke="#F47920"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="150"
            cy="680"
            r="180"
            stroke="#F47920"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-24 sm:py-32 w-full">
        <div className="max-w-[700px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 mb-7 bg-[#1B3878]/8 border border-[#1B3878]/12 px-4 py-2.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F47920] flex-shrink-0 animate-pulse" />
            <span className="text-[#1B3878] text-sm font-semibold">
              DBS Checked &middot; Rainford &amp; West Lancashire
            </span>
          </div>

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl lg:text-[76px] font-bold leading-[1.07] mb-7 text-[#1C1C2E]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Companionship
            <br />
            That Feels
            <br />
            <span className="text-[#F47920] italic">Like Family</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-[560px]">
            Warm, trusted companionship visits for older adults across Rainford
            &amp; West Lancashire. We bring connection, comfort, and joy —
            right to your door.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#1B3878] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#243f8f] transition-all hover:shadow-xl hover:shadow-[#1B3878]/25 hover:-translate-y-0.5"
            >
              Book a Visit
              <svg
                width="15"
                height="15"
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
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#F47920] text-[#F47920] font-semibold px-8 py-4 rounded-full text-base hover:bg-[#F47920] hover:text-white transition-all"
            >
              Our Services
            </a>
          </div>

          {/* Stats bar */}
          <div className="mt-14 pt-10 border-t border-gray-200/70 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: "£23/hr", label: "From per hour" },
              { value: "7", label: "Services available" },
              { value: "DBS", label: "Fully checked" },
              { value: "2hr+", label: "Minimum visit" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl font-bold text-[#1B3878] mb-0.5"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0 36C240 72 480 0 720 36C960 72 1200 0 1440 36L1440 72L0 72Z"
            fill="#1B3878"
          />
        </svg>
      </div>
    </section>
  );
}
