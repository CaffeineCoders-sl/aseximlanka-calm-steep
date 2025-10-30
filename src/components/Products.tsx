import { Leaf, Package, Star, Award } from "lucide-react";
import { Button } from "./ui/button";

const Products = () => {
  const milestones = [
    { year: 2005, title: "Foundations of Trade", text: "A S Exim Lanka (Pvt) Ltd began as a family trading house in Sri Lanka, exporting authentic Ceylon tea and spices to regional buyers. Our foundation was built on trust, quality, and long-term partnerships." },
    { year: 2010, title: "Expanding Horizons", text: "We strengthened our export footprint, establishing reliable supplier networks across Nuwara Eliya, Uva, and Dimbula and extended trade to premium spices such as cinnamon, pepper and cloves." },
    { year: 2015, title: "The Art of Blending", text: "Investing in modern blending and packing facilities, we transformed into tea curators. Our master blenders began crafting distinct flavour profiles for diverse markets." },
    { year: 2018, title: "Heritage Meets Innovation", text: "Introduced pyramid sachets, tin caddies, and paper-based eco packs to preserve freshness while reducing waste." },
    { year: 2022, title: "The Montay Era", text: "Launched flagship brand Montay Tea — single-origin Ceylon tea with contemporary design and sustainability-driven mission." },
    { year: 2025, title: "Growing Beyond Tea", text: "A S Exim Lanka now connects tea, spices and food exports under one vision: to share the island’s natural treasures with the world." },
  ];

  const collections = [
    {
      section: "Premium Caddy Collection",
      items: [
  { name: "Exim’s Gold Reserve", desc: "Signature high-grown Ceylon black tea.", image: "/image1.jpeg" },
  { name: "Exim’s Emerald Green", desc: "Delicate, aromatic green tea.", image: "/image2.jpeg" },
  { name: "Exim’s Royal Earl Grey", desc: "Bergamot-infused classic blend.", image: "/image3.jpeg" },
  { name: "Exim’s Heritage Breakfast", desc: "Robust morning blend with bright liquor.", image: "/image4.jpeg" },
      ],
    },
    {
      section: "Round Tin Series",
      items: [
  { name: "Exim’s Highland Mist", desc: "Nuwara Eliya single-estate tea.", image: "/image5.jpeg" },
  { name: "Exim’s Uva Valley Brew", desc: "Brisk and lively cup from Uva region.", image: "/image6.jpeg" },
  { name: "Exim’s Sunset Spice", desc: "Subtle cinnamon and cardamom infusion.", image: "/image1.jpeg" },
      ],
    },
    {
      section: "Box / Carton Pack (Retail Range)",
      items: [
  { name: "Exim’s Everyday Ceylon", desc: "Smooth, full-bodied blend for daily use.", image: "/image2.jpeg" },
  { name: "Exim’s Green Harmony", desc: "Light and rejuvenating green tea.", image: "/image2.jpeg" },
  { name: "Exim’s Lemon & Ginger Zest", desc: "Refreshing wellness blend.", image: "/image1.jpeg" },
      ],
    },
    {
      section: "Premium Gift Series",
      items: [
  { name: "Exim’s Tea Heritage Gift Set", desc: "Assorted luxury caddies with story cards.", image: "/image5.jpeg" },
  { name: "Exim’s Seven Regions Collection", desc: "Curated teas from seven Ceylon tea regions.", image: "/image1.jpeg" },
  { name: "Exim’s Tea & Spice Harmony Box", desc: "Premium tea paired with Ceylon spices.", image: "/image2.jpeg" },
      ],
    },
    {
      section: "Specialty Infusions",
      items: [
  { name: "Exim’s Tropical Bloom", desc: "Mango, soursop, and hibiscus blend.", image: "/image1.jpeg" },
  { name: "Exim’s Cinnamon Whisper", desc: "Black tea with pure Ceylon cinnamon.", image: "/image1.jpeg" },
  { name: "Exim’s Mint Serenade", desc: "Uplifting blend with fresh mint and lemongrass.", image: "/image6.jpeg" },
      ],
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
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-serif text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Milestones */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-serif text-gray-900 text-center mb-6">Milestones of Excellence</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((m) => (
              <div key={m.year} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-amber-600 font-serif text-3xl mb-2">{m.year}</div>
                <div className="font-semibold text-gray-900 mb-2">{m.title}</div>
                <p className="text-sm text-gray-600">{m.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Collections (Product Catalog) */}
        <div className="max-w-7xl mx-auto mb-20">
          <h3 className="text-3xl font-serif text-gray-900 mb-8 text-center">Exim’s Tea Collection</h3>
          <div className="space-y-12">
            {collections.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-2xl font-serif text-gray-900 mb-4">{col.section}</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {col.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow">
                      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.6'; }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="text-lg font-semibold text-gray-900">{item.name}</h5>
                        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
