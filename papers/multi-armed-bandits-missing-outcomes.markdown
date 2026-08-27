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
    <p>Missing rewards can fundamentally change a multi-armed-bandit problem. We analyze regret under missing completely at random, missing at random, and missing not at random mechanisms, show how naive reward estimates can lead to linear regret, and design UCB-style algorithms that explicitly correct for the observation process.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Real feedback is often selectively missing—in clinical trials, recommendation systems, advertising, and other online decisions. The paper provides a principled way to keep learning when the rewards we fail to observe are not a representative sample of the rewards that actually occurred.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>While significant progress has been made in designing algorithms that minimize regret in online decision-making, real-world scenarios often introduce additional complexities, with missing outcomes perhaps among the most challenging ones. Overlooking this aspect or simply assuming random missingness invariably leads to biased estimates of the rewards and may result in linear regret. Despite the practical relevance of this challenge, no rigorous methodology currently exists for systematically handling missingness, especially when the missingness mechanism is not random. In this paper, we address this gap in the context of multi-armed bandits (MAB) with missing outcomes by analyzing the impact of different missingness mechanisms on achievable regret bounds. We introduce algorithms that account for missingness under both missing at random (MAR) and missing not at random (MNAR) models. Through both analytical and simulation studies, we demonstrate the drastic improvements in decision-making by accounting for missingness in these settings.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Missing outcomes are part of the decision problem, not a preprocessing nuisance. Modeling the observation mechanism restores unbiased reward learning and dramatically improves regret.
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
      <h3>3. Missingness changes regret</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We characterize how different missingness mechanisms alter reward estimation and achievable regret. In particular, ignoring outcome-dependent missingness can bias estimated rewards enough to produce linear regret.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Missingness-aware bandit algorithms</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory + algorithm</span>
        <p>We develop UCB-style algorithms for MCAR, MAR, and MNAR settings. The MAR construction uses an observed mediator to recover unbiased reward information, while the MNAR method handles reward-dependent observation through the additional structure developed in the paper.</p>
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

<h2>What the simulations show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The simulations mirror the theory. In the MAR environment, standard UCB exhibits near-linear cumulative regret because it ignores the biased observation process, while the missingness-aware MAR algorithm achieves much lower regret. The MNAR algorithm also adapts successfully in reward-dependent missingness settings, and additional mediator information improves performance when available.</p>
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
        <li>The framework covers MCAR, MAR, and MNAR rather than treating all missing feedback as random censoring.</li>
        <li>The mediator-based formulation gives a concrete way to use auxiliary information to recover useful reward estimates even when missingness depends on the outcome.</li>
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
