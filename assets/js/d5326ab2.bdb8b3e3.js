"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[95779],{50949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const l={sidebar_label:"Embed",sidebar_position:1,title:"Embed"},i=void 0,o={unversionedId:"apireference/v2/schemas/embed",id:"apireference/v2/schemas/embed",title:"Embed",description:"Properties",source:"@site/docs/apireference/v2/schemas/embed.md",sourceDirName:"apireference/v2/schemas",slug:"/apireference/v2/schemas/embed",permalink:"/docs/apireference/v2/schemas/embed",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/schemas/embed.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Embed",sidebar_position:1,title:"Embed"},sidebar:"apireferenceSidebar",previous:{title:"Dynamic Preference",permalink:"/docs/apireference/v2/schemas/dynamic_preference"},next:{title:"Endpoint",permalink:"/docs/apireference/v2/schemas/endpoint"}},d={},p=[{value:"Properties",id:"properties",level:4},{value:"Enumerated Values",id:"enumerated-values",level:4}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "integer",\n  "embed_type": "string",\n  "embed_id": "string",\n  "url": "string",\n  "metadata": {}\n}\n\n')),(0,r.kt)("h4",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"read-only"),(0,r.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this embed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/embed#enumerated-values"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the embed, can be any string except ",(0,r.kt)("inlineCode",{parentName:"td"},"sc_vimeo"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"sc_link")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"sc_shared_object")," that are used for embedded objects auomatically created by the community")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embed_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"External id for the embed object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Url for the resource, if any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata associated to this embed. It mus be a valid json object. For embed_type ",(0,r.kt)("inlineCode",{parentName:"td"},"sc_vimeo")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"sc_link")," it contains metadata associated with the external resource. For embed_type ",(0,r.kt)("inlineCode",{parentName:"td"},"sc_shared_object")," it contains a field ",(0,r.kt)("inlineCode",{parentName:"td"},"type")," that is the type of the object (",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion")," or ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post"),") and a field ",(0,r.kt)("inlineCode",{parentName:"td"},"id")," that contains the id of the object shared")))),(0,r.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,r.kt)("td",{parentName:"tr",align:null},"sc_vimeo"),(0,r.kt)("td",{parentName:"tr",align:null},"Embed of type video uploaded on vimeo platform (when enabled). This type is used internally by the community")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,r.kt)("td",{parentName:"tr",align:null},"sc_link"),(0,r.kt)("td",{parentName:"tr",align:null},"Embed of type link. This type is used internally by the community")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"embed_type"),(0,r.kt)("td",{parentName:"tr",align:null},"sc_shared_object"),(0,r.kt)("td",{parentName:"tr",align:null},"Embed of type shared object. This type is used internally by the community when the user share a ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion")," or ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post"))))))}s.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,b=c["".concat(d,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(b,i(i({ref:t},m),{},{components:n})):a.createElement(b,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);