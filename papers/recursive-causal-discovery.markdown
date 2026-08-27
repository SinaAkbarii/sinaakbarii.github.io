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
    <p>Causal discovery gets brittle and expensive when conditional-independence tests use large conditioning sets. The removable-variable view shrinks the graph one variable at a time, cutting both the number and size of those tests. The framework nearly matches worst-case lower bounds and is implemented in the RCD Python package.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It makes constraint-based discovery more scalable and less statistically fragile by keeping conditional-independence tests local. The same framework also unifies several recursive discovery algorithms in one package.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> We show that recursive structure can make causal discovery both faster and more stable. Local information can be enough to shrink a hard global problem into manageable pieces.
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
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We provide a recursive causal-discovery procedure that uses local tests to simplify a global structure-learning task.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">What improves</span>
        
        <p>The algorithm reduces the burden of large conditioning sets and often improves both speed and empirical robustness relative to more monolithic search procedures.</p>
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
  <p>The empirical results show that the recursive strategy scales well and remains competitive or better when graphs become large. The main gain is not cosmetic: smaller local problems really do translate into a more reliable learning pipeline.</p>
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
        <li>As with any constraint-based method, performance still depends on the quality of the underlying conditional-independence tests.</li>
<li>The recursive logic is most compelling when the graph admits variables that are locally easy to certify and remove.</li>
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
