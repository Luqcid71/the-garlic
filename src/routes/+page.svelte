<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const articles = {
    lead: {
      tag: 'EFN',
      headline: 'Global Summit Reaches Historic Climate Agreement After Three Days of Negotiations',
      byline: 'By Margaret Holloway',
      time: '6 hours ago',
      summary: 'World leaders from 47 nations convened in Geneva this week, emerging with a landmark accord that pledges binding emissions reductions and establishes a $500 billion fund for climate adaptation in developing nations.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80'
    },
    secondary: [
      {
        tag: 'Economy',
        headline: 'Federal Reserve Signals Pause on Rate Hikes Amid Cooling Inflation Data',
        byline: 'By Thomas Aldridge',
        time: '3 hours ago',
        summary: 'Minutes from the latest FOMC meeting reveal growing consensus that monetary tightening may have reached its peak, with core inflation falling to its lowest level in two years.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'
      },
      {
        tag: 'Technology',
        headline: 'Silicon Valley\'s Biggest IPO in a Decade Raises Questions About AI Valuations',
        byline: 'By Priya Nair',
        time: '5 hours ago',
        summary: 'The public debut of the AI chip startup valued at $140 billion has reignited debate over whether markets are pricing in speculative futures rather than present fundamentals.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'
      }
    ],
    briefs: [
      { tag: 'Politics', headline: 'Senate Committee Advances Bipartisan Infrastructure Spending Bill', time: '1 hr ago' },
      { tag: 'Health', headline: 'WHO Declares End to Mpox Emergency as Global Cases Decline', time: '2 hrs ago' },
      { tag: 'Science', headline: 'Mars Rover Discovers Organic Compounds in Ancient Lakebed Sediments', time: '4 hrs ago' },
      { tag: 'Culture', headline: 'Cannes Jury Awards Palme d\'Or to Iranian Director\'s Debut Feature', time: '7 hrs ago' },
    ],
    opinion: {
      tag: 'Opinion',
      headline: 'The Illusion of AI Neutrality and What We Owe Future Generations',
      byline: 'Eleanor Voss',
      role: 'Contributing Editor',
    },
    arts: [
      {
        tag: 'Arts & Culture',
        headline: 'A Museum Reopens, Transformed by a Vision of Radical Inclusion',
        image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?w=400&q=80'
      },
      {
        tag: 'Books',
        headline: 'The Novel That Turned a Quiet Season Into a Literary Event',
        image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80'
      },
      {
        tag: 'Music',
        headline: 'How a Self-Released Album Became the Sound of the Year',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80'
      }
    ]
  };

  let scrolled = false;
  onMount(() => {
    window.addEventListener('scroll', () => { scrolled = window.scrollY > 60; });
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap');

  :global(*) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    background: #fbfaf7;
    color: #1a1612;
    font-family: 'Source Sans 3', sans-serif;
  }

  /* ── Variables ── */
  :root {
    --cream: #f5f0e8;
    --ink: #1a1612;
    --ink-light: #3d3530;
    --rule: #b8a898;
    --rule-light: #d8cfbf;
    --red: #c0392b;
    --gold: #9a7d4a;
    --col: calc((100% - 64px) / 12);
  }

  /* ── Top bar ── */
  .topbar {
    border-bottom: 1px solid var(--rule);
    background: var(--cream);
    padding: 6px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    letter-spacing: 0.06em;
    color: var(--ink-light);
    font-family: 'Source Sans 3', sans-serif;
  }
  .topbar-nav { display: flex; gap: 20px; }
  .topbar-nav a { color: var(--ink-light); text-decoration: none; }
  .topbar-nav a:hover { color: var(--red); }

  /* ── Nameplate ── */
  .nameplate {
    padding: 28px 32px 20px;
    text-align: center;
    border-bottom: 3px double var(--ink);
    position: relative;
  }
  .nameplate::after {
    content: '';
    display: block;
    height: 1px;
    background: var(--ink);
    margin-top: 3px;
  }

  .logo-lockup {
    display: inline-flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 4px;
  }

  /* ── SVG Logo Mark ── */
  .logo-mark {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
  }

  .paper-name {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(42px, 7vw, 80px);
    letter-spacing: -0.02em;
    line-height: 1;
    color: var(--ink);
  }

  .paper-tagline {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--gold);
    margin-top: 4px;
  }

  .nameplate-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 11px;
    letter-spacing: 0.05em;
    color: var(--ink-light);
    font-style: italic;
    font-family: 'Libre Baskerville', serif;
  }

  /* ── Section nav ── */
  .section-nav {
    background: var(--ink);
    display: flex;
    justify-content: center;
    gap: 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .section-nav a {
    color: #e8e0d0;
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    padding: 10px 18px;
    transition: background 0.15s;
  }
  .section-nav a:hover { background: var(--red); color: #fff; }

  /* ── Main grid ── */
  .wrapper { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

  .edition-label {
    text-align: center;
    padding: 10px 0 2px;
    font-family: 'Libre Baskerville', serif;
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--gold);
  }

  .front-rule {
    border: none;
    border-top: 1px solid var(--rule);
    margin: 8px 0;
  }
  .front-rule.thick {
    border-top: 1px solid var(--ink);
    margin: 12px 0 0;
  }

  /* ── Lead layout ── */
  .top-grid {
    display: grid;
    grid-template-columns: 1fr 2px 2fr 2px 1fr;
    gap: 0;
    padding: 24px 0 20px;
  }
  .col-divider { background: var(--rule); }

  .lead-col { padding: 0 28px; }
  .side-col { padding: 0 24px; }

  .section-tag {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 8px;
  }

  h1.lead-head {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(26px, 3.5vw, 42px);
    line-height: 1.12;
    color: var(--ink);
    margin-bottom: 14px;
    letter-spacing: -0.01em;
  }

  h2.secondary-head {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.2;
    margin-bottom: 10px;
  }

  h3.brief-head {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.3;
    margin-bottom: 6px;
  }

  .byline {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    color: var(--ink-light);
    font-style: italic;
    margin-bottom: 10px;
  }
  .byline span { font-style: normal; color: var(--rule); margin: 0 6px; }

  .body-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    line-height: 1.72;
    color: var(--ink-light);
  }

  .article-img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
    display: block;
    filter: grayscale(8%);
    margin-bottom: 12px;
  }
  .article-img.tall { aspect-ratio: 4/3; }

  .read-more {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--red);
    text-decoration: none;
    font-weight: 600;
  }
  .read-more:hover { text-decoration: underline; }

  /* ── Briefs strip ── */
  .briefs-strip {
    border-bottom: 1px solid var(--rule);
    padding: 16px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    margin: 8px 0 24px;
  }
  .brief-item {
    padding: 0 20px;
    border-right: 1px solid var(--rule);
  }
  .brief-item:first-child { padding-left: 0; }
  .brief-item:last-child { border-right: none; }
  .brief-time {
    font-size: 10px;
    letter-spacing: 0.08em;
    color: var(--gold);
    font-family: 'Source Sans 3', sans-serif;
    margin-top: 4px;
  }

  /* ── Opinion feature ── */
  .opinion-band {
    background: var(--ink);
    color: var(--cream);
    padding: 28px 36px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 32px;
    margin-bottom: 28px;
  }
  .opinion-label {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-size: 9px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    color: var(--gold);
    transform: rotate(180deg);
  }
  .opinion-head {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(20px, 2.5vw, 30px);
    line-height: 1.25;
    color: #f0e8d8;
  }
  .opinion-author {
    text-align: right;
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    color: #c8bca8;
  }
  .opinion-author strong {
    display: block;
    color: var(--cream);
    font-size: 14px;
    margin-bottom: 3px;
  }

  /* ── Arts row ── */
  .arts-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    margin-bottom: 40px;
  }
  .arts-item {
    padding: 0 20px;
    border-right: 1px solid var(--rule);
  }
  .arts-item:first-child { padding-left: 0; }
  .arts-item:last-child { border-right: none; padding-right: 0; }
  .arts-img {
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
    display: block;
    margin-bottom: 10px;
    filter: grayscale(15%);
  }

  /* ── Footer ── */
  footer {
    border-top: 2px solid var(--ink);
    padding: 20px 32px 30px;
    text-align: center;
    background-color: var(--ink);
  }
  .footer-name {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 28px;
    letter-spacing: -0.01em;
    color: var(--cream);
  }
  .footer-links {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 10px 0;
    flex-wrap: wrap;
  }
  .footer-links a {
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--rule-light);
    text-decoration: none;
  }
  .footer-links a:hover { color: var(--red); }
  .footer-copy {
    font-size: 11px;
    color: var(--rule);
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    margin-top: 8px;
  }

  /* ── Decorative drop cap ── */
  .drop-cap::first-letter {
    float: left;
    font-family: 'Playfair Display', serif;
    font-size: 4.2em;
    line-height: 0.82;
    margin: 4px 6px 0 0;
    color: var(--ink);
    font-weight: 900;
  }

  @media (max-width: 900px) {
    .top-grid { grid-template-columns: 1fr; }
    .col-divider { display: none; }
    .lead-col, .side-col { padding: 0 0 20px; }
    .briefs-strip { grid-template-columns: 1fr 1fr; }
    .arts-row { grid-template-columns: 1fr; }
    .opinion-band { grid-template-columns: 1fr; gap: 16px; }
    .opinion-label { writing-mode: initial; transform: none; }
    .section-nav { overflow-x: auto; justify-content: flex-start; }
  }
