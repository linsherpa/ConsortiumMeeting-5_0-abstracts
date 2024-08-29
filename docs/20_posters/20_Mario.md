---
title: "Mario Wolter"
description: "Research Data Management in Theoretical Chemistry"
---

# Research Data Management in Theoretical Chemistry

#### Mario Wolter<sup>1</sup>, Christoph R. Jacob<sup>1</sup>
##### Vera Krewald<sup>2</sup>, Christian Mück-Lichtenfeld<sup>3</sup>, Maren Podewitz<sup>4</sup>, Ralf Tonner-Zech<sup>5</sup>

##### <sup>1</sup>Institute of Physical and Theoretical Chemistry, TU Braunschweig
##### <sup>2</sup>TU Darmstadt  
##### <sup>3</sup>Uni- versität Münster  
##### <sup>4</sup>TU Wien  
##### <sup>5</sup>Universität Leipzig


###### E-mail: m.wolter@tu-braunschweig.de, c.jacob@tu-braunschweig.de



Effective data management has emerged as a critical component for scientific advance- ment and collaboration. While a detailed manual record-keeping of all parameters seems to be the standard in experimental disciplines, researchers in theoretical chemistry often simply rely on their folder structures and the saved input and output files. Arguably, this can lead to massive problems in reproduction of simulation results when things out of the scope of these files change.

In the first funding phase NFDI4Chem developed an Electronic Lab Notebook (ELN), ex- tended data and meta-data formats, and ontologies to digitalize experimental data. In our ongoing work, we took the fist steps of making the Chemotion ELN[1] fit for use in theoretical chemistry. In order to do this, new functions had to be implemented in the ELN (e.g. reading general data formats like json and an API to interact with the ELN).

To make this integration of quantum-chemical data even more seamless an ontology for theoretical chemistry is absolutely essential. From this, the universal data (and meta- data) format and even the structure of quantum-chemical code can be derived. The barriers of integration into already existing solutions (e.g. NOMAD[2]) and even on-site solutions are reduced to an absolute minimum. An adoption of these data-formats as standard output formats of quantum-chemical software will improve data handling not only in conjunction with ELNs. In the mean time, already established frameworks for quantum-chemical workflows (e.g. pyADF[3]) are able to fill this gap.

Once established and sufficently automated, this framework will enable real-time data capture, organization, and annotation. Researchers can effortlessly navigate, interpret, and reproduce computational results within the context of their electronic lab journals. By enhancing Findability, Accessibility, Interoperability, and Reusability[4], it not only facili- tates effective collaboration but also strengthens the integrity and longevity of quantum- chemical research data.


#### References

[1] Tremouilhac P, Nguyen A, Huang YC, et al., J Cheminform., 9(1), 54 (2017) https://chemotion.net/
[2] Scheffler, M., Aeschlimann, M., Albrecht, M., et al., Nature 604, 635–642 (2022) https://nomad-lab.eu, https://nomad-lab.eu/nomad-lab/nomad-oasis.html
[3] Jacob, C.R., Beyhan, S.M., Bulo, R.E., Gomes, A.S.P., Götz, A.W., Kiewisch, K., Sikkema, J. and Visscher, L. , J. Comput. Chem., 32: 2328-2338 (2011)
[4] Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J, et al., Scientific data, 3, 160018 (2016)

