import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const teaFamilies = [
  {
    number: "01",
    mark: "B",
    name: "Ceylon Black Tea",
    description:
      "The classic expression of Ceylon: brisk, bright, aromatic, and adaptable across straight teas, breakfast styles, and signature blends.",
    grades: ["OP", "Pekoe", "BOP", "FBOP", "BOPF"],
  },
  {
    number: "02",
    mark: "G",
    name: "Ceylon Green Tea",
    description:
      "A fresher, lighter profile selected for clarity, balance, and contemporary tea programs that favour clean character.",
    grades: ["Sencha", "Gunpowder", "Young Hyson", "Chunmee"],
  },
  {
    number: "03",
    mark: "W",
    name: "Ceylon White Tea",
    description:
      "A delicate, limited style with a quieter cup and refined presentation for premium gifting and specialist collections.",
    grades: ["Silver Tips", "Silver Needle", "White Peony"],
  },
  {
    number: "04",
    mark: "B+",
    name: "Bespoke Blends",
    description:
      "Blends composed around a target cup, customer, market, or brand brief—from classic profiles to flavoured and specialty formats.",
    grades: ["Signature blends", "Flavoured tea", "Infusions", "Private label"],
  },
];

const teaRegions = [
  "Nuwara Eliya",
  "Uda Pussellawa",
  "Uva",
  "Dimbula",
  "Kandy",
  "Sabaragamuwa",
  "Ruhuna",
];

