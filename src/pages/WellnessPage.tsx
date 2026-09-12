import { ArrowRight, ArrowUpRight, Heart, Home, Leaf, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

const pillars = [
  {
    icon: Heart,
    title: "Ayurvedic wellbeing",
    text: "Traditional Sri Lankan wellness practices framed around rest, care, and a slower rhythm of living.",
  },
  {
    icon: Leaf,
    title: "Organic harvest",
    text: "Gardens, ingredients, and farm-led experiences that reconnect food, land, and daily wellbeing.",
  },
  {
    icon: Home,
    title: "Eco hospitality",
    text: "A nature-led approach to stays and spaces designed to sit quietly within the surrounding landscape.",
  },
  {
    icon: Sun,
    title: "Local experience",
    text: "Yoga, meditation, farming, cooking, village culture, and time outdoors as part of a wider Sri Lankan stay.",
  },
];

const experiences = [
  ["Ayurvedic care", "Consultations, traditional therapies, herbal practices, and restorative routines."],
  ["Garden & table", "Organic growing, harvesting, cooking, and ingredient-led experiences."],
  ["Nature", "Walks, cycling, birdlife, water, sunrise, and unstructured time outdoors."],
  ["Culture", "Local food, craft, farming, and village experiences shaped by the surrounding community."],
];

const WellnessPage = () => {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <section className="relative min-h-[84svh] overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <div className="wellness-hero-art" aria-hidden="true">
          <div className="wellness-sun" />
          <div className="wellness-terrace" />
          <div className="house-art-grid" />
          <span className="house-coordinate top">EDEN HARVEST · YODHAKANDIYA</span>
          <span className="house-coordinate bottom">AYURVEDA · GARDENS · NATURE · PLACE</span>
          <div className="absolute inset-0 premium-grain opacity-[0.07]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[84svh] max-w-[1440px] items-end px-5 pb-16 pt-32 sm:px-8 md:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <p data-hero className="premium-kicker premium-kicker-light">Eden Harvest · Yodhakandiya</p>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(4.2rem,8.5vw,8.6rem)] font-normal leading-[0.83] tracking-[-0.04em] text-[#fff9ed]">
              <span data-hero className="hero-title-line"><span>A slower side</span></span>
              <span data-hero className="hero-title-line mt-2 italic text-[#e5c982]"><span>of the island.</span></span>
            </h1>
            <p data-hero className="mt-8 max-w-2xl text-base font-light leading-8 text-white/[0.7] md:text-lg">
              Eden Harvest Wellness Village brings together Sri Lankan Ayurveda, organic agriculture, nature, culture, and eco-hospitality across a 15-acre setting in Yodhakandiya.
            </p>
            <button onClick={() => go("/contact")} className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#e1c27c] px-7 py-4 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#0a3125] hover:bg-[#f0d99d]">
              Ask about Eden Harvest
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="house-surface bg-[#fffaf0] py-24 md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12">
          <div data-reveal="left">
            <p className="premium-kicker">The vision</p>
            <h2 className="mt-6 max-w-lg font-serif text-[clamp(3.1rem,4.8vw,5.5rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">Wellness as place, not just a programme.</h2>
          </div>
          <div data-reveal="right" className="self-end">
            <p className="max-w-2xl text-base leading-8 text-[#62665d]">The project is conceived as a holistic Sri Lankan experience: paddy fields, water, gardens, local food, traditional wellbeing practices, and unhurried hospitality working together rather than competing for attention.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#efe2cc] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div data-reveal="clip" className="mb-14 max-w-4xl">
            <p className="premium-kicker">Four pillars</p>
            <h2 className="mt-6 font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b]">A village built around wellbeing in the broadest sense.</h2>
          </div>
          <div className="grid gap-px bg-[#14372b]/[0.12] sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <article data-reveal="scale" data-reveal-delay={(index * 0.055).toFixed(2)} key={pillar.title} className="group bg-[#efe2cc] p-7 transition-colors duration-500 hover:bg-[#f7f0e3] md:p-8">
                <pillar.icon className="h-6 w-6 text-[#8d5c3f] transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-7 font-serif text-3xl font-normal leading-tight text-[#14372b]">{pillar.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#66695f]">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a2e23] py-24 text-[#fff9ed] md:py-32 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:px-12">
          <div data-reveal="left" className="wellness-landscape" aria-label="Abstract Eden Harvest landscape">
            <span className="sun" aria-hidden="true" /><span className="ridge" aria-hidden="true" /><span className="waterline" aria-hidden="true" />
            <span className="absolute left-7 top-7 text-[0.54rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]">15 acres · garden · water · paddy · rest</span>
            <span className="absolute bottom-7 left-7 font-serif text-3xl text-[#fff9ed]">A living landscape</span>
          </div>

          <div data-reveal="right">
            <p className="premium-kicker premium-kicker-light">Ayurvedic partnership</p>
            <h2 className="mt-6 font-serif text-[clamp(3.2rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#fff9ed]">Traditional care, placed within a <span className="italic text-[#e5c982]">living landscape.</span></h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/[0.64]">Wellness programming is being developed with Kadahapola Ayurvedic, connecting established Sri Lankan healing traditions with the gardens, food, nature, and hospitality of the wider village concept.</p>
            <div className="mt-9 grid grid-cols-3 gap-px bg-white/[0.12]">
              {[["01", "Rest"], ["02", "Care"], ["03", "Place"]].map(([n, label]) => (
                <div key={label} className="bg-[#0a2e23] p-5"><span className="text-[0.52rem] font-semibold uppercase tracking-[0.18em] text-[#e1c27c]">{n}</span><p className="mt-3 font-serif text-xl text-[#fff9ed]">{label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="house-surface bg-[#fffaf0] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div data-reveal="left"><p className="premium-kicker">The stay</p><h2 className="mt-6 max-w-lg font-serif text-[clamp(3rem,4.6vw,5.2rem)] font-normal leading-[0.92] tracking-[-0.03em] text-[#14372b]">Less itinerary. More immersion.</h2></div>
            <div className="divide-y divide-[#14372b]/[0.14] border-y border-[#14372b]/[0.14]">
              {experiences.map(([title, text], index) => (
                <div data-reveal="right" data-reveal-delay={(index * 0.055).toFixed(2)} key={title} className="grid gap-4 py-7 transition-all duration-500 hover:pl-2 sm:grid-cols-[70px_0.8fr_1.2fr] sm:gap-6 md:py-9">
                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-[#9a7650]">0{index + 1}</span>
                  <h3 className="font-serif text-2xl font-normal text-[#14372b] md:text-3xl">{title}</h3>
                  <p className="text-sm leading-7 text-[#66695f]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-[66svh] overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <div className="wellness-hero-art absolute inset-0" aria-hidden="true">
          <div className="wellness-sun" /><div className="wellness-terrace" /><div className="absolute inset-0 premium-grain opacity-[0.07]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[66svh] max-w-[1440px] items-center px-5 py-24 sm:px-8 lg:px-12">
          <div data-reveal="clip" className="max-w-4xl">
            <p className="premium-kicker premium-kicker-light">Eden Harvest</p>
            <h2 className="mt-7 font-serif text-[clamp(3.6rem,7vw,7rem)] font-normal leading-[0.85] tracking-[-0.035em] text-[#fff9ed]">Come for wellness.<br /><span className="italic text-[#e5c982]">Stay for the place.</span></h2>
            <button onClick={() => go("/contact")} className="group mt-9 inline-flex items-center gap-4 border-b border-[#e1c27c]/[0.7] pb-2 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]">Start a conversation<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPage;