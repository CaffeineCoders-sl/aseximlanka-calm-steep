import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-emerald-950 to-emerald-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-serif text-amber-400 mb-4">
              A. S. Exim Lanka
            </h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Premier exporters of Ceylon Tea since 1977. Excellence in every leaf,
              delivering quality to the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-amber-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-amber-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-lg font-serif text-amber-400 mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Premium Black Tea</li>
              <li className="text-white/70">Ceylon Green Tea</li>
              <li className="text-white/70">White Tea</li>
              <li className="text-white/70">Specialty Blends</li>
              <li className="text-white/70">Custom Packaging</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-amber-400 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-amber-400" />
                <div className="text-white/70">
                  <div>+94 11 XXX XXXX</div>
                  <div>+94 77 XXX XXXX</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-amber-400" />
                <div className="text-white/70">
                  <div>info@aseximlanka.com</div>
                  <div>exports@aseximlanka.com</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 A. S. Exim Lanka (Pvt) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-amber-400 transition-colors">
                Certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
