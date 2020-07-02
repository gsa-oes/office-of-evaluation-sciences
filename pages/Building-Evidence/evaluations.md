---
layout: page
title: Building evidence
permalink: /work/
image:
summary: Since 2015, the Office of Evaluation Sciences has completed more than 70 evaluations with more than a dozen agencies. 

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

<p>OES team members work alongside agency collaborators to apply behavioral insights, make concrete recommendations for how to improve government, and evaluate impact using administrative data. These projects reflect the work of the OES team and dedicated civil servants across the federal government.</p>
  <div class="grid-container padding-top-4 margin-top-4 border-top border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
      <img src="{{ '/assets/img/oesprojectprocess.png' | prepend: site.baseurl }}" width="600">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h3>OES Evaluation Process</h3>
        <p>To implement our Evaluation Policy and ensure that we adhere to our core principles, we run all of our evaluations through a process that includes six gates.</p>
           <p><a href="{{ '/methods' | prepend: site.baseurl }}">Learn more about our Evaluation Process.</a></p>
      </div>
    </div>
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
