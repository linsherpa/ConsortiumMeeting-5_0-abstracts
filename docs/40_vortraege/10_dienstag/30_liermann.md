---
title: "Liermann"
---

# Webtools für das Spektrometer-Monitoring

#### Johannes C. Liermann

##### Johannes Gutenberg-Universität Mainz, Department Chemie, 55128 Mainz

###### E-Mail: liermann@uni-mainz.de

Mittlerweile ist eine große Zahl an leistungsfähigen Open-Source-Frameworks für die Webentwicklung verfügbar, darunter beispielsweise das JavaScript-Framework React von Meta [1]. Diese erlauben es, interaktive Webanwendungen mit vergleichsweise einfachen Mitteln zu programmieren.

In diesem Vortrag soll gezeigt werden, wie eine solche Webanwendung genutzt werden kann, um die Heliumstände von verschiedenen Spektrometern zu überwachen und zu visualisieren. Die Heliumdaten werden von einem Python-Skript bereitgestellt, das die Heliumstände der Spektrometer automatisch aus den Heliumlogs ausliest und in das JSON-Format konvertiert. Anhand dieser Werte kann die Webanwendung auch verschiedene Prognosen berechnen und warnen, wenn sich ein Spektrometer dem erlaubten minimalen Heliumstand nähert.

Die Webanwendung und die Python-Skripte sind Open-Source und sind auf der GitLab-Instanz des Landes Rheinland-Pfalz veröffentlicht [2]. Für den Betrieb der Webanwendung ist ein Webserver mit Node.js [3] erforderlich.

1. Meta, Inc., _React_. https://reactjs.org/
2. J. C. Liermann, _JGU ZAC Apps_. https://gitlab.rlp.net/liermann/zac-apps-nextjs
3. OpenJS Foundation, _Node.js_. https://nodejs.org/
