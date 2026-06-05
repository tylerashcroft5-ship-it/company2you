import Image from "next/image";

export default function GalleryCards() {
  return (
    <section className="py-24 px-5 bg-[#FBF8F3]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Real Visits, Real Difference
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1B3878] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            What a Visit Looks Like
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Every visit is warm, personal, and shaped around the individual.
            Here&apos;s a glimpse of the moments we create together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Card 1 — with photo */}
          <div className="bg-[#1B3878] rounded-3xl overflow-hidden flex flex-col shadow-lg">
            <div className="relative h-52 w-full flex-shrink-0">
              <Image
                src="/hero-companion.jpg"
                alt="Elderly man enjoying time with a companion"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 p-7">
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Friendly Company at Home
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed flex-1 mb-6">
                Whether it&apos;s a cup of tea, sharing stories, or enjoying a
                favourite programme — we&apos;re simply there to be good company.
                No one should sit at home alone.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/15 text-white font-semibold text-sm px-5 py-2.5 rounded-full w-fit hover:bg-white/25 border border-white/20 transition-all"
              >
                Book a Visit
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2 — with photo, accent */}
          <div className="bg-[#F47920] rounded-3xl overflow-hidden flex flex-col shadow-lg">
            <div className="relative h-52 w-full flex-shrink-0">
              <Image
                src="/cooking-together.jpg"
                alt="Companion and older adult cooking together"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 p-7">
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Shared Activities &amp; Hobbies
              </h3>
              <p className="text-orange-100 text-sm leading-relaxed flex-1 mb-6">
                From cooking and baking to gentle crafts, reading, or puzzles
                — every visit is tailored around what brings your loved one
                joy and keeps them engaged.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white text-[#F47920] font-semibold text-sm px-5 py-2.5 rounded-full w-fit hover:shadow-lg transition-all"
              >
                Our Services
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 3 — quote/stat card, no photo needed */}
          <div className="bg-[#0f2456] rounded-3xl flex flex-col shadow-lg relative overflow-hidden">
            {/* Decorative background circles */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #F47920 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full opacity-8" style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

            <div className="flex flex-col flex-1 p-7 relative">
              {/* DBS badge */}
              <div className="inline-flex items-center gap-2 bg-[#F47920]/20 border border-[#F47920]/30 rounded-full px-3 py-1.5 w-fit mb-6">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#F47920"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#F47920] text-xs font-bold">DBS Checked</span>
              </div>

              <p
                className="text-white text-2xl font-bold leading-snug mb-4 flex-1"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                &ldquo;Getting out and about makes such a difference to
                someone&apos;s{" "}
                <span className="text-[#F47920] italic">day.</span>&rdquo;
              </p>

              <div className="border-t border-white/10 pt-5 mt-auto">
                <p className="text-blue-200 text-sm leading-relaxed mb-5">
                  Accompanied walks, local shops, cafés — we help older adults
                  stay active and connected to the world around them.
                </p>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-[#F47920] text-white font-semibold text-sm px-5 py-2.5 rounded-full w-fit hover:bg-[#e06810] transition-all hover:shadow-lg"
                >
                  Learn More
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
