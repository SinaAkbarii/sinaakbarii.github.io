---
layout: default
title: "Multi-armed Bandits with Missing Outcomes"
permalink: /papers/multi-armed-bandits-missing-outcomes/
description: "We study stochastic bandits when rewards may be missing rather than merely noisy. We show that the reason observations go missing matters fundamentally: missingness can alter the learning problem itself and requires algorithms that model the observation process rather than ignoring it."
---

<link rel="stylesheet" href="{{ '/assets/paper-pages.css' | relative_url }}">
<script src="{{ '/assets/paper-pages.js' | relative_url }}"></script>

<div class="paper-page">

<a class="paper-back" href="{{ '/publications/' | relative_url }}">← All publications</a>

<div class="paper-beta" role="note">
  <span class="paper-beta-badge">BETA</span>
  <span>This research page is an early version. Explanatory text, figure selection, and presentation are still being revised.</span>
</div>

<div class="paper-hero">
  <div class="paper-hero-meta">
    <span class="paper-badge paper-badge--venue">UAI 2025</span>
  </div>

  <h1 class="paper-title">Multi-armed Bandits with Missing Outcomes</h1>

  <div class="paper-authors">Ilia Mahrooghi · Mahshad Moradi · Sina Akbari · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Proceedings of the Forty-first Conference on Uncertainty in Artificial Intelligence · 2025</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/multi-armed-bandits-missing-outcomes/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/ilia-mahrooghi/Multi-armed-Bandits-with-Missing-Outcome">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.mlr.press/v286/mahrooghi25a.html">UAI / PMLR</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">multi-armed bandits</span> <span class="paper-keyword">missing data</span> <span class="paper-keyword">online learning</span> <span class="paper-keyword">regret</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Missing rewards are not harmless in bandits: ignoring why outcomes disappear can drive regret to linear. We develop algorithms for both missing-at-random and missing-not-at-random feedback and show how the missingness mechanism changes achievable regret. Accounting for it gives much better decision-making guarantees.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Missing feedback can fundamentally break bandit learning, not just make it noisier. Modeling the missingness mechanism restores meaningful regret guarantees in settings closer to real decision systems.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Missing outcomes are not just a bookkeeping issue. They can change what is learnable and how regret grows.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">multi-armed bandits</span> <span class="paper-setup-chip">missing rewards</span> <span class="paper-setup-chip">online learning</span> <span class="paper-setup-chip">regret analysis</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Classical bandit algorithms assume that after pulling an arm, the reward is observed. In many applications that is false: the outcome may be censored, delayed, or selectively missing, and naive bandit updates can then become biased.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We treat missingness as part of the bandit model. That lets us derive the right regret guarantees under different observation mechanisms and design algorithms that account for the missingness process.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We characterize how different missing-outcome mechanisms affect the exploration–exploitation trade-off and derive algorithms with regret guarantees tailored to those settings.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Practical meaning</span>
        
        <p>The paper shows that missing feedback can fundamentally break standard bandit intuition, not merely slow learning by a constant factor.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Formalize how rewards become missing.</li>
<li>Analyze how the observation mechanism changes the information available to the learner.</li>
<li>Design an algorithm that corrects for or adapts to that missingness structure.</li>
<li>Prove regret bounds and compare with naive baselines.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that algorithms aware of missingness can substantially outperform ones that pretend all observed rewards are a representative sample. The difference grows when missingness is strongly informative.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You face online decision problems with selectively missing or censored rewards.</li>
<li>You want regret guarantees that explicitly account for the observation process.</li>
<li>You suspect the missingness pattern itself carries information about arm quality.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The exact guarantees depend on the missingness model, so the scientific interpretation of why outcomes disappear remains important.</li>
<li>Ignoring missingness can be badly misleading, which is precisely why modeling it explicitly matters.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@InProceedings{pmlr-v286-mahrooghi25a,
  title     = {Multi-armed Bandits with Missing Outcomes},
  author    = {Mahrooghi, Ilia and Moradi, Mahshad and Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the Forty-first Conference on Uncertainty in Artificial Intelligence},
  pages     = {2844--2875},
  year      = {2025},
  volume    = {286},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v286/mahrooghi25a.html}
}</pre>
</div>

</div>
