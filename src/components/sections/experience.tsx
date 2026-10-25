"use client";

import { experiences } from "@/data/experience";
import { motion } from "framer-motion";
import { Building2, Code, Database, Server, Globe, Zap } from "lucide-react";

const techIcons: Record<string, React.ReactNode> = {
  Python: <Code className="w-4 h-4" />,
  FastAPI: <Zap className="w-4 h-4" />,
  PHP: <Code className="w-4 h-4" />,
  Laravel: <Server className="w-4 h-4" />,
  "SQL Server": <Database className="w-4 h-4" />,
  MySQL: <Database className="w-4 h-4" />,
  Oracle: <Database className="w-4 h-4" />,
  "REST API": <Globe className="w-4 h-4" />,
  Docker: <Server className="w-4 h-4" />,
  Linux: <Server className="w-4 h-4" />,
};

export function Experience() {
  return (
    <section
      id="experience"
      className="w-full py-20 lg:py-32 bg-background"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="experience-heading"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4"
          >
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building impactful software and data solutions across various roles.
          </p>
        </header>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 lg:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-tertiary font-medium mt-1">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{exp.period}</p>
                </div>
                <Building2 className="w-8 h-8 text-tertiary/30 flex-shrink-0" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="font-heading text-sm font-semibold text-primary mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary flex-shrink-0 mt-2" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-primary mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-neutral px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {techIcons[tech] || <Code className="w-3 h-3" />}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}