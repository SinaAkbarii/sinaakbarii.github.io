---
layout: default
title: "Causal Imitability Under Context-Specific Independence Relations"
permalink: /papers/causal-imitability-context-specific-independence/
description: "We study imitation under hidden causal structure and show how context-specific independence information can restore imitability in settings where naive imitation is impossible. The paper links causal assumptions to what an imitator can or cannot reproduce from observed behavior."
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
    <span class="paper-badge paper-badge--venue">NeurIPS 2023</span>
  </div>

  <h1 class="paper-title">Causal Imitability Under Context-Specific Independence Relations</h1>

  <div class="paper-authors">Fateme Jamshidi · Sina Akbari · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Advances in Neural Information Processing Systems · 2023</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/causal-imitability-context-specific-independence/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/SinaAkbarii/causal-imitation-learning/">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://neurips.cc/virtual/2023/poster/71382">NeurIPS + video</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/54e13b23fa2f399cea6e67acf9063c40-Abstract-Conference.html">Proceedings</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">imitation learning</span> <span class="paper-keyword">context-specific independence</span> <span class="paper-keyword">latent confounding</span> <span class="paper-keyword">causal inference</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Imitation can fail when hidden causal structure makes the expert&#x27;s behavior impossible to reproduce from observed data. Known context-specific independences can change that answer. We characterize when they help, show the general feasibility problem is NP-hard, and give a sound algorithm that uses both CSI information and data.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Context-specific knowledge can turn an impossible imitation problem into a solvable one. It shows that causal structure can matter even when the extra independence information only holds in particular contexts.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> The question is not just how to imitate an expert, but whether imitation is causally possible at all. We show that context-specific structure can make the impossible possible.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">imitation learning</span> <span class="paper-setup-chip">context-specific independence</span> <span class="paper-setup-chip">causal identifiability</span> <span class="paper-setup-chip">hidden confounding</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Observed expert behavior can fail to identify an imitable policy when latent structure or selection effects hide the relevant mechanisms. Classical imitation-learning views can therefore be fundamentally too optimistic.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We bring context-specific independence relations into the imitability question. These richer structural constraints create information that ordinary conditional independences miss.</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We characterize causal imitability under context-specific independence assumptions and show how these assumptions can rescue identifiability of the target behavior.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Why it matters</span>
        
        <p>The paper shows that structural knowledge can turn an impossible imitation problem into a solvable one.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Formalize the notion of causal imitability.</li>
<li>Identify where hidden structure blocks imitation under weaker assumptions.</li>
<li>Introduce context-specific independence relations to recover extra leverage.</li>
<li>Use those relations to characterize when imitation becomes possible.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that exploiting context-specific structure can change performance qualitatively, not just incrementally. In the right settings, it unlocks imitation altogether.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You care about imitation learning in environments with latent causal structure.</li>
<li>You have reason to believe context-specific independences are scientifically justified.</li>
<li>You want to know whether failure is algorithmic or fundamentally causal.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The assumptions are richer than standard ones, so they are most persuasive when supported by domain knowledge.</li>
<li>The gain is conceptual as much as algorithmic: the paper clarifies when imitation is possible in principle.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@inproceedings{jamshidi2023imitability,
  title     = {Causal Imitability Under Context-Specific Independence Relations},
  author    = {Fateme Jamshidi and Sina Akbari and Negar Kiyavash},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {36},
  year      = {2023},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2023/hash/54e13b23fa2f399cea6e67acf9063c40-Abstract-Conference.html}
}</pre>
</div>

</div>
