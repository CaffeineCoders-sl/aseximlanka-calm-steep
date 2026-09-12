export type JournalSection = {
  heading: string;
  paragraphs: string[];
};

export type JournalArticle = {
  slug: string;
  issue: string;
  category: string;
  title: string;
  dek: string;
  excerpt: string;
  date: string;
  readTime: string;
  visual: "terrain" | "leaf" | "grade" | "caddy" | "spice" | "origin";
  quote?: string;
  sections: JournalSection[];
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "seven-regions-seven-expressions",
    issue: "Field Note 01",
    category: "Ceylon Tea",
    title: "Seven regions. Seven expressions of one island.",
    dek: "Why Ceylon tea should be understood as a landscape of distinct origins rather than a single flavour profile.",
    excerpt:
      "Elevation, rainfall, monsoon exposure and season shape the cup long before the leaf reaches a tasting table.",
    date: "12 September 2026",
    readTime: "6 min read",
    visual: "terrain",
    quote: "Origin becomes useful when it can be tasted, explained and carried through to the finished product.",
    sections: [
      {
        heading: "An island, not a single profile",
        paragraphs: [
          "Ceylon tea is often spoken about as though it were one flavour. In practice, Sri Lanka produces a remarkable range of cup profiles across a relatively compact island. The reason is geography: tea is grown from low elevations close to sea level to high mountain country, across areas exposed to different monsoons, rainfall patterns and temperatures.",
          "For buyers, this matters because origin is not simply a story printed on a pack. It is a practical way to shape brightness, body, aroma, colour and seasonal character before blending begins.",
        ],
      },
      {
        heading: "Reading the seven regions",
        paragraphs: [
          "Nuwara Eliya is associated with high elevation and a lighter, more delicate cup. Dimbula and Uva can offer very different seasonal expressions, while Kandy occupies the historic centre of Sri Lanka's tea story. Uda Pussellawa bridges high-grown character with its own climatic identity.",
          "Further south, Sabaragamuwa and Ruhuna produce lower-grown teas known for fuller body, deeper liquor and strong visual leaf character. None of these descriptions should replace tasting, but they give a useful starting framework for building a collection.",
        ],
      },
      {
        heading: "From provenance to product",
        paragraphs: [
          "The most compelling premium tea programs use provenance with discipline. That can mean keeping a single-origin tea intentionally narrow, or using regional character as one component inside a broader blend.",
          "The objective is not to make origin decorative. It is to make origin legible—from the cup profile to the product name, pack architecture and customer experience.",
        ],
      },
    ],
  },
  {
    slug: "how-elevation-changes-the-cup",
    issue: "Field Note 02",
    category: "Origin",
    title: "What elevation changes before the tea reaches the cup.",
    dek: "A practical look at why altitude is one of the most useful starting points when selecting Ceylon tea.",
    excerpt:
      "Temperature, growth rate and climatic exposure influence leaf character—and the style of product that character can support.",
    date: "08 September 2026",
    readTime: "5 min read",
    visual: "leaf",
    quote: "Elevation is not a quality ranking. It is a clue to character.",
    sections: [
      {
        heading: "Character, not hierarchy",
        paragraphs: [
          "High-grown, mid-grown and low-grown are useful commercial descriptions, but they should not be treated as a simple ladder from ordinary to premium. Each elevation band can produce excellent tea when the material, manufacture and intended use align.",
          "Higher elevations are generally cooler, which can slow growth and support lighter, more aromatic profiles. Lower elevations can produce fuller body, deeper colour and larger leaf styles that work beautifully in different markets and formats.",
        ],
      },
      {
        heading: "Why buyers should care",
        paragraphs: [
          "A hospitality buyer searching for a bright afternoon tea may start from a different elevation profile than a brand building a strong breakfast blend. A gifting collection may prioritise visual leaf and delicacy, while a milk-tea program may need structure and colour.",
          "Thinking in terms of intended cup and customer keeps elevation grounded in product decisions rather than using it as an abstract premium claim.",
        ],
      },
    ],
  },
  {
    slug: "reading-ceylon-tea-grades",
    issue: "Field Note 03",
    category: "Tea Buying",
    title: "OP, BOP, FBOP, BOPF: reading Ceylon tea grades without the mythology.",
    dek: "Tea grades describe leaf style and manufacture—not a universal score of quality.",
    excerpt:
      "Understanding the grade language helps buyers specify appearance, infusion behaviour and format more precisely.",
    date: "03 September 2026",
    readTime: "7 min read",
    visual: "grade",
    quote: "A grade is a manufacturing language. The cup still has the final word.",
    sections: [
      {
        heading: "What a grade actually tells you",
        paragraphs: [
          "Orthodox Ceylon tea uses a vocabulary of grades that can look like a quality ranking to an unfamiliar buyer. In reality, terms such as OP, Pekoe, BOP, FBOP and BOPF primarily describe leaf appearance and particle size after manufacture.",
          "That information is commercially useful because leaf style influences infusion speed, visual presentation and how the tea performs in loose-leaf, sachet and tea-bag formats.",
        ],
      },
      {
        heading: "Why tasting remains essential",
        paragraphs: [
          "Two teas carrying the same grade can taste very different because region, season, elevation, cultivar, manufacture and storage all matter. Grade helps narrow the physical style; tasting determines whether the tea suits the brief.",
          "For private-label development, we normally treat grade as one variable alongside target cup, price architecture, pack format and the way the customer is expected to brew the tea.",
        ],
      },
    ],
  },
  {
    slug: "private-label-with-an-origin",
    issue: "Field Note 04",
    category: "Private Label",
    title: "Private-label tea should feel owned, not outsourced.",
    dek: "The strongest private-label collections begin with a product idea, not an empty package waiting for a logo.",
    excerpt:
      "Cup profile, provenance, format and presentation need to behave like one system if the finished brand is going to feel credible.",
    date: "29 August 2026",
    readTime: "6 min read",
    visual: "caddy",
    quote: "Private label becomes premium when sourcing decisions and brand decisions are made together.",
    sections: [
      {
        heading: "Start before the artwork",
        paragraphs: [
          "A common private-label workflow starts with packaging dimensions and branding, then asks which tea should be placed inside. Reversing that sequence often produces a more convincing product.",
          "Begin with the customer, occasion and target cup. From there, origin, grade, blend structure, pack format and design constraints can be developed as parts of the same brief.",
        ],
      },
      {
        heading: "Build recognisable product logic",
        paragraphs: [
          "A collection feels owned when there is a reason each product exists. A regional series may be organised by elevation. A hospitality range may be built around dayparts. A gifting program may use rarity, leaf appearance or ceremony as the organising principle.",
          "The goal is coherence. Even when manufacturing and packing involve multiple specialists, the customer should experience one deliberate brand idea.",
        ],
      },
    ],
  },
  {
    slug: "ceylon-cinnamon-what-buyers-should-know",
    issue: "Field Note 05",
    category: "Island Spices",
    title: "Ceylon cinnamon: what international buyers should actually look for.",
    dek: "True cinnamon is more than a country-of-origin claim. Quill structure, grade, aroma and intended use all matter.",
    excerpt:
      "A practical starting point for specifying Sri Lankan cinnamon across retail, foodservice and ingredient programs.",
    date: "24 August 2026",
    readTime: "5 min read",
    visual: "spice",
    quote: "Origin is the beginning of the specification, not the end of it.",
    sections: [
      {
        heading: "Cinnamomum verum",
        paragraphs: [
          "Sri Lanka is closely associated with Cinnamomum verum, commonly called true or Ceylon cinnamon. Its layered quills, relatively delicate texture and aromatic profile distinguish it from cassia types that dominate many global markets.",
          "For a buyer, botanical identity is only the first step. Form, grade, moisture, cleanliness, cut, packing and the final application all affect what should be specified.",
        ],
      },
      {
        heading: "Match the specification to the use",
        paragraphs: [
          "A premium retail quill program may prioritise visual uniformity very differently from a bakery ingredient buyer or a brand sourcing cinnamon powder. The right conversation therefore starts with application and market rather than with a grade name in isolation.",
        ],
      },
    ],
  },
  {
    slug: "provenance-as-a-product-system",
    issue: "Field Note 06",
    category: "The House",
    title: "Provenance is stronger when it changes the product—not just the copy.",
    dek: "How origin can guide selection, assortment, packaging and buyer communication without turning into decorative storytelling.",
    excerpt:
      "The most useful origin story is one that gives the team better decisions to make.",
    date: "18 August 2026",
    readTime: "6 min read",
    visual: "origin",
    quote: "Good provenance reduces ambiguity: it tells you what belongs in the product and what does not.",
    sections: [
      {
        heading: "Beyond a paragraph on the back of pack",
        paragraphs: [
          "Origin storytelling becomes generic when it is added after the product has already been defined. A stronger approach is to let provenance influence the architecture of the product itself.",
          "That might mean selecting by region, season or elevation; keeping processing choices restrained; choosing formats that make leaf character visible; or building a collection around traceable differences customers can understand.",
        ],
      },
      {
        heading: "Make the story operational",
        paragraphs: [
          "For sourcing teams, provenance can become a practical filter. It can shape supplier conversations, quality checks, blending tolerances and the information carried into sales materials.",
          "When origin affects the operating decisions behind a product, the final story tends to feel more specific because it is describing something real rather than trying to manufacture meaning after the fact.",
        ],
      },
    ],
  },
];

export const featuredJournalArticle = journalArticles[0];
