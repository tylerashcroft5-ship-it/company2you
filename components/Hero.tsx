import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#FBF8F3] min-h-screen flex items-center overflow-hidden pt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #F47920 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #1B3878 0%, transparent 65%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-20 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 mb-6 bg-[#1B3878]/8 border border-[#1B3878]/12 px-4 py-2.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#F47920] flex-shrink-0 animate-pulse" />
              <span className="text-[#1B3878] text-sm font-semibold">
                DBS Checked &middot; West Lancs, St Helens, Rainford &amp; Surrounding Areas
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[58px] font-bold leading-[1.08] mb-6 text-[#1C1C2E]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              <span className="text-[#F47920] italic">Enhancing Well-being<br />Through</span>
              <br />
              Meaningful Companionship<br />
              <span className="text-[#F47920] italic">That Feels Like Family</span>
            </h1>

            {/* Body copy */}
            <div className="space-y-4 text-gray-500 leading-relaxed text-base sm:text-lg mb-8">
              <p>
                Welcome to our befriending and companionship service for older adults.
              </p>
              <p>
                Our service is tailored for adults living alone, adults with disabilities
                or long-term illnesses, and adults with poor mental health who require
                wellbeing support.
              </p>
              <p>
                Our aim is to reduce loneliness through meaningful companionship, social
                connection, and supportive human connection within their own homes.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Many older adults spend days — sometimes even weeks — without having
                someone to talk to, share a smile with, or simply feel that someone cares.
                No one should feel forgotten or alone, especially after spending a lifetime
                caring for others, raising families, working hard, and contributing to the
                world around them.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#1B3878] text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-[#243f8f] transition-all hover:shadow-xl hover:shadow-[#1B3878]/25 hover:-translate-y-0.5"
              >
                Book a Visit
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
            <div className="mt-10 pt-8 border-t border-gray-200/70 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { value: "£23/hr", label: "From per hour" },
                { value: "7", label: "Services available" },
                { value: "DBS", label: "Fully checked" },
                { value: "2hr+", label: "Minimum visit" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-[#1B3878] mb-0.5" style={{ fontFamily: "var(--font-playfair), serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo */}
          <div className="hidden lg:block relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#1B3878]/15 aspect-[4/5]">
              <Image
                src="/hero-companion.jpg"
                alt="Companion visit — older adult enjoying time with a Company2You companion"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F47920]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#F47920"/>
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1B3878] font-bold text-sm">DBS Checked Companions</p>
                    <p className="text-gray-400 text-xs">Fully vetted for your peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F47920]/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1B3878]/8 rounded-full blur-xl" />
          </div>

        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 36C240 72 480 0 720 36C960 72 1200 0 1440 36L1440 72L0 72Z" fill="#1B3878" />
        </svg>
      </div>
    </section>
  );
}
