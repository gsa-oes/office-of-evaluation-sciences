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
<h1><span style='color:#757575'>We partner with agencies across government to:</span></h1>
<h2>Design and evaluate program changes</h2>
OES works with agency partners to apply evidence from the social and behavioral sciences to change how the program works or how its implemented, and evaluate its impact. 
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
      <div class="grid-row grid-gap-sm">
        {% for project in featured_change %}
          {% include project-card.html %}
        {% endfor %}
  </div>
   </div>
</section>
{% endif %}
<h2>Evaluate existing programs</h2>
OES works with agency partners to design and conduct an evaluation to measure the impact of a program.
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
      <div class="grid-row grid-gap-sm">
        {% for project in featured_evaluation %}
          {% include project-card.html %}
        {% endfor %}
  </div>
   </div>
</section>
{% endif %}
<h2>Provide technical assistance on evaluation design</h2>
OES works with agency partners to design an evaluation to measure the impact of an existing program or an evidence-based program change.
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
      <div class="grid-row grid-gap-sm">
        {% for project in featured_design %}
          {% include project-card.html %}
{% endfor %}
  </div>
   </div>
  <br><br>
      <div class="grid-row grid-gap-sm">
        <p>
          <a class="usa-button" href="{{site.baseurl}}/work">See more examples</a>
        </p>
      </div>
</section>
{% endif %}
<br>
