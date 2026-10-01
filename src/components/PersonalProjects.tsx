import "./styles/PersonalProjects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MOBILE_BREAKPOINT = 1024;

function getPWScrollDistance() {
  const boxes = document.getElementsByClassName("pw-box");
  const flex = document.querySelector(".pw-flex");
  const section = document.querySelector(".pw-section");
  if (!boxes.length || !flex || !section) return 0;

  const lastBox = boxes[boxes.length - 1] as HTMLElement;
  const sectionWidth = section.getBoundingClientRect().width;
  const contentWidth = lastBox.offsetLeft + lastBox.offsetWidth;

  return Math.max(0, contentWidth - sectionWidth);
}

const PersonalProjects = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`, () => {
      ScrollTrigger.getById("personal-work")?.kill();
      gsap.set(".pw-flex", { x: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".pw-section",
          start: "top top",
          end: () => `+=${getPWScrollDistance()}`,
          scrub: true,
          pin: true,
          id: "personal-work",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      timeline.to(".pw-flex", { x: () => -getPWScrollDistance(), ease: "none" });

      let ro: ResizeObserver | null = null;
      const flexElement = document.querySelector(".pw-flex");
      if (flexElement) {
        ro = new ResizeObserver(() => {
          ScrollTrigger.refresh();
        });
        ro.observe(flexElement);
      }

      return () => {
        ro?.disconnect();
        timeline.kill();
        ScrollTrigger.getById("personal-work")?.kill();
        gsap.set(".pw-flex", { x: 0, clearProps: "transform" });
      };
    });

    mm.add(`(max-width: ${MOBILE_BREAKPOINT}px)`, () => {
      ScrollTrigger.getById("personal-work")?.kill();
      gsap.set(".pw-flex", { x: 0, clearProps: "transform" });
    });

    return () => mm.revert();
  }, []);

  const projects = [
    {
      name: "GateKeep: Authentication & Security Service",
      date: "05 August 2026",
      category: "Security / Full-Stack",
      tools: "JavaScript (ES6+), React 19, Node.js, Express.js, PostgreSQL, Neon DB, Vite, JWT, bcrypt, zxcvbn, HIBP API",
      tags: ["React 19", "Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt", "REST API"],
      image: "/images/gatekeep.png",
    },
    {
      name: "Shawwttie: Full-Stack URL Shortener & Analytics",
      date: "05 August 2026",
      category: "Full-Stack / Analytics",
      tools: "JavaScript (ES6+), React 19, Node.js, Express.js, PostgreSQL, Neon DB, Vite, Nano ID",
      tags: ["React 19", "Node.js", "PostgreSQL", "Nano ID", "REST API", "Analytics"],
      image: "/images/shawtie.png",
    },
    {
      name: "Judge Me If You Can: Real-Time Multiplayer Web Game",
      date: "27 July 2026",
      category: "Real-Time / Multiplayer",
      tools: "TypeScript, Node.js, Express.js, WebSockets, React.js, Vite, TailwindCSS, Zustand, Framer Motion, Phaser 3, Howler.js",
      tags: ["TypeScript", "WebSockets", "React.js", "Zustand", "Framer Motion", "Phaser 3"],
      video: "/images/jmiyc.mp4",
    },
    {
      name: "HomeVault: Cross-Device Wireless File Sharing",
      date: "Personal Project",
      category: "Desktop App / Systems",
      tools: "Rust, TypeScript, React.js, Tauri v2, SQLite, Axum, Tokio, mDNS-SD, SSE, Wake-on-LAN, TailwindCSS",
      tags: ["Rust", "Tauri v2", "React.js", "SQLite", "mDNS", "SSE", "Axum"],
      image: "/images/homevault.png",
    },
    {
      name: "Cinematic Parallax Single-Page Web Application",
      date: "26 June 2026",
      category: "Frontend / Portfolio",
      tools: "React.js, JavaScript (ES6+), Vite, Sass (SCSS), Framer Motion, Web3Forms API, HTML5 Audio API",
      tags: ["React.js", "Framer Motion", "Sass", "Vite", "Parallax", "REST API"],
      image: "/images/spa.png",
    },
  ];

  return (
    <div className="pw-section" id="personal-work">
      <div className="pw-container section-container">
        <h2>
          Personal <span>Projects</span>
        </h2>
        <div className="pw-flex">
          {projects.map((project, index) => (
            <div className="pw-box" key={index}>
              <div className="pw-info">
                <div className="pw-title">
                  <h3>{(index + 1).toString().padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              {project.video ? (
                <div className="pw-video-wrap">
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="pw-video"
                  />
                </div>
              ) : project.image ? (
                <div className="pw-image-wrap">
                  <img src={project.image} alt={project.name} className="pw-image" />
                </div>
              ) : (
                <div className="pw-tags-grid">
                  {project.tags.map((tag, i) => (
                    <span className="pw-tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalProjects;
