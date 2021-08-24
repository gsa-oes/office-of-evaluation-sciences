---
layout: page
title: Other Collaborations
permalink: /collaborations/
tag: work
image: /assets/img/icons/oes-red.jpg
hide_image: true
summary: We support agencies on a variety of pressing implementation challenges.


filters:
  - key: year
    title: Year Completed
  - key: domain
    title: Domain
  - key: type
    title: Project Type
  - key: agency
    title: Agency Collaborator
    multiple: true
scripts:
  - src: /assets/js/filters.js
filter_button_title: Filter the collaboration listing
filter_button_message: By year completed, domain, and agency collaborator
---

<p>In addition to supporting agencies in conducting evaluations, OES has provided support to agency partners in developing resources and answering key questions. </p>

{% include filter.html items=site.collaborations filters=page.filters %}
<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_collaborations = site.collaborations | sort:"year" | reverse %}
    <div id="filter-message" class="usa-sr-only" role="region" aria-live="polite" aria-atomic="true">
      {{ sorted_collaborations.size }} matches to your selected filters
    </div>
    {% for project in sorted_collaborations %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
