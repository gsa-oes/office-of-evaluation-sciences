---
layout: page
title: Opportunities & Fellowships
permalink: /opps/
image:
image_full: true
class:
summary: Learn more about joining OES and working with us as an agency collaborator or affiliate.
---

<section class="background-brand-dark">
 <div class="usa-grid main-content">
    <div class= "usa-grid" align="left">
      <h1>OES Annual Fellowship Overview></h1>
   </div>
 </div>
   </section>

## OES Annual Fellowship Overview
The Office of Evaluation Sciences (OES) is currently accepting applications for fellowships beginning in Fall 2021. These positions will be based in Washington DC, with some flexibility based on the COVID-19 pandemic. <a href="https://oes.gsa.gov/assets/files/GSA_OES_SolicitationFY21.pdf">Learn more about the fellowship here.</a> 
 
### Application Details
<a href="https://docs.google.com/forms/d/1jQYihtWnsD9ZK-xQws4sZDheQryxHDT3Yn3HieXQf2s/prefill">Applicants may apply online here.</a> The deadline to submit is **11:59 p.m. EST Sunday, December 13, 2020.**

*Note: A Google email is required to submit the Annual Fellowship Application. If you are unable to access the application through Google Forms, please see the <a href="https://oes.gsa.gov/assets/files/oes-fy21-fellowship-application.pdf">full application here.</a>* 

#### We are recruiting for the following positions:
- **Fellows** have substantial expertise in the social and behavioral sciences field. Typically they are researchers with a PhD and publication record in a social or behavioral science field (e.g., economics, psychology, political science, statistics, sociology, public policy, business, etc.).
- **Associate Fellows** typically have recently completed a PhD or postdoc, or have a Master’s Degree plus two or more years of relevant experience.
- **Health Fellow** should possess expertise in an area of health policy or the application of behavioral insights to health behaviors, experience and familiarity with or deep interest in using health datasets, and be available for a two-year fellowship

### A Few Fellow Profiles 
Fellows have joined our team from a range of academic disciplines and backgrounds. Meet a few of our current team members:
![image]({{site.baseurl}}/assets/img/fellows-1.jpg)
![image]({{site.baseurl}}/assets/img/fellows-2.jpg)

<iframe src="https://www.youtube.com/embed/9KSQ3YLpuV4" width="512" height="384"></iframe>

## Collaborate with OES

We’re excited to work with agency collaborators across government. Send us information on the question you are trying to answer, outcome you are trying to improve, area you may be seeking training in, or the resources you may need to <a href="mailto:oes@gsa.gov?subject=Partnering with OES: Project Idea">oes@gsa.gov</a> to start the conversation. We do not have the ability to respond to all collaboration proposals, but we consider each opportunity carefully. We look forward to hearing from you!

## Supporting OES as an Academic Affiliate 

We often require specific subject matter expertise as we identify opportunities to work with agencies on an ongoing basis. As an Academic Affiliate, you will be able to apply your work to improve government, and have the opportunity to publish results. Tell us about your area of expertise by emailing <a href="mailto:oes@gsa.gov?subject=Academic Affiliate Inquiry">oes@gsa.gov</a>, and we may reach out to you to collaborate on a specific project. 

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

