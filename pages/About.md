---
layout: page
title: About
permalink: /about/
image:
summary:
---


<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_about = site.about %}
    {% for project in sorted_about %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
