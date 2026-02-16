import { Link } from "react-router-dom";

export function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <h1>Good Morning!</h1>

      <p>
        Hi there, my name is{" "}
        <span title="Turtleguyy, but you can call me Turtle">
          Zachary Nicoll, but you can call me Zach
        </span>
        . I'm currently over at{" "}
        <a href="https://www.agencykpi.com/" target="_blank" rel="noreferrer">
          AgencyKPI
        </a>{" "}
        working on all sorts of cool things. I love what I do, but I also love
        life and everything that goes along with it. Yes, I'm a software
        developer, but more importantly, I'm a father, a husband, a diver, and a
        gamer. Perhaps even more paramount to the core of who I am, I'm also a
        strong believer in the oxford comma. That, and the fact that it's{" "}
        <span title="yes, even though my own name contradicts this">
          sync and not synch
        </span>{" "}
        are two hills I will die on.
      </p>

      <h2>My Sweet Skills</h2>

      <p>
        Most days I'm a front-end web developer. Like, real front end. Not that
        fake front-end business that people have started calling "front end"
        just because you can do it with JavaScript (looking at you, Node). More
        specifically, I spend most of my time working in React. Before that, it
        was Ember.js. Before that, of course, was the era of raw JS and jQuery.
        But also, CSS is my jam. Custom, hand-written,
        nobody-needs-your-framework, CSS.
      </p>

      <p>
        My roots, however, are in Haml, Sass, CoffeeScript, and Ruby on Rails.
        We call those the "Glory Days". I fell in love with Rails early on and
        still use it whenever I get the chance. Compared to the chaos of almost
        everything else, Rails just feels right. Speaking of strange,
        language-induced feelings, Python also gives me the same warm and fuzzy
        feelings as Ruby, though I haven't had the chance to try it yet. And
        yeah, like everyone else who's honest with themselves, I too miss
        CoffeeScript.
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
        decided she wanted to do what I did. So, I got a new job in Orlando as a
        web developer, and back to Florida (and Full Sail) we went. I worked in
        an office for about five years, then switched to remote full-time in
        2017. I've had the opportunity to try my hand at a few different
        technologies over the course of many different projects throughout my
        career. Be sure to check out the <Link to="/projects">projects</Link>{" "}
        page for more details.
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
