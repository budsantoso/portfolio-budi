"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Mail, MessageCircle, FileText, ArrowRight, MonitorSmartphone, Gauge, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: MonitorSmartphone, label: "Scalable Systems" },
  { icon: Gauge, label: "High-Load APIs" },
  { icon: ShieldCheck, label: "Reliable & Secure" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 min-h-[92vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-1/4 -right-32 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 h-[300px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left: Text & Actions (col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs text-foreground backdrop-blur-sm"
            >
              <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono font-semibold tracking-wide uppercase text-cyan-400">
                {profile.role}
              </span>
              <span className="text-muted-foreground">• Switch Code</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I am <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {profile.headline}
            </motion.p>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {features.map((f) => (
                <div
                  key={f.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-foreground backdrop-blur-sm shadow-xs"
                >
                  <f.icon className="size-4 text-cyan-400 shrink-0" />
                  <span>{f.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 pt-4"
            >
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 hover:shadow-cyan-500/35"
              >
                <span>Hubungi Saya</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 sm:px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-cyan-500/40"
              >
                <MessageCircle className="size-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 sm:px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-purple-500/40"
              >
                <FileText className="size-4 text-purple-400" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Photo & Professional Card (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Glow behind frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-purple-500/30 to-pink-500/20 blur-xl opacity-75" />

              {/* Card Container */}
              <div className="relative rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 shadow-2xl overflow-hidden">
                
                {/* Photo with modern frame */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-border/60 bg-muted/40 shadow-inner">
                  <Image
                    src="/images/profile.jpg"
                    alt={profile.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Status badge in photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-xl border border-white/10 bg-background/85 px-3 py-2 backdrop-blur-md shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-semibold text-foreground">Available for Projects</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-bold">5+ Yrs</span>
                  </div>
                </div>

                {/* Info below photo */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-heading text-lg font-bold text-foreground">{profile.name}</h2>
                      <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="size-3 text-cyan-400" />
                        {profile.location}
                      </p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-muted/50 px-2.5 py-1 text-center">
                      <span className="text-[10px] uppercase font-mono text-muted-foreground block">Stack</span>
                      <span className="text-xs font-bold text-foreground">Python & PHP</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/60">
                    <div className="rounded-lg bg-muted/40 p-2 text-center">
                      <p className="text-[10px] text-muted-foreground">Experience</p>
                      <p className="font-mono text-xs font-bold text-foreground">5+ Years</p>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-2 text-center">
                      <p className="text-[10px] text-muted-foreground">Databases</p>
                      <p className="font-mono text-xs font-bold text-cyan-400">Postgres / SQL</p>
                    </div>
                    <div className="rounded-lg bg-muted/40 p-2 text-center">
                      <p className="text-[10px] text-muted-foreground">Integrations</p>
                      <p className="font-mono text-xs font-bold text-emerald-400">APIs & ETL</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
