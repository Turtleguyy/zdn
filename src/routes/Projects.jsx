import { FaExternalLinkAlt } from "react-icons/fa";

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="ml-1 inline-block text-xs"
    >
      {children || <FaExternalLinkAlt />}
    </a>
  );
}

function Role({ title, company, companyUrl, dates, children }) {
  return (
    <section className="role">
      <h2>
        {title} @ {company}
        {companyUrl && <ExtLink href={companyUrl} />}
        <span className="subtext">{dates}</span>
      </h2>
      {children}
    </section>
  );
}

export default function Projects() {
  return (
    <>
      <h1>Professional Experience</h1>

      <p>
        Roles and responsibilities across frontend architecture, product
        delivery, and platform development.
      </p>

      <Role
        title="Senior Front End Software Engineer"
        company="AgencyKPI"
        companyUrl="https://www.agencykpi.com/"
        dates="Mar 2022 - Jan 2026"
      >
        <ul className="list-inside list-disc">
          <li>
            Designed and implemented a shared React component library (Tailwind,
            Storybook) used across multiple production applications, improving
            consistency and accelerating delivery.
          </li>
          <li>
            Led frontend architecture across multiple React codebases,
            establishing shared patterns and improving long-term
            maintainability.
          </li>
          <li>
            Shaped ambiguous product initiatives into clearly scoped frontend
            solutions ready for implementation.
          </li>
          <li>
            Collaborated with backend and data engineers to define API contracts
            and align frontend requirements early in technical design.
          </li>
          <li>
            Established durable component patterns and reduced duplication across
            applications, improving overall developer experience.
          </li>
        </ul>
        <p>
          <strong>Tech:</strong> CSS, JavaScript, JSX, Node.js, React,
          Storybook, Tailwind, TypeScript
        </p>
      </Role>

      <Role
        title="User Experience Developer"
        company="DockYard"
        companyUrl="https://dockyard.com/"
        dates="Jun 2021 - Mar 2022"
      >
        <ul className="list-inside list-disc">
          <li>
            Delivered production features across React and Ruby on Rails
            services, integrating frontend workflows with backend data models.
          </li>
          <li>
            Adapted quickly to established consulting team patterns, tooling,
            and development workflows while deepening React expertise.
          </li>
          <li>
            Collaborated with designers and engineers to implement polished UI
            work aligned with existing design systems and product requirements.
          </li>
        </ul>
        <p>
          <strong>Tech:</strong> CSS, JavaScript, React, Ruby on Rails, Sass
        </p>
      </Role>

      <Role
        title="Senior Software Developer"
        company="Intelity"
        companyUrl="https://intelity.com/"
        dates="Jan 2012 - Jun 2021"
      >
        <ul className="list-inside list-disc">
          <li>
            Took ownership of a Ruby on Rails application managing client data
            and daily operations, evolving it into a mission-critical internal
            system.
          </li>
          <li>
            Led development of multiple large Ember.js applications, including
            messaging, device management, and operational tools.
          </li>
          <li>
            Designed and built a custom CMS, then extended it into a web-based
            counterpart to the company&apos;s native iOS application.
          </li>
          <li>
            Transitioned into mobile development, led iOS work, and served as a
            primary contributor across Objective-C and Swift codebases.
          </li>
          <li>
            Managed full iOS lifecycle responsibilities including feature
            delivery, maintenance, and App Store submissions.
          </li>
        </ul>
        <p>
          <strong>Tech:</strong> Bash, C#, CSS, Ember.js, JavaScript, jQuery,
          Objective-C, Ruby on Rails, Sass, SQL, Swift
        </p>
      </Role>

      <Role
        title="Front End Web Developer"
        company="Mapleton Hill Media"
        companyUrl="https://www.mapletonhill.net/"
        dates="Jun 2011 - Jan 2012"
      >
        <ul className="list-inside list-disc">
          <li>
            Built responsive, cross-browser websites from detailed design comps
            as part of a small front and back-end team.
          </li>
          <li>
            Focused on layout accuracy, responsiveness, and visual consistency
            across screen sizes and browsers.
          </li>
        </ul>
        <p>
          <strong>Tech:</strong> CSS, HTML, JavaScript, jQuery
        </p>
      </Role>
    </>
  );
}
