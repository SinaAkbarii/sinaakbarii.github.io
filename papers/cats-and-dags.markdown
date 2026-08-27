---
layout: default
title: "CaTs and DAGs: Integrating Directed Acyclic Graphs with Transformers for Causally Constrained Predictions"
permalink: /papers/cats-and-dags/
description: "We combine known causal graph structure with neural prediction architectures. The result is a causally constrained predictive model that can respect a given DAG rather than forcing a generic network to rediscover or ignore the structure on its own."
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
    <span class="paper-badge paper-badge--venue">ICLR 2026</span>
  </div>

  <h1 class="paper-title">CaTs and DAGs: Integrating Directed Acyclic Graphs with Transformers for Causally Constrained Predictions</h1>

  <div class="paper-authors">Matthew James Vowels · Mathieu Rochat · Sina Akbari</div>
  
  <div class="paper-venue-line">The Fourteenth International Conference on Learning Representations · 2026</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/cats-and-dags/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/matthewvowels1/Causal_Transformer">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.iclr.cc/paper_files/paper/2026/hash/2456a42386e445ba884511aa17ca4a30-Abstract-Conference.html">ICLR</a> <a class="paper-resource paper-resource--talk" href="https://slideslive.com/39057250/cats-and-dags-integrating-directed-acyclic-graphs-for-actually-causal-transformers">Talk</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal machine learning</span> <span class="paper-keyword">transformers</span> <span class="paper-keyword">DAGs</span> <span class="paper-keyword">robustness</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Standard neural networks can ignore causal structure that we already know. CaTs and causal fully connected networks bake a user-specified DAG into the architecture, so predictions respect the allowed causal pathways. The aim is better robustness under distribution shift and clearer interpretation without giving up expressive models.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It lets neural predictors respect causal structure that is known in advance. That can improve robustness to covariate shift while making the allowed information flow much easier to interpret.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Artificial Neural Networks (ANNs), including fully-connected networks and transformers, are highly flexible and powerful function approximators, widely applied in fields like computer vision and natural language processing. However, their inability to inherently respect causal structures can limit their robustness, making them vulnerable to covariate shift and difficult to interpret/explain. This poses significant challenges for their reliability in real-world applications. In this paper, we introduce Causal Transformers (CaTs), a general model class designed to operate under predefined causal constraints, as specified by a Directed Acyclic Graph (DAG). CaTs retain the powerful function approximation abilities of traditional neural networks while adhering to the underlying structural constraints, improving robustness, reliability, and interpretability at inference time. This approach opens new avenues for deploying neural networks in more demanding, real-world scenarios where robustness and explainability is critical.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> The central idea is to make predictive models obey the causal structure we already trust. Instead of hoping a black-box model learns the right inductive bias, we build that bias in.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">causal machine learning</span> <span class="paper-setup-chip">DAG-informed prediction</span> <span class="paper-setup-chip">transformers</span> <span class="paper-setup-chip">robustness under shift</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Standard neural networks optimize predictive fit, but they do not automatically respect known causal structure. That can hurt interpretability and robustness, especially under interventions or distribution shift.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We use the DAG as an architectural constraint. The network only allows information flow that is compatible with the graph, so prediction is tied directly to the assumed causal structure.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Structural guarantee</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We prove that the CaT predictive distribution factorizes according to the supplied DAG. The same masked architecture implements the truncated factorization used by the g-formula, so intervention queries identified by the DAG can be computed directly through the network.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Robustness guarantee</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We prove structural robustness to covariate shift: when the causal mechanisms are shared across domains, shifts in variables that are not ancestors of the target do not change the CaT predictor. The corresponding identified causal queries are transportable in the large-sample limit.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Start from a known or trusted DAG.</li>
<li>Translate the graph into architectural constraints on information flow.</li>
<li>Train the resulting neural predictor with the same data as a standard baseline.</li>
<li>Evaluate not only predictive performance but also robustness under interventions or covariate shifts.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>

<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments make the value of structural constraints visible. In the motivating simulation, the true-DAG CaT attains an ATE estimation error of 0.058 versus 2.379 for a standard transformer, and CaT/CFCN remain stable under the induced covariate shift while unconstrained baselines deteriorate sharply. On the Twins and Jobs benchmarks, CaT and CFCN remain competitive with methods specialized for causal inference, and the real psychology application shows that CaT can work directly with the full multidimensional questionnaire representation.</p>
</div>

<div class="paper-stat-grid">
  <div class="paper-stat"><strong>0.058</strong><span>eATE for true-DAG CaT</span></div>
  <div class="paper-stat"><strong>2.379</strong><span>eATE for a standard transformer</span></div>
  <div class="paper-stat"><strong>895</strong><span>participants in the psychology application</span></div>
</div>

<figure class="paper-figure">
  <img src="{{ '/papers/cats-and-dags/figures/shift-robustness.png' | relative_url }}" alt="Test mean squared error under no shift and covariate shift for causal and non-causal models.">
  <figcaption>Figure 1 from the paper. CaT and CFCN remain stable under the induced shift, while the unconstrained transformer, MLP, and random forest incur much larger test error.</figcaption>
</figure>

<figure class="paper-figure">
  <img src="{{ '/papers/cats-and-dags/figures/absolute-ate-error.png' | relative_url }}" alt="Absolute ATE estimation error across different models and graph specifications.">
  <figcaption>Figure 6 from the supplementary material. The true-DAG CaT and CFCN achieve much smaller ATE estimation error than the false-DAG variants and unconstrained baselines.</figcaption>
</figure>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You already know or trust a causal graph and want your predictor to use it.</li>
        <li>You care about robustness to intervention or covariate shift rather than only i.i.d. test accuracy.</li>
        <li>You want a predictive model that is easier to interpret in causal terms.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>CaT is designed for settings where structural knowledge is available and can be used both for robust prediction and for causal queries identified by the supplied DAG.</li>
        <li>The same masking principle also gives CFCNs, showing that the structural idea is broader than the transformer architecture itself.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@inproceedings{vowels2026cats,
  title     = {CaTs and DAGs: Integrating Directed Acyclic Graphs with Transformers for Causally Constrained Predictions},
  author    = {Matthew James Vowels and Mathieu Rochat and Sina Akbari},
  booktitle = {The Fourteenth International Conference on Learning Representations},
  year      = {2026},
  url       = {https://openreview.net/forum?id=ZIQactmQxb}
}</pre>
</div>

</div>
