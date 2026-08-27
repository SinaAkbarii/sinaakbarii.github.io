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
    <p>Triple differences relax parallel trends, while changes-in-changes recovers an entire counterfactual distribution rather than just a mean. We combine the two into a triple-changes estimator and extend it to multivariate outcomes using optimal transport. The method is illustrated on Medicaid expansion and children&#x27;s preventive care.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It moves policy evaluation beyond average effects to entire counterfactual distributions. The optimal-transport extension also opens the door to multivariate outcomes rather than a single scalar response.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> We extend policy evaluation from average effects to richer distributional comparisons, without giving up the design-based intuition that makes difference methods useful.
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
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We propose the triple-changes estimator and establish identification of policy effects at the distributional level for targeted interventions.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Why it matters</span>
        
        <p>The method lets us ask who gains, who loses, and how the full outcome distribution shifts—not just what happens on average.</p>
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

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The numerical results show that the estimator can recover the shape of policy effects, not only their mean. This is exactly where the method stands out relative to simpler difference-based designs.</p>
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
        <li>The strength of the method is in the richer estimand, so its payoff is largest when distributional effects matter scientifically.</li>
<li>As with related design-based methods, the credibility of the comparison groups remains central.</li>
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
