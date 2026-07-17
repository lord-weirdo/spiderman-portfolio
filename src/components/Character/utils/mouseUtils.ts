import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMousePosition: (x: number, y: number) => void
) => {
  const mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
  const mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
  setMousePosition(mouseX, mouseY);
};

export const handleTouchEnd = (
  setMousePosition: (
    x: number,
    y: number,
    interpolationX: number,
    interpolationY: number
  ) => void
) => {
  setTimeout(() => {
    setMousePosition(0, 0, 0.03, 0.03);
    setTimeout(() => {
      setMousePosition(0, 0, 0.1, 0.2);
    }, 1000);
  }, 2000);
};

export type RestRotation = { x: number; y: number };

export const captureRestRotation = (bone: THREE.Object3D): RestRotation => ({
  x: bone.rotation.x,
  y: bone.rotation.y,
});

export const handleHeadRotation = (
  neckBone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, t: number) => number,
  rest: RestRotation
) => {
  if (!neckBone) return;
  if (window.scrollY < 200) {
    const maxRotation = Math.PI / 6;
    neckBone.rotation.y = lerp(
      neckBone.rotation.y,
      rest.y + mouseX * maxRotation,
      interpolationY
    );
    let minRotationX = -0.3;
    let maxRotationX = 0.4;
    let pitchOffset: number;
    if (mouseY > minRotationX) {
      if (mouseY < maxRotationX) {
        pitchOffset = -mouseY - 0.5 * maxRotation;
      } else {
        pitchOffset = -maxRotation - 0.5 * maxRotation;
      }
    } else {
      pitchOffset = -minRotationX - 0.5 * maxRotation;
    }
    neckBone.rotation.x = lerp(
      neckBone.rotation.x,
      rest.x + pitchOffset,
      interpolationX
    );
  } else {
    if (window.innerWidth > 1024) {
      neckBone.rotation.x = lerp(neckBone.rotation.x, rest.x - 0.4, 0.03);
      neckBone.rotation.y = lerp(neckBone.rotation.y, rest.y - 0.3, 0.03);
    }
  }
};
