<script>
  import { base } from '$app/paths';

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const departments = [
    {
      name: 'Newsroom',
      description: 'Tips, corrections, and general editorial inquiries.',
      contacts: [
        { role: 'Editor-in-Chief', name: 'Harriet Drummond', email: 'h.drummond@thegarlic.com', phone: '+1 (585) 204-0011' },
        { role: 'Managing Editor', name: 'Felix Okonkwo', email: 'f.okonkwo@thegarlic.com', phone: '+1 (585) 204-0012' },
        { role: 'News Tips', name: 'Anonymous Tip Desk', email: 'tips@thegarlic.com', phone: null },
      ]
    },
    {
      name: 'Opinion & Editorial',
      description: 'Letters to the editor, op-ed submissions, and commentary.',
      contacts: [
        { role: 'Opinion Editor', name: 'Eleanor Voss', email: 'opinion@thegarlic.com', phone: '+1 (585) 204-0031' },
        { role: 'Letters Desk', name: 'Letters Department', email: 'letters@thegarlic.com', phone: null },
      ]
    },
    {
      name: 'Advertising & Partnerships',
      description: 'Display advertising, sponsored content, and brand partnerships.',
      contacts: [
        { role: 'Advertising Director', name: 'Sylvia Marchetti', email: 's.marchetti@thegarlic.com', phone: '+1 (585) 204-0050' },
        { role: 'Partnerships', name: 'Brand Desk', email: 'partners@thegarlic.com', phone: '+1 (585) 204-0055' },
      ]
    },
    {
      name: 'Subscriptions & Circulation',
      description: 'Print delivery issues, digital access, and account support.',
      contacts: [
        { role: 'Subscriber Support', name: 'Circulation Team', email: 'subscribe@thegarlic.com', phone: '+1 (800) 555-0191' },
      ]
    },
    {
      name: 'Legal & Corrections',
      description: 'Legal notices, right of reply, and factual corrections.',
      contacts: [
        { role: 'General Counsel', name: 'Reginald Ashworth', email: 'legal@thegarlic.com', phone: '+1 (585) 204-0070' },
        { role: 'Corrections Editor', name: 'Corrections Desk', email: 'corrections@thegarlic.com', phone: null },
      ]
    },
  ];

  let formName = '';
  let formEmail = '';
  let formDept = 'Newsroom';
  let formMessage = '';
  let submitted = false;

  function handleSubmit() {
    if (formName && formEmail && formMessage) {
      submitted = true;
    }
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

  /* ── Page wrapper ── */
  .wrapper { max-width: 1240px; margin: 0 auto; padding: 0 24px; }

  /* ── Page header ── */
  .page-header {
    padding: 36px 0 0;
    border-bottom: 1px solid var(--ink);
    margin-bottom: 0;
  }
  .page-kicker {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 10px;
  }
  .page-title {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-size: clamp(36px, 5vw, 64px);
    letter-spacing: -0.02em;
    line-height: 1.05;
    color: var(--ink);
    margin-bottom: 14px;
  }
  .page-dek {
    font-family: 'Libre Baskerville', serif;
    font-size: 15px;
    line-height: 1.7;
    color: var(--ink-light);
    max-width: 600px;
    margin-bottom: 28px;
  }

  /* ── Two-col layout ── */
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 2px 420px;
    gap: 0;
    padding: 32px 0 56px;
    align-items: start;
  }
  .col-divider {
    background: var(--rule);
    align-self: stretch;
  }
  .dept-col { padding-right: 40px; }
  .form-col  { padding-left: 40px; }

  /* ── Section labels ── */
  .col-label {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    border-bottom: 1px solid var(--rule-light);
    padding-bottom: 8px;
    margin-bottom: 24px;
  }

  /* ── Departments ── */
  .dept-block {
    margin-bottom: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--rule-light);
  }
  .dept-block:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .dept-name {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 20px;
    color: var(--ink);
    margin-bottom: 4px;
  }
  .dept-desc {
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    font-style: italic;
    color: var(--rule);
    margin-bottom: 16px;
    line-height: 1.5;
  }
  .contact-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 24px;
  }
  .contact-card {
    background: var(--cream);
    border: 1px solid var(--rule-light);
    padding: 14px 16px;
  }
  .contact-role {
    font-family: 'Source Sans 3', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 4px;
  }
  .contact-name {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--ink);
    margin-bottom: 6px;
  }
  .contact-detail {
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    color: var(--ink-light);
    line-height: 1.7;
  }
  .contact-detail a {
    color: var(--red);
    text-decoration: none;
  }
  .contact-detail a:hover { text-decoration: underline; }

  /* ── Form ── */
  .form-sticky { position: sticky; top: 52px; }

  .form-intro {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.7;
    color: var(--ink-light);
    margin-bottom: 24px;
  }

  .field { margin-bottom: 18px; }
  .field label {
    display: block;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink-light);
    margin-bottom: 6px;
  }
  .field input,
  .field select,
  .field textarea {
    width: 100%;
    background: #fff;
    border: 1px solid var(--rule);
    padding: 10px 12px;
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    color: var(--ink);
    outline: none;
    transition: border-color 0.15s;
    appearance: none;
  }
  .field input:focus,
  .field select:focus,
  .field textarea:focus {
    border-color: var(--ink);
  }
  .field textarea {
    resize: vertical;
    min-height: 120px;
    line-height: 1.6;
  }
  .select-wrap { position: relative; }
  .select-wrap::after {
    content: '▾';
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: var(--ink-light);
    pointer-events: none;
  }

  .submit-btn {
    background: var(--ink);
    color: var(--cream);
    border: none;
    padding: 12px 28px;
    font-family: 'Source Sans 3', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.15s;
    width: 100%;
  }
  .submit-btn:hover { background: var(--red); }

  /* ── Submitted state ── */
  .submitted-notice {
    background: var(--cream);
    border: 1px solid var(--rule);
    border-left: 3px solid var(--gold);
    padding: 24px 20px;
    text-align: center;
  }
  .submitted-notice .check {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .submitted-notice h3 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 8px;
  }
  .submitted-notice p {
    font-family: 'Libre Baskerville', serif;
    font-size: 12px;
    color: var(--ink-light);
    font-style: italic;
    line-height: 1.6;
  }

  /* ── HQ band ── */
  .hq-band {
    background: var(--ink);
    color: var(--cream);
    padding: 32px 40px;
    margin-bottom: 48px;
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
    gap: 0;
    align-items: start;
  }
  .hq-divider { background: #3a3028; align-self: stretch; }
  .hq-item { padding: 0 32px; }
  .hq-item:first-child { padding-left: 0; }
  .hq-item:last-child { padding-right: 0; }
  .hq-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    font-family: 'Source Sans 3', sans-serif;
    margin-bottom: 8px;
  }
  .hq-value {
    font-family: 'Libre Baskerville', serif;
    font-size: 13px;
    line-height: 1.7;
    color: #e0d8ca;
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

  @media (max-width: 900px) {
    .contact-layout { grid-template-columns: 1fr; }
    .col-divider { display: none; }
    .dept-col, .form-col { padding: 0 0 32px; }
    .form-sticky { position: static; }
    .contact-row { grid-template-columns: 1fr; }
    .hq-band { grid-template-columns: 1fr; gap: 24px; }
    .hq-divider { display: none; }
    .hq-item { padding: 0; }
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
    <img src="{base}/images/TheGarlicLogo.png" alt="Garlic Logo"
      style="width:120px;height:120px;margin-top:-30px;margin-bottom:-30px;margin-right:-20px;"
      class="logo-mark">
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

  <!-- Page header -->
  <div class="page-header">
    <div class="page-kicker">Get In Touch</div>
    <h1 class="page-title">Contact The Garlic</h1>
    <p class="page-dek">
        We understand that you might want to reach out to The Garlic for a variety of reasons, 
        but we assure you, none of them are good enough for us to care. Still, if you feel 
        compelled to write us a message, you can use this completly preformative form that does nothing. 
    </p>
  </div>

  <!-- HQ band -->
  <div class="hq-band">
    <div class="hq-item">
      <div class="hq-label">Headquarters</div>
      <div class="hq-value">
        1600 Pennsylvania Avenue NW,<br>
        Washington, DC 20500<br>
        United States
      </div>
    </div>
    <div class="hq-divider"></div>
    <div class="hq-item">
      <div class="hq-label">General Inquiries</div>
      <div class="hq-value">
            
      </div>
    </div>
    <div class="hq-divider"></div>
    <div class="hq-item">
      <div class="hq-label">Breaking Tips Hotline</div>
      <div class="hq-value">
        +1 (800) 555-LEAK<br>
        tips@thegarlic.com<br>
        24 hours a day, 7 days a week
      </div>
    </div>
  </div>

  <!-- Two-column body -->
  <div class="contact-layout">

    <!-- Left: departments -->
    <div class="dept-col">
      <div class="col-label">Editorial Departments</div>

      {#each departments as dept}
        <div class="dept-block">
          <div class="dept-name">{dept.name}</div>
          <div class="dept-desc">{dept.description}</div>
          <div class="contact-row">
            {#each dept.contacts as c}
              <div class="contact-card">
                <div class="contact-role">{c.role}</div>
                <div class="contact-name">{c.name}</div>
                <div class="contact-detail">
                  <a href="mailto:{c.email}">{c.email}</a>
                  {#if c.phone}
                    <br>{c.phone}
                  {/if}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="col-divider"></div>

    <!-- Right: contact form -->
    <div class="form-col">
      <div class="form-sticky">
        <div class="col-label">Send Us A Message</div>

        {#if submitted}
          <div class="submitted-notice">
            <div class="check">✦</div>
            <h3>Preformative Message "Recieved"</h3>
            <p>
              Thank you for writing to The Garlic. A member of the appropriate
              department won't respond within 2 buisness days, in fact no one will ever respond. 
            </p>
          </div>
        {:else}
          <p class="form-intro">
            Use this form to reach any department of The Garlic. For urgent tips,
            please call our hotline directly. All submissions are logged and retained
            per our <a href='{base}/privacy'>Privacy Policy</a>. 
          </p>

          <div class="field">
            <label for="name">Full Name</label>
            <input id="name" type="text" placeholder="Your name" bind:value={formName}>
          </div>

          <div class="field">
            <label for="email">Email Address</label>
            <input id="email" type="email" placeholder="you@example.com" bind:value={formEmail}>
          </div>

          <div class="field">
            <label for="dept">Department</label>
            <div class="select-wrap">
              <select id="dept" bind:value={formDept}>
                {#each departments as d}
                  <option value={d.name}>{d.name}</option>
                {/each}
              </select>
            </div>
          </div>

          <div class="field">
            <label for="message">Your Message</label>
            <textarea id="message" placeholder="Write your message here…" bind:value={formMessage}></textarea>
          </div>

          <button class="submit-btn" on:click={handleSubmit}>
            Submit Correspondence →
          </button>
        {/if}
      </div>
    </div>

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