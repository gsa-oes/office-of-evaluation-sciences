---
layout: page
title: Our Services
permalink: /services/
tags: 
image: /assets/img/icons/oes-red.jpg
hide_image: true
class:
summary: 
---

OES is an interdisciplinary team that works across the federal government to help agencies build and use evidence. OES partners with federal agencies to answer priority questions with rigorous evaluation methods and administrative data. We design and conduct evaluations of existing programs and evidence-based program changes. We partner with agencies across government to provide the following services:

<h2>Impact Evaluation of a Program Change</h2>
OES designs an evidence-based program change, usually to address a behavioral barrier, and conducts an evaluation of it to measure impact. 
{% assign featured_change = site.projects | where: "featured" , "services" | where: "type", "Program Change and Evaluation" %}
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
<h2>Impact Evaluation of a Program</h2>
OES designs and conducts an evaluation to measure the impact of a new or existing program.
{% assign featured_evaluation= site.projects | where: "featured" , "services" | where: "type", "Program Evaluation" %}
{% if featuredprojects.size == 0 %}
{% else %}
 <section class="usa-accordion featured bg-white padding-1">
  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a2"
    >
      Recent examples
    </button>
  </h2>
  <div id="a2" class="usa-accordion__content usa-prose">
      <div class="grid-row grid-gap-lg">
        {% for project in featured_evaluation %}
          {% include project-card.html %}
        {% endfor %}
  </div>
   </div>
</section>
{% endif %}
<h2>Descriptive Study</h2>
OES designs and conducts a descriptive study using administrative data. Descriptive studies seek to document and understand a phenomenon, program, or process, which could include some set of features of a program or its intended recipients, without measuring effectiveness.
{% assign featured_design = site.projects | where: "featured" , "services" | where: "type", "Descriptive Study" %}
   {% assign featured_design2 = site.collaborations | where: "featured" , "services" | where: "type", "Descriptive Study" %}
{% if featuredprojects.size == 0 %}
{% else %}
 <section class="usa-accordion featured bg-white padding-1">
  <h2 class="usa-accordion__heading">
    <button
      class="usa-accordion__button"
      aria-expanded="false"
      aria-controls="a3"
    >
      Recent examples
    </button>
  </h2>
  <div id="a3" class="usa-accordion__content usa-prose">
      <div class="grid-row grid-gap-lg">
        {% for project in featured_design %}
          {% include project-card.html %}
{% endfor %}
                {% for project in featured_design2 %}
          {% include project-card.html %}
{% endfor %}
  </div>
   </div>
</section>
{% endif %}
# Become an Agency Partner
OES helps agencies build and use evidence to learn what works. First, we look to our agency partners to identify priority areas where they would like to see improved outcomes. Next, we work closely together to learn how people process information, make decisions, and interact with government programs. 

## Criteria for OES collaborations
The criteria below describe required components for OES collaborations, and were developed with an aim to guide team decision making and prioritization for new and ongoing projects.

- Support: An agency collaborator willing to act on and share results and other key deliverables
- Data availability: Data for the study is currently collected (or could be easily collected) by the federal agency
- Rigor: Sample size large enough for statistical power and policy relevance
- Relevance: Answers a priority question and fills an important evidence gap 
- Evidence-Based: Program or program change has a plausible and clear theory of change with potential for impact on a priority outcome

If this sounds like you, please get in touch! We’re excited to work with agency partners across government. **<a href="{{ '/assets/files/oes-services-list-fy-23.pdf' | prepend: site.baseurl }}" target="_blank">Learn more about working with the Office of Evaluation Sciences</a>**, our service offerings, and criteria for collaborations.

Email us at <a href="mailto:oes@gsa.gov?subject=Partnering with OES: Project Idea">oes@gsa.gov</a> to start the conversation. We do not have the ability to respond to all collaboration proposals, but we consider each opportunity carefully. We look forward to hearing from you!
