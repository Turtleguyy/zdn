import { useState, useEffect } from "react";

const FALLBACK_PENS = [
  { code: "vPRboo", title: "CSS Challenge - Day 69" },
  { code: "NJwwrO", title: "CSS Challenge - Day 66" },
  { code: "moBEVL", title: "CSS Challenge - Day 65" },
  { code: "WPPQpG", title: "CSS Challenge - Day 44" },
  { code: "PVyYOP", title: "CSS Challenge - Day 40" },
  { code: "LqBvqg", title: "CSS Challenge - Day 39" },
];

function parseFeedXml(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  const items = doc.querySelectorAll("item");
  return Array.from(items)
    .slice(0, 6)
    .map((item) => {
      const link = item.querySelector("link")?.textContent?.trim() || "";
      const match = /.*pen\/([^/?]+)/.exec(link);
      return {
        code: match ? match[1] : "",
        title: item.querySelector("title")?.textContent?.trim() || "",
      };
    })
    .filter((p) => p.code);
}

export function CSS() {
  const [pens, setPens] = useState(FALLBACK_PENS);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = `${proxy}https://codepen.io/Turtleguyy/public/feed`;
    fetch(url)
      .then((r) => r.text())
      .then((text) => {
        const next = parseFeedXml(text);
        if (next.length) setPens(next);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (scriptLoaded) return;
    const script = document.createElement("script");
    script.src = "https://static.codepen.io/assets/embed/ei.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [scriptLoaded]);

  return (
    <>
      <h1>CSS For The Win</h1>

      <p>
        Here are some of my most recent codepens. I've been doing the{" "}
        <a href="https://100dayscss.com/" target="_blank" rel="noreferrer">
          100 Day CSS Challenge
        </a>{" "}
        when I can (which isn't all that often), so most of the pens will be
        from that. If you're looking for more, there may or may not be a link at
        the bottom of this page; but you'll have to scroll past all of the CSS
        glory before you can find out.
      </p>

      <p>
        Admittedly, I haven't done any new CSS challenges in quite some time. I
        leave this page up because CSS is just the best and I would love to get
        back to it one of these days.
      </p>

      <div className="codepens md:[&>*]:flex-basis-[calc(50%-40px)] xl:[&>*]:flex-basis-[calc(33%-40px)] -mx-5 flex flex-wrap justify-between [&>*]:m-5 [&>*]:flex-[1_1_100%]">
        {pens.map((pen) => (
          <p
            key={pen.code}
            className="codepen flex h-[200px] items-center justify-center border-2 border-black p-5"
            data-height="510"
            data-theme-id="default"
            data-default-tab="result"
            data-preview="true"
            data-user="Turtleguyy"
            data-slug-hash={pen.code}
          >
            <span>
              See the Pen{" "}
              <a href={`https://codepen.io/Turtleguyy/pen/${pen.code}/`}>
                {pen.title}
              </a>
              <br />
              by Zachary Nicoll (
              <a href="https://codepen.io/Turtleguyy">@Turtleguyy</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>
            </span>
          </p>
        ))}
      </div>

      <p className="emphasized bg-call-to-action my-8 border border-white/25 px-2.5 py-2.5 text-center transition-colors duration-200">
        Want more? Are there more? Who knows. But you can find out here:{" "}
        <a href="https://codepen.io/Turtleguyy/" rel="noopener" target="_blank">
          codepen.io/Turtleguyy
        </a>
      </p>
    </>
  );
}
