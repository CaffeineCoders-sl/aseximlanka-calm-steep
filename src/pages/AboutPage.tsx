import { Award, Users, Globe, TrendingUp, Target, Heart, Sparkles, Building } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// FloatingLeaves component removed — decorative leaves have been removed per request

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "Unwavering commitment to excellence in every product we deliver",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Heart,
      title: "Heritage",
      description: "Honoring the rich legacy of Sri Lanka's finest tea culture",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Conducting business with complete transparency and honesty",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Leveraging cutting-edge technology for evolving global demands",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const milestones = [
    { year: "1977", title: "Foundation", description: "Legacy begins with Mr. S. A. D. Piyadasa" },
    { year: "1998", title: "Next Generation", description: "Mr. Chamil Samantha joins the business" },
    { year: "2000s", title: "Global Expansion", description: "Established presence in Middle Eastern markets" },
    { year: "2024", title: "A. S. Exim Lanka", description: "New chapter with export license and modern facilities" },
  ];

  const expertise = [
    { icon: Users, stat: "150+", label: "Expert Professionals" },
    { icon: Globe, stat: "40+", label: "Years Experience" },
    { icon: Building, stat: "ISO", label: "Certified Quality" },
    { icon: Award, stat: "Global", label: "Market Leader" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-amber-950">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1563299796-17596ed6b017?w=1920&q=80')",
            }}
          />
        </div>

        <div ref={headerRef} className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <p className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
                Our Story
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
              A Proud Legacy of
              <span className="block text-amber-400">Excellence & Trust</span>
            </h1>
            <p className="text-xl text-white/80 font-light leading-relaxed">
              Since 1977, we've been crafting the finest Ceylon Tea, building
              bridges between tradition and innovation, and earning the trust of
              global markets.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?w=600&q=80"
                      alt="Tea Estate"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1597318112430-12cbb5c0c2cc?w=600&q=80"
                      alt="Tea Processing"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80"
                      alt="Tea Cup"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80"
                      alt="Tea Plantation"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-100 rounded-3xl -z-10" />
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-emerald-100 rounded-3xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                  Built on Generations of Expertise
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-amber-600 to-transparent" />
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Established as a new chapter of a proud legacy, <strong className="text-gray-900">A. S. Exim
                Lanka (Pvt) Ltd</strong> is a premier exporter of <strong className="text-gray-900">Ceylon Tea</strong>,
                delivering unmatched quality to discerning markets around the world.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our roots trace back to <strong className="text-gray-900">1977</strong>, when the foundation
                was laid through decades of experience and knowledge passed down from{" "}
                <strong className="text-gray-900">Mr. S. A. D. Piyadasa</strong>, a prominent figure in the
                Sri Lankan tea industry.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our Managing Director, <strong className="text-gray-900">Mr. Chamil Samantha</strong>, began
                his professional journey in <strong className="text-gray-900">1998</strong>, learning the
                intricacies of the tea trade under the guidance of his father. Today, we stand
                as one of the leading suppliers of premium Ceylon Tea to{" "}
                <strong className="text-gray-900">blue-chip clients</strong> and{" "}
                <strong className="text-gray-900">multinational companies</strong> worldwide.
              </p>

              {/* Inserted: The Story of Ceylon Tea narrative from user */}
              <div className="mt-6">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">The Story of Ceylon Tea</h3>
                <p className="text-gray-700 leading-relaxed">
                  The story of Ceylon Tea begins in the misty mountains of Sri Lanka — once called Ceylon. In the mid-19th
                  century, British planters searching for fortune discovered that the island’s highlands were more than scenic —
                  they were perfectly suited for tea.
                </p>

                <p className="text-gray-700 leading-relaxed mt-4">
                  After a devastating coffee blight in the 1860s, a Scottish planter named James Taylor planted the first
                  commercial tea estate in Loolecondera, Kandy, in 1867. His small experiment soon transformed Sri Lanka into
                  one of the world’s greatest tea producers. What began as a few acres of tender green bushes became a thriving
                  industry that shaped the island’s culture, economy, and global reputation.
                </p>

                <h4 className="text-xl font-serif text-gray-900 mt-6">A Landscape Made for Tea</h4>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Sri Lanka’s unique geography and climate give Ceylon Tea its remarkable diversity. From the crisp, citrusy
                  teas of Nuwara Eliya to the full-bodied richness of Uva, the bright briskness of Dimbula, and the deep aroma
                  of Kandy — every region tells its own story through the cup. Cool mountain air, rich red soil, and monsoon rains
                  nurture the leaves, while centuries of craftsmanship ensure that every plucked bud carries the soul of the island’s hills.
                </p>

                <hr className="my-6" />

                <h4 className="text-xl font-serif text-gray-900">The Art of Perfection</h4>
                <p className="text-gray-700 leading-relaxed mt-2">
                  Each leaf is handpicked — the delicate “two leaves and a bud.” The tea is then withered, rolled, fermented, and fired
                  with precision to preserve its aroma and character. This devotion to craft makes Ceylon Tea one of the few remaining
                  hand-harvested teas in the modern world.
                </p>

                <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
                  <li>Bright golden liquor</li>
                  <li>Fresh, lively aroma</li>
                  <li>Brisk, clean taste that lingers with clarity</li>
                </ul>

                <p className="text-gray-700 mt-4">
                  These qualities have made Ceylon Tea a global standard of excellence. Today, Sri Lanka remains one of the world’s top
                  tea exporters. The Lion Logo of Ceylon Tea guarantees 100% pure Ceylon origin — a mark of integrity, authenticity, and pride.
                </p>

                <p className="text-gray-700 mt-4">
                  Beyond commerce, tea is a way of life — a rhythm of hills, harvests, and human hands. From sunrise plucking to the last
                  evening cup, Ceylon Tea continues to symbolize warmth, hospitality, and heritage — a timeless taste born of Sri Lankan soil and soul.
                </p>

                <div className="mt-6 p-6 bg-amber-50 rounded-lg">
                  <p className="text-gray-900 font-serif text-lg">Since 1977, we've been crafting the finest Ceylon Tea, building bridges between tradition and innovation, and earning the trust of global markets.</p>
                </div>
              </div>

              {/* Expertise Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                {expertise.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-emerald-50 to-amber-50 p-6 rounded-xl"
                  >
                    <item.icon className="w-8 h-8 text-amber-600 mb-3" />
                    <div className="text-3xl font-serif text-gray-900 mb-1">
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Milestones of Excellence
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-emerald-600 to-amber-600 transform -translate-x-1/2 hidden md:block" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-16 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:ml-0" : "md:pl-16 md:ml-auto"
                    }`}
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className="inline-block px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white text-2xl font-serif rounded-full mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-serif text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 w-6 h-6 bg-amber-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-emerald-50 via-emerald-50 to-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-100">
              <div className="absolute top-6 right-6 w-20 h-20 bg-emerald-600/10 rounded-full" />
              <Target className="w-16 h-16 text-emerald-600 mb-6" />
              <h3 className="text-3xl font-serif text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be a globally respected name in the tea export industry by delivering
                consistently high-quality, ethically sourced Ceylon Tea while nurturing a
                sustainable and innovative business environment.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-amber-50 via-amber-50 to-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100">
              <div className="absolute top-6 right-6 w-20 h-20 bg-amber-600/10 rounded-full" />
              <Sparkles className="w-16 h-16 text-amber-600 mb-6" />
              <h3 className="text-3xl font-serif text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide our clients with premium-grade, custom-blended Ceylon Tea that
                reflects the rich heritage and superior quality of Sri Lankan produce, while
                upholding ethical values and sustainability in every facet of our business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              What Drives Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Our Core Values
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center hover:-translate-y-4 transition-all duration-500"
              >
                <div className={`w-28 h-28 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                  <value.icon className="w-14 h-14 text-white" />
                </div>
                <h4 className="text-2xl font-serif text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-32 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="text-9xl text-amber-400/20 font-serif mb-8">"</div>
            <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed text-white mb-12">
              Our journey is built on the vision of two generations — driven by
              tradition, shaped by experience, and powered by innovation. As we grow,
              we remain committed to the values that have defined us from the
              beginning: <strong className="text-amber-400 font-normal">excellence</strong>,{" "}
              <strong className="text-amber-400 font-normal">trust</strong>, and{" "}
              <strong className="text-amber-400 font-normal">a passion for tea.</strong>
            </blockquote>
            <div className="inline-block border-t-2 border-amber-400/30 pt-8">
              <p className="font-serif text-3xl text-amber-400 mb-2">Chamil Samantha</p>
              <p className="text-white/70 text-lg">Managing Director</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
