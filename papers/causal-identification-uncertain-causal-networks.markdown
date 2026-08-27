---
layout: default
title: "Causal Effect Identification in Uncertain Causal Networks"
permalink: /papers/causal-identification-uncertain-causal-networks/
description: "We study causal effect identification when the underlying graph is not known exactly but belongs to an uncertainty set. Instead of treating graph uncertainty as an afterthought, we bring it into the identification problem itself and analyze what can still be concluded robustly."
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
    <span class="paper-badge paper-badge--venue">NeurIPs 2023</span>
  </div>

  <h1 class="paper-title">Causal Effect Identification in Uncertain Causal Networks</h1>

  <div class="paper-authors">Sina Akbari · Fateme Jamshidi · Ehsan Mokhtarian · Matthew Vowels · Jalal Etesami · Negar Kiyavash</div>
  
  <div class="paper-venue-line">Advances in Neural Information Processing Systems · 2023</div>

  <div class="paper-resources">
    <a class="paper-resource paper-resource--pdf" href="{{ '/papers/causal-identification-uncertain-causal-networks/paper.pdf' | relative_url }}">Paper</a> <a class="paper-resource paper-resource--repo" href="https://github.com/SinaAkbarii/Causal-Effect-Identification-in-Uncertain-Causal-Networks">GitHub</a> <a class="paper-resource paper-resource--venue" href="https://neurips.cc/virtual/2023/poster/70424">NeurIPS + video</a> <a class="paper-resource paper-resource--venue" href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/017c897b4d85a744f345ccbf9d71e501-Abstract-Conference.html">Proceedings</a>
  </div>
</div>

<div class="paper-keyword-label"><strong>Keywords.</strong></div>
<div class="paper-keywords">
  <span class="paper-keyword">causal identification</span> <span class="paper-keyword">graph uncertainty</span> <span class="paper-keyword">combinatorial optimization</span> <span class="paper-keyword">causal graphs</span>
</div>

<div class="paper-summary-grid">
  <div class="paper-summary-card">
    <h2><strong>TL;DR.</strong></h2>
    <p>Causal identification usually assumes the graph is known exactly. Here each edge can be uncertain, and the task is to find the most plausible subgraph in which the target effect is identifiable. That optimization is NP-hard, so we develop efficient approximations and test them on synthetic and real networks.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>Real causal graphs are rarely known with certainty. This work lets identification account for uncertain edges explicitly instead of pretending that one estimated graph is unquestionably correct.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Real causal graphs are rarely known with certainty. We ask what can still be identified when the graph itself is uncertain, and we give algorithmic tools for that regime.
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">The paper at a glance</h2>
  <p class="paper-poster-subtitle">An informal guide to the problem, the idea, and the main results.</p>

  <div class="paper-setup">
    <span class="paper-setup-chip">graph uncertainty</span> <span class="paper-setup-chip">causal identification</span> <span class="paper-setup-chip">robust identification</span> <span class="paper-setup-chip">optimization over graph families</span>
  </div>

  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>1. The problem</h3>
      <p>Classical identification assumes one known causal graph. In practice, scientists often only know a set of plausible graphs, perhaps because some edges are uncertain or partly oriented.</p>
    </div>

    <div class="paper-poster-card">
      <h3>2. The key idea</h3>
      <p>We formulate identification over a family of admissible graphs. That turns the question into a robust one: is the effect identifiable in all compatible graphs, and if not, how do we characterize the ambiguity?</p>
    </div>

    <div class="paper-poster-card">
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We develop methods for causal-effect identification in uncertain causal networks, where the graph itself is part of the inferential problem.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Practical meaning</span>
        
        <p>The paper moves identification theory closer to scientific reality by allowing structural uncertainty instead of pretending it away.</p>
      </div>
    </div>

    <div class="paper-poster-card paper-poster-card--wide">
      <h3>5. How it works</h3>
      <ol>
        <li>Represent the graph uncertainty explicitly.</li>
<li>Characterize identification across the induced family of causal graphs.</li>
<li>Use optimization or graph-search ideas to compute robust conclusions.</li>
<li>Return whether the target effect is identified uniformly or only on a subset of graphs.</li>
      </ol>
    </div>
  </div>
</div>

<h2>What the experiments show</h2>
<div class="paper-simulation-message">
  <strong>Main empirical message.</strong>
  <p>The experiments show that robust identification under graph uncertainty is computationally feasible in nontrivial settings. They also illustrate how much certainty can be lost when a few edges are left ambiguous.</p>
</div>

<div class="paper-poster">
  <h2 class="paper-poster-title">Where this helps</h2>
  <div class="paper-poster-grid">
    <div class="paper-poster-card">
      <h3>Good fit</h3>
      <ul>
        <li>You have several plausible causal graphs rather than one definitive structure.</li>
<li>You want identification conclusions that are robust to structural ambiguity.</li>
<li>You care about turning partial causal knowledge into a concrete inferential statement.</li>
      </ul>
    </div>
    <div class="paper-poster-card">
      <h3>Keep in mind</h3>
      <ul>
        <li>The benefit comes from explicitly modeling uncertainty, so the uncertainty set itself should be scientifically meaningful.</li>
<li>Robustness can be conservative, but that conservatism reflects real ambiguity rather than algorithmic caution.</li>
      </ul>
    </div>
  </div>
</div>

<div class="paper-citation">
  <div class="paper-citation-header">
    <h2 class="paper-citation-title">Cite this paper</h2>
    <button class="paper-copy-btn" type="button" onclick="copyPaperBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button>
  </div>
  <pre class="paper-bibtex">@inproceedings{akbari2023uncertain,
  title     = {Causal Effect Identification in Uncertain Causal Networks},
  author    = {Sina Akbari and Fateme Jamshidi and Ehsan Mokhtarian and Matthew Vowels and Jalal Etesami and Negar Kiyavash},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {36},
  year      = {2023},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2023/hash/017c897b4d85a744f345ccbf9d71e501-Abstract-Conference.html}
}</pre>
</div>

</div>
