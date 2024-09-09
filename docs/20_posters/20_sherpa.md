---
description: "Lincoln Sherpa"
title: "Navigating Data Diversity: Standardizing Diverse Formats with Converter Services"
---

# Navigating Data Diversity: Standardizing Diverse Formats with Converter Services

#### Lincoln Sherpa

##### Centre for Information Services & High Performance Computing (ZIH), TU Dresden

###### E-mail: lincoln.sherpa@tu-dresden.de


The integration of the latest machines and technologies, combined with a diverse array of existing systems, expands the range of data formats and types, thereby introducing new challenges. To effectively navigate these complexities, it is crucial to implement robust governance mechanisms that ensure seamless conversion of diverse data formats into standardized forms. An infrastructure for deploying converter services has been established, providing users with a streamlined, user-friendly platform for effortlessly transforming data into standardized formats.

The converter service is built on the Common Workflow Language (CWL), selected for its exceptional interoperability, portability, and reproducibility. The source code is housed in a GitLab repository, complete with a CI/CD pipeline that not only automates the generation of conversion and validation summary reports but also fosters community collaboration. These reports offer a detailed overview of the conversion and validation process, ensuring transparency and efficiency across various file formats.

The repository includes all the necessary code to run a converter, which is built on Flask, adheres to the OpenAPI specification, and provides a REST API for seamless integration with other NFDI4Chem services. The entire system is also packaged in a Docker image for easy deployment, and with a Helm chart available to streamline deployment in Kubernetes environments.

Currently, the system processes mass spectrometry files from various instruments, with plans to extend support to other data formats and types.
