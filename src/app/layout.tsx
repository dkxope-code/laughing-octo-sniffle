import type { Metadata } from "next";
import { Orbitron, Poppins } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Game Lobby Irinjalakuda | PS5 & Racing Game Station | Book Slots Online",
  description:
    "Game Lobby is a neon-lit PS5 and racing simulator gaming station in Aura Plaza, near Mas Theatre, Irinjalakuda. View pricing and book slots online.",
  keywords: [
    "Game Lobby",
    "Irinjalakuda",
    "PS5",
    "Racing simulator",
    "Gaming station",
    "Book gaming slots",
    "Aura Plaza",
    "Mas Theatre",
  ],
  openGraph: {
    title:
      "Game Lobby Irinjalakuda | PS5 & Racing Game Station | Book Slots Online",
    description:
      "Neon-lit PS5 and racing simulator lounge in Aura Plaza, Irinjalakuda. Explore games, pricing, and book online.",
    type: "website",
    locale: "en_IN",
    url: "https://gamelobby.co.in/",
    siteName: "Game Lobby",
  },
  metadataBase: new URL("https://gamelobby.co.in"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${poppins.variable} antialiased bg-background text-foreground`}>        
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="#home" className="font-heading text-xl tracking-widest text-purple-400 hover:text-purple-300 transition-colors">
              GAME LOBBY
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#games" className="hover:text-purple-300 transition-colors">Games & Pricing</a>
              <a href="#booking" className="hover:text-purple-300 transition-colors">Book a Slot</a>
              <a href="#gallery" className="hover:text-purple-300 transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
              <a href="#booking" className="btn-primary">Book Now</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-white/70">
            © Game Lobby 2025 • Aura Plaza Building, near Mas Theatre, Irinjalakuda
          </div>
        </footer>
      </body>
    </html>
  );
}
