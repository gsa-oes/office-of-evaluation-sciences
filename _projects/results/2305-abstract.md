---
title: Streamlining income verification to broaden access to rental assistance
layout: page
permalink: /results/streamlining-income-verification-to-broaden-access-to-rental-assistance/
tags: 
  - abstract
image: /assets/img/project-images/2305-image.svg
image-credit: https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-holding-red-smartphone-Z9Tjplzzgh4
summary: 

---
<br>
<a class="usa-button" href="https://oes.gsa.gov/assets/abstracts/2309-samhsa-988-abstract.pdf" target="_blank">View the PDF Version</a>

## Key findings
Streamlining income document verification for rental assistance application reviewers increased approval of applications to the Kentucky Housing Corporation’s Emergency Rental Assistance program by at least seven percentage points. Applicants who identified as people of color, living in rural areas, or had extremely low incomes, benefited equally from streamlining this process. Streamlining did not appear to weaken Kentucky Housing Corporation’s ability to detect fraudulent applications.

## Agency priority
At the outset of the COVID-19 pandemic, housing advocacy groups warned that 20% of renting households would be at risk of eviction by the end of 2020 if the government did not act. Housing instability was especially high among renters with low incomes and renters who identified as people of color.

The U.S. Department of the Treasury administered the Emergency Rental Assistance (ERA) program, which collectively provided over $46 billion to state, local, territorial and Tribal governments (grantees) to prevent eviction and housing instability in the wake of the pandemic. The ERA grantees provided direct cash assistance to renters, landlords, and utility providers to assist with rent, utilities, and other housing-related expenses. Individuals were eligible for ERA assistance if their household income fell below an area-specific threshold (in addition to being at risk of housing instability and experiencing hardship due to the pandemic).

Treasury encouraged grantees to incorporate program design flexibilities that enabled more efficient delivery of ERA assistance to eligible renters in communities disproportionately impacted by the pandemic. This evaluation examines one such flexibility — the fact-specific proxy (FSP), which enables application reviewers to use an alternative data source (e.g., demographic data on the characteristics of where the applicant resides) to corroborate an applicant’s claim of eligibility, without potentially burdensome follow up requirements. In evaluating the FSP, this effort contributes to the American Rescue Plan Equity Learning Agenda and Treasury’s Office of Capital Access Learning Agenda questions on the effectiveness of efforts to allocate American Rescue Plan Act (ARP) funds in a manner that advances equitable outcomes. In addition to examining whether the FSP broadened access to assistance, we also examined whether this flexibility was equally effective for a broad range of eligible applicants.

## Program change description
The Kentucky Housing Corporation’s (KHC) ERA program, Healthy at Home Eviction Relief Fund (HHERF), began accepting applications in February 2021. ERA application reviewers at KHC were overwhelmed by the large influx of applications, and a backlog developed. Requirements to verify the renter applicant’s income through forms — tax statements, pay stubs, or unemployment insurance statements — may have impeded the efficient reviewing of applications. In response, to broaden and quicken access to HHERF, KHC simplified the internal process used by application reviewers to verify applicant income, while keeping the application form and requirements for applicants applying to the program the same.

Starting in June 2021, KHC allowed ERA application reviewers to use the applicant's neighborhood income as proof of income eligibility. KHC used the median income in an applicant’s ZIP code as an FSP. Importantly, KHC did not advertise this change, so it was known only to ERA application reviewers. 

There were 769 ZIP codes in Kentucky in 2021, 403 of which had a publicly-available median income estimate that fell below the county low-income threshold (see Figure 1). Applications from these ZIP codes were flagged internally as automatically eligible as long as the applicant attested to having household income at or below this area-specific threshold. Roughly half of ZIP codes were FSP-eligible, which accounted for 95% of the statewide renter population and 96% of applications during the program period. Applications from the other 366 zip codes proceeded with the standard review, verifying renter applicant income through forms and supporting materials. This sometimes required follow up with applicants for additional information, further delaying review.

<b>Figure 1.</b> Geographic distribution of FSP and non-FSP eligible ZIP codes
<img src="{{ '/assets/img/project-images/2305-ky-map.svg' | prepend: site.baseurl }}" alt="Geographic distribution of FSP and non-FSP eligible ZIP codes." width="1500">

