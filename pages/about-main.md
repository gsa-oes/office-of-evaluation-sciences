---
layout: page
title: About
permalink: /about/
image:
summary: Working with the Office of Evaluation Sciences - What We Do 
---

<p>The Office of Evaluation Sciences (OES) is an interdisciplinary team of experts within the Federal government, housed at the U.S. General Services Administration. Our team designs and evaluates evidence-based changes to government programs, using rigorous evaluation methods and administrative data. OES also supports agencies design and conduct impact evaluations to measure the impact of federal programs or policies. Sample OES projects can be found on our website, https://oes.gsa.gov/work/. </p>


<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_about = site.about | sort:"year" | reverse %}
    {% for project in sorted_about %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
