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
    <p>When observations alone cannot identify a causal effect, which interventions should we pay for? We cast minimum-cost identification as a hitting-set problem, prove the exact problem is NP-complete, and give optimal, approximate, and fast heuristic methods. In simulations, the heuristics stay close to the minimum cost.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It gives a systematic way to spend experimental budget only where identification needs it. The causal design problem becomes a concrete combinatorial optimization problem with provable guarantees.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Instead of asking whether an effect is identifiable, we ask the more practical question: what is the best set of experiments to make it identifiable? We give a systematic answer.
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
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We provide algorithms and structural insights for selecting experiments that make a causal effect identifiable while controlling intervention cost.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Practical payoff</span>
        
        <p>The output is not just a yes/no answer about identifiability. We return a concrete experimental plan, which is exactly what a practitioner needs.</p>
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

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that structure-aware optimization can find small, effective intervention sets without exhaustively testing all possibilities. In other words, identification-guided design can be computationally practical.</p>
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
        <li>The method assumes a causal graph or a scientifically justified graph class to design against.</li>
<li>The value comes from targeting identifiability, so the quality of the design still depends on the quality of the causal assumptions.</li>
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
