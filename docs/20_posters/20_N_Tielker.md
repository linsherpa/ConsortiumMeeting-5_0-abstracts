---
description: "N.Tielker"
title: "Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase"
---

# Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase

#### N. Tielker<sup>1</sup>, P. Kibies<sup>1</sup>, M. Urban<sup>1</sup>, B. Hein-Janke<sup>2</sup>, M. Lim<sup>3</sup>, J. Gretz<sup>4</sup>, R. A. Mata<sup>2</sup>,   P. Czodrowski<sup>3</sup>, S. M. Kast<sup>1</sup>


##### <sup>1</sup>TU Dortmund University 
##### <sup>2</sup>Georg August University of Göttingen, 
##### <sup>3</sup>Johannes Gutenberg University Mainz, 4Ruhr University Bochum

###### 

Compliance of computational chemistry with the FAIR (Findable, Accessible, Interoperable, and Reusable) principles for sustainable research data management (RDM) is vital for maximizing reproducibility of data and results, and to easily verify and use newly developed methods. For the combination of FAIR data with data reproducibility standards to make RDM even "fairer", we choose the acronym FAIR+R. This includes methods such as the automated or manual annotation of generated research data with relevant author- and domain-specific metadata, shared indexing between experimental and computational data, persistent storage, and the transparent and automated analysis of raw computational data.

As a testbed for advancing and encouraging the adoption of FAIR+R RDM methods, we chose a blind prediction challenge as a community task for testing models in the spirit of the SAMPL (Statistical Assessment of the Modeling of Proteins and Ligands) series [1]. The first euroSAMPL challenge [2] (euroSAMPL1) involved experimental aqueous pKa measurements of small drug-like molecules done in-house with computational predictions submitted over a timeframe of 3 months. Compounds were selected according to novelty, existence of only one macroscopic protonation step in the pH range between 2 and 12, limited number of tautomeric microstates, and chemical diversity. Participants were asked to submit only one “ranked” prediction per compound and more “unranked” values to cover situations where more than one macroscopic value was identified theoretically within the experimental range. All kinds of methods were allowed, ranging from atomistic quantum mechanics-based models to empirical or machine learning methodologies. 

Processing and analysis of participants’ data was automated, with final scores weighting not only the accuracy of the computed values but also the level of compliance to FAIR+R principles. The latter was determined by questionnaire-based peer evaluation. The resulting “FAIRscores” were added to the prediction scores to generate the final ranking. All data and statistical analyses are collected in a GitLab repository [3]. A peer-reviewed publication in the journal Physical Chemistry Chemical Physics will follow soon.

Collectively, insights gathered from the euroSAMPL1 challenge in terms of challenge design and technical implementation stimulate ideas for future rounds. This applies not only to the submission of data, but overall how the process is designed in order to remove (as far as possible) human error. These observations pave the way for activities (improvement of ontologies, standardization of computational metadata, digitalization of workflows,...) in a second NFDI4Chem phase.

[1]	https://www.samplchallenges.org

[2]	https://qmbench.net/eurosampl/

[3]	https://gitlab.tu-dortmund.de/kast_ccb/eurosampl/challenge
