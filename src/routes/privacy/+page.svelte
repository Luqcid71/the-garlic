<script>
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const navLinks = ['World','Politics','Economy','Technology','Science','Culture','Opinion','Sports'];
  const footerLinks = ['Home','About','Subscribe','Archive','Advertising','Contact','Privacy','Terms','Corrections'];

  let pageTitle = 'Privacy Policy';
  let pageKicker = 'Your Data & Ours';
  let activePage = '';

  const sections = [
    {
      heading: 'What We Collect',
      body: `When you visit The Garlic, we collect certain information about you. We collect it whether you consent or not, but we feel better when you consent, so we have built this page. Specifically, we collect your IP address, browser type, device information, pages visited, time spent on each page, and a general sense of who you are as a person. We do not collect your deepest fears, though our advertising partners have made enquiries.

If you create an account or subscribe, we also collect your name, email address, billing information, and reading habits. We find your reading habits particularly interesting. You have eclectic taste.`
    },
    {
      heading: 'How We Use It',
      body: `We use your information to provide, maintain, and improve our services — which is to say, to keep the website running and to ensure you continue receiving journalism of our particular quality. We also use it to send you newsletters you may or may not have requested, to personalise your experience in ways that benefit us more than you, and to comply with legal obligations we would rather not have.

We do not sell your personal data. We have been advised to say this clearly and without qualification. We are doing so now.`
    },
    {
      heading: 'Cookies',
      body: `The Garlic uses cookies. These are small text files placed on your device that allow us to remember you between visits, track your behaviour across the site, and, in the case of third-party advertising cookies, follow you around the internet with a persistence that some readers have described as "unsettling." We prefer the term "attentive."

You may disable cookies in your browser settings. If you do, some features of this site will not function correctly. We have listed those features elsewhere. We have not made that list easy to find.`
    },
    {
      heading: 'Third Parties',
      body: `We share data with a number of third-party service providers who assist us in operating this website, conducting our business, and servicing our readers. These parties are contractually obligated to keep your information confidential. We check on this periodically. Our last check was some time ago.

We may also share information when required by law, in response to valid legal process, or when we believe in good faith that disclosure is necessary to protect our rights, your safety, or the safety of others. We have not yet had occasion to invoke this clause, but we feel better having it here.`
    },
    {
      heading: 'Data Retention',
      body: `We retain your personal information for as long as your account is active, or as long as is necessary to provide you services, or as long as is required by law, whichever is longest. In practice, this means we keep your data for a very long time. If you would like us to delete it, please see the section below. We will comply within a reasonable timeframe, which we define at our own discretion.`
    },
    {
      heading: 'Your Rights',
      body: `Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data; to object to or restrict certain processing; to data portability; and to lodge a complaint with a supervisory authority. We support all of these rights in principle. To exercise them in practice, please contact our privacy desk using the address below. We respond to all requests in the order they are received, which is to say, eventually.`
    },
    {
      heading: 'Children',
      body: `The Garlic is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected information from a child, please contact us immediately. We will be surprised, and then we will address it.`
    },
    {
      heading: 'Changes to This Policy',
      body: `We may update this Privacy Policy from time to time. When we do, we will revise the date at the top of this page. We may or may not notify you of significant changes by email, depending on how significant we consider them to be, which may differ from your assessment. We encourage you to review this page periodically. We do not expect you to. But we encourage it.`
    },
    {
      heading: 'Contact',
      body: `Questions, concerns, or formal complaints regarding this Privacy Policy may be directed to our Privacy Desk at privacy@thegarlic.com. We read all correspondence. We do not always reply, but we read it. If you have not heard back within 30 days, please write again. We find the persistence endearing.`
    },
  ];

  const lastUpdated = 'March 1, 2026';
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

  .page-header {
    text-align: center;
    padding: 48px 0 36px;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 0;
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
    font-size: clamp(32px, 5vw, 58px);
    line-height: 1.08;
    color: var(--ink);
    letter-spacing: -0.02em;
    margin-bottom: 14px;
  }
  .page-meta {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--gold);
    letter-spacing: 0.04em;
  }

  /* ── Body layout ── */
  .policy-body {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 0;
    padding-bottom: 72px;
  }

  /* ── Sidebar ── */
  .policy-sidebar {
    padding: 32px 24px 0 0;
    border-right: 1px solid var(--rule);
  }
  .sidebar-label {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 14px;
  }
  .sidebar-nav { list-style: none; }
  .sidebar-nav li { border-bottom: 1px dotted var(--rule-light); }
  .sidebar-nav a {
    display: block;
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    font-style: italic;
    color: var(--ink-light);
    text-decoration: none;
    padding: 7px 0;
    transition: color 0.12s;
  }
  .sidebar-nav a:hover { color: var(--red); }

  .sidebar-notice {
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid var(--rule-light);
    background: var(--cream);
    padding: 16px;
    border-left: 2px solid var(--gold);
  }
  .sidebar-notice-head {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 8px;
  }
  .sidebar-notice p {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--ink-light);
    line-height: 1.6;
  }

  /* ── Main content ── */
  .policy-main { padding: 32px 0 0 40px; }

  .policy-intro {
    font-family: 'Libre Baskerville', serif;
    font-size: 15px;
    line-height: 1.75;
    color: var(--ink-light);
    font-style: italic;
    padding-bottom: 28px;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 32px;
  }
  .policy-intro::first-letter {
    float: left;
    font-family: 'Playfair Display', serif;
    font-size: 4.2em;
    line-height: 0.82;
    margin: 4px 8px 0 0;
    color: var(--ink);
    font-weight: 900;
    font-style: normal;
  }

  .policy-section { margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px dotted var(--rule-light); }
  .policy-section:last-child { border-bottom: none; }

  .policy-section-num {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 6px;
  }
  .policy-section-head {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--ink);
    letter-spacing: -0.01em;
    margin-bottom: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--rule-light);
  }
  .policy-section-body {
    font-family: 'Libre Baskerville', serif;
    font-size: 13.5px;
    line-height: 1.78;
    color: var(--ink-light);
  }
  .policy-section-body p + p { margin-top: 14px; }

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
    .policy-body { grid-template-columns: 1fr; }
    .policy-sidebar { border-right: none; border-bottom: 1px solid var(--rule); padding: 24px 0; }
    .policy-main { padding: 24px 0 0; }
    .section-nav { overflow-x: auto; justify-content: flex-start; }
  }
