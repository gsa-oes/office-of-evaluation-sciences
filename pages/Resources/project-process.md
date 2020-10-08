---
layout: default
title: OES Project Process
permalink: /projectprocess/
image:
image_full: true
class:
summary: We follow a number of steps to ensure our findings are relevant and reliable.
---

<div class="usa-section background-brand-dark">
  <div class="grid-container">
    <h1>{{ page.title }}</h1>
  </div>
</div>
<div class="grid-container usa-prose main-content" id="main">
  {% if page.summary %}
  <p class="billboard-message">{{ page.summary }}</p>
  {% endif %}
  {% if page.image and page.image_full %}
  <img src="{{ page.image | prepend: site.baseurl }}" alt="{{ page.image_alt_text }}">
  {% elsif page.image %}
  <div class="page--banner" style="background-image: url({{ page.image | prepend: site.baseurl }});" role="img" {% if page.image_alt_text %} aria-labelledby="caption" {% endif %}>
    {% if page.image_alt_text %}
    <p class="usa-sr-only" id="caption">{{ page.image_alt_text }}</p>
    {% endif %}
  </div>
  {% endif %}
  <div class="grid-container padding-top-4 margin-top-4 border-top border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
        <img src="{{ '/assets/img/icons/1.png' | prepend: site.baseurl }}" class="display-block margin-x-auto square-15">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h3>Step 1: Partner with Federal Agencies to target priority outcomes</h3>
        <p>In conversations with collaborators, we discuss the most important questions that need to be answered in order to improve program implementation and performance, and define a meaningful outcome at the start. Agencies maintain priorities through their Congressional Justifications, Annual Performance Plans, Strategic Plans, Agency Priority Goals, Cross-Agency Priority Goals, Learning Agendas, and many other planning efforts. Each project is vetted for feasibility and potential impact on a key priority in a Federal program or policy.</p>
        <p><a href="{{ '/assets/files/ProjectInitiation2019.pdf' | prepend: site.baseurl }}">Project Initiation Document</a></p>
      </div>
    </div>
  </div>

  <div class="grid-container padding-top-4 margin-top-4 border-top
    border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
        <img
          src="{{ '/assets/img/icons/2.png' | prepend: site.baseurl }}"
          class="display-block margin-x-auto square-15">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h3>Step 2: Translate behavioral insights into concrete recommendations</h3>
        <p>Our collaborators, who are civil servants with years of experience working to deliver programs across the government, are experts on how their programs work and often have the best ideas for how to improve them. OES team members support their efforts by bringing diverse academic and applied expertise to more deeply understand program bottlenecks and offer recommendations drawn from peer-reviewed evidence in the social and behavioral sciences.</p>
        <p><a href="{{ '/assets/files/ProjectDesign2019.pdf' | prepend: site.baseurl }}">Project Design Document</a></p>
      </div>
    </div>
  </div>
  <div class="grid-container padding-top-4 margin-top-4 border-top
    border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
        <img
          src="{{ '/assets/img/icons/3.png' | prepend: site.baseurl }}"
          class="display-block margin-x-auto square-15">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h3>Step 3: Embed evaluations</h3>
        <p>Evaluations are opportunities to truly learn what works - and are grounded in scientific methods.</p>
        <p>- Whenever possible, we aim to <a href="https://oes.gsa.gov/methodsdetail/#randomization-code-review">randomly assign</a> individuals or groups to a treatment condition (the evidence-based program change). This is what enables us to conclude that improvements in outcomes were actually caused by the program change(s) that we tested.</p>
        <p>- In designing evaluations, we give particular attention to <a href="https://oes.gsa.gov/methodsdetail/#statistical-power">statistical power</a>. Briefly, statistical power is a test’s ability to correctly detect that a program change was effective (assuming that it was indeed effective).</p>
        <p>- Finally, one of the most important steps we take is committing to a detailed <a href="https://oes.gsa.gov/methodsdetail/#analysis-plans">analysis plan</a> before we begin working with the data. As the recent replication crisis in the social sciences has shown, if scientists allow themselves too much flexibility in analyzing data they may get results that are not reliable but instead reflect inadvertent “fishing” or “p-hacking.”</p>
        <p><a href="{{ '/assets/files/AnalysisPlan2019.pdf' | prepend: site.baseurl }}">Analysis Plan Document</a></p>
      </div>
    </div>
  </div>
  <div class="grid-container padding-top-4 margin-top-4 border-top
    border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
        <img
          src="{{ '/assets/img/icons/4.png' | prepend: site.baseurl }}"
          class="display-block margin-x-auto square-15">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h3>Step 4: Analyze results utilizing existing administrative data</h3>
        <p>OES team members work with agency collaborators to leverage existing data to measure the effect of a program change on a priority outcome of interest. As OES seeks to embed evaluations into ongoing operations, new data collections are generally not an option as they can be costly, time-intensive, and can require extensive approval processes. However, administrative data collected by government entities offer rich information that is often underutilized.</p>
        <p><a href="{{ '/assets/files/RecordAnalysis2019.pdf' | prepend: site.baseurl }}">Record of Analysis Document</a></p>
      </div>
    </div>
  </div>
  <div class="grid-container padding-top-4 margin-top-4 border-top
    border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
        <img
          src="{{ '/assets/img/icons/5.png' | prepend: site.baseurl }}"
          class="display-block margin-x-auto square-15">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h3>Step 5: Ensure our work meets evaluation best practice</h3>
        <p>In keeping with our team’s commitment to reproducibility, before we finalize an analysis, we conduct an internal replication that we call Reanalysis. An independent reanalyst — an analyst who does not know the results of the initial analysis — writes new code to analyze the administrative data and independently generate results that address the study’s research objectives. Reanalysis serves as a check on (1) the computer code that the first analyst used to analyze the data, (2) any exploratory analyses that might have been conducted, and (3) any departures from the Analysis Plan that might have been necessary due to unanticipated features of the data. The reanalyst’s goal is to replicate the initial analysis from scratch, working only from the raw data and the Analysis Plan. Discrepancies between the analyses are resolved through careful discussion, generating a more reliable outcome.</p>
        <p><a href="{{ '/assets/files/RecordReanalysis2019.pdf' | prepend: site.baseurl }}">Record of Reanalysis Document</a></p>
      </div>
    </div>
  </div>
  <div class="grid-container padding-top-4 margin-top-4 border-top
    border-base-lighter">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-3">
        <img
          src="{{ '/assets/img/icons/6.png' | prepend: site.baseurl }}"
          class="display-block margin-x-auto square-15">
      </div>
      <div class="tablet:grid-col usa-prose">
        <h3>Step 6: Measure impact and build evidence to continuously improve</h3>
        <p>As part of our commitment to transparency and learning, OES shares findings from every completed evaluation. This helps ensure Federal collaborators can learn what works and, just as importantly, what does not. Results which are surprising or run counter to our expectations are just as important to share and often offer valuable lessons. Our first priority is producing materials that enable decision makers to quickly digest results and understand their implications in a policy relevant time-frame. We produce a number of project summary documents - from high-level summaries, to one-page abstracts, to presentations - that our agency collaborators can use to circulate among their program teams, peers, and leadership, to facilitate learning and evidence-based policy making.</p>
        <p><a href="{{ '/assets/files/Abstract.pdf' | prepend: site.baseurl }}">Abstract Document</a></p>
      </div>
    </div>
  </div>
