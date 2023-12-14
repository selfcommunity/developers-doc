/*! For license information please see bfa412e9.ad3ffb44.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[18054],{92991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(67294),r=n(27331),a=n(5730);function s(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function i(){if((0,a.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function d(){const e=(0,a.Z)(),[t,n]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?s(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):e&&n(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var c=n(53704),l=n(21367),u=n(19666),p=n(85893);function m(e){let{children:t}=e;const n=d(),o={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:i},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,p.jsx)(u.Z,{children:()=>(0,p.jsx)(c.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},93475:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(85893),r=n(11151),a=n(92991),s=n(70747);const i={sidebar_label:"Feed Updates",sidebar_position:1,title:"Feed Updates"},d=void 0,c={id:"sdk/community-js/react-ui/Components/FeedUpdates",title:"Feed Updates",description:"The Feed Updates component renders feed updates.",source:"@site/docs/sdk/community-js/react-ui/Components/FeedUpdates.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/FeedUpdates",permalink:"/docs/sdk/community-js/react-ui/Components/FeedUpdates",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/FeedUpdates.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Feed Updates",sidebar_position:1,title:"Feed Updates"},sidebar:"sdkSidebar",previous:{title:"Feed Object",permalink:"/docs/sdk/community-js/react-ui/Components/FeedObject"},next:{title:"Footer",permalink:"/docs/sdk/community-js/react-ui/Components/Footer"}},l={},u=[{value:"Usage",id:"usage",level:4}];function p(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The Feed Updates component renders feed updates."}),"\n"]}),"\n","\n","\n",(0,o.jsx)(a.Z,{children:(0,o.jsx)(s.Z,{})}),"\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {FeedUpdatesWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><FeedUpdatesWidget /></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},66242:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var o=n(83117),r=n(80102),a=n(67294),s=n(63961),i=n(94780),d=n(90948),c=n(71657),l=n(90629),u=n(1588),p=n(34867);function m(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var v=n(85893);const f=["className","raised"],h=(0,d.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),g=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCard"}),{className:a,raised:d=!1}=n,l=(0,r.Z)(n,f),u=(0,o.Z)({},n,{raised:d}),p=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},m,t)})(u);return(0,v.jsx)(h,(0,o.Z)({className:(0,s.Z)(p.root,a),elevation:d?8:void 0,ref:t,ownerState:u},l))}))},44267:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var o=n(83117),r=n(80102),a=n(67294),s=n(63961),i=n(94780),d=n(90948),c=n(71657),l=n(1588),u=n(34867);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,l.Z)("MuiCardContent",["root"]);var m=n(85893);const v=["className","component"],f=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),h=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:a,component:d="div"}=n,l=(0,r.Z)(n,v),u=(0,o.Z)({},n,{component:d}),h=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},p,t)})(u);return(0,m.jsx)(f,(0,o.Z)({as:d,className:(0,s.Z)(h.root,a),ownerState:u,ref:t},l))}))},90629:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var o=n(80102),r=n(83117),a=n(67294),s=n(63961),i=n(94780),d=n(41796),c=n(90948);const l=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)};var u=n(71657),p=n(1588),m=n(34867);function v(e){return(0,m.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=n(85893);const h=["className","component","elevation","square","variant"],g=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>{var n;return(0,r.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,r.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,d.Fq)("#fff",l(t.elevation))}, ${(0,d.Fq)("#fff",l(t.elevation))})`},e.vars&&{backgroundImage:null==(n=e.vars.overlays)?void 0:n[t.elevation]}))})),Z=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiPaper"}),{className:a,component:d="div",elevation:c=1,square:l=!1,variant:p="elevation"}=n,m=(0,o.Z)(n,h),Z=(0,r.Z)({},n,{component:d,elevation:c,square:l,variant:p}),k=(e=>{const{square:t,elevation:n,variant:o,classes:r}=e,a={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,i.Z)(a,v,r)})(Z);return(0,f.jsx)(g,(0,r.Z)({as:d,ownerState:Z,className:(0,s.Z)(k.root,a),ref:t},m))}))},70747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var o=n(97582),r=n(67294),a=n(90948),s=n(44267),i=n(69417),d=n(1798),c=n.n(d),l=n(44012),u=n(94184),p=n.n(u),m=n(63902),v=n(29628),f=n(54545);const h="SCFeedUpdatesWidget",g={root:`${h}-root`,buttonLoadMore:`${h}-button-load-more`},Z=(0,a.ZP)(m.Z,{name:h,slot:"Root"})((()=>({})));const k=function(e){const t=(0,v.Z)({props:e,name:h}),{id:n="feed_updates",className:a=null,message:d=r.createElement(l.Z,{id:"ui.feedUpdatesWidget.message",defaultMessage:"ui.feedUpdatesWidget.message"}),subscriptionChannel:u,subscriptionChannelUpdatesCallback:m=((e,t)=>!0),publicationChannel:k=null,onHeightChange:b}=t,C=(0,o._T)(t,["id","className","message","subscriptionChannel","subscriptionChannelUpdatesCallback","publicationChannel","onHeightChange"]),[y,j]=(0,r.useState)(!1),x=(0,r.useRef)(null),w=(e,t)=>{m(e,t)&&j(!0)};return(0,r.useEffect)((()=>(x.current=c().subscribe(u,w),()=>{c().unsubscribe(x.current)})),[]),(0,r.useEffect)((()=>{b&&b()}),[y]),y?r.createElement(Z,Object.assign({id:n,className:p()(g.root,a)},C),r.createElement(s.Z,null,d,k&&r.createElement(i.Z,{variant:"text",color:"inherit",onClick:()=>{c().publishSync(k,{refresh:!0}),j(!1)},classes:{root:g.buttonLoadMore}},r.createElement(l.Z,{id:"ui.feedUpdatesWidget.reload",defaultMessage:"ui.feedUpdatesWidget.reload"})))):r.createElement(f.Z,null)}},63902:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(97582),r=n(67294),a=n(90948),s=n(66242),i=n(94184),d=n.n(i);const c="SCWidget",l={root:`${c}-root`},u=(0,a.ZP)(s.Z,{name:c,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),p=(0,r.forwardRef)(((e,t)=>{const{className:n,onHeightChange:a,onStateChange:s}=e,i=(0,o._T)(e,["className","onHeightChange","onStateChange"]);return r.createElement(u,Object.assign({className:d()(l.root,n)},i,{ref:t}))}))},54545:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(67294);const r=(0,n(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function a(e){return o.createElement(r,Object.assign({},e))}},94184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},44012:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(25719),r=n(67294),a=n(86896),s=n(680);function i(e){var t=(0,a.Z)(),n=t.formatMessage,o=t.textComponent,s=void 0===o?r.Fragment:o,i=e.id,d=e.description,c=e.defaultMessage,l=e.values,u=e.children,p=e.tagName,m=void 0===p?s:p,v=n({id:i,description:d,defaultMessage:c},l,{ignoreTag:e.ignoreTag});return"function"==typeof u?u(Array.isArray(v)?v:[v]):m?r.createElement(m,null,r.Children.toArray(v)):r.createElement(r.Fragment,null,v)}i.displayName="FormattedMessage";var d=r.memo(i,(function(e,t){var n=e.values,r=(0,o._T)(e,["values"]),a=t.values,i=(0,o._T)(t,["values"]);return(0,s.wU)(a,n)&&(0,s.wU)(r,i)}));d.displayName="MemoizedFormattedMessage";const c=d}}]);