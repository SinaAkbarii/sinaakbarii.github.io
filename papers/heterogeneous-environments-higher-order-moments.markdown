---
layout: default
title: "Causal Effect Identification in Heterogeneous Environments from Higher-Order Moments"
permalink: /papers/heterogeneous-environments-higher-order-moments/
description: "We study when heterogeneity across environments can identify a causal effect even in the presence of latent confounding. By exploiting higher-order moments, we show that cross-environment variation can carry identifying information that is invisible to lower-order analyses."
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

  <h1 class="paper-title">Causal Effect Identification in Heterogeneous Environments from Higher-Order Moments</h1>

  <div class="paper-authors">Yaroslav Kivva · Sina Akbari · Saber Salehkaleybar · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Proceedings of the Forty-first Conference on Uncertainty in Artificial Intelligence · 2025</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/heterogeneous-environments-higher-order-moments/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/SinaAkbarii/IdentificationMultipleDomain">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.mlr.press/v286/kivva25a.html">UAI / PMLR</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal identification</span> <span class="paper-keyword">latent confounding</span> <span class="paper-keyword">heterogeneous environments</span> <span class="paper-keyword">higher-order moments</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Multiple environments can reveal a causal effect even with latent confounding, if the effect stays invariant and the heterogeneity is structured. Higher-order moments identify and estimate the effect when only one part of the data-generating mechanism changes across environments. If both the latent and treatment noise distributions change, identification can fail.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It turns heterogeneity across environments into identifying information rather than nuisance variation. Under the right invariances, higher-order moments can recover effects that latent confounding would otherwise hide.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Heterogeneity is often treated as a nuisance. We use it as signal. The paper shows that multiple environments can reveal a causal effect through higher-order moment structure.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">multiple environments</span> <span class="paper-setup-chip">latent confounding</span> <span class="paper-setup-chip">higher-order moments</span> <span class="paper-setup-chip">causal identification</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Latent confounding can block identification of a causal effect even when several environments are available. The question is whether cross-environment changes can still be turned into usable identifying information.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We look beyond means and second moments. Higher-order moments capture asymmetries and other structure that can distinguish candidate causal effects across heterogeneous environments.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We characterize when higher-order cross-environment information identifies the causal effect uniquely, when it leaves only a small ambiguity, and when the problem remains non-identifiable.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Practical meaning</span>
        
        <p>The paper turns multi-environment heterogeneity into an identification resource rather than something to average away.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Model how environments differ while allowing latent confounding to remain.</li>
<li>Express the target causal effect through moment relations across environments.</li>
<li>Use higher-order moment information to narrow the candidate set of effects.</li>
<li>Classify the resulting identification regime.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The simulations illustrate the distinct identification regimes very clearly: some settings yield a unique effect, some leave only two candidates, and some remain impossible. That picture helps explain what the higher-order conditions are buying.</p>
</div>

<div class="paper-stat-grid">
<div class="paper-stat"><strong>2 environments</strong><span>enough for the core identification results</span></div>
<div class="paper-stat"><strong>1 unknown change</strong><span>can be diagnosed from higher-order moments</span></div>
<div class="paper-stat"><strong>bias → 0</strong><span>for the proposed estimators in identifiable regimes</span></div>
</div>

<figure class="paper-figure">
  <img src="{{ '/papers/heterogeneous-environments-higher-order-moments/figures/relative-bias-four-regimes.png' | relative_url }}" alt="Simulation figure with four subplots showing relative bias across sample sizes for several identification regimes.">
  <figcaption>Figure 4 of the paper. Across the identifiable regimes, the proposed moment-based procedures move toward the true treatment effect as sample size grows, while separate-domain and pooled linear-regression baselines retain systematic confounding bias.</figcaption>
</figure>

<figure class="paper-figure">
  <img src="{{ '/papers/heterogeneous-environments-higher-order-moments/figures/two-domain-graph.png' | relative_url }}" alt="Causal graph for the two-domain latent-confounding setup used in the higher-order-moments paper.">
  <figcaption>Figure 1 of the paper. I also included the core two-domain causal graph because it helps explain what changes across environments and why higher-order moments can unlock identification in some regimes but not in others.</figcaption>
</figure>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You have data from multiple environments and suspect latent confounding.</li>
        <li>Mean-level variation is not enough, but richer distributional information is available.</li>
        <li>You want to know not only whether identification holds, but also what kind of ambiguity remains when it does not.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The method relies on informative cross-environment heterogeneity; if the environments differ too little, the extra moment conditions have little leverage.</li>
        <li>The contribution is about identification structure, so the payoff is largest when the scientific question justifies a multi-environment view.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@InProceedings{pmlr-v286-kivva25a,
  title     = {Causal Effect Identification in Heterogeneous Environments from Higher-Order Moments},
  author    = {Kivva, Yaroslav and Akbari, Sina and Salehkaleybar, Saber and Kiyavash, Negar},
  booktitle = {Proceedings of the Forty-first Conference on Uncertainty in Artificial Intelligence},
  pages     = {2223--2254},
  year      = {2025},
  volume    = {286},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v286/kivva25a.html}
}</pre>
</div>

</div>
