import { useEffect, useState, useMemo } from "react";
import { FaTimes } from "react-icons/fa";
import OrderingImage from "../assets/ordering.png";
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
        These are a few representative projects from my most recent role. Much
        of my work lived in private repositories and production systems, so
        I&rsquo;ve included what I was able to document before the company shut
        down.
      </p>
      <div>
        <h2>User Permissions & Feature Access System</h2>
        <img
          src={PermissionsImage}
          alt="User permissions interface"
          className={thumbnailClass}
          onClick={() => setOpenImage(PermissionsImage)}
        />
        <h3>Context</h3>
        <p>
          Enterprise customers needed granular control over user access across
          multiple product modules.
        </p>
        <h3>The Problem</h3>
        <p>
          Permissions were difficult to manage and lacked clarity. Admin users
          couldn&rsquo;t quickly see what access a user actually had, and edge
          cases created confusion.
        </p>
        <h3>What I Did</h3>
        <p>I designed and implemented a modular permissions interface that:</p>
        <ul className="list-inside list-disc">
          <li>Surfaces access state clearly (Granted / Denied / Unassigned)</li>
          <li>Allows bulk or individual control</li>
          <li>Groups permissions by product area</li>
          <li>Supports scalability as new modules are added</li>
        </ul>
        <p>
          I focused heavily on state visibility, scanning efficiency, and
          minimizing accidental misconfiguration.
        </p>
        <h3>Outcome</h3>
        <p>
          Admin workflows became faster and more predictable. The UI scaled
          cleanly as new feature modules were introduced, and we reduced support
          questions tied to permission confusion.
        </p>
        <h3>Implementation approach</h3>
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
      </div>

      <div className="mt-12">
        <h2>
          Feature Management & Navigation Configuration (Internal Admin Tool)
        </h2>
        <img
          src={OrderingImage}
          alt="Feature management interface"
          className={thumbnailClass}
          onClick={() => setOpenImage(OrderingImage)}
        />
        <h3>Context</h3>
        <p>
          Multi-tenant B2B product with multiple apps under one platform.
          Internal teams needed a way to control which features appeared in each
          app, and in what order, per customer.
        </p>
        <h3>The Problem</h3>
        <p>
          Sidebar navigation was hard-coded across apps. Every request to add,
          hide, or reorder features required engineering time. It didn’t scale,
          and inconsistencies were creeping in between products.
        </p>
        <h3>What I Did</h3>
        <p>
          I designed and built a feature management system that allowed internal
          users to:
        </p>
        <ul className="list-inside list-disc">
          <li>Assign features per customer</li>
          <li>Group features logically</li>
          <li>Reorder navigation via drag-and-drop with live app previews</li>
        </ul>
        <p>
          The UI mirrors the actual product navigation so changes feel intuitive
          and predictable. I focused on clarity, hierarchy, and reducing
          cognitive load in a configuration-heavy workflow.
        </p>
        <h3>Outcome</h3>
        <p>
          Navigation became configurable without code changes. Internal support
          stopped filing “can you move this tab?” tickets. The system replaced
          multiple one-off implementations and created a scalable pattern across
          apps.
        </p>
      </div>

      {openImage && (
        <ImageLightbox src={openImage} onClose={() => setOpenImage(null)} />
      )}
    </>
  );
}
