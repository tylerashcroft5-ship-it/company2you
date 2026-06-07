"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  area: string;
  service: string;
  frequency: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B3878]/25 focus:border-[#1B3878] transition-all text-sm";

const labelClass = "block text-sm font-semibold text-[#1B3878] mb-2";

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    area: "",
    service: "",
    frequency: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({
          name: "",
          phone: "",
          email: "",
          area: "",
          service: "",
          frequency: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-5 bg-[#1B3878]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">
              Get in Touch
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Ready to Make a Difference to Someone&apos;s Day?
            </h2>
            <p className="text-blue-200 leading-relaxed mb-10">
              There&apos;s no pressure and no commitment — just a warm, friendly
              conversation. Fill in the form and one of our team will be in
              touch within 24 hours. Whoever you&apos;re reaching out for, you&apos;ll
              always be met with kindness.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  label: "Phone",
                  value: "07599 955100",
                  href: "tel:07599955100",
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        stroke="white"
                        strokeWidth="1.75"
                        fill="none"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "Company2You.uk@gmail.com",
                  href: "mailto:Company2You.uk@gmail.com",
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        stroke="white"
                        strokeWidth="1.75"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Location",
                  value: "St Helens, West Lancashire & surrounding areas",
                  href: null,
                  icon: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        stroke="white"
                        strokeWidth="1.75"
                        fill="none"
                      />
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        stroke="white"
                        strokeWidth="1.75"
                        fill="none"
                      />
                    </svg>
                  ),
                },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-white/10 rounded-xl flex items-center justify-center">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-blue-200/70 text-xs font-semibold uppercase tracking-wide mb-0.5">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="text-white font-medium hover:text-[#F47920] transition-colors text-sm break-all"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm">
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust reminder */}
            <div className="bg-white/8 border border-white/15 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                <p className="text-white text-sm font-semibold">DBS Checked</p>
              </div>
              <p className="text-blue-200/70 text-xs leading-relaxed">
                All Company2You companions are fully DBS checked and vetted for
                your complete peace of mind.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
            {status === "success" ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-[#1B3878]/8 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"
                      fill="#1B3878"
                      fillOpacity="0.15"
                      stroke="#1B3878"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 12l3 3 5-5"
                      stroke="#F47920"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-[#1B3878] mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Enquiry Sent!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                  Thank you for reaching out. One of our team will be in touch within 24
                  hours to discuss your needs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-6">
                  <p
                    className="text-xl font-bold text-[#1B3878] mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Make an Enquiry
                  </p>
                  <p className="text-gray-400 text-sm">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07xxx xxxxxx"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Your Town / Area</label>
                    <input
                      type="text"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      placeholder="e.g. Rainford, Skelmersdale"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      <option>Friendly Visits</option>
                      <option>Conversation &amp; Activities</option>
                      <option>Accompanied Walks</option>
                      <option>Shopping Assistance</option>
                      <option>Appointment Companionship</option>
                      <option>Respite Support for Families</option>
                      <option>Wellbeing Support</option>
                      <option>Not sure / General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Frequency</label>
                    <select
                      name="frequency"
                      value={form.frequency}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select frequency</option>
                      <option>Once a week</option>
                      <option>Twice a week</option>
                      <option>Three+ times a week</option>
                      <option>Flexible / Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    Anything else you&apos;d like us to know?
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a bit more about the person you're enquiring for, their needs, or any questions you have..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm bg-red-50 rounded-xl px-4 py-3">
                    Something went wrong. Please try again or call us directly
                    on{" "}
                    <a href="tel:07599955100" className="font-semibold underline">
                      07599 955100
                    </a>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#1B3878] text-white font-semibold py-4 rounded-xl hover:bg-[#2a4a96] transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          opacity="0.3"
                        />
                        <path
                          d="M12 2a10 10 0 0110 10"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
