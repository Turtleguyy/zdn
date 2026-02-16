import OrderingImage from "../assets/ordering.png";
import PermissionsImage from "../assets/permissions.png";

export function CaseStudies() {
  return (
    <>
      <h1>Case Studies</h1>
      <div>
        <h2>User Permissions & Feature Access System</h2>
        <img
          src={PermissionsImage}
          className="block h-auto w-1/2 rounded shadow"
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
      </div>

      <div className="mt-12">
        <h2>
          Feature Management & Navigation Configuration (Internal Admin Tool)
        </h2>
        <img
          src={OrderingImage}
          className="block h-auto w-1/2 rounded shadow"
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
    </>
  );
}
