import "./styles/Projects.css";
import ProjectImage from "./ProjectImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MOBILE_BREAKPOINT = 1024;

function getWorkScrollDistance() {
  const boxes = document.getElementsByClassName("work-box");
  const flex = document.querySelector(".work-flex");
  const section = document.querySelector(".work-section");
  if (!boxes.length || !flex || !section) return 0;

  const lastBox = boxes[boxes.length - 1] as HTMLElement;
  const sectionWidth = section.getBoundingClientRect().width;
  const contentWidth = lastBox.offsetLeft + lastBox.offsetWidth;

  return Math.max(0, contentWidth - sectionWidth);
}

const Projects = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`, () => {
      ScrollTrigger.getById("work")?.kill();
      gsap.set(".work-flex", { x: 0 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getWorkScrollDistance()}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      timeline.to(".work-flex", { x: () => -getWorkScrollDistance(), ease: "none" });

      let ro: ResizeObserver | null = null;
      const flexElement = document.querySelector(".work-flex");
      if (flexElement) {
        ro = new ResizeObserver(() => {
          ScrollTrigger.refresh();
        });
        ro.observe(flexElement);
      }

      return () => {
        ro?.disconnect();
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
        gsap.set(".work-flex", { x: 0, clearProps: "transform" });
      };
    });

    mm.add(`(max-width: ${MOBILE_BREAKPOINT}px)`, () => {
      ScrollTrigger.getById("work")?.kill();
      gsap.set(".work-flex", { x: 0, clearProps: "transform" });
    });

    return () => mm.revert();
  }, []);

  const projects = [
    { name: "CipherLens: CBOM Analyzer Tool", category: "Cybersecurity", tools: "Python, FastAPI, React.js, Podman, SQLite", image: "/images/cipherlens.webp" },
    { name: "PookiePass: Visitor Management System", category: "SaaS", tools: "React.js, Node.js, Express.js, MariaDB", image: "/images/pookiepass.webp" },
    { name: "WhatsApp Automation Bot", category: "Marketing Automation", tools: "Python, Flask, Meta Graph API, SQLite, Multi-threading, PyQt Signals", image: "/images/whatsappbot.webp" },
    { name: "Session Based Access Control Utility", category: "Automation", tools: "Python, Flask, SQLite, Multi-threading", image: "/images/session.webp" },
    { name: "CCTV Face Recognition System", category: "Computer Vision", tools: "Python, OpenCV, PyTorch, FAISS", image: "/images/cctv.webp" },
    { name: "Mayabhedi: Unified Cybersecurity", category: "Cybersecurity", tools: "AI/ML, Cryptography, Steganography", image: "/images/mayabhedi.webp" },
    { name: "ScanSage: Document Utility App", category: "Android App", tools: "Java, Android SDK", image: "/images/scansage.webp" },
    { name: "PookieTrak: Tracking & Alert System", category: "Desktop App", tools: "Python, PyQt6, Multi-threading", image: "/images/pookietrak.webp" },
    { name: "BlockBeats: Blockchain Music Player", category: "Web3", tools: "Solana, React.js", image: "/images/blockbeats.webp" }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          College <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{(index + 1).toString().padStart(2, '0')}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <ProjectImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
