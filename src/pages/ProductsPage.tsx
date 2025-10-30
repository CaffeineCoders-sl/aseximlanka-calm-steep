import { Leaf, Package, Star, Award, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// FloatingLeaves removed — decorative leaves have been removed per request

gsap.registerPlugin(ScrollTrigger);

const ProductsPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  const teaTypes = [
    {
      name: "Premium Black Tea",
      description: "Rich, full-bodied Ceylon black tea with a distinctive character that captivates the senses",
      image: "/image2.jpeg",
      grades: ["Orange Pekoe", "PEKOE", "BOP", "FBOP", "BOPF"],
      features: ["High grown estate", "Rich malty flavor", "Perfect for blends", "Global favorite"],
      bgColor: "from-orange-50 to-amber-50",
      accentColor: "text-orange-600",
    },
    {
      name: "Ceylon Green Tea",
      description: "Delicate and refreshing green tea, packed with natural antioxidants and health benefits",
      image: "/image2.jpeg",
      grades: ["Sencha", "Gunpowder", "Young Hyson", "Chunmee"],
      features: ["Light & refreshing", "High antioxidants", "Naturally processed", "Health-conscious choice"],
      bgColor: "from-green-50 to-emerald-50",
      accentColor: "text-green-600",
    },
    {
      name: "White Tea",
      description: "Rare and exquisite white tea, representing the pinnacle of tea craftsmanship",
      image: "/image3.jpeg",
      grades: ["Silver Needle", "White Peony", "Ceylon White"],
      features: ["Minimally processed", "Delicate flavor", "Premium quality", "Luxury segment"],
      bgColor: "from-gray-50 to-slate-50",
      accentColor: "text-gray-600",
    },
    {
      name: "Specialty Blends",
      description: "Custom-crafted blends meticulously tailored to your specific market needs and preferences",
      image: "/image4.jpeg",
      grades: ["Custom Blends", "Flavored Teas", "Herbal Infusions", "Private Label"],
      features: ["Bespoke solutions", "Market-specific", "Expert blending", "Your brand, our quality"],
      bgColor: "from-purple-50 to-pink-50",
      accentColor: "text-purple-600",
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: "Premium Grade Selection",
      description: "Handpicked from the finest Ceylon tea estates",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Tailored packaging solutions for your brand identity",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "ISO certified processing facilities and standards",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Award,
      title: "Expert Blending",
      description: "150+ skilled professionals and master tea tasters",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const certifications = [
    "ISO 22000:2018",
    "HACCP Certified",
    "Ceylon Tea Export License",
    "GMP Certified",
    "Organic Certified",
    "Rainforest Alliance",
  ];

  // Milestones and Collections (matching component)
  const milestones = [
    { year: 2005, title: "Foundations of Trade", text: "A S Exim Lanka (Pvt) Ltd began as a family trading house in Sri Lanka, exporting authentic Ceylon tea and spices to regional buyers." },
    { year: 2010, title: "Expanding Horizons", text: "Established supplier networks across Nuwara Eliya, Uva, and Dimbula and expanded into premium spices." },
    { year: 2015, title: "The Art of Blending", text: "Invested in modern blending and packing to curate unique flavour profiles." },
  ];

  const collections = [
    {
      section: "Premium Caddy Collection",
      items: [
        { name: "Exim’s Gold Reserve", image: "/image1.jpeg" },
        { name: "Exim’s Emerald Green", image: "/image2.jpeg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=1920&q=80')",
            }}
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div ref={headerRef} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-amber-500/30 rounded-full">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
                Premium Ceylon Tea Collection
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
              Our Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Tea Selection
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              From the mist-covered highlands of Sri Lanka, we bring you an exquisite
              selection of premium teas, each reflecting our commitment to excellence
              and tradition.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Features Bar */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-24 h-24 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-gray-100`}>
                    <feature.icon className="w-12 h-12 text-black" />
                  </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tea Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-32 max-w-7xl mx-auto">
            {teaTypes.map((tea, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative group flex justify-center px-4">
                    {/* Card wrapper to give breathing room and consistent shape */}
                    <div className="w-full max-w-[480px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                      <img
                        src={tea.image}
                        alt={tea.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      />
                    </div>
                    <div className={`absolute -bottom-8 ${index % 2 === 0 ? '-right-8' : '-left-8'} w-48 h-48 bg-gradient-to-br ${tea.bgColor} rounded-3xl -z-10`} />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-3`}>
                      {tea.name}
                    </h2>
                    <div className={`w-20 h-1 rounded-full bg-amber-100/60 mb-4`} />
                  </div>
                  <p className="text-base md:text-lg text-gray-600 max-w-prose leading-relaxed">
                    {tea.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {tea.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-50">
                          <Check className={`w-4 h-4 text-black`} />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Grades */}
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                      Available Grades:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {tea.grades.map((grade, i) => (
                        <span
                          key={i}
                          className={`px-4 py-2 bg-amber-50 text-black text-sm font-medium rounded-full shadow-sm border border-amber-100`}
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?w=1920&q=80')",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Unmatched Expertise
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </div>

            <p className="text-xl text-white/90 leading-relaxed">
              Backed by over <strong className="text-amber-400">40 years of industry
              experience</strong>, our company brings together tradition and modernity in
              tea blending, packaging, and export. Our{" "}
              <strong className="text-amber-400">team of 150 skilled professionals</strong>,
              including highly trained tea tasters with global exposure, ensures that
              every batch of tea meets the highest international standards.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <div className="text-5xl font-serif text-amber-400 mb-3">
                  ISO
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Certified Quality Standards
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <div className="text-5xl font-serif text-amber-400 mb-3">
                  Custom
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Tailored Blend Solutions
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <div className="text-5xl font-serif text-amber-400 mb-3">
                  Global
                </div>
                <div className="text-sm text-white/70 uppercase tracking-wide">
                  Worldwide Export & Delivery
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Quality Assurance
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Certifications & Standards
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <Award className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              Interested in Our
              <span className="block text-amber-600">Premium Products?</span>
            </h2>
            <p className="text-xl text-gray-600">
              Contact us for custom blends, private labeling, or bulk orders tailored
              to your market needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-10 py-7 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="border-2 border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-7 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
