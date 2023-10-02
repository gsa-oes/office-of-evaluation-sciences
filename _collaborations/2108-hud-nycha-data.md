---
title:  Using large-scale data to monitor conditions in New York City public housing 
permalink: /collaborations/nycha-data/
tags: 
  - collaborations
image: /assets/img/project-images/othercollabs/2108.jpeg  
image-credit: https://www1.nyc.gov/site/nycha/about/leadership.page 
academic-pub: /assets/publications/2108_nycha_data.pdf
year: 2021
status: Complete
domain: Housing
agency: 
  - Housing and Urban Development
  - Justice
summary: How can two sources of data - tenant-submitted work orders and results from random inspections - be leveraged to monitor housing conditions? 
---
## What was the challenge? 
On January 31, 2019, the U.S. Department of Housing and Urban Development (HUD), the U.S. Attorney’s Office for the Southern District of New York (SDNY within DOJ), the New York City Housing Authority (NYCHA), and New York City (the City) signed an agreement to help NYCHA significantly improve housing conditions for its residents. Housing conditions targeted for improvement ranged from lead paint to heat to pest infestations. In turn, unsafe housing conditions can harm public housing residents’ health, increasing their risk for conditions such as childhood and adult  asthma.¹

## What did we do? 
Measuring improvement in pest conditions is difficult because there was no “pest census” at the time of the agreement - that is, no complete account of the presence or absence of pests in all units, buildings, and developments. Meanwhile, the administrative agreement requires that NYCHA reduces its pest population by certain magnitudes (e.g., 40-50% depending on the pest type), which makes it important to obtain unbiased measures of pest prevalence. Our collaboration focused on methodologies that could be used to monitor: (1) the baseline levels of pest infestations at the beginning of the legal oversight and (2) whether there are improvements over time.  We explored the pros and cons of four strategies for estimating this prevalence: (1) using tenant-submitted work orders as measures of underlying issues, (2) using results from randomly-scheduled inspections, (3) using results from randomly-scheduled inspections but reweighting these results to account for unequal probabilities of being selected for an inspection and agreeing to have one’s unit inspected, and (4) using predictive modeling to see whether we can predict inspection results using many predictors (e.g., work order history; building characteristics). 

## What did we learn? 
Contrasting the four strategies, we learned that tenant-submitted work orders have biases if used as a measure of underlying housing conditions, due to issues like false negatives (e.g., tenants residing in the unit never submitting a work order but pest conditions are found in an inspection). We also learned that although predictive models have reasonable performance when we fit the model using a subset of data from all boroughs and validate its accuracy using the remainder of the data, which also contains observations from all boroughs (pure train-test split), large differences between boroughs make the models unreliable for generalizing to areas with no inspections. We recommended prevalence estimates based on reweighted inspection results.

<h3>Notes:</h3>
1.  Levy, Jonathan I., Doug Brugge, Junenette L. Peters, Jane E. Clougherty, and Shawnette S. Saddler. "A community-based participatory research study of multifaceted in-home environmental interventions for pediatric asthmatics in public housing." Social science & medicine 63, no. 8 (2006): 2191-2203. <a href="https://www.sciencedirect.com/science/article/pii/S0277953606002607" target="_blank">https://www.sciencedirect.com/science/article/pii/S0277953606002607</a>; Mehta, Amar J., Daniel P. Dooley, John Kane, Margaret Reid, and Snehal N. Shah. "Subsidized housing and adult asthma in Boston, 2010–2015." American journal of public health 108, no. 8 (2018): 1059-1065. <a href="https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2018.304468" target="_blank">https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2018.304468</a>
