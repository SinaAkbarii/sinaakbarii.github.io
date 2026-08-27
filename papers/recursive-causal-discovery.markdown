---
layout: default
title: "Recursive Causal Discovery"
permalink: /papers/recursive-causal-discovery/
description: "We study how to make constraint-based causal discovery more scalable and less statistically brittle. The key idea is to recursively peel off variables whose local structure can be certified, reducing the global graph-learning problem to a sequence of simpler local ones."
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

  <h1 class="paper-title">Recursive Causal Discovery</h1>

  <div class="paper-authors">Ehsan Mokhtarian · Sepehr Elahi · Sina Akbari · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Journal of Machine Learning Research · 2025</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/recursive-causal-discovery/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/ban-epfl/rcd">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://www.jmlr.org/papers/v26/24-0384.html">JMLR</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal discovery</span> <span class="paper-keyword">recursive algorithms</span> <span class="paper-keyword">conditional independence</span> <span class="paper-keyword">structure learning</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Recursive causal discovery repeatedly identifies a removable variable, learns its local structure, removes it, and solves a smaller problem. We unify four recursive algorithms—MARVEL, L-MARVEL, RSL, and ROL—show that their worst-case complexity nearly matches lower bounds for constraint-based discovery, and release them in the RCD Python package.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Recursion attacks two bottlenecks at once: it reduces the total number of conditional-independence tests and keeps conditioning sets smaller as the graph shrinks. The result is a unified causal-discovery toolkit with both theoretical efficiency and a practical implementation.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Causal discovery from observational data, i.e., learning the causal graph from a finite set of samples from the joint distribution of the variables, is often the first step toward the identification and estimation of causal effects, a key requirement in numerous scientific domains. Causal discovery is hampered by two main challenges: limited data results in errors in statistical testing and the computational complexity of the learning task is daunting. This paper builds upon and extends four of our prior publications (Mokhtarian et al., 2021; Akbari et al., 2021; Mokhtarian et al., 2022, 2023a). These works introduced the concept of removable variables, which are the only variables that can be removed recursively for the purpose of causal discovery. Presence and identification of removable variables allow recursive approaches for causal discovery, a promising solution that helps to address the aforementioned challenges by reducing the problem size successively. This reduction not only minimizes conditioning sets in each conditional independence (CI) test, leading to fewer errors but also significantly decreases the number of required CI tests. The worst-case performances of these methods nearly match the lower bound. In this paper, we present a unified framework for the proposed algorithms, refined with additional details and enhancements for a coherent presentation. A comprehensive literature review is also included, comparing the computational complexity of our methods with existing approaches, showcasing their state-of-the-art efficiency. Another contribution of this paper is the release of RCD, a Python package that efficiently implements these algorithms. This package is designed for practitioners and researchers interested in applying these methods in practical scenarios. The package is available at github.com/ban-epfl/rcd, with comprehensive documentation provided at rcdpackage.com.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> A hard global causal-discovery problem can be decomposed into a sequence of smaller local problems, with complexity that comes close to the theoretical limits of constraint-based methods.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">causal discovery</span> <span class="paper-setup-chip">recursive algorithms</span> <span class="paper-setup-chip">conditional independence</span> <span class="paper-setup-chip">high-dimensional structure learning</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Constraint-based discovery often struggles because it repeatedly performs difficult conditional-independence tests over large conditioning sets. This makes both sample complexity and runtime deteriorate quickly as the graph grows.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We exploit removable-variable logic: if a variable has the right local properties, we can identify it, remove it, and recurse on the smaller problem. That changes the computational profile of causal discovery in a fundamental way.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Recursive discovery framework</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We formalize removable variables and removable orders, characterize when variables can be safely eliminated, and show how recursive removal supports causal discovery in both DAG and latent-variable settings.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Near-optimal complexity</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory + software</span>
        <p>We derive worst-case complexity bounds for the recursive algorithms and lower bounds for constraint-based causal discovery, with the proposed methods nearly matching those limits. We also provide the open-source RCD package implementing MARVEL, L-MARVEL, RSL, and ROL.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Use local conditional-independence information to identify a removable variable.</li>
<li>Orient or record the corresponding structural relations.</li>
<li>Delete that variable and recurse on the smaller graph.</li>
<li>Assemble the full causal graph from the recursive outputs.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>Across linear and nonlinear synthetic models and a collection of real-world Bayesian-network structures, the recursive algorithms reduce process time substantially while remaining highly accurate. The benchmarks also show that the methods scale to graph sizes that are difficult for standard constraint-based baselines.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You want a scalable alternative to standard constraint-based causal discovery.</li>
<li>Your main bottleneck is large conditioning sets and unstable conditional-independence tests.</li>
<li>You care about structure learning in graphs where locality can be exploited.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>RCD is a unified framework rather than a single algorithm: different recursive variants cover DAGs, latent-variable settings, and permutation-based discovery.</li>
        <li>The package provides a practical implementation of the theory, with documentation and reusable Python code for large-scale experiments.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@article{JMLR:v26:24-0384,
  author  = {Ehsan Mokhtarian and Sepehr Elahi and Sina Akbari and Negar Kiyavash},
  title   = {Recursive Causal Discovery},
  journal = {Journal of Machine Learning Research},
  year    = {2025},
  volume  = {26},
  number  = {61},
  pages   = {1--65},
  url     = {https://www.jmlr.org/papers/v26/24-0384.html}
}</pre>
</div>

</div>
