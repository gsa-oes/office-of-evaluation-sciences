---
layout: page
title: Blog
permalink: /blog/
image: /assets/img/icons/oes-orange.webp
hide_image: true
summary: Our team posts updates on our collaborations, resources and evidence utilization. 
---

<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_blog = site.blog | sort:"year" | reverse %}
    {% for project in sorted_blog %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
