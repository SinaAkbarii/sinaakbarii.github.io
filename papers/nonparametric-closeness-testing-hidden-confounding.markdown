---
layout: default
title: "Sample Complexity of Nonparametric Closeness Testing for Continuous Distributions and Its Application to Causal Discovery with Hidden Confounding"
permalink: /papers/nonparametric-closeness-testing-hidden-confounding/
description: "We study the sample complexity of nonparametric closeness testing for continuous distributions and show how the resulting testing theory can be used inside a causal-discovery problem with hidden confounding. The paper links a clean statistical question to a causal one in a nontrivial way."
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
    <span class="paper-badge paper-badge--venue">CLeaR 2025</span>
  </div>

  <h1 class="paper-title">Sample Complexity of Nonparametric Closeness Testing for Continuous Distributions and Its Application to Causal Discovery with Hidden Confounding</h1>

  <div class="paper-authors">Fateme Jamshidi · Sina Akbari · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Proceedings of the Fourth Conference on Causal Learning and Reasoning · 2025</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/nonparametric-closeness-testing-hidden-confounding/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.mlr.press/v275/jamshidi25a.html">CLeaR / PMLR</a> <a class="paper-resource paper-resource--openreview" href="https://openreview.net/forum?id=Dz31Rlv7S8">OpenReview</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal discovery</span> <span class="paper-keyword">distribution testing</span> <span class="paper-keyword">sample complexity</span> <span class="paper-keyword">hidden confounding</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Can we tell two continuous distributions apart without parametric assumptions, and with how many samples? A von Mises KL estimator gives an optimal-rate closeness test under smoothness assumptions. Plugging that test into causal discovery yields finite-sample guarantees even for nonlinear, multidimensional variables with hidden confounding.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It connects optimal nonparametric distribution testing to causal discovery with hidden confounding. The finite-sample guarantees cover nonlinear, multidimensional continuous settings where theory is usually much thinner.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> At its core, this is a bridge between distribution testing and causal discovery. We show that minimax testing rates are not only mathematically interesting; they control what is feasible in a hidden-confounding discovery task.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">distribution testing</span> <span class="paper-setup-chip">sample complexity</span> <span class="paper-setup-chip">continuous distributions</span> <span class="paper-setup-chip">hidden confounding</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Closeness testing asks whether two unknown continuous distributions are the same or meaningfully different. In causal discovery with hidden confounding, that question appears naturally inside decisions about whether environments or conditional distributions agree.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We first solve the statistical testing problem, then use it as a subroutine in causal discovery. That makes the discovery guarantees depend on the fundamental sample complexity of the underlying nonparametric test.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We derive sample-complexity results for nonparametric closeness testing of continuous distributions and use them to analyze causal discovery with hidden confounding.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Why it matters</span>
        
        <p>The paper makes clear that some discovery limits come from basic distribution-testing difficulty rather than from graph search alone.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Formulate the nonparametric closeness-testing problem precisely.</li>
<li>Derive upper and lower bounds on the required sample size.</li>
<li>Embed the resulting test into a causal-discovery procedure.</li>
<li>Translate testing difficulty into discovery guarantees.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments illustrate the expected transition from easy to hard testing regimes as distributions become harder to distinguish. That behavior carries over directly to the causal-discovery application.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You care about causal discovery with hidden confounding in continuous-data settings.</li>
<li>You want to understand how a low-level statistical testing problem limits a higher-level graph-learning problem.</li>
<li>You prefer nonparametric guarantees to parametric convenience.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The contribution is partly foundational, so the main payoff is understanding what sample sizes are fundamentally necessary.</li>
<li>The causal-discovery conclusions inherit the strengths and limitations of the underlying distribution test.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@InProceedings{pmlr-v275-jamshidi25a,
  title     = {Sample Complexity of Nonparametric Closeness Testing for Continuous Distributions and Its Application to Causal Discovery with Hidden Confounding},
  author    = {Jamshidi, Fateme and Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the Fourth Conference on Causal Learning and Reasoning},
  pages     = {1217--1238},
  year      = {2025},
  volume    = {275},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v275/jamshidi25a.html}
}</pre>
</div>

</div>
