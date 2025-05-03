---
layout: page
title: Our Services
permalink: /services/
tags: 
image: /assets/img/icons/oes-red.webp
hide_image: true
class:
summary: 
---

We partner with agencies across government to provide the following evaluation services:

<h2>Descriptive evaluation</h2>
{% assign featured_change = site.projects | where: "featured" , "services" | where: "type", "Descriptive evaluation" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-accordion featured bg-white padding-1">
  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a1"
    >
      Recent examples
    </button>
  </h2>
  <div id="a1" class="usa-accordion__content usa-prose">
      <div class="grid-row grid-gap-lg">
        {% for project in featured_change %}
          {% include project-card.html %}
        {% endfor %}
  </div>
   </div>
</section>
{% endif %}

<h2>Formative evaluation</h2>
We conduct a formative evaluation to help assess whether your program is feasible and appropriate before it’s fully implemented.

<h2>Process or implementation evaluation</h2>
We conduct a process or implementation evaluation to assess whether your program was implemented as intended.

<h2>Outcome evaluation</h2>
We conduct an outcome evaluation to measure the extent to which a program has achieved its intended purpose/outcome(s).

<h2>Impact evaluation</h2>
We conduct an impact evaluation to understand the effect of an activity on an important outcome.
{% assign featured_change = site.projects | where: "featured" , "services" | where: "type", "Descriptive evaluation" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-accordion featured bg-white padding-1">
 <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a1"
    >
      Recent examples
    </button>
  </h2>
  <div id="a1" class="usa-accordion__content usa-prose">
      <div class="grid-row grid-gap-lg">
        {% for project in featured_change %}
          {% include project-card.html %}
        {% endfor %}
  </div>
   </div>
</section>
{% endif %}

## Become an agency partner
We’re excited to work with agency partners across government. Email us at <a href="mailto:oes@gsa.gov?subject=Partnering with OES: Evaluation support">oes@gsa.gov</a> to start the conversation.
