---
layout: default
title: "Minimum Cost Intervention Design for Causal Effect Identification"
permalink: /papers/minimum-cost-intervention-design/
description: "We study how to identify a causal effect at minimum experimental cost. Rather than assuming any intervention is equally feasible, we assign costs to candidate experiments and ask for the cheapest intervention design that makes the target effect identifiable."
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
    <span class="paper-badge paper-badge--venue">ICML 2022</span> <span class="paper-badge paper-badge--status">ORAL</span> <span class="paper-badge paper-badge--award">🏆 Outstanding Paper Runner-up Award</span>
  </div>

  <h1 class="paper-title">Minimum Cost Intervention Design for Causal Effect Identification</h1>

  <div class="paper-authors">Sina Akbari · Jalal Etesami · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Proceedings of the 39th International Conference on Machine Learning · 2022</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/minimum-cost-intervention-design/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/SinaAkbarii/min_cost_intervention/tree/main">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://icml.cc/virtual/2022/oral/17380">ICML</a> <a class="paper-resource paper-resource--slides" href="https://icml.cc/media/icml-2022/Slides/17380_5TIv6sn.pdf">Slides</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.mlr.press/v162/akbari22a.html">PMLR</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal identification</span> <span class="paper-keyword">intervention design</span> <span class="paper-keyword">combinatorial optimization</span> <span class="paper-keyword">do-calculus</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>When a target causal effect is not identifiable from observations alone, we design the cheapest set of permitted interventions that makes it identifiable. We prove the problem is NP-hard, connect it to minimum hitting set, and give exact, logarithmic-approximation, and polynomial-time heuristic algorithms.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>This turns causal-effect identification into an experiment-planning problem with a real cost objective. The output is not just a statement that more experiments are needed, but a concrete low-cost intervention plan.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Pearl’s do calculus is a complete axiomatic approach to learn the identifiable causal effects from observational data. When such an effect is not identifiable, it is necessary to perform a collection of often costly interventions in the system to learn the causal effect. In this work, we consider the problem of designing the collection of interventions with the minimum cost to identify the desired effect. First, we prove that this problem is NP-hard and subsequently propose an algorithm that can either find the optimal solution or a logarithmic-factor approximation of it. This is done by establishing a connection between our problem and the minimum hitting set problem. Additionally, we propose several polynomial time heuristic algorithms to tackle the computational complexity of the problem. Although these algorithms could potentially stumble on sub-optimal solutions, our simulations show that they achieve small regrets on random graphs.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Causal identifiability becomes an actionable design problem: find the least expensive interventions that unlock the target effect.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">minimum-cost design</span> <span class="paper-setup-chip">causal identification</span> <span class="paper-setup-chip">intervention planning</span> <span class="paper-setup-chip">do-calculus</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Once observational data fail to identify the target effect, the key practical question is which experiments to run. Without a cost model, the answer is incomplete because some interventions are far more expensive than others.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We optimize over interventions with an explicit cost objective. That lets us return a concrete, budget-aware plan rather than only saying that some intervention somewhere would suffice.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Complexity of minimum-cost identification</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We prove that the minimum-cost intervention-design problem is NP-hard and connect its combinatorial structure to minimum hitting set.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Exact, approximate, and heuristic solvers</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory + algorithm</span>
        <p>The hitting-set formulation yields an algorithm that can recover the optimum or a logarithmic-factor approximation. We also develop polynomial-time heuristics for settings where a very fast design is preferred.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Specify the target effect, graph, and intervention costs.</li>
<li>Characterize which intervention sets identify the target.</li>
<li>Optimize over feasible intervention designs.</li>
<li>Return the minimum-cost design and the resulting identification guarantee.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the simulations show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>On randomly generated causal graphs, the polynomial-time heuristics achieve low regret relative to the optimal intervention cost. The experiments show that useful near-optimal designs can be obtained without solving the full combinatorial problem exactly.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You need to plan interventions under a real experimental budget.</li>
<li>You want a concrete design recommendation rather than a generic identifiability statement.</li>
<li>You care about which experiments are worth paying for when observational data are insufficient.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The design objective supports variable-specific intervention costs and can respect interventions that are unavailable or prohibited.</li>
        <li>The method targets one causal query directly, avoiding the extra cost of designing experiments to identify every possible effect in the graph.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@InProceedings{pmlr-v162-akbari22a,
  title     = {Minimum Cost Intervention Design for Causal Effect Identification},
  author    = {Akbari, Sina and Etesami, Jalal and Kiyavash, Negar},
  booktitle = {Proceedings of the 39th International Conference on Machine Learning},
  pages     = {258--289},
  year      = {2022},
  volume    = {162},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v162/akbari22a.html}
}</pre>
</div>

</div>
