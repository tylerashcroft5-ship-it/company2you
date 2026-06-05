const downloads = [
  {
    title: "Client Onboarding Form",
    description: "Complete this form when starting your companionship journey with us. Helps us understand your needs, preferences, and availability.",
    file: "/downloads/client-onboarding-form.pdf",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Client Support Plan",
    description: "A personalised plan created for each client outlining goals, preferences, frequency of visits, and areas of support.",
    file: "/downloads/client-support-plan.pdf",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function Downloads() {
  return (
    <section id="downloads" className="py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
            Documents
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1B3878] mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Downloads &amp; Forms
          </h2>
          <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
            Everything you need to get started with Company2You. Download,
            complete, and return to Nicola before your first visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {downloads.map((d, i) => (
            <div
              key={i}
              className="bg-[#FBF8F3] border border-gray-100 rounded-2xl p-7 flex flex-col"
            >
              <div className="w-12 h-12 bg-[#1B3878]/8 rounded-xl flex items-center justify-center text-[#1B3878] mb-5">
                {d.icon}
              </div>
              <h3
                className="text-lg font-bold text-[#1B3878] mb-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {d.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {d.description}
              </p>
              <a
                href={d.file}
                download
                className="inline-flex items-center justify-center gap-2 bg-[#1B3878] text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-[#2a4a96] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                Download PDF
              </a>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="bg-[#1B3878]/5 border border-[#1B3878]/10 rounded-2xl px-6 py-4 flex items-start gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5 text-[#1B3878]">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
            <p className="text-gray-500 text-sm leading-relaxed">
              <span className="font-semibold text-[#1B3878]">Our service is a befriending and companionship service.</span>{" "}
              We do not provide medical care, personal care, or domestic care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
