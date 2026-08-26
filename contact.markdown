---
layout: page
title: Contact
permalink: /contact/
nav-include : true
nav-order : 3
---

<style>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.72em;
  margin-bottom: 1.05em;
}

.contact-card {
  padding: 0.72em 0.82em;
  background: var(--site-surface, transparent);
  border: 1px solid var(--site-border, rgba(0, 0, 0, 0.20));
  border-radius: 0.46em;
}

.contact-label {
  display: inline-block;
  margin-bottom: 0.34em;
  padding: 0.07em 0.48em;
  border: 1px solid var(--site-cyan);
  border-radius: 999px;
  color: var(--site-cyan);
  font-size: 0.80em;
  line-height: 1.45;
  font-weight: 600;
}

.contact-value {
  line-height: 1.5;
}

.contact-office-room {
  font-weight: 600;
  margin-bottom: 0.16em;
}

.contact-address {
  margin-top: 0.22em;
  line-height: 1.5;
}

.contact-elsewhere {
  margin-top: 0.9em;
  padding-top: 0.72em;
  border-top: 1px solid var(--site-border, rgba(0, 0, 0, 0.20));
}

.contact-elsewhere strong {
  display: block;
  margin-bottom: 0.48em;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.42em;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.30em;
  padding: 0.20em 0.58em;
  border: 1px solid currentColor;
  border-radius: 0.30em;
  background: transparent;
  font-size: 0.84em;
  line-height: 1.35;
  text-decoration: none;
  transition: transform 120ms ease, background-color 120ms ease;
}

.contact-btn:hover,
.contact-btn:focus-visible {
  transform: translateY(-1px);
  text-decoration: none;
}

.contact-btn--scholar,
.contact-btn--scholar:visited {
  color: var(--site-cyan);
}

.contact-btn--github,
.contact-btn--github:visited {
  color: var(--site-repo);
}

.contact-btn--x,
.contact-btn--x:visited {
  color: var(--site-talk);
}

.contact-btn--linkedin,
.contact-btn--linkedin:visited {
  color: var(--site-blue);
}

.contact-btn--orcid,
.contact-btn--orcid:visited {
  color: var(--site-orcid);
}

.contact-btn--scholar:hover,
.contact-btn--scholar:focus-visible {
  background: var(--hover-cyan, rgba(8, 127, 145, 0.08));
}

.contact-btn--github:hover,
.contact-btn--github:focus-visible {
  background: var(--hover-repo, rgba(75, 85, 99, 0.08));
}

.contact-btn--x:hover,
.contact-btn--x:focus-visible {
  background: var(--hover-talk, rgba(178, 58, 72, 0.08));
}

.contact-btn--linkedin:hover,
.contact-btn--linkedin:focus-visible {
  background: var(--hover-blue, rgba(37, 99, 235, 0.08));
}

.contact-btn--orcid:hover,
.contact-btn--orcid:focus-visible {
  background: var(--hover-orcid, rgba(108, 142, 35, 0.08));
}

.contact-btn--scholar::before {
  content: "↗";
}

.contact-btn--github::before {
  content: "</>";
  font-family: monospace;
  font-size: 0.9em;
}

.contact-btn--x::before {
  content: "𝕏";
}

.contact-btn--linkedin::before {
  content: "in";
  font-weight: 700;
  font-size: 0.82em;
}

.contact-btn--orcid::before {
  content: "iD";
  font-weight: 700;
  font-size: 0.82em;
}

@media (max-width: 600px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="contact-grid">
  <div class="contact-card">
    <span class="contact-label">Office</span>
    <div class="contact-value">
      <div class="contact-office-room">D1.17 · Statistical Laboratory</div>
      <div class="contact-address">
        Faculty of Mathematics<br>
        Wilberforce Road<br>
        Cambridge CB3 0WA<br>
        United Kingdom
      </div>
    </div>
  </div>
  <div class="contact-card">
    <span class="contact-label">Email</span>
    <div class="contact-value">[initials]2385@cam.ac.uk</div>
  </div>
</div>

<div class="contact-elsewhere">
  <strong>Elsewhere.</strong>
  <div class="contact-links">
    <a class="contact-btn contact-btn--scholar" href="https://scholar.google.com/citations?user=-kNnS1AAAAAJ&hl=en&oi=ao">Google Scholar</a>
    <a class="contact-btn contact-btn--github" href="https://github.com/SinaAkbarii">GitHub</a>
    <a class="contact-btn contact-btn--x" href="https://x.com/sinAkbari">X</a>
    <a class="contact-btn contact-btn--linkedin" href="https://www.linkedin.com/in/sina-akbari/">LinkedIn</a>
    <a class="contact-btn contact-btn--orcid" href="https://orcid.org/0009-0005-9414-1035">ORCID</a>
  </div>
</div>
