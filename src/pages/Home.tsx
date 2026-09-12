import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const teaRegions = [
  "Nuwara Eliya",
  "Uda Pussellawa",
  "Uva",
  "Dimbula",
  "Kandy",
  "Sabaragamuwa",
  "Ruhuna",
];

const collections = [
  {
    number: "01",
    title: "Single-origin Ceylon",
    description:
      "Distinctive teas selected to preserve the character of origin, elevation, season, and manufacture.",
    visualClass: "",
    mark: "C",
  },
  {
    number: "02",
    title: "Signature & bespoke blends",
    description:
      "Balanced profiles developed for retail, hospitality, gifting, and market-specific preferences.",
    visualClass: "variant-two",
    mark: "B",
  },
  {
    number: "03",
    title: "Private-label presentation",
    description:
      "Tea prepared as a complete brand experience across caddies, pouches, sachets, gift boxes, and bulk formats.",
    visualClass: "variant-three",
    mark: "P",
  },
];

const process = [
  {
    number: "01",
    title: "Source with intent",
    text: "We begin with the cup profile, market, format, and origin story the final product needs to express.",
  },
  {
    number: "02",
    title: "Taste and grade",
    text: "Leaf appearance, liquor, aroma, strength, brightness, and consistency guide each selection.",
  },
  {
    number: "03",
    title: "Compose and pack",
    text: "Single origins, blends, and presentation formats are brought together around the buyer brief.",
  },
  {
    number: "04",
    title: "Prepare for export",
    text: "Commercial packing and documentation are coordinated for international retail and distribution programs.",
  },
];

const atelierDetails = [
  { number: "I", label: "Tea selection", detail: "Origin · grade · cup profile" },
  { number: "II", label: "Pack formats", detail: "Caddies · pouches · gifting" },
  { number: "III", label: "Buyer specification", detail: "Market · compliance · export" },
];

