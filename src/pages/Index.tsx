import heroImage from "@/assets/hero-tea-plantation.jpg";
import leafAccent from "@/assets/tea-leaf-accent.png";
import CountdownTimer from "@/components/CountdownTimer";
import EmailSignup from "@/components/EmailSignup";
import SocialLinks from "@/components/SocialLinks";

const Index = () => {
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

      {/* Decorative Leaf Accents */}
      <img 
        src={leafAccent} 
        alt="" 
        className="absolute top-20 left-10 w-16 md:w-24 opacity-20 rotate-12"
        aria-hidden="true"
      />
      <img 
        src={leafAccent} 
        alt="" 
        className="absolute bottom-32 right-10 w-20 md:w-32 opacity-15 -rotate-45"
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-12 px-6">
        
        {/* Header/Logo Area */}
        <header className="fade-in">
          <h2 className="text-2xl md:text-3xl font-serif text-accent text-center tracking-wide">
            Aseximlanka
          </h2>
        </header>

        {/* Main Hero Content */}
        <section className="flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto space-y-12">
          
          {/* Main Slogan */}
          <div className="space-y-6 fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary-foreground leading-tight">
              Serenity from Seven Regions
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-light tracking-wide">
              Exim's Tea. Steeped in Craft. Sipped in Calm.
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
