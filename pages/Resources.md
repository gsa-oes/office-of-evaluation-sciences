---
layout: page
title: Evaluation Resources
permalink: /resources/
image:
summary: We develop resources
---

<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_resources = site.resources %}
    {% for project in sorted_resources %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
