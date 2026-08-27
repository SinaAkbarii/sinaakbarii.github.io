---
layout: default
title: "Semiparametric Triple Difference Estimators"
permalink: /papers/semiparametric-triple-difference/
description: "In this work, we revisit triple-difference designs from a semiparametric point of view. We derive identification formulas and doubly robust estimators for both panel data and repeated cross-sections, and we show how the repeated-cross-section case can accommodate time-varying covariate composition."
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
    <span class="paper-badge paper-badge--venue">2025</span>
  </div>

  <h1 class="paper-title">Semiparametric Triple Difference Estimators</h1>

  <div class="paper-authors">Sina Akbari · Negar Kiyavash · AmirEmad Ghassami</div>
  
  <div class="paper-venue-line">2025</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/semiparametric-triple-difference/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/SinaAkbarii/triplediff">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://arxiv.org/abs/2502.19788">arXiv</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">triple difference</span> <span class="paper-keyword">difference-in-differences</span> <span class="paper-keyword">semiparametric estimation</span> <span class="paper-keyword">policy evaluation</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Triple differences can relax parallel trends by borrowing information from an auxiliary domain. We give identification formulas and doubly robust semiparametric estimators for both panel and repeated cross-section data. The repeated cross-section setup also allows covariates to change over time.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It puts triple-difference analysis on a modern semiparametric footing, with flexible nuisance estimation and robustness guarantees. It also avoids the usual no-compositional-change assumption for repeated cross-sections.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>The triple difference causal inference framework is an extension of the well-known difference-in-differences framework. It relaxes the parallel trends assumption of the difference-in-differences framework through leveraging data from an auxiliary domain. Despite being commonly applied in empirical research, the triple difference framework has received relatively limited attention in the statistics literature. Specifically, investigating the intricacies of identification and the design of robust and efficient estimators for this framework has remained largely unexplored. This work aims to address these gaps in the literature. From the identification standpoint, we present outcome regression and weighting methods to identify the average treatment effect on the treated in both panel data and repeated cross-section settings. For the latter, we relax the commonly made assumption of time-invariant composition of units. From the estimation perspective, we develop semiparametric estimators for the triple difference framework in both panel data and repeated cross-sections settings. These estimators are based on the cross-fitting technique, and flexible machine learning tools can be used to estimate the nuisance components. We characterize conditions under which our proposed estimators are efficient, doubly robust, root-n consistent and asymptotically normal. As an application of our proposed methodology, we examined the effect of mandated maternity benefits on the hourly wages of women of childbearing age and found that these mandates result in a 2.6% drop in hourly wages.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> The main message is simple: triple differences can be both flexible and statistically principled. We show how to move beyond textbook three-way differencing and build estimators that remain valid with modern nuisance learning.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">targeted policies</span> <span class="paper-setup-chip">panel or repeated cross-sections</span> <span class="paper-setup-chip">auxiliary domain</span> <span class="paper-setup-chip">doubly robust estimation</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Triple-difference designs use an auxiliary comparison dimension to relax the parallel-trends burden of ordinary difference-in-differences. But the classical formulas do not directly give a modern semiparametric treatment, especially once we want flexible nuisance estimation and repeated-cross-section data.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We write the target causal parameters in a form that makes the identifying structure explicit, and then derive influence-function-based estimators. That yields doubly robust procedures: we can combine outcome and propensity-type models, and consistency survives if one side is estimated well enough.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Identification</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We give both outcome-regression and weighting identification formulas for the ATT in panel data and repeated cross-sections. In the repeated cross-section setting, identification does not require the usual time-invariant composition of sampled units.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Semiparametric guarantees</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We derive cross-fitted influence-function estimators and characterize conditions under which they are efficient, doubly robust, root-n consistent, and asymptotically normal while allowing flexible machine-learning estimation of nuisance functions.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Define the target triple-difference estimands clearly for panel and repeated-cross-section settings.</li>
<li>Express the estimands in a form that supports efficient influence-function calculations.</li>
<li>Build doubly robust estimators using nuisance functions that can be fit flexibly.</li>
<li>Use the resulting scores for inference and for robustness against nuisance-model misspecification.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the simulations and application show</h2>

<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The simulations confirm the double-robustness pattern predicted by the theory: when either the outcome-regression functions or the propensity scores are correctly specified, relative bias moves toward zero as sample size grows; when both nuisance components are misspecified, the bias persists. The repeated cross-section estimator shows the same pattern, with greater sampling variability because each observation contains only one outcome. In the CPS application, our estimator gives a point estimate of −0.02633 for log hourly wages, corresponding to an estimated 2.6% wage reduction associated with mandated maternity benefits.</p>
</div>

<div class="paper-stat-grid">
  <div class="paper-stat"><strong>1,000</strong><span>Monte Carlo replications per sample size</span></div>
  <div class="paper-stat"><strong>bias → 0</strong><span>when either nuisance side is correct</span></div>
  <div class="paper-stat"><strong>−2.6%</strong><span>estimated wage effect in the application</span></div>
</div>

<figure class="paper-figure">
  <img src="{{ '/papers/semiparametric-triple-difference/figures/relative-bias-panel.png' | relative_url }}" alt="Panel-data simulation showing relative bias versus sample size under four nuisance-specification regimes.">
  <figcaption>Figure 1 from the paper. In the panel-data setting, relative bias approaches zero when at least one nuisance-modeling side is correctly specified, illustrating the estimator's double robustness.</figcaption>
</figure>

<figure class="paper-figure">
  <img src="{{ '/papers/semiparametric-triple-difference/figures/relative-bias-repeated-cross-sections.png' | relative_url }}" alt="Repeated-cross-section simulation showing relative bias versus sample size under four nuisance-specification regimes.">
  <figcaption>Figure 2 from the paper. The repeated cross-section estimator displays the same double-robust pattern, with greater finite-sample variability than its panel-data counterpart.</figcaption>
</figure>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You want a modern semiparametric version of triple differences.</li>
        <li>You work with panel data or repeated cross-sections and want one coherent framework.</li>
        <li>You want doubly robust estimation with machine-learning-friendly nuisance fitting.</li>
        <li>You care about policy evaluation when a third comparison dimension is scientifically meaningful.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The framework covers both panel data and repeated cross-sections, with identification and semiparametric estimation tailored to each sampling design.</li>
        <li>For repeated cross-sections, the method explicitly accommodates compositional changes over time rather than requiring a time-invariant sampled population.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@misc{akbari2025semiparametric,
  title        = {Semiparametric Triple Difference Estimators},
  author       = {Sina Akbari and Negar Kiyavash and AmirEmad Ghassami},
  year         = {2025},
  eprint       = {2502.19788},
  archivePrefix= {arXiv},
  primaryClass = {econ.EM},
  url          = {https://arxiv.org/abs/2502.19788}
}</pre>
</div>

</div>
