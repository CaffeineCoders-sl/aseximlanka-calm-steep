import { Leaf, Package, Star, Award } from "lucide-react";
import { Button } from "./ui/button";

const Products = () => {
  const teaTypes = [
    {
      name: "Black Tea",
      description: "Rich, full-bodied Ceylon black tea with distinctive character",
      image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&q=80",
      grades: ["OP", "PEKOE", "BOP", "FBOP"],
    },
    {
      name: "Green Tea",
      description: "Delicate and refreshing, packed with antioxidants",
      image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=600&q=80",
      grades: ["Sencha", "Gunpowder", "Young Hyson"],
    },
    {
      name: "White Tea",
      description: "Rare and exquisite, the pinnacle of tea craftsmanship",
      image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80",
      grades: ["Silver Needle", "White Peony"],
    },
    {
      name: "Specialty Blends",
      description: "Custom-crafted blends tailored to your market needs",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
      grades: ["Custom", "Flavored", "Herbal Infusions"],
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: "Premium Grade",
      description: "Handpicked from the finest estates",
    },
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Tailored solutions for your brand",
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "ISO certified processing facilities",
    },
    {
      icon: Award,
      title: "Expert Blending",
      description: "150+ skilled professionals",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm tracking-[0.3em] uppercase mb-4">
            Our Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Premium Ceylon Tea
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From the mist-covered highlands of Sri Lanka, we bring you an exquisite
            selection of premium teas, each reflecting our commitment to excellence
            and tradition.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-serif text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tea Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teaTypes.map((tea, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={tea.image}
                  alt={tea.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">
                  {tea.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{tea.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    Available Grades:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tea.grades.map((grade, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full"
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

        {/* Expertise Section */}
        <div className="bg-emerald-900 text-white rounded-lg p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-serif mb-6">Our Expertise</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              Backed by over <strong>40 years of industry experience</strong>, our
              company brings together tradition and modernity in tea blending,
              packaging, and export. Our <strong>team of 150 skilled professionals</strong>,
              including highly trained tea tasters with global exposure, ensures that
              every batch of tea meets the highest international standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-serif text-amber-400 mb-2">
                  ISO Certified
                </div>
                <div className="text-sm text-white/70">Quality Standards</div>
              </div>
              <div className="border-x border-white/20">
                <div className="text-4xl font-serif text-amber-400 mb-2">
                  Custom Blends
                </div>
                <div className="text-sm text-white/70">Tailored Solutions</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-amber-400 mb-2">
                  Global Export
                </div>
                <div className="text-sm text-white/70">Worldwide Delivery</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-serif text-gray-900 mb-4">
            Interested in Our Products?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us for custom blends, private labeling, or bulk orders
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
