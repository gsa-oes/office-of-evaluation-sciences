---
layout: page
title: Team
permalink: /team/
tags: 
image: /assets/img/icons/oes-blue.webp
hide_image: true
class: page-team
summary: Meet our current and former staff and affiliates who share a passion for applying their expertise to improve government.

filters:
  - key: year
    title: Years active
    multiple: true
  - key: title
    title: Title
    multiple: true
  - key: home
    title: Home institution
    multiple: false
  - key: agency
    title: Agency collaborator
    multiple: true
  - key: status
    title: Status
    multiple: true
    default: Current
scripts:
  - src: /assets/js/filters.js
  - src: /assets/js/modal.js
filter_button_title: Filter the team listing
filter_button_message: By year, title, home institution, and agency collaborator
---

{% include filter.html items=site.team filters=page.filters %}

<section class="usa-graphic-list">
  <div class="grid-row grid-gap">
    {% for team in site.team %}
      <div class="usa-media-block tablet:grid-col-6 js-filterable" {% for filter in page.filters %} data-{{ filter.key }}="{{ team[filter.key] | jsonify | xml_escape }}" {% endfor %}>
        <div class="display-flex flex-align-center">
          {% if team.image %}
          <img class="usa-media-block__img team-image" src="{{ team.image | prepend: site.baseurl }}" alt="{{ team.name }}" loading="lazy">       
          {% endif %}
          <div class="usa-media-block__body usa-prose">
            <h3 class="usa-graphic-list__heading">
              <a href="{{ site.baseurl }}{{ team.url }}">
                {{ team.name }}
              </a>
            </h3>
            <p>{{ team.title | join: ", " }}</p>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<div class="modal-overlay" id="modal-overlay"></div>
<div class="modal-inner" id="modal-inner" tabindex="-1">
  <button aria-label="close" class="close-modal" id="close-modal">✕</button>
  <div id="bio"></div>
</div>
For opportunities to join the team, please visit our <a href="https://oes.gsa.gov/opps/">opportunities page</a>.
