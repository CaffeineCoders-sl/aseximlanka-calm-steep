import { Leaf, Package, Award, Globe, Check, ArrowRight, Sparkles, Shield, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SpicesPage = () => {
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

  const spices = [
    {
      name: "Ceylon Cinnamon",
      latin: "Cinnamomum Zeylanicum",
      description: "Golden, sweet, and delicate in flavor — the world's finest true cinnamon.",
      origin: "Matale, Kegalle",
      image: "/spices/image1.jpeg",
      features: ["True Cinnamon", "Sweet & Delicate", "Premium Grade", "Hand-rolled"],
    },
    {
      name: "Black Pepper",
      description: "Rich, bold aroma and sharp heat, naturally sun-dried.",
      origin: "Kandy, Kurunegala",
      image: "/spices/image2.jpeg",
      features: ["Bold Aroma", "Sun-dried", "High Piperine", "Premium Quality"],
    },
    {
      name: "Cloves",
      description: "Full-bodied aroma and high oil content; handpicked for purity.",
      origin: "Matara, Galle",
      image: "/spices/image3.jpeg",
      features: ["High Oil Content", "Handpicked", "Pure Origin", "Rich Aroma"],
    },
    {
      name: "Cardamom",
      description: "High-elevation variety with deep fragrance and vibrant color.",
      origin: "Uda Pussellawa",
      image: "/spices/image1.jpeg",
      features: ["High Elevation", "Deep Fragrance", "Vibrant Color", "Premium Grade"],
    },
    {
      name: "Nutmeg & Mace",
      description: "Sweet, warm flavor with vibrant natural oils.",
      origin: "Kandy, Matale",
      image: "/spices/image2.jpeg",
      features: ["Natural Oils", "Warm Flavor", "Dual Spice", "Premium Quality"],
    },
    {
      name: "Turmeric & Ginger",
      description: "Purely grown, sun-cured roots — ideal for both culinary and wellness use.",
      origin: "Dambulla, Monaragala",
      image: "/spices/image3.jpeg",
      features: ["Wellness Grade", "Sun-cured", "Pure Roots", "Organic Option"],
    },
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Purity",
      description: "100% authentic Sri Lankan origin",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Ethical sourcing, supporting rural growers",
    },
    {
      icon: Shield,
      title: "Traceability",
      description: "Full transparency from farm to export",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Global standards, advanced processing",
    },
  ];

  const packagingOptions = [
    {
      title: "Bulk Export Bags",
      range: "5–50 kg",
      use: "Industrial and wholesale buyers",
    },
    {
      title: "Retail Packs",
      range: "50g–500g pouches",
      use: "Supermarkets and boutique stores",
    },
    {
      title: "Glass Jars & Tin Canisters",
      range: "Premium packaging",
      use: "Gourmet and gift collections",
    },
    {
      title: "Private Label Solutions",
      range: "Custom branding",
      use: "Export packaging and design",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative mt-16 py-32 md:py-48 overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-emerald-950">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: "url('/spices/image1.jpeg')",
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
                Spice of Ceylon
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
              The Island's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Fragrance
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              For centuries, Ceylon has been the heart of the world's spice trade.
              At A S Eximlanka, we continue that legacy with purity, authenticity,
              and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-10 py-7 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Excellence Where Heritage Meets Innovation
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-amber-100">
                  <value.icon className="w-12 h-12 text-amber-600" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      {/* Heritage Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/spices/image2.jpeg')",
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                The Legacy of Ceylon Spices
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </div>

            <p className="text-xl text-white/90 leading-relaxed">
              For centuries, Ceylon (Sri Lanka) has been the heart of the world's spice 
              trade — where explorers once sailed oceans in search of the island's golden 
              cinnamon, fiery pepper, and fragrant cardamom.
            </p>

            <p className="text-lg text-white/80 leading-relaxed max-w-4xl mx-auto">
              We partner directly with smallholder farmers across Sri Lanka's key 
              spice-growing regions — from Matale's cinnamon hills to Kandy's misty 
              pepper gardens and Uva's fertile valleys. Each product represents our 
              commitment to ethical trade and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Spices Portfolio */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Collection
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Premium Spice Portfolio
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {spices.map((spice, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={spice.image}
                    alt={spice.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif text-gray-900 mb-2">
                    {spice.name}
                  </h3>
                  {spice.latin && (
                    <p className="text-xs text-amber-600 italic mb-3">{spice.latin}</p>
                  )}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {spice.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-500">
                    <Globe className="w-4 h-4" />
                    <span>{spice.origin}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {spice.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-amber-600" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing & Quality */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Quality Assurance
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Processing Excellence
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-gray-900">
                State-of-the-Art Processing
              </h3>
              <ul className="space-y-4">
                {[
                  "Cleaning, grading, and sorting with minimal handling",
                  "Metal detection and sterilization for export compliance",
                  "Vacuum and nitrogen-sealed packaging options",
                  "Full ISO and HACCP standards compliance",
                  "Multi-stage quality checks maintaining freshness",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-emerald-50 p-10 rounded-3xl border border-amber-100">
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Our Promise
              </h3>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                "Each grain, leaf, and spice we export carries the essence of our island.
                Our promise is to bring the world the authentic flavor of Ceylon — pure,
                ethical, and full of life."
              </blockquote>
              <div className="w-20 h-1 bg-amber-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Solutions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Tailored Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Packaging Options
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {packagingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <Package className="w-12 h-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-serif text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-amber-600 font-medium mb-3">{option.range}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{option.use}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our green and gold packaging theme symbolizes purity, heritage, and 
              Sri Lanka's richness. Custom branding and private label solutions available.
            </p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Global Reach
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar" },
                { region: "Europe & CIS", countries: "Russia, Ukraine" },
                { region: "Asia Pacific", countries: "Maldives, Singapore, Malaysia" },
              ].map((market, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                  <Globe className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-xl font-serif text-white mb-2">{market.region}</h3>
                  <p className="text-sm text-white/70">{market.countries}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Sustainability & Community Impact
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Leaf, title: "Farmer Training", desc: "Organic cultivation programs" },
              { icon: Heart, title: "Women Empowerment", desc: "Processing cooperatives" },
              { icon: TrendingUp, title: "Renewable Energy", desc: "Powered operations" },
              { icon: Package, title: "Eco Packaging", desc: "Sustainable initiatives" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-amber-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <item.icon className="w-10 h-10 text-emerald-700" />
                </div>
                <h3 className="text-lg font-serif text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
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
              Ready to Experience
              <span className="block text-amber-600">Authentic Ceylon Spices?</span>
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
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpicesPage;
