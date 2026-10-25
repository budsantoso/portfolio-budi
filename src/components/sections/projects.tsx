"use client";

import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Server, Database, CreditCard, Cloud, Zap, Cpu } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  "Modernization / Data Processing": <Server className="w-5 h-5" />,
  "Research Platform / Web Application": <Database className="w-5 h-5" />,
  "Financial Services / Payment Integration": <CreditCard className="w-5 h-5" />,
  "AI / Business Automation": <Cpu className="w-5 h-5" />,
  "Backend Architecture / API Gateway": <Zap className="w-5 h-5" />,
  "Financial Systems / Data Integrity": <CreditCard className="w-5 h-5" />,
  "SaaS Architecture / Backend Systems": <Cloud className="w-5 h-5" />,
};

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 lg:py-32 bg-background"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="projects-heading"
            className="font-heading text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4"
          >
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Showcasing innovative backend, data engineering, and full-stack solutions.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.filter((p) => p.featured).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  {categoryIcons[project.category] || <Zap className="w-5 h-5" />}
                  <span className="text-xs font-medium text-tertiary uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold text-primary mb-3">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-md border border-border bg-neutral px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-tertiary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}