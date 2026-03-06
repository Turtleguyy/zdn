import { useEffect, useState, useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import PermissionsCode from "../assets/permissions-code.png";
import PermissionsImage from "../assets/permissions.png";

const thumbnailClass =
  "block h-auto max-w-xs cursor-pointer rounded border border-black/10 shadow hover:border-super-special max-md:w-full";

function ImageLightbox({ src, onClose }) {
  const [maxSize, setMaxSize] = useState(null);

  useEffect(() => {
    setMaxSize(null);
  }, [src]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const padding = 32;
  const style = useMemo(() => {
    if (!maxSize) return undefined;
    return {
      maxWidth: Math.min(maxSize.width, window.innerWidth - padding),
      maxHeight: Math.min(maxSize.height, window.innerHeight - padding),
    };
  }, [maxSize, padding]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="View image full screen"
    >
      <div
        className="relative max-h-full max-w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow hover:bg-gray-100"
          aria-label="Close"
        >
          <FaTimes className="text-lg" />
        </button>
        <img
          src={src}
          alt=""
          className="w-auto rounded-lg object-contain"
          style={style}
          onLoad={(e) => {
            const { naturalWidth, naturalHeight } = e.target;
            setMaxSize({ width: naturalWidth, height: naturalHeight });
          }}
        />
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [openImage, setOpenImage] = useState(null);

  return (
    <>
      <h1>Case Studies</h1>
      <p>
        These are representative projects from my most recent role. Most of my
        work lived in private repositories and production systems, so the
        examples below focus on implementation approach, product constraints,
        and outcomes.
      </p>
      <nav className="case-study-jump mt-6" aria-label="Case study navigation">
        <a href="#permissions-platform">Permissions Platform</a>
        <a href="#sidebar-registry">Sidebar & Feature Registry</a>
        <a href="#component-library-platform">Component Library Platform</a>
      </nav>

      <article id="permissions-platform" className="case-study mt-8 scroll-mt-6">
        <h2>Enterprise Permissions & Access Control Platform</h2>
        <img
          src={PermissionsImage}
          alt="User permissions interface"
          className={thumbnailClass}
          onClick={() => setOpenImage(PermissionsImage)}
        />
        <h3>Context</h3>
        <p>
          The project started from a high-level request: enterprise customers
          needed a way to manage users and access across multiple product
          modules.
        </p>
        <p>
          Existing permissions were inconsistent and difficult to reason about.
          Admins couldn&rsquo;t quickly determine effective access, inheritance
          behavior was unclear, and support frequently handled permission
          confusion.
        </p>
        <h3>Outcome</h3>
        <p>
          Admin workflows became faster and more predictable, support tickets
          tied to permission confusion were reduced, and the model scaled
          cleanly as new modules were added.
        </p>
        <details className="mt-5">
          <summary>View role, constraints, decisions, and implementation</summary>
        <h3>My Role</h3>
        <p>
          I led the project end-to-end: discovery, UX design, technical
          planning, ticket writing across frontend/backend/database, frontend
          implementation, rollout coordination, and release.
        </p>
        <h3>Constraints</h3>
        <ul className="list-inside list-disc">
          <li>
            Permissions had to support multiple apps, roles, and account-level
            variations
          </li>
          <li>
            Logic needed to evolve without forcing widespread UI rewrites
          </li>
          <li>
            Admin workflows had to minimize accidental misconfiguration
          </li>
        </ul>
        <h3>Decisions & Tradeoffs</h3>
        <p>
          I standardized the model around two layers: group-level permissions
          plus per-user overrides. That required more upfront architecture
          work, but gave us predictable inheritance and better long-term
          maintainability than scattered per-screen logic.
        </p>
        <h3>Implementation</h3>
        <p>I designed and implemented a modular permissions system that:</p>
        <ul className="list-inside list-disc">
          <li>Supports group inheritance with explicit user-level overrides</li>
          <li>Surfaces access state clearly (Granted / Denied / Unassigned)</li>
          <li>Allows bulk or individual control</li>
          <li>Groups permissions by product area</li>
          <li>Supports scalability as new modules are added</li>
        </ul>
        <p>
          I focused heavily on state visibility, scanning efficiency, and
          minimizing accidental misconfiguration.
        </p>
        <img
          src={PermissionsCode}
          alt="Permissions implementation code"
          className={thumbnailClass}
          onClick={() => setOpenImage(PermissionsCode)}
        />
        <p>
          The permission layer needed to support role-based access, explicit
          overrides for beta features, and dynamic feature state without
          scattering conditionals throughout the UI. I centralized that logic in
          a custom hook that exposes a simple boolean map so components remain
          declarative.
        </p>
        <p>
          I also partnered with backend and data engineers to define API
          contracts and storage rules for groups, assignments, and overrides so
          UI behavior matched system behavior consistently.
        </p>
        <h3>What I Learned</h3>
        <p>
          In hindsight, documenting inheritance edge cases and system diagrams
          earlier would have reduced iteration time during implementation.
        </p>
        </details>
      </article>

      <article id="sidebar-registry" className="case-study mt-8 scroll-mt-6">
        <h2>Configuration-Driven Sidebar & Feature Registry</h2>
        <h3>Context</h3>
        <p>
          As the product grew, sidebar navigation and feature visibility were
          implemented inconsistently across the codebase. This created both
          product reliability issues and developer maintenance overhead.
        </p>
        <p>
          Navigation configuration was distributed across multiple components and
          files. Permission checks, ordering, and visibility rules were
          duplicated and inconsistent, so features could appear in navigation
          even when users could not access them.
        </p>
        <h3>Outcome</h3>
        <p>
          Navigation behavior became consistent and safer across the product.
          Duplicate permission logic was reduced, inaccessible features stopped
          surfacing in the sidebar, and adding new features became faster and
          more predictable for the team.
        </p>
        <details className="mt-5">
          <summary>View role, constraints, decisions, and implementation</summary>
        <h3>My Role</h3>
        <p>
          I led the architecture and implementation of the new navigation model,
          defining how features were registered, evaluated, and rendered across
          the application.
        </p>
        <h3>Constraints</h3>
        <ul className="list-inside list-disc">
          <li>
            Access behavior depended on roles, feature flags, account config,
            and entitlements
          </li>
          <li>
            Existing product surfaces had different assumptions about sidebar
            structure
          </li>
          <li>
            New features still needed to ship while the navigation model was
            being improved
          </li>
        </ul>
        <h3>Decisions & Tradeoffs</h3>
        <p>
          I shifted the sidebar to a configuration-driven model with a central
          feature registry and runtime access evaluation. This introduced
          upfront architectural work, but replaced fragile component-level logic
          with a predictable, scalable platform pattern.
        </p>
        <h3>Implementation</h3>
        <p>
          Features were represented as structured configuration objects with
          route metadata, grouping, visibility rules, and permission
          requirements. The sidebar rendered from this data rather than
          hard-coded UI branches.
        </p>
        <p>I designed and implemented:</p>
        <ul className="list-inside list-disc">
          <li>A central feature registry for navigation definitions</li>
          <li>
            A permission evaluation layer for roles, flags, and account-level
            capabilities
          </li>
          <li>A dynamic sidebar renderer driven by user context</li>
          <li>
            A consistent pattern for registering new features without touching
            multiple UI surfaces
          </li>
        </ul>
        <p>
          This decoupled business rules from presentational components and made
          navigation behavior easier to reason about, test, and evolve.
        </p>
        </details>
      </article>

      <article
        id="component-library-platform"
        className="case-study mt-8 scroll-mt-6"
      >
        <h2>Shared React Component Library Platform</h2>
        <h3>Context</h3>
        <p>
          Multiple production React applications were evolving in parallel, but
          each one was implementing UI patterns differently. Shared components
          existed in fragments, but there was no clear contract for reuse.
        </p>
        <p>
          Teams were shipping features with duplicated UI logic, inconsistent
          behavior, and repeated styling decisions. This increased QA overhead,
          slowed onboarding, and made cross-app maintenance expensive.
        </p>
        <h3>Outcome</h3>
        <p>
          The platform became the baseline for all active applications. UI
          consistency improved, duplicate code decreased, and feature teams
          moved faster because they could assemble from proven building blocks
          rather than recreate patterns per project.
        </p>
        <details className="mt-5">
          <summary>View role, constraints, decisions, and implementation</summary>
        <h3>My Role</h3>
        <p>
          I drove the component library strategy and implementation, partnering
          with feature teams to establish adoption patterns and maintain API
          consistency across applications.
        </p>
        <h3>Constraints</h3>
        <ul className="list-inside list-disc">
          <li>Could not pause feature delivery for a full rewrite</li>
          <li>Had to support different product surfaces and release cadences</li>
          <li>Needed migration paths that worked incrementally</li>
        </ul>
        <h3>Decisions & Tradeoffs</h3>
        <p>
          I prioritized foundational components with the highest reuse value
          first (forms, tables, layout primitives) and deferred lower-impact
          abstractions. We favored clear API contracts over premature
          flexibility to keep adoption fast and predictable.
        </p>
        <h3>Implementation</h3>
        <p>
          I designed and implemented a shared component library with Storybook
          documentation, standardized interaction states, and clear component
          APIs. I also established implementation patterns for composition,
          variant handling, and accessibility defaults.
        </p>
        <p>
          Instead of a one-time migration, I integrated adoption into normal
          feature work and refactors. New work used shared components by
          default, and existing screens were upgraded as they were touched. This
          kept delivery moving while steadily reducing divergence.
        </p>
        </details>
      </article>

      {openImage && (
        <ImageLightbox src={openImage} onClose={() => setOpenImage(null)} />
      )}
    </>
  );
}
