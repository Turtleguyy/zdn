import { Link } from "react-router-dom";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <h1>Good Morning!</h1>

      <p>
        Hi there, my name is{" "}
        <span title="Turtleguyy, but you can call me Turtle">
          Zachary Nicoll, but you can call me Zach
        </span>
        . Most recently, I was over at{" "}
        <a href="https://www.agencykpi.com/" target="_blank" rel="noreferrer">
          AgencyKPI
        </a>{" "}
        working on things like complex data visualizations, component libraries,
        internal tooling, and everything in between. Right now, I&rsquo;m focused on
        finding the next great team to build with. I love what I do, but I also
        love life and everything that goes along with it. I&rsquo;m a software
        engineer by day, and a father, husband, diver, gamer, and woodworker by
        night. Perhaps even more paramount to the core of who I am, I&rsquo;m also
        a strong believer in the oxford comma. That, and the fact that it&rsquo;s{" "}
        <span title="yes, even though my own name contradicts this">
          sync and not synch
        </span>{" "}
        are two hills I will die on.
      </p>

      <h2>My Sweet Skills</h2>

      <p>
        My roots are in Haml, Sass, CoffeeScript, and Ruby on Rails. These days,
        however, most of my time is spent in React, TypeScript, and my good
        friend, CSS. I use those tools to write semantic, accessible,
        thoughtful code that still makes sense six months later. Rails will
        always have a special place in my heart and I'd welcome the chance to
        pick it back up.
      </p>

      <p>
        Here's a much more boring list of things I can do/use to varying
        degrees, in{" "}
        <span title="alphabetical, because I'm not a monster">
          no particular
        </span>{" "}
        order: AWS, Bash, Bitbucket, C#, CSS, Ember.js, Erb, Figma, Git,
        Github, GraphQL, Haml, HTML, Illustrator, JavaScript, Jenkins,{" "}
        <span title="talk about glory days, huh?">jQuery</span>, LaunchDarkly,
        Objective-C, Photoshop, Postgres, React, Regex, Ruby on Rails, Sass,
        Swift, and TypeScript. I've also used things like ActionScript,
        ColdFusion, Flex, and PHP in the past.
      </p>

      <h2>How'd I get those sweet skills?</h2>

      <p>
        I graduated from{" "}
        <a
          href="https://www.fullsail.edu/degrees/web-design-and-development-bachelor"
          target="_blank"
          rel="noreferrer"
        >
          Full Sail University
        </a>{" "}
        in 2011 with a BS in Web Design & Development. They gave me a solid
        foundation in full-stack web development, with the added{" "}
        <span title="ignorance is definitely bliss">curse</span> of
        understanding UX principles. Right before I graduated, I landed a job
        at a start-up in Colorado as a frontend developer and off I went into
        the world of Web.
      </p>

      <p>
        Half a year later,{" "}
        <a
          href="https://alyssanicoll.com/"
          target="_blank"
          rel="noreferrer"
        >
          my wife
        </a>{" "}
        decided that she, too, wanted to learn the wonders of CSS. So, I got a new
        job as a full-stack developer at a start-up in Orlando and back to
        Florida (and Full Sail) we went. I worked in an office for about five
        years, then switched to remote full-time in 2017. I&apos;ve had the
        opportunity to try my hand at a few different technologies over the
        course of many different projects throughout my career. Be sure to
        check out the{" "}
        <Link to="/experience">experience</Link> page for more details.
      </p>

      <h2>Postscript</h2>

      <p>
        Lastly, and contrary to popular belief, no the "Good Morning!" heading
        won't change based on the time of day. Sure, I could do that, but
        who's to say it's your morning, afternoon, or evening? It's {year}{" "}
        <span title="he said, in full awareness of the irony (and because he's hilarious)">
          guys
        </span>{" "}
        — we can't be assuming people's schedules.
      </p>
    </>
  );
}