const divisions = [
  {
    eyebrow: "Island spice house",
    title: "Ceylon spices",
    copy: "Cinnamon, pepper, cloves, cardamom, nutmeg, turmeric, and ginger prepared for international buyers.",
    path: "/spices",
    panelClass: "spice",
    mark: "S",
  },
  {
    eyebrow: "Eden Harvest",
    title: "Wellness village",
    copy: "A slower expression of Sri Lanka through gardens, nature, wellness, hospitality, and place.",
    path: "/wellness",
    panelClass: "wellness",
    mark: "W",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f7f0e3] text-[#14372b]">
      <section className="hero-stage relative min-h-[100svh] overflow-hidden bg-[#092d22] text-[#fff9ed]">
        <div className="origin-canvas" aria-hidden="true">
          <div className="origin-grid" />
          <div className="origin-orbit" />
          <div className="origin-axis" />
          <div className="origin-leaf leaf-one" />
          <div className="origin-leaf leaf-two" />
          <div className="origin-leaf leaf-three" />
          <div className="absolute inset-4 border border-white/[0.07] sm:inset-7" />
          <div className="absolute inset-0 premium-grain opacity-[0.08]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-5 pb-20 pt-32 sm:px-8 md:pb-24 lg:px-12 lg:pb-28">
          <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end xl:gap-20">
            <div className="hero-copy max-w-5xl">
              <div data-hero className="mb-7 flex items-center gap-4">
                <span className="luxury-rule text-[#e1c27c]" />
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.25em] text-[#e1c27c] sm:text-[0.68rem]">
                  Sri Lanka · Ceylon origin house
                </p>
              </div>

              <h1 className="max-w-5xl text-balance font-serif text-[clamp(3.9rem,9vw,9rem)] font-normal leading-[0.82] tracking-[-0.035em] text-[#fff9ed]">
                <span data-hero className="hero-title-line">
                  <span>Born in Ceylon.</span>
                </span>
                <span data-hero className="hero-title-line mt-3 italic text-[#e5c982]">
                  <span>Composed for the world.</span>
                </span>
              </h1>

              <div className="mt-8 grid max-w-3xl gap-7 md:grid-cols-[1fr_auto] md:items-end">
                <p data-hero className="max-w-2xl text-[1rem] font-light leading-8 text-white/[0.74] md:text-lg">
                  An origin-led house for exceptional Ceylon tea, sourcing across Sri Lanka’s
                  seven tea-growing regions and preparing distinctive collections for retail,
                  hospitality, gifting, and private-label partners.
                </p>

                <div data-hero className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <button
                    onClick={() => go("/products")}
                    className="luxury-button group inline-flex items-center justify-between gap-6 bg-[#e1c27c] px-6 py-4 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#0a3125] hover:bg-[#f0d99d]"
                  >
                    Discover tea
                    <ArrowRight className="h-4 w-4 stroke-[1.5] transition-transform duration-500 group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => go("/contact")}
                    className="luxury-button group inline-flex items-center justify-between gap-6 border border-white/[0.35] px-6 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-white hover:border-[#e1c27c] hover:text-[#e1c27c]"
                  >
                    Source with us
                    <ArrowUpRight className="h-4 w-4 stroke-[1.5] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>

            <aside data-hero className="border-t border-white/[0.25] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#e1c27c]">
                The island in numbers
              </p>
              <div className="mt-6 grid grid-cols-3 gap-5 lg:grid-cols-1 lg:gap-6">
                {[
                  ["7", "tea-growing regions"],
                  ["3", "origin-led divisions"],
                  ["1", "Sri Lankan house"],
                ].map(([value, label]) => (
                  <div key={label} className="border-b border-white/[0.14] pb-5 last:border-0">
                    <span className="font-serif text-4xl leading-none text-[#fff9ed] md:text-5xl">{value}</span>
                    <span className="mt-2 block max-w-[10rem] text-[0.58rem] font-semibold uppercase leading-5 tracking-[0.17em] text-white/[0.54]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>

        <div className="hero-scroll-marker" aria-hidden="true">
          Scroll to explore
        </div>
      </section>

      <section className="border-b border-[#14372b]/[0.12] bg-[#f7f0e3]">
        <div className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex gap-7 overflow-x-auto pb-2 scrollbar-none lg:grid lg:grid-cols-7 lg:gap-4 lg:overflow-visible">
            {teaRegions.map((region, index) => (
              <div
                data-reveal
                data-reveal-delay={(index * 0.035).toFixed(2)}
                key={region}
                className="luxury-rail-item min-w-max pb-2 lg:min-w-0"
              >
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#9a7650]">0{index + 1}</p>
                <p className="mt-1 font-serif text-lg text-[#14372b]">{region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f0e3] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div data-reveal="left">
              <p className="premium-kicker">A sense of place</p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-[#6e6b5f]">
                Every tea begins somewhere specific. We believe premium presentation should make that origin more visible, not less.
              </p>
            </div>

            <div data-reveal="right">
              <h2 className="max-w-5xl font-serif text-[clamp(3.2rem,6vw,6.6rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">
                An island measured in <span className="italic text-[#8d5c3f]">altitude, rain, season, and leaf.</span>
              </h2>
              <div className="mt-10 grid gap-8 border-t border-[#14372b]/[0.14] pt-8 md:grid-cols-2">
                <p className="text-base leading-8 text-[#5f6258]">
                  Ceylon tea is not one flavour. Sri Lanka’s elevations and climatic zones create a remarkable spectrum of cup character. Our role is to preserve that distinction while shaping it for contemporary markets.
                </p>
                <p className="text-base leading-8 text-[#5f6258]">
                  The result is a quieter kind of luxury: clear provenance, disciplined selection, considered packing, and a product story that starts with where the leaf was grown.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div data-reveal="clip">
              <p className="premium-kicker">The Ceylon collection</p>
              <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,5vw,5.6rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">
                Tea with a point of view.
              </h2>
            </div>
            <button
              data-reveal
              onClick={() => go("/products")}
              className="group inline-flex w-fit items-center gap-3 border-b border-[#8d5c3f]/[0.55] pb-2 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#8d5c3f]"
            >
              View the tea house
              <ArrowUpRight className="h-4 w-4 stroke-[1.5] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[330px_330px]">
            {collections.map((collection, index) => (
              <button
                data-reveal="scale"
                data-reveal-delay={(index * 0.08).toFixed(2)}
                key={collection.title}
                onClick={() => go("/products")}
                className={`luxury-card luxury-frame group relative overflow-hidden bg-[#0c3025] text-left ${
                  index === 0 ? "lg:col-span-7 lg:row-span-2" : "lg:col-span-5 lg:row-span-1"
                }`}
              >
                <div className={`collection-visual ${collection.visualClass}`} aria-hidden="true">
                  <span className="collection-mark">{collection.mark}</span>
                </div>
                <div className="absolute inset-0 z-[2] bg-gradient-to-t from-[#071f18]/[0.96] via-[#071f18]/[0.2] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-[4] p-6 sm:p-8 lg:p-9">
                  <div className="mb-4 flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]">
                    <span>{collection.number}</span>
                    <span className="h-px w-8 bg-[#e1c27c]/[0.7]" />
                    <span>Collection</span>
                  </div>
                  <h3 className={`font-serif font-normal leading-none text-[#fff9ed] ${index === 0 ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}>
                    {collection.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/[0.66]">{collection.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a2e23] py-24 text-[#fff9ed] md:py-32 lg:py-36">
        <div className="absolute inset-0 premium-grain opacity-[0.08]" />
        <div className="absolute right-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[#d8bd7a]/[0.055] blur-3xl" />
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div data-reveal="left">
              <p className="premium-kicker premium-kicker-light">Leaf to export</p>
              <h2 className="mt-6 max-w-xl font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#fff9ed]">
                Quiet process. Exacting choices.
              </h2>
            </div>

            <div className="divide-y divide-white/[0.12] border-t border-white/[0.12]">
              {process.map((item, index) => (
                <div
                  data-reveal="right"
                  data-reveal-delay={(index * 0.055).toFixed(2)}
                  key={item.number}
                  className="grid gap-4 py-7 transition-colors duration-500 hover:bg-white/[0.025] sm:grid-cols-[70px_0.75fr_1.25fr] sm:items-start sm:gap-6 md:py-9"
                >
                  <span className="text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]">{item.number}</span>
                  <h3 className="font-serif text-2xl font-normal text-[#fff9ed] md:text-3xl">{item.title}</h3>
                  <p className="max-w-xl text-sm leading-7 text-white/[0.62]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#efe2cc] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:px-12">
          <div data-reveal="left" className="atelier-stage" aria-label="Abstract premium private-label presentation">
            <div className="atelier-line one" aria-hidden="true" />
            <div className="atelier-line two" aria-hidden="true" />
            <div className="atelier-tin" aria-hidden="true" />
            <div className="absolute bottom-7 left-7 z-[3] text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-[#8d5c3f]">
              Designed around your market · your cup · your presentation
            </div>
          </div>

          <div data-reveal="right">
            <p className="premium-kicker">Private-label atelier</p>
            <h2 className="mt-6 font-serif text-[clamp(3.1rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b]">
              Your brand. <span className="italic text-[#8d5c3f]">Ceylon at its core.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f6258]">
              We treat private label as more than putting a logo on a pack. Tea profile, format, presentation, gifting, and export requirements should feel like one coherent product experience.
            </p>

            <div className="mt-10 border-y border-[#14372b]/[0.16]">
              {atelierDetails.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[54px_1fr] gap-4 border-b border-[#14372b]/[0.12] py-4 transition-all duration-500 last:border-0 hover:translate-x-1 hover:border-[#8d5c3f]/[0.3] sm:grid-cols-[54px_0.8fr_1.2fr] sm:items-center"
                >
                  <span className="font-serif text-lg italic text-[#8d5c3f]">{item.number}</span>
                  <p className="text-[0.61rem] font-semibold uppercase tracking-[0.18em] text-[#14372b]">{item.label}</p>
                  <p className="col-start-2 text-xs tracking-[0.04em] text-[#6e6b5f] sm:col-start-auto">{item.detail}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => go("/contact")}
              className="luxury-button group mt-10 inline-flex items-center gap-4 bg-[#14372b] px-6 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#fff9ed] hover:bg-[#8d5c3f]"
            >
              Discuss a collection
              <ArrowUpRight className="h-4 w-4 stroke-[1.5] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div data-reveal="left">
              <p className="premium-kicker">Beyond tea</p>
              <h2 className="mt-5 max-w-md font-serif text-[clamp(3rem,4.6vw,5.2rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">
                One island. More ways to experience it.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {divisions.map((division, index) => (
                <button
                  data-reveal="scale"
                  data-reveal-delay={(index * 0.08).toFixed(2)}
                  key={division.title}
                  onClick={() => go(division.path)}
                  className="group text-left"
                >
                  <div className={`division-panel ${division.panelClass}`} aria-hidden="true">
                    <span className="division-label">{division.mark}</span>
                  </div>
                  <div className="flex items-start justify-between gap-5 border-b border-[#14372b]/[0.14] py-5">
                    <div>
                      <p className="text-[0.57rem] font-semibold uppercase tracking-[0.2em] text-[#8d5c3f]">{division.eyebrow}</p>
                      <h3 className="mt-2 font-serif text-3xl font-normal text-[#14372b]">{division.title}</h3>
                      <p className="mt-3 max-w-lg text-sm leading-6 text-[#66695f]">{division.copy}</p>
                    </div>
                    <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center border border-[#8d5c3f]/[0.35] text-[#8d5c3f] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#14372b] group-hover:text-[#fff9ed]">
                      <ArrowUpRight className="h-4 w-4 stroke-[1.5]" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[68svh] overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <div className="closing-field" aria-hidden="true" />
        <div className="absolute inset-0 premium-grain opacity-[0.08]" />
        <div className="absolute inset-5 border border-white/[0.08] sm:inset-8" />

        <div className="relative z-10 mx-auto flex min-h-[68svh] max-w-[1440px] items-center px-5 py-24 sm:px-8 lg:px-12">
          <div data-reveal="clip" className="max-w-4xl">
            <div className="flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]">
              <span className="luxury-rule" />
              <span>International sourcing · retail · hospitality</span>
            </div>
            <h2 className="mt-7 font-serif text-[clamp(3.7rem,7vw,7.5rem)] font-normal leading-[0.84] tracking-[-0.035em] text-[#fff9ed]">
              Source Ceylon <span className="italic text-[#e5c982]">differently.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/[0.7]">
              Tell us the cup profile, market, format, or collection you are trying to create. We will start the conversation from there.
            </p>
            <button
              onClick={() => go("/contact")}
              className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#e1c27c] px-7 py-4 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#0a3125] hover:bg-[#f0d99d]"
            >
              Start an inquiry
              <ArrowRight className="h-4 w-4 stroke-[1.5] transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
