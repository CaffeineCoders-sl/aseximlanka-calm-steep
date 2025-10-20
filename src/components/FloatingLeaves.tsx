import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

interface TeaLeaf {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FloatingLeaves = () => {
  const [leaves, setLeaves] = useState<TeaLeaf[]>([]);

  useEffect(() => {
    const generateLeaves = () => {
      const newLeaves: TeaLeaf[] = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 15,
        size: 16 + Math.random() * 32,
        opacity: 0.05 + Math.random() * 0.15,
      }));
      setLeaves(newLeaves);
    };
    generateLeaves();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute animate-float"
          style={{
            left: `${leaf.left}%`,
            top: "-50px",
            animation: `float ${leaf.duration}s linear ${leaf.delay}s infinite`,
            animationTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          <Leaf
            style={{
              width: leaf.size,
              height: leaf.size,
              color: "#22c55e",
              opacity: leaf.opacity,
              filter: "drop-shadow(0 0 2px rgba(34, 197, 94, 0.3))",
            }}
            className="transform -rotate-45"
          />
        </div>
      ))}

      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px) rotate(-45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(50px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingLeaves;