<b>Figure 2.</b> Existing gaps in approval rates for applicants who identify as people of color, reside in a rural area, or have extremely low incomes
<img src="{{ '/assets/img/project-images/2305-results-graph-2.svg' | prepend: site.baseurl }}" alt="Bar chart showing existing gaps in approval rates for applicants who identify as people of color, reside in a rural area, or have extremely low incomes." width="1500">

## Evaluation design
We partnered with KHC to understand if streamlining the income eligibility verification process increased access to assistance.

The analyses we planned prior to receiving the data were based on assumptions that were not met and invalidated our pre-specified approach. We instead calculated credible causal estimates through two distinct methods by leveraging the fact that estimated median income was the only determinant of whether a ZIP code qualified for the FSP. By accounting for the random process that generates these median income estimates, we were able to identify the ZIP codes that did not qualify for the FSP that can serve as a comparison group for the ZIP codes that did. 

## Analysis of existing data
We merged de-identified data from 75,234 applications, submitted between February 2021 and January 2023, with KHC’s original dataset designating ZIP codes as FSP-eligible or FSP-ineligible, and American Community Survey (ACS) data at the ZIP, tract, and county levels. We pre-specified three confirmatory outcomes: payment approval, gaps in approval rates (between applicants who identified as and did not identify as people of color, in rural areas, and extremely low income — see Figure 2), and processing time (days between application and payment). The conditions pre-specified for analyzing processing time were not met, so we do not report it here.

We took two approaches to estimating the impact of the FSP on these outcomes, and therefore present two sets of estimates. Both of them adjust for known confounding variables. 

The first analysis leveraged the random sampling variation in the Census’ estimate of the ZIP code renter median income. This random variability derives from two sources. First, certain ZIP codes were FSP-ineligible due to having an unreported median renter income in the ACS. When too few people are interviewed to generate a reliable estimate, the ACS does not report a median income for the ZIP code. These ZIP codes with missing renter income information were all treated as ineligible for FSP. Second, for ZIP codes where median renter income was reported, ZIP codes were eligible for FSP if their renter median income estimate fell below the applicable county 80% AMI threshold. This estimate depends on the specific respondents sampled, introducing a second source of random variation based on the specific renters sampled. These two sources of random variability generate different probabilities of “treatment” for each ZIP code, based on ZIP codes’ true underlying income distributions, the number of renters in the ZIP code, and the variability in income estimates. We estimated these “treatment probabilities” and used them to reweight the sample to derive representative estimates of the effect of FSP as a whole. This approach is called Inverse Propensity of Treatment Weighting (IPTW).

The second approach used a regression discontinuity (RD). It put more weight on applications from ZIP codes where renter median income fell just above or just below the threshold for FSP eligibility. In other words, the RD finds the comparison group for FSP applications by locating those non-FSP applications that would have benefited but for a small change to the median income estimate in their ZIP code. 

## Results
1. Streamlining income documentation increased the approval rate by between 7.5 and 13.2 percentage points. This increase is from a baseline approval rate of 42.5% of applications in non-FSP ZIP codes. We estimated that FSP caused the approval of up to 9,500 additional applications that could otherwise have been denied during the study period.
2. Streamlining was equally effective for applicants who identified as people of color, were living in rural areas, or had extremely low incomes. In non-FSP ZIP codes, those who identified as people of color (33% of applications) and with extremely low incomes (68% of applications) had higher odds of approval than applicants who did not identify as people of color and applicants without extremely low incomes, whereas applicants living in rural areas (52% of applications) had lower rates of approval than applicants living outside of rural areas. The effect of FSP among these groups is similar both in terms of magnitude and statistical significance. In other words, the FSP did not close gaps between groups but was equally effective among them. 
3. Streamlining did not greatly weaken or strengthen ERA application reviewers ability to detect fraudulent applications. ERA application reviewers successfully detected and denied applications suspected of fraud in about 10% of applications from non-FSP ZIP codes. Our estimates of FSP's impact on fraud detection have conflicting signs — with one specification showing a negative relationship and another showing a positive relationship — and each is close to the threshold for statistical significance. We interpreted this as consistent with an imprecise null result. Taken together, the two estimates provide no evidence that streamlining greatly weakened or strengthened detection. This outcome was not included in the analysis plan.
Finally, as noted above, the pre-conditions for conducting the analysis of processing times we included in our analysis plan were not met. We were therefore unable to determine the impact of FSP on the processing time.

<b>Figure 3.</b> Existing gaps in approval rates for applicants who identify as people of color, reside in a rural area, or have extremely low incomes
<img src="{{ '/assets/img/project-images/2305-change-of-probability-in-application.svg' | prepend: site.baseurl }}" alt="Bar chart showing that the updated IVR increased the percent of calls to 988 that were connected with a counselor." width="1500">

