---
layout: page
title: Services
permalink: /services/
tags: 
image: /assets/img/icons/oes-red.jpg
hide_image: true
class:
summary: 
---
<p class="billboard-message"><span style='color:#757575'>We partner with agencies across government to:</span></p>
<h2>Design and evaluate program changes</h2>
We work with agency partners to apply evidence from the social and behavioral sciences to change how the program works or how it's implemented, and evaluate its impact. 
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
<h2>Evaluate existing programs</h2>
We work with agency partners to design and conduct an evaluation to measure the impact of a program.
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
<h2>Provide technical assistance on evaluation design</h2>
We work with agency partners to design an evaluation to measure the impact of an existing program or an evidence-based program change.
{% assign featured_design = site.projects | where: "featured" , "services" | where: "type", "Evaluation Design" %}
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
  </div>
   </div>
</section>
{% endif %}
# Become an Agency Partner
OES helps agencies build and use evidence to learn what works.  First, we look to our agency partners to identify priority areas where they would like to see improved outcomes. Next, we work closely together to learn how people process information, make decisions, and interact with government programs. 

## What makes an opportunity a good fit for an OES collaboration?
- You have an important question  related to an established policy priority 
- You are already collecting data on the program and outcome of interest
- The program or program change has potential for significant impact
- Your agency is interested in acting on and sharing results 
- The program operates on a large scale or with many people 
- There is the ability to give groups of people different versions of a program or program change

If this sounds like you, please get in touch! We’re excited to work with agency partners across government. The structure of our collaborations can vary but often follow one of several **<a href="{{ '/assets/files/oes-services-list-fy21-22.pdf' | prepend: site.baseurl }}" target="_blank">common partnership formats</a>**.

Email us at <a href="mailto:oes@gsa.gov?subject=Partnering with OES: Project Idea">oes@gsa.gov</a> to start the conversation. We do not have the ability to respond to all collaboration proposals, but we consider each opportunity carefully. We look forward to hearing from you!

