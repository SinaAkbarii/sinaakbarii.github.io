---
layout: default
title: "Estimating Causal Bounds from Observational Data With Neural Generative Models"
permalink: /papers/neural-generative-bounds/
description: "We estimate causal bounds in discrete structural causal models using neural generative models, an energy-distance loss, and extrapolation to the exact-fit limit. Across instrumental-variable, proxy, and mediated benchmarks, the resulting bounds are consistently more accurate than those of the evaluated neural baselines."
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
    <span class="paper-badge paper-badge--venue">arXiv 2026</span>
  </div>

  <h1 class="paper-title">Estimating Causal Bounds from Observational Data With Neural Generative Models</h1>

  <div class="paper-authors">Max Zhu · Srivathsan Amruth · Sina Akbari · Qingyuan Zhao</div>
  <div class="paper-venue-line">arXiv preprint · 2026</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/neural-generative-bounds/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--venue" href="https://arxiv.org/abs/2610.25246v1">arXiv</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">partial identification</span> <span class="paper-keyword">causal bounds</span> <span class="paper-keyword">neural generative models</span> <span class="paper-keyword">energy distance</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>When hidden confounding prevents point identification, we estimate the range of causal effects compatible with the observed data and a given graph. We represent discrete causal mechanisms with neural networks, fit the observational distribution using energy distance, and extrapolate a family of penalised fits to estimate the lower and upper bounds.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Exact causal-bounding methods can become expensive as models grow, while existing neural approaches can struggle to recover accurate endpoints. Extrapolation uses the behaviour of stable fits to improve bound estimation, with a local theoretical explanation and benchmarks against known sharp bounds.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Identifying causal bounds from discrete observational data is a fundamental problem in causal inference. While exact analytical bounds exist for certain graphs, this is not generally the case. In this paper, we introduce a framework for estimating such bounds using neural generative models together with a new extrapolation procedure to estimate these bounds more accurately. Across multiple causal inference settings, it produces bounds that are consistently closer to the true bounds than those obtained with existing general neural approaches. We validate the framework on a range of benchmark problems for which exact bounds are available.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> The path of fitted causal effects across penalty values contains useful information about the bounds. Extrapolating that path to zero penalty can give more accurate endpoints than using the model trained at the smallest available penalty.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">discrete observed variables</span> <span class="paper-setup-chip">known causal graph</span> <span class="paper-setup-chip">latent confounding</span> <span class="paper-setup-chip">average treatment effect</span> <span class="paper-setup-chip">zero-penalty extrapolation</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Different structural causal models can generate the same observational distribution while implying different intervention effects. Finding the smallest and largest compatible effects requires optimising over those models, and neural optimisation becomes unreliable when the observational fit must be extremely precise.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>Train neural causal models at several stable, nonzero penalty values, then extrapolate the estimated effects to zero penalty. Positive penalties favour the lower endpoint, while negative penalties favour the upper endpoint. The two regression intercepts estimate the causal bounds.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Direct distribution matching</h3>
      <div class="paper-result">
        <span class="paper-result-label">Method contribution</span>
        <p>Each node network outputs categorical probabilities. We enumerate the finite observed state space and marginalise latent variables to compute observational and interventional distributions. A differentiable energy-distance loss fits the observed probabilities without adversarial training or sampling categorical outputs.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Why extrapolation works</h3>
      <div class="paper-result">
        <span class="paper-result-label">Local theory</span>
        <p>Along a smooth one-sided solution path approaching an exact observational fit, the causal effect changes linearly with the penalty to first order, while energy distance changes quadratically. If the path consists of global minimisers, its zero-penalty intercept recovers the corresponding bound within the neural model family.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Specify the causal graph and represent each observed variable's mechanism with a neural categorical model.</li>
        <li>Compute the model's observational probabilities and causal estimand by marginalising over latent draws.</li>
        <li>Train models to minimise energy distance plus a signed penalty on the causal estimand.</li>
        <li>Select a stable penalty range using the linear effect trend and the quadratic energy-distance diagnostic.</li>
        <li>Fit separate lines for positive and negative penalties and use their zero-penalty intercepts as the estimated lower and upper bounds.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>

<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>Across binary IV, ternary IV, proxy, and mediated benchmarks, our method estimates both endpoints more accurately than BCCE and NeuralPartialID. Exact optimisation remains strongest on the simple IV benchmarks, where Autobounds returns exact bounds. Our estimates are comparable to Autobounds on the proxy benchmark and more accurate on the mediated benchmark under the reported runs.</p>
</div>

<div class="paper-stat-grid">
  <div class="paper-stat"><strong>[−0.427, 0.361]</strong><span>exact ATE bounds in the illustrated ternary IV example</span></div>
  <div class="paper-stat"><strong>[−0.430, 0.363]</strong><span>bounds estimated with extrapolation</span></div>
  <div class="paper-stat"><strong>[−0.450, 0.388]</strong><span>approximate bounds from trained models without extrapolation</span></div>
</div>

<figure class="paper-figure">
  <img src="{{ '/papers/neural-generative-bounds/figures/penalty-extrapolation.png' | relative_url }}" alt="Four plots of the predicted average treatment effect and energy distance against the signed penalty. In the local regime, treatment effects follow separate linear trends and energy distance follows a quadratic trend; wider penalty ranges depart from these trends.">
  <figcaption>Figure 2 of the paper. The left pair shows the local linear effect trends and quadratic energy-distance trend used for extrapolation. The right pair shows where these approximations break down as the penalty magnitude increases.</figcaption>
</figure>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You have discrete observational data and a causal graph that allows latent confounding.</li>
        <li>You want lower and upper causal-effect estimates when point identification is unavailable.</li>
        <li>You need a flexible neural approach for settings where exact bounding becomes computationally difficult.</li>
        <li>You want to use optimisation-path diagnostics to improve the accuracy of neural bound estimates.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The method enumerates the finite observed state space, so its size remains a computational consideration.</li>
        <li>Extrapolation requires a stable, locally regular penalty range; optimisation can be unreliable very close to zero.</li>
        <li>The bound-recovery result assumes global minimisers and applies within the neural model family. Finite neural fits do not automatically certify population sharpness.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@misc{zhu2026estimating,
  title         = {Estimating Causal Bounds from Observational Data With Neural Generative Models},
  author        = {Max Zhu and Srivathsan Amruth and Sina Akbari and Qingyuan Zhao},
  year          = {2026},
  eprint        = {2610.25246},
  archivePrefix = {arXiv},
  url           = {https://arxiv.org/abs/2610.25246v1}
}</pre>
</div>

</div>
