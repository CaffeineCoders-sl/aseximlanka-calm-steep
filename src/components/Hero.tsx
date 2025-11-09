import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-emerald-800/85 to-amber-900/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image.png')",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-500/30 rounded-full" />
        <div className="absolute bottom-32 right-16 w-48 h-48 border-2 border-amber-500/20 rounded-full" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtitle */}
          <div className="inline-block">
            <p className="text-amber-400 text-sm md:text-base tracking-[0.3em] uppercase font-light">
              Since 1977
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
            Excellence in
            <span className="block text-amber-400">Every Leaf</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            Where Quality Meets Global Respect
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Premier exporters of Ceylon Tea, delivering unmatched quality to
            discerning markets worldwide. Built on 40+ years of heritage,
            expertise, and a commitment to excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("products")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg"
            >
              Explore Our Teas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-6 text-lg"
            >
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-amber-400 mb-2">
                40+
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-4xl md:text-5xl font-serif text-amber-400 mb-2">
                150+
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wide">
                Professionals
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-amber-400 mb-2">
                Global
              </div>
              <div className="text-sm text-white/70 uppercase tracking-wide">
                Reach
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
