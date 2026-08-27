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
    <p>Context-specific independences can make expert behavior causally imitable even when classical causal imitation says it is impossible. We characterize this richer decision problem, prove it is NP-hard, derive a graphical criterion, and give a sound algorithm that combines CSI relations with observed data.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>A small amount of structural information that only holds in particular contexts can unlock imitation that is otherwise impossible under hidden confounding. This shows that fine-grained causal knowledge can be operationally valuable for imitation learning.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Drawbacks of ignoring the causal mechanisms when performing imitation learning have recently been acknowledged. Several approaches both to assess the feasibility of imitation and to circumvent causal confounding and causal misspecifications have been proposed in the literature. However, the potential benefits of the incorporation of additional information about the underlying causal structure are left unexplored. An example of such overlooked information is context-specific independence (CSI), i.e., independence that holds only in certain contexts. We consider the problem of causal imitation learning when CSI relations are known. We prove that the decision problem pertaining to the feasibility of imitation in this setting is NP-hard. Further, we provide a necessary graphical criterion for imitation learning under CSI and show that under a structural assumption, this criterion is also sufficient. Finally, we propose a sound algorithmic approach for causal imitation learning which takes both CSI relations and data into account.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Context-specific causal structure can turn non-imitable expert behavior into an imitable policy—and we give both theory and an algorithm for exploiting it.
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
      <h3>3. Improvability through CSI</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We prove that deciding imitability under context-specific independences is NP-hard, give a necessary graphical criterion, and show that the criterion becomes sufficient under a structural condition on the context variables.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. A sound imitation algorithm</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory + algorithm</span>
        <p>We develop a sound algorithm that combines CSI relations with observational data to construct an imitating policy when the required causal quantities can be recovered.</p>
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
  <p>The simulations show that even a handful of CSI relations can materially enlarge the set of imitable problems: using only three context variables among graphs with up to hundreds of vertices substantially increases the fraction of imitable instances. In the policy experiment, the proposed algorithm matches the expert in expected reward and reward-distribution KL divergence, while the naive imitation baselines do not.</p>
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
        <li>CSI relations enrich the causal information available to imitation learning without requiring a fully observed causal system.</li>
        <li>The method combines structural information and data, so the extra causal knowledge directly changes which expert policies can be reproduced.</li>
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
