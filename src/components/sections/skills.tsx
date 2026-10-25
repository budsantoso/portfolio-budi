"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full py-20 lg:py-32 bg-background"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="skills-heading"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4"
          >
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive technical stack across backend development, data engineering, and modern infrastructure.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, groupIndex) => (
            <motion.article
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-heading text-lg font-semibold text-primary mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border bg-neutral px-2.5 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}