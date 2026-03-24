<script>
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const navLinks = ['Home', 'About', 'Subscribe', 'Contact', 'Privacy', 'Terms', 'Corrections']
  const footerLinks = ['Home','About','Subscribe','Contact','Privacy','Terms','Corrections'];

  const article = {
    section: 'World Affairs',
    headline: 'Global Summit Reaches Historic Climate Agreement After Three Days of Negotiations',
    subhead: 'World leaders emerge from Geneva with a binding accord and a $500 billion fund, though delegates remain divided on what, precisely, they agreed to.',
    byline: 'Margaret Holloway',
    role: 'Senior Correspondent, Geneva',
    date: 'March 13, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80',
    imageCaption: 'Delegates gather outside the Palais des Nations following the conclusion of talks. Several appeared relieved. One did not.',
    imageCredit: 'Photo: Reuters',
    body: `World leaders from 47 nations convened in Geneva this week, emerging with a landmark accord that pledges binding emissions reductions and establishes a $500 billion fund for climate adaptation in developing nations. The agreement, reached in the early hours of Thursday morning after a third consecutive night of negotiations, was described by participants as "historic," "significant," and, in one case, "better than nothing, frankly."

The accord commits signatories to reducing carbon emissions by 45 percent relative to 2005 levels by the year 2035. Independent analysts have described this target as ambitious, achievable, and, depending on which analyst you consult, either both or neither of those things. A separate provision establishes an international oversight body, the structure and authority of which will be determined at a future summit, date to be confirmed.

The $500 billion adaptation fund, intended to assist lower-income nations in managing the effects of climate change already underway, was the most contentious element of the negotiations. Wealthier nations agreed to the figure on the condition that disbursement mechanisms remain subject to annual review. Poorer nations agreed to this condition on the understanding that they had little choice. Several delegates were observed eating pastries during this portion of the talks, which observers interpreted variously as a sign of relaxed confidence or acute stress.

Not all nations signed without reservation. Three countries attached formal addenda to their accords, the contents of which have not been released. A fourth country submitted what a spokesperson described as "a note of general enthusiasm," which legal experts say carries no binding weight but is, they allowed, a nice gesture.

The agreement now passes to individual national legislatures for ratification, a process expected to take between six months and several years, depending on which country and how recently there has been an election. The next full summit is scheduled for 2028, in a city that has not yet been selected but will almost certainly have good coffee.`
  };

  const recommended = [
    {
      section: 'Economy',
      headline: 'Federal Reserve Signals Pause on Rate Hikes Amid Cooling Inflation Data',
      byline: 'Thomas Aldridge',
      time: '3 hours ago',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80',
      url: 'article/placeholder'
    },
    {
      section: 'Technology',
      headline: "Silicon Valley's Biggest IPO in a Decade Raises Questions About AI Valuations",
      byline: 'Priya Nair',
      time: '5 hours ago',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80',
      url: 'article/placeholder'
    },
    {
      section: 'Science',
      headline: 'Mars Rover Discovers Organic Compounds in Ancient Lakebed Sediments',
      byline: 'D. Osei',
      time: '4 hours ago',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=80',
      url: 'article/placeholder'
    },
  ];
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@300;400;600&display=swap');

  :global(*) { box-sizing: border-box; margin: 0; padding: 0; }
  :global(body) {
    background: #fbfaf7;
    color: #1a1612;
    font-family: 'Source Sans 3', sans-serif;
  }

  :root {
    --cream: #f5f0e8;
    --ink: #1a1612;
    --ink-light: #3d3530;
    --rule: #b8a898;
    --rule-light: #d8cfbf;
    --red: #c0392b;
    --gold: #9a7d4a;
    --bg: #fbfaf7;
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

  /* ── Wrapper ── */
  .wrapper { max-width: 900px; margin: 0 auto; padding: 0 24px; }

  /* ── Article header ── */
  .article-header {
    padding: 40px 0 28px;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 32px;
    text-align: center;
  }
  .section-tag {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 16px;
    display: block;
  }
  .article-headline {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(28px, 4.5vw, 52px);
    line-height: 1.1;
    color: var(--ink);
    letter-spacing: -0.02em;
    margin-bottom: 18px;
    max-width: 760px;
    margin-left: auto;
    margin-right: auto;
  }
  .article-subhead {
    font-family: 'Libre Baskerville', serif;
    font-size: 16px;
    font-style: italic;
    line-height: 1.6;
    color: var(--ink-light);
    max-width: 640px;
    margin: 0 auto 24px;
  }
  .article-meta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    color: var(--ink-light);
    flex-wrap: wrap;
  }
  .article-meta .byline-name {
    font-style: normal;
    font-weight: 700;
    color: var(--ink);
  }
  .article-meta .sep { color: var(--rule); }
  .article-meta .role { font-style: italic; }
  .article-meta .date { font-style: italic; }
  .article-meta .read-time {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--gold);
  }

  /* ── Article image ── */
  .article-image-wrap { margin-bottom: 32px; }
  .article-image {
    width: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(8%);
  }
  .image-caption-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 8px 0;
    border-bottom: 1px solid var(--rule-light);
    gap: 16px;
  }
  .image-caption {
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    font-style: italic;
    color: var(--ink-light);
    line-height: 1.5;
  }
  .image-credit {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--rule);
    flex-shrink: 0;
  }

  /* ── Article body ── */
  .article-body {
    max-width: 640px;
    margin: 0 auto 48px;
  }
  .article-body p {
    font-family: 'Libre Baskerville', serif;
    font-size: 15px;
    line-height: 1.82;
    color: var(--ink-light);
    margin-bottom: 22px;
  }
  .article-body p:first-child::first-letter {
    float: left;
    font-family: 'Playfair Display', serif;
    font-size: 4.4em;
    line-height: 0.82;
    margin: 5px 8px 0 0;
    color: var(--ink);
    font-weight: 900;
  }

  /* ── Recommended ── */
  .recommended-section {
    border-top: 2px solid var(--ink);
    padding: 28px 0 64px;
  }
  .recommended-head {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
  }
  .recommended-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
  .rec-item {
    padding: 0 24px;
    border-right: 1px solid var(--rule);
  }
  .rec-item:first-child { padding-left: 0; }
  .rec-item:last-child { border-right: none; padding-right: 0; }
  .rec-image {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
    display: block;
    filter: grayscale(12%);
    margin-bottom: 12px;
  }
  .rec-section {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 6px;
  }
  .rec-headline {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: var(--ink);
    margin-bottom: 8px;
    text-decoration: none;
    display: block;
  }
  .rec-headline:hover { color: var(--red); }
  .rec-meta {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--rule);
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

  @media (max-width: 720px) {
    .recommended-grid { grid-template-columns: 1fr; gap: 24px; }
    .rec-item { border-right: none; padding: 0 0 24px; border-bottom: 1px solid var(--rule-light); }
    .rec-item:last-child { border-bottom: none; }
    .section-nav { overflow-x: auto; justify-content: flex-start; }
  }
