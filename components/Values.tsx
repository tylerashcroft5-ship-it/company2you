const values = [
  {
    title: "Compassion",
    description:
      "We care with genuine kindness and deep respect — treating every person we visit like family, with all the warmth and dignity they deserve.",
    highlight: false,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    title: "Companionship",
    description:
      "Friendly visits and meaningful connection — here for real conversations, shared activities, and moments that matter.",
    highlight: false,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3.5" fill="white" />
        <path d="M3 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" fill="white" opacity="0.8" />
        <circle cx="17" cy="7.5" r="3" fill="white" opacity="0.55" />
        <path
          d="M20.5 20v-1.5a3.5 3.5 0 00-3.5-3.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />
      </svg>
    ),
  },
  {
    title: "Trust",
    description:
      "Gentle, dependable and always there. Every companion is DBS checked and lovingly chosen, so you can feel completely at ease.",
    highlight: false,
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
          fill="white"
          fillOpacity="0.15"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section className="bg-[#1B3878] py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Our Promise
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Built on Three Values
          </h2>
          <p className="text-blue-200 max-w-md mx-auto leading-relaxed">
            Everything we do comes from the heart. These are the promises you can
            always count on — for you, and for the people you love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 text-center border ${
                v.highlight
                  ? "bg-white/10 border-[#F47920]/35"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <div
                className={`w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center ${
                  v.highlight ? "bg-[#F47920]/20" : "bg-white/10"
                }`}
              >
                {v.icon}
              </div>
              <h3
                className={`text-xl font-bold mb-3 ${
                  v.highlight ? "text-[#F47920]" : "text-white"
                }`}
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {v.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        {/* DBS badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
                fill="#F47920"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white text-sm font-medium">
              All companions are DBS checked — your safety is our priority
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
