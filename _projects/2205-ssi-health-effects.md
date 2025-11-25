---
title: Measuring the health effects of Supplemental Security Income for older adults
permalink: /projects/ssi-health-effects/
tags: 
  - project
share_image: /assets/img/project-images/2205-image.jpg
image: /assets/img/project-images/2205-image.webp
image_alt_text: People sitting on a bench outside
image-credit: https://unsplash.com/photos/78hTqvjYMS4
analysis-plan: /assets/analysis/2205-analysis-plan.pdf
abstract: 
year: 2025  
domain: Efficiency and effectiveness
agency: Social Security Administration
type: Impact evaluation
status: Complete
summary: Enrollment in Supplemental Security Income decreases mortality 
featured: 
---
## Summary
In 2017, OES and the U.S. Social Security Administration (SSA) collaborated on an evaluation that sent informational letters to a random selection of 400,000 older adults. The letters notified them of their potential eligibility for Supplemental Security Income (SSI) and provided information about the application process, resulting in an increase in SSI enrollment of 1.8 percentage points. This follow-up evaluation examined whether enrolling in SSI and receiving benefits reduced mortality among eligible older adults. Results indicate that enrollment in SSI due to the letter reduced the likelihood of death during the evaluation period, although the size and statistical significance of the estimated reduction in mortality differs between the two pre-registered estimation models. The findings provide evidence that improving service delivery for SSI-eligible older adults can decrease mortality.  

## Agency priority
The SSA is committed to improving the quality of service delivery and streamlining operations to deliver accurate, secure, and timely support to all Americans. This evaluation builds evidence on the impact of outreach to older adults by analyzing the effect of SSI enrollment on mortality.

SSI, administered by the SSA, <a class="usa-link usa-link--external" href="https://www.ssa.gov/ssi">provides monthly payments</a> to people with disabilities and older adults who have limited or no income or resources. At the time of the earlier evaluation (2017), an eligible individual could receive a maximum monthly payment of $735 if they met income and asset limitations and other eligibility requirements. SSI recipients must also report changes in income, resources, and living situation to demonstrate continued eligibility. 

In most states, enrollment in SSI makes it easier to enroll in other health-protective programs, including Medicaid and SNAP. For example, <a class="usa-link usa-link--external" href="https://www.ssa.gov/policy/docs/ssb/v76n3/v76n3p17.html">in 34 states</a>, SSI beneficiaries will be automatically enrolled in Medicaid.

## How we evaluated
<a href="https://oes.gsa.gov/projects/increasing-ssi-uptake/">The prior evaluation</a> encouraged enrollment in SSI for eligible older adults with low-cost, informational letters. In September 2017, 400,000 (out of a sample of approximately 4 million) older adults who were potentially eligible for SSI were randomly assigned to be mailed letters describing their potential eligibility and information about the application process. The letters led to an estimated 6,960 additional enrollments in SSI. This follow-up evaluation estimates the downstream mortality effects of those additional enrollments. 

SSI participation could reduce mortality via two related mechanisms: by increasing disposable income through monthly benefit payments and by facilitating access to additional health-promoting programs (such as Medicaid or SNAP). In most circumstances, it is not possible to estimate the direct impact on mortality of SSI benefits because many factors that predict eligibility for SSI also relate to premature death, and it is not feasible to randomly allocate benefits among eligible recipients. However, random assignment to the informational letter group led to some people applying and enrolling in SSI only because they were randomly selected to be sent a letter. We can use this randomly induced enrollment to estimate the effects of an SSI award on recipients’ mortality. 

Our analysis used two models to estimate the effects of award receipt on mortality: a Cox Proportional Hazards Model estimated through a control function approach, and a two-stage least squares regression.<sup>1</sup> Data from the prior evaluation and from the SSA Master Beneficiary Record (MBR) were used to observe mortality across the letter and no letter groups between September 15, 2017 and January 1, 2022. The MBR data includes whether an individual enrolled in SSI and whether they died during the observation period (and if so, when). The data also includes individual characteristics such as sex, date of birth, address, WEP/GPO indicator, and an estimate of the potential SSI payment amount the person might receive if enrolled.<sup>2</sup>

## What we learned
Results suggest that enrolling in SSI as a result of receiving the informational letter led to a decrease in the likelihood of dying during the 52-month study period. 

The two pre-registered models we estimated both indicate a decrease in mortality, but the size and statistical significance of the reduction differed between the two models. The Cox proportional hazard model produces a hazard ratio of 0.61 (p = .001, [0.513–0.708]). This estimate implies a decrease in mortality of 4.8 percentage points during the study period. The two-stage least square regression also indicates a decrease in mortality of 3.4 percentage points, but this estimate is less precise and falls short of statistical significance (p = 0.31, 95% CI [-0.100, 0.032]).<sup>3</sup> The mortality rate during the study period among potentially eligible older adults who were not sent the letter was 12.25%.

Results from both models reflect pre-registered models that control for age, sex, WEP/GPO status, state of residence, and potential benefit amount, but are sensitive to the exclusion of these covariates. For example, estimates of the Cox proportional hazard model without covariates are near zero and not statistically significant. 

## Applying the findings
This evaluation provides evidence for the role of Supplemental Security Income in reducing mortality among older adults with limited or no income or resources. We found that letters notifying older adults about their potential eligibility for SSI and how to apply may extend the lives of those who enroll, although these estimates are sensitive to model specification. To continue building evidence on SSI program effectiveness, SSA could examine downstream outcomes over a longer period of time or with a larger sample. Between December 2020 and December 2022, SSA sent an additional 1.4 million letters to Social Security beneficiaries who might be eligible for SSI; this could provide SSA with an additional opportunity to measure mortality related to SSI enrollment.

Notes:
1. Analytical details can be found in the analysis plan for this evaluation.
2.  WEP/GPO (Windfall elimination provision/Government pension offset beneficiaries were included in the sample but are much less likely than non-WEP/GPO beneficiaries to actually be eligible for SSI. Therefore, a control is included for this.
3. Detailed descriptions of the results from different model specifications can be found at <a class="usa-link usa-link--external" href="https://osf.io/preprints/osf/xg7rw_v1.">https://osf.io/preprints/osf/xg7rw_v1.</a>

Verify the upload date of our analysis plan <a class="usa-link usa-link--external" href="https://github.com/gsa-oes/office-of-evaluation-sciences/commits/master/assets/analysis/2205-analysis-plan.pdf">on GitHub</a>.
