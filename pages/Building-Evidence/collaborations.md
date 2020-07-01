---
layout: page
title: Other Collaborations
permalink: /collaborations/
image:
summary: We work directly alongside agency collaborators on their most pressing implementation challenges, ensuring that we’re building capacity by empowering our collaborators. When our collaborations do not lead to evaluations, we aim to share learnings and the outcomes of engagements.

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
