"use client";

import Link from "next/link";

import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import clsx from "clsx";

/**
 * ProjectCard – Server Component
 * Props:
 *   project: {
 *     id: number,
 *     name: string,
 *     shortDesc: string,
 *     technologies: string[],
 *     status: string,
 *     github: string,
 *     demo: string,
 *   }
 *   featured: boolean – larger variant for homepage
 */
export default function ProjectCard({ project, featured = false }) {
  const statusClass =
    project.status === "Completed" ? "badge-green" : "badge-yellow";

  return (
    <div
      className="project-card"
      id={`project-card-${project.id}`}
      style={featured ? { borderColor: "var(--border-hover)" } : {}}
    >
      {/* Top row */}
      <div className="project-card-top">
        <div>
          <span className={clsx("badge", statusClass)} style={{ marginBottom: 10, display: "inline-block" }}>
            {project.status}
          </span>
          <h3 className="project-name">{project.name}</h3>
        </div>
        <Link href={`/projects/${project.id}`} style={{ display: "flex", alignItems: "center" }}>
          <ArrowRight
            size={18}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
        </Link>
      </div>

      {/* Description */}
      <p className="project-desc">{project.shortDesc}</p>

      {/* Tech stack */}
      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="project-links" style={{ marginTop: "auto" }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            <GitBranch size={13} /> GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
        <Link href={`/projects/${project.id}`} className="project-link" style={{ marginLeft: "auto" }}>
          Chi tiết →
        </Link>
      </div>
    </div>
  );
}

