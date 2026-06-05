const services = [
  {
    title: "Friendly Visits",
    description:
      "Regular in-home visits providing warm company, a listening ear, and genuine connection that brightens every single day.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Conversation & Activities",
    description:
      "Shared hobbies, games, reading, puzzles, or simply great conversation — tailored to the individual&apos;s interests and pace.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Accompanied Walks",
    description:
      "Gentle walks in the fresh air with a friendly companion — great for physical wellbeing and enjoying the outdoors together.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.75" />
        <path
          d="M8.5 10.5l2 2.5 1 3.5M15.5 10.5l-2 2.5M9 20l1.5-4M7 14l-2 3M17 14l2 3"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.5c1-.8 2-1 3-1.5 1.5-.7 2.5 0 3.5 0l1 1.5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Shopping Assistance",
    description:
      "Help with the weekly shop or picking up essentials — making everyday tasks easier and more enjoyable with a friendly face.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M16 10a4 4 0 01-8 0"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Appointment Companionship",
    description:
      "Accompanying clients to medical appointments, hospital visits, or outings — so no one ever has to face them alone.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M16 2v4M8 2v4M3 10h18"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <path
          d="M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Respite Support for Families",
    description:
      "Giving family carers a well-deserved break, with the reassurance their loved one is in safe, caring and capable hands.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Wellbeing Support",
    description:
      "Holistic support for emotional and mental wellbeing — meaningful engagement, a caring presence, and a genuine listening ear.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
          stroke="currentColor"
          strokeWidth="1.75"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            What We Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1B3878] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Companionship Services
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Every visit is tailored to the individual. We offer a range of
            services designed to bring comfort, connection, and joy to
            everyday life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-[#FBF8F3] hover:bg-[#1B3878] rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
            >
              <div className="w-12 h-12 bg-[#1B3878]/8 group-hover:bg-white/15 rounded-xl flex items-center justify-center mb-5 transition-colors text-[#1B3878] group-hover:text-white">
                {s.icon}
              </div>
              <h3
                className="text-lg font-bold text-[#1B3878] group-hover:text-white mb-2.5 transition-colors"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {s.title}
              </h3>
              <p className="text-gray-500 group-hover:text-blue-100 text-sm leading-relaxed transition-colors">
                {s.description}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-[#F47920] rounded-2xl p-7 flex flex-col justify-between min-h-[200px]">
            <div>
              <p
                className="text-white text-xl font-bold mb-2 leading-snug"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Not sure which service is right?
              </p>
              <p className="text-orange-100 text-sm leading-relaxed">
                Get in touch — we&apos;ll listen and find the perfect
                plan for your loved one.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#F47920] font-semibold text-sm px-5 py-2.5 rounded-full hover:shadow-lg transition-all hover:-translate-y-px w-fit mt-6"
            >
              Get in Touch
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
