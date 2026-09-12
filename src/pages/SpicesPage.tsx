import { ArrowRight, ArrowUpRight, Leaf, PackageCheck, Scale, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const spicePortfolio = [
  {
    number: "01",
    mark: "C",
    name: "Ceylon Cinnamon",
    description: "Delicate, layered, and naturally sweet—the signature spice of Sri Lankan origin.",
    notes: ["Quills", "Cut cinnamon", "Powder", "Private label"],
  },
  {
    number: "02",
    mark: "P",
    name: "Black Pepper",
    description: "Aromatic, bright, and assertive pepper selected for culinary, retail, and bulk programs.",
    notes: ["Whole", "Cracked", "Ground", "Bulk"],
  },
  {
    number: "03",
    mark: "CL",
    name: "Cloves",
    description: "Warm, concentrated spice character with the unmistakable intensity associated with island-grown cloves.",
    notes: ["Whole cloves", "Sorted grades", "Retail packs", "Bulk"],
  },
  {
    number: "04",
    mark: "CA",
    name: "Cardamom",
    description: "Fragrant pods selected for aroma, appearance, and the needs of premium food and beverage programs.",
    notes: ["Whole pods", "Selected lots", "Retail packs", "Bulk"],
  },
  {
    number: "05",
    mark: "N",
    name: "Nutmeg & Mace",
    description: "Warm, complex spice profiles for culinary, ingredient, and specialty retail applications.",
    notes: ["Whole nutmeg", "Mace", "Ground", "Bulk"],
  },
  {
    number: "06",
    mark: "T",
    name: "Turmeric & Ginger",
    description: "Sri Lankan roots prepared for culinary, wellness, ingredient, and private-label collections.",
    notes: ["Whole", "Dried", "Powder", "Private label"],
  },
];

const buyerReadiness = [
  {
    icon: Leaf,
    title: "Origin-led sourcing",
    text: "Start with product form, use case, target quality, and market requirements.",
  },
  {
    icon: Scale,
    title: "Commercial formats",
    text: "Bulk and retail options can be shaped around the buyer brief and channel.",
  },
  {
    icon: ShieldCheck,
    title: "Specification focus",
    text: "Product information and quality expectations are discussed before the final format is committed.",
  },
  {
    icon: PackageCheck,
    title: "Private-label packing",
    text: "Pouches, jars, tins, gift formats, and other presentations can support branded collections.",
  },
];

const SpicesPage = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <section className="relative min-h-[84svh] overflow-hidden bg-[#2c2118] text-[#fff9ed]">
        <div className="spice-hero-art" aria-hidden="true">
          <div className="spice-quill" />
          <span className="spice-bead b1" /><span className="spice-bead b2" /><span className="spice-bead b3" /><span className="spice-bead b4" />
          <div className="house-art-grid" />
          <span className="house-coordinate top">ISLAND SPICE HOUSE · CEYLON</span>
          <span className="house-coordinate bottom">CINNAMON · PEPPER · CLOVE · CARDAMOM</span>
          <div className="absolute inset-0 premium-grain opacity-[0.08]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[84svh] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <p data-hero className="premium-kicker premium-kicker-light">Island spice house</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(4.2rem,8.5vw,8.5rem)] font-normal leading-[0.83] tracking-[-0.04em] text-[#fff9ed]">
              <span data-hero className="hero-title-line"><span>Ceylon beyond tea.</span></span>
              <span data-hero className="hero-title-line mt-2 italic text-[#e5c982]"><span>Fragrance, heat, depth.</span></span>
            </h1>
            <p data-hero className="mt-8 max-w-2xl text-base font-light leading-8 text-white/[0.7] md:text-lg">
              A focused portfolio of Sri Lankan cinnamon, pepper, cloves, cardamom, nutmeg, mace, turmeric, and ginger prepared for international buyers and private-label programs.
            </p>
            <button onClick={() => go("/contact")} className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#e1c27c] px-7 py-4 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#2b2118] hover:bg-[#f0d99d]">
              Start a spice inquiry
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="house-surface bg-[#fffaf0] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12">
          <div data-reveal="left">
            <p className="premium-kicker">A second expression of origin</p>
            <h2 className="mt-6 max-w-lg font-serif text-[clamp(3.1rem,4.8vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">The same island, expressed through spice.</h2>
          </div>
          <div data-reveal="right" className="self-end">
            <p className="max-w-2xl text-base leading-8 text-[#62665d]">Sri Lanka’s spice identity is inseparable from its history of trade. We present that heritage in a contemporary export format—clear specifications, considered packing, and sourcing conversations built around how the product will actually be used.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3e8d5] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div data-reveal="clip" className="mb-14 max-w-3xl">
            <p className="premium-kicker">The portfolio</p>
            <h2 className="mt-6 font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b]">Six staples of the island spice trade.</h2>
          </div>

          <div className="divide-y divide-[#14372b]/[0.14] border-y border-[#14372b]/[0.14]">
            {spicePortfolio.map((spice, index) => (
              <article data-reveal="scale" data-reveal-delay={(index * 0.05).toFixed(2)} key={spice.name} className="grid gap-8 py-10 md:py-14 lg:grid-cols-[80px_1fr_1fr] lg:items-center lg:gap-12">
                <div className="flex items-center gap-3 lg:block"><span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#9a7650]">{spice.number}</span><span className="h-px w-9 bg-[#9a7650]/[0.5] lg:mt-4 lg:block lg:w-11" /></div>

                <div className={index % 2 === 1 ? "lg:order-3" : ""}>
                  <div className="spice-specimen" aria-hidden="true">
                    <span className="specimen-line" /><span className="specimen-dot" /><span className="specimen-letter">{spice.mark}</span>
                    <span className="absolute left-8 bottom-8 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#e5c982]/[0.58]">Sri Lankan origin · selected form</span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="font-serif text-[clamp(2.7rem,4vw,4.6rem)] font-normal leading-[0.94] tracking-[-0.025em] text-[#14372b]">{spice.name}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#66695f]">{spice.description}</p>
                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#14372b]/[0.12] pt-5">
                    {spice.notes.map((note) => <span key={note} className="text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-[#8d5c3f]">{note}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2b2118] py-24 text-[#fff9ed] md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-12">
          <div data-reveal="left" className="cinnamon-study" aria-label="Abstract study of Ceylon cinnamon">
            <span className="absolute left-7 top-7 text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]">Signature origin · Cinnamomum verum</span>
            <span className="absolute bottom-7 left-7 font-serif text-4xl text-[#fff9ed]">Ceylon cinnamon</span>
          </div>

          <div data-reveal="right">
            <p className="premium-kicker premium-kicker-light">True cinnamon</p>
            <h2 className="mt-6 font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#fff9ed]">The spice most closely tied to <span className="italic text-[#e5c982]">Sri Lankan identity.</span></h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/[0.64]">Ceylon cinnamon deserves more than a commodity presentation. We can shape cinnamon programs across product form, packing, gifting, retail, and private-label requirements while keeping origin central to the story.</p>
            <div className="mt-9 grid grid-cols-3 gap-px bg-white/[0.12]">
              {[["01", "Quills"], ["02", "Cut"], ["03", "Powder"]].map(([n, label]) => (
                <div key={label} className="bg-[#2b2118] p-5"><span className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-[#e1c27c]">{n}</span><p className="mt-3 font-serif text-xl text-[#fff9ed]">{label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="house-surface bg-[#fffaf0] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.66fr_1.34fr] lg:gap-20">
            <div data-reveal="left"><p className="premium-kicker">Buyer readiness</p><h2 className="mt-6 max-w-lg font-serif text-[clamp(3rem,4.6vw,5.2rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">From raw spice to shelf-ready collection.</h2></div>
            <div className="grid gap-px bg-[#14372b]/[0.12] sm:grid-cols-2">
              {buyerReadiness.map((item, index) => (
                <article data-reveal="scale" data-reveal-delay={(index * 0.05).toFixed(2)} key={item.title} className="group bg-[#fffaf0] p-7 transition-colors duration-500 hover:bg-[#f7f0e3] sm:p-8">
                  <item.icon className="h-6 w-6 text-[#8d5c3f] transition-transform duration-500 group-hover:-translate-y-1" />
                  <h3 className="mt-6 font-serif text-3xl font-normal text-[#14372b]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#66695f]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#efe2cc] py-24 md:py-28">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full border border-[#8d5c3f]/[0.12]" />
        <div data-reveal="clip" className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="premium-kicker">For food, retail & ingredient buyers</p>
          <h2 className="mt-6 font-serif text-[clamp(3.4rem,6vw,6.4rem)] font-normal leading-[0.88] tracking-[-0.035em] text-[#14372b]">Bring the island into the brief.</h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#66695f]">Tell us the spice, format, volume range, market, or finished product you are planning and we can begin from there.</p>
          <button onClick={() => go("/contact")} className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#14372b] px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fff9ed] hover:bg-[#8d5c3f]">Discuss spice sourcing<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>
        </div>
      </section>
    </div>
  );
};

export default SpicesPage;