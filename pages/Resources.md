---
layout: page
title: Resources
permalink: /resources/
image:
summary: 
---

<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_resources = site.resources %}
    {% for project in sorted_resources %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
