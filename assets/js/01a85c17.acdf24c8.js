"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4013],{8665:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(102),l=a(7294),n=a(6010),s=a(1607),c=a(9960),o="sidebar_2ahu",m="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",u="sidebarItem_2UVv",f="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",v=a(5999);function g(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},t.title),l.createElement("ul",{className:i},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var p=function(e){var t=e.sidebar,a=e.toc,c=e.children,o=(0,r.Z)(e,E),m=t&&t.items.length>0;return l.createElement(s.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(g,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&l.createElement("div",{className:"col col--2"},a))))}},497:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var r=a(7294),l=a(8665),n=a(7774),s=a(9521),c="tag_21yA";function o(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,e))}))),r.createElement("hr",null))}var m=function(e){var t=e.tags,a=(0,s.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(o,{key:e.letter,letterEntry:e})})))};var i=function(e){var t=e.tags,a=e.sidebar,n=(0,s.MA)();return r.createElement(l.Z,{title:n,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,n),r.createElement(m,{tags:Object.values(t)}))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),l=a(6010),n=a(9960),s="tag_1Okp",c="tagRegular_3MiF",o="tagWithCount_1HU1";var m=function(e){var t,a=e.permalink,m=e.name,i=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(s,(t={},t[c]=!i,t[o]=i,t))},m,i&&r.createElement("span",null,i))}},2838:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(3117),l=a(102),n=a(7294),s=a(6010),c=a(9960),o=a(9521),m=a(4996),i=a(3919),u="footerLogoLink_qW4Z",f=a(9750),d=a(541),v=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,a=e.href,s=e.label,o=e.prependBaseUrlToHref,u=(0,l.Z)(e,v),f=(0,m.Z)(t),g=(0,m.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,r.Z)({className:"footer__link-item"},a?{href:o?g:a}:{to:f},u),a&&!(0,i.Z)(a)?n.createElement("span",null,s,n.createElement(d.Z,null)):s)}var E=function(e){var t=e.sources,a=e.alt;return n.createElement(f.Z,{className:"footer__logo",alt:a,sources:t})};var p=function(){var e=(0,o.LU)().footer,t=e||{},a=t.copyright,r=t.links,l=void 0===r?[]:r,i=t.logo,f=void 0===i?{}:i,d={light:(0,m.Z)(f.src),dark:(0,m.Z)(f.srcDark||f.src)};return e?n.createElement("footer",{className:(0,s.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none"},n.createElement("path",{d:"M1200 120L0 16.48 0 0 1200 0 1200 120z",className:"shape-fill"})),n.createElement("div",{className:"container"},l&&l.length>0&&n.createElement("div",{className:"row footer__links"},l.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(g,e))}))):null)}))),(f||a)&&n.createElement("div",{className:"footer__bottom text--center"},f&&(f.src||f.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},f.href?n.createElement(c.Z,{href:f.href,className:u},n.createElement(E,{alt:f.alt,sources:d})):n.createElement(E,{alt:f.alt,sources:d})),a?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);