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

  <div class="paper-authors">Ehsan Mokhtarian<sup>*</sup> · Sina Akbari<sup>*</sup> · AmirEmad Ghassami · Negar Kiyavash</div>
  <div class="paper-note"><sup>*</sup> Equal contribution.</div>
  
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
    <p>MARVEL learns a causal DAG recursively from Markov-boundary information. At each step it identifies a removable variable, learns its neighborhood, removes it, and continues on a smaller graph. We prove strong upper bounds on the number of required CI tests, give a general lower bound for constraint-based methods, and show MARVEL outperforms state-of-the-art methods on synthetic and real-world structures.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>The recursive viewpoint converts local Markov-boundary information into global causal structure while sharply reducing the number and size of CI tests. This gives both a theoretical efficiency result and a practical route to scaling constraint-based discovery.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p>Constraint-based methods are one of the main approaches for causal structure learning that are particularly valued as they are asymptotically guaranteed to find a structure that is Markov equivalent to the causal graph of the system. On the other hand, they may require an exponentially large number of conditional independence (CI) tests in the number of variables of the system. In this paper, we propose a novel recursive constraint-based method for causal structure learning that significantly reduces the required number of CI tests compared to the existing literature. The proposed approach aims to use Markov boundary information to identify a specific variable that can be removed from the set of variables without affecting the statistical dependencies among the other variables. Having identified such a variable, we discover its neighborhood, remove that variable from the set of variables, and recursively learn the causal structure over the remaining variables. We further provide a lower bound on the number of CI tests required by any constraint-based method. Comparing this lower bound to our achievable bound demonstrates the efficiency of the proposed approach. Our experimental results show that the proposed algorithm outperforms state-of-the-art both on synthetic and real-world structures.</p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> Markov boundaries provide enough local structure to peel a causal graph apart recursively—and doing so brings the number of CI tests close to the fundamental limit.
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
      <h3>3. Removable variables</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We introduce removable variables and give a Markov-boundary-based procedure for identifying them. Removing such a variable preserves the statistical dependencies among the remaining variables, which makes recursive structure learning sound.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. CI-test complexity</h3>
      <div class="paper-result">
        <span class="paper-result-label">Theory</span>
        <p>We derive an upper bound on the number of CI tests used by MARVEL and a lower bound that applies to any constraint-based causal-discovery method. Comparing the two bounds shows that the recursive approach is close to the best possible worst-case complexity.</p>
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
  <p>On synthetic graphs and real-world Bayesian-network structures, MARVEL uses substantially fewer CI tests and achieves strong runtime and structural-recovery performance relative to state-of-the-art constraint-based methods.</p>
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
        <li>MARVEL turns estimated Markov boundaries into an end-to-end causal-structure-learning algorithm, not merely a local neighborhood procedure.</li>
        <li>The recursive reduction simultaneously lowers the number of CI tests and the size of the conditioning sets used later in the run.</li>
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
