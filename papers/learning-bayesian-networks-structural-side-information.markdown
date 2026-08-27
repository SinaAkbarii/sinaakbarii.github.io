---
layout: default
title: "Learning Bayesian Networks in the Presence of Structural Side Information"
permalink: /papers/learning-bayesian-networks-structural-side-information/
description: "We show how structural side information can simplify Bayesian-network learning. Even partial prior knowledge about the graph can prune the search space dramatically and lead to more efficient learning algorithms."
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
    <span class="paper-badge paper-badge--venue">AAAI 2022</span>
  </div>

  <h1 class="paper-title">Learning Bayesian Networks in the Presence of Structural Side Information</h1>

  <div class="paper-authors">Ehsan Mokhtarian · Sina Akbari · Fateme Jamshidi · Jalal Etesami · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Proceedings of the AAAI Conference on Artificial Intelligence · 2022</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/learning-bayesian-networks-structural-side-information/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/Ehsan-Mokhtarian/RSL">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://ojs.aaai.org/index.php/AAAI/article/view/20750">AAAI</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">Bayesian networks</span> <span class="paper-keyword">causal discovery</span> <span class="paper-keyword">structural side information</span> <span class="paper-keyword">constraint-based learning</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Structural side information can make Bayesian-network learning much cheaper. We build recursive constraint-based algorithms for bounded clique number and diamond-free graphs, showing that bounded-treewidth networks can be learned with polynomially many conditional-independence tests. Experiments show strong gains in scalability.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It shows that even coarse structural knowledge can dramatically reduce the cost of learning Bayesian networks. Bounded clique number or diamond-free structure can turn an exponential testing burden into polynomial complexity.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Small pieces of prior structural knowledge can buy a lot. We show how to turn that knowledge into real computational savings for Bayesian-network learning.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">Bayesian networks</span> <span class="paper-setup-chip">structural priors</span> <span class="paper-setup-chip">graph learning</span> <span class="paper-setup-chip">algorithmic efficiency</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Learning Bayesian networks is difficult because the graph search space is enormous. In many scientific settings, however, we do know something about the structure in advance, and standard algorithms often underuse that information.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We encode structural side information directly into the learning procedure. That can eliminate large parts of the search space and sharpen what the algorithm needs to consider.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We develop learning methods for Bayesian networks that leverage structural side information to reduce computational complexity.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Why it matters</span>
        
        <p>The paper shows that even coarse background knowledge can be converted into a tangible algorithmic advantage.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Formalize the available structural side information.</li>
<li>Use it to constrain the space of candidate graphs.</li>
<li>Adapt the network-learning algorithm to the constrained search space.</li>
<li>Return a learned graph more efficiently than unconstrained search would allow.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The empirical results show that side information can substantially reduce runtime and search difficulty while preserving or improving structural recovery. This makes prior knowledge operational rather than merely qualitative.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You have prior structural knowledge and do not want to ignore it.</li>
<li>Bayesian-network learning is computationally demanding in your application.</li>
<li>You want a principled way to trade background knowledge for efficiency.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The value depends on the side information being at least approximately correct.</li>
<li>The main contribution is computational leverage, not a claim that prior knowledge eliminates all uncertainty.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@inproceedings{mokhtarian2022learning,
  title     = {Learning Bayesian Networks in the Presence of Structural Side Information},
  author    = {Ehsan Mokhtarian and Sina Akbari and Fateme Jamshidi and Jalal Etesami and Negar Kiyavash},
  booktitle = {Proceedings of the AAAI Conference on Artificial Intelligence},
  volume    = {36},
  number    = {7},
  pages     = {7814--7822},
  year      = {2022},
  doi       = {10.1609/aaai.v36i7.20750},
  url       = {https://ojs.aaai.org/index.php/AAAI/article/view/20750}
}</pre>
</div>

</div>
