---
layout: page
title: Publications
permalink: /publications/
nav-include : true
nav-order : 1
---

<style>
:root {
  --publication-cyan: var(--site-cyan, #087F91);
}

/* Keep the site's cyan identity, but use a slightly darker/readable version
   on this publications page. */
a,
a:visited {
  color: var(--publication-cyan);
}

/* Publication styling only. Existing site-wide font and link colors are inherited. */

/* --- Collapsed publication entry --- */
.pub-venue {
  display: inline-block;
  margin-right: 0.38em;
  padding: 0.08em 0.46em;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 0.84em;
  line-height: 1.45;
  vertical-align: 0.08em;
  white-space: nowrap;
}

.pub-status,
.pub-award {
  display: inline-block;
  margin-right: 0.38em;
  padding: 0.08em 0.46em;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 0.82em;
  line-height: 1.45;
  vertical-align: 0.08em;
  white-space: nowrap;
}

.pub-status {
  color: var(--site-blue, #2563EB);
  font-weight: 600;
}

.pub-award {
  color: var(--site-award, #D95D45);
  font-weight: 700;
  border-width: 1.35px;
  padding-left: 0.52em;
  padding-right: 0.56em;
}

.pub-award .pub-award-icon {
  margin-right: 0.22em;
  font-size: 1.02em;
}

.pub-title-link {
  position: relative;
  left: 0;
  font-weight: 500;
  transition: left 140ms ease, text-decoration-thickness 140ms ease;
}

.pub-title-link:hover,
.pub-title-link:focus-visible {
  left: 2px;
  text-decoration-thickness: 0.1em;
}


/* --- Publication card --- */
.pub-entry {
  margin: 0.58em 0 0.78em 0;
  padding: 0.72em 0.82em;
  border: 1px solid var(--site-border, rgba(31, 41, 55, 0.18));
  border-radius: 0.46em;
  background: var(--site-surface, transparent);
  transition: border-color 140ms ease, transform 140ms ease;
}

.pub-entry:hover {
  border-color: var(--site-muted, currentColor);
  transform: translateY(-1px);
}

/* The card feels interactive, but only the chevron is an actual control. */
.pub-entry .pub-toggle-button {
  cursor: pointer;
}

.pub-page-meta {
  margin: 0.25em 0 0.28em 0;
  color: var(--site-muted, #6B7280);
  font-size: 0.86em;
  line-height: 1.45;
}

.pub-page-meta a,
.pub-page-meta a:visited {
  color: var(--publication-cyan);
}

.pub-detail-hint {
  display: flex;
  align-items: center;
  gap: 0.42em;
  margin: 0.48em 0 1.15em 0;
  padding: 0.44em 0.62em;
  width: fit-content;
  max-width: 100%;
  border: 1px solid var(--site-border, rgba(31, 41, 55, 0.18));
  border-radius: 0.4em;
  color: var(--site-muted, #6B7280);
  background: var(--site-surface-soft, transparent);
  font-size: 0.86em;
  line-height: 1.4;
}

.pub-hint-chevron {
  display: inline-block;
  flex: 0 0 auto;
  width: 0.38em;
  height: 0.38em;
  margin-left: 0.08em;
  border-right: 1.6px solid currentColor;
  border-bottom: 1.6px solid currentColor;
  transform: rotate(-45deg);
}

.pub-toggle-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.12em;
  height: 1.28em;
  margin: 0 0.42em 0 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1;
  vertical-align: -0.08em;
  cursor: pointer;
  user-select: none;
  opacity: 0.72;
}

.pub-toggle-button:hover,
.pub-toggle-button:focus-visible {
  opacity: 1;
}

.pub-chevron {
  display: block;
  width: 0.42em;
  height: 0.42em;
  border-right: 1.6px solid currentColor;
  border-bottom: 1.6px solid currentColor;
  transform: rotate(-45deg);
  transform-origin: 55% 55%;
  transition: transform 150ms ease;
}

.pub-toggle-button[aria-expanded="true"] .pub-chevron {
  transform: rotate(45deg);
}

/* --- Expanded details --- */
.pub-card {
  display: block;
  margin: 0.58em 0 0.08em 1.55em;
  padding-left: 0.9em;
  border-left: 1px solid currentColor;
}

.pub-card[hidden] {
  display: none;
}

.pub-card p {
  margin: 0.38em 0;
}

/* Keywords stay as compact rounded tags. */
.pub-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.32em;
  align-items: center;
  margin: 0.08em 0 0.52em 0;
}

.pub-keyword {
  display: inline-block;
  border: 1px solid currentColor;
  border-radius: 999px;
  padding: 0.06em 0.48em;
  font-size: 0.78em;
  line-height: 1.55;
  white-space: nowrap;
}

/* Resources get their own labeled band and rectangular buttons,
   so they cannot be mistaken for keyword tags. */
.pub-resources {
  margin: 0.58em 0 0.8em 0;
  padding: 0.48em 0 0.08em 0;
  border-top: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
}

.pub-resources-label {
  display: block;
  margin-bottom: 0.38em;
  font-size: 0.9em;
}

.pub-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  margin: 0 0 0.48em 0;
}

.pub-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  padding: 0.2em 0.58em;
  border: 1px solid currentColor;
  border-radius: 0.3em;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.82em;
  line-height: 1.35;
  text-decoration: none;
  cursor: pointer;
  transition: transform 120ms ease, background-color 120ms ease;
}

/* Resource types use distinct but coordinated colors. */
.pub-btn--repo,
.pub-btn--repo:visited {
  color: var(--site-repo, #4B5563);
}

.pub-btn--venue,
.pub-btn--venue:visited {
  color: var(--site-cyan, #087F91);
}

.pub-btn--slides,
.pub-btn--slides:visited {
  color: var(--site-slides, #6D5BD0);
}

.pub-btn--poster,
.pub-btn--poster:visited {
  color: var(--site-poster, #B7651B);
}

.pub-btn--talk,
.pub-btn--talk:visited {
  color: var(--site-talk, #B23A48);
}

.pub-btn--repo:hover,
.pub-btn--repo:focus-visible {
  background: var(--hover-repo, rgba(75, 85, 99, 0.08));
}

.pub-btn--venue:hover,
.pub-btn--venue:focus-visible {
  background: var(--hover-cyan, rgba(8, 127, 145, 0.08));
}

.pub-btn--slides:hover,
.pub-btn--slides:focus-visible {
  background: var(--hover-slides, rgba(109, 91, 208, 0.08));
}

.pub-btn--poster:hover,
.pub-btn--poster:focus-visible {
  background: var(--hover-poster, rgba(183, 101, 27, 0.08));
}

.pub-btn--talk:hover,
.pub-btn--talk:focus-visible {
  background: var(--hover-talk, rgba(178, 58, 72, 0.08));
}

.pub-btn:hover,
.pub-btn:focus-visible {
  transform: translateY(-1px);
  text-decoration: none;
}

.pub-btn--repo::before {
  content: "</>";
  font-family: monospace;
  font-size: 0.9em;
}

.pub-btn--venue::before {
  content: "↗";
}

.pub-btn--slides::before {
  content: "▤";
}

.pub-btn--poster::before {
  content: "▦";
}

.pub-btn--talk::before {
  content: "▶";
  font-size: 0.78em;
}

/* --- Citation box --- */
.pub-citation {
  margin-top: 0.82em;
}

.pub-citation-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75em;
  margin-bottom: 0.32em;
}

.pub-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.17em 0.54em;
  border: 1px solid currentColor;
  border-radius: 0.32em;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 0.8em;
  line-height: 1.35;
  cursor: pointer;
}

.pub-copy-btn::before {
  content: "⧉";
}

.pub-copy-btn:hover,
.pub-copy-btn:focus-visible {
  text-decoration: underline;
}

.bibtex-source {
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0.72em 0.82em;
  overflow-x: auto;
  border: 1px solid currentColor;
  border-radius: 0.4em;
  background: var(--site-surface-soft, transparent);
  color: inherit;
  font-size: 0.76em;
  line-height: 1.45;
  white-space: pre;
}
</style>

<script>
function togglePubDetails(button) {
  var targetId = button.getAttribute('aria-controls');
  var panel = targetId ? document.getElementById(targetId) : null;
  if (!panel) return;

  var isOpening = panel.hasAttribute('hidden');
  if (isOpening) {
    panel.removeAttribute('hidden');
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', 'Hide paper details');
    button.setAttribute('title', 'Hide paper details');
  } else {
    panel.setAttribute('hidden', '');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Show paper details');
    button.setAttribute('title', 'Show paper details');
  }
}

function copyPubBibtex(button) {
  var card = button.closest('.pub-card');
  var source = card ? card.querySelector('.bibtex-source') : null;
  if (!source) return;

  var citation = source.textContent.trim();
  var finish = function () {
    button.textContent = 'Copied!';
    window.setTimeout(function () {
      button.textContent = 'Copy';
    }, 1200);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(citation).then(finish).catch(function () {
      fallbackCopyPubBibtex(citation, finish);
    });
  } else {
    fallbackCopyPubBibtex(citation, finish);
  }
}

function fallbackCopyPubBibtex(text, callback) {
  var area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand('copy');
    callback();
  } finally {
    document.body.removeChild(area);
  }
}
</script>

See my most recent publications on my [Google Scholar page](https://scholar.google.com/citations?hl=en&user=-kNnS1AAAAAJ&view_op=list_works&sortby=pubdate).

<div class="pub-page-meta">
<strong>Last updated:</strong> August 2026 · <a href="https://scholar.google.com/citations?hl=en&user=-kNnS1AAAAAJ&view_op=list_works&sortby=pubdate">Google Scholar</a> may occasionally be more up to date.
</div>

<div class="pub-detail-hint">
<span class="pub-hint-chevron" aria-hidden="true"></span>
<span><strong>Tip:</strong> expand a paper with the chevron to see keywords, resources, a TL;DR, why it matters, and citation info.</span>
</div>


## Preprints:
<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-1" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> ['Semiparametric Triple Difference Estimators']({{ '/papers/semiparametric-triple-difference/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-1" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">triple difference</span><span class="pub-keyword">difference-in-differences</span><span class="pub-keyword">semiparametric estimation</span><span class="pub-keyword">policy evaluation</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/SinaAkbarii/triplediff" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://arxiv.org/abs/2502.19788" target="_blank" rel="noopener noreferrer">arXiv</a></div>
</div>
<p><strong>TL;DR.</strong> Triple differences can relax parallel trends by borrowing information from an auxiliary domain. We give identification formulas and doubly robust semiparametric estimators for both panel and repeated cross-section data. The repeated cross-section setup also allows covariates to change over time.</p>
<p><strong>Why this matters.</strong> It puts triple-difference analysis on a modern semiparametric footing, with flexible nuisance estimation and robustness guarantees. It also avoids the usual no-compositional-change assumption for repeated cross-sections.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@misc{akbari2025semiparametric,
  title        = {Semiparametric Triple Difference Estimators},
  author       = {Sina Akbari and Negar Kiyavash and AmirEmad Ghassami},
  year         = {2025},
  eprint       = {2502.19788},
  archivePrefix= {arXiv},
  primaryClass = {econ.EM},
  url          = {https://arxiv.org/abs/2502.19788}
}</pre>
</div>
</div>
</div>

## Journal publications:
<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-2" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">JMLR 2025</span> ['Optimal Experiment Design for Causal Effect Identification']({{ '/papers/optimal-experiment-design/' | relative_url }}){:.pub-title-link} Journal of Machine Learning Research (JMLR) special issue for ICML&NeurIPS outstanding papers.

<div class="pub-card" id="pub-details-2" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal identification</span><span class="pub-keyword">experiment design</span><span class="pub-keyword">interventions</span><span class="pub-keyword">combinatorial optimization</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/SinaAkbarii/min_cost_intervention/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://www.jmlr.org/papers/v26/22-1516.html" target="_blank" rel="noopener noreferrer">JMLR</a></div>
</div>
<p><strong>TL;DR.</strong> When observations alone cannot identify a causal effect, which interventions should we pay for? We cast minimum-cost identification as a hitting-set problem, prove the exact problem is NP-complete, and give optimal, approximate, and fast heuristic methods. In simulations, the heuristics stay close to the minimum cost.</p>
<p><strong>Why this matters.</strong> It gives a systematic way to spend experimental budget only where identification needs it. The causal design problem becomes a concrete combinatorial optimization problem with provable guarantees.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@article{akbari2025optimal,
  author  = {Sina Akbari and Jalal Etesami and Negar Kiyavash},
  title   = {Optimal Experiment Design for Causal Effect Identification},
  journal = {Journal of Machine Learning Research},
  year    = {2025},
  volume  = {26},
  number  = {28},
  pages   = {1--56},
  url     = {https://www.jmlr.org/papers/v26/22-1516.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-3" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">JMLR 2025</span> ['Recursive Causal Discovery']({{ '/papers/recursive-causal-discovery/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-3" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal discovery</span><span class="pub-keyword">recursive algorithms</span><span class="pub-keyword">conditional independence</span><span class="pub-keyword">structure learning</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/ban-epfl/rcd" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://www.jmlr.org/papers/v26/24-0384.html" target="_blank" rel="noopener noreferrer">JMLR</a></div>
</div>
<p><strong>TL;DR.</strong> Causal discovery gets brittle and expensive when conditional-independence tests use large conditioning sets. The removable-variable view shrinks the graph one variable at a time, cutting both the number and size of those tests. The framework nearly matches worst-case lower bounds and is implemented in the RCD Python package.</p>
<p><strong>Why this matters.</strong> It makes constraint-based discovery more scalable and less statistically fragile by keeping conditional-independence tests local. The same framework also unifies several recursive discovery algorithms in one package.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@article{JMLR:v26:24-0384,
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
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-4" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">TMLR 2023</span> ['A Free Lunch with Influence Functions? An Empirical Evaluation of Influence Functions for Average Treatment Effect Estimation']({{ '/papers/free-lunch-influence-functions/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-4" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal effect estimation</span><span class="pub-keyword">influence functions</span><span class="pub-keyword">semiparametric statistics</span><span class="pub-keyword">machine learning</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/matthewvowels1/FreeLunchSemiParametrics" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://openreview.net/forum?id=dQxBRqCjLr" target="_blank" rel="noopener noreferrer">TMLR</a></div>
</div>
<p><strong>TL;DR.</strong> Influence-function corrections can improve flexible machine-learning estimates of the average treatment effect, but there is no universal free lunch. Across datasets, the gains depend on the estimator, sample size, and data-generating process. The practical message is to stress-test conclusions across multiple estimation pipelines.</p>
<p><strong>Why this matters.</strong> It is a practical warning against treating influence-function updates as a plug-and-play guarantee. The benefit depends on the estimator, sample size, and data-generating process.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@article{vowels2023free,
  title   = {A Free Lunch with Influence Functions? An Empirical Evaluation of Influence Functions for Average Treatment Effect Estimation},
  author  = {Matthew J. Vowels and Sina Akbari and Necati Cihan Camgoz and Richard Bowden},
  journal = {Transactions on Machine Learning Research},
  year    = {2023},
  url     = {https://openreview.net/forum?id=dQxBRqCjLr}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-5" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">JMLR 2021</span> ['A Recursive Markov Boundary-Based Approach to Causal Structure Learning']({{ '/papers/recursive-markov-boundary-causal-learning/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-5" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal discovery</span><span class="pub-keyword">Markov boundaries</span><span class="pub-keyword">constraint-based learning</span><span class="pub-keyword">structure learning</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/Ehsan-Mokhtarian/MARVEL" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://proceedings.mlr.press/v150/mokhtarian21a.html" target="_blank" rel="noopener noreferrer">PMLR</a><a class="pub-btn pub-btn--venue" href="https://4llab.net/workshops/CD2021/program.html" target="_blank" rel="noopener noreferrer">KDD workshop</a></div>
</div>
<p><strong>TL;DR.</strong> Use local Markov-boundary information to find a variable that can be safely peeled off, learn its neighborhood, and recurse. This sharply reduces the conditional-independence testing burden of constraint-based causal discovery. The resulting complexity is close to a lower bound and performs well on synthetic and real graphs.</p>
<p><strong>Why this matters.</strong> It shows how local Markov-boundary information can turn a global causal discovery problem into a recursive one. That means fewer and smaller conditional-independence tests without giving up theoretical guarantees.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@InProceedings{pmlr-v150-mokhtarian21a,
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
</div>


## Conference publications:

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-6" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">UAI 2026</span> <span class="pub-status">ORAL</span> <span class="pub-award"><span class="pub-award-icon" aria-hidden="true">🏆</span>Best Paper Award</span> ['Fundamental Limits and Optimal Methods for Sharp Analytical Causal Bounds in Instrumental Variable Models']({{ '/papers/sharp-analytical-iv-bounds/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-6" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">instrumental variables</span><span class="pub-keyword">partial identification</span><span class="pub-keyword">sharp bounds</span><span class="pub-keyword">causal inference</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/ArefeBoushehrian/Analytical-Causal-Bounds-in-Instrumental-Variable-Models" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://proceedings.mlr.press/v337/boushehrian26a.html" target="_blank" rel="noopener noreferrer">UAI / PMLR</a><a class="pub-btn pub-btn--slides" href="https://www.sakbari.com/EuroCIM2026.pdf" target="_blank" rel="noopener noreferrer">Slides</a></div>
</div>
<p><strong>TL;DR.</strong> Sharp analytical instrumental-variable bounds cannot stay simple as the outcome alphabet grows. We prove that any sharp bound needs exponentially many linear pieces, and the same exponential barrier appears in the IV inequalities. We also give Python and R procedures that attain this optimal complexity.</p>
<p><strong>Why this matters.</strong> It establishes a genuine complexity barrier for sharp analytical IV bounds: exponential structure is unavoidable. The accompanying algorithms match that lower bound, so the result says both what is impossible and what is optimal.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@InProceedings{pmlr-v337-boushehrian26a,
  title     = {Fundamental Limits and Optimal Methods for Sharp Analytical Causal Bounds in Instrumental Variable Models},
  author    = {Boushehrian, Arefe and Badri, Mohammad Reza and Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the 42nd Conference on Uncertainty in Artificial Intelligence},
  pages     = {689--744},
  year      = {2026},
  volume    = {337},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v337/boushehrian26a.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-7" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">ICLR 2026</span> ['CaTs and DAGs: Integrating Directed Acyclic Graphs with Transformers and
Fully-Connected Neural Networks for Causally Constrained Predictions']({{ '/papers/cats-and-dags/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-7" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal machine learning</span><span class="pub-keyword">transformers</span><span class="pub-keyword">DAGs</span><span class="pub-keyword">robustness</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/matthewvowels1/Causal_Transformer" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://proceedings.iclr.cc/paper_files/paper/2026/hash/2456a42386e445ba884511aa17ca4a30-Abstract-Conference.html" target="_blank" rel="noopener noreferrer">ICLR</a><a class="pub-btn pub-btn--talk" href="https://slideslive.com/39057250/cats-and-dags-integrating-directed-acyclic-graphs-for-actually-causal-transformers" target="_blank" rel="noopener noreferrer">Talk</a></div>
</div>
<p><strong>TL;DR.</strong> Standard neural networks can ignore causal structure that we already know. CaTs and causal fully connected networks bake a user-specified DAG into the architecture, so predictions respect the allowed causal pathways. The aim is better robustness under distribution shift and clearer interpretation without giving up expressive models.</p>
<p><strong>Why this matters.</strong> It lets neural predictors respect causal structure that is known in advance. That can improve robustness to covariate shift while making the allowed information flow much easier to interpret.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@inproceedings{vowels2026cats,
  title     = {CaTs and DAGs: Integrating Directed Acyclic Graphs with Transformers for Causally Constrained Predictions},
  author    = {Matthew James Vowels and Mathieu Rochat and Sina Akbari},
  booktitle = {The Fourteenth International Conference on Learning Representations},
  year      = {2026},
  url       = {https://openreview.net/forum?id=ZIQactmQxb}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-8" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">UAI 2025</span> ['Causal Effect Identification in Heterogeneous Environments from Higher-Order Moments']({{ '/papers/heterogeneous-environments-higher-order-moments/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-8" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal identification</span><span class="pub-keyword">latent confounding</span><span class="pub-keyword">heterogeneous environments</span><span class="pub-keyword">higher-order moments</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/SinaAkbarii/IdentificationMultipleDomain" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://proceedings.mlr.press/v286/kivva25a.html" target="_blank" rel="noopener noreferrer">UAI / PMLR</a></div>
</div>
<p><strong>TL;DR.</strong> Multiple environments can reveal a causal effect even with latent confounding, if the effect stays invariant and the heterogeneity is structured. Higher-order moments identify and estimate the effect when only one part of the data-generating mechanism changes across environments. If both the latent and treatment noise distributions change, identification can fail.</p>
<p><strong>Why this matters.</strong> It turns heterogeneity across environments into identifying information rather than nuisance variation. Under the right invariances, higher-order moments can recover effects that latent confounding would otherwise hide.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@InProceedings{pmlr-v286-kivva25a,
  title     = {Causal Effect Identification in Heterogeneous Environments from Higher-Order Moments},
  author    = {Kivva, Yaroslav and Akbari, Sina and Salehkaleybar, Saber and Kiyavash, Negar},
  booktitle = {Proceedings of the Forty-first Conference on Uncertainty in Artificial Intelligence},
  pages     = {2223--2254},
  year      = {2025},
  volume    = {286},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v286/kivva25a.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-9" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">UAI 2025</span> ['Multi-armed Bandits with Missing Outcomes']({{ '/papers/multi-armed-bandits-missing-outcomes/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-9" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">multi-armed bandits</span><span class="pub-keyword">missing data</span><span class="pub-keyword">online learning</span><span class="pub-keyword">regret</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/ilia-mahrooghi/Multi-armed-Bandits-with-Missing-Outcome" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://proceedings.mlr.press/v286/mahrooghi25a.html" target="_blank" rel="noopener noreferrer">UAI / PMLR</a></div>
</div>
<p><strong>TL;DR.</strong> Missing rewards are not harmless in bandits: ignoring why outcomes disappear can drive regret to linear. We develop algorithms for both missing-at-random and missing-not-at-random feedback and show how the missingness mechanism changes achievable regret. Accounting for it gives much better decision-making guarantees.</p>
<p><strong>Why this matters.</strong> Missing feedback can fundamentally break bandit learning, not just make it noisier. Modeling the missingness mechanism restores meaningful regret guarantees in settings closer to real decision systems.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@InProceedings{pmlr-v286-mahrooghi25a,
  title     = {Multi-armed Bandits with Missing Outcomes},
  author    = {Mahrooghi, Ilia and Moradi, Mahshad and Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the Forty-first Conference on Uncertainty in Artificial Intelligence},
  pages     = {2844--2875},
  year      = {2025},
  volume    = {286},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v286/mahrooghi25a.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-10" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">CLeaR 2025</span> ['Sample Complexity of Nonparametric Closeness Testing for Continuous Distributions and Its Application to Causal Discovery with Hidden Confounding']({{ '/papers/nonparametric-closeness-testing-hidden-confounding/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-10" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal discovery</span><span class="pub-keyword">distribution testing</span><span class="pub-keyword">sample complexity</span><span class="pub-keyword">hidden confounding</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--venue" href="https://proceedings.mlr.press/v275/jamshidi25a.html" target="_blank" rel="noopener noreferrer">CLeaR / PMLR</a><a class="pub-btn pub-btn--venue" href="https://openreview.net/forum?id=Dz31Rlv7S8" target="_blank" rel="noopener noreferrer">OpenReview</a></div>
</div>
<p><strong>TL;DR.</strong> Can we tell two continuous distributions apart without parametric assumptions, and with how many samples? A von Mises KL estimator gives an optimal-rate closeness test under smoothness assumptions. Plugging that test into causal discovery yields finite-sample guarantees even for nonlinear, multidimensional variables with hidden confounding.</p>
<p><strong>Why this matters.</strong> It connects optimal nonparametric distribution testing to causal discovery with hidden confounding. The finite-sample guarantees cover nonlinear, multidimensional continuous settings where theory is usually much thinner.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@InProceedings{pmlr-v275-jamshidi25a,
  title     = {Sample Complexity of Nonparametric Closeness Testing for Continuous Distributions and Its Application to Causal Discovery with Hidden Confounding},
  author    = {Jamshidi, Fateme and Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the Fourth Conference on Causal Learning and Reasoning},
  pages     = {1217--1238},
  year      = {2025},
  volume    = {275},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v275/jamshidi25a.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-11" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">NeurIPS 2024</span> ['Fast Proxy Experiment Design for Causal Effect Identification']({{ '/papers/fast-proxy-experiment-design/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-11" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal identification</span><span class="pub-keyword">experiment design</span><span class="pub-keyword">proxy interventions</span><span class="pub-keyword">optimization</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--venue" href="https://proceedings.neurips.cc/paper_files/paper/2024/hash/5bd9fbb3a5a985f80c16ddd0ec1dfc43-Abstract.html" target="_blank" rel="noopener noreferrer">NeurIPS</a><a class="pub-btn pub-btn--slides" href="https://neurips.cc/media/neurips-2024/Slides/96127.pdf" target="_blank" rel="noopener noreferrer">Slides</a><a class="pub-btn pub-btn--poster" href="https://sepehrelahi.com/assets/pdf/fastproxy_poster.pdf" target="_blank" rel="noopener noreferrer">Poster</a><a class="pub-btn pub-btn--talk" href="https://recorder-v3.slideslive.com/?s=7e563e56-4470-492b-9376-b27f84e3788e&amp;share=95761" target="_blank" rel="noopener noreferrer">Video</a></div>
</div>
<p><strong>TL;DR.</strong> Direct interventions may be too expensive, so intervene on cheaper proxy variables instead. We reformulate the minimum-cost proxy experiment problem to make exact optimization much faster in practice, and also study designs based on valid adjustment sets. The same identification goal can be reached with far less computational overhead.</p>
<p><strong>Why this matters.</strong> It makes proxy-experiment design computationally practical when direct interventions are too costly or impossible. The reformulations turn a previously cumbersome exact design problem into something that can be solved much faster.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@inproceedings{elahi2024fast,
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
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-12" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">ICML 2024</span> <span class="pub-status">SPOTLIGHT</span> ['Triple changes estimator for targeted policies']({{ '/papers/triple-changes-estimator-targeted-policies/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-12" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">policy evaluation</span><span class="pub-keyword">triple differences</span><span class="pub-keyword">changes-in-changes</span><span class="pub-keyword">optimal transport</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/SinaAkbarii/Triple-Changes" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://icml.cc/virtual/2024/poster/32647" target="_blank" rel="noopener noreferrer">ICML</a><a class="pub-btn pub-btn--venue" href="https://proceedings.mlr.press/v235/akbari24a.html" target="_blank" rel="noopener noreferrer">PMLR</a></div>
</div>
<p><strong>TL;DR.</strong> Triple differences relax parallel trends, while changes-in-changes recovers an entire counterfactual distribution rather than just a mean. We combine the two into a triple-changes estimator and extend it to multivariate outcomes using optimal transport. The method is illustrated on Medicaid expansion and children&#x27;s preventive care.</p>
<p><strong>Why this matters.</strong> It moves policy evaluation beyond average effects to entire counterfactual distributions. The optimal-transport extension also opens the door to multivariate outcomes rather than a single scalar response.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@InProceedings{pmlr-v235-akbari24a,
  title     = {Triple Changes Estimator for Targeted Policies},
  author    = {Akbari, Sina and Kiyavash, Negar},
  booktitle = {Proceedings of the 41st International Conference on Machine Learning},
  pages     = {666--695},
  year      = {2024},
  volume    = {235},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v235/akbari24a.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-13" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">NeurIPs 2023</span> ['Causal effect identification in uncertain causal networks']({{ '/papers/causal-identification-uncertain-causal-networks/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-13" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal identification</span><span class="pub-keyword">graph uncertainty</span><span class="pub-keyword">combinatorial optimization</span><span class="pub-keyword">causal graphs</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/SinaAkbarii/Causal-Effect-Identification-in-Uncertain-Causal-Networks" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://neurips.cc/virtual/2023/poster/70424" target="_blank" rel="noopener noreferrer">NeurIPS + video</a><a class="pub-btn pub-btn--venue" href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/017c897b4d85a744f345ccbf9d71e501-Abstract-Conference.html" target="_blank" rel="noopener noreferrer">Proceedings</a></div>
</div>
<p><strong>TL;DR.</strong> Causal identification usually assumes the graph is known exactly. Here each edge can be uncertain, and the task is to find the most plausible subgraph in which the target effect is identifiable. That optimization is NP-hard, so we develop efficient approximations and test them on synthetic and real networks.</p>
<p><strong>Why this matters.</strong> Real causal graphs are rarely known with certainty. This work lets identification account for uncertain edges explicitly instead of pretending that one estimated graph is unquestionably correct.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@inproceedings{akbari2023uncertain,
  title     = {Causal Effect Identification in Uncertain Causal Networks},
  author    = {Sina Akbari and Fateme Jamshidi and Ehsan Mokhtarian and Matthew Vowels and Jalal Etesami and Negar Kiyavash},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {36},
  year      = {2023},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2023/hash/017c897b4d85a744f345ccbf9d71e501-Abstract-Conference.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-14" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">NeurIPS 2023</span> ['Causal imitability under context-specific independence relations']({{ '/papers/causal-imitability-context-specific-independence/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-14" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">imitation learning</span><span class="pub-keyword">context-specific independence</span><span class="pub-keyword">latent confounding</span><span class="pub-keyword">causal inference</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/SinaAkbarii/causal-imitation-learning/" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://neurips.cc/virtual/2023/poster/71382" target="_blank" rel="noopener noreferrer">NeurIPS + video</a><a class="pub-btn pub-btn--venue" href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/54e13b23fa2f399cea6e67acf9063c40-Abstract-Conference.html" target="_blank" rel="noopener noreferrer">Proceedings</a></div>
</div>
<p><strong>TL;DR.</strong> Imitation can fail when hidden causal structure makes the expert&#x27;s behavior impossible to reproduce from observed data. Known context-specific independences can change that answer. We characterize when they help, show the general feasibility problem is NP-hard, and give a sound algorithm that uses both CSI information and data.</p>
<p><strong>Why this matters.</strong> Context-specific knowledge can turn an impossible imitation problem into a solvable one. It shows that causal structure can matter even when the extra independence information only holds in particular contexts.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@inproceedings{jamshidi2023imitability,
  title     = {Causal Imitability Under Context-Specific Independence Relations},
  author    = {Fateme Jamshidi and Sina Akbari and Negar Kiyavash},
  booktitle = {Advances in Neural Information Processing Systems},
  volume    = {36},
  year      = {2023},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2023/hash/54e13b23fa2f399cea6e67acf9063c40-Abstract-Conference.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-15" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">ICML 2022</span> <span class="pub-status">ORAL</span> <span class="pub-award"><span class="pub-award-icon" aria-hidden="true">🏆</span>Outstanding Paper Runner-up Award</span> ['Minimm-cost Intervention Design for Causal Effect Identification']({{ '/papers/minimum-cost-intervention-design/' | relative_url }}){:.pub-title-link}.

<div class="pub-card" id="pub-details-15" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal identification</span><span class="pub-keyword">intervention design</span><span class="pub-keyword">combinatorial optimization</span><span class="pub-keyword">do-calculus</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/SinaAkbarii/min_cost_intervention/tree/main" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://icml.cc/virtual/2022/oral/17380" target="_blank" rel="noopener noreferrer">ICML</a><a class="pub-btn pub-btn--slides" href="https://icml.cc/media/icml-2022/Slides/17380_5TIv6sn.pdf" target="_blank" rel="noopener noreferrer">Slides</a><a class="pub-btn pub-btn--venue" href="https://proceedings.mlr.press/v162/akbari22a.html" target="_blank" rel="noopener noreferrer">PMLR</a></div>
</div>
<p><strong>TL;DR.</strong> When observational data cannot identify the effect you want, the next question is: what is the cheapest experiment that will? We connect minimum-cost intervention design to the minimum hitting-set problem and give exact, approximation, and polynomial-time heuristic algorithms. The heuristics achieve low regret on random causal graphs.</p>
<p><strong>Why this matters.</strong> It gives a principled answer to which experiments are worth paying for when observational data are insufficient. The connection to hitting set brings both hardness results and practical optimization tools.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@InProceedings{pmlr-v162-akbari22a,
  title     = {Minimum Cost Intervention Design for Causal Effect Identification},
  author    = {Akbari, Sina and Etesami, Jalal and Kiyavash, Negar},
  booktitle = {Proceedings of the 39th International Conference on Machine Learning},
  pages     = {258--289},
  year      = {2022},
  volume    = {162},
  series    = {Proceedings of Machine Learning Research},
  publisher = {PMLR},
  url       = {https://proceedings.mlr.press/v162/akbari22a.html}
}</pre>
</div>
</div>
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-16" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">AAAI 2022</span> ['Learning Bayesian Networks in the Presence of Structural Side Information']({{ '/papers/learning-bayesian-networks-structural-side-information/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-16" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">Bayesian networks</span><span class="pub-keyword">causal discovery</span><span class="pub-keyword">structural side information</span><span class="pub-keyword">constraint-based learning</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/Ehsan-Mokhtarian/RSL" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://ojs.aaai.org/index.php/AAAI/article/view/20750" target="_blank" rel="noopener noreferrer">AAAI</a></div>
</div>
<p><strong>TL;DR.</strong> Structural side information can make Bayesian-network learning much cheaper. We build recursive constraint-based algorithms for bounded clique number and diamond-free graphs, showing that bounded-treewidth networks can be learned with polynomially many conditional-independence tests. Experiments show strong gains in scalability.</p>
<p><strong>Why this matters.</strong> It shows that even coarse structural knowledge can dramatically reduce the cost of learning Bayesian networks. Bounded clique number or diamond-free structure can turn an exponential testing burden into polynomial complexity.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@inproceedings{mokhtarian2022learning,
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
</div>

<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-17" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">NeurIPS 2021</span> ['Recursive Causal Structure Learning in the Presence of Latent Variables and Selection Bias']({{ '/papers/recursive-causal-structure-learning-latent-selection-bias/' | relative_url }}){:.pub-title-link}.

<div class="pub-card" id="pub-details-17" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal discovery</span><span class="pub-keyword">latent variables</span><span class="pub-keyword">selection bias</span><span class="pub-keyword">MAGs</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--repo" href="https://github.com/Ehsan-Mokhtarian/L-MARVEL" target="_blank" rel="noopener noreferrer">GitHub</a><a class="pub-btn pub-btn--venue" href="https://proceedings.neurips.cc/paper/2021/hash/53edebc543333dfbf7c5933af792c9c4-Abstract.html" target="_blank" rel="noopener noreferrer">NeurIPS</a><a class="pub-btn pub-btn--venue" href="https://neurips.cc/virtual/2021/session/44791" target="_blank" rel="noopener noreferrer">Conference</a></div>
</div>
<p><strong>TL;DR.</strong> Latent variables and selection bias make constraint-based causal discovery especially expensive. We identify removable variables in a MAG, peel them off recursively, and still retain soundness and completeness. This reduces both the number of conditional-independence tests and the size of their conditioning sets, with near-tight worst-case complexity.</p>
<p><strong>Why this matters.</strong> It extends efficient recursive discovery to settings with latent confounding and selection bias. The method keeps soundness and completeness while reducing both the number and size of conditional-independence tests.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@inproceedings{akbari2021recursive,
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
</div>




## Workshop Publications:
<div class="pub-entry" markdown="1">
<button class="pub-toggle-button" type="button" onclick="togglePubDetails(this)" aria-expanded="false" aria-controls="pub-details-18" aria-label="Show paper details" title="Show paper details"><span class="pub-chevron" aria-hidden="true"></span></button> <span class="pub-venue">NeurIPS 2023 — workshop on Optimal Transport and Machine Learning (OTML)</span> ['Causal Discovery via Monotone Triangular Transport Maps']({{ '/papers/causal-discovery-transport-maps/' | relative_url }}){:.pub-title-link}

<div class="pub-card" id="pub-details-18" hidden>
<div class="pub-keywords"><strong>Keywords.</strong><span class="pub-keyword">causal discovery</span><span class="pub-keyword">optimal transport</span><span class="pub-keyword">conditional independence</span><span class="pub-keyword">transport maps</span></div>
<div class="pub-resources">
<span class="pub-resources-label"><strong>Resources.</strong></span>
<div class="pub-actions"><a class="pub-btn pub-btn--venue" href="https://neurips.cc/virtual/2023/74553" target="_blank" rel="noopener noreferrer">NeurIPS workshop</a><a class="pub-btn pub-btn--venue" href="https://otmlworkshop.github.io/accepted_papers/" target="_blank" rel="noopener noreferrer">OTML</a><a class="pub-btn pub-btn--venue" href="https://openreview.net/forum?id=PMGGrKTIii" target="_blank" rel="noopener noreferrer">OpenReview</a></div>
</div>
<p><strong>TL;DR.</strong> Monotone triangular transport maps turn distribution fitting into a tool for causal discovery. They give noise-agnostic conditional-independence tests for constraint-based learning and a new score for score-based learning. With stronger model assumptions, the same framework can identify a unique causal graph.</p>
<p><strong>Why this matters.</strong> It uses transport maps as a flexible bridge between distribution modeling and causal discovery. The same machinery supports both conditional-independence testing and score-based structure learning beyond simple Gaussian models.</p>
<div class="pub-citation">
<div class="pub-citation-header"><strong>Cite this paper.</strong><button class="pub-copy-btn" type="button" onclick="copyPubBibtex(this)" aria-label="Copy BibTeX citation" title="Copy BibTeX citation">Copy</button></div>
<pre class="bibtex-source">@inproceedings{akbari2023transport,
  title     = {Causal Discovery via Monotone Triangular Transport Maps},
  author    = {Sina Akbari and Luca Ganassali and Negar Kiyavash},
  booktitle = {NeurIPS 2023 Workshop on Optimal Transport and Machine Learning},
  year      = {2023},
  url       = {https://openreview.net/forum?id=PMGGrKTIii}
}</pre>
</div>
</div>
</div>