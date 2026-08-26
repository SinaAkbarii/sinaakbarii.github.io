<style>
.news-list {
  display: grid;
  gap: 0.72em;
  margin-top: 0.35em;
}

.news-item {
  padding: 0.7em 0.82em;
  background: var(--site-surface, transparent);
  border: 1px solid var(--site-border, rgba(0, 0, 0, 0.20));
  border-radius: 0.46em;
  transition: transform 120ms ease, border-color 120ms ease;
}

.news-item:hover {
  transform: translateY(-1px);
  border-color: var(--site-muted, currentColor);
}

.news-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.38em;
  margin-bottom: 0.34em;
}

.news-date {
  display: inline-block;
  padding: 0.07em 0.48em;
  border: 1px solid var(--site-cyan);
  border-radius: 999px;
  color: var(--site-cyan);
  font-size: 0.80em;
  line-height: 1.45;
  white-space: nowrap;
}

.news-status,
.news-award {
  display: inline-block;
  padding: 0.07em 0.48em;
  border: 1px solid currentColor;
  border-radius: 999px;
  font-size: 0.80em;
  line-height: 1.45;
  font-weight: 600;
  white-space: nowrap;
}

.news-status {
  color: var(--site-blue);
}

.news-award {
  color: var(--site-award);
  border-width: 1.35px;
  font-weight: 700;
}

.news-copy {
  line-height: 1.55;
}

.news-paper-link,
.news-paper-link:visited {
  position: relative;
  left: 0;
  color: var(--site-cyan);
  font-weight: 500;
  transition: left 120ms ease, text-decoration-thickness 120ms ease;
}

.news-paper-link:hover,
.news-paper-link:focus-visible {
  left: 1px;
  text-decoration-thickness: 0.1em;
}

.news-actions {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.35em;
  margin-left: 0.28em;
  vertical-align: middle;
}

.news-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.28em;
  padding: 0.16em 0.52em;
  border: 1px solid currentColor;
  border-radius: 0.30em;
  background: transparent;
  font-size: 0.80em;
  line-height: 1.35;
  text-decoration: none;
  transition: transform 120ms ease, background-color 120ms ease;
}

.news-btn:hover,
.news-btn:focus-visible {
  transform: translateY(-1px);
  text-decoration: none;
}

.news-btn--repo,
.news-btn--repo:visited {
  color: var(--site-repo);
}

.news-btn--paper,
.news-btn--paper:visited {
  color: var(--site-cyan);
}

.news-btn--slides,
.news-btn--slides:visited {
  color: var(--site-slides);
}

.news-btn--talk,
.news-btn--talk:visited {
  color: var(--site-talk);
}

.news-btn--repo:hover,
.news-btn--repo:focus-visible {
  background: var(--hover-repo, rgba(75, 85, 99, 0.08));
}

.news-btn--paper:hover,
.news-btn--paper:focus-visible {
  background: var(--hover-cyan, rgba(8, 127, 145, 0.08));
}

.news-btn--slides:hover,
.news-btn--slides:focus-visible {
  background: var(--hover-slides, rgba(109, 91, 208, 0.08));
}

.news-btn--talk:hover,
.news-btn--talk:focus-visible {
  background: var(--hover-talk, rgba(178, 58, 72, 0.08));
}

.news-btn--repo::before {
  content: "</>";
  font-family: monospace;
  font-size: 0.9em;
}

.news-btn--paper::before {
  content: "↗";
}

.news-btn--slides::before {
  content: "▤";
}

.news-btn--talk::before {
  content: "▶";
  font-size: 0.78em;
}
</style>

<div class="news-list">

<div class="news-item">
  <div class="news-meta">
    <span class="news-date">Aug 2026</span>
    <span class="news-award">🏆 UAI Best Paper Award</span>
  </div>
  <div class="news-copy">🎉 We won the UAI Best Paper Award for our paper on <a class="news-paper-link" href="https://arxiv.org/pdf/2604.12802">‘Sharp Analytical Causal Bounds in Instrumental Variable Models’</a>!</div>
