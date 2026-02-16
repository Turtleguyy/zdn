import { FaExternalLinkAlt } from "react-icons/fa";

function ExtLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="ml-1 inline-block text-xs"
    >
      <FaExternalLinkAlt />
    </a>
  );
}

export default function Projects() {
  return (
    <>
      <h1>&ldquo;Professional&rdquo; Stuff</h1>

      <h2>
        Senior Software Engineer @ AgencyKPI
        <ExtLink href="https://www.agencykpi.com/" />
        <span className="subtext">2022 - 2026</span>
      </h2>

      <p>
        I joined AgencyKPI to help with all their (primarily) front-end needs.
        Starting out, I worked on building a complete UI component library for
        use in all of their apps. Now I help lead the entire dev team and have
        my hand in just about everything that goes on in development.
      </p>

      <h3>
        Data Visualization Apps
        <ExtLink href="https://www.agencykpi.com/solutions/agencykpi-dashboards" />
        <code className="subtext">React & Tailwind</code>
      </h3>

      <p>
        AKPI had four different applications for their customers and I was the
        primary UI developer for all of them. I worked with the product team,
        the business team, and the back end developers to design and build
        everything they needed.
      </p>

      <h3>
        Internal CRM
        <code className="subtext">React & Tailwind</code>
      </h3>

      <p>
        When I joined the team, this product was already in place and since it
        was internal-only, it rarely took priority. In the end, it became my pet
        project — the thing I would work on and do my best to improve between
        other tasks.
      </p>

      <h3>
        UI Component Library
        <code className="subtext">Storybook, React, & Tailwind</code>
      </h3>

      <p>
        This was the first thing I worked on at AgencyKPI and I kept
        contributing to it for the entirety of my tenure there, as it was used
        in every project we worked on.
      </p>

      <h2>
        User Experience Developer @ DockYard
        <ExtLink href="https://dockyard.com/" />
        <span className="subtext">2021 - 2022</span>
      </h2>

      <p>
        I got hired on at DockYard as a UX Developer, though I also did things
        like Rails and JavaScript on the daily.
      </p>

      <h3>
        Gifting Web App
        <ExtLink href="https://dockyard.com/work" />
        <code className="subtext">Rails, React, & Sass</code>
      </h3>

      <p>
        I worked with one other part-time developer to bring email/password and
        social login capabilities to an existing web application. I did all the
        UI work, updated the React code communicating with the server, and
        changed the Rails API to allow for email signin instead of phone number.
      </p>

      <h2>
        Software Developer @ Intelity
        <ExtLink href="https://intelity.com/" />
        <span className="subtext">2012 - 2021</span>
      </h2>

      <p>
        A lot of what I did at Intelity is private, so sadly I can't get into
        the nitty gritty specifics. At the very least, though, I can share what
        I personally did on some of the various projects that I worked on.
      </p>

      <h3>
        Guest Services iOS App
        <ExtLink href="https://intelity.com/mobile-apps/" />
        <code className="subtext">Objective-C & Swift</code>
      </h3>

      <p>
        After years of this project existing and being worked on, I joined the
        iOS team and took over feature development and maintenance with one
        other person. Every feature and bug fix was a chance to learn and try my
        hand at something new. The pace required at the time was incredibly
        difficult, being new to the project and language, but I did my best to
        step up and get things done.
      </p>

      <h3>
        Request Manager
        <ExtLink href="https://itunes.apple.com/us/app/ice-request-manager-mobile/id479792886?mt=8" />
        <code className="subtext">Swift</code>
      </h3>

      <p>
        I was tasked with rewriting an old iOS app using Swift. I designed and
        developed the app by myself, using the previous version as a basis for
        what features I had to make sure existed. Being my very first app, I
        feel it turned out pretty well.
      </p>

      <h3>
        Analytics Tracker
        <ExtLink href="https://intelity.com/hospitality-platform/staff/business-intelligence/" />
        <code className="subtext">Handlebars, Sass, & Ember</code>
      </h3>

      <p>
        We were already collecting guest-related metrics in our guest services
        apps, but the app that we used to see the data was due for an upgrade.
        Working with one back end dev, I designed and developed the front end of
        this new web app. This project introduced me to the "wonderful" world of
        charts and graphing to display the metrics data.
      </p>

      <h3>
        Guest Messaging
        <ExtLink href="https://intelity.com/hospitality-platform/guest/messaging/" />
        <code className="subtext">Handlebars, Sass, & Ember</code>
      </h3>

      <p>
        We needed a way for hotels to directly communicate with guests, so we
        came up with a new two-way messaging platform. Working with one back end
        dev, I designed and developed the front end of this new web app. For
        this one, I had the chance to try out websockets and help implement a
        third-party API for SMS and MMS support.
      </p>

      <h3>
        Mobile Key Manager
        <ExtLink href="https://intelity.com/hospitality-platform/guest/mobile-key/" />
        <code className="subtext">Handlebars, Sass, & Ember</code>
      </h3>

      <p>
        When our native guest services apps added support for opening hotel
        rooms with your phone, we needed a way to issue, activate, and
        deactivate mobile keys. Working with one back end dev, I designed and
        developed the front end of this new web app. I also built a small CSS
        framework during this project, which I would go on to use in most of my
        future projects at the company.
      </p>

      <h3>
        Restaurant Reservations
        <code className="subtext">HTML, CSS, & jQuery</code>
      </h3>

      <p>
        This one-off web application was built specifically for one hotel, which
        needed a way for guests to make reservations at their various
        restaurants. While I worked with an existing API provided by the
        customer, I was the only person in-house on this project. I designed it
        to match their established aesthetic and developed the front end myself.
      </p>

      <h3>
        Internal Company Tool
        <code className="subtext">Haml, Sass, CoffeeScript, & Rails</code>
      </h3>

      <p>
        This project started as a simple way to store some information about our
        customers and bloomed into a massive web application which almost
        everyone at the company used — and relied on — daily. For the first
        couple of years, I worked on this intermittenly with one other Rails
        dev. For the most part, though, I took over the application and was in
        charge of design, feature development, and maintenance for it.
      </p>

      <h3>
        Guest Services Web App
        <ExtLink href="https://intelity.com/mobile-apps/" />
        <code className="subtext">
          Haml Coffee, Sass, CoffeeScript, Bash, & Groovy
        </code>
      </h3>

      <p>
        I was the lead front end developer on this project, which implemented an
        API to display curated content and also allow guests to submit store
        orders and requests back to the hotel. When the project started, I was
        one of three front end devs working on it; but after a couple of years,
        I became the sole owner and maintainer of it. I was also responsible for
        producing themed builds for every hotel we brought on.
      </p>

      <h2>
        Front End Developer @ Mapleton Hill
        <ExtLink href="https://www.mapletonhill.net/" />
        <span className="subtext">2011</span>
      </h2>

      <p>
        During my time at Mapleton Hill, I only ever worked on raw HTML and CSS,
        with a bit of JavaScript thrown in when I could{" "}
        <span title="No, really. JS was considered back end work for some reason, so we weren't supposed to do it.">
          sneak
        </span>{" "}
        it. I was one of two front end developers at the time, so every client
        we took on was completely on us. We were provided with design comps for
        each project and told to make it look good on everything, back to IE6.
        "Fun" times!
      </p>
    </>
  );
}
