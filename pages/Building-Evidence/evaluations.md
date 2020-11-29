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

<p>Because results from OES evaluations impact the lives of millions of Americans, the quality of our work is of paramount importance. We follow the <a href="{{ '/assets/files/evaluationpolicy.pdf' | prepend: site.baseurl }}">OES Evaluation Policy</a> and six steps to ensure our findings are relevant and reliable. 
  <br> <img src="{{ '/assets/img/oes-process-line.png' | prepend: site.baseurl }}" width="1500"><br>
  <p><a class="usa-button" href="{{ '/projectprocess' | prepend: site.baseurl }}">Learn more about our project process here</a>
</p>

{% include filter.html items=site.projects filters=page.filters %}
<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_projects = site.projects | sort:"year" | reverse %}
    {% for project in sorted_projects %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
