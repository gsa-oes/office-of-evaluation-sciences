---
layout: page
title: Our work
permalink: /work/
image:
summary: Since 2015, the Office of Evaluation Sciences has completed more than 90 impact evaluations with more than 20 agency collaborators.
---
<p>Because results from OES evaluations impact the lives of millions of Americans, the quality of our work is of paramount importance. We follow the <a href="{{ '/assets/files/evaluationpolicy.pdf' | prepend: site.baseurl }}">OES Evaluation Policy</a> and six steps to ensure our findings are relevant and reliable. 
  <br> <img src="{{ '/assets/img/oes-process-line.png' | prepend: site.baseurl }}" width="1500"><br>
  <p><a class="usa-button" href="{{ '/projectprocess' | prepend: site.baseurl }}">Learn more about our project process here</a>
</p>

<div class="margin-top-4">
  <div class="grid-row grid-gap">
    {% assign sorted_work = site.work %}
    {% for project in sorted_work %}
      {% include project-card.html %}
    {% endfor %}
  </div>
</div>
