---
layout: default
title: "Causal Discovery via Monotone Triangular Transport Maps"
permalink: /papers/causal-discovery-transport-maps/
description: "We use monotone triangular transport maps as a unifying tool for causal discovery. The same transport-map machinery supports conditional-independence testing, score-based discovery, and—under stronger assumptions—even uniqueness claims."
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
    <span class="paper-badge paper-badge--venue">NeurIPS 2023 — workshop on Optimal Transport and Machine Learning (OTML)</span>
  </div>

  <h1 class="paper-title">Causal Discovery via Monotone Triangular Transport Maps</h1>

  <div class="paper-authors">Sina Akbari · Luca Ganassali · Negar Kiyavash</div>
  
  <div class="paper-venue-line">NeurIPS 2023 Workshop on Optimal Transport and Machine Learning · 2023</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/causal-discovery-transport-maps/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--venue" href="https://neurips.cc/virtual/2023/74553">NeurIPS workshop</a> <a class="paper-resource paper-resource--venue" href="https://otmlworkshop.github.io/accepted_papers/">OTML</a> <a class="paper-resource paper-resource--openreview" href="https://openreview.net/forum?id=PMGGrKTIii">OpenReview</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal discovery</span> <span class="paper-keyword">optimal transport</span> <span class="paper-keyword">conditional independence</span> <span class="paper-keyword">transport maps</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Monotone triangular transport maps turn distribution fitting into a tool for causal discovery. They give noise-agnostic conditional-independence tests for constraint-based learning and a new score for score-based learning. With stronger model assumptions, the same framework can identify a unique causal graph.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It uses transport maps as a flexible bridge between distribution modeling and causal discovery. The same machinery supports both conditional-independence testing and score-based structure learning beyond simple Gaussian models.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Transport maps do more than fit distributions. We show that they can be turned into a flexible engine for causal discovery.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">optimal transport</span> <span class="paper-setup-chip">transport maps</span> <span class="paper-setup-chip">conditional independence</span> <span class="paper-setup-chip">causal discovery</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Many causal-discovery tools are tightly tied to simple distributional assumptions, such as linear-Gaussian structure. We want discovery machinery that remains flexible while still being statistically and computationally useful.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>Monotone triangular transport maps give a rich representation of distributions. Once we can fit them well, we can use the representation to test conditional independence or score candidate graphs in a causally meaningful way.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We show how monotone triangular transport maps can power both constraint-based and score-based causal-discovery procedures.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Why it matters</span>
        
        <p>The framework broadens the distributional scope of causal discovery while keeping one coherent mathematical tool at the center.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Fit monotone triangular transport maps to the observed distribution.</li>
<li>Use the fitted maps to test conditional independences or evaluate graph scores.</li>
<li>Run the corresponding discovery routine.</li>
<li>Under stronger assumptions, leverage the same machinery for sharper identification of the graph.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that transport-map-based discovery can work beyond the narrow settings in which simpler models are comfortable. The attractive feature is versatility: one tool supports several discovery tasks.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You want causal discovery with flexible distributional modeling.</li>
<li>You are interested in optimal-transport ideas beyond pure density fitting.</li>
<li>You want one framework that can support both testing and score-based discovery.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The method relies on fitting transport maps well, so computational quality in that stage matters.</li>
<li>Its appeal is breadth and flexibility rather than dependence on a single narrow model class.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@inproceedings{akbari2023transport,
  title     = {Causal Discovery via Monotone Triangular Transport Maps},
  author    = {Sina Akbari and Luca Ganassali and Negar Kiyavash},
  booktitle = {NeurIPS 2023 Workshop on Optimal Transport and Machine Learning},
  year      = {2023},
  url       = {https://openreview.net/forum?id=PMGGrKTIii}
}</pre>
</div>

</div>
