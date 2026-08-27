---
layout: default
title: "Fundamental Limits and Optimal Methods for Sharp Analytical Causal Bounds in Instrumental Variable Models"
permalink: /papers/sharp-analytical-iv-bounds/
description: "We study the complexity of exact sharp analytical bounds in discrete instrumental-variable models. We prove that the number of linear pieces needed to express sharp average treatment effect bounds, and the number of inequalities needed to fully characterize the observable IV model, grow exponentially with the outcome support; for a binary instrument we also give output-optimal constructive procedures."
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
    <span class="paper-badge paper-badge--venue">UAI 2026</span> <span class="paper-badge paper-badge--status">ORAL</span> <span class="paper-badge paper-badge--award">🏆 Best Paper Award</span>
  </div>

  <h1 class="paper-title">Fundamental Limits and Optimal Methods for Sharp Analytical Causal Bounds in Instrumental Variable Models</h1>

  <div class="paper-authors">Arefe Boushehrian<sup>*</sup> · Mohammad Reza Badri<sup>*</sup> · Sina Akbari · Negar Kiyavash</div>
  <div class="paper-note"><sup>*</sup> Equal contribution.</div>
  <div class="paper-venue-line">Proceedings of the 42nd Conference on Uncertainty in Artificial Intelligence · 2026</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/sharp-analytical-iv-bounds/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/ArefeBoushehrian/Analytical-Causal-Bounds-in-Instrumental-Variable-Models">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.mlr.press/v337/boushehrian26a.html">UAI / PMLR</a> <a class="paper-resource paper-resource--slides" href="https://www.sakbari.com/EuroCIM2026.pdf">Slides</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">instrumental variables</span> <span class="paper-keyword">partial identification</span> <span class="paper-keyword">sharp bounds</span> <span class="paper-keyword">causal inference</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Sharp analytical instrumental-variable bounds cannot stay simple as the outcome alphabet grows. We prove that any sharp bound needs exponentially many linear pieces, and the same exponential barrier appears in the IV inequalities. We also give Python and R procedures that attain this optimal complexity.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It establishes a genuine complexity barrier for sharp analytical IV bounds: exponential structure is unavoidable. The accompanying algorithms match that lower bound, so the result says both what is impossible and what is optimal.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> The key point is both negative and positive. We show that exact sharpness has an unavoidable exponential price, but we also show how to avoid paying anything beyond that price.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">binary treatment D</span> <span class="paper-setup-chip">outcome Y with n values</span> <span class="paper-setup-chip">instrument Z with ℓ values</span> <span class="paper-setup-chip">sharp bounds</span> <span class="paper-setup-chip">IV inequalities</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Analytical IV bounds are attractive because they are transparent. But classical optimization-based methods become expensive, and it was unclear whether that was only an algorithmic artifact or a fundamental barrier.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We express the sharp-bound and sharp-testing problems through the geometry of dual polyhedra and cones. For a binary instrument, that geometry can be characterized combinatorially, giving direct generation algorithms instead of generic vertex enumeration.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Informal result</span>
        <span class="paper-result-number">For a binary instrument (ℓ = 2), the sharp ATE bound has exactly 5·4^(n−1) − 2^(n+2) + 4 linear pieces, where n is the number of outcome values.</span>
        <p>So even in the binary-instrument case, the sharp formula grows exponentially in the outcome support n.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Another informal result</span>
        <span class="paper-result-number">For a binary instrument (ℓ = 2), a complete non-redundant IV test needs exactly 2^(n+1) − 4 inequalities, again with n denoting the outcome-support size.</span>
        <p>For general ℓ-valued instruments, we prove corresponding exponential lower bounds, where ℓ is the number of instrument values.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Write the IV model and the target ATE as linear optimization problems.</li>
<li>Dualize the problems to expose the relevant vertices and extreme rays.</li>
<li>Characterize those objects combinatorially when the instrument is binary (ℓ = 2).</li>
<li>Generate the sharp bound pieces and IV inequalities directly, in time linear in the output size.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-stat-grid">
<div class="paper-stat"><strong>5·4^(n−1)−2^(n+2)+4</strong><span>sharp ATE terms when ℓ = 2</span></div>
<div class="paper-stat"><strong>2^(n+1)−4</strong><span>IV inequalities when ℓ = 2</span></div>
<div class="paper-stat"><strong>>1000×</strong><span>speedup over causaloptim at n = 6</span></div>
</div>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The computation study shows that the direct generation strategy tracks the unavoidable exponential output size, while generic vertex-enumeration approaches scale much worse. The runtime gap becomes dramatic very quickly.</p>
</div>

<figure class="paper-figure">
  <img src="{{ '/papers/sharp-analytical-iv-bounds/figures/runtime-comparison.png' | relative_url }}" alt="Log-scale runtime comparison between causaloptim and the direct sharp-bound generation method as outcome support size increases.">
  <figcaption>Runtime comparison corresponding to Figure 1 of the paper. The proposed method follows the unavoidable exponential output growth much more closely than generic vertex enumeration.</figcaption>
</figure>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You want exact sharp analytical IV bounds rather than purely numerical bounds for one dataset.</li>
<li>You need a complete explicit characterization of the IV model's testable implications.</li>
<li>You want software that automatically derives the full set of sharp bounds and IV inequalities.</li>
<li>You care about what is fundamentally impossible and what is algorithmically optimal.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>Exact sharpness remains expensive in the worst case because the output itself is exponentially large.</li>
<li>The paper gives the full constructive characterization for binary instruments and exponential lower bounds for multi-valued instruments.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@InProceedings{pmlr-v337-boushehrian26a,
  title     = {Fundamental Limits and Optimal Methods for Sharp Analytical Causal Bounds in Instrumental Variable Models},
  author    = {Boushehrian, Arefe and Badri, Mohammad Reza and Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the 42nd Conference on Uncertainty in Artificial Intelligence},
  pages     = {689--744},
  year      = {2026},
  volume    = {337},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v337/boushehrian26a.html}
}</pre>
</div>

</div>
