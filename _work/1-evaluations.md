---
layout: page
title: Evaluations
permalink: /work/
image: /assets/img/icons/oes-green.webp
hide_image: true
tag: work
summary: Since 2015, we have completed over 100 evaluations with dozens of agency partners.

filters:
  - key: year
    title: Year Completed
  - key: status
    title: Status
  - key: type
    title: Project Type
  - key: domain
    title: Domain
  - key: agency
    title: Agency Collaborator
    multiple: true
scripts:
  - src: /assets/js/filters.js
filter_button_title: Filter the project listing
filter_button_message: By year completed, status, project type, domain, and agency collaborator
---

<p>Because results from OES evaluations impact the lives of millions of Americans, the quality of our work is of paramount importance. We follow the <a href="{{ '/assets/files/evaluationpolicy.pdf' | prepend: site.baseurl }}" target="_blank">OES Evaluation Policy (PDF)</a> and six steps to ensure our findings are relevant and reliable.</p>

<img src="{{ '/assets/img/oes-project-process-line.svg' | prepend: site.baseurl }}" alt="1. Partner with federal agencies to target priority outcomes. 2. Translate evidence-based insights into concrete recommendations. 3. Embed evaluations. 4. Analyze results using existing administrative data. 5. Ensure our work meets evaluation best practice. 6. Mesure impact and generate evidence to continuously improve." width="1500">

<!-- begin visually hidden alt text for oes-process-line.webp -->
<div class="usa-sr-only">
  <ol>
    <li><strong>Partner</strong> with Federal Agencies to target priority outcomes</li>
    <li><strong>Translate</strong> behavioral insights into concrete recommendations</li>
    <li><strong>Embed</strong> evaluations</li>
    <li><strong>Analyze</strong> results using existing administrative data</li>
    <li><strong>Ensure</strong> our work meets evaluation best practice</li>
    <li><strong>Measure impact</strong> and generate evidence to continuously improve</li>
  </ol>
</div>
<!-- end visually hidden alt text for oes-process-line.webp -->

<p><a class="usa-button" href="{{ '/projectprocess' | prepend: site.baseurl }}" target="_blank" title="Learn more">Learn more about our project process here</a>
</p>

{% include filter.html items=site.projects filters=page.filters %}
<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_projects = site.projects | sort:"year" | reverse %}
    <div id="filter-message" class="usa-sr-only" role="region" aria-live="polite" aria-atomic="true">
      {{ sorted_projects.size }} matches to your selected filters
    </div>
    {% for project in sorted_projects %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
