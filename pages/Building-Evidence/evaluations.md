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

<div class="usa-section background-brand-dark">
  <div class="grid-container">
    <h1>{{ page.title }}</h1>
  </div>
</div>
<div class="grid-container usa-prose main-content" id="main">
  {% if page.summary %}
  <p class="billboard-message">{{ page.summary }}</p>
  {% endif %}
  {% if page.image and page.image_full %}
  <img src="{{ page.image | prepend: site.baseurl }}" alt="{{ page.image_alt_text }}">
  {% elsif page.image %}
  <div class="page--banner" style="background-image: url({{ page.image | prepend: site.baseurl }});" role="img" {% if page.image_alt_text %} aria-labelledby="caption" {% endif %}>
    {% if page.image_alt_text %}
    <p class="usa-sr-only" id="caption">{{ page.image_alt_text }}</p>
    {% endif %}
  </div>
  {% endif %}
<p>OES team members work alongside agency collaborators to apply behavioral insights, make concrete recommendations for how to improve government, and evaluate impact using administrative data. These projects reflect the work of the OES team and dedicated civil servants across the federal government.</p>
  <div class="grid-container padding-top-4 margin-top-4 border-top border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
        <img src="{{ '/assets/img/oes-project-process-small.png' | prepend: site.baseurl }}" class="display-block margin-x-auto square-30">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h4>OES Evaluation Process</h4>
        <p>To implement our Evaluation Policy and ensure that we adhere to our core principles, we run all of our evaluations through a process that includes six gates.
          - Step 1: Each evaluation is vetted early for feasibility, proper planning, and potential impact for stakeholders in a Federal program or policy
          - Step 2: Before any evaluation can progress to the “field,” phase, its design is carefully reviewed by select team members and then presented to the full team for comments
          - Step 3: Before we work with data, we commit to an Analysis Plan
specifying key outcomes and analytic choices, and we post it on our website
          - Step 4: An initial analysis of results is presented to the full team to check that the
analysis is sound and comprehensive, that any limitations have been identified, and that alternative
explanations have been addressed to the greatest extent possible
          - Step 5: After the initial analysis has been
team-vetted and refined, it is checked by having a second analyst, who is unaware of the initial
results and findings, reproduce it.
          - Step 6: To ensure transparency and reproducibility, all
evaluation materials are checked for completeness and proper archiving before a report is
published.</p>
           <p><a href="{{ '/methods' | prepend: site.baseurl }}">Learn more about our OES Evaluation Process.</a></p>
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
