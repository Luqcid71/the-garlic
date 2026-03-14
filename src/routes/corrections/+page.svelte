<script>
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const navLinks = ['World','Politics','Economy','Technology','Science','Culture','Opinion','Sports','Subscribe'];
  const footerLinks = ['Home','About','Subscribe','Advertising','Contact','Privacy','Terms','Corrections'];

  let pageTitle = 'Corrections';
  let pageKicker = 'Accountability & Rectification';
  let activePage = '';

  const corrections = [
    {
      section: 'World Affairs',
      items: [
        {
          date: 'March 11, 2026',
          article: 'Global Summit Reaches Historic Climate Agreement',
          error: 'An earlier version of this article stated that 47 nations signed the accord. The correct number is 46. The 47th nation, which we described as "enthusiastic," had in fact sent a delegate to the wrong building entirely and signed a catering contract.',
        },
        {
          date: 'March 9, 2026',
          article: 'Tensions Rise Along Northern Border',
          error: 'We referred to the Ambassador as "visibly agitated." He was eating a lemon. We regret the characterisation.',
        },
      ]
    },
    {
      section: 'Economy',
      items: [
        {
          date: 'March 10, 2026',
          article: 'Federal Reserve Signals Pause on Rate Hikes',
          error: 'A chart accompanying this article transposed the axes, suggesting that inflation had risen to 4,000%. It had not. The correct figure is 2.4%. We apologise to anyone who made financial decisions in the intervening 11 minutes before the correction was issued.',
        },
        {
          date: 'March 7, 2026',
          article: 'Markets Close at Record High',
          error: 'This article was published before markets closed. They did not close at a record high. They closed down 1.3%. We stand by the headline in spirit.',
        },
      ]
    },
    {
      section: 'Technology',
      items: [
        {
          date: 'March 8, 2026',
          article: "Silicon Valley's Biggest IPO in a Decade",
          error: 'We described the company\'s valuation as "$140 billion." The correct figure is $14 billion. The extra zero was introduced by a staff member who, when asked about it, said "it felt right." He no longer works here in the same capacity.',
        },
      ]
    },
    {
      section: 'Culture',
      items: [
        {
          date: 'March 6, 2026',
          article: 'A Museum Reopens, Transformed',
          error: 'We stated the museum\'s new east wing was "three storeys tall." It is one storey tall. Our reporter was, we have since learned, standing in a very large atrium.',
        },
        {
          date: 'March 4, 2026',
          article: 'Cannes Jury Awards Palme d\'Or',
          error: 'The director we described as making her "debut feature" has in fact made eleven films. We are not sure how this happened. We have subscribed to her back catalogue as penance.',
        },
      ]
    },
  ];

  let formName = '';
  let formEmail = '';
  let formArticle = '';
  let formError = '';
  let formSubmitted = false;

  function handleSubmit() {
    if (!formArticle.trim() || !formError.trim()) return;
    formSubmitted = true;
  }
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
    margin-bottom: 16px;
  }
  .page-deck {
    font-family: 'Libre Baskerville', serif;
    font-size: 14px;
    line-height: 1.7;
    color: var(--ink-light);
    font-style: italic;
    max-width: 580px;
    margin: 0 auto;
  }

  /* ── Corrections layout ── */
  .corrections-body {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 0;
    padding-bottom: 64px;
  }

  .corrections-sidebar {
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

  .sidebar-count {
    margin-top: 24px;
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    font-weight: 900;
    color: var(--ink);
    line-height: 1;
  }
  .sidebar-count-label {
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    font-style: italic;
    color: var(--gold);
    margin-top: 4px;
  }

  .corrections-main { padding: 32px 0 0 36px; }

  /* ── Section group ── */
  .correction-group { margin-bottom: 36px; }
  .group-head {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
    padding-bottom: 8px;
    border-bottom: 2px solid var(--ink);
    margin-bottom: 0;
  }

  /* ── Individual correction ── */
  .correction-item {
    padding: 18px 0;
    border-bottom: 1px dotted var(--rule-light);
  }
  .correction-item:last-child { border-bottom: none; }

  .correction-meta {
    display: flex;
    gap: 14px;
    align-items: baseline;
    margin-bottom: 6px;
  }
  .correction-date {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    flex-shrink: 0;
  }
  .correction-article {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 14px;
    color: var(--ink);
  }
  .correction-text {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.72;
    color: var(--ink-light);
  }
  .correction-text::before {
    content: 'Correction: ';
    font-weight: 700;
    font-style: normal;
    color: var(--ink);
  }

  /* ── Submission form ── */
  .form-section {
    border-top: 2px solid var(--ink);
    padding: 36px 0 64px;
  }
  .form-head {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: 26px;
    color: var(--ink);
    letter-spacing: -0.01em;
    margin-bottom: 6px;
  }
  .form-deck {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    font-style: italic;
    color: var(--ink-light);
    margin-bottom: 28px;
    line-height: 1.6;
  }
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 32px;
    max-width: 720px;
  }
  .form-field { display: flex; flex-direction: column; gap: 5px; }
  .form-field.full { grid-column: 1 / -1; }
  .form-label {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--ink-light);
  }
  .form-input, .form-textarea {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    color: var(--ink);
    background: var(--cream);
    border: 1px solid var(--rule);
    padding: 9px 12px;
    outline: none;
    transition: border-color 0.15s;
    width: 100%;
  }
  .form-input:focus, .form-textarea:focus { border-color: var(--ink); }
  .form-textarea { resize: vertical; min-height: 100px; }
  .form-submit {
    margin-top: 8px;
    background: var(--ink);
    color: var(--cream);
    border: 1px solid var(--ink);
    font-family: 'Source Sans 3', sans-serif;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 600;
    padding: 12px 32px;
    cursor: pointer;
    transition: background 0.15s;
  }
  .form-submit:hover { background: var(--red); border-color: var(--red); }

  .form-success {
    background: var(--cream);
    border-left: 3px solid var(--gold);
    padding: 18px 22px;
    max-width: 520px;
  }
  .form-success-head {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 16px;
    color: var(--ink);
    margin-bottom: 6px;
  }
  .form-success-body {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    font-style: italic;
    color: var(--ink-light);
    line-height: 1.6;
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
    .corrections-body { grid-template-columns: 1fr; }
    .corrections-sidebar { border-right: none; border-bottom: 1px solid var(--rule); padding: 24px 0; }
    .corrections-main { padding: 24px 0 0; }
    .form-grid { grid-template-columns: 1fr; }
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
    <a href="{base}/{link.toLowerCase()}" class:active={link === activePage}>{link}</a>
  {/each}
</nav>

<main class="wrapper">

  <!-- Page header -->
  <div class="page-header">
    <div class="page-kicker">{pageKicker}</div>
    <h1 class="page-title">{pageTitle}</h1>
    <p class="page-deck">
      The Garlic is committed to accuracy, but we also know that we don't make mistakes.
      If you think we've made a mistake, please know you're wrong. You can fill out the
      form below, but please know it doesn't do anything. We just want you to feel like you did something.
    </p>
  </div>



  <!-- Submission form -->
  <div class="form-section" id="submit">
    <div class="form-head">Submit a Correction</div>
    <p class="form-deck">
      Spotted an error? We welcome your scrutiny. All submissions are reviewed by our corrections
      desk, which is staffed by one person who is doing their best.
    </p>

    {#if formSubmitted}
      <div class="form-success">
        <div class="form-success-head">Thank you for your submission.</div>
        <div class="form-success-body">
          We have received your correction and will review it in due course.
          If we agree with you, we will say so. If we do not agree with you,
          we will also say so, but more quietly.
        </div>
      </div>
    {:else}
      <div class="form-grid">
        <div class="form-field">
          <label class="form-label" for="name">Your Name</label>
          <input class="form-input" id="name" type="text" placeholder="Optional" bind:value={formName}>
        </div>
        <div class="form-field">
          <label class="form-label" for="email">Email Address</label>
          <input class="form-input" id="email" type="email" placeholder="So we can fill your inbox with spam" bind:value={formEmail}>
        </div>
        <div class="form-field full">
          <label class="form-label" for="article">Article Title or URL</label>
          <input class="form-input" id="article" type="text" placeholder="Which article contains the error?" bind:value={formArticle}>
        </div>
        <div class="form-field full">
          <label class="form-label" for="error">Describe the Error</label>
          <textarea class="form-textarea" id="error" placeholder="Please be specific. We are more receptive to specificity." bind:value={formError}></textarea>
        </div>
        <div class="form-field full">
          <button class="form-submit" on:click={handleSubmit}>Submit Correction</button>
        </div>
      </div>
    {/if}
  </div>

</main>

<br><br><br><br><br><br><br>

<footer>
  <div class="footer-name">The Garlic</div>
  <div class="footer-links">
    {#each footerLinks as l}
      <a href="{base}/{l.toLowerCase()}">{l}</a>
    {/each}
  </div>
  <div class="footer-copy">© 2026 The Garlic Consuming Company. No rights reserved. Est. 1967.</div>
</footer>