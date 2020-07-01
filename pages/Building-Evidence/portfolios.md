---
layout: page
title: Portfolios
permalink: /portfolios/
image:
summary: OES has developed portfolios of evidence on a range of goverment-wide priorities. 
project_tags:

---


## Background

PLACEHOLDER TEXT
Vaccines are one of the most important public health interventions, responsible for saving thousands of lives in the United States every year. Despite this, adult vaccination rates fall well below Healthy People 2020 targets, and the estimated economic burden of vaccine-preventable diseases among adults in the United States was about $9 billion in 2015 alone.

In partnership with the <a href="https://www.hhs.gov/nvpo/featured-priorities/index.html">National Vaccine Program Office (NVPO)</a>, which identified low rates of adult vaccination as a national priority, OES engaged several federal agencies to build a portfolio of evidence to examine how low-cost program changes can improve vaccination rates. OES works directly with implementation entities (such as state Departments of Health and Veterans Affairs health facilities) to identify existing programs where evidence-based changes can be implemented and tested in rapid-cycle evaluations (embedded into existing operations) using random assignment.

## OES Portfolios

<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_portfolios = site.portfolios %}
    {% for project in sorted_portfolios %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