</style>

<!-- Top utility bar -->
<div class="topbar">
  <div class="topbar-nav">
    <a href="{base}/">Home</a>
    <a href="{base}/">E-Edition</a>
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
    <a href="{base}/{link.toLowerCase()}" class:active={link === activePage}>{link}</a>
  {/each}
</nav>

<main class="wrapper">

  <div class="page-header">
    <div class="page-kicker">{pageKicker}</div>
    <h1 class="page-title">{pageTitle}</h1>
    <div class="page-meta">Last updated: {lastUpdated} &nbsp;·&nbsp; Effective immediately, whether you like it or not</div>
  </div>

  <div class="policy-body">

    <!-- Sidebar -->
    <aside class="policy-sidebar">
      <div class="sidebar-label">In This Document</div>
      <ul class="sidebar-nav">
        {#each sections as sec, i}
          <li>
            <!-- <a href="{base}#{sec.heading.toLowerCase().replace(/\s+/g,'-')}">
              {sec.heading}
            </a> -->
          </li>
        {/each}
      </ul>

      <div class="sidebar-notice" style="margin-top:24px;">
        <div class="sidebar-notice-head">Plain English Summary</div>
        <p>We collect some data. We use it to run the site. We don't sell it. You can ask us to delete it. We will, eventually. That's broadly it.</p>
      </div>
    </aside>

    <!-- Policy text -->
    <div class="policy-main">

      <p class="policy-intro">
        The Garlic takes your privacy seriously. We take most things seriously — deadlines, editorial standards, the correct spelling of foreign dignitaries' names — with varying degrees of success. Privacy, however, we approach with genuine intention. The following document explains what information we collect, how we use it, and what rights you have with respect to it. We have attempted to write it in plain language. We have not entirely succeeded.
      </p>

      {#each sections as sec, i}
        <div class="policy-section" id={sec.heading.toLowerCase().replace(/\s+/g,'-')}>
          <div class="policy-section-num">Section {i + 1}</div>
          <div class="policy-section-head">{sec.heading}</div>
          <div class="policy-section-body">
            {#each sec.body.split('\n\n') as para}
              <p>{para}</p>
            {/each}
          </div>
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