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

<h1>We partner with agencies across government to:</h1>
<h2>Apply evidence from the social sciences to design program modifications and evaluate them </h2>
OES works with agency partners to apply evidence from the social and behavioral sciences to design a program change and evaluate its impact. 
{% assign featured_change = site.projects | where: "featured" , "services" | where: "type", "Program Change and Evaluation" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-section featured bg-white padding-1">
      <div class="grid-row">
        {% for project in featured_change %}
          {% include project-card.html %}
      {% endfor %}
   </div>
</section>
{% endif %}
<h2>Evaluate existing programs or policies</h2>
OES works with agency partners to design and conduct an evaluation to measure the impact of a program.
{% assign featured_evaluation= site.projects | where: "featured" , "services" | where: "type", "Program Evaluation" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-section featured bg-white padding-1">
      <div class="grid-row grid-gap-sm">
        {% for project in featured_evaluation %}
          {% include project-card.html %}
        {% endfor %}
      </div>
  </section>
{% endif %}
<h2>Provide technical assistance on evaluation design</h2>
OES works with agency partners to design an evaluation to measure the impact of an existing program or an evidence-based program change.
{% assign featured_design = site.projects | where: "featured" , "services" | where: "type", "Evaluation Design" %}
{% if featuredprojects.size == 0 %}
{% else %}
  <section class="usa-section featured bg-white padding-1">
      <div class="grid-row grid-gap-sm">
        {% for project in featured_design %}
          {% include project-card.html %}
        {% endfor %}
      </div>
  </section>
{% endif %}
<a class="usa-button" href="{{site.baseurl}}/work">See more examples</a>
<br><br>


