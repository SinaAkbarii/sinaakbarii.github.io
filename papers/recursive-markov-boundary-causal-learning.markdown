---
layout: default
title: "A Recursive Markov Boundary-Based Approach to Causal Structure Learning"
permalink: /papers/recursive-markov-boundary-causal-learning/
description: "We show how Markov boundaries can drive a recursive approach to causal structure learning. By combining local boundary information with a variable-removal strategy, we obtain a conceptually simple route from local conditional-independence structure to a global causal graph."
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
    <span class="paper-badge paper-badge--venue">JMLR 2021</span>
  </div>

  <h1 class="paper-title">A Recursive Markov Boundary-Based Approach to Causal Structure Learning</h1>

  <div class="paper-authors">Ehsan Mokhtarian · Sina Akbari · AmirEmad Ghassami · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Proceedings of The KDD'21 Workshop on Causal Discovery · 2021</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/recursive-markov-boundary-causal-learning/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/Ehsan-Mokhtarian/MARVEL">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.mlr.press/v150/mokhtarian21a.html">PMLR</a> <a class="paper-resource paper-resource--venue" href="https://4llab.net/workshops/CD2021/program.html">KDD workshop</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal discovery</span> <span class="paper-keyword">Markov boundaries</span> <span class="paper-keyword">constraint-based learning</span> <span class="paper-keyword">structure learning</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Use local Markov-boundary information to find a variable that can be safely peeled off, learn its neighborhood, and recurse. This sharply reduces the conditional-independence testing burden of constraint-based causal discovery. The resulting complexity is close to a lower bound and performs well on synthetic and real graphs.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It shows how local Markov-boundary information can turn a global causal discovery problem into a recursive one. That means fewer and smaller conditional-independence tests without giving up theoretical guarantees.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Markov boundaries are local objects, but they can carry enough structure to support global discovery. We use that fact to build a recursive learning strategy.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">Markov boundaries</span> <span class="paper-setup-chip">causal discovery</span> <span class="paper-setup-chip">recursive peeling</span> <span class="paper-setup-chip">constraint-based learning</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Learning a causal graph from conditional independences becomes hard because the search is global and the conditioning sets can become large. The challenge is to find a principled way to reduce the problem using only trustworthy local information.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We use Markov boundaries as the local primitive. If a variable satisfies the right boundary-based conditions, it can be removed safely, shrinking the graph and allowing the discovery problem to be solved recursively.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We give a recursive Markov-boundary-based procedure for causal structure learning that turns local boundary information into a global graph-recovery strategy.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Practical meaning</span>
        
        <p>The method provides a path to more scalable discovery by replacing one large inference task with a sequence of smaller ones.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Estimate or characterize relevant Markov boundaries.</li>
<li>Use them to certify a removable variable.</li>
<li>Remove the variable and recurse on the remaining graph.</li>
<li>Reconstruct the graph from the sequence of local decisions.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that the Markov-boundary perspective is not just conceptually neat: it yields competitive structure-learning behavior while reducing the effective complexity of the search.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You want a local-to-global route for causal structure learning.</li>
<li>Markov boundaries are easier for you to estimate than full graph structure directly.</li>
<li>You care about scalable discovery in settings where boundary structure is informative.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The method still depends on the quality of boundary estimation and conditional-independence information.</li>
<li>Its strength is the recursive simplification, so its gains are largest when removable variables are easy to detect.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@InProceedings{pmlr-v150-mokhtarian21a,
  title     = {A Recursive Markov Boundary-Based Approach to Causal Structure Learning},
  author    = {Mokhtarian, Ehsan and Akbari, Sina and Ghassami, AmirEmad and Kiyavash, Negar},
  booktitle = {Proceedings of The KDD'21 Workshop on Causal Discovery},
  pages     = {26--54},
  year      = {2021},
  volume    = {150},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v150/mokhtarian21a.html}
}</pre>
</div>

</div>
