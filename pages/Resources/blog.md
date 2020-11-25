---
layout: page
title: Blog
permalink: /blog/
image:
summary: Our team posts regular updates on our collaborations, resources and evidence utilization. 
---

<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_blog = site.blog}
    {% for project in sorted_blog %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