## Implications
Kentucky’s FSP was effective at increasing approval rates for renters eligible for ERA, including those that most needed assistance (those who identified as people of color, rural residents, extremely low income renters — all of whom are most likely to be subject to evictions). Thus, FSP can be an important tool to broaden access to assistance.

Our findings suggest that an FSP can be useful in programs where application volume is high, when specific application criteria may be slow to verify,  when it may be difficult for some applicants to upload supporting documentation, and when applications for funding assistance are potentially time-sensitive. For example, settings such as applications for financial assistance after storm-related disasters could be suitable for an FSP. Further, implementing an FSP can help reduce the likelihood that application reviewers face large backlogs and reduce the chance of eligible applicants missing out on benefits.

Finally, our results suggest that streamlining the application review process can increase the number of applicants awarded funds, even when the change only impacts application reviewers, and not the application itself.

## Notes:
1. We follow HUD’s definition:a person living in a household whose income falls below 30% of the median household income for households of equivalent size in the same Metropolitan Statistical Area (MSA).
2. See Aspen Institute report, 20 Million Renters Are at Risk of Eviction (Jun. 2020).
3. See Consumer Financial Protection Bureau, Housing Insecurity and the COVID-19 Pandemic (Mar. 2021)
4. The ERA1 program is authorized by the Consolidated Appropriations Act, 2021, and provided $25 billion for assistance to eligible households. The ERA2 program is authorized by the American Rescue Plan Act of 2021 and provides $21.55 billion for assistance to eligible households.
5. See p. 3-6 of the analysis plan for a detailed description and timeline of these changes.
6. Estimates of ZIP code tabulation area (ZCTA) renter median income derived from the U.S. Census Bureau’s American Community Survey’s 2019 5-Year Estimates Tables S1901 and S2503. Some ZCTAs (N = 110) did not have a publicly-available renter median income estimate due to data suppression by the Census Bureau to avoid disclosure. County-level low-income limits corresponded to the Department of Housing and Urban Development definition for three-person households in 2019.
7. This figure uses applications from non-FSP ZIPs to provide the context for what gaps between groups look like without the FSP. It excludes applications with missing demographic data.
8. The pre-specified analysis assumes applications submitted prior to the implementation of the FSP did not benefit from it. However, if an application was submitted from an FSP-eligible area prior to the implementation of FSP and was not yet processed, administrators went back and used FSP data to process the application. In practice, this meant that almost all applications (97%) from FSP-eligible areas submitted prior to June 2021 benefitted from the FSP data. In the technical appendix, we diagnose and explain this issue in detail and justify the alternative approaches taken.
9. We pre-registered an analysis estimating the effect of the FSP on the number of days applicants waited to receive payment (see pages 18-19 of the analysis plan). However, the data we received after publishing the analysis plan only records whether valid income documentation was submitted for non-FSP applications. Thus, we were unable to meet the condition pre-specified for conducting this analysis.
10. Namely, the actual and (in the case of suppressed ZIPs) imputed ZIP-level renter median income, the number of renters in the ZIP, and an indicator of whether the ZIP's renter median income estimate was suppressed. See analysis plan for why these variables are considered confounders.
11. This range is based on the results of the IPTW and RD models, which estimate increases in the approval rate of 13.2 percentage points (p < 0.001, CI [7.6, 18.9]) and 7.5 percentage points (CI [1.3, 13.7]), respectively. Estimates are presented with cluster-bootstrapped standard errors, which we found to be more conservative than the planned cluster-robust estimator. The pre-specified difference-in-differences analysis, whose estimates we do not see as credible (see “Evaluation design”), estimated a 3.6 percentage point increase (p = 0.13, CI [-0.01, .08]).
12.  We used the IPTW model to predict counterfactual approval probabilities for applications in the FSP group supposing FSP never existed (setting the FSP indicator to 0). Using the approval probability in a binomial draw gave 33,885 predicted approvals. We subtracted these from the observed approvals in the treatment group (43,480), for a difference of 9,595.
13. These proportions exclude applications for which the relevant demographic category was not reported.
14. The IPTW analysis shows an estimate of -3.4 percentage points (CI [-6.7, -0.001]) while the RDD shows an estimate of 2.4 percentage points (CI [-0.007, 6.4]). 


