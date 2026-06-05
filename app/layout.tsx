import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Company2You | Companionship & Befriending Service | Rainford & West Lancashire",
  description:
    "Warm, trusted companionship visits for older adults across Rainford & West Lancashire. DBS checked companions offering friendly visits, accompanied walks, shopping assistance and more. From £23/hr.",
  keywords:
    "companionship service West Lancashire, befriending service Rainford, elderly companion, older adult support, friendly visits, DBS checked, Nicola Wilson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