</style>

<!-- Top bar -->
<div class="topbar">
  <div class="topbar-nav">
    <a href="{base}/">Home</a>
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
    <img src="{base}/images/TheGarlicLogo.png" alt="Garlic Logo" style="width:120px;height:120px;margin-top:-30px;margin-bottom:-30px;margin-right:-20px;">
    <div class="paper-name">The Garlic</div>
  </div>
  <div class="paper-tagline">Bias · No Context · Flawed · Est. 1967</div>
  <div class="nameplate-meta">
    <span>Vol. CXLI, No. 67</span>
    <span>One Of The Papers Of All Time</span>
    <span>Print Edition · $3,825.00</span>
  </div>
</header>

<!-- Nav -->
<nav class="section-nav">
  {#each navLinks as link}
    <a href="{base}/{link.toLowerCase()}">{link}</a>
  {/each}
</nav>

<main class="wrapper">

  <!-- Article header -->
  <div class="article-header">
    <span class="section-tag">{article.section}</span>
    <h1 class="article-headline">{article.headline}</h1>
    <p class="article-subhead">{article.subhead}</p>
    <div class="article-meta">
      <span class="byline-name">By {article.byline}</span>
      <span class="sep">·</span>
      <span class="role">{article.role}</span>
      <span class="sep">·</span>
      <span class="date">{article.date}</span>
      <span class="sep">·</span>
      <span class="read-time">{article.readTime}</span>
    </div>
  </div>

  <!-- Image -->
  <div class="article-image-wrap">
    <img src={article.image} alt={article.imageCaption} class="article-image">
    <div class="image-caption-row">
      <span class="image-caption">{article.imageCaption}</span>
      <span class="image-credit">{article.imageCredit}</span>
    </div>
  </div>

  <!-- Body -->
  <div class="article-body">
    {#each article.body.split('\n\n') as para}
      <p>{para}</p>
    {/each}
  </div>

  <!-- Recommended -->
  <div class="recommended-section">
    <div class="recommended-head">Continue Reading</div>
    <div class="recommended-grid">
      {#each recommended as rec}
        <div class="rec-item">
          <img src={rec.image} alt={rec.headline} class="rec-image">
          <div class="rec-section">{rec.section}</div>
          <a href={base}/{rec.url} class="rec-headline">{rec.headline}</a>
          <div class="rec-meta">{rec.byline} · {rec.time}</div>
        </div>
      {/each}
    </div>
  </div>

</main>

<footer>
  <div class="footer-name">The Garlic</div>
  <div class="footer-links">
    {#each footerLinks as l}
      <a href="{base}/{l.toLowerCase()}">{l}</a>
    {/each}
  </div>
  <div class="footer-copy">© 2026 The Garlic Consuming Company. No rights reserved. Est. 1967.</div>
</footer>