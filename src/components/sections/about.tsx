"use client";

import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { Award, GraduationCap, MapPin, Briefcase, Globe } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="w-full py-20 lg:py-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="about-heading"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4"
          >
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Senior Backend Engineer & Data Specialist with 5+ years of experience building scalable systems.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {profile.about.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-lg font-semibold text-primary mb-4">Profile</h3>
              <dl className="space-y-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-4 text-tertiary flex-shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Briefcase className="size-4 text-tertiary flex-shrink-0" />
                  <span>{profile.experience} experience</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="size-4 text-tertiary flex-shrink-0" />
                  <span>{profile.status}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Award className="size-4 text-tertiary flex-shrink-0" />
                  <span>{profile.award}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <GraduationCap className="size-4 text-tertiary flex-shrink-0" />
                  <span>{profile.education.degree}, {profile.education.school} (GPA: {profile.education.gpa})</span>
                </div>
              </dl>
            </div>

            <div className="card bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading text-lg font-semibold text-primary mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-tertiary transition-colors"
                >
                  <span className="w-6 text-center">✉️</span>
                  <span>{profile.email}</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-tertiary transition-colors"
                >
                  <span className="w-6 text-center">💼</span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href={profile.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-tertiary transition-colors"
                >
                  <span className="w-6 text-center">🐙</span>
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-tertiary transition-colors"
                >
                  <span className="w-6 text-center">📄</span>
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}