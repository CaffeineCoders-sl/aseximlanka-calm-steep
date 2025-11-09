import { Heart, Leaf, Home, Users, Sparkles, ArrowRight, TreePine, Waves, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WellnessPage = () => {
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

  const features = [
    {
      icon: Heart,
      title: "Kadahapola Ayurvedic",
      description: "Authentic treatments rooted in Sri Lankan Ayurveda",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Leaf,
      title: "Organic Harvest Theme",
      description: "Farm-to-table dining with produce from on-site gardens",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Home,
      title: "Eco-Resorts",
      description: "Sustainable architecture blending with natural landscapes",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Users,
      title: "Cultural Immersion",
      description: "Traditional farming, yoga, meditation, village experiences",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const experiences = [
    {
      title: "Ayurvedic Wellness Programs",
      items: [
        "Traditional Panchakarma treatments",
        "Personalized wellness consultations",
        "Herbal medicine and natural therapies",
        "Meditation and mindfulness sessions",
      ],
    },
    {
      title: "Farm & Garden Experiences",
      items: [
        "Organic farming workshops",
        "Herb garden tours and harvesting",
        "Cooking classes with fresh produce",
        "Tea and spice plantation visits",
      ],
    },
    {
      title: "Nature & Adventure",
      items: [
        "Lakeside walks around Yodha Wewa",
        "Bird watching and nature trails",
        "Cycling through paddy fields",
        "Sunrise and sunset yoga sessions",
      ],
    },
    {
      title: "Cultural Heritage",
      items: [
        "Traditional village ceremonies",
        "Local craft workshops",
        "Sri Lankan cooking experiences",
        "Cultural dance performances",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative mt-16 py-32 md:py-48 overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1540206395-68808572332f?w=1920&q=80')",
            }}
          />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/20 rounded-full animate-pulse"
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
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-emerald-500/30 rounded-full">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase font-medium">
                Eden Harvest Wellness Village
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
              Go Green
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-500">
                Go Pure • Go Wellness
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Experience authentic Ayurvedic healing, organic agriculture, and eco-tourism
              in our 15-acre wellness sanctuary at Yodhakandiya.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-10 py-7 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300"
              >
                Book Your Retreat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <p className="text-emerald-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Vision
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              A Holistic Lifestyle Experience
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto mb-8" />
            
            <p className="text-xl text-gray-700 leading-relaxed">
              The Eden Harvest Wellness Village at Yodhakandiya spans over 15 acres, 
              surrounded by serene paddy fields and the tranquil Yodha Wewa Lake.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We combine Ayurvedic healing, organic agriculture, eco-tourism, and wellness 
              retreats to create a holistic lifestyle experience that positions Yodhakandiya 
              as a model "Wellness Village of Sri Lanka," uniting health, heritage, and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What We Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Four Pillars of Wellness
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-serif text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kadahapola Ayurvedic Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80')",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Kadahapola Ayurvedic Partnership
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto" />
            </div>

            <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20">
              <p className="text-xl text-white/90 leading-relaxed mb-8 text-center">
                Our wellness programs are developed in partnership with Kadahapola Ayurvedic, 
                bringing centuries-old Sri Lankan healing traditions to modern wellness seekers.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: Heart, title: "Holistic Healing", desc: "Mind, body, spirit balance" },
                  { icon: Leaf, title: "Natural Remedies", desc: "Pure herbal treatments" },
                  { icon: Sun, title: "Personal Care", desc: "Customized wellness plans" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <item.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-lg font-serif text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Your Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Immersive Wellness Experiences
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-white p-10 rounded-3xl border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-serif text-gray-900 mb-6">
                  {exp.title}
                </h3>
                <ul className="space-y-3">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Leaf className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-serif text-white">
                  Yodhakandiya Paradise
                </h2>
                <div className="w-20 h-1 bg-emerald-400" />
                <p className="text-lg text-white/80 leading-relaxed">
                  Nestled beside the serene Yodha Wewa Lake and surrounded by verdant 
                  paddy fields, our 15-acre wellness village offers complete tranquility 
                  away from urban chaos.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: Waves, text: "Lakeside serenity" },
                    { icon: TreePine, text: "Natural forest surroundings" },
                    { icon: Sun, text: "Clean air and pure environment" },
                    { icon: Moon, text: "Starlit meditation spaces" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-emerald-400" />
                      <span className="text-white/90">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20">
                <blockquote className="text-xl text-white/90 italic leading-relaxed">
                  "A sanctuary where ancient wisdom meets modern wellness, 
                  surrounded by nature's embrace and the healing energy of the land."
                </blockquote>
                <div className="mt-6">
                  <div className="w-16 h-1 bg-emerald-400" />
                  <p className="text-sm text-white/70 mt-4">Eden Harvest Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-emerald-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Sustainable Wellness
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto" />
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Every aspect of Eden Harvest is designed with sustainability in mind — 
              from eco-friendly construction and renewable energy to organic farming 
              practices and water conservation.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              {[
                { value: "100%", label: "Organic Gardens" },
                { value: "Zero", label: "Chemical Use" },
                { value: "15+", label: "Acres Preserved" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl font-serif text-emerald-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
              Begin Your
              <span className="block text-emerald-600">Wellness Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Discover the perfect balance of Ayurvedic healing, organic living, 
              and natural serenity at Eden Harvest.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-10 py-7 text-lg font-medium rounded-full shadow-xl hover:scale-105 transition-all duration-300"
              >
                Reserve Your Stay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="border-2 border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-7 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPage;
