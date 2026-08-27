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
    <p>Monotone triangular transport maps provide a common engine for both constraint-based and score-based causal discovery. We use them to build noise-agnostic CI tests, recover graphs up to Markov equivalence even with latent variables, and—under additive-noise or post-nonlinear structure—score candidate graphs for unique recovery.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Transport maps let causal discovery move beyond Gaussian or narrowly parametric CI tests while keeping one coherent representation of the full data distribution. The same fitted object supports sparsity discovery and stronger model-based orientation.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>We study the problem of causal structure learning from data using transport maps. Specifically, we first provide a constraint-based method which builds upon lower-triangular monotone parametric transport maps to design conditional independence tests which are agnostic to the noise distribution. We provide an algorithm for causal discovery up to Markov Equivalence for general structural equations and noise distributions, which allows for settings with latent variables. Our approach also extends to score-based causal discovery by providing a novel means for defining scores. This allows us to uniquely recover the causal graph under additional identifiability and structural assumptions, such as additive noise or post-nonlinear models. We provide experimental results to compare the proposed approach with the state of the art on both synthetic and real-world datasets.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Transport maps are not only distribution estimators: they provide a unified toolkit for conditional-independence testing, graph recovery, and structural scoring.
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
      <h3>3. Noise-agnostic constraint-based discovery</h3>
      <div class="paper-result">
        <span class="paper-result-label">Method + theory</span>
        <p>We use lower-triangular monotone transport maps to construct conditional-independence tests for general continuous distributions and integrate them into a PC-style causal-discovery procedure. The method recovers the graph up to Markov equivalence and can be used in the presence of latent variables.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Unique recovery under structural models</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>For additive-noise and post-nonlinear structural equation models, we derive transport-map characterizations that are necessary and sufficient for membership in these model classes. These characterizations yield scores that can distinguish candidate DAGs within a Markov equivalence class.</p>
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

<h2>What the numerical experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>In non-Gaussian synthetic experiments, PC-OT outperforms Gaussian-PC and correlation-based Grow-Shrink once the sample size is sufficiently large, reducing both misoriented edges and overall graph loss. In the additive-noise experiment, the transport-based score clearly separates the true causal ordering from the other DAGs in the same Markov equivalence class.</p>
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
        <li>The same transport-map fit supports both constraint-based and score-based discovery, so sparsity learning and stronger causal orientation live in one framework.</li>
        <li>The constraint-based component is designed to be agnostic to the noise distribution, while stronger ANM/PNL structure can be used when available to obtain unique recovery.</li>
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
