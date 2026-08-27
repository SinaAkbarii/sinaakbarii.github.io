---
layout: default
title: "Triple Changes Estimator for Targeted Policies"
permalink: /papers/triple-changes-estimator-targeted-policies/
description: "We introduce a triple-changes estimator for targeted policies, blending the spirit of triple differences with the distributional perspective of changes-in-changes. The result is a way to recover richer policy effects than a simple average treatment effect while relaxing familiar parallel-trends-style assumptions."
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
    <span class="paper-badge paper-badge--venue">ICML 2024</span> <span class="paper-badge paper-badge--status">SPOTLIGHT</span>
  </div>

  <h1 class="paper-title">Triple Changes Estimator for Targeted Policies</h1>

  <div class="paper-authors">Sina Akbari · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Proceedings of the 41st International Conference on Machine Learning · 2024</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/triple-changes-estimator-targeted-policies/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/SinaAkbarii/Triple-Changes">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://icml.cc/virtual/2024/poster/32647">ICML</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.mlr.press/v235/akbari24a.html">PMLR</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">policy evaluation</span> <span class="paper-keyword">triple differences</span> <span class="paper-keyword">changes-in-changes</span> <span class="paper-keyword">optimal transport</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Triple changes combines the third comparison dimension of triple differences with the distributional identification of changes-in-changes. The result identifies an entire counterfactual outcome distribution rather than only an average effect and remains useful in nonlinear settings where mean-based triple differences can be biased.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>For targeted policies, the scientifically interesting effect may be distributional rather than just an average. Triple changes expands the changes-in-changes paradigm to a richer three-way design while retaining scale invariance.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>The renowned difference-in-differences (DiD) estimator relies on the assumption of ‘parallel trends,’ which may not hold in many practical applications. To address this issue, economists are increasingly considering the triple difference estimator as a more credible alternative. Both DiD and triple difference are limited to assessing average effects exclusively. An alternative avenue is offered by the changes-in-changes (CiC) estimator, which provides an estimate of the entire counterfactual distribution by relying on assumptions imposed on the distribution of potential outcomes. In this work, we extend the triple difference estimator to accommodate the CiC framework, presenting the ‘triple changes estimator’ and its identification assumptions, thereby expanding the scope of the CiC paradigm. Subsequently, we empirically evaluate the proposed framework and apply it to a study examining the impact of Medicaid expansion on children’s preventive care.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Triple changes extends triple differences from average effects to counterfactual distributions, making a three-way policy design useful for richer and nonlinear treatment effects.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">triple changes</span> <span class="paper-setup-chip">targeted policies</span> <span class="paper-setup-chip">changes-in-changes</span> <span class="paper-setup-chip">distributional effects</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Average effects can miss the most important consequences of a targeted policy, especially when the policy reshapes the outcome distribution. Standard difference-based methods also impose assumptions that can be too rigid in applications.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We combine the third comparison dimension of triple differences with the distributional logic of changes-in-changes. That yields a design that can recover counterfactual distributions rather than only a single mean effect.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Distributional identification</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We introduce the triple changes estimator and derive identification assumptions for the counterfactual outcome distribution of the treated group. The construction combines the extra comparison dimension of triple differences with the monotone-transport logic of changes-in-changes.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Beyond average effects</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>Because the method identifies a counterfactual distribution, it supports distributional treatment-effect questions rather than only a mean ATT. The paper also develops partial-identification results when the point-identification conditions are relaxed.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Use a third comparison dimension to relax standard trend restrictions.</li>
<li>Import the distributional logic of changes-in-changes.</li>
<li>Construct the target counterfactual distribution under the targeted policy.</li>
<li>Estimate the resulting distributional treatment effects.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the simulations and application show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>In the baseline simulations, the biases of triple difference and triple changes approach zero while DiD and CiC retain persistent bias. Under the nonlinear data-generating process, triple difference becomes biased whereas triple changes remains asymptotically unbiased. In the Medicaid application, the triple changes estimate suggests that Louisiana’s expansion increased children’s likelihood of an annual preventive-care visit relative to non-expansion states.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You care about distributional policy effects rather than only average effects.</li>
<li>Your policy is targeted and naturally suggests a third comparison dimension.</li>
<li>You want a design-based estimator that is richer than ordinary DID or DDD.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>Triple changes is designed for targeted-policy settings where a third comparison dimension is scientifically meaningful.</li>
        <li>Because the estimand is distributional, the framework can study changes that would be hidden by a purely average-effect analysis.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@InProceedings{pmlr-v235-akbari24a,
  title     = {Triple Changes Estimator for Targeted Policies},
  author    = {Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the 41st International Conference on Machine Learning},
  pages     = {666--695},
  year      = {2024},
  volume    = {235},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v235/akbari24a.html}
}</pre>
</div>

</div>
