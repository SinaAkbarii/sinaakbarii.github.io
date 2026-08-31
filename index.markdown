---
layout: home
---

<style>
.home-intro {
  display: flex;
  align-items: center;
  gap: 1.2em;
  padding: 0.9em 1em;
  background: var(--site-surface, transparent);
  border: 1px solid var(--site-border, rgba(0, 0, 0, 0.20));
  border-radius: 0.48em;
}

.home-photo {
  width: 200px;
  height: auto;
  flex: 0 0 auto;
  border: 1px solid var(--site-border, rgba(0, 0, 0, 0.20));
  border-radius: 0.45em;
}

.home-copy p {
  margin: 0.35em 0;
  line-height: 1.58;
}
.home-copy a,
.home-copy a:visited {
  position: relative;
  left: 0;
  color: var(--site-cyan);
  font-weight: 500;
  transition: left 120ms ease, text-decoration-thickness 120ms ease;
}

.home-copy a:hover,
.home-copy a:focus-visible {
  left: 1px;
  text-decoration-thickness: 0.1em;
}

.home-news-heading {
  display: flex;
  align-items: center;
  gap: 0.45em;
  margin-top: 1.5em;
}

.home-news-heading::after {
  content: "";
  height: 1px;
  flex: 1;
  background: currentColor;
  opacity: 0.18;
}
@media (max-width: 650px) {
  .home-intro {
    display: block;
  }

  .home-photo {
    width: 180px;
    margin-bottom: 0.5em;
  }
}
</style>
<div class="home-intro">
  <img class="home-photo" src="/pics/head.jpg" alt="Sina">
  <div class="home-copy">
    <p>Hi there! I am Sina, a postdoctoral fellow at the <a href="https://www.statslab.cam.ac.uk">Statistical Laboratory</a>, University of Cambridge, where I work with <a href="https://www.statslab.cam.ac.uk/~qz280/">Qingyuan Zhao</a>.
Previously, I received a PhD in Computer Science from École Polytechnique Fédérale de Lausanne (EPFL) (<a href="https://infoscience.epfl.ch/entities/publication/e2a09d92-2463-4ee1-82ac-fa5b4ef4dfec">doctoral thesis</a>), where I was supervised by <a href="https://people.epfl.ch/negar.kiyavash?lang=en">Negar Kiyavash</a> at <a href="https://www.epfl.ch/labs/ban/">Business Analytics</a>.</p>
    <p>My research primarily focuses on causal inference. A recurring theme is developing methods that use flexible machine learning tools while still providing statistical guarantees. I am interested in partial identification, experiment design, semiparametric statistics, sequential decision-making, and incorporating causal structure into predictive models.  </p>
  </div>
</div>
<h2 class="home-news-heading">News</h2>

{% include news.markdown %}
