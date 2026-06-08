import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Company2You",
  description: "Terms and Conditions for Company2You Companionship & Befriending Service, West Lancashire and surrounding areas.",
};

const terms = [
  {
    number: "1",
    title: "Services",
    content: "Company2You provides befriending and companionship services to enhance the wellbeing and quality of life for our clients. We offer friendly conversation, companionship, and social engagement based on each client's personalised support plan. Our service is a befriending and companionship service — we do not provide medical care, personal care, or domestic care.",
  },
  {
    number: "2",
    title: "Minimum Booking",
    content: "The minimum booking for all visits is 2 hours per visit.",
  },
  {
    number: "3",
    title: "Plans & Booking Options",
    content: "Flexible weekly and monthly plans are available to suit your needs. All bookings are subject to availability.",
  },
  {
    number: "4",
    title: "Cancellation Policy",
    content: "We require at least 24 hours' notice for any scheduled visit. Cancellations made with less than 24 hours' notice may be subject to a cancellation fee. Less than 48 hours' notice = 50% charge. Less than 24 hours' notice = full payment.",
  },
  {
    number: "5",
    title: "Personalised Support",
    content: "We believe in providing care that feels like family. A personalised support plan will be created for each individual based on their preferences, routines, and specific needs. This plan may be reviewed and updated as needed.",
  },
  {
    number: "6",
    title: "Payment Terms",
    content: "Payment is due as per the agreed schedule. Accepted payment methods include bank transfer and other agreed-upon methods. Any additional services or hours outside of the agreed plan will be billed separately.",
  },
  {
    number: "7",
    title: "Changes to Bookings",
    content: "We understand that plans can change. We will do our best to accommodate changes to your schedule with as much notice as possible.",
  },
  {
    number: "8",
    title: "Our Commitment",
    content: "Company2You is committed to providing compassionate, reliable, and respectful companionship. We carefully match companions to ensure the best possible experience for every client.",
  },
  {
    number: "9",
    title: "Limitation of Liability",
    content: "Our services are not a substitute for professional healthcare. We are not liable for any incidents resulting from conditions beyond our control.",
  },
  {
    number: "10",
    title: "Agreement",
    content: "By engaging Company2You services, you agree to these Terms and Conditions. You understand the nature of the services provided, you agree to the booking, payment, and cancellation policies, and you acknowledge that these services are non-medical and non-domestic in nature. A signed copy of these terms will be provided as part of your onboarding documentation.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F3]">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="Company2You" width={150} height={40} className="h-9 w-auto object-contain" />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-[#1B3878] hover:text-[#F47920] transition-colors flex items-center gap-1.5"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-16">
        {/* Title block */}
        <div className="bg-[#1B3878] rounded-3xl px-10 py-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #F47920 0%, transparent 70%)", transform: "translate(30%, -30%)" }}/>
          <p className="text-[#F47920] text-xs font-bold tracking-[0.15em] uppercase mb-3">Legal</p>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Terms &amp; Conditions
          </h1>
          <p className="text-blue-200 text-sm leading-relaxed max-w-xl">
            These Terms and Conditions outline the agreement between Company2You
            and our clients regarding in-home companionship services.
          </p>
        </div>

        {/* Notice */}
        <div className="bg-white border border-[#1B3878]/10 rounded-2xl px-6 py-5 mb-10 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5 text-[#1B3878]">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75"/>
            <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-bold text-[#1B3878]">Our service is a befriending and companionship service.</span>{" "}
            We do not provide medical care, personal care, or domestic care.
          </p>
        </div>

        {/* Terms list */}
        <div className="space-y-6">
          {terms.map((t) => (
            <div key={t.number} className="bg-white rounded-2xl p-7 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#1B3878] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {t.number}
                </div>
                <div>
                  <h2
                    className="text-lg font-bold text-[#1B3878] mb-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {t.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="mt-12 bg-[#F47920]/8 border border-[#F47920]/20 rounded-2xl px-8 py-7 text-center">
          <p className="text-[#1B3878] font-semibold mb-2">Questions about our terms?</p>
          <p className="text-gray-500 text-sm mb-4">Get in touch with our team directly.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <a href="tel:07599955100" className="font-semibold text-[#1B3878] hover:text-[#F47920] transition-colors">
              07599 955100
            </a>
            <span className="hidden sm:block text-gray-300">·</span>
            <a href="mailto:Company2You.uk@gmail.com" className="font-semibold text-[#1B3878] hover:text-[#F47920] transition-colors">
              Company2You.uk@gmail.com
            </a>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-[#0f2456] py-8 px-5 mt-16">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200/40">
          <p>&copy; {new Date().getFullYear()} Company2You. All rights reserved.</p>
          <Link href="/" className="hover:text-blue-200/70 transition-colors">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}
