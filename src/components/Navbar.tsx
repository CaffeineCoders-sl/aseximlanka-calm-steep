import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import BrandMark from "./BrandMark";

const navItems = [
  { name: "The House", path: "/about" },
  { name: "Ceylon Tea", path: "/products" },
  { name: "Spices", path: "/spices" },
  { name: "Wellness", path: "/wellness" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const lightHeader = isScrolled || isMobileMenuOpen;

  return (
    <header
      className={`luxury-nav-shell fixed inset-x-0 top-0 z-50 border-b ${
        lightHeader
          ? "border-[#143b2e]/10 bg-[#fff9ed]/[0.94] shadow-[0_12px_46px_rgba(9,38,29,0.075)] backdrop-blur-2xl"
          : "border-white/[0.18] bg-[#06281f]/[0.38] shadow-[0_10px_40px_rgba(2,20,15,0.12)] backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <button
          onClick={() => handleNavigate("/")}
          className="min-w-0 text-left transition-transform duration-500 hover:-translate-y-0.5"
          aria-label="A. S. Exim Lanka home"
        >
          <BrandMark inverted={!lightHeader} />
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-7" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`group relative py-2 text-[0.64rem] font-semibold uppercase tracking-[0.205em] transition-colors duration-500 ${
                    lightHeader
                      ? isActive
                        ? "text-[#8d5c3f]"
                        : "text-[#17382d] hover:text-[#8d5c3f]"
                      : isActive
                        ? "text-[#e5c982]"
                        : "text-[#fff9ed] hover:text-[#e5c982]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-px origin-left transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    } ${lightHeader ? "bg-[#9f7747]" : "bg-[#e5c982]"}`}
                  />
                </button>
              );
            })}
          </nav>

          <button
            onClick={() => handleNavigate("/contact")}
            className={`luxury-nav-cta group inline-flex items-center gap-2 border px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.19em] transition-all duration-500 ${
              lightHeader
                ? "border-[#17382d]/25 text-[#17382d] hover:border-[#17382d] hover:bg-[#17382d] hover:text-[#fff9ed]"
                : "border-white/[0.48] bg-white/[0.04] text-[#fff9ed] hover:border-[#e5c982] hover:bg-[#e5c982] hover:text-[#0b2d22]"
            }`}
          >
            Source with us
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          className={`grid h-11 w-11 place-items-center border transition-all duration-500 lg:hidden ${
            lightHeader
              ? "border-[#17382d]/18 text-[#17382d]"
              : "border-white/[0.34] text-[#fff9ed]"
          }`}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-[#fff9ed]/[0.98] backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "max-h-[520px] border-t border-[#17382d]/10" : "max-h-0"
        }`}
      >
        <nav className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8" aria-label="Mobile navigation">
          <div className="grid divide-y divide-[#17382d]/10">
            {[{ name: "Home", path: "/" }, ...navItems, { name: "Contact", path: "/contact" }].map(
              (item, index) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className="group flex items-center justify-between py-4 text-left"
                >
                  <span className="font-serif text-2xl text-[#12362a] transition-transform duration-500 group-hover:translate-x-1">{item.name}</span>
                  <span className="flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#8d5c3f]">
                    0{index + 1}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </button>
              ),
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
