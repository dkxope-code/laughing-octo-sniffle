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
        {/* WhatsApp Quick Chat Button */}
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/918289940096?text=Hi%20Game%20Lobby!%20I%20want%20to%20book%20a%20slot."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 z-50 group"
        >
          <span className="sr-only">WhatsApp</span>
          <div className="relative h-14 w-14 rounded-full flex items-center justify-center bg-green-500 shadow-[0_0_20px_rgba(16,185,129,0.6)] ring-2 ring-white/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all">
            {/* WhatsApp Icon */}
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M20.52 3.48C18.95 1.9 16.79 1 14.5 1 8.99 1 4.5 5.49 4.5 11c0 1.77.47 3.47 1.37 4.98L4 23l7.2-1.86c1.45.79 3.07 1.21 4.73 1.21 5.51 0 10-4.49 10-10 0-2.29-.9-4.45-2.48-6.02ZM16 19.5c-1.39 0-2.74-.37-3.93-1.07l-.28-.17-4.28 1.11 1.14-4.17-.18-.3C7.79 13.68 7.5 12.35 7.5 11c0-3.87 3.14-7 7-7 1.87 0 3.63.73 4.95 2.05C20.77 7.37 21.5 9.13 21.5 11c0 3.86-3.14 7-7.5 7.5ZM17.65 14.3c-.21-.1-1.25-.62-1.44-.69-.19-.07-.33-.1-.46.1-.13.19-.53.69-.65.83-.12.14-.24.16-.45.06-.21-.1-.88-.32-1.68-1.02-.62-.55-1.04-1.23-1.16-1.44-.12-.21-.01-.33.09-.43.1-.1.21-.24.31-.36.1-.12.13-.2.2-.33.07-.14.04-.26-.02-.36-.06-.1-.46-1.11-.63-1.52-.17-.41-.34-.35-.46-.35-.12 0-.26-.02-.4-.02-.14 0-.36.05-.55.26-.19.21-.73.71-.73 1.73 0 1.02.75 2  .86 2.14.1.14 1.49 2.27 3.62 3.19 1.39.6 1.93.65 2.63.55.42-.07 1.25-.51 1.43-1 .18-.49.18-.9.12-.98-.05-.08-.19-.13-.4-.23Z" fill="currentColor"/>
            </svg>
          </div>
        </a>
        <footer className="mt-24 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-white/70">
            © Game Lobby 2025 • Aura Plaza Building, near Mas Theatre, Irinjalakuda
          </div>
        </footer>
      </body>
    </html>
  );
}
