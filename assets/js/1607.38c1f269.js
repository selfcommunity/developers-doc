"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[1607],{39960:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(80102),a=n(67294),o=n(73727),i=n(52263),l=n(13919),c=n(10412),u=(0,a.createContext)({collectLink:function(){}}),s=n(44996),d=n(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,g=e.activeClassName,b=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,Z=(0,r.Z)(e,m),w=(0,i.Z)().siteConfig,_=w.trailingSlash,C=w.baseUrl,N=(0,s.C)().withBaseUrl,y=(0,a.useContext)(u),I=v||h,T=(0,l.Z)(I),L=null==I?void 0:I.replace("pathname://",""),S=void 0!==L?(n=L,k&&function(e){return e.startsWith("/")}(n)?N(n):n):void 0;S&&T&&(S=(0,d.applyTrailingSlash)(S,{trailingSlash:_,baseUrl:C}));var D=(0,a.useRef)(!1),B=f?o.OL:o.rU,A=c.Z.canUseIntersectionObserver,U=(0,a.useRef)();(0,a.useEffect)((function(){return!A&&T&&null!=S&&window.docusaurus.prefetch(S),function(){A&&U.current&&U.current.disconnect()}}),[U,S,A,T]);var x=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,M=!S||!T||x;return S&&T&&!x&&!p&&y.collectLink(S),M?a.createElement("a",Object.assign({href:S},I&&!T&&{target:"_blank",rel:"noopener noreferrer"},Z)):a.createElement(B,Object.assign({},Z,{onMouseEnter:function(){D.current||null==S||(window.docusaurus.preload(S),D.current=!0)},innerRef:function(e){var t,n;A&&e&&T&&(t=e,n=function(){null!=S&&window.docusaurus.prefetch(S)},U.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(U.current.unobserve(t),U.current.disconnect(),n())}))})),U.current.observe(t))},to:S||""},f&&{isActive:b,activeClassName:g}))}},11875:function(e,t){t.Z=function(){return null}},13919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},44996:function(e,t,n){n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(52263),a=n(13919);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,l=void 0!==i&&i,c=o.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},90541:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,i=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:i,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},41607:function(e,t,n){n.d(t,{Z:function(){return me}});var r=n(67294),a=n(86010),o=n(76775),i=n(95999),l=n(89521),c="skipToContent_1oUP";function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var s=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,l.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&u(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:c,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)}},r.createElement(i.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},d=n(83117),m=n(80102),f=["width","height","color","strokeWidth","className"];function v(e){var t=e.width,n=void 0===t?21:t,a=e.height,o=void 0===a?21:a,i=e.color,l=void 0===i?"currentColor":i,c=e.strokeWidth,u=void 0===c?1.2:c,s=(e.className,(0,m.Z)(e,f));return r.createElement("svg",(0,d.Z)({viewBox:"0 0 15 15",width:n,height:o},s),r.createElement("g",{stroke:l,strokeWidth:u},r.createElement("path",{d:"M.75.75l13.5 13.5M14.25.75L.75 14.25"})))}var h="announcementBar_3WsW",g="announcementBarPlaceholder_2m9F",b="announcementBarClose_38nx",p="announcementBarContent_3EUC";var E=function(){var e=(0,l.nT)(),t=e.isActive,n=e.close,o=(0,l.LU)().announcementBar;if(!t)return null;var c=o.content,u=o.backgroundColor,s=o.textColor,d=o.isCloseable;return r.createElement("div",{className:h,style:{backgroundColor:u,color:s},role:"banner"},d&&r.createElement("div",{className:g}),r.createElement("div",{className:p,dangerouslySetInnerHTML:{__html:c}}),d?r.createElement("button",{type:"button",className:(0,a.Z)("clean-btn close",b),onClick:n,"aria-label":(0,i.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement(v,{width:14,height:14,strokeWidth:3.1})):null)},k=n(11875),Z=n(72389),w={toggle:"toggle_71bT",toggleScreenReader:"toggleScreenReader_28Tw",toggleDisabled:"toggleDisabled_3cF-",toggleTrack:"toggleTrack_32Fl",toggleTrackCheck:"toggleTrackCheck_3lV7",toggleChecked:"toggleChecked_2FvV",toggleTrackX:"toggleTrackX_S2yS",toggleTrackThumb:"toggleTrackThumb_xI_Z",toggleFocused:"toggleFocused_my6j",toggleIcon:"toggleIcon_O4iE"},_=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggleIcon,w.dark),style:n},t)},C=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(w.toggleIcon,w.light),style:n},t)},N=(0,r.memo)((function(e){var t,n=e.className,o=e.icons,i=e.checked,l=e.disabled,c=e.onChange,u=(0,r.useState)(i),s=u[0],d=u[1],m=(0,r.useState)(!1),f=m[0],v=m[1],h=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)(w.toggle,n,(t={},t[w.toggleChecked]=s,t[w.toggleFocused]=f,t[w.toggleDisabled]=l,t))},r.createElement("div",{className:w.toggleTrack,role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=h.current)?void 0:e.click()}},r.createElement("div",{className:w.toggleTrackCheck},o.checked),r.createElement("div",{className:w.toggleTrackX},o.unchecked),r.createElement("div",{className:w.toggleTrackThumb})),r.createElement("input",{ref:h,checked:s,type:"checkbox",className:w.toggleScreenReader,"aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return d(!s)},onFocus:function(){return v(!0)},onBlur:function(){return v(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=h.current)||t.click())}}))}));function y(e){var t=(0,l.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,i=t.lightIconStyle,c=(0,Z.Z)();return r.createElement(N,(0,d.Z)({disabled:!c,icons:{checked:r.createElement(_,{icon:n,style:a}),unchecked:r.createElement(C,{icon:o,style:i})}},e))}var I=n(85350),T=function(e){var t=(0,r.useState)(e),n=t[0],a=t[1],o=(0,r.useRef)(!1),i=(0,r.useRef)(0),c=(0,r.useCallback)((function(e){null!==e&&(i.current=e.getBoundingClientRect().height)}),[]);return(0,l.RF)((function(t,n){if(e){var r=t.scrollY;if(r<i.current)a(!0);else if(o.current)o.current=!1;else{var l=null==n?void 0:n.scrollY,c=document.documentElement.scrollHeight-i.current,u=window.innerHeight;l&&r>=l?a(!1):r+u<c&&a(!0)}}})),(0,l.SL)((function(t){if(e)return t.location.hash?(o.current=!0,void a(!1)):void a(!0)})),{navbarRef:c,isNavbarVisible:n}};var L=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},S=n(93783),D=n(80907),B=n(42207),A=n(55537),U=["width","height","className"],x=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,i=e.className,l=(0,m.Z)(e,U);return r.createElement("svg",(0,d.Z)({className:i,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},l),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},M={toggle:"toggle_3Zt9",navbarHideable:"navbarHideable_2qcr",navbarHidden:"navbarHidden_3yey",navbarSidebarToggle:"navbarSidebarToggle_wkoY"},W="right";function P(){return(0,l.LU)().navbar.items}function R(){var e=(0,l.LU)().colorMode.disableSwitch,t=(0,I.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function O(e){var t=e.sidebarShown,n=e.toggleSidebar;L(t);var o=P(),c=R(),u=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,l.g8)())?void 0:t({toggleSidebar:a}),i=(0,l.D9)(o),c=(0,r.useState)((function(){return!1})),u=c[0],s=c[1];(0,r.useEffect)((function(){o&&!i&&s(!0)}),[o,i]);var d=!!o;return(0,r.useEffect)((function(){d?n||s(!0):s(!1)}),[n,d]),{shown:u,hide:(0,r.useCallback)((function(){s(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!c.disabled&&r.createElement(y,{className:M.navbarSidebarToggle,checked:c.isDarkTheme,onChange:c.toggle}),r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},r.createElement(v,{color:"var(--ifm-color-emphasis-600)",className:M.navbarSidebarCloseSvg}))),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(B.Z,(0,d.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item menu"},o.length>0&&r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),u.content)))}var V=function(){var e,t=(0,l.LU)().navbar,n=t.hideOnScroll,o=t.style,i=function(){var e=(0,S.Z)(),t="mobile"===e,n=(0,r.useState)(!1),a=n[0],o=n[1];(0,l.Rb)((function(){if(a)return o(!1),!1}));var i=(0,r.useCallback)((function(){o((function(e){return!e}))}),[]);return(0,r.useEffect)((function(){"desktop"===e&&o(!1)}),[e]),{shouldRender:t,toggle:i,shown:a}}(),c=R(),u=(0,D.gA)(),s=T(n),m=s.navbarRef,f=s.isNavbarVisible,v=P(),h=v.some((function(e){return"search"===e.type})),g=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:W)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:W)}))}}(v),b=g.leftItems,p=g.rightItems;return r.createElement("nav",{ref:m,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===o,"navbar--primary":"primary"===o,"navbar-sidebar--show":i.shown},e[M.navbarHideable]=n,e[M.navbarHidden]=n&&!f,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||u)&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:i.toggle,onKeyDown:i.toggle},r.createElement(x,null)),r.createElement(A.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),b.map((function(e,t){return r.createElement(B.Z,(0,d.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},p.map((function(e,t){return r.createElement(B.Z,(0,d.Z)({},e,{key:t}))})),!c.disabled&&r.createElement(y,{className:M.toggle,checked:c.isDarkTheme,onChange:c.toggle}),!h&&r.createElement(k.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:i.toggle}),i.shouldRender&&r.createElement(O,{sidebarShown:i.shown,toggleSidebar:i.toggle}))},F=n(82838),H=n(10412),z=(0,l.WA)("theme"),j="light",q="dark",G=function(e){return e===q?q:j},K=function(e){(0,l.WA)("theme").set(G(e))},J=function(){var e=(0,l.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return H.Z.canUseDOM?G(document.documentElement.getAttribute("data-theme")):G(e)}(t)),i=o[0],c=o[1],u=(0,r.useCallback)((function(){c(j),K(j)}),[]),s=(0,r.useCallback)((function(){c(q),K(q)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",G(i))}),[i]),(0,r.useEffect)((function(){if(!n)try{var e=z.get();null!==e&&c(G(e))}catch(t){console.error(t)}}),[n,c]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?q:j)}))}),[n,a]),{isDarkTheme:i===q,setLightTheme:u,setDarkTheme:s}},Q=n(82924);var X=function(e){var t=J(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(Q.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},Y="docusaurus.tab.",$=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,l.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,l._f)().forEach((function(t){if(t.startsWith(Y)){var n=t.substring(Y.length);e[n]=(0,l.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},ee=n(79443);var te=function(e){var t=$(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(ee.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function ne(e){var t=e.children;return r.createElement(X,null,r.createElement(l.pl,null,r.createElement(te,null,r.createElement(l.OC,null,r.createElement(l.L5,null,r.createElement(l.Cn,null,t))))))}var re=n(12859),ae=n(52263),oe=n(44996);function ie(e){var t=e.locale,n=e.version,a=e.tag;return r.createElement(re.Z,null,t&&r.createElement("meta",{name:"docusaurus_locale",content:t}),n&&r.createElement("meta",{name:"docusaurus_version",content:n}),a&&r.createElement("meta",{name:"docusaurus_tag",content:a}))}var le=n(41217);function ce(){var e=(0,ae.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,l.l5)();return r.createElement(re.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function ue(e){var t=e.permalink,n=(0,ae.Z)().siteConfig.url,a=function(){var e=(0,ae.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,oe.Z)(t)}(),i=t?""+n+t:a;return r.createElement(re.Z,null,r.createElement("meta",{property:"og:url",content:i}),r.createElement("link",{rel:"canonical",href:i}))}function se(e){var t=(0,ae.Z)(),n=t.siteConfig.favicon,a=t.i18n,o=a.currentLocale,i=a.localeConfigs,c=(0,l.LU)(),u=c.metadatas,s=c.image,m=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,b=(0,oe.Z)(n),p=(0,l.pe)(m),E=o,k=i[o].direction;return r.createElement(r.Fragment,null,r.createElement(re.Z,null,r.createElement("html",{lang:E,dir:k}),n&&r.createElement("link",{rel:"shortcut icon",href:b}),r.createElement("title",null,p),r.createElement("meta",{property:"og:title",content:p}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),s&&r.createElement(le.Z,{image:s}),v&&r.createElement(le.Z,{image:v}),r.createElement(le.Z,{description:f,keywords:h}),r.createElement(ue,null),r.createElement(ce,null),r.createElement(ie,(0,d.Z)({tag:l.HX,locale:o},g)),r.createElement(re.Z,null,u.map((function(e,t){return r.createElement("meta",(0,d.Z)({key:"metadata_"+t},e))}))))}var de=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var me=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,i=e.pageClassName;return de(),r.createElement(ne,null,r.createElement(se,e),r.createElement(s,null),r.createElement(E,null),r.createElement(V,null),r.createElement("div",{className:(0,a.Z)(l.kM.wrapper.main,o,i)},t),!n&&r.createElement(F.Z,null))}},55537:function(e,t,n){var r=n(83117),a=n(80102),o=n(67294),i=n(39960),l=n(89750),c=n(44996),u=n(52263),s=n(89521),d=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,u.Z)().siteConfig.title,n=(0,s.LU)().navbar,m=n.title,f=n.logo,v=void 0===f?{src:""}:f,h=e.imageClassName,g=e.titleClassName,b=(0,a.Z)(e,d),p=(0,c.Z)(v.href||"/"),E={light:(0,c.Z)(v.src),dark:(0,c.Z)(v.srcDark||v.src)},k=o.createElement(l.Z,{sources:E,height:v.height,width:v.width,alt:v.alt||m||t});return o.createElement(i.Z,(0,r.Z)({to:p},b,v.target&&{target:v.target}),v.src&&(h?o.createElement("div",{className:h},k):o.createElement(o.Fragment,null,k)),null!=m&&o.createElement("b",{className:g},m))}},5525:function(e,t,n){n.d(t,{O:function(){return b}});var r=n(83117),a=n(80102),o=n(67294),i=n(86010),l=n(39960),c=n(44996),u=n(90541),s=n(13919),d=n(89521),m=n(42207),f=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],v=["className","isDropdownItem"],h=["className","isDropdownItem"],g=["mobile","position"];function b(e){var t,n=e.activeBasePath,i=e.activeBaseRegex,m=e.to,v=e.href,h=e.label,g=e.activeClassName,b=void 0===g?"":g,p=e.prependBaseUrlToHref,E=(0,a.Z)(e,f),k=(0,c.Z)(m),Z=(0,c.Z)(n),w=(0,c.Z)(v,{forcePrependBaseUrl:!0}),_=h&&v&&!(0,s.Z)(v),C="dropdown__link--active"===b;return o.createElement(l.Z,(0,r.Z)({},v?{href:p?w:v}:Object.assign({isNavLink:!0,activeClassName:null!=(t=E.className)&&t.includes(b)?"":b,to:k},n||i?{isActive:function(e,t){return i?(0,d.Fx)(i,t.pathname):t.pathname.startsWith(Z)}}:null),E),_?o.createElement("span",null,h,o.createElement(u.Z,C&&{width:12,height:12})):h)}function p(e){var t=e.className,n=e.isDropdownItem,l=void 0!==n&&n,c=(0,a.Z)(e,v),u=o.createElement(b,(0,r.Z)({className:(0,i.Z)(l?"dropdown__link":"navbar__item navbar__link",t)},c));return l?o.createElement("li",null,u):u}function E(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,h));return o.createElement("li",{className:"menu__list-item"},o.createElement(b,(0,r.Z)({className:(0,i.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,i=void 0!==n&&n,l=(e.position,(0,a.Z)(e,g)),c=i?E:p;return o.createElement(c,(0,r.Z)({},l,{activeClassName:null!=(t=l.activeClassName)?t:(0,m.E)(i)}))}},76400:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(83117),a=n(80102),o=n(67294),i=n(5525),l=n(80907),c=n(86010),u=n(42207),s=n(89521),d=n(18780),m=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),g=(0,l.Iw)(v),b=g.activeVersion,p=g.activeDoc,E=(0,s.J)(v).preferredVersion,k=(0,l.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,d.uniq)([b,E,k].filter(Boolean)),n),w=(0,u.E)(h.mobile);return o.createElement(i.Z,(0,r.Z)({exact:!0},h,{className:(0,c.Z)(h.className,(t={},t[w]=(null==p?void 0:p.sidebar)&&p.sidebar===Z.sidebar,t)),activeClassName:w,label:null!=f?f:Z.id,to:Z.path}))}},59308:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(83117),a=n(80102),o=n(67294),i=n(5525),l=n(23154),c=n(80907),u=n(89521),s=n(95999),d=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,h=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,p=(0,a.Z)(e,d),E=(0,c.Iw)(v),k=(0,c.gB)(v),Z=(0,c.yW)(v),w=(0,u.J)(v),_=w.preferredVersion,C=w.savePreferredVersionName;var N,y=(N=k.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){C(e.name)}}})),[].concat(g,N,b)),I=null!=(t=null!=(n=E.activeVersion)?n:_)?t:Z,T=f&&y?(0,s.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):I.label,L=f&&y?void 0:m(I).path;return y.length<=1?o.createElement(i.Z,(0,r.Z)({},p,{mobile:f,label:T,to:L,isActive:h?function(){return!1}:void 0})):o.createElement(l.Z,(0,r.Z)({},p,{mobile:f,label:T,to:L,items:y,isActive:h?function(){return!1}:void 0}))}},47250:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(83117),a=n(80102),o=n(67294),i=n(5525),l=n(80907),c=n(89521),u=["label","to","docsPluginId"];function s(e){var t,n=e.label,s=e.to,d=e.docsPluginId,m=(0,a.Z)(e,u),f=(0,l.zu)(d),v=(0,c.J)(d).preferredVersion,h=(0,l.yW)(d),g=null!=(t=null!=f?f:v)?t:h,b=null!=n?n:g.label,p=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return o.createElement(i.Z,(0,r.Z)({},m,{label:b,to:p}))}},23154:function(e,t,n){var r=n(83117),a=n(80102),o=n(67294),i=n(86010),l=n(89521),c=n(5525),u=n(42207),s=["items","position","className"],d=["items","className","position"],m=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,l.Mg)(e.to,t)||!!(0,l.Fx)(e.activeBaseRegex,t)||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,l=e.position,d=e.className,m=(0,a.Z)(e,s),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),g=h[0],b=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===l,"dropdown--show":g})},o.createElement(c.O,(0,r.Z)({className:(0,i.Z)("navbar__link",d)},m,{onClick:m.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=m.children)?t:m.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(u.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,s=e.className,m=(e.position,(0,a.Z)(e,d)),v=(0,l.be)(),h=f(n,v),g=(0,l.uR)({initialState:function(){return!h}}),b=g.collapsed,p=g.toggleCollapsed,E=g.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h,E]),o.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":b})},o.createElement(c.O,(0,r.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",s)},m,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=m.children)?t:m.label),o.createElement(l.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return o.createElement(u.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:m.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,m),i=n?h:v;return o.createElement(i,r)}},42207:function(e,t,n){n.d(t,{Z:function(){return k},E:function(){return E}});var r=n(80102),a=n(67294),o=n(5525),i=n(23154),l=n(83117),c=["width","height"],u=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,i=void 0===o?20:o,u=(0,r.Z)(e,c);return a.createElement("svg",(0,l.Z)({viewBox:"0 0 20 20",width:n,height:i,"aria-hidden":"true"},u),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=n(52263),d=n(89521),m="iconLanguage_3vod",f=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function v(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,c=(0,r.Z)(e,f),v=(0,s.Z)().i18n,h=v.currentLocale,g=v.locales,b=v.localeConfigs,p=(0,d.l5)();function E(e){return b[e].label}var k=g.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===h?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,k,o),w=t?"Languages":E(h);return a.createElement(i.Z,(0,l.Z)({},c,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(u,{className:m}),a.createElement("span",null,w)),items:Z}))}var h=n(11875);function g(e){return e.mobile?null:a.createElement(h.Z,null)}var b=["type"],p={default:function(){return o.Z},localeDropdown:function(){return v},search:function(){return g},dropdown:function(){return i.Z},docsVersion:function(){return n(47250).Z},docsVersionDropdown:function(){return n(59308).Z},doc:function(){return n(76400).Z}};var E=function(e){return e?"menu__link--active":"navbar__link--active"};function k(e){var t=e.type,n=(0,r.Z)(e,b),o=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),i=function(e){var t=p[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(o);return a.createElement(i,n)}},41217:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(12859),o=n(89521),i=n(44996);function l(e){var t=e.title,n=e.description,l=e.keywords,c=e.image,u=e.children,s=(0,o.pe)(t),d=(0,i.C)().withBaseUrl,m=c?d(c,{absolute:!0}):void 0;return r.createElement(a.Z,null,t&&r.createElement("title",null,s),t&&r.createElement("meta",{property:"og:title",content:s}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),l&&r.createElement("meta",{name:"keywords",content:Array.isArray(l)?l.join(","):l}),m&&r.createElement("meta",{property:"og:image",content:m}),m&&r.createElement("meta",{name:"twitter:image",content:m}),u)}},82924:function(e,t,n){var r=n(67294).createContext(void 0);t.Z=r},89750:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(83117),a=n(80102),o=n(67294),i=n(86010),l=n(72389),c=n(85350),u={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},s=["sources","className","alt"],d=function(e){var t=(0,l.Z)(),n=(0,c.Z)().isDarkTheme,d=e.sources,m=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,s),g=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,g.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:d[e],alt:v,className:(0,i.Z)(u.themedImage,u["themedImage--"+e],m)},h))})))}},85350:function(e,t,n){var r=n(67294),a=n(82924);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},93783:function(e,t,n){var r=n(67294),a=n(10412),o="desktop",i="mobile",l="ssr";function c(){return a.Z.canUseDOM?window.innerWidth>996?o:i:l}t.Z=function(){var e=(0,r.useState)((function(){return c()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){function e(){n(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),t}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);