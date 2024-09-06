---


description: " Claudia Bobach "
title: "Development of a Comprehensive Chemistry Ontology"
---

# Development of a Comprehensive Chemistry Ontology

#### Adnan Ali, Shadrack Jabes Barnabas, Aleksei Krasnov, Christoph Ruttkies, Claudia Bobach

##### 

###### 


We developed an automated pipeline to generate a comprehensive chemistry ontology for small molecules which can be used for normalization, text mining and knowledge representation & reasoning tasks. Comprehensiveness and precision are therefore most important, so we tried to integrate as many relevant structures and their synonyms as possible. Apart from the common openly available sources like PubChem (with bioactivity), DrugCentral, ChEMBL and ChEBI etc., OntoChem also integrated structures collected from a Name2Structure approach using OC|Processor as an additional large source. We normalize and register compound structures to create unique ontological concept identifiers (= OCIDs). All compounds are assigned automatically to 6,738 chemical classes. Each ontology concept includes an identifier (= OCID), a preferred name, synonyms, hierarchical is_a relationships and references to external sources. Extensive cleaning steps for preferred names and synonyms have been developed to achieve a high quality of the vocabulary. The resulting chemistry ontology has a total number of 22,313,682 concepts, 146,328,224  synonyms and an average ratio of 6.5 synonyms per concept. Concepts can be searched in the special chemistry search interface in SciWalker allowing even searching for complex chemical classes like monoterpenes.