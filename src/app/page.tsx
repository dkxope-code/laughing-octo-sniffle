"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BookingForm } from "@/components/BookingForm";

export default function Home() {
  return (
    <main id="home" className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(138,43,226,0.35),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(138,43,226,0.2),transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight"
              >
                Step into the Game Zone at Game Lobby 🎮
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 text-white/80 text-lg"
              >
                Your ultimate PS5 and racing experience in Irinjalakuda.
              </motion.p>
              <div className="mt-8 flex gap-4">
                <a href="#booking" className="btn-primary">Book a Slot</a>
                <a href="#games" className="inline-flex h-10 items-center px-5 rounded-full glass">View Pricing</a>
              </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <div className="neon-card p-6">
                <Image src="/hero-controller.png" alt="Glowing PS5 controller" width={640} height={400} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="about">
        <div className="neon-card p-8">
          <h2 className="font-heading text-2xl text-white">About Game Lobby</h2>
          <p className="mt-3 text-white/80">
            Game Lobby is a chill, high-quality gaming space with neon vibes and immersive setups in Aura Plaza, near Mas Theatre, Irinjalakuda. Grab your friends and play the latest PS5 titles or feel the adrenaline in our full racing simulator.
          </p>
        </div>
      </section>

      {/* Games & Pricing */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" id="games">
        <h2 className="font-heading text-3xl text-white mb-6">Games & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="neon-card p-6">
            <h3 className="text-white text-xl font-semibold">Premium PS5 Zone (Private Room)</h3>
            <p className="text-white/70 mt-1">Larger TV, private setup.</p>
            <p className="text-white mt-4">₹80 per person/hour</p>
            <p className="text-white/80">4-person offer: ₹280</p>
            <a href="#booking" className="btn-primary mt-6">Book Now</a>
          </div>
          <div className="neon-card p-6">
            <h3 className="text-white text-xl font-semibold">Standard PS5 Zone (2 Stations)</h3>
            <p className="text-white/70 mt-1">Normal-size TVs, open setup.</p>
            <p className="text-white mt-4">₹60 per person/hour</p>
            <p className="text-white/80">4-person offer: ₹200</p>
            <a href="#booking" className="btn-primary mt-6">Book Now</a>
          </div>
          <div className="neon-card p-6">
            <h3 className="text-white text-xl font-semibold">Racing Simulator</h3>
            <p className="text-white/70 mt-1">Full setup with racing seat and steering wheel.</p>
            <p className="text-white mt-4">₹200 per person/hour</p>
            <a href="#booking" className="btn-primary mt-6">Book Now</a>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="booking">
        <h2 className="font-heading text-3xl text-white mb-6">Book a Slot</h2>
        <BookingForm />
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="gallery">
        <h2 className="font-heading text-3xl text-white mb-6">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="neon-card overflow-hidden">
              <Image src={`https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=1200&auto=format&fit=crop`} alt="Gaming lounge" width={600} height={400} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="contact">
        <h2 className="font-heading text-3xl text-white mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="neon-card p-6">
            <p className="text-white/80">Aura Plaza Building, near Mas Theatre, Irinjalakuda</p>
            <p className="text-white mt-2">Phone: <a href="tel:+918289940096" className="underline hover:text-purple-300">+91 8289940096</a></p>
            <div className="mt-3 flex gap-3">
              <a className="btn-primary" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a className="inline-flex h-10 items-center px-5 rounded-full glass" href="https://wa.me/918289940096" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
          <div className="aspect-video neon-card overflow-hidden">
            <iframe
              title="Game Lobby Location"
              src="https://www.google.com/maps?q=Aura%20Plaza%20Irinjalakuda&z=15&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
