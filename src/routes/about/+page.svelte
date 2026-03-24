<script>
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const navLinks = ['Home', 'About', 'Subscribe', 'Contact', 'Privacy', 'Terms', 'Corrections'];
  const footerLinks = ['Home','About','Subscribe','Contact','Privacy','Terms','Corrections'];

  const staff = [
    {
      department: 'Leadership',
      members: [
        { name: 'John Sullivan', role: 'Publisher', bio: 'Cornelius has led The Garlic since 2011, when he was appointed under circumstances he declines to discuss. He previously served as deputy editor for nine years and, before that, as a man who sent a great many strongly-worded letters to other newspapers.' },
        { name: 'Ben Coffee', role: 'Publisher', bio: 'Helena manages the day-to-day operations of the newsroom with a calm that colleagues describe as either admirable or deeply suspicious. She joined The Garlic in 2014 from a regional paper that no longer exists, for unrelated reasons.' },
        { name: 'Josh List', role: 'Editor', bio: 'Bertram oversees the business side of The Garlic, including advertising, subscriptions, and the annual Gala. He has strong opinions about the price of paper and shares them freely.' },
        { name: 'Ryan Blackburn', role: 'Editor', bio: 'Bertram oversees the business side of The Garlic, including advertising, subscriptions, and the annual Gala. He has strong opinions about the price of paper and shares them freely.' },
        { name: 'Craig Keyes', role: 'Field Editor', bio: 'Bertram oversees the business side of The Garlic, including advertising, subscriptions, and the annual Gala. He has strong opinions about the price of paper and shares them freely.' },
      ]
    },
    
   
  ];

  const timeline = [
    { year: '1967', event: "The Garlic is founded by John Sullivan, Josh List, Craig Keyes, Ben Coffee, and Ryan Blackburn. Starting in John's basement the first garlic issue sells 500 copies."},
    { year: '1974', event: 'The Garlic reaches 10,000 copies sold.' },
    { year: '1989', event: 'The Garlic Wins all of the journalism awards, staff celebrates.' },
    { year: '1998', event: 'The paper launches its first website, its the best, most beautiful website.' },
    { year: '2009', event: 'John Sullivan is born' },
    { year: '2011', event: 'The Garlic grows to be the most truthful, serious newspaper.' },
    { year: '2019', event: 'The website rises in popularity and would soon skyrocket due to COVID-19.' },
    { year: '2026', event: 'The Garlic is established.' },
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
    --gold-light: #c8a96e;
    --bg: #fbfaf7;
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
  .section-nav a.active { background: var(--red); color: #fff; }

  .wrapper { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

  /* ── Page header ── */
  .page-header {
    text-align: center;
    padding: 48px 0 40px;
    border-bottom: 1px solid var(--rule);
  }
  .page-kicker {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 14px;
  }
  .page-title {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(32px, 5vw, 64px);
    line-height: 1.05;
    color: var(--ink);
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }
  .page-title em { font-style: italic; font-weight: 700; }

  /* ── Mission band ── */
  .mission-band {
    background: var(--ink);
    color: var(--cream);
    padding: 44px 64px;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 2px 1fr;
    gap: 0 48px;
    align-items: start;
  }
  .mission-divider { background: #3d3530; }
  .mission-label {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-light);
    margin-bottom: 14px;
  }
  .mission-text {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: clamp(18px, 2.2vw, 24px);
    line-height: 1.5;
    color: #f0e8d8;
  }
  .mission-body {
    font-family: 'Libre Baskerville', serif;
    font-size: 13.5px;
    line-height: 1.78;
    color: #a89880;
  }
  .mission-body p + p { margin-top: 14px; }

  /* ── Stats strip ── */
  .stats-strip {
    background: var(--cream);
    border-bottom: 1px solid var(--rule);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
  }
  .stat-item {
    padding: 28px 24px;
    text-align: center;
    border-right: 1px solid var(--rule);
  }
  .stat-item:last-child { border-right: none; }
  .stat-number {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 42px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--ink);
  }
  .stat-label {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--gold);
    margin-top: 5px;
  }

  /* ── History section ── */
  .history-section {
    padding: 44px 0 40px;
    border-bottom: 1px solid var(--rule);
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 0 48px;
  }
  .history-label-col {
    padding-top: 4px;
  }
  .section-kicker {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 10px;
  }
  .section-heading {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 26px;
    color: var(--ink);
    line-height: 1.15;
    letter-spacing: -0.01em;
  }

  .timeline { list-style: none; }
  .timeline-item {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: 0 20px;
    padding: 14px 0;
    border-bottom: 1px dotted var(--rule-light);
    align-items: baseline;
  }
  .timeline-item:last-child { border-bottom: none; }
  .timeline-year {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--gold);
    text-align: right;
  }
  .timeline-event {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.65;
    color: var(--ink-light);
  }

  /* ── Staff section ── */
  .staff-section {
    padding: 44px 0 56px;
  }
  .staff-section-head {
    display: flex;
    align-items: baseline;
    gap: 16px;
    border-bottom: 2px solid var(--ink);
    padding-bottom: 10px;
    margin-bottom: 0;
  }

  .dept-block { margin-bottom: 8px; }
  .dept-head {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
    padding: 14px 0 10px;
    border-bottom: 1px solid var(--rule-light);
    margin-bottom: 0;
  }

  .staff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  .staff-item {
    padding: 20px 24px 20px 0;
    border-bottom: 1px dotted var(--rule-light);
    border-right: 1px solid transparent;
  }
  .staff-item:nth-child(even) {
    padding-left: 24px;
    padding-right: 0;
    border-left: 1px solid var(--rule-light);
  }
  .staff-name {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 17px;
    color: var(--ink);
    margin-bottom: 2px;
  }
  .staff-role {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--gold);
    margin-bottom: 10px;
  }
  .staff-bio {
    font-family: 'Libre Baskerville', serif;
    font-size: 12.5px;
    line-height: 1.7;
    color: var(--ink-light);
    font-style: italic;
  }

  /* ── Contact band ── */
  .contact-band {
    background: var(--cream);
    border-top: 1px solid var(--rule);
    border-bottom: 1px solid var(--rule);
    padding: 36px 48px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    margin-bottom: 0;
  }
  .contact-item {
    padding: 0 28px;
    border-right: 1px solid var(--rule);
    text-align: center;
  }
  .contact-item:first-child { padding-left: 0; text-align: left; }
  .contact-item:last-child { border-right: none; padding-right: 0; text-align: right; }
  .contact-label {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 6px;
  }
  .contact-value {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 15px;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .contact-sub {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--ink-light);
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
    .mission-band { grid-template-columns: 1fr; padding: 32px 24px; }
    .mission-divider { display: none; }
    .stats-strip { grid-template-columns: 1fr 1fr; }
    .history-section { grid-template-columns: 1fr; gap: 20px; }
    .staff-grid { grid-template-columns: 1fr; }
    .staff-item:nth-child(even) { padding-left: 0; border-left: none; }
    .contact-band { grid-template-columns: 1fr; gap: 24px; }
    .contact-item { border-right: none; text-align: left !important; padding: 0 0 20px; border-bottom: 1px solid var(--rule-light); }
    .contact-item:last-child { border-bottom: none; padding-bottom: 0; }
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
    <a href="{base}/subscribe">Subscribe</a>
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
    <a href="{base}/{link.toLowerCase()}" class:active={link.toLowerCase() === "about"}>{link}</a>
  {/each}
</nav>

<main>

  <!-- Page header -->
  <div class="wrapper">
    <div class="page-header">
      <div class="page-kicker">Est. 1967 · Independent Since Day One</div>
      <h1 class="page-title">About <em>The Garlic</em></h1>
    </div>
  </div>

  <!-- Mission band (full width) -->
  <div class="mission-band">
    <div>
      <div class="mission-label">Our Mission</div>
      <div class="mission-text">"To report the news with the accuracy we can manage and the conviction we cannot always justify."</div>
    </div>
    <div class="mission-divider"></div>
    <div>
      <div class="mission-label">Who We Are</div>
      <div class="mission-body">
        <p>The Garlic is the most accurate newspaper in today's age, founded by John Sullivan in 1967 for 59 years, The Garlic has delivered the truth to the public.</p>
        <p>The Garlic is an independent newspaper, we aren't owned by any corporation, we don't follow any political party, we just aim to deliver truthful journalism.</p>
        <p>We employ journalists across two different class periods, our goal is to deliver you a diverse selection of articles that are truthful and accurate.</p>
      </div>
    </div>
  </div>

  <!-- Stats strip -->
  <div class="stats-strip">
    <div class="stat-item">
      <div class="stat-number">59</div>
      <div class="stat-label">years in print</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">2.4m</div>
      <div class="stat-label">monthly readers</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">34</div>
      <div class="stat-label">staff journalists</div>
    </div>
    <div class="stat-item">
      <div class="stat-number">2</div>
      <div class="stat-label">journalism awards</div>
    </div>
  </div>

  <div class="wrapper">

    <!-- History -->
    <div class="history-section">
      <div class="history-label-col">
        <div class="section-kicker">Our History</div>
        <div class="section-heading">Nearly Six Decades of Getting It Mostly Right</div>
      </div>
      <ul class="timeline">
        {#each timeline as entry}
          <li class="timeline-item">
            <span class="timeline-year">{entry.year}</span>
            <span class="timeline-event">{entry.event}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Staff -->
    <div class="staff-section">
      <div class="staff-section-head">
        <div class="section-kicker" style="margin-bottom:0;">The Newsroom</div>
        <div class="section-heading" style="font-size:22px;">The People Behind The Paper</div>
      </div>

      {#each staff as dept}
        <div class="dept-block">
          <div class="dept-head">{dept.department}</div>
          <div class="staff-grid">
            {#each dept.members as person}
              <div class="staff-item">
                <div class="staff-name">{person.name}</div>
                <div class="staff-role">{person.role}</div>
                <div class="staff-bio">{person.bio}</div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

  </div>

  <!-- Contact band (full width) -->
  <div class="contact-band">
    <div class="contact-item">
      <div class="contact-label">General Enquiries</div>
      <div class="contact-value">hello@thegarlic.com</div>
      <div class="contact-sub">We read nothing. We reply to nothing, the email is fake</div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Newsroom</div>
      <div class="contact-value">14 Peel Street, Fourth Floor</div>
      <div class="contact-sub">Visitors by appointment only. We mean this.</div>
    </div>
    <div class="contact-item">
      <div class="contact-label">Press & Partnerships</div>
      <div class="contact-value">press@thegarlic.com</div>
      <div class="contact-sub">Also fake</div>
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