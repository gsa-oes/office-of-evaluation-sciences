---
layout: page
title: Blog
permalink: /blog/
image:
summary: Our team posts regular updates on our collaborations, resources and evidence utilization. 


filters:
  - key: year
    title: Year Completed
  - key: status
    title: Status
  - key: domain
    title: Domain
  - key: agency
    title: Agency Collaborator
    multiple: true
scripts:
  - src: /assets/js/filters.js
filter_button_title: Filter the collaboration listing
filter_button_message: By year completed, domain, and agency collaborator
---

{% include filter.html items=site.collaborations filters=page.filters %}
<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_collaborations = site.collaborations | sort:"year" | reverse %}
    {% for project in sorted_collaborations %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
