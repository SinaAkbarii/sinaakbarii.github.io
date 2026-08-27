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
    <p>We derive a nonparametric closeness test for multidimensional continuous distributions using a von Mises estimator of KL divergence, obtain optimal parametric rates under smoothness, and use the test to give sample-complexity guarantees for distinguishing causal direction from hidden confounding.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>This connects a fundamental distribution-testing problem to causal discovery. It gives finite-sample guarantees for distinguishing cause, effect, and latent confounding in nonlinear, non-Gaussian, multidimensional continuous settings.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>We study the problem of closeness testing for continuous distributions and its implications for causal discovery. Specifically, we analyze the sample complexity of distinguishing whether two multidimensional continuous distributions are identical or differ by at least ϵ in terms of Kullback-Leibler (KL) divergence under non-parametric assumptions. To this end, we propose an estimator of KL divergence which is based on the von Mises expansion. Our closeness test attains optimal parametric rates under smoothness assumptions. Equipped with this test, which serves as a building block of our causal discovery algorithm to identify the causal structure between two multidimensional random variables, we establish sample complexity guarantees for our causal discovery method. To the best of our knowledge, this work is the first work that provides sample complexity guarantees for distinguishing cause and effect in multidimensional non-linear models with non-Gaussian continuous variables in the presence of unobserved confounding.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> The paper turns nonparametric KL closeness testing into a causal-discovery primitive with explicit sample-complexity guarantees.
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
      <h3>3. Nonparametric closeness testing</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We construct a KL-divergence estimator based on the von Mises expansion and prove concentration guarantees for the resulting closeness test. Under smoothness conditions, the test attains the optimal parametric rate.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Causal-discovery sample complexity</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>Using the closeness test as a building block, we derive finite-sample guarantees for distinguishing A → B, B → A, and A ← U → B with multidimensional nonlinear continuous variables and unobserved confounding.</p>
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

<h2>What the theory gives us</h2>
<div class="paper-simulation-message">
  <strong>Theoretical takeaway.</strong>
  <p>The main payoff is a finite-sample guarantee rather than a simulation benchmark. The causal-discovery procedure succeeds with constant probability using O(ϵ<sup>−τ</sup>) observational and interventional samples, where τ = max{2, (2β + d)/(2β)}; the success probability can be boosted to 1 − δ with only a logarithmic-factor increase in sample complexity.</p>
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
        <li>The result is fully nonparametric at the distribution-testing level and allows multidimensional, non-Gaussian continuous variables.</li>
        <li>The same testing machinery also yields a version of the causal-discovery procedure that can operate using interventional samples without requiring observational samples.</li>
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
