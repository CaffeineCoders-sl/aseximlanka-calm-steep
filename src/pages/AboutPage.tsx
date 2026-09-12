import { ArrowRight, Compass, Handshake, Leaf, PackageCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const milestones = [
  {
    year: "1977",
    title: "The roots",
    text: "The family’s tea-industry legacy begins with Mr. S. A. D. Piyadasa and decades of practical knowledge in the Sri Lankan trade.",
  },
  {
    year: "1998",
    title: "The next generation",
    text: "Mr. Chamil Samantha enters the tea business, learning the trade through hands-on experience and family mentorship.",
  },
  {
    year: "2024",
    title: "A. S. Exim Lanka",
    text: "A new export chapter takes shape around Ceylon tea, island spices, private-label opportunities, and global partnerships.",
  },
];

const principles = [
  {
    icon: Compass,
    title: "Origin before ornament",
    text: "The story begins with where a product comes from, how it is selected, and why that origin matters.",
  },
  {
    icon: Leaf,
    title: "Quality through attention",
    text: "Tea is judged in the details—leaf, liquor, aroma, consistency, manufacture, and fit for the final brief.",
  },
  {
    icon: Handshake,
    title: "Partnership over transaction",
    text: "We aim to understand the buyer, market, and product idea before recommending the most appropriate route.",
  },
  {
    icon: PackageCheck,
    title: "Presentation with purpose",
    text: "Packing should protect quality, support the brand story, and make commercial sense in the target market.",
  },
];

const regions = ["Nuwara Eliya", "Uda Pussellawa", "Uva", "Dimbula", "Kandy", "Sabaragamuwa", "Ruhuna"];

const AboutPage = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <section className="relative min-h-[84svh] overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <div className="house-art-stage absolute inset-0 min-h-0" aria-hidden="true">
          <div className="house-art-grid" />
          <div className="heritage-dial">
            <span className="heritage-year y1977">1977</span>
            <span className="heritage-year y1998">1998</span>
            <span className="heritage-year y2024">2024</span>
          </div>
          <span className="house-coordinate top">CEYLON · GENERATIONAL TRADE</span>
          <span className="house-coordinate bottom">THE HOUSE · SRI LANKA</span>
          <div className="absolute inset-0 premium-grain opacity-[0.08]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[84svh] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <p data-hero className="premium-kicker premium-kicker-light">The house</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(4.2rem,8.5vw,8.5rem)] font-normal leading-[0.83] tracking-[-0.04em] text-[#fff9ed]">
              <span data-hero className="hero-title-line"><span>A legacy of tea,</span></span>
              <span data-hero className="hero-title-line mt-2 italic text-[#e5c982]"><span>reframed for today.</span></span>
            </h1>
            <p data-hero className="mt-8 max-w-2xl text-base font-light leading-8 text-white/[0.7] md:text-lg">
              A. S. Exim Lanka brings generational knowledge of the Sri Lankan tea trade into a modern origin house for tea, spices, private label, and wellness.
            </p>
          </div>
        </div>
      </section>

      <section className="house-surface bg-[#fffaf0] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20 lg:px-12">
          <div data-reveal="left" className="grid grid-cols-12 gap-4">
            <div className="heritage-panel col-span-8">
              <span className="ring" aria-hidden="true" />
              <span className="heritage-caption">Family knowledge · Sri Lankan tea trade</span>
              <span className="year-mark">77</span>
            </div>
            <div className="heritage-panel dark col-span-4 mt-16">
              <span className="ring" aria-hidden="true" />
              <span className="heritage-caption">A modern export house</span>
              <span className="year-mark">24</span>
            </div>
          </div>

          <div data-reveal="right" className="lg:pt-10">
            <p className="premium-kicker">Generational knowledge</p>
            <h2 className="mt-6 font-serif text-[clamp(3.1rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b]">
              Built through the trade,
              <span className="mt-1 block italic text-[#8d5c3f]">not around a trend.</span>
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-[#62665d]">
              <p>The family’s connection to Sri Lanka’s tea industry traces back to 1977 through Mr. S. A. D. Piyadasa. That knowledge was carried forward by the next generation and now informs the way A. S. Exim Lanka approaches sourcing, selection, blending, packing, and buyer relationships.</p>
              <p>The company is a newer chapter of that longer story. We are building an export house that respects what made Ceylon tea globally distinctive while presenting Sri Lankan origin products with greater clarity, restraint, and commercial relevance.</p>
            </div>
            <button onClick={() => go("/products")} className="group mt-9 inline-flex items-center gap-4 border-b border-[#8d5c3f]/[0.55] pb-2 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#8d5c3f]">
              Enter the tea house
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#efe2cc] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div data-reveal="left">
              <p className="premium-kicker">Three chapters</p>
              <h2 className="mt-6 max-w-md font-serif text-[clamp(3rem,4.8vw,5.2rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">Heritage is useful only when it keeps moving.</h2>
            </div>
            <div className="divide-y divide-[#14372b]/[0.14] border-y border-[#14372b]/[0.14]">
              {milestones.map((milestone, index) => (
                <div data-reveal="right" data-reveal-delay={(index * 0.06).toFixed(2)} key={milestone.year} className="grid gap-5 py-8 sm:grid-cols-[120px_0.75fr_1.25fr] sm:gap-7 md:py-10">
                  <span className="font-serif text-4xl font-normal text-[#8d5c3f]">{milestone.year}</span>
                  <h3 className="font-serif text-2xl font-normal text-[#14372b] md:text-3xl">{milestone.title}</h3>
                  <p className="text-sm leading-7 text-[#66695f]">{milestone.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a2e23] py-24 text-[#fff9ed] md:py-32 lg:py-36">
        <div className="absolute inset-0 premium-grain opacity-[0.07]" />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div data-reveal="clip" className="mb-14 max-w-4xl">
            <p className="premium-kicker premium-kicker-light">How we think</p>
            <h2 className="mt-6 font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#fff9ed]">The principles behind the house.</h2>
          </div>
          <div className="grid gap-px bg-white/[0.12] sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <article data-reveal="scale" data-reveal-delay={(index * 0.055).toFixed(2)} key={principle.title} className="group bg-[#0a2e23] p-7 transition-colors duration-500 hover:bg-[#0d392b] md:p-8">
                <principle.icon className="h-6 w-6 text-[#e1c27c] transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-7 font-serif text-3xl font-normal leading-tight text-[#fff9ed]">{principle.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/[0.58]">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="house-surface bg-[#fffaf0] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-20 lg:px-12">
          <div data-reveal="left">
            <p className="premium-kicker">Ceylon as context</p>
            <h2 className="mt-6 max-w-xl font-serif text-[clamp(3.2rem,5vw,5.7rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b]">Our story makes sense only because of the island behind it.</h2>
          </div>
          <div data-reveal="right">
            <p className="max-w-2xl text-base leading-8 text-[#62665d]">Sri Lanka’s tea identity is shaped by elevation, monsoon patterns, geography, manufacture, and generations of human skill. The seven recognised tea-growing regions create an unusually broad range of character within one origin.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#14372b]/[0.14] pt-7 sm:grid-cols-3">
              {regions.map((region, index) => (
                <div key={region}><span className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-[#9a7650]">0{index + 1}</span><p className="mt-1 font-serif text-xl text-[#14372b]">{region}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[66svh] overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <div className="house-art-stage absolute inset-0 min-h-0" aria-hidden="true">
          <div className="house-art-grid" />
          <div className="house-art-leaf" />
          <span className="house-coordinate top">LONG VIEW · ORIGIN FIRST</span>
          <span className="house-coordinate bottom">CEYLON · PREPARED FOR THE WORLD</span>
          <div className="absolute inset-0 premium-grain opacity-[0.07]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[66svh] max-w-[1440px] items-center px-5 py-24 sm:px-8 lg:px-12">
          <div data-reveal="clip" className="max-w-4xl">
            <p className="premium-kicker premium-kicker-light">A long view</p>
            <h2 className="mt-7 font-serif text-[clamp(3.6rem,7vw,7rem)] font-normal leading-[0.85] tracking-[-0.035em] text-[#fff9ed]">Respect the origin.<br /><span className="italic text-[#e5c982]">Raise the standard.</span></h2>
            <button onClick={() => go("/contact")} className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#e1c27c] px-7 py-4 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#0a3125] hover:bg-[#f0d99d]">Work with the house<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;