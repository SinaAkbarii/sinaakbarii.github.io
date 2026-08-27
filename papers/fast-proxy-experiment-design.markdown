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

  <div class="paper-authors">Sepehr Elahi · Sina Akbari · Jalal Etesami · Negar Kiyavash · Patrick Thiran</div>
  
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
    <p>Direct interventions may be too expensive, so intervene on cheaper proxy variables instead. We reformulate the minimum-cost proxy experiment problem to make exact optimization much faster in practice, and also study designs based on valid adjustment sets. The same identification goal can be reached with far less computational overhead.</p>
  </div>
  <div class="paper-summary-card">
    <h2><strong>Why this matters.</strong></h2>
    <p>It makes proxy-experiment design computationally practical when direct interventions are too costly or impossible. The reformulations turn a previously cumbersome exact design problem into something that can be solved much faster.</p>
  </div>
</div>

<h2>Abstract</h2>
<div class="paper-abstract">
  <p><span class="paper-abstract-pending">Official published abstract to be inserted from the final paper PDF. This beta page intentionally does not substitute a lay summary for the formal abstract.</span></p>
</div>

<div class="paper-big-message">
  <strong>Main message.</strong> If the ideal intervention is too expensive, we should not give up. We show how to design cheaper proxy interventions that still identify the effect we care about.
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
      <h3>3. Main result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Main contribution</span>
        
        <p>We provide efficient methods for designing proxy experiments that identify a causal effect without requiring direct interventions on the most expensive nodes.</p>
      </div>
    </div>

    <div class="paper-poster-card">
      <h3>4. Another result</h3>
      <div class="paper-result">
        <span class="paper-result-label">Practical meaning</span>
        
        <p>The framework broadens the menu of feasible experiments by recognizing that indirect manipulations can still be scientifically useful.</p>
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
  <p>The experiments show that fast proxy design can substantially reduce cost while preserving identifiability. The gain is especially meaningful in graphs where direct experimentation is structurally possible but financially unrealistic.</p>
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
        <li>Proxy interventions are powerful precisely when the causal graph channels their information to the target effect.</li>
<li>The design remains assumption-driven, so proxy feasibility and scientific plausibility still matter.</li>
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
