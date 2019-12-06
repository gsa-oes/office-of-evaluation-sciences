---
layout: page
title: Contact
permalink: /connect/
image:
image_full: true
class:
summary:  
---

<div class="banner contact">
  <div class="usa-grid">
  {% for form in site.forms %}
    {% if form.type == 'newsletter' %}
      {% assign f = form %}
    {% endif %}
  {% endfor %}
    <div class="usa-width-two-thirds contact-form">
        <h2 id="whats-new-at-oes">What's new at OES?</h2>
        <p>Sign up to receive updates on results released and opportunities to work with the team by filling out our interest form.</p>      
        <a class="usa-button usa-button-marginless" href="https://goo.gl/forms/VgSGvpAZZn61oxy62">Sign up</a>
    </div>
    <div class="usa-width-one-third privacy-policy">
      {% if f.privacypolicy %}
        {% include icons/privacy.svg %}
        <h3 class="h4">Your privacy and security are important to us.</h3>
        <p class="font-small">We’ll only share your information as described in the <a href="http://www.gsa.gov/portal/content/116609">{{ f.privacypolicy.name }}</a>.</p>
      {% else %}
        <p></p>
      {% endif %}
    </div>
  </div>
</div>
