import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-5 bg-[#FBF8F3]">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <div className="text-center mb-14">
          <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Our Founder
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1B3878]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Meet Nicola Wilson
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">

          {/* Left: smaller photo card */}
          <div className="mx-auto lg:mx-0 w-[240px] lg:w-full flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <Image
                src="/nicola.jpg"
                alt="Nicola Wilson — Founder of Company2You"
                fill
                className="object-cover object-top"
              />
              {/* Gradient overlay at bottom for name */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B3878]/90 via-[#1B3878]/30 to-transparent pt-12 pb-4 px-4">
                <span className="inline-block bg-[#F47920] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide mb-1.5">
                  Founder &amp; Lead Companion
                </span>
                <p className="text-white font-bold text-base leading-tight" style={{ fontFamily: "var(--font-playfair), serif" }}>
                  Nicola Wilson
                </p>
                <p className="text-blue-200 text-xs">Company2You</p>
              </div>
            </div>
          </div>

          {/* Right: story */}
          <div>
            <div className="space-y-5 text-gray-500 leading-relaxed text-[0.95rem]">
              <p>
                My name is Nicola Wilson. I have a background in care work, and I&apos;m also a mother of four — which has taught me the true importance of compassion, connection, and making people feel seen, valued, and supported.
              </p>
              <p>
                Every day, through both my professional experience and personal life, I see the reality that many older adults in our communities are facing — loneliness, isolation, and long periods without meaningful companionship. It&apos;s heartbreaking to think that people who have spent their lives caring for others, raising families, building communities, and giving so much of themselves can find themselves feeling forgotten and alone.
              </p>
              <p>
                Many older adults spend days, sometimes weeks, without having someone to talk to, share a smile with, or simply feel that someone cares. No one should feel forgotten or alone — especially after spending a lifetime caring for others, working hard, and contributing so much to the world around them.
              </p>
              <p>
                My goal is to help older adults who may be experiencing loneliness by building trusting relationships, encouraging social engagement, and creating opportunities for connection that genuinely improve their quality of life.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 border-l-4 border-[#F47920] pl-6 py-2">
              <p
                className="text-[#1B3878] text-lg sm:text-xl font-semibold italic leading-snug mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                &ldquo;No one should feel forgotten or alone — especially after spending a lifetime caring for others.&rdquo;
              </p>
              <cite className="text-gray-400 text-sm not-italic">— Nicola Wilson, Founder</cite>
            </blockquote>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 bg-[#1B3878] text-white font-semibold px-7 py-3.5 rounded-full text-sm hover:bg-[#243f8f] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in Touch with Nicola
              <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
