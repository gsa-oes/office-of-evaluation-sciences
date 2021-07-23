---
layout: page
title: Connect
permalink: /connect/
image:
summary: 
---

<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_connect = site.connect %}
    {% for project in sorted_connect %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
