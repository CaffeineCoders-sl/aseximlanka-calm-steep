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
      icon: Award,
      title: "40+ Years Excellence",
      description: "Established legacy since 1977",
    },
    {
      icon: Globe,
      title: "Global Presence",
      description: "Exporting to discerning markets worldwide",
    },
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Finest Ceylon Tea from Sri Lankan highlands",
    },
    {
      icon: Shield,
      title: "ISO Certified",
      description: "International quality standards",
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
              backgroundImage:
                "url('https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=1920&q=80')",
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
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-amber-500/30 rounded-full">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
                Est. 1977 • Premium Ceylon Tea Exporters
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-none tracking-tight">
              Excellence in
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Every Leaf
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
              Where Quality Meets Global Respect
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
              A. S. Exim Lanka stands as a beacon of excellence in the Ceylon Tea industry,
              delivering unparalleled quality to the world's most discerning markets.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
              <Button
                size="lg"
                onClick={() => navigate("/products")}
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white px-16 py-9 text-xl font-bold rounded-full shadow-2xl shadow-amber-900/60 transition-all duration-300 hover:scale-110 hover:shadow-amber-900/80 cursor-pointer"
              >
                View Products
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={() => navigate("/about")}
                className="bg-white/95 text-emerald-900 hover:bg-white px-16 py-9 text-xl font-bold rounded-full shadow-2xl shadow-white/30 transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-white"
              >
                Our Heritage
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-serif text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  40+
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">
                  Years of Excellence
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-serif text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  150+
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">
                  Expert Professionals
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-serif text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">
                  Quality Assurance
                </div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-serif text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                  Global
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wider">
                  Market Reach
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
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block">
              <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
                Our Distinction
              </p>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 hover:-translate-y-3"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-amber-200">
                  <feature.icon className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Certifications Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Trusted Globally
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Industry-Leading Certifications
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {["ISO 22000:2018", "HACCP Certified", "Ceylon Tea Export", "GMP Certified", "Organic Certified", "Rainforest Alliance"].map((cert, i) => (
              <div key={i} className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-amber-100 hover:border-amber-300 text-center">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-gray-900">{cert}</p>
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
      <section className="py-48 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 0.5px, transparent 0.5px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-amber-500 text-sm tracking-[0.3em] uppercase mb-6 font-light">
                Our Distinction
              </p>
              <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 font-light tracking-tight">
                Excellence & Legacy
              </h2>
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-4 gap-12 mb-20">
              {[
                { number: "50+", label: "Countries Served" },
                { number: "47", label: "Years of Excellence" },
                { number: "200+", label: "Premium Clients" },
                { number: "99.8%", label: "Quality Assurance" },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="mb-4">
                    <div className="text-6xl md:text-7xl font-serif text-amber-400 font-light">
                      {item.number}
                    </div>
                  </div>
                  <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-4 group-hover:w-16 transition-all duration-300" />
                  <p className="text-white/70 uppercase text-sm tracking-widest font-light">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="border-l-2 border-amber-500 pl-8 py-4">
                <h3 className="text-2xl font-serif text-white mb-4 font-light">
                  Certified Quality
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  ISO 22000:2018, HACCP Certified, GMP Standards. Every batch meets the highest international quality benchmarks with rigorous testing protocols.
                </p>
              </div>
              <div className="border-l-2 border-amber-500 pl-8 py-4">
                <h3 className="text-2xl font-serif text-white mb-4 font-light">
                  Sustainable Excellence
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  Rainforest Alliance Certified. Committed to environmental stewardship, ethical practices, and supporting local communities across Ceylon's tea estates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What Our Clients Say
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Hassan Al-Mansouri", role: "CEO, Middle East Trading Co.", quote: "A. S. Exim Lanka has been our trusted partner for 15 years. Their consistency and premium quality are unmatched.", rating: 5 },
              { name: "Eleanor Chen", role: "Head of Procurement, Global Beverages", quote: "Exceptional service, premium products, and true commitment to excellence. They set the standard in the industry.", rating: 5 },
              { name: "James Robertson", role: "Founder, Fine Tea Imports Ltd", quote: "Outstanding reliability and the finest Ceylon tea available. Our customers consistently praise the quality.", rating: 5 },
            ].map((testimonial, i) => (
              <div key={i} className="group bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 hover:border-amber-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-serif text-gray-900 font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
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
      <section className="py-32 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Ready to Experience
              <span className="block text-amber-400">Premium Ceylon Tea?</span>
            </h2>
            <p className="text-xl text-white/80 font-light">
              Partner with us for exceptional quality, reliable service, and the finest
              tea Sri Lanka has to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-7 text-lg font-medium rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/products")}
                className="border-2 border-white/50 text-white hover:bg-white hover:text-emerald-900 px-10 py-7 text-lg font-medium rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                View Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
