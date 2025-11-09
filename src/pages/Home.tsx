import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Globe,
  Leaf,
  Shield,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// FloatingLeaves removed — decorative leaves have been removed per request

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const procesRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.3,
      });
    }

    // Animate stats on scroll
    if (statsRef.current) {
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });
    }

    // Animate process steps
    if (procesRef.current) {
      gsap.from(procesRef.current.querySelectorAll(".process-item"), {
        opacity: 0,
        x: -50,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: procesRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }
  }, []);

  const features = [
    {
      icon: Leaf,
      title: "Ceylon Tea Excellence",
      description: "Premium single-origin teas from seven legendary regions",
    },
    {
      icon: Globe,
      title: "Authentic Spices",
      description: "True Ceylon cinnamon, pepper, and artisan spice blends",
    },
    {
      icon: Award,
      title: "Wellness Tourism",
      description: "Ayurvedic retreats at Eden Harvest Village",
    },
    {
      icon: Shield,
      title: "ISO & HACCP Certified",
      description: "Global quality standards across all operations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 opacity-95" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
             backgroundImage: "url('/image.png')"
            }}
          />
          {/* Overlay Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 border border-amber-500/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-amber-500/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-amber-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Content */}
        <div ref={heroRef} className="relative z-20 container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-amber-400/40 rounded-full shadow-2xl">
              <div className="w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50" />
              <span className="text-amber-300 text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                Est. 1977 • Ceylon's Finest Exports
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-[1.1] tracking-tight">
              Tradition Perfected.
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 font-serif italic">
                Excellence Delivered.
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide max-w-4xl mx-auto">
              Ceylon Tea • Authentic Spices • Wellness Tourism
            </p>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              A. S. Exim Lanka represents the pinnacle of Sri Lankan heritage — 
              from mist-covered tea estates to aromatic spice gardens and transformative wellness experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-16">
              <Button
                size="lg"
                onClick={() => navigate("/products")}
                className="group relative bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:via-amber-500 hover:to-amber-400 text-white px-14 py-8 text-lg font-semibold rounded-full shadow-2xl shadow-amber-900/50 transition-all duration-500 hover:scale-105 hover:shadow-amber-500/60 cursor-pointer border border-amber-400/30"
              >
                Explore Our Divisions
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={() => navigate("/about")}
                className="group bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-emerald-950 px-14 py-8 text-lg font-semibold rounded-full shadow-2xl border-2 border-white/40 hover:border-white transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                Our Story
              </Button>
            </div>

            {/* Stats Bar */}
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-24 max-w-5xl mx-auto">
              <div className="text-center group cursor-default">
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                  47
                </div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-medium">
                  Years Heritage
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                  50+
                </div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-medium">
                  Global Markets
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                  3
                </div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-medium">
                  Elite Divisions
                </div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-300 mb-4 group-hover:scale-110 transition-transform duration-500">
                  ISO
                </div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-[0.2em] font-medium">
                  Certified Quality
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-amber-400 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1.5px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <p className="text-amber-600 text-xs md:text-sm tracking-[0.25em] uppercase mb-6 font-semibold">
              Three Pillars of Excellence
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
              Heritage Meets Innovation
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-10 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-amber-200/60 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-50 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-8 bg-gradient-to-br from-amber-100 via-amber-50 to-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-md group-hover:shadow-amber-200/50">
                    <feature.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 mb-4 text-center leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-600 text-xs md:text-sm tracking-[0.25em] uppercase mb-6 font-semibold">
              Global Standards
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-8">
              Certified Excellence
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {["ISO 22000:2018", "HACCP Certified", "Ceylon Tea Board", "GMP Certified", "Organic Certified", "Rainforest Alliance"].map((cert, i) => (
              <div key={i} className="group bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-amber-300/50 text-center hover:-translate-y-1">
                <Award className="w-8 h-8 lg:w-10 lg:h-10 text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                <p className="text-xs lg:text-sm font-medium text-gray-800 leading-tight">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-32 bg-white" ref={procesRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Workflow
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              From Estate to Your Cup
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Sourcing", desc: "Hand-selected from premium Ceylon estates" },
              { step: "02", title: "Quality Check", desc: "Expert tasters verify every batch" },
              { step: "03", title: "Blending", desc: "Custom blends crafted by masters" },
              { step: "04", title: "Export Ready", desc: "Packaged with precision & care" },
            ].map((item, i) => (
              <div key={i} className="process-item group relative">
                <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 p-8 rounded-2xl text-white relative z-10 h-full hover:shadow-2xl transition-all duration-300">
                  <div className="text-5xl font-serif text-amber-400 mb-4 opacity-40">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-serif mb-3">{item.title}</h3>
                  <p className="text-white/80 leading-relaxed">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-4 transform translate-x-1/2 z-0">
                    <ArrowRight className="w-8 h-8 text-amber-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence & Achievement Section */}
      <section className="py-40 md:py-48 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-28">
              <p className="text-amber-400/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-8 font-light">
                A Legacy of Trust
              </p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-10 tracking-tight leading-tight">
                Four Decades of
                <span className="block text-amber-300 italic font-serif mt-2">Uncompromising Quality</span>
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24">
              {[
                { number: "50+", label: "Export Markets" },
                { number: "47", label: "Years Excellence" },
                { number: "200+", label: "Global Partners" },
                { number: "99.9%", label: "Quality Rating" },
              ].map((item, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="mb-6">
                    <div className="text-5xl md:text-6xl lg:text-7xl font-light text-amber-300 transition-all duration-700 group-hover:scale-105">
                      {item.number}
                    </div>
                  </div>
                  <div className="h-px w-16 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-5 group-hover:w-20 transition-all duration-500" />
                  <p className="text-white/50 uppercase text-xs tracking-[0.2em] font-light">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
              <div className="border-l-2 border-amber-400/40 pl-8 py-6 hover:border-amber-400 transition-colors duration-500">
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-5">
                  Ethical Sourcing
                </h3>
                <p className="text-white/50 leading-relaxed font-light text-sm lg:text-base">
                  Direct partnerships with smallholder farmers across Sri Lanka, ensuring fair trade, 
                  sustainable practices, and full traceability from estate to export.
                </p>
              </div>
              <div className="border-l-2 border-amber-400/40 pl-8 py-6 hover:border-amber-400 transition-colors duration-500">
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-5">
                  Innovation & Heritage
                </h3>
                <p className="text-white/50 leading-relaxed font-light text-sm lg:text-base">
                  Blending centuries-old traditions with state-of-the-art processing, 
                  packaging, and quality assurance — preserving authenticity while meeting global standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Value Proposition */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                Why Premium Brands
                <span className="block text-amber-400">Choose A. S. Exim Lanka</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Uncompromising Quality", desc: "Every batch meets our exacting international standards. No shortcuts, no compromises." },
                { title: "Reliability & Consistency", desc: "40+ years of proven delivery. We honor our commitments to the day, every time." },
                { title: "Custom Solutions", desc: "From private labels to bespoke blends, we tailor every solution to your needs." },
                { title: "Industry Expertise", desc: "150+ professionals including master tea tasters and blending specialists." },
                { title: "Sustainable Practices", desc: "Ethical sourcing and environmental responsibility embedded in our operations." },
                { title: "Global Logistics", desc: "Seamless export and delivery to 50+ countries with full compliance support." },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-40 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1597318112430-12cbb5c0c2cc?w=1920&q=80')",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Partner with Ceylon's
              <span className="block text-amber-300 italic font-serif mt-2">Finest Export House</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
              Experience uncompromising quality, ethical sourcing, and global reliability 
              across tea, spices, and wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="group bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:via-amber-500 hover:to-amber-400 text-white px-12 py-7 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-500 border border-amber-400/30"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/products")}
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-emerald-950 px-12 py-7 text-lg font-semibold rounded-full backdrop-blur-md transition-all duration-500 hover:scale-105"
              >
                Explore Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
