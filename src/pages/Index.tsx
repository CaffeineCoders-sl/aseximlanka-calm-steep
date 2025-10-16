import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroImage from "@/assets/hero-tea-plantation.jpg";
import leafAccent from "@/assets/tea-leaf-accent.png";
import CountdownTimer from "@/components/CountdownTimer";
import EmailSignup from "@/components/EmailSignup";
import SocialLinks from "@/components/SocialLinks";
import FloatingTeaLeaves from "@/components/FloatingTeaLeaves";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tea pouring effect - content slides down smoothly
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power3.out",
      });
    }

    // Slogan appears with a gentle swirl effect
    if (sloganRef.current) {
      const timeline = gsap.timeline({ delay: 0.3 });
      
      timeline.from(sloganRef.current.children, {
        opacity: 0,
        y: 30,
        rotationX: -15,
        stagger: 0.2,
        duration: 1,
        ease: "back.out(1.2)",
      });

      // Add a subtle continuous swirl to the slogan
      gsap.to(sloganRef.current, {
        rotationY: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/90" />
      </div>

      {/* Animated Floating Tea Leaves */}
      <FloatingTeaLeaves />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-12 px-6">
        
        {/* Header/Logo Area */}
        <header ref={heroRef} className="fade-in">
          <h2 className="text-2xl md:text-3xl font-serif text-accent text-center tracking-wide">
            Aseximlanka
          </h2>
        </header>

        {/* Main Hero Content */}
        <section className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto space-y-12">
          
          {/* Main Slogan */}
          <div ref={sloganRef} className="space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground leading-tight">
              Serenity from Seven Regions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light tracking-wide">
              Exim&apos;s Tea. Steeped in Craft. Sipped in Calm.
            </p>
          </div>

          {/* Email Signup */}
          <div className="w-full max-w-lg">
            <EmailSignup />
          </div>

          {/* Countdown Timer */}
          <div className="w-full">
            <CountdownTimer />
          </div>

          {/* Brand Blurb */}
          <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl font-light leading-relaxed fade-in-delay-2">
            Handpicked from the mist-kissed highlands of Sri Lanka, our artisanal teas 
            are a testament to generations of craft and the quiet beauty of nature.
          </p>
        </section>

        {/* Footer */}
        <footer className="space-y-4">
          <SocialLinks />
          <p className="text-center text-sm text-primary-foreground/60 font-light fade-in-delay-2">
            © 2025 Aseximlanka. Crafted with care.
          </p>
        </footer>

      </div>
    </main>
  );
};

export default Index;
