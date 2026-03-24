<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const articles = {
    lead: {
      tag: 'World Affairs',
      headline: 'U.N. Announces All Future Global Conflicts Will Be Settled On Massive Minecraft Server ',
      byline: 'By Craig Keyes',
      time: '6 hours ago',
      summary: 'World leaders from all nations convened in Geneva this week, emerging with a landmark accord that pledges eliminating all warring conflicts.',
      image: 'https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: "article/UN-announces-minecraft-server"
    },
    secondary: [
      {
        tag: 'Government',
        headline: 'Nation’s Group Chat Officially Declared Strongest Form Of Government ',
        byline: 'By Craig Keyes',
        time: '3 hours ago',
        summary: 'The US government has declared a group chat its most powerful body',
        image: 'https://images.unsplash.com/photo-1508433957232-3107f5fd5995?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: "article/nation-government"
      },
      {
        tag: 'Technology',
        headline: 'The Bleak Future of AI',
        byline: 'By Ben Coffee',
        time: '1 hour and 7 minutes ago',
        summary: 'Whistleblower gives a peek behind the curtains of a board of directors meeting at Meta',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
        link: 'article/the-bleak-future-of-ai'
      }
    ],
    briefs: [
      { tag: 'Technology', headline: 'How to Spot AI Generated Media', time: '5 hr ago', link: "how-to-spot-ai" },
      { tag: 'Culture', headline: 'Student Debt Rebranded as a Lifelong Hobby', time: '2 hrs ago', link: "student-debt-rebrand" },
      { tag: 'Government', headline: 'Senator Johnson Forced to Apologize for Calling Classmate “Mean” in Second Grade', time: '4 hrs ago', link: "senator-johnson" },
      { tag: 'Social', headline: 'Woman Solves Loneliness by Cutting Off Her Friends', time: '7 hrs ago', link: "Lonely-woman" },
    ],
    opinion: {
      tag: 'Opinion',
      headline: 'The Illusion of AI Neutrality and What We Owe Future Generations',
      byline: 'Eleanor Voss',
      role: 'Contributing Editor',
    },
    arts: [
      {
        tag: 'Science',
        headline: 'Genius Doctor Fixes All of Your Problems',
        image: base + '/images/josh_doctor.png',
        link: "genius-doctor"
      },
      {
        tag: 'Books',
        headline: 'Man Who Has Completed 867-Day Duolingo Streak Unable To Order Coffee In Mexico',
        image: base + '/images/josh_mexico.png',
        link: "duolingo-coffee"
      },
      {
        tag: 'Social',
        headline: 'Man Dies After Reading Misleading Headline!',
        image: base + "/images/joshfinal.png",
        link: "misleading-headline"
      }
    ],

    // ── NEW CONTENT ──

    indepth: [ // AKA SPORTS
      {
        headline: 'NBA 65-Game Rule Rebranded as “Participation Trophy Requirement”',
        byline: 'By Ryan Blackburn',
        time: '9 hours ago',
        summary: 'Downtown vacancy rates in twelve major cities have now exceeded levels unseen since the savings-and-loan crisis of the early nineties. What happens to a city when its center hollows out?',
        image: base + '/images/blackburn_2.jpg',
        link: 'article/65-game-rule'
      },
      {
        headline: `Man Who Paid $300 For Tickets Relieved Team Lost`,
        byline: 'By Josh List',
        time: '11 hours ago',
        summary: 'Local fan celebrates costly Jazz collapse as “big win” for tanking hopes, praising team for blowing a 31-point loss to boost draft odds.',
        image: base + '/images/josh_1.png',
        link: 'article/University-tuition-increase'
      }
    ],

  marketTicker: [
    { label: 'Trump Coin', value: '$100,234.56', change: '+0.50%', up: true },
    { label: 'Gasoline', value: '$12.34 / Gal', change: '+400%', up: true },
    { label: 'Iranian Oil', value: '$10000.78 / barrel', change: '+10000%', up: true },
    { label: 'DOW JONES', value: '∞', change: '+∞', up: true },
    { label: 'Bitcoin', value: '$15.0000000000', change: '+(-99.9785%)', up: true }
    ,
  ],

    business: [
      {
        tag: 'Economy',
        headline: 'Local University raises tuition $10,000 to “fund new student financial aid department”',
        byline: 'By Ben Coffee',
        time: '2 hours ago',
        summary: 'A local university has raised its tuition $10,000 at the massive benefit to the students.',
        link: 'article/University-tuition-increase'
      },
      {
        tag: 'Finance',
        headline: 'Walmart Offers a New "Arm and a Leg" Promotion ',
        byline: 'By John Sullivan',
        time: '4 hours ago',
        summary: 'Walmart has announced a new offering allowing customers to trade in an arm and a leg for discounts on their groceries.',
        link: 'article/walmart-arm-and-a-leg'
      },
      {
        tag: 'Economy',
        headline: 'World’s Billionaires Announce They Will Fix Everything, Just Need One More Trillion Dollars ',
        byline: 'By Craig Keyes',
        time: '6 hours ago',
        summary: 'Billionaires can solve our problems with a bold new plan',
        link: 'article/billionaires'
      },
    ],

    secondOpinion: {
      tag: 'Opinion',
      headline: 'I Let an Algorithm Plan My Entire Life for Six Months. It Scheduled Me Out of Existence.',
      byline: 'Randolph T. Marsh',
      role: 'Staff Correspondent',
    },

    scienceHealth: [
      {
        tag: 'Science',
        headline: 'New Study Finds Coffee Both Causes and Cures Everything',
        byline: 'By Dr. Simone Achebe',
        time: '1 hour ago',
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80'
      },
      {
        tag: 'Health',
        headline: 'Doctors Recommend Eight Hours of Sleep, Unaware Most People Have Jobs',
        byline: 'By Margaux Petit',
        time: '3 hours ago',
        image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=400&q=80'
      },
      {
        tag: 'Environment',
        headline: 'Scientists Achieve Breakthrough in Carbon Capture Using Only Existential Dread',
        byline: 'By Wei-Lin Sato',
        time: '5 hours ago',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=400&q=80'
      },
      {
        tag: 'Space',
        headline: 'Webb Telescope Photographs Something Astronomers Describe as "Deeply Concerning"',
        byline: 'By B. Kowalski',
        time: '8 hours ago',
        image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=80'
      },
    ],
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

  .logo-mark { width: 60px; height: 60px; flex-shrink: 0; }

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
  .article-img.wide { aspect-ratio: 16/9; }

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

  .arts-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    margin-bottom: 28px;
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

  /* ── Section heading band ── */
  .section-heading-band {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 28px 0 20px;
  }
  .section-heading-band h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 13px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink);
    white-space: nowrap;
  }
  .section-heading-band .rule-line {
    flex: 1;
    height: 1px;
    background: var(--rule);
  }

  /* ── In Depth two-column ── */
  .indepth-grid {
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    gap: 0;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 28px;
  }
  .indepth-item { padding: 0 28px; }
  .indepth-item:first-child { padding-left: 0; }
  .indepth-item:last-child { padding-right: 0; }

  .kicker {
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    font-style: italic;
    color: var(--gold);
    border-left: 2px solid var(--gold);
    padding-left: 8px;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  /* ── Market ticker ── */
  .market-ticker {
    background: var(--cream);
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding: 10px 0;
    display: flex;
    gap: 0;
    margin-bottom: 28px;
    overflow-x: auto;
  }
  .ticker-item {
    flex: 1;
    min-width: 140px;
    padding: 0 20px;
    border-right: 1px solid var(--rule-light);
    text-align: center;
  }
  .ticker-item:last-child { border-right: none; }
  .ticker-label {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--ink-light);
    margin-bottom: 2px;
  }
  .ticker-value {
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    font-weight: 700;
    color: var(--ink);
  }
  .ticker-change {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    margin-top: 1px;
  }
  .ticker-change.up { color: #2e7d32; }
  .ticker-change.down { color: var(--red); }

  /* ── Business three-column ── */
  .business-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 28px;
  }
  .business-item {
    padding: 0 24px;
    border-right: 1px solid var(--rule);
  }
  .business-item:first-child { padding-left: 0; }
  .business-item:last-child { border-right: none; padding-right: 0; }

  /* ── Science/Health four-column ── */
  .science-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 32px;
  }
  .science-item {
    padding: 0 18px;
    border-right: 1px solid var(--rule);
  }
  .science-item:first-child { padding-left: 0; }
  .science-item:last-child { border-right: none; padding-right: 0; }
  .science-img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: cover;
    display: block;
    margin-bottom: 8px;
    filter: grayscale(20%);
  }

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
    .indepth-grid { grid-template-columns: 1fr; }
    .indepth-item { padding: 0 0 20px; }
    .business-grid { grid-template-columns: 1fr; }
    .business-item { padding: 0 0 20px; border-right: none; border-bottom: 1px solid var(--rule); }
    .science-grid { grid-template-columns: 1fr 1fr; }
    .science-item { padding: 0 12px 20px; }
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
  {#each ['Home', 'About', 'Subscribe', 'Contact', 'Privacy', 'Terms', 'Corrections'] as l}
    <a href="{base}/{l.toLowerCase()}">{l}</a>
  {/each}
</nav>

<!-- Main content -->
<main class="wrapper">
  <div class="edition-label">Garlic Bread Edition · Breaking News</div>
  <hr class="front-rule thick">

  <!-- Three-column lead -->
  <div class="top-grid">
    <div class="side-col">
      <div class="section-tag">{articles.secondary[0].tag}</div>
      <img src={articles.secondary[0].image} alt="" class="article-img tall">
      <h2 class="secondary-head">{articles.secondary[0].headline}</h2>
      <div class="byline">{articles.secondary[0].byline}<span>·</span>{articles.secondary[0].time}</div>
      <p class="body-text">{articles.secondary[0].summary}</p>
      <br>
      <a href="{base}/{articles.secondary[0].link}" class="read-more">Continue Reading →</a>
    </div>

    <div class="col-divider"></div>

    <div class="lead-col">
      <div class="section-tag">{articles.lead.tag}</div>
      <img src={articles.lead.image} alt="" class="article-img">
      <h1 class="lead-head">{articles.lead.headline}</h1>
      <div class="byline">{articles.lead.byline}<span>·</span>{articles.lead.time}</div>
      <p class="body-text drop-cap">{articles.lead.summary}</p>
      <br>
      <a href="{base}/{articles.lead.link}" class="read-more">Read Full Story →</a>
    </div>

    <div class="col-divider"></div>

    <div class="side-col">
      <div class="section-tag">{articles.secondary[1].tag}</div>
      <img src={articles.secondary[1].image} alt="" class="article-img tall">
      <h2 class="secondary-head">{articles.secondary[1].headline}</h2>
      <div class="byline">{articles.secondary[1].byline}<span>·</span>{articles.secondary[1].time}</div>
      <p class="body-text">{articles.secondary[1].summary}</p>
      <br>
      <a href="{base}/{articles.secondary[1].link}" class="read-more">Continue Reading →</a>
    </div>
  </div>

  <hr class="front-rule thick">

  <!-- News briefs strip -->
  <div class="briefs-strip">
    {#each articles.briefs as brief}
      <div class="brief-item">
        <div class="section-tag">{brief.tag}</div>
        <h3 class="brief-head"><a href="{base}/article/{brief.link}" style="color:inherit;text-decoration:none;">{brief.headline}</a></h3>
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

  <!-- Arts row -->
  <hr class="front-rule" style="border-color: var(--ink); border-width:1px; margin-bottom:20px;">
  <div class="arts-row">
    {#each articles.arts as item}
      <div class="arts-item">
        <img src={item.image} alt="" class="arts-img">
        <div class="section-tag">{item.tag}</div>
        <h2 class="secondary-head" style="font-size:18px;">{item.headline}</h2>
        <a href={base + "/article/" + item.link} class="read-more">Read →</a>
      </div>
    {/each}
  </div>

  <!-- ── SPORTS ── -->
  <div class="section-heading-band">
    <h2>Sports — Basketball</h2>
    <div class="rule-line"></div>
  </div>

  <div class="indepth-grid">
    {#each articles.indepth as item}
      <div class="indepth-item">
        <img src={item.image} alt="" class="article-img wide">
        <h2 class="secondary-head" style="font-size: clamp(20px, 2.2vw, 28px); margin-bottom: 12px;">{item.headline}</h2>
        <div class="byline">{item.byline}<span>·</span>{item.time}</div>
        <p class="body-text">{item.summary}</p>
        <br>
        <a href="{base}/{item.link}" class="read-more">Read Full Story →</a>
      </div>
      {#if item !== articles.indepth[articles.indepth.length - 1]}
        <div class="col-divider"></div>
      {/if}
    {/each}
  </div>

  <!-- ── MARKETS TICKER ── -->
  <div class="market-ticker">
    {#each articles.marketTicker as t}
      <div class="ticker-item">
        <div class="ticker-label">{t.label}</div>
        <div class="ticker-value">{t.value}</div>
        <div class="ticker-change {t.up ? 'up' : 'down'}">{t.change}</div>
      </div>
    {/each}
  </div>

  <!-- ── BUSINESS ── -->
  <div class="section-heading-band">
    <h2>Business & Finance</h2>
    <div class="rule-line"></div>
  </div>

  <div class="business-grid">
    {#each articles.business as item}
      <div class="business-item">
        <div class="section-tag">{item.tag}</div>
        <h2 class="secondary-head" style="font-size:19px;">{item.headline}</h2>
        <div class="byline">{item.byline}<span>·</span>{item.time}</div>
        <p class="body-text">{item.summary}</p>
        <br>
        <a href="{base}/{item.link}" class="read-more">Read →</a>
      </div>
    {/each}
  </div>

  <!-- ── SECOND OPINION BAND ── -->
  <div class="opinion-band" style="margin-bottom: 28px;">
    <div class="opinion-label">Opinion</div>
    <div>
      <div class="section-tag" style="color:#c8956c;">{articles.secondOpinion.tag}</div>
      <div class="opinion-head">"{articles.secondOpinion.headline}"</div>
    </div>
    <div class="opinion-author">
      <strong>{articles.secondOpinion.byline}</strong>
      {articles.secondOpinion.role}
    </div>
  </div>

  <!-- ── SCIENCE & HEALTH ── --> 
  <!-- Commenting this out because we probably dont need it 
   <div class="section-heading-band">
    <h2>Science, Health & Environment</h2>
    <div class="rule-line"></div>
  </div>

  <div class="science-grid">
    {#each articles.scienceHealth as item}
      <div class="science-item">
        <img src={item.image} alt="" class="science-img">
        <div class="section-tag">{item.tag}</div>
        <h3 class="brief-head" style="font-size:15px; margin-bottom:8px;">{item.headline}</h3>
        <div class="byline">{item.byline}<span>·</span>{item.time}</div>
        <a href="#" class="read-more">Read →</a>
      </div>
    {/each}
  </div> -->

</main>

<!-- Footer -->
<footer>
  <div class="footer-name">The Garlic</div>
  <div class="footer-links">
    {#each ['Home', 'About', 'Subscribe', 'Contact', 'Privacy', 'Terms', 'Corrections'] as l}
      <a href="{base}/{l.toLowerCase()}">{l}</a>
    {/each}
  </div>
  <div class="footer-copy">© 2026 The Garlic Consuming Company. No rights reserved. Est. 1967.</div>
</footer>