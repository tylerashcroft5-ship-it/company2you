import Image from "next/image";

const cards = [
  {
    title: "Friendly Company at Home",
    description:
      "Whether it's a cup of tea, sharing stories, or enjoying a favourite programme together — we're simply there to be good company. No one should sit at home alone.",
    image: "/hero-companion.jpg",
    alt: "Elderly man enjoying time with a companion over tea",
    cta: "Book a Visit",
    href: "#contact",
    accent: false,
  },
  {
    title: "Shared Activities & Hobbies",
    description:
      "From cooking and baking to gentle crafts, reading, or puzzles — every visit is tailored around what brings your loved one joy and keeps them engaged.",
    image: "/cooking-together.jpg",
    alt: "Companion and older adult cooking together",
    cta: "Our Services",
    href: "#services",
    accent: true,
  },
  {
    title: "Getting Out & About",
    description:
      "Accompanied walks, a trip to the local shops, or a visit to a café — we help older adults stay active, independent, and connected to the world around them.",
    image: null,
    alt: null,
    cta: "Learn More",
    href: "#services",
    accent: false,
  },
];

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
          {cards.map((card, i) => (
            <div
              key={i}
              className={`rounded-3xl overflow-hidden flex flex-col shadow-lg ${
                card.accent
                  ? "bg-[#F47920]"
                  : "bg-[#1B3878]"
              }`}
            >
              {/* Image or styled top */}
              {card.image ? (
                <div className="relative h-52 w-full flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.alt!}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-52 w-full flex-shrink-0 relative overflow-hidden flex items-center justify-center bg-[#0f2456]">
                  {/* Decorative circles */}
                  <div className="absolute w-48 h-48 rounded-full border-2 border-white/10" />
                  <div className="absolute w-32 h-32 rounded-full border-2 border-white/15" />
                  <div className="absolute w-16 h-16 rounded-full border-2 border-white/20" />
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="relative z-10 opacity-60">
                    <circle cx="12" cy="8" r="4" fill="white" />
                    <path d="M6 20v-1a6 6 0 0112 0v1" fill="white" opacity="0.6"/>
                    <path d="M19 8c1.5 0 3 1 3 3s-1.5 3-3 3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <path d="M5 8C3.5 8 2 9 2 11s1.5 3 3 3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    card.accent ? "text-white" : "text-white"
                  }`}
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {card.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed flex-1 mb-6 ${
                    card.accent ? "text-orange-100" : "text-blue-200"
                  }`}
                >
                  {card.description}
                </p>
                <a
                  href={card.href}
                  className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full w-fit transition-all hover:-translate-y-0.5 ${
                    card.accent
                      ? "bg-white text-[#F47920] hover:shadow-lg"
                      : "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                  }`}
                >
                  {card.cta}
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
