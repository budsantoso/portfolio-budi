"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ExternalLink, FileText, Link2 } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 lg:py-32 bg-background"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="contact-heading"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4"
          >
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind, a job opportunity, or want to collaborate? Feel free to reach out.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2 max-w-3xl mx-auto">
          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="font-heading text-xl font-semibold text-primary">Direct Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 text-muted-foreground hover:border-tertiary/30 hover:bg-tertiary/5 hover:text-tertiary transition-all duration-200 w-full"
              >
                <Mail className="w-5 h-5 text-tertiary flex-shrink-0" />
                <span className="font-medium">Email Me</span>
                <span className="ml-auto text-sm text-muted-foreground">{profile.email}</span>
              </a>
              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 text-muted-foreground hover:border-tertiary/30 hover:bg-tertiary/5 hover:text-tertiary transition-all duration-200 w-full"
              >
                <MessageCircle className="w-5 h-5 text-tertiary flex-shrink-0" />
                <span className="font-medium">WhatsApp</span>
                <span className="ml-auto text-sm text-muted-foreground">{profile.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Secondary links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-heading text-xl font-semibold text-primary">Profiles & CV</h3>
            <div className="space-y-3">
              <a
                href={profile.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 text-muted-foreground hover:border-tertiary/30 hover:bg-tertiary/5 hover:text-tertiary transition-all duration-200 w-full"
              >
                <ExternalLink className="w-5 h-5 text-tertiary flex-shrink-0" />
                <span className="font-medium">GitHub</span>
                <span className="ml-auto text-sm text-muted-foreground">{profile.github.username}</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 text-muted-foreground hover:border-tertiary/30 hover:bg-tertiary/5 hover:text-tertiary transition-all duration-200 w-full"
              >
                <Link2 className="w-5 h-5 text-tertiary flex-shrink-0" />
                <span className="font-medium">LinkedIn</span>
                <span className="ml-auto text-sm text-muted-foreground">Connect</span>
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 text-muted-foreground hover:border-tertiary/30 hover:bg-tertiary/5 hover:text-tertiary transition-all duration-200 w-full"
              >
                <FileText className="w-5 h-5 text-tertiary flex-shrink-0" />
                <span className="font-medium">Download CV</span>
                <span className="ml-auto text-sm text-muted-foreground">PDF</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          <p>Built with Next.js 15 + Tailwind CSS + Framer Motion</p>
          <p className="mt-1">© 2025 {profile.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}