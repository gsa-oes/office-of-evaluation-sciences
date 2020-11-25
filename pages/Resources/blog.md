---
layout: page
title: Blog
permalink: /blog/
image:
summary: Our team posts regular updates on our collaborations, resources and evidence utilization. 


filters:
  - key: year
    title: Year Completed
  - key: tag
    title: Tags
  - key: agency
    title: Agency Collaborator
    multiple: true
scripts:
  - src: /assets/js/filters.js
filter_button_title: Filter the blog post
filter_button_message: By year completed, domain, and agency collaborator
---

{% include filter.html items=site.blog filters=page.filters %}
<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_blog = site.blog | sort:"year" | reverse %}
    {% for project in sorted_blog %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