</div>

<div class="news-item">
  <div class="news-meta">
    <span class="news-date">Jun 2026</span>
    <span class="news-status">ORAL</span>
  </div>
  <div class="news-copy">Our paper on <a class="news-paper-link" href="https://arxiv.org/pdf/2604.12802">‘Sharp Analytical Causal Bounds in Instrumental Variable Models’</a> was accepted for an oral presentation at UAI 2026. Shout-out to Pargol &amp; Mohammad Reza!</div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Apr 2026</span></div>
  <div class="news-copy">I gave a talk at EuroCIM!
    <span class="news-actions">
      <a class="news-btn news-btn--slides" href="https://www.sakbari.com/EuroCIM2026.pdf">Slides</a>
      <a class="news-btn news-btn--paper" href="https://arxiv.org/pdf/2604.12802">Paper</a>
    </span>
  </div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Feb 2026</span></div>
  <div class="news-copy">Our <a class="news-paper-link" href="https://openreview.net/pdf?id=ZIQactmQxb">‘CaTs and DAGs’</a> found shelter at ICLR 2026 :)</div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Jan 2026</span></div>
  <div class="news-copy">I started as a postdoctoral fellow at the University of Cambridge!</div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Oct 2025</span></div>
  <div class="news-copy">🎉🎓 I received my PhD degree in CS from EPFL.
    <span class="news-actions">
      <a class="news-btn news-btn--paper" href="https://infoscience.epfl.ch/entities/publication/e2a09d92-2463-4ee1-82ac-fa5b4ef4dfec">Thesis</a>
    </span>
  </div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Sep 2025</span></div>
  <div class="news-copy">A new manuscript is out! <a class="news-paper-link" href="https://arxiv.org/pdf/2502.19788">‘Semiparametric Triple Difference Estimators’</a></div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Jul 2025</span></div>
  <div class="news-copy">Presented two papers at UAI2025, Rio de Janeiro.</div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Sep 2024</span></div>
  <div class="news-copy">Our paper <a class="news-paper-link" href="https://www.jmlr.org/papers/volume26/22-1516/22-1516.pdf">‘Optimal Experiment Design for Causal Effect Identification’</a> just got accepted to appear in Journal of Machine Learning Research (JMLR) special issue for ICML&amp;NeurIPS outstanding papers.</div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Sep 2024</span></div>
  <div class="news-copy">Our paper <a class="news-paper-link" href="https://arxiv.org/html/2407.05330v1">‘Fast Proxy Experiment Design for Causal Effect Identification’</a> got accepted to NeurIPS 2024.</div>
</div>

<div class="news-item">
  <div class="news-meta">
    <span class="news-date">Jul 2024</span>
    <span class="news-status">SPOTLIGHT</span>
  </div>
  <div class="news-copy">I presented my Spotlight paper on the <a class="news-paper-link" href="https://icml.cc/virtual/2024/poster/32647">‘Triple Changes Estimator’</a>, a generalisation of the changes-in-changes framework, at ICML 2024, Vienna.</div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Jul 2024</span></div>
  <div class="news-copy">The scripts for automating workflows related to OpenReview conferences are now accessible on
    <span class="news-actions">
      <a class="news-btn news-btn--repo" href="https://github.com/SinaAkbarii/OpenReview_workflow">my GitHub repo</a>
    </span>
  </div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Jul 2024</span></div>
  <div class="news-copy">The UAI 2024 conference was a blast! Happy to be a part of the <a class="news-paper-link" href="https://www.auai.org/uai2024/organizing_committee">organising committee</a>.</div>
</div>

<div class="news-item">
  <div class="news-meta"><span class="news-date">Feb 2024</span></div>
  <div class="news-copy">I am giving an invited talk at the structure learning symposium of SIAM conference on Uncertainty Quantification (UQ24).</div>
</div>

</div>