</style>

<!-- Top utility bar -->
<div class="topbar">
  <div class="topbar-nav">
    <a href="{base}/subscribe">Subscribe</a>
    <a href="{base}/edition">E-Edition</a>
  </div>
  <div>{today}</div>
  <div class="topbar-nav">
    <a href="{base}/about">About</a>
  </div>
</div>

<!-- Nameplate -->
<header class="nameplate">
  <div class="logo-lockup">
    <!-- SVG Logo Mark: a stylized compass/sun with initials -->
    <img src="{base}/images/TheGarlicLogo.png" alt="Garlic Logo" style="width:120px;height:120px;margin-top:-30px;margin-bottom:-30px;margin-right:-20px;" class="logo-mark">

    <div class="paper-name">The Garlic</div>
  </div>
  <div class="paper-tagline">Bias · No Context · Flawed · Est. 1967</div>
  <div class="nameplate-meta">
    <span>Vol. CXLI, No. 67</span>
    <span>One Of The Papers Of All Time</span>
    <span>Print Edition · $3,825.00</span>
  </div>
</header>

<!-- Section navigation -->
<nav class="section-nav">
  {#each ['World', 'Politics', 'Economy', 'Technology', 'Science', 'Culture', 'Opinion', 'Sports', 'Subscribe'] as s}
    <a href="{base}/{s.toLowerCase()}">{s}</a>
  {/each}
</nav>

<!-- Main content -->
<main class="wrapper">
  <div class="edition-label">Friday Morning Edition · Breaking News</div>
  <hr class="front-rule thick">

  <!-- Three-column lead -->
  <div class="top-grid">

    <!-- Left column: secondary story -->
    <div class="side-col">
      <div class="section-tag">{articles.secondary[0].tag}</div>
      <img src={articles.secondary[0].image} alt="" class="article-img tall">
      <h2 class="secondary-head">{articles.secondary[0].headline}</h2>
      <div class="byline">{articles.secondary[0].byline}<span>·</span>{articles.secondary[0].time}</div>
      <p class="body-text">{articles.secondary[0].summary}</p>
      <br>
      <a href="#" class="read-more">Continue Reading →</a>
    </div>

    <div class="col-divider"></div>

    <!-- Center: lead story -->
    <div class="lead-col">
      <div class="section-tag">{articles.lead.tag}</div>
      <img src={articles.lead.image} alt="" class="article-img">
      <h1 class="lead-head">{articles.lead.headline}</h1>
      <div class="byline">{articles.lead.byline}<span>·</span>{articles.lead.time}</div>
      <p class="body-text drop-cap">{articles.lead.summary}</p>
      <br>
      <a href="#" class="read-more">Read Full Story →</a>
    </div>

    <div class="col-divider"></div>

    <!-- Right column: secondary story + briefs preview -->
    <div class="side-col">
      <div class="section-tag">{articles.secondary[1].tag}</div>
      <img src={articles.secondary[1].image} alt="" class="article-img tall">
      <h2 class="secondary-head">{articles.secondary[1].headline}</h2>
      <div class="byline">{articles.secondary[1].byline}<span>·</span>{articles.secondary[1].time}</div>
      <p class="body-text">{articles.secondary[1].summary}</p>
      <br>
      <a href="#" class="read-more">Continue Reading →</a>
    </div>
  </div>

  <hr class="front-rule thick">

  <!-- News briefs strip -->
  <div class="briefs-strip">
    {#each articles.briefs as brief}
      <div class="brief-item">
        <div class="section-tag">{brief.tag}</div>
        <h3 class="brief-head"><a href="#" style="color:inherit;text-decoration:none;">{brief.headline}</a></h3>
        <div class="brief-time">{brief.time}</div>
      </div>
    {/each}
  </div>

  <!-- Opinion band -->
  <div class="opinion-band">
    <div class="opinion-label">Opinion</div>
    <div>
      <div class="section-tag" style="color:#c8956c;">{articles.opinion.tag}</div>
      <div class="opinion-head">"{articles.opinion.headline}"</div>
    </div>
    <div class="opinion-author">
      <strong>{articles.opinion.byline}</strong>
      {articles.opinion.role}
    </div>
  </div>

  <!-- Arts & Culture row -->
  <hr class="front-rule" style="border-color: var(--ink); border-width:1px; margin-bottom:20px;">
  <div class="edition-label" style="text-align:left; margin-bottom:12px;">Arts, Culture & Ideas</div>
  <div class="arts-row">
    {#each articles.arts as item}
      <div class="arts-item">
        <img src={item.image} alt="" class="arts-img">
        <div class="section-tag">{item.tag}</div>
        <h2 class="secondary-head" style="font-size:18px;">{item.headline}</h2>
        <a href="#" class="read-more">Read →</a>
      </div>
    {/each}
  </div>
</main>

<!-- Footer -->
<footer>
  <div class="footer-name">The Garlic</div>
  <div class="footer-links">
    {#each ['Home', 'About', 'Subscribe', 'Advertising', 'Contact', 'Privacy', 'Terms', 'Corrections'] as l}
      <a href="{base}/{l.toLowerCase()}">{l}</a>
    {/each}
  </div>
  <div class="footer-copy">© 2026 The Garlic Consuming Company. No rights reserved. Est. 1967.</div>
</footer>