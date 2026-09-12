import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { journalArticles } from "@/data/journal";

const JournalArticlePage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const articleIndex = journalArticles.findIndex((item) => item.slug === slug);
  const article = journalArticles[articleIndex];

  if (!article) {
    return (
      <div className="min-h-[70svh] bg-[#fffaf0] px-5 pb-24 pt-40 text-center text-[#14372b]">
        <p className="premium-kicker">Journal</p>
        <h1 className="mt-6 font-serif text-6xl">Field note not found.</h1>
        <button
          onClick={() => navigate("/journal")}
          className="mt-9 inline-flex items-center gap-3 border-b border-[#14372b]/30 pb-2 text-xs font-semibold uppercase tracking-[0.2em]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the journal
        </button>
      </div>
    );
  }

  const nextArticle = journalArticles[(articleIndex + 1) % journalArticles.length];

  const go = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <article className="min-h-screen bg-[#fffaf0] text-[#14372b]">
      <header className="article-hero relative overflow-hidden bg-[#08271e] text-[#fff9ed]">
        <div className={`article-hero-visual article-hero-${article.visual}`} aria-hidden="true">
          <div className="article-orbit orbit-one" />
          <div className="article-orbit orbit-two" />
          <div className="article-leaf leaf-one" />
          <div className="article-leaf leaf-two" />
          <span className="article-issue-mark">{article.issue.replace("Field Note ", "")}</span>
          <div className="absolute inset-0 premium-grain opacity-[0.07]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1180px] px-5 pb-16 pt-36 sm:px-8 md:pb-24 lg:px-12">
          <button
            onClick={() => go("/journal")}
            className="group inline-flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#e1c27c]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-500 group-hover:-translate-x-1" />
            The journal
          </button>

          <div data-reveal="clip" className="mt-20 max-w-5xl">
            <div className="flex flex-wrap items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.19em] text-[#e1c27c]">
              <span>{article.issue}</span>
              <span className="h-px w-8 bg-[#e1c27c]/50" />
              <span>{article.category}</span>
            </div>
            <h1 className="mt-7 max-w-5xl font-serif text-[clamp(3.8rem,7.5vw,7.7rem)] font-normal leading-[0.86] tracking-[-0.04em] text-[#fff9ed]">
              {article.title}
            </h1>
            <p className="mt-8 max-w-3xl text-lg font-light leading-8 text-white/[0.7] md:text-xl">{article.dek}</p>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.14] pt-6 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-white/[0.5]">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>A. S. Exim Lanka</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20 lg:px-12">
        <aside data-reveal="left" className="self-start border-t border-[#14372b]/[0.14] pt-5 lg:sticky lg:top-28">
          <p className="text-[0.56rem] font-semibold uppercase tracking-[0.2em] text-[#8d5c3f]">In this field note</p>
          <div className="mt-5 grid gap-4">
            {article.sections.map((section, index) => (
              <a
                key={section.heading}
                href={`#section-${index + 1}`}
                className="group flex items-start gap-3 text-sm leading-6 text-[#66695f] transition-colors hover:text-[#14372b]"
              >
                <span className="mt-0.5 font-serif text-base italic text-[#8d5c3f]">0{index + 1}</span>
                <span>{section.heading}</span>
              </a>
            ))}
          </div>
        </aside>

        <div className="max-w-3xl">
          <p data-reveal className="article-lead font-serif text-[clamp(2rem,3.3vw,3.3rem)] font-normal leading-[1.08] tracking-[-0.02em] text-[#14372b]">
            {article.excerpt}
          </p>

          {article.quote && (
            <blockquote data-reveal="clip" className="article-quote my-14 border-y border-[#8d5c3f]/[0.25] py-10 md:my-16 md:py-12">
              <p className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-normal italic leading-[0.98] tracking-[-0.025em] text-[#8d5c3f]">
                “{article.quote}”
              </p>
            </blockquote>
          )}

          <div className="article-body">
            {article.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading} data-reveal className="scroll-mt-32 border-t border-[#14372b]/[0.12] py-10 first:border-t-0 first:pt-0 md:py-14">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-serif text-xl italic text-[#8d5c3f]">0{index + 1}</span>
                  <h2 className="font-serif text-[clamp(2.4rem,4vw,4.3rem)] font-normal leading-[0.94] tracking-[-0.025em] text-[#14372b]">
                    {section.heading}
                  </h2>
                </div>
                <div className="grid gap-6 text-[1.02rem] leading-8 text-[#5f6258] md:text-[1.08rem] md:leading-9">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <section className="border-t border-[#14372b]/[0.12] bg-[#f3e8d5] py-20 md:py-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
          <p className="premium-kicker">Continue reading</p>
          <button
            onClick={() => go(`/journal/${nextArticle.slug}`)}
            className="group mt-7 grid w-full gap-7 text-left md:grid-cols-[1fr_auto] md:items-end"
          >
            <div>
              <p className="text-[0.57rem] font-semibold uppercase tracking-[0.18em] text-[#8d5c3f]">{nextArticle.category}</p>
              <h2 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,5vw,5.8rem)] font-normal leading-[0.9] tracking-[-0.03em] text-[#14372b] transition-colors duration-500 group-hover:text-[#8d5c3f]">
                {nextArticle.title}
              </h2>
            </div>
            <span className="grid h-14 w-14 place-items-center border border-[#14372b]/[0.2] text-[#14372b] transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#14372b] group-hover:text-[#fff9ed]">
              <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </section>
    </article>
  );
};

export default JournalArticlePage;
