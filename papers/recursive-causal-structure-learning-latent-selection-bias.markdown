---
layout: default
title: "Recursive Causal Structure Learning in the Presence of Latent Variables and Selection Bias"
permalink: /papers/recursive-causal-structure-learning-latent-selection-bias/
description: "We extend recursive causal structure learning to settings with latent variables and selection bias. The paper shows that the recursive viewpoint remains useful even when the observable graph object is more complex than a simple DAG."
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
    <span class="paper-badge paper-badge--venue">NeurIPS 2021</span>
  </div>

  <h1 class="paper-title">Recursive Causal Structure Learning in the Presence of Latent Variables and Selection Bias</h1>

  <div class="paper-authors">Sina Akbari · Ehsan Mokhtarian · AmirEmad Ghassami · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Advances in Neural Information Processing Systems · 2021</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/recursive-causal-structure-learning-latent-selection-bias/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/Ehsan-Mokhtarian/L-MARVEL">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.neurips.cc/paper/2021/hash/53edebc543333dfbf7c5933af792c9c4-Abstract.html">NeurIPS</a> <a class="paper-resource paper-resource--venue" href="https://neurips.cc/virtual/2021/session/44791">Conference</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal discovery</span> <span class="paper-keyword">latent variables</span> <span class="paper-keyword">selection bias</span> <span class="paper-keyword">MAGs</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Latent variables and selection bias make constraint-based causal discovery especially expensive. We identify removable variables in a MAG, peel them off recursively, and still retain soundness and completeness. This reduces both the number of conditional-independence tests and the size of their conditioning sets, with near-tight worst-case complexity.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It extends efficient recursive discovery to settings with latent confounding and selection bias. The method keeps soundness and completeness while reducing both the number and size of conditional-independence tests.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Latent confounding and selection bias usually make discovery much harder. We show that recursion still provides a workable organizing principle in that setting.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">latent variables</span> <span class="paper-setup-chip">selection bias</span> <span class="paper-setup-chip">MAGs</span> <span class="paper-setup-chip">recursive discovery</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Hidden variables and selection bias break many of the assumptions that make ordinary causal discovery straightforward. The resulting graph objects are more complicated, and search can become very expensive.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We adapt the recursive removal strategy to mixed-graph structure. The point is to recover the same computational intuition as in simpler recursive methods while respecting the extra complexity of latent and selection effects.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We develop a recursive causal-structure-learning method for settings with latent variables and selection bias, yielding guarantees in a more realistic discovery regime.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Practical meaning</span>
        
        <p>The paper extends efficient recursive ideas to situations where confounding and sample-selection issues cannot be ignored.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Represent the observed structure with the appropriate mixed-graph object.</li>
<li>Use local conditions to identify a variable or substructure that can be peeled away safely.</li>
<li>Recurse on the smaller problem.</li>
<li>Reconstruct the global structure from the recursive pieces.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that the recursive strategy remains useful even in the harder mixed-graph setting. The benefit is again the reduction of a large discovery task into smaller local ones.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You want causal discovery in the presence of latent confounding or selection bias.</li>
<li>You like recursive methods but need them in a more realistic non-DAG setting.</li>
<li>You care about efficient structure learning under mixed-graph semantics.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The harder setting inevitably means more complex assumptions and graph objects.</li>
<li>The contribution is valuable precisely because it carries efficient recursive ideas into that harder regime.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@inproceedings{akbari2021recursive,
  title     = {Recursive Causal Structure Learning in the Presence of Latent Variables and Selection Bias},
  author    = {Sina Akbari and Ehsan Mokhtarian and AmirEmad Ghassami and Negar Kiyavash},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {34},
  pages     = {10119--10130},
  year      = {2021},
  url       = {https://proceedings.neurips.cc/paper/2021/hash/53edebc543333dfbf7c5933af792c9c4-Abstract.html}
}</pre>
</div>

</div>
