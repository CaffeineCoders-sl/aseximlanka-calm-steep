import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BrandMark from "./BrandMark";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const houseLinks = [
    { name: "The House", path: "/about" },
    { name: "Ceylon Tea", path: "/products" },
    { name: "Island Spices", path: "/spices" },
    { name: "Wellness", path: "/wellness" },
    { name: "Journal", path: "/journal" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#08271e] text-[#fff9ed]">
      <div className="house-footer-wordmark" aria-hidden="true">CEYLON</div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd7a]/[0.7] to-transparent" />
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full border border-[#d8bd7a]/[0.1]" />
      <div className="absolute -right-10 top-32 h-52 w-52 rounded-full border border-[#d8bd7a]/[0.1]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-14 border-b border-white/[0.1] pb-14 lg:grid-cols-[1.35fr_0.65fr_0.8fr] lg:gap-20">
          <div>
            <BrandMark inverted />
            <p className="house-overline mt-10 text-[#d8bd7a]">Sri Lanka · Origin House</p>
            <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.4rem,5vw,5.8rem)] font-normal leading-[0.92] tracking-[-0.025em] text-[#fff9ed]">
              Ceylon, thoughtfully prepared for the world.
            </h2>
            <button onClick={() => handleNavigate("/contact")} className="group mt-9 inline-flex items-center gap-3 border-b border-[#d8bd7a]/[0.65] pb-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#e4c986] transition-colors hover:text-white">
              Begin a sourcing conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div>
            <p className="mb-6 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#d8bd7a]">The house</p>
            <div className="grid gap-4">
              {houseLinks.map((item) => (
                <button key={item.path} onClick={() => handleNavigate(item.path)} className="group flex w-fit items-center gap-3 font-serif text-xl text-white/[0.78] transition-colors hover:text-[#e4c986]">
                  <span className="h-px w-0 bg-[#d8bd7a] transition-all duration-500 group-hover:w-4" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#d8bd7a]">Sri Lanka</p>
            <div className="grid gap-5 text-sm leading-6 text-white/[0.68]">
              <a href="tel:+94715524956" className="group flex items-start gap-3 hover:text-white"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#d8bd7a]" /><span>+94 71 552 4956</span></a>
              <a href="mailto:info@aseximlanka.com" className="group flex items-start gap-3 hover:text-white"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#d8bd7a]" /><span>info@aseximlanka.com</span></a>
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d8bd7a]" /><span>665/22/1 Gunawardana Mawatha,<br />Sri Jayawardenepura Kotte 10120,<br />Sri Lanka</span></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-[0.64rem] font-medium uppercase tracking-[0.16em] text-white/[0.42] md:flex-row md:items-center md:justify-between">
          <p>© 2026 A. S. Exim Lanka (Pvt) Ltd.</p>
          <p className="text-[#d8bd7a]/[0.7]">Tea · Spices · Private label · Wellness · Journal</p>
          <button onClick={() => handleNavigate("/")} className="w-fit transition-colors hover:text-white">Back to the house</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;