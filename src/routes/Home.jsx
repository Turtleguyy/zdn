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
        working on all sorts of cool things. Right now, I&rsquo;m focused on
        finding the next great team to build with. I love what I do, but I also
        love life and everything that goes along with it. Yes, I&rsquo;m a
        software developer, but more importantly, I&rsquo;m a father, a husband,
        a diver, and a gamer. Perhaps even more paramount to the core of who I
        am, I&rsquo;m also a strong believer in the oxford comma. That, and the
        fact that it&rsquo;s{" "}
        <span title="yes, even though my own name contradicts this">
          sync and not synch
        </span>{" "}
        are two hills I will die on.
      </p>

      <h2>My Sweet Skills</h2>

      <p>
        Most days I&apos;m a front-end/product engineer focused on React
        applications and complex UI workflows. I still care deeply about the
        fundamentals: semantic HTML, thoughtful CSS, and JavaScript that is
        readable six months later. CSS is still my jam, and yes, I still prefer
        writing it by hand when it makes sense.
      </p>

      <p>
        My roots are in Haml, Sass, CoffeeScript, and Ruby on Rails. These
        days, most of my production work is React and modern JavaScript, but
        those earlier stacks taught me habits I still rely on: clear structure,
        sensible abstractions, and respect for maintainability. Rails still has
        a special place in my heart, and yes, like everyone else who&apos;s
        honest with themselves, I still miss CoffeeScript.
      </p>

      <p>
        Here's a much more boring list of things I can do/use to varying
        degrees, in{" "}
        <span title="alphabetical, because I'm not a monster">
          no particular
        </span>{" "}
        order: Bash, C#, CSS, Ember.js, Erb, Git, GraphQL, Haml, HTML,
        Illustrator, JavaScript,{" "}
        <span title="talk about glory days, huh?">jQuery</span>, Objective-C,
        Photoshop, React, Regex, Ruby on Rails, Sass, SQL, and Swift. I've also
        used things like ActionScript, ColdFusion, Flex, and PHP in the past,
        but I'm quite certain I've forgotten almost everything I ever knew about
        them.
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
        in 2011 with a BS in Web Design & Development. They gave me a pretty
        solid foundation in full-stack web development, with the added{" "}
        <span title="ignorance is definitely bliss">curse</span> of
        understanding UX principles. Right before I graduated, I landed a job in
        Colorado as a front-end developer and off I went into the world of Web.
      </p>

      <p>
        I only had that first job for a few short months, because{" "}
        <a
          href="https://twitter.com/alyssanicoll"
          target="_blank"
          rel="noreferrer"
        >
          my wife
        </a>{" "}
        decided she wanted to do what I did. So, I got a new job in Orlando as
        a web developer, and back to Florida (and Full Sail) we went. I worked
        in an office for about five years, then switched to remote full-time in
        2017. I&apos;ve had the opportunity to try my hand at a few different
        technologies over the course of many different projects throughout my
        career. Be sure to check out the{" "}
        <Link to="/experience">experience</Link> page for more details.
      </p>

      <h2>Postscript</h2>

      <p>
        Lastly, and contrary to popular belief, no the "Good Morning!" heading
        won't change based on the time of day. Sure, I could have done that, but
        who's to say it's your morning, afternoon, or evening? It's {year}{" "}
        <span title="he said, in full awareness of the irony (and because he's hilarious)">
          guys
        </span>{" "}
        — we can't be assuming people's schedules.
      </p>
    </>
  );
}
