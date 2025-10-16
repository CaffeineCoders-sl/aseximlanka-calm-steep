import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import leafAccent from "@/assets/tea-leaf-accent.png";

const FloatingTeaLeaves = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const leaves = containerRef.current.querySelectorAll(".tea-leaf");
    
    leaves.forEach((leaf, index) => {
      // Create floating animation for each leaf
      gsap.to(leaf, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-15, 15)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5,
      });

      // Add a subtle fade in/out
      gsap.to(leaf, {
        opacity: "random(0.1, 0.3)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Multiple floating tea leaves */}
      <img 
        src={leafAccent} 
        alt=""
        className="tea-leaf absolute top-[10%] left-[15%] w-12 opacity-20"
        aria-hidden="true"
      />
      <img 
        src={leafAccent} 
        alt=""
        className="tea-leaf absolute top-[30%] right-[20%] w-16 opacity-15 rotate-45"
        aria-hidden="true"
      />
      <img 
        src={leafAccent} 
        alt=""
        className="tea-leaf absolute top-[60%] left-[25%] w-14 opacity-25 -rotate-12"
        aria-hidden="true"
      />
      <img 
        src={leafAccent} 
        alt=""
        className="tea-leaf absolute bottom-[20%] right-[15%] w-20 opacity-20 rotate-90"
        aria-hidden="true"
      />
      <img 
        src={leafAccent} 
        alt=""
        className="tea-leaf absolute top-[45%] right-[40%] w-10 opacity-15 rotate-180"
        aria-hidden="true"
      />
    </div>
  );
};

export default FloatingTeaLeaves;
