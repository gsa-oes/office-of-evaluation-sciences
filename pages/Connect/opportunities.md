---
layout: page
title: Opportunities & Fellowships
permalink: /opps/
image:
image_full: true
class:
summary: Learn more about joining OES and working with us as an agency collaborator or affiliate.
---

## Join OES
<iframe src="https://www.youtube.com/embed/9KSQ3YLpuV4" width="512" height="384"></iframe>

### OES Annual Fellowship Overview
OES accepts applications annually for one-year fellowships beginning in the fall in Washington, D.C. Based at the General Services Administration (GSA), <a href="https://oes.gsa.gov/team/">OES is a team of interdisciplinary experts</a> that works across government to help agencies build and use evidence. 

Team members work alongside agency collaborators to apply behavioral insights, make concrete recommendations on how to improve government, and evaluate impact using administrative data. OES is uniquely situated at the center of government to share leading practices, develop resources and build skills in the Federal workforce on evidence and evaluation. To date, OES has completed over <a href="http://oes.gsa.gov/work">70 randomized evaluations</a> with dozens of agency partners. OES follows the best practices in social science research to build evidence in order to be a <a href="http://oes.gsa.gov/methods">leader in transparency and accountability.</a> OES forms innovative partnerships to tackle some of the most pressing challenges in the United States and abroad, such as  opioid prescribing, access to healthcare for Veterans, reducing energy use and costs, and improving government efficiency. 

Fellows and Associate Fellows join OES on-loan from academic, nonprofit, or government offices on either a reimbursable or non-reimbursable basis. Fellows have come from a variety of universities, non-profits, and Federal departments. There is additional flexibility for Federal employees applying for a rotational detail. You can learn more about the position and what we look for by [viewing the 2021 Fellowship Solicitation]({{site.baseurl}}/assets/files/GSA_OES_SolicitationFY21.pdf). 

## Collaborate with OES

We’re excited to work with agency collaborators across government. Send us information on the question you are trying to answer, outcome you are trying to improve, area you may be seeking training in, or the resources you may need to <a href="mailto:oes@gsa.gov?subject=Partnering with OES: Project Idea">oes@gsa.gov</a> to start the conversation. We do not have the ability to respond to all collaboration proposals, but we consider each opportunity carefully. We look forward to hearing from you!

<br>
<div class="banner contact">
  <div class="grid-container">
  {% for form in site.forms %}
    {% if form.type == 'newsletter' %}
      {% assign f = form %}
    {% endif %}
  {% endfor %}
    <div class="grid-row">
      <div class="grid-col-8 contact-form">
          <h2 id="whats-new-at-oes">What's new at OES?</h2>
          <p>Sign up for our email list to receive updates on events, results released, and opportunities to work with the team.</p>      
          <a class="usa-button usa-button-marginless" href="https://goo.gl/forms/VgSGvpAZZn61oxy62">Sign up</a>
      </div>
      <div class="grid-col-4 privacy-policy">
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
</div>

