"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3845],{92991:(t,e,a)=>{a.d(e,{Z:()=>f});var o=a(67294),n=a(27331),r=a(5730);function i(t,e){void 0===t&&(t=""),void 0===e&&(e={});const a=Object.keys(e).map((t=>encodeURIComponent(t)+"="+encodeURIComponent(e[t]))).join("&");return fetch(t,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:a})}function s(){if((0,r.Z)()){const t={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:n.r.user.client_id,grant_type:"refresh_token"};return i(`${n.r.portal}/oauth/token/`,t).then((t=>t.json())).then((t=>({accessToken:t.access_token,refreshToken:t.refresh_token,tokenType:t.token_type,expiresIn:t.expires_in}))).catch((t=>Promise.reject(t)))}}function c(){const t=(0,r.Z)(),[e,a]=(0,o.useState)(t?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{t&&(!e||1e3*e.expiresIn<Date.now()?i(`${n.r.portal}/oauth/token/`,n.r.user).then((t=>t.json())).then((t=>({accessToken:t.access_token,refreshToken:t.refresh_token,tokenType:t.token_type,expiresIn:t.expires_in}))).catch((t=>t)).then((t=>{a(t)})):t&&a(JSON.parse(window.localStorage.getItem("token"))))}),[t]),(0,o.useEffect)((()=>{t&&window.localStorage.setItem("token",JSON.stringify(e))}),[t,e]),e}var l=a(53704),u=a(42464),d=a(19666),m=a(85893);function f(t){let{children:e}=t;const a=c(),o={portal:n.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:n.r.user.client_id,authToken:a,handleRefreshToken:s},theme:u.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(d.Z,{children:()=>(0,m.jsx)(l.ZP,{conf:o,children:e})})}},27331:(t,e,a)=>{a.d(e,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},14690:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=a(85893),n=a(11151),r=a(92991),i=a(59467);const s={sidebar_label:"Account Data Portability",sidebar_position:1,title:"Account Data Portability"},c=void 0,l={id:"sdk/community-js/react-ui/Components/AccountDataPortability",title:"Account Data Portability",description:"The Account Data Portability component allows users to display the logic behind data portability of user data",source:"@site/docs/sdk/community-js/react-ui/Components/AccountDataPortability.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/AccountDataPortability",permalink:"/docs/sdk/community-js/react-ui/Components/AccountDataPortability",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/AccountDataPortability.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Account Data Portability",sidebar_position:1,title:"Account Data Portability"},sidebar:"sdkSidebar",previous:{title:"types",permalink:"/docs/sdk/community-js/react-core/API_Reference/types"},next:{title:"Account Delete",permalink:"/docs/sdk/community-js/react-ui/Components/AccountDelete"}},u={},d=[{value:"Usage",id:"usage",level:4}];function m(t){const e={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.blockquote,{children:["\n",(0,o.jsxs)(e.p,{children:["The Account Data Portability component allows users to display the logic behind data portability of user data",(0,o.jsx)("br",{}),"\nThis component  consists of a list containing the instructions for forwarding the data generation request, which is sent when the button shown is clicked. Once the file has been created, a second button will appear(which allows the user to download his data)."]}),"\n"]}),"\n","\n","\n",(0,o.jsx)(r.Z,{children:(0,o.jsx)(i.Z,{})}),"\n",(0,o.jsx)(e.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {AccountDataPortability} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><AccountDataPortability /></SCContextProvider>\n   );\n }\n"})})]})}function f(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)}},5616:(t,e,a)=>{a.d(e,{Z:()=>g});var o=a(83117),n=a(80102),r=a(67294),i=a(70828),s=a(6352),c=a(86523),l=a(39707),u=a(96682),d=a(85893);const m=["className","component"];var f=a(31983),p=a(75389),h=a(10606);const y=(0,a(1977).Z)("MuiBox",["root"]),b=(0,p.Z)(),P=function(t={}){const{themeId:e,defaultTheme:a,defaultClassName:f="MuiBox-root",generateClassName:p}=t,h=(0,s.default)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(c.Z);return r.forwardRef((function(t,r){const s=(0,u.Z)(a),c=(0,l.Z)(t),{className:y,component:b="div"}=c,P=(0,n.Z)(c,m);return(0,d.jsx)(h,(0,o.Z)({as:b,ref:r,className:(0,i.Z)(y,p?p(f):f),theme:e&&s[e]||s},P))}))}({themeId:h.Z,defaultTheme:b,defaultClassName:y.root,generateClassName:f.Z.generate}),g=P},89326:(t,e,a)=>{var o;a.d(e,{Z:()=>s});var n=a(67294);let r=0;const i=(o||(o=a.t(n,2)))["useId".toString()];function s(t){if(void 0!==i){const e=i();return null!=t?t:e}return function(t){const[e,a]=n.useState(t),o=t||e;return n.useEffect((()=>{null==e&&(r+=1,a(`mui-${r}`))}),[e]),o}(t)}},59467:(t,e,a)=>{a.d(e,{Z:()=>C});var o=a(97582),n=a(67294),r=a(29628),i=a(90948),s=a(5616),c=a(15861),l=a(94184),u=a.n(l),d=a(67564),m=a(31812),f=a(91705),p=a(24085);class h{static generateDataPortability(t){return(0,f.N)(Object.assign({url:p.Z.GenerateDataPortability.url({}),method:p.Z.GenerateDataPortability.method},t))}static downloadDataPortability(t){return(0,f.N)(Object.assign({url:p.Z.DataPortabilityDownload.url({}),method:p.Z.DataPortabilityDownload.method,responseType:"blob"},t))}static dataPortabilityStatus(t){return(0,f.N)(Object.assign({url:p.Z.DataPortabilityStatus.url({}),method:p.Z.DataPortabilityStatus.method},t))}}class y{static generateDataPortability(t){return(0,o.mG)(this,void 0,void 0,(function*(){return h.generateDataPortability(t)}))}static downloadDataPortability(t){return(0,o.mG)(this,void 0,void 0,(function*(){return h.downloadDataPortability(t)}))}static dataPortabilityStatus(t){return(0,o.mG)(this,void 0,void 0,(function*(){return h.dataPortabilityStatus(t)}))}}var b=a(99960),P=a(77488),g=a(68787),v=a(75459),D=a(86896),k=a(44012),Z=a(54490),w=a(32912),N=a(76972),_=a(23855);const j="SCAccountDataPortability",x={root:`${j}-root`,createButton:`${j}-create-button`,downloadButton:`${j}-download-button`,generationInfo:`${j}-generation-info`},T=(0,i.ZP)(s.Z,{name:j,slot:"Root",overridesResolver:(t,e)=>e.root})((({theme:t})=>({})));const C=function(t){const e=(0,r.Z)({props:t,name:j}),{className:a}=e,i=(0,o._T)(e,["className"]),s=(0,n.useContext)(g.K8),[l,f]=(0,n.useState)(null),[p,h]=(0,n.useState)(!1),[C,E]=(0,n.useState)(!1),S=s.user?s.user.id:null,A=(0,D.Z)(),I=()=>{y.dataPortabilityStatus().then((t=>{t&&(!t.computing&&t.generated_at&&h(!1),f(t))})).catch((t=>{b.Y.error(v.J,t)})).then((()=>h(!1)))};return(0,n.useEffect)((()=>{let t;return null!==S&&(I(),t=setInterval((()=>{I()}),5e3)),()=>t&&clearInterval(t)}),[S]),S?n.createElement(T,Object.assign({className:u()(x.root,a)},i),n.createElement(c.Z,{variant:"h6"},n.createElement(k.Z,{id:"ui.accountDataPortability.title",defaultMessage:"ui.accountDataPortability.title",values:{username:(0,P.kC)(s.user.username)}})),n.createElement(c.Z,{variant:"body2",component:"div"},n.createElement(k.Z,{id:"ui.accountDataPortability.info",defaultMessage:"ui.accountDataPortability.info",values:{li:t=>n.createElement("li",null,t),ul:t=>n.createElement("ul",null,t)}})),n.createElement(m.Z,{size:"small",loading:l&&l.computing||p,disabled:!l||l&&(l.computing||l.requested_at&&(0,N.Z)(new Date,(0,_.Z)(l.requested_at.toString()))<24),loadingPosition:"start",startIcon:n.createElement(d.Z,null,"folder_open"),variant:"outlined",className:x.createButton,onClick:()=>{h(!0),y.generateDataPortability().then((t=>{t&&f(l)})).catch((t=>{b.Y.error(v.J,t)})).then((()=>h(!1)))}},l&&l.computing||p?n.createElement(k.Z,{id:"ui.accountDataPortability.createLoadingButton",defaultMessage:"ui.accountDataPortability.createLoadingButton"}):n.createElement(k.Z,{id:"ui.accountDataPortability.createButton",defaultMessage:"ui.accountDataPortability.createButton"})),l&&!l.computing&&l.generated_at&&n.createElement(m.Z,{size:"small",loading:C,loadingPosition:"start",startIcon:n.createElement(d.Z,null,"cloud_download_outlined"),variant:"outlined",className:x.downloadButton,onClick:()=>{E(!0),y.downloadDataPortability({timeout:18e5}).then((t=>{const e=window.URL.createObjectURL(new Blob([t],{type:"application/zip"})),a=document.createElement("a");a.href=e,a.setAttribute("download",`${s.user.username}_${A.formatDate((0,w.Z)(new Date,"yyyy-MM-dd'T'HH:mm:ssxxx"),{year:"numeric",month:"numeric",day:"numeric"})}.zip`),document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(e),E(!1)})).catch((t=>{E(!1),b.Y.error(v.J,t)}))}},n.createElement(k.Z,{id:"ui.accountDataPortability.downloadButton",defaultMessage:"ui.accountDataPortability.downloadButton"})),n.createElement("br",null),l&&!l.computing&&l.generated_at&&n.createElement(c.Z,{className:x.generationInfo,variant:"body2"},n.createElement(k.Z,{id:"ui.accountDataPortability.generatedInfo",defaultMessage:"ui.accountDataPortability.generatedInfo",values:{date:n.createElement(Z.Ji,{value:l.requested_at,day:"numeric",month:"long",year:"numeric"}),time:n.createElement(Z.qN,{value:l.requested_at})}}))):null}},75459:(t,e,a)=>{a.d(e,{J:()=>o});const o="@selfcommunity/react-ui"},54490:(t,e,a)=>{a.d(e,{Ji:()=>m,qN:()=>f,vU:()=>d});var o,n,r=a(25719),i=a(67294),s=a(86896);!function(t){t.formatDate="FormattedDate",t.formatTime="FormattedTime",t.formatNumber="FormattedNumber",t.formatList="FormattedList",t.formatDisplayName="FormattedDisplayName"}(o||(o={})),function(t){t.formatDate="FormattedDateParts",t.formatTime="FormattedTimeParts",t.formatNumber="FormattedNumberParts",t.formatList="FormattedListParts"}(n||(n={}));var c=function(t){var e=(0,s.Z)(),a=t.value,o=t.children,n=(0,r._T)(t,["value","children"]);return o(e.formatNumberToParts(a,n))};c.displayName="FormattedNumberParts";function l(t){var e=function(e){var a=(0,s.Z)(),o=e.value,n=e.children,i=(0,r._T)(e,["value","children"]),c="string"==typeof o?new Date(o||0):o;return n("formatDate"===t?a.formatDateToParts(c,i):a.formatTimeToParts(c,i))};return e.displayName=n[t],e}function u(t){var e=function(e){var a=(0,s.Z)(),o=e.value,n=e.children,c=(0,r._T)(e,["value","children"]),l=a[t](o,c);if("function"==typeof n)return n(l);var u=a.textComponent||i.Fragment;return i.createElement(u,null,l)};return e.displayName=o[t],e}function d(t){return t}c.displayName="FormattedNumberParts";var m=u("formatDate"),f=u("formatTime");u("formatNumber"),u("formatList"),u("formatDisplayName"),l("formatDate"),l("formatTime")}}]);