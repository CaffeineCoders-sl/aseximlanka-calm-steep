import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { featuredJournalArticle, journalArticles } from "@/data/journal";

const JournalVisual = ({ variant, mark }: { variant: string; mark: string }) => (
  <div className={`journal-visual journal-visual-${variant}`} aria-hidden="true">
    <div className="journal-visual-grid" />
    <div className="journal-visual-orbit orbit-one" />
    <div className="journal-visual-orbit orbit-two" />
    <div className="journal-visual-leaf leaf-a" />
    <div className="journal-visual-leaf leaf-b" />
    <span className="journal-visual-mark">{mark}</span>
  </div>
);

const JournalPage = () => {
  const navigate = useNavigate();

  const openArticle = (slug: string) => {
    navigate(`/journal/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <section className="journal-hero relative overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <div className="journal-hero-field" aria-hidden="true">
          <div className="journal-hero-ring ring-one" />
          <div className="journal-hero-ring ring-two" />
          <div className="journal-hero-line line-one" />
          <div className="journal-hero-line line-two" />
          <div className="absolute inset-0 premium-grain opacity-[0.08]" />
        </div>

        <div className="relative z-10 mx-auto grid min-h-[72svh] max-w-[1440px] gap-14 px-5 pb-16 pt-36 sm:px-8 md:pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:px-12 lg:pb-24">
          <div data-reveal="clip" className="max-w-5xl">
            <p className="premium-kicker premium-kicker-light">The journal</p>
            <h1 className="mt-7 font-serif text-[clamp(4.2rem,9vw,9rem)] font-normal leading-[0.82] tracking-[-0.04em] text-[#fff9ed]">
              Notes from
              <span className="mt-2 block italic text-[#e5c982]">the island.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base font-light leading-8 text-white/[0.7] md:text-lg">
              Field notes on Ceylon tea, origin, private label, island spices and the practical details behind thoughtful sourcing.
            </p>
          </div>

          <aside data-reveal="right" className="border-t border-white/[0.2] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#e1c27c]">Editorial focus</p>
            <div className="mt-5 grid gap-4 font-serif text-2xl leading-tight text-[#fff9ed]">
              <span>Tea & origin</span>
              <span>Buyer notes</span>
              <span>Private label</span>
              <span>Island provenance</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f3e8d5] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-12">
            <button
              data-reveal="scale"
              onClick={() => openArticle(featuredJournalArticle.slug)}
              className="journal-feature group text-left"
            >
              <JournalVisual variant={featuredJournalArticle.visual} mark="01" />
            </button>

            <div data-reveal="right" className="flex flex-col justify-between border-y border-[#14372b]/[0.14] py-8 lg:py-10">
              <div>
                <div className="flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-[#8d5c3f]">
                  <span>{featuredJournalArticle.issue}</span>
                  <span className="h-px w-8 bg-[#8d5c3f]/[0.45]" />
                  <span>{featuredJournalArticle.category}</span>
                </div>
                <h2 className="mt-6 font-serif text-[clamp(3rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b]">
                  {featuredJournalArticle.title}
                </h2>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#62665d]">{featuredJournalArticle.dek}</p>
              </div>

              <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-[#14372b]/[0.12] pt-6">
                <div className="text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-[#8d5c3f]">
                  <span>{featuredJournalArticle.date}</span>
                  <span className="mx-2">·</span>
                  <span>{featuredJournalArticle.readTime}</span>
                </div>
                <button
                  onClick={() => openArticle(featuredJournalArticle.slug)}
                  className="group inline-flex items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#14372b]"
                >
                  Read field note
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div data-reveal="left">
              <p className="premium-kicker">Latest field notes</p>
            </div>
            <div data-reveal="right">
              <h2 className="max-w-4xl font-serif text-[clamp(3rem,5vw,5.8rem)] font-normal leading-[0.91] tracking-[-0.03em] text-[#14372b]">
                Sourcing knowledge, without the catalogue language.
              </h2>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
            {journalArticles.slice(1).map((article, index) => (
              <article
                data-reveal="scale"
                data-reveal-delay={(index * 0.05).toFixed(2)}
                key={article.slug}
                className="journal-card group"
              >
                <button onClick={() => openArticle(article.slug)} className="block w-full text-left">
                  <JournalVisual variant={article.visual} mark={`0${index + 2}`} />
                  <div className="border-b border-[#14372b]/[0.14] py-6">
                    <div className="flex items-center justify-between gap-5 text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">
                      <span>{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-[2.15rem] font-normal leading-[0.98] tracking-[-0.025em] text-[#14372b] transition-colors duration-500 group-hover:text-[#8d5c3f]">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#66695f]">{article.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span className="text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-[#8d5c3f]">{article.date}</span>
                      <span className="grid h-9 w-9 place-items-center border border-[#14372b]/[0.18] text-[#14372b] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#14372b] group-hover:bg-[#14372b] group-hover:text-[#fff9ed]">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="journal-cta relative overflow-hidden bg-[#0a2e23] py-24 text-[#fff9ed] md:py-32">
        <div className="journal-cta-field" aria-hidden="true" />
        <div data-reveal="clip" className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="premium-kicker premium-kicker-light">Have a sourcing question?</p>
          <h2 className="mt-7 font-serif text-[clamp(3.5rem,6vw,6.7rem)] font-normal leading-[0.87] tracking-[-0.035em] text-[#fff9ed]">
            Some questions are better answered
            <span className="block italic text-[#e5c982]">over a tasting table.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/[0.66]">
            Tell us what you are trying to source or build and we can start with the product brief rather than a generic catalogue.
          </p>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="luxury-button group mt-9 inline-flex items-center gap-4 bg-[#e1c27c] px-7 py-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#0a3125] hover:bg-[#f0d99d]"
          >
            Start a conversation
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default JournalPage;
