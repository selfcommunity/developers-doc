"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[13085],{51761:(e,a,t)=>{t.r(a),t.d(a,{default:()=>o});var l=t(67294),n=t(86010),c=t(44286),s=t(26815),i=t(78473),m=t(87139);const r="mdxPageWrapper_zHyg";function o(e){const{content:a}=e,{metadata:{title:t,description:o,frontMatter:d}}=a,{wrapperClassName:v,hide_table_of_contents:N}=d;return l.createElement(m.FG,{className:(0,n.Z)(v??m.kM.wrapper.mdxPages,m.kM.page.mdxPage)},l.createElement(m.d,{title:t,description:o}),l.createElement(c.Z,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,n.Z)("row",r)},l.createElement("div",{className:(0,n.Z)("col",!N&&"col--8")},l.createElement(s.Z,null,l.createElement(a,null))),!N&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(i.Z,{toc:a.toc,minHeadingLevel:d.toc_min_heading_level,maxHeadingLevel:d.toc_max_heading_level}))))))}},78473:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(83117),n=t(67294),c=t(86010),s=t(14569);const i="tableOfContents_cNA8";function m(e){let{className:a,...t}=e;return n.createElement("div",{className:(0,c.Z)(i,"thin-scrollbar",a)},n.createElement(s.Z,(0,l.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},14569:(e,a,t)=>{t.d(a,{Z:()=>i});var l=t(83117),n=t(67294),c=t(87139);function s(e){let{toc:a,className:t,linkClassName:l,isChild:c}=e;return a.length?n.createElement("ul",{className:c?void 0:t},a.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children,className:t,linkClassName:l}))))):null}function i(e){let{toc:a,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:r,maxHeadingLevel:o,...d}=e;const v=(0,c.LU)(),N=r??v.tableOfContents.minHeadingLevel,g=o??v.tableOfContents.maxHeadingLevel,u=(0,c.b9)({toc:a,minHeadingLevel:N,maxHeadingLevel:g}),_=(0,n.useMemo)((()=>{if(i&&m)return{linkClassName:i,linkActiveClassName:m,minHeadingLevel:N,maxHeadingLevel:g}}),[i,m,N,g]);return(0,c.Si)(_),n.createElement(s,(0,l.Z)({toc:u,className:t,linkClassName:i},d))}}}]);