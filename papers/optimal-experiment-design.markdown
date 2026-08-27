---
layout: default
title: "Optimal Experiment Design for Causal Effect Identification"
permalink: /papers/optimal-experiment-design/
description: "We study which experiments should be run when observational data alone do not identify a target causal effect. We show how to choose interventions in a principled, cost-aware way, turning causal identifiability into an experiment-design problem rather than an ad hoc search over possible manipulations."
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
    <span class="paper-badge paper-badge--venue">JMLR 2025</span>
  </div>

  <h1 class="paper-title">Optimal Experiment Design for Causal Effect Identification</h1>

  <div class="paper-authors">Sina Akbari · Jalal Etesami · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Journal of Machine Learning Research · 2025</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/optimal-experiment-design/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/SinaAkbarii/min_cost_intervention/tree/main">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://www.jmlr.org/papers/v26/22-1516.html">JMLR</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal identification</span> <span class="paper-keyword">experiment design</span> <span class="paper-keyword">interventions</span> <span class="paper-keyword">combinatorial optimization</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>When observational data cannot identify a target causal effect, we ask which interventions should be performed at minimum cost. We prove the exact design problem is NP-complete, connect it to minimum hitting set, and give exact, logarithmic-approximation, and polynomial-time heuristic algorithms. Simulations show the heuristics achieve low regret on random causal graphs.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>The result turns causal identifiability into an actionable experiment-design problem with variable-specific costs and provable guarantees. It tells us how to spend experimental budget specifically on the interventions needed for the causal query of interest.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Pearl’s do calculus is a complete axiomatic approach to learn the identifiable causal effects from observational data. When such an effect is not identifiable, it is necessary to perform a collection of often costly interventions in the system to learn the causal effect. In this work, we consider the problem of designing a collection of interventions with the minimum cost to identify the desired effect. First, we prove that this problem is NP-complete and subsequently propose an algorithm that can either find the optimal solution or a logarithmic-factor approximation of it. This is done by establishing a connection between our problem and the minimum hitting set problem. Additionally, we propose several polynomial time heuristic algorithms to tackle the computational complexity of the problem. Although these algorithms could potentially stumble on sub-optimal solutions, our simulations show that they achieve small regrets on random graphs.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> We turn the question “what should we intervene on?” into a principled optimization problem with exact algorithms, approximation guarantees, and fast practical heuristics.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">causal identifiability</span> <span class="paper-setup-chip">intervention design</span> <span class="paper-setup-chip">cost-aware experiments</span> <span class="paper-setup-chip">graph algorithms</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>When a target effect is not identifiable from observational data, the next question is not theoretical but operational: which interventions should we perform? Naively searching through all intervention combinations is combinatorial and quickly becomes infeasible.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We convert identification into an optimization problem over candidate experiments. The design criterion targets identifiability itself, so the selected interventions are chosen because they unlock the causal query we care about.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Complexity of optimal design</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We prove that finding a minimum-cost intervention set for identifying a specific causal effect is NP-complete. We also show that obtaining a sub-logarithmic-factor approximation is NP-hard.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Exact and approximate design</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory + algorithm</span>
        <p>We reduce the design problem to minimum hitting set. This yields an algorithm that can recover the exact optimum and, when used approximately, gives a logarithmic-factor approximation. We also develop polynomial-time heuristics and identify special cases that admit efficient exact solutions.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Specify the target effect and the causal graph.</li>
<li>Characterize which intervention sets would identify the target.</li>
<li>Optimize over those sets under a cost criterion.</li>
<li>Return the cheapest or otherwise best experimental design.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the simulations show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>On randomly generated causal graphs, the polynomial-time heuristics consistently return intervention sets whose costs are close to the optimum. The simulations support the practical value of the fast heuristics when exact combinatorial optimization is unnecessary or too expensive.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You know your observational data are not enough and need to plan follow-up experiments.</li>
<li>You want to spend intervention budget only where it helps identify the causal query.</li>
<li>You need a principled bridge between identifiability theory and experimental planning.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The framework allows interventions to carry different costs and also allows some variables to be unavailable for intervention.</li>
        <li>Beyond the general NP-complete problem, the paper identifies special graph/design regimes that can be solved exactly in polynomial time.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@article{akbari2025optimal,
  author  = {Sina Akbari and Jalal Etesami and Negar Kiyavash},
  title   = {Optimal Experiment Design for Causal Effect Identification},
  journal = {Journal of Machine Learning Research},
  year    = {2025},
  volume  = {26},
  number  = {28},
  pages   = {1--56},
  url     = {https://www.jmlr.org/papers/v26/22-1516.html}
}</pre>
</div>

</div>
