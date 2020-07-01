---
layout: page
title: Building evidence
permalink: /work/
image:
summary: Since 2015, the Office of Evaluation Sciences has completed more than 70 tests with more than a dozen agencies. 

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
filter_button_title: Filter the project listing
filter_button_message: By year completed, current status, domain, and agency collaborator
---

<div class="usa-prose">
  <p>OES team members work alongside agency collaborators to apply behavioral insights, make concrete recommendations for how to improve government, and evaluate impact using administrative data. These projects reflect the work of the OES team and dedicated civil servants across the federal government.</p>
![image](/assets/img/oesprojectprocess.png)
  
</div>

{% include filter.html items=site.projects filters=page.filters %}
<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_projects = site.projects | sort:"year" | reverse %}
    {% for project in sorted_projects %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
