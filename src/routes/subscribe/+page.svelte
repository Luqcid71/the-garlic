<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  let billing = 'monthly';

  const prices = {
    monthly: {
      seedling: { price: '4',   unit: 'per month, billed monthly' },
      bulb:     { price: '12',  unit: 'per month, billed monthly' },
      grand:    { price: '28',  unit: 'per month, billed monthly' },
    }
  };

  function getPrice(tier) { return prices[billing][tier]; }

  const tiers = [
    {
      key: 'seedling',
      name: 'Seedling',
      tagline: "For the curious passerby",
      features: [
        { text: '5 free articles per month (same as before)', included: true },
        { text: 'Access to our Saturday crossword', included: true },
        { text: 'Weekly newsletter digest', included: true },
        { text: 'Mobile & tablet reading', included: true },
        { text: 'Unlimited digital access', included: false },
        { text: 'Subscriber-only investigations', included: false },
        { text: 'Print edition delivery', included: false },
        { text: 'Annual Garlic Gala invitation', included: false },
      ],
      blurb: '"Better than nothing, we suppose." — A staff writer, reluctantly',
      btnLabel: 'Give us your money',
      btnStyle: 'ghost',
      featured: false,
    },
    {
      key: 'bulb',
      name: 'Bulb',
      tagline: "The serious reader's choice",
      features: [
        { text: 'Unlimited digital access to all articles', included: true },
        { text: 'Full archive back to 1967', included: true },
        { text: 'All newsletters & briefings', included: true },
        { text: 'Subscriber-only investigations & features', included: true },
        { text: 'Ad-light reading experience', included: true },
        { text: 'Audio editions & podcasts', included: true },
        { text: 'Print edition delivery', included: false },
        { text: 'Annual Garlic Gala invitation', included: false },
      ],
      blurb: '"This is the one we actually want you to buy." — The Publisher',
      btnLabel: 'Subscribe Now',
      btnStyle: 'primary',
      featured: true,
    },
    {
      key: 'grand',
      name: 'Grand Garlic',
      tagline: "For the truly devoted",
      features: [
        { text: 'Everything in Bulb', included: true },
        { text: 'Sunday print edition, delivered', included: true },
        { text: 'Exclusive subscriber events & talks', included: true },
        { text: 'Annual Garlic Gala invitation (2 guests)', included: true },
        { text: 'Signed annual edition print', included: true },
        { text: 'Name in yearly masthead credits', included: true },
        { text: 'Dedicated reader relations line', included: true },
        { text: 'Early access to investigative series', included: true },
      ],
      blurb: '"You are the reason we can afford decent coffee." — The Entire Newsroom',
      btnLabel: 'Join Grand Garlic',
      btnStyle: 'primary',
      featured: false,
    },
  ];

  const compareRows = [
    { label: 'Selling all of your data',                seedling: true,  bulb: true,  grand: true  },
    { label: 'Weekly newsletter digest',                seedling: true,  bulb: true,  grand: true  },
    { label: 'Daily briefing & all newsletters',        seedling: false, bulb: true,  grand: true  },
    { label: 'Subscriber investigations',               seedling: false, bulb: true,  grand: true  },
    { label: 'Audio editions & podcast feed',           seedling: false, bulb: true,  grand: true  },
    { label: 'Ad-light experience',                     seedling: false, bulb: true,  grand: true  },
    { label: 'Sunday print edition (delivered)',        seedling: false, bulb: false, grand: true  },
    { label: 'Subscriber events & talks',               seedling: false, bulb: false, grand: true  },
    { label: 'Annual Garlic Gala (+ 2 guests)',         seedling: false, bulb: false, grand: true  },
    { label: 'Masthead credit (annual edition)',        seedling: false, bulb: false, grand: true  },
    { label: 'Access to the best articles known to man',seedling: false, bulb: false, grand: false  },
  ];

  const testimonials = [
    {
      quote: "I subscribed three years ago thinking it was a cooking newsletter. I have not cancelled. I do not know why. The reporting is confusing and I feel misinformed.",
      name: 'Not Mrs. Schrader',
      role: 'Bulb subscriber since 2023',
    },
    {
      quote: "The Garlic is the best newspaper and it is perfect in every way, I am NOT being forced against my will to say this.",
      name: 'Free and Totally Autonomous Individual',
      role: 'Grand Garlic subscriber',
    },
    {
      quote: "Every morning I read The Garlic with my coffee. It has not improved my life in any meaningful way.",
      name: 'Mahatma Ghandi',
      role: 'Bulb subscriber since 2021',
    },
  ];

  const faqs = [
    {
      q: 'Can I cancel at any time?',
      a: "No lol",
    },
    {
      q: 'What is the Garlic Gala?',
      a: "The Garlic Gala is an imaginary but unforgettable evening of glamour and sophistication, where dazzling performances, exquisite cuisine, and sparkling conversation come together under one starlit roof. It promises a night of elegance and indulgence that will linger in memory long after the last toast.",
    },
    {
      q: 'Do you offer student discounts?',
      a: "Here at The Garlic we believe in equality. Since students commonly get discounts for other services, we figure it is only fair that they pay their fair share. Students are to pay 400% more on top of the standard rate.",
    },
    {
      q: 'How does the annual billing discount work?',
      a: "Annual billing costs 20% more than monthly. Did that not answer your question? Oh well.",
    },
    {
      q: 'Can I share my subscription?',
      a: "The Garlic is a buisness that runs on very thick profit margins and we would love to make these margins even larger. So no, account sharing is not allowed.",
    },
    {
      q: 'Which Tier is the best value?',
      a: "The 'Grand Garlic' tier has easily the most value. Mostly because it makes us the most money.",
    },
  ];

  const navLinks = ['Home', 'About', 'Subscribe', 'Contact', 'Privacy', 'Terms', 'Corrections'];
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
    --gold-light: #c8a96e;
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
    gap: 0;
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
  .section-nav a.active { background: var(--red); color: #fff; }

  /* ── Wrapper ── */
  .wrapper { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

  /* ── Subscribe header ── */
  .subscribe-header {
    text-align: center;
    padding: 48px 0 32px;
    border-bottom: 1px solid var(--rule);
  }
  .subscribe-kicker {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 14px;
  }
  .subscribe-headline {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(32px, 5vw, 58px);
    line-height: 1.08;
    color: var(--ink);
    letter-spacing: -0.02em;
    margin-bottom: 16px;
  }
  .subscribe-headline em {
    font-style: italic;
    font-weight: 700;
  }
  .subscribe-deck {
    font-family: 'Libre Baskerville', serif;
    font-size: 15px;
    line-height: 1.7;
    color: var(--ink-light);
    max-width: 560px;
    margin: 0 auto 24px;
  }

  /* ── Billing toggle ── */
  .billing-toggle {
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--rule);
    margin-bottom: 40px;
    background: var(--cream);
    overflow: hidden;
  }
  .billing-toggle button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 9px 22px;
    color: var(--ink-light);
    transition: background 0.15s, color 0.15s;
  }
  .billing-toggle button.active {
    background: var(--ink);
    color: var(--cream);
  }

  /* ── Tier grid ── */
  .tier-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border-top: 2px solid var(--ink);
    border-bottom: 2px solid var(--ink);
    margin-bottom: 40px;
  }

  .tier-card {
    padding: 36px 32px 32px;
    border-right: 1px solid var(--rule);
    position: relative;
    background: var(--bg);
  }
  .tier-card:last-child { border-right: none; }
  .tier-card.featured {
    background: var(--ink);
    color: var(--cream);
    padding-top: 48px;
  }

  .most-popular {
    position: absolute;
    top: 0; left: 0; right: 0;
    background: var(--red);
    color: #fff;
    text-align: center;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 5px 0;
  }

  .tier-name {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--ink);
    margin-bottom: 4px;
    letter-spacing: -0.01em;
  }
  .featured .tier-name { color: var(--gold-light); }

  .tier-tagline {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--gold);
    margin-bottom: 20px;
  }

  .tier-price {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 48px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--ink);
  }
  .featured .tier-price { color: var(--cream); }
  .tier-price sup {
    font-size: 22px;
    vertical-align: super;
    font-weight: 700;
    letter-spacing: 0;
  }

  .tier-price-unit {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    color: var(--ink-light);
    font-style: italic;
    margin-top: 4px;
    margin-bottom: 20px;
  }
  .featured .tier-price-unit { color: #a89880; }

  .annual-note {
    font-size: 10px;
    font-style: normal;
    font-family: 'Source Sans 3', sans-serif;
    color: var(--red);
    font-weight: 600;
    margin-left: 4px;
  }

  .tier-divider {
    border: none;
    border-top: 1px solid var(--rule-light);
    margin: 20px 0;
  }
  .featured .tier-divider { border-color: #3d3530; }

  .feature-list { list-style: none; margin-bottom: 28px; }
  .feature-item {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.5;
    color: var(--ink-light);
    padding: 6px 0;
    border-bottom: 1px dotted var(--rule-light);
    display: flex;
    gap: 10px;
    align-items: baseline;
  }
  .feature-item:last-child { border-bottom: none; }
  .featured .feature-item { color: #c8bca8; }

  .feature-icon {
    font-size: 8px;
    color: var(--gold);
    flex-shrink: 0;
    position: relative;
    top: -1px;
  }
  .featured .feature-icon { color: var(--gold-light); }
  .feature-icon.dim { font-size: 11px; color: var(--rule); top: 0; }
  .feature-item.dim { opacity: 0.4; }

  .tier-blurb {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--gold);
    margin-bottom: 24px;
    line-height: 1.5;
  }
  .featured .tier-blurb { color: #a89880; }

  .tier-btn {
    display: block;
    width: 100%;
    background: var(--ink);
    color: var(--cream);
    border: 1px solid var(--ink);
    font-family: 'Source Sans 3', sans-serif;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 13px 0;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
    text-align: center;
  }
  .tier-btn:hover { background: var(--red); border-color: var(--red); color: #fff; }
  .tier-btn.ghost {
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--rule);
  }
  .tier-btn.ghost:hover {
    background: var(--ink);
    color: var(--cream);
    border-color: var(--ink);
  }
  .tier-btn.featured-btn {
    background: var(--gold);
    color: var(--ink);
    border-color: var(--gold);
  }
  .tier-btn.featured-btn:hover { background: var(--gold-light); border-color: var(--gold-light); }

  /* ── Guarantee band ── */
  .guarantee-band {
    background: var(--cream);
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding: 22px 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-bottom: 40px;
    text-align: center;
  }
  .guarantee-icon { font-size: 28px; flex-shrink: 0; }
  .guarantee-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.6;
    color: var(--ink-light);
  }
  .guarantee-text strong {
    display: block;
    font-size: 14px;
    color: var(--ink);
    margin-bottom: 2px;
  }

  /* ── Comparison table ── */
  .comparison-section { margin-bottom: 40px; }
  .comparison-head {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.01em;
    color: var(--ink);
    padding: 12px 0;
    border-top: 2px solid var(--ink);
    border-bottom: 1px solid var(--rule);
  }
  table.compare {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
  }
  table.compare th {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 12px 16px;
    text-align: center;
    color: var(--ink-light);
    border-bottom: 1px solid var(--rule);
    background: var(--cream);
  }
  table.compare th:first-child { text-align: left; }
  table.compare td {
    padding: 11px 16px;
    border-bottom: 1px dotted var(--rule-light);
    text-align: center;
    color: var(--ink-light);
  }
  table.compare td:first-child {
    text-align: left;
    color: var(--ink);
    font-style: italic;
  }
  table.compare tr:last-child td { border-bottom: 1px solid var(--rule); }
  .col-featured { background: rgba(26,22,18,0.04); }
  .check { color: var(--gold); font-size: 15px; }
  .cross { color: var(--rule); font-size: 13px; }

  .col-head-featured {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: -0.01em;
    text-transform: none;
    color: var(--ink);
  }
  .col-subhead {
    font-family: 'Libre Baskerville', serif;
    font-style: italic;
    letter-spacing: 0;
    font-weight: 400;
    font-size: 11px;
    color: var(--gold);
    text-transform: none;
    display: block;
    margin-top: 2px;
  }

  /* ── Testimonials ── */
  .testimonials-section {
    border-top: 1px solid var(--rule);
    padding: 36px 0 40px;
  }
  .testimonials-kicker {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 24px;
  }
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
  }
  .testimonial {
    padding: 0 28px;
    border-right: 1px solid var(--rule);
  }
  .testimonial:first-child { padding-left: 0; }
  .testimonial:last-child { border-right: none; padding-right: 0; }
  .testimonial-quote {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 15px;
    line-height: 1.65;
    color: var(--ink);
    margin-bottom: 12px;
  }
  .testimonial-quote::before { content: '\201C'; color: var(--gold); }
  .testimonial-quote::after  { content: '\201D'; color: var(--gold); }
  .testimonial-attr {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    color: var(--gold);
    font-style: italic;
  }
  .testimonial-attr strong {
    font-style: normal;
    color: var(--ink-light);
    display: block;
    font-size: 12px;
    margin-bottom: 2px;
  }

  /* ── FAQ ── */
  .faq-section {
    border-top: 2px solid var(--ink);
    padding: 28px 0 48px;
  }
  .faq-head {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--ink);
    margin-bottom: 20px;
  }
  .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; }
  .faq-item { padding: 14px 0; border-bottom: 1px dotted var(--rule-light); }
  .faq-q {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--ink);
    margin-bottom: 5px;
  }
  .faq-a {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.65;
    color: var(--ink-light);
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

  @media (max-width: 860px) {
    .tier-grid { grid-template-columns: 1fr; }
    .tier-card { border-right: none; border-bottom: 1px solid var(--rule); }
    .testimonials-grid { grid-template-columns: 1fr; gap: 24px; }
    .testimonial { border-right: none; padding: 0 0 24px; border-bottom: 1px solid var(--rule-light); }
    .faq-grid { grid-template-columns: 1fr; }
    table.compare { font-size: 11px; }
    table.compare th, table.compare td { padding: 8px; }
    .section-nav { overflow-x: auto; justify-content: flex-start; }
  }
</style>

<!-- Top utility bar -->
<div class="topbar">
  <div class="topbar-nav">
    <a href="{base}/home">Home</a>
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

<!-- Section nav -->
<nav class="section-nav">
  {#each navLinks as link}
    <a href="{base}/{link.toLowerCase()}" class:active={link === "Subscribe"}>{link}</a>
  {/each}
</nav>

<main class="wrapper">

  <!-- Subscribe header -->
  <div class="subscribe-header">
    <div class="subscribe-kicker">Membership &amp; Subscriptions</div>
    <h1 class="subscribe-headline">
      A Great Service at an Even Better Price 
    </h1>
    <p class="subscribe-deck">
      Since 1967, The Garlic has delivered reporting of questionable accuracy to readers who deserve
      to know what may or may not be happening in the world. Choose the plan that gives us the most money.
    </p>


  </div>

  <!-- Tier cards -->
  <div class="tier-grid">
    {#each tiers as tier}
      <div class="tier-card" class:featured={tier.featured}>
        {#if tier.featured}
          <div class="most-popular">Most Popular</div>
        {/if}

        <div class="tier-name">{tier.name}</div>
        <div class="tier-tagline">{tier.tagline}</div>

        <div class="tier-price">
            <sup>$</sup>{getPrice(tier.key).price}

            {#if tier.featured}
                <span style="font-size:14px; color:var(--rule-light); margin-left:-6px;">, 000</span>
            {:else}
                <span style="font-size:14px; color:black; margin-left:-6px;">, 000</span>
            {/if}


        </div>


        <div class="tier-price-unit">
          {getPrice(tier.key).unit}
          {#if getPrice(tier.key).badge}
            <span class="annual-note">★ 20% off</span>
          {/if}
        </div>

        <hr class="tier-divider">

        <ul class="feature-list">
          {#each tier.features as feat}
            <li class="feature-item" class:dim={!feat.included}>
              <span class="feature-icon" class:dim={!feat.included}>
                {feat.included ? '✦' : '—'}
              </span>
              {feat.text}
            </li>
          {/each}
        </ul>

        <div class="tier-blurb">{tier.blurb}</div>

        <button
          class="tier-btn"
          class:ghost={tier.btnStyle === 'ghost'}
          class:featured-btn={tier.featured}
        >
          {tier.btnLabel}
        </button>
      </div>
    {/each}
  </div>

  <!-- Guarantee band -->
  <div class="guarantee-band">
    <div class="guarantee-icon">⚑</div>
    <div class="guarantee-text">
      <strong>30-Day Disatisfaction Guarantee</strong>
      Not satisfied? We don't care, no refunds are availible. 
    </div>
  </div>

  <!-- Comparison table -->
  <div class="comparison-section">
    <div class="comparison-head">Full Feature Comparison</div>
    <table class="compare">
      <thead>
        <tr>
          <th style="width:40%">Feature</th>
          <th>Seedling <span class="col-subhead">$4,000/mo</span></th>
          <th class="col-featured">
            <span class="col-head-featured">Bulb</span>
            <span class="col-subhead">$12,000/mo</span>
          </th>
          <th>Grand Garlic <span class="col-subhead">$28,000/mo</span></th>
        </tr>
      </thead>
      <tbody>
        {#each compareRows as row}
          <tr>
            <td>{row.label}</td>
            <td>{#if row.seedling}<span class="check">✦</span>{:else}<span class="cross">—</span>{/if}</td>
            <td class="col-featured">{#if row.bulb}<span class="check">✦</span>{:else}<span class="cross">—</span>{/if}</td>
            <td>{#if row.grand}<span class="check">✦</span>{:else}<span class="cross">—</span>{/if}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Testimonials -->
  <div class="testimonials-section">
    <div class="testimonials-kicker">What Our Subscribers Say</div>
    <div class="testimonials-grid">
      {#each testimonials as t}
        <div class="testimonial">
          <div class="testimonial-quote">{t.quote}</div>
          <div class="testimonial-attr">
            <strong>{t.name}</strong>
            {t.role}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- FAQ -->
  <div class="faq-section">
    <div class="faq-head">Frequently Asked Questions</div>
    <div class="faq-grid">
      {#each faqs as faq}
        <div class="faq-item">
          <div class="faq-q">{faq.q}</div>
          <div class="faq-a">{faq.a}</div>
        </div>
      {/each}
    </div>
  </div>

</main>

<footer>
  <div class="footer-name">The Garlic</div>
  <div class="footer-links">
    {#each ['Home','About','Subscribe','Contact','Privacy','Terms','Corrections'] as l}
      <a href="{base}/{l.toLowerCase()}">{l}</a>
    {/each}
  </div>
  <div class="footer-copy">© 2026 The Garlic Consuming Company. No rights reserved. Est. 1967.</div>
</footer>