---
layout: default
title: "Fast Proxy Experiment Design for Causal Effect Identification"
permalink: /papers/fast-proxy-experiment-design/
description: "We study how to design proxy experiments for causal effect identification when direct interventions are too expensive or impossible. The paper gives a fast algorithmic framework for selecting cheaper interventions on proxy variables that still unlock the target effect."
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
    <span class="paper-badge paper-badge--venue">NeurIPS 2024</span>
  </div>

  <h1 class="paper-title">Fast Proxy Experiment Design for Causal Effect Identification</h1>

  <div class="paper-authors">Sepehr Elahi<sup>*</sup> · Sina Akbari<sup>*</sup> · Jalal Etesami · Negar Kiyavash · Patrick Thiran</div>
  <div class="paper-note"><sup>*</sup> Equal contribution.</div>
  
  <div class="paper-venue-line">Advances in Neural Information Processing Systems · 2024</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/fast-proxy-experiment-design/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/5bd9fbb3a5a985f80c16ddd0ec1dfc43-Abstract.html">NeurIPS</a> <a class="paper-resource paper-resource--slides" href="https://neurips.cc/media/neurips-2024/Slides/96127.pdf">Slides</a> <a class="paper-resource paper-resource--poster" href="https://sepehrelahi.com/assets/pdf/fastproxy_poster.pdf">Poster</a> <a class="paper-resource paper-resource--talk" href="https://recorder-v3.slideslive.com/?s=7e563e56-4470-492b-9376-b27f84e3788e&amp;share=95761">Video</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal identification</span> <span class="paper-keyword">experiment design</span> <span class="paper-keyword">proxy interventions</span> <span class="paper-keyword">optimization</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>We revisit minimum-cost proxy experiment design and reformulate the problem as weighted Max-SAT and integer linear programming, producing exact algorithms that are dramatically faster in practice. We also develop a polynomial-time adjustment-set-based heuristic that improves on previous heuristics.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>The work makes exact proxy experiment design far more usable. Instead of solving exponentially many NP-hard subproblems, we exploit mature optimization formulations and obtain speedups of several orders of magnitude while preserving exact optimality.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Identifying causal effects is a key problem of interest across many disciplines. The two long-standing approaches to estimate causal effects are observational and experimental (randomized) studies. Observational studies can suffer from unmeasured confounding, which may render the causal effects unidentifiable. On the other hand, direct experiments on the target variable may be too costly or even infeasible to conduct. A middle ground between these two approaches is to estimate the causal effect of interest through proxy experiments, which are conducted on variables with a lower cost to intervene on compared to the main target. In an earlier work, we studied this setting and demonstrated that the problem of designing the optimal (minimum-cost) experiment for causal effect identification is NP-complete and provided a naive algorithm that may require solving exponentially many NP-hard problems as a sub-routine in the worst case. In this work, we provide a few reformulations of the problem that allow for designing significantly more efficient algorithms to solve it as witnessed by our extensive simulations. Additionally, we study the closely-related problem of designing experiments that enable us to identify a given effect through valid adjustments sets.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> The same hard causal-design problem can become dramatically easier in practice when it is formulated in the right optimization language.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">proxy interventions</span> <span class="paper-setup-chip">experiment design</span> <span class="paper-setup-chip">causal identification</span> <span class="paper-setup-chip">efficient optimization</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Direct interventions on the most scientifically natural variables may be costly, unethical, or impossible. We therefore need a principled way to identify the target effect using cheaper interventions elsewhere in the system.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We search over proxy interventions rather than direct ones, and do so with algorithms designed to be fast enough for practical use. The key is to target identifiability while exploiting structure in the design space.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. New exact formulations</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory + algorithm</span>
        <p>We reformulate minimum-cost intervention design as partially weighted Max-SAT and integer linear programming, with additional formulations through submodular maximization and reinforcement learning. The resulting exact algorithms avoid the super-exponential dependence on the number of districts present in the earlier approach.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Adjustment-set proxy design</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory + algorithm</span>
        <p>We formulate minimum-cost experiment design for obtaining a valid adjustment set and derive a polynomial-time heuristic for the broader minimum-cost identification problem. This adjustment-based route is both interpretable and computationally efficient.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Specify the target effect and the intervention costs.</li>
<li>Characterize which proxy interventions are identification-relevant.</li>
<li>Search the resulting design space efficiently.</li>
<li>Return a low-cost intervention plan that identifies the target.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The new exact formulations are dramatically faster than the previous minimal-hedge solver: the ILP implementation is typically one to two orders of magnitude faster, while the Max-SAT implementation is four to five orders of magnitude faster in the single-district experiments. The new polynomial-time heuristic also consistently achieves lower normalized cost than the previous H1 and H2 heuristics.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You want identifiability but cannot afford direct interventions on key variables.</li>
<li>You need an algorithmic way to compare many proxy intervention candidates.</li>
<li>You care about the design of practical follow-up experiments rather than identifiability in the abstract.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The paper offers both exact optimization formulations and a fast heuristic, so the same framework supports different computational budgets.</li>
        <li>The ILP formulation is particularly convenient when extra design constraints or domain knowledge need to be incorporated explicitly.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@inproceedings{elahi2024fast,
  title     = {Fast Proxy Experiment Design for Causal Effect Identification},
  author    = {Sepehr Elahi and Sina Akbari and Jalal Etesami and Negar Kiyavash and Patrick Thiran},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {37},
  pages     = {51254--51283},
  year      = {2024},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2024/hash/5bd9fbb3a5a985f80c16ddd0ec1dfc43-Abstract.html}
}</pre>
</div>

</div>
