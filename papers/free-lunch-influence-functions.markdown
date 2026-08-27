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
    <p>We run a broad empirical evaluation of semiparametric average-treatment-effect estimators, including neural-network nuisance models and influence-function updates. We also introduce MultiNet and MultiStep. The central finding is that no single update dominates everywhere, but several combinations are consistently strong and MultiNet performs particularly well in a number of evaluations.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Causal estimators are often deployed without access to ground truth. A large controlled benchmark therefore provides practical evidence about which semiparametric pipelines are stable across datasets, sample sizes, and data-generating mechanisms—and where new methods such as MultiNet help.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>The applications of causal inference may be life-critical, including the evaluation of vaccinations, medicine, and social policy. However, when undertaking estimation for causal inference, practitioners rarely have access to what might be called ‘ground-truth’ in a supervised learning setting, meaning the chosen estimation methods cannot be evaluated and must be assumed to be reliable. It is therefore crucial that we have a good understanding of the performance consistency of typical methods available to practitioners. In this work we provide a comprehensive evaluation of recent semiparametric methods (including neural network approaches) for average treatment effect estimation. Such methods have been proposed as a means to derive unbiased causal effect estimates and statistically valid confidence intervals, even when using otherwise non-parametric, data-adaptive machine learning techniques. We also propose a new estimator ‘MultiNet’, and a variation on the semiparametric update step ‘MultiStep’, which we evaluate alongside existing approaches. The performance of both semiparametric and ‘regular’ methods are found to be dataset dependent, indicating an interaction between the methods used, the sample size, and nature of the data generating process. Our experiments highlight the need for practitioners to check the consistency of their findings, potentially by undertaking multiple analyses with different combinations of estimators.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> This paper is an empirical map of modern semiparametric ATE estimation: which combinations work well, how performance changes with the dataset and sample size, and which new neural estimators are especially promising.
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
      <h3>3. MultiNet and MultiStep</h3>
      <div class="paper-result">
        <span class="paper-result-label">Method contribution</span>
        <p>We introduce MultiNet, a neural pseudo-ensemble outcome estimator, and MultiStep, a variation on the semiparametric update step, and evaluate them alongside established semiparametric and non-semiparametric estimators.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. What drives performance</h3>
      <div class="paper-result">
        <span class="paper-result-label">Empirical finding</span>
        <p>Across the benchmark, estimator performance depends strongly on the interaction between method choice, sample size, and the data-generating process. MultiNet is among the strongest outcome models in several evaluations and performs particularly well in smaller-sample settings.</p>
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
  <p>The large benchmark shows that the best-performing pipeline changes across datasets and sample sizes, so robustness is better assessed across several competitive estimators than through a single default recipe. MultiNet achieves state-of-the-art performance on a number of evaluations, while the Shapley analyses make sample size and dataset structure two of the strongest predictors of estimator behavior.</p>
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
        <li>The paper compares outcome models, propensity models, and update steps as a full estimation pipeline rather than evaluating each component in isolation.</li>
        <li>MultiNet and MultiStep are provided as concrete new options within a benchmark designed to help practitioners choose stable semiparametric estimators.</li>
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
