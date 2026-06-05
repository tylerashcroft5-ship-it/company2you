import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Services from "@/components/Services";
import WhoWeHelp from "@/components/WhoWeHelp";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import BookingForm from "@/components/BookingForm";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Values />
        <Services />
        <WhoWeHelp />
        <Pricing />
        <About />
        <BookingForm />
        <Downloads />
      </main>
      <Footer />
    </>
  );
}
