---
layout: page
title: About
permalink: /about/
image:
summary: Working with the Office of Evaluation Sciences
---
<h2>What We Do</h2>
<p>The Office of Evaluation Sciences (OES) is an interdisciplinary team that works across the federal government to help agencies build and use evidence. OES partners with federal agencies to answer priority questions with rigorous evaluation methods and administrative data. We design and conduct evaluations of existing programs and evidence-based program changes. Sample OES projects can be found here, <a href="https://oes.gsa.gov/work/">oes.gsa.gov/work/</a></p>


<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_about = site.about %}
    {% for project in sorted_about %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
