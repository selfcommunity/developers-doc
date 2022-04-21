"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[9572],{60256:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return m},assets:function(){return l},toc:function(){return u},default:function(){return p}});var i=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Mention",sidebar_position:1,title:"How it works"},c=void 0,m={unversionedId:"apireference/v2/mention/mention",id:"apireference/v2/mention/mention",title:"How it works",description:"The mentions mechanism is used to allow users to mention some other users within the content they write (posts, discussions, status, comments, etc.). The presence of a mention within a contribution causes a notification to be sent to the mentioned user.",source:"@site/docs/apireference/v2/mention/mention.md",sourceDirName:"apireference/v2/mention",slug:"/apireference/v2/mention/",permalink:"/docs/apireference/v2/mention/",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/mention/mention.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Mention",sidebar_position:1,title:"How it works"},sidebar:"apireferenceSidebar",previous:{title:"Errors",permalink:"/docs/apireference/v2/errors/"},next:{title:"User's custom fields (metadata)",permalink:"/docs/apireference/v2/usermetadata/"}},l={},u=[{value:"When creating or editing a contribution",id:"when-creating-or-editing-a-contribution",level:4},{value:"While reading a contribution",id:"while-reading-a-contribution",level:4}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The mentions mechanism is used to allow users to mention some other users within the content they write (posts, discussions, status, comments, etc.). The presence of a mention within a contribution causes a ",(0,r.kt)("inlineCode",{parentName:"p"},"notification")," to be sent to the mentioned user."),(0,r.kt)("h4",{id:"when-creating-or-editing-a-contribution"},"When creating or editing a contribution"),(0,r.kt)("p",null,"To mention another user, one or more usernames preceded by the special character @ must be present in the text field when creating or updating a contribution, for example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{\n  "post": 20, \n  "text": "This is a comment with some mentions to notify @username1 and @username2"\n}')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that usernames may need to be auto-completed searchable in the contribution creation or editing interface (starting typing after the @ special character)."))),(0,r.kt)("h4",{id:"while-reading-a-contribution"},"While reading a contribution"),(0,r.kt)("p",null,"Retrieving a contribution that contains a mention to one or more users you will find in the text field one or more html tags that indicate the position and details (user ids) of the mention and which must be made as links pointing to the user profiles mentioned, to example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'{\n    "html": "This is a comment with some mentions to notify <mention extid=\\"301\\" id=\\"15\\">@username1</mention> and <mention extid=\\"302\\" id=\\"16\\">@username2</mention>",\n    "summary": "This is a comment with some mentions to notify @username1 and @username2"\n}')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that the summary field also contains information about the mention."))))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),m=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=m(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?i.createElement(f,a(a({ref:t},l),{},{components:n})):i.createElement(f,a({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var m=2;m<r;m++)a[m]=n[m];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);