const sourcingSteps = [
  {
    number: "01",
    title: "Define the cup",
    text: "Start with strength, aroma, brightness, body, finish, origin preference, or a reference product.",
  },
  {
    number: "02",
    title: "Select and compose",
    text: "Match origin, grade, season, and blend direction to the intended market and price architecture.",
  },
  {
    number: "03",
    title: "Build the format",
    text: "Translate the tea into the right retail, hospitality, gifting, sachet, pouch, caddy, or bulk format.",
  },
  {
    number: "04",
    title: "Prepare for export",
    text: "Coordinate the commercial presentation, product information, packing requirements, and shipment workflow.",
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <section className="tea-hero relative min-h-[90svh] overflow-hidden text-[#fff9ed]">
        <div className="tea-hero-art" aria-hidden="true">
          <div className="tea-hero-orbit" />
          <div className="tea-hero-leaf" />
          <div className="tea-contours" />
          <span className="tea-coordinate tea-coordinate-a">06° 55′ N · CEYLON</span>
          <span className="tea-coordinate tea-coordinate-b">ORIGIN · ELEVATION · SEASON</span>
          <div className="absolute inset-0 premium-grain opacity-[0.09]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12 lg:pb-24">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:gap-20">
            <div className="max-w-5xl">
              <div data-hero className="flex items-center gap-4">
                <span className="luxury-rule text-[#e1c27c]" />
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#e1c27c]">
                  The Ceylon tea house
                </p>
              </div>

              <h1 className="mt-7 max-w-5xl font-serif text-[clamp(4.2rem,9vw,9rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#fff9ed]">
                <span data-hero className="hero-title-line">
                  <span>Ceylon,</span>
                </span>
                <span data-hero className="hero-title-line mt-2 italic text-[#e5c982]">
                  <span>in four expressions.</span>
                </span>
              </h1>

              <p data-hero className="mt-8 max-w-2xl text-base font-light leading-8 text-white/68 md:text-lg">
                Black, green, white, and bespoke teas selected around origin, cup character,
                market fit, and how the finished product should feel in the hand.
              </p>
            </div>

            <aside data-hero className="border-t border-white/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-[0.56rem] font-semibold uppercase tracking-[0.22em] text-[#e1c27c]">
                The origin system
              </p>
              <p className="mt-5 font-serif text-3xl leading-[1.05] text-[#fff9ed]">
                Seven regions.<br />Many cup profiles.<br />One island.
              </p>
              <button
                onClick={() => go("/contact")}
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#e1c27c]/60 pb-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]"
              >
                Request a tea brief
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-[#14372b]/12 bg-[#f3e8d5]">
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex gap-7 overflow-x-auto pb-2 scrollbar-none lg:grid lg:grid-cols-7 lg:gap-4 lg:overflow-visible">
            {teaRegions.map((region, index) => (
              <div
                data-reveal
                data-reveal-delay={(index * 0.035).toFixed(2)}
                key={region}
                className="tea-region-item min-w-max pb-2 lg:min-w-0"
              >
                <span className="text-[0.54rem] font-semibold uppercase tracking-[0.18em] text-[#9a7650]">
                  0{index + 1}
                </span>
                <p className="mt-1 font-serif text-lg text-[#14372b]">{region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div data-reveal="left">
              <p className="premium-kicker">Collection architecture</p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-[#66695f]">
                Tea is treated as a material with provenance, not a commodity SKU with a label added afterwards.
              </p>
            </div>

            <div data-reveal="right">
              <h2 className="max-w-5xl font-serif text-[clamp(3.2rem,6vw,6.5rem)] font-normal leading-[0.91] tracking-[-0.035em] text-[#14372b]">
                Start with the experience of the cup. <span className="italic text-[#8d5c3f]">Build outward from there.</span>
              </h2>
              <div className="mt-10 grid gap-7 border-t border-[#14372b]/14 pt-8 md:grid-cols-2">
                <p className="text-base leading-8 text-[#62665d]">
                  Origin, grade, strength, aroma, finish, and season shape the tea itself. Market, format, price point, and shelf presence shape what happens around it.
                </p>
                <p className="text-base leading-8 text-[#62665d]">
                  The collection is therefore a starting framework rather than a fixed catalogue. A buyer brief can begin from any one of those variables.
                </p>
              </div>
            </div>
          </div>

          <div className="tea-specimen-grid mt-16 md:mt-20">
            {teaFamilies.map((tea, index) => (
              <article
                data-reveal="scale"
                data-reveal-delay={(index * 0.07).toFixed(2)}
                key={tea.name}
                className="tea-specimen flex flex-col p-7 sm:p-9 lg:p-10"
              >
                <span className="tea-specimen-index">{tea.number} · expression</span>

                <div className="tea-specimen-orb mt-8" aria-hidden="true">
                  <span className="tea-specimen-leaf" />
                  <span className="tea-specimen-mark">{tea.mark}</span>
                </div>

                <div className="mt-auto pt-10">
                  <h3 className="font-serif text-[clamp(2.7rem,4.2vw,4.8rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">
                    {tea.name}
                  </h3>
                  <p className="tea-specimen-copy mt-5 max-w-xl text-sm leading-7 text-[#66695f]">
                    {tea.description}
                  </p>
                  <div className="tea-specimen-grades mt-7 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#14372b]/12 pt-5">
                    {tea.grades.map((grade) => (
                      <span
                        key={grade}
                        className="text-[0.56rem] font-semibold uppercase tracking-[0.17em] text-[#8d5c3f] transition-colors duration-500"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a2e23] py-24 text-[#fff9ed] md:py-32 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
            <div data-reveal="left" className="tea-origin-map">
              {teaRegions.map((region, index) => (
                <span key={region} className={`origin-pin origin-${index + 1}`}>
                  {region}
                </span>
              ))}
            </div>

            <div data-reveal="right">
              <p className="premium-kicker premium-kicker-light">Seven growing regions</p>
              <h2 className="mt-6 max-w-3xl font-serif text-[clamp(3.2rem,5.5vw,6.2rem)] font-normal leading-[0.9] tracking-[-0.035em] text-[#fff9ed]">
                Ceylon tea is not <span className="italic text-[#e5c982]">one flavour.</span>
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/62">
                The island’s growing regions create distinct possibilities for cup character. We use origin as a design variable—something to preserve, blend deliberately, or make central to the final story.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-px border border-white/12 bg-white/12 sm:grid-cols-3">
                {[
                  ["7", "tea regions"],
                  ["4", "core expressions"],
                  ["1", "origin system"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#0a2e23] p-5 sm:p-6">
                    <span className="font-serif text-4xl text-[#e5c982]">{value}</span>
                    <span className="mt-2 block text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#08271e] py-24 text-[#fff9ed] md:py-32 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div data-reveal="left">
              <p className="premium-kicker premium-kicker-light">From brief to shipment</p>
            </div>
            <div data-reveal="right">
              <h2 className="max-w-5xl font-serif text-[clamp(3.2rem,5.5vw,6.2rem)] font-normal leading-[0.9] tracking-[-0.035em] text-[#fff9ed]">
                A sourcing process built around <span className="italic text-[#e5c982]">the finished product.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {sourcingSteps.map((item, index) => (
              <article
                data-reveal="scale"
                data-reveal-delay={(index * 0.06).toFixed(2)}
                key={item.number}
                className="tea-process-card p-7 sm:p-8"
              >
                <span className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]">
                  {item.number}
                </span>
                <h3 className="mt-16 font-serif text-3xl font-normal leading-none text-[#fff9ed]">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-white/56">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe2cc] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:px-12">
          <div data-reveal="left" className="tea-private-art">
            <div className="tea-caddy-ring" aria-hidden="true" />
            <div className="tea-caddy" aria-hidden="true" />
            <span className="absolute bottom-8 left-8 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-[#8d5c3f]/70">
              Cup · format · presentation
            </span>
          </div>

          <div data-reveal="right">
            <p className="premium-kicker">Private-label atelier</p>
            <h2 className="mt-6 font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.035em] text-[#14372b]">
              Create a collection that feels <span className="italic text-[#8d5c3f]">owned, not outsourced.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#62665d]">
              Private label works best when the tea, pack, visual language, gifting logic, and market requirements all point in the same direction. We can begin from an existing brand or build from the cup outward.
            </p>

            <div className="mt-9 border-y border-[#14372b]/14">
              {[
                ["I", "Tea profile", "Origin · grade · strength · blend"],
                ["II", "Presentation", "Caddy · pouch · sachet · gifting"],
                ["III", "Market brief", "Buyer · channel · export requirements"],
              ].map(([number, title, detail]) => (
                <div key={number} className="grid grid-cols-[48px_1fr] gap-4 border-b border-[#14372b]/12 py-4 last:border-0 sm:grid-cols-[48px_0.8fr_1.2fr] sm:items-center">
                  <span className="font-serif text-lg italic text-[#8d5c3f]">{number}</span>
                  <span className="text-[0.59rem] font-semibold uppercase tracking-[0.18em] text-[#14372b]">{title}</span>
                  <span className="col-start-2 text-xs text-[#66695f] sm:col-start-auto">{detail}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => go("/contact")}
              className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#14372b] px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fff9ed] hover:bg-[#8d5c3f]"
            >
              Build a private-label brief
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <section className="tea-final-cta relative py-24 md:py-32 lg:py-36">
        <div data-reveal="clip" className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="premium-kicker">Start with what you need</p>
          <h2 className="mt-6 font-serif text-[clamp(3.5rem,6.5vw,7rem)] font-normal leading-[0.86] tracking-[-0.04em] text-[#14372b]">
            Tell us the cup.<br />
            <span className="italic text-[#8d5c3f]">We’ll work backwards.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#66695f]">
            Share the tea style, target customer, pack format, market, price architecture, or reference you have in mind. The sourcing conversation can start there.
          </p>
          <button
            onClick={() => go("/contact")}
            className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#14372b] px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fff9ed] hover:bg-[#8d5c3f]"
          >
            Start an inquiry
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
