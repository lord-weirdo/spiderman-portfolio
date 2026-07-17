import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function setCharacterModelVisible(visible: boolean) {
  gsap.set(".character-model", {
    opacity: visible ? 1 : 0,
    visibility: visible ? "visible" : "hidden",
    pointerEvents: "none",
  });
}

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  let intensity: number = 0;
  setInterval(() => {
    intensity = Math.random();
  }, 200);
  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-section",
      start: "center 55%",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".whatIDO",
      start: "center top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  let screenLight: any, monitor: any;
  character?.children.forEach((object: any) => {
    if (object.name === "Plane004") {
      object.children.forEach((child: any) => {
        child.material.transparent = true;
        child.material.opacity = 0;
        if (child.material.name === "Material.027") {
          monitor = child;
          child.material.color.set("#FFFFFF");
        }
      });
    }
    if (object.name === "screenlight") {
      object.material.transparent = true;
      object.material.opacity = 0;
      object.material.emissive.set("#E23636");
      gsap.timeline({ repeat: -1, repeatRefresh: true }).to(object.material, {
        emissiveIntensity: () => intensity * 8,
        duration: () => Math.random() * 0.6,
        delay: () => Math.random() * 0.1,
      });
      screenLight = object;
    }
  });
  const neckBone = character?.getObjectByName("neck_060");
  const neckRestX = neckBone?.rotation.x ?? 0;
  if (window.innerWidth > 1024) {
    if (character) {
      tl1
        .fromTo(character.rotation, { y: 0 }, { y: 0.7, duration: 1 }, 0)
        .to(camera.position, { z: 22 }, 0)
        .fromTo(".character-model", { x: 0 }, { x: "-25%", duration: 1 }, 0)
        .to(".landing-container", { opacity: 0, duration: 0.4 }, 0)
        .to(".landing-container", { y: "40%", duration: 0.8 }, 0)
        .fromTo(".about-me", { y: "-50%" }, { y: "0%" }, 0);

      tl2
        .to(
          camera.position,
          { z: 55, y: 8.4, duration: 6, delay: 2, ease: "power3.inOut" },
          0
        )
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0)
        .fromTo(
          ".character-model",
          { pointerEvents: "inherit" },
          { pointerEvents: "none", x: "-12%", delay: 2, duration: 5 },
          0
        )
        .to(character.rotation, { y: 0.92, x: 0.12, delay: 3, duration: 3 }, 0)

      if (neckBone) {
        tl2.fromTo(
          neckBone.rotation,
          { x: neckRestX },
          { x: neckRestX + 0.45, delay: 2, duration: 3 },
          0
        );
      }
      if (monitor && monitor.material) {
        tl2.to(monitor.material, { opacity: 1, duration: 0.8, delay: 3.2 }, 0);
      }
      if (screenLight && screenLight.material) {
        tl2.to(screenLight.material, { opacity: 1, duration: 0.8, delay: 4.5 }, 0);
      }

      tl2.fromTo(
        ".what-box-in",
        { display: "none" },
        { display: "flex", duration: 0.1, delay: 6 },
        0
      )

      if (monitor && monitor.position) {
        tl2.fromTo(
          monitor.position,
          { y: -10, z: 2 },
          { y: 0, z: 0, delay: 1.5, duration: 3 },
          0
        );
      }

      tl2.fromTo(
        ".character-rim",
        { opacity: 1, scaleX: 1.4 },
        { opacity: 0, scale: 0, y: "-70%", duration: 5, delay: 2 },
        0.3
      );

      tl3
        .fromTo(".whatIDO", { y: 0 }, { y: "15%", duration: 2 }, 0)
        .to(character.rotation, { x: -0.04, duration: 2, delay: 1 }, 0);

      ScrollTrigger.create({
        id: "character-visibility",
        trigger: ".experience-section",
        start: "top bottom",
        onEnter: () => setCharacterModelVisible(false),
        onLeaveBack: () => setCharacterModelVisible(true),
        onEnterBack: () => setCharacterModelVisible(false),
        onRefresh: () => {
          const experience = document.querySelector(".experience-section");
          if (!experience) return;
          setCharacterModelVisible(
            experience.getBoundingClientRect().top > window.innerHeight
          );
        },
      });
    }
  } else {
    if (character) {
      const tM2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".what-box-in",
          start: "top 70%",
          end: "bottom top",
        },
      });
      tM2.to(".what-box-in", { display: "flex", duration: 0.1, delay: 0 }, 0);
    }
  }
}

export function setAllTimeline() {
  const showCareerContent = (selector: string) => {
    gsap.set(`${selector} .career-timeline`, {
      maxHeight: "100%",
      opacity: 1,
    });
    gsap.set(`${selector} .career-info-box`, { opacity: 1 });
  };

  if (window.innerWidth <= 1024) {
    showCareerContent(".experience-section");
    showCareerContent(".internship-section");
    return;
  }

  // Experience Timeline
  const experienceTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".experience-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  experienceTimeline
    .fromTo(
      ".experience-section .career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(
      ".experience-section .career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".experience-section .career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".experience-section .career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    experienceTimeline.fromTo(
      ".experience-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    experienceTimeline.fromTo(
      ".experience-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }

  // Internship Timeline
  const internshipTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".internship-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  internshipTimeline
    .fromTo(
      ".internship-section .career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )
    .fromTo(
      ".internship-section .career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".internship-section .career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".internship-section .career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    internshipTimeline.fromTo(
      ".internship-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    internshipTimeline.fromTo(
      ".internship-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}
