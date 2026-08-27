---
layout: default
title: "A Free Lunch with Influence Functions? An Empirical Evaluation of Influence Functions for Average Treatment Effect Estimation"
permalink: /papers/free-lunch-influence-functions/
description: "We empirically examine whether influence-function corrections reliably improve average treatment effect estimation when nuisance functions are fit with flexible machine-learning methods. The answer is nuanced: influence-function updates can help a lot, but they are not an automatic free lunch."
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
    <span class="paper-badge paper-badge--venue">TMLR 2023</span>
  </div>

  <h1 class="paper-title">A Free Lunch with Influence Functions? An Empirical Evaluation of Influence Functions for Average Treatment Effect Estimation</h1>

  <div class="paper-authors">Matthew J. Vowels · Sina Akbari · Necati Cihan Camgoz · Richard Bowden</div>
  
  <div class="paper-venue-line">Transactions on Machine Learning Research · 2023</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/free-lunch-influence-functions/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/matthewvowels1/FreeLunchSemiParametrics">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://openreview.net/forum?id=dQxBRqCjLr">TMLR</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal effect estimation</span> <span class="paper-keyword">influence functions</span> <span class="paper-keyword">semiparametric statistics</span> <span class="paper-keyword">machine learning</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Influence-function corrections can improve flexible machine-learning estimates of the average treatment effect, but there is no universal free lunch. Across datasets, the gains depend on the estimator, sample size, and data-generating process. The practical message is to stress-test conclusions across multiple estimation pipelines.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It is a practical warning against treating influence-function updates as a plug-and-play guarantee. The benefit depends on the estimator, sample size, and data-generating process.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Influence functions are powerful, but they are not magic. We show when they help, when they plateau, and when blindly adding them can disappoint.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">average treatment effect</span> <span class="paper-setup-chip">influence functions</span> <span class="paper-setup-chip">double robustness</span> <span class="paper-setup-chip">empirical evaluation</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Influence-function-based estimators are often presented as a standard upgrade over plug-in estimation. In practice, however, the gain depends on how nuisance models are fit, on overlap, and on the structure of the data-generating process.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We run a careful empirical study rather than relying only on asymptotic folklore. That lets us compare estimation pipelines under realistic finite-sample conditions and see when influence-function corrections are actually worth it.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Takeaway</span>
        
        <p>We find that influence-function corrections can substantially improve flexible estimators of the average treatment effect, but the improvement is uneven across settings.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Why it matters</span>
        
        <p>The paper gives a practical warning: semiparametric tools should be deployed thoughtfully, with attention to the nuisance-learning regime rather than by default.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Define a collection of treatment-effect estimation pipelines.</li>
<li>Fit nuisance components with flexible machine-learning models.</li>
<li>Compare plug-in and influence-function-corrected estimators across many settings.</li>
<li>Read off when the correction is genuinely helpful in finite samples.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that influence-function corrections often help, but not uniformly. The key message is practical: good nuisance learning and design conditions matter just as much as the correction itself.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You use machine learning for nuisance estimation in treatment-effect problems.</li>
<li>You want empirical guidance on when influence-function corrections are worth the extra machinery.</li>
<li>You care about finite-sample behavior, not just asymptotic theory.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The paper is intentionally empirical, so the value is in the practical comparison rather than in a new universal theorem.</li>
<li>A correction that is asymptotically appealing can still be underwhelming if the nuisance stage is poor.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@article{vowels2023free,
  title   = {A Free Lunch with Influence Functions? An Empirical Evaluation of Influence Functions for Average Treatment Effect Estimation},
  author  = {Matthew J. Vowels and Sina Akbari and Necati Cihan Camgoz and Richard Bowden},
  journal = {Transactions on Machine Learning Research},
  year    = {2023},
  url     = {https://openreview.net/forum?id=dQxBRqCjLr}
}</pre>
</div>

</div>
