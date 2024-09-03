"use strict";(self.webpackChunkcm_5_0_abstracts=self.webpackChunkcm_5_0_abstracts||[]).push([[42],{8076:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(4848),n=i(8453);const r={description:"Mario Wolter",title:"Research Data Management in Theoretical Chemistry"},s="Research Data Management in Theoretical Chemistry",o={id:"posters/Mario",title:"Research Data Management in Theoretical Chemistry",description:"Mario Wolter",source:"@site/docs/20_posters/20_Mario.md",sourceDirName:"20_posters",slug:"/posters/Mario",permalink:"/ConsortiumMeeting-5_0-abstracts/docs/posters/Mario",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{description:"Mario Wolter",title:"Research Data Management in Theoretical Chemistry"},sidebar:"tutorialSidebar",previous:{title:"Authentication and Authorization Infrastructure (AAI) in NFDI4Chem",permalink:"/ConsortiumMeeting-5_0-abstracts/docs/posters/Lincoln"},next:{title:"Insights from the euroSAMPL blind prediction challenge for the next NFDI4Chem phase",permalink:"/ConsortiumMeeting-5_0-abstracts/docs/posters/N_Tielker"}},l={},c=[{value:"Mario Wolter<sup>1</sup>, Christoph R. Jacob<sup>1</sup>",id:"mario-wolter1-christoph-r-jacob1",level:4},{value:"Vera Krewald<sup>2</sup>, Christian M\xfcck-Lichtenfeld<sup>3</sup>, Maren Podewitz<sup>4</sup>, Ralf Tonner-Zech<sup>5</sup>",id:"vera-krewald2-christian-m\xfcck-lichtenfeld3-maren-podewitz4-ralf-tonner-zech5",level:5},{value:"<sup>1</sup>Institute of Physical and Theoretical Chemistry, TU Braunschweig",id:"1institute-of-physical-and-theoretical-chemistry-tu-braunschweig",level:5},{value:"<sup>2</sup>TU Darmstadt",id:"2tu-darmstadt",level:5},{value:"<sup>3</sup>Uni- versit\xe4t M\xfcnster",id:"3uni--versit\xe4t-m\xfcnster",level:5},{value:"<sup>4</sup>TU Wien",id:"4tu-wien",level:5},{value:"<sup>5</sup>Universit\xe4t Leipzig",id:"5universit\xe4t-leipzig",level:5},{value:"E-mail: m.wolter@tu-braunschweig.de, c.jacob@tu-braunschweig.de",id:"e-mail-mwoltertu-braunschweigde-cjacobtu-braunschweigde",level:6},{value:"References",id:"references",level:4}];function h(e){const t={a:"a",h1:"h1",h4:"h4",h5:"h5",h6:"h6",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"research-data-management-in-theoretical-chemistry",children:"Research Data Management in Theoretical Chemistry"})}),"\n",(0,a.jsxs)(t.h4,{id:"mario-wolter1-christoph-r-jacob1",children:["Mario Wolter",(0,a.jsx)("sup",{children:"1"}),", Christoph R. Jacob",(0,a.jsx)("sup",{children:"1"})]}),"\n",(0,a.jsxs)(t.h5,{id:"vera-krewald2-christian-m\xfcck-lichtenfeld3-maren-podewitz4-ralf-tonner-zech5",children:["Vera Krewald",(0,a.jsx)("sup",{children:"2"}),", Christian M\xfcck-Lichtenfeld",(0,a.jsx)("sup",{children:"3"}),", Maren Podewitz",(0,a.jsx)("sup",{children:"4"}),", Ralf Tonner-Zech",(0,a.jsx)("sup",{children:"5"})]}),"\n",(0,a.jsxs)(t.h5,{id:"1institute-of-physical-and-theoretical-chemistry-tu-braunschweig",children:[(0,a.jsx)("sup",{children:"1"}),"Institute of Physical and Theoretical Chemistry, TU Braunschweig"]}),"\n",(0,a.jsxs)(t.h5,{id:"2tu-darmstadt",children:[(0,a.jsx)("sup",{children:"2"}),"TU Darmstadt"]}),"\n",(0,a.jsxs)(t.h5,{id:"3uni--versit\xe4t-m\xfcnster",children:[(0,a.jsx)("sup",{children:"3"}),"Uni- versit\xe4t M\xfcnster"]}),"\n",(0,a.jsxs)(t.h5,{id:"4tu-wien",children:[(0,a.jsx)("sup",{children:"4"}),"TU Wien"]}),"\n",(0,a.jsxs)(t.h5,{id:"5universit\xe4t-leipzig",children:[(0,a.jsx)("sup",{children:"5"}),"Universit\xe4t Leipzig"]}),"\n",(0,a.jsxs)(t.h6,{id:"e-mail-mwoltertu-braunschweigde-cjacobtu-braunschweigde",children:["E-mail: ",(0,a.jsx)(t.a,{href:"mailto:m.wolter@tu-braunschweig.de",children:"m.wolter@tu-braunschweig.de"}),", ",(0,a.jsx)(t.a,{href:"mailto:c.jacob@tu-braunschweig.de",children:"c.jacob@tu-braunschweig.de"})]}),"\n",(0,a.jsx)(t.p,{children:"Effective data management has emerged as a critical component for scientific advance- ment and collaboration. While a detailed manual record-keeping of all parameters seems to be the standard in experimental disciplines, researchers in theoretical chemistry often simply rely on their folder structures and the saved input and output files. Arguably, this can lead to massive problems in reproduction of simulation results when things out of the scope of these files change."}),"\n",(0,a.jsx)(t.p,{children:"In the first funding phase NFDI4Chem developed an Electronic Lab Notebook (ELN), ex- tended data and meta-data formats, and ontologies to digitalize experimental data. In our ongoing work, we took the fist steps of making the Chemotion ELN[1] fit for use in theoretical chemistry. In order to do this, new functions had to be implemented in the ELN (e.g. reading general data formats like json and an API to interact with the ELN)."}),"\n",(0,a.jsx)(t.p,{children:"To make this integration of quantum-chemical data even more seamless an ontology for theoretical chemistry is absolutely essential. From this, the universal data (and meta- data) format and even the structure of quantum-chemical code can be derived. The barriers of integration into already existing solutions (e.g. NOMAD[2]) and even on-site solutions are reduced to an absolute minimum. An adoption of these data-formats as standard output formats of quantum-chemical software will improve data handling not only in conjunction with ELNs. In the mean time, already established frameworks for quantum-chemical workflows (e.g. pyADF[3]) are able to fill this gap."}),"\n",(0,a.jsx)(t.p,{children:"Once established and sufficently automated, this framework will enable real-time data capture, organization, and annotation. Researchers can effortlessly navigate, interpret, and reproduce computational results within the context of their electronic lab journals. By enhancing Findability, Accessibility, Interoperability, and Reusability[4], it not only facili- tates effective collaboration but also strengthens the integrity and longevity of quantum- chemical research data."}),"\n",(0,a.jsx)(t.h4,{id:"references",children:"References"}),"\n",(0,a.jsxs)(t.p,{children:["[1] Tremouilhac P, Nguyen A, Huang YC, et al., J Cheminform., 9(1), 54 (2017) ",(0,a.jsx)(t.a,{href:"https://chemotion.net/",children:"https://chemotion.net/"}),"\n[2] Scheffler, M., Aeschlimann, M., Albrecht, M., et al., Nature 604, 635\u2013642 (2022) ",(0,a.jsx)(t.a,{href:"https://nomad-lab.eu",children:"https://nomad-lab.eu"}),", ",(0,a.jsx)(t.a,{href:"https://nomad-lab.eu/nomad-lab/nomad-oasis.html",children:"https://nomad-lab.eu/nomad-lab/nomad-oasis.html"}),"\n[3] Jacob, C.R., Beyhan, S.M., Bulo, R.E., Gomes, A.S.P., G\xf6tz, A.W., Kiewisch, K., Sikkema, J. and Visscher, L. , J. Comput. Chem., 32: 2328-2338 (2011)\n[4] Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J, et al., Scientific data, 3, 160018 (2016)"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>o});var a=i(6540);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);