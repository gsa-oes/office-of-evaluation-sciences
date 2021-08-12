---
layout: page
title: Services
permalink: /services/
tags: 
image: /assets/img/icons/oes-red.jpg
hide_image: true
class:
summary: Learn about the three types of work and services our team provides.
---

<h2>We partner with agencies across government to:</h2>
<h3>Apply evidence from the social sciences to design program modifications and evaluate them </h3>
OES works with agency partners to apply evidence from the social and behavioral sciences to design a program change and evaluate its impact. 

{% assign featured_change = site.projects | where: "featured" , "services" | where: "type", "Program Change and Evaluation" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-section featured bg-secondary-lighter">
    <div class="grid-container">
      <div class="grid-row grid-gap-lg">
        {% for project in featured_change %}
          {% include project-card.html %}
        {% endfor %}
      </div>
    </div>
  </section>
{% endif %}


<h3>Evaluate existing programs or policy changes</h3>
OES works with agency partners to design and conduct an evaluation to measure the impact of a program.
{% assign featured_evaluation= site.projects | where: "type", "Program Evaluation" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-section featured bg-secondary-lighter">
    <div class="grid-container">
      <div class="grid-row grid-gap-lg">
        {% for project in featured_evaluation %}
          {% include project-card.html %}
        {% endfor %}
      </div>
    </div>
  </section>
{% endif %}


<h3> Provide technical assistance on evaluation design</h3>
OES works with agency partners to design an evaluation to measure the impact of an existing program or an evidence-based program change.
{% assign featured_design = site.projects | where: "type", "Evaluation Design" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-section featured bg-secondary-lighter">
    <div class="grid-container">
      <div class="grid-row grid-gap-lg">
        {% for project in featured_design %}
          {% include project-card.html %}
        {% endfor %}
      </div>
    </div>
  </section>
{% endif %}



<br>
<section class="usa-section bg-white">
    <div class="grid-container">
  {% include contact.html %}
      </div>
    </section>

