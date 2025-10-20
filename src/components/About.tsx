import { Award, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "Commitment to excellence in every product we deliver",
    },
    {
      icon: Users,
      title: "Heritage",
      description: "Honoring the legacy of Sri Lanka's tea culture",
    },
    {
      icon: Globe,
      title: "Integrity",
      description: "Conducting business with transparency and honesty",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging modern technology for evolving demands",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">
            Our Legacy
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            About A. S. Exim Lanka
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto" />
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563299796-17596ed6b017?w=800&q=80"
                alt="Tea Plantation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-100 rounded-lg -z-10" />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-gray-900">
              A Proud Legacy Since 1977
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Established as a new chapter of a proud legacy, <strong>A. S. Exim Lanka
              (Pvt) Ltd</strong> is a premier exporter of <strong>Ceylon Tea</strong>, delivering
              unmatched quality to discerning markets around the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our roots trace back to <strong>1977</strong>, when the foundation was laid
              through decades of experience and knowledge passed down from{" "}
              <strong>Mr. S. A. D. Piyadasa</strong>, a prominent figure in the Sri Lankan
              tea industry.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we are recognized as one of the leading suppliers of premium
              Ceylon Tea to <strong>blue-chip clients</strong> and{" "}
              <strong>multinational companies</strong> worldwide, backed by over{" "}
              <strong>40 years of industry experience</strong>.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be a globally respected name in the tea export industry by
              delivering consistently high-quality, ethically sourced Ceylon Tea
              while nurturing a sustainable and innovative business environment.
            </p>
          </div>
          <div className="bg-amber-50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide our clients with premium-grade, custom-blended Ceylon Tea
              that reflects the rich heritage and superior quality of Sri Lankan
              produce, while upholding ethical values and sustainability.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-serif text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  <value.icon className="w-10 h-10 text-amber-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-serif text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Message */}
        <div className="mt-20 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white p-12 rounded-lg">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-amber-400 mb-4">"</div>
            <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed mb-6">
              Our journey is built on the vision of two generations — driven by
              tradition, shaped by experience, and powered by innovation. As we
              grow, we remain committed to the values that have defined us from the
              beginning: <strong>excellence</strong>, <strong>trust</strong>, and{" "}
              <strong>a passion for tea.</strong>
            </blockquote>
            <div className="border-t border-amber-400/30 pt-4">
              <p className="font-serif text-xl text-amber-400">Chamil Samantha</p>
              <p className="text-white/70">Managing Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
