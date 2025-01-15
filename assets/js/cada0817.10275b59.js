/*! For license information please see cada0817.10275b59.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[53471],{92991:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(67294),r=n(27331),a=n(5730);function i(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function s(){if((0,a.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return i(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,a.Z)(),[t,n]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?i(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):e&&n(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=n(62254),d=n(14744),u=n(19666),m=n(85893);function p(e){let{children:t}=e;const n=c(),o={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:n,handleRefreshToken:s},theme:d.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(u.Z,{children:()=>(0,m.jsx)(l.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{"use strict";n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},78153:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var o=n(85893),r=n(11151),a=n(92991),i=n(95069);const s={sidebar_label:"Account Delete",sidebar_position:1,title:"Account Delete"},c=void 0,l={id:"sdk/community-js/react-ui/Components/AccountDelete",title:"Account Delete",description:"The Account Delete component allows users to display the logic behind user deletion.",source:"@site/docs/sdk/community-js/react-ui/Components/AccountDelete.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/AccountDelete",permalink:"/docs/sdk/community-js/react-ui/Components/AccountDelete",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/AccountDelete.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Account Delete",sidebar_position:1,title:"Account Delete"},sidebar:"sdkSidebar",previous:{title:"Account Data Portability",permalink:"/docs/sdk/community-js/react-ui/Components/AccountDataPortability"},next:{title:"Account Recover",permalink:"/docs/sdk/community-js/react-ui/Components/AccountRecover"}},d={},u=[{value:"Usage",id:"usage",level:4}];function m(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The Account Delete component allows users to display the logic behind user deletion.",(0,o.jsx)("br",{}),"\nThis component is composed of a list containing the instructions for deleting the account, a form in which to enter the email and a button for sending the request."]}),"\n"]}),"\n","\n","\n",(0,o.jsx)(a.Z,{children:(0,o.jsx)(i.Z,{sx:{pointerEvents:"none"}})}),"\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {AccountDelete} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><AccountDelete /></SCContextProvider>\n   );\n }\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},96828:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var o=n(80102),r=n(83117),a=n(67294),i=n(98216),s=n(27909);var c=n(90948),l=n(28628),d=n(25662),u=n(98363),m=n(98456),p=n(35971),h=n(34867);function g(e){return(0,h.ZP)("MuiLoadingButton",e)}const f=(0,n(1588).Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);var v=n(85893);const y=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Z=e=>{const{loading:t,loadingPosition:n,classes:o}=e,a=function(e,t,n){const o={};return Object.keys(e).forEach((r=>{o[r]=e[r].reduce(((e,o)=>{if(o){const r=t(o);""!==r&&e.push(r),n&&n[o]&&e.push(n[o])}return e}),[]).join(" ")})),o}({root:["root",t&&"loading"],startIcon:[t&&`startIconLoading${(0,i.Z)(n)}`],endIcon:[t&&`endIconLoading${(0,i.Z)(n)}`],loadingIndicator:["loadingIndicator",t&&`loadingIndicator${(0,i.Z)(n)}`]},g,o);return(0,r.Z)({},o,a)},k=(0,c.ZP)(d.Z,{shouldForwardProp:e=>(e=>"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e&&"classes"!==e)(e)||"classes"===e,name:"MuiLoadingButton",slot:"Root",overridesResolver:(e,t)=>[t.root,t.startIconLoadingStart&&{[`& .${f.startIconLoadingStart}`]:t.startIconLoadingStart},t.endIconLoadingEnd&&{[`& .${f.endIconLoadingEnd}`]:t.endIconLoadingEnd}]})((({ownerState:e,theme:t})=>(0,r.Z)({[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0}},"center"===e.loadingPosition&&{transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),[`&.${f.loading}`]:{color:"transparent"}},"start"===e.loadingPosition&&e.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===e.loadingPosition&&e.fullWidth&&{[`& .${f.startIconLoadingStart}, & .${f.endIconLoadingEnd}`]:{transition:t.transitions.create(["opacity"],{duration:t.transitions.duration.short}),opacity:0,marginLeft:-8}}))),b=(0,c.ZP)("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.loadingIndicator,t[`loadingIndicator${(0,i.Z)(n.loadingPosition)}`]]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{left:"small"===t.size?10:14},"start"===t.loadingPosition&&"text"===t.variant&&{left:6},"center"===t.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(e.vars||e).palette.action.disabled},"end"===t.loadingPosition&&("outlined"===t.variant||"contained"===t.variant)&&{right:"small"===t.size?10:14},"end"===t.loadingPosition&&"text"===t.variant&&{right:6},"start"===t.loadingPosition&&t.fullWidth&&{position:"relative",left:-10},"end"===t.loadingPosition&&t.fullWidth&&{position:"relative",right:-10}))),x=a.forwardRef((function(e,t){const n=a.useContext(u.Z),i=(0,p.Z)(n,e),c=(0,l.i)({props:i,name:"MuiLoadingButton"}),{children:d,disabled:h=!1,id:g,loading:f=!1,loadingIndicator:x,loadingPosition:S="center",variant:j="text"}=c,w=(0,o.Z)(c,y),P=(0,s.Z)(g),I=null!=x?x:(0,v.jsx)(m.Z,{"aria-labelledby":P,color:"inherit",size:16}),C=(0,r.Z)({},c,{disabled:h,loading:f,loadingIndicator:I,loadingPosition:S,variant:j}),D=Z(C),M=f?(0,v.jsx)(b,{className:D.loadingIndicator,ownerState:C,children:I}):null;return(0,v.jsxs)(k,(0,r.Z)({disabled:h||f,id:P,ref:t},w,{variant:j,classes:D,ownerState:C,children:["end"===C.loadingPosition?d:M,"end"===C.loadingPosition?M:d]}))}))},94253:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var o=n(83117),r=n(80102),a=n(67294),i=n(63961),s=n(74854),c=n(18784),l=n(87893),d=n(71713),u=n(85893);const m=["className","component"];var p=n(37078),h=n(75389),g=n(10606);const f=(0,n(1588).Z)("MuiBox",["root"]),v=(0,h.Z)(),y=function(e={}){const{themeId:t,defaultTheme:n,defaultClassName:p="MuiBox-root",generateClassName:h}=e,g=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(c.Z);return a.forwardRef((function(e,a){const s=(0,d.Z)(n),c=(0,l.Z)(e),{className:f,component:v="div"}=c,y=(0,r.Z)(c,m);return(0,u.jsx)(g,(0,o.Z)({as:v,ref:a,className:(0,i.Z)(f,h?h(p):p),theme:t&&s[t]||s},y))}))}({themeId:g.Z,defaultTheme:v,defaultClassName:f.root,generateClassName:p.Z.generate}),Z=y},98456:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var o=n(80102),r=n(83117),a=n(67294),i=n(63961),s=n(94780),c=n(70917),l=n(98216),d=n(28628),u=n(90948),m=n(1588),p=n(34867);function h(e){return(0,p.ZP)("MuiCircularProgress",e)}(0,m.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var g=n(85893);const f=["className","color","disableShrink","size","style","thickness","value","variant"];let v,y,Z,k,b=e=>e;const x=44,S=(0,c.F4)(v||(v=b`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),j=(0,c.F4)(y||(y=b`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,u.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`color${(0,l.Z)(n.color)}`]]}})((({ownerState:e,theme:t})=>(0,r.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:t.transitions.create("transform")},"inherit"!==e.color&&{color:(t.vars||t).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(Z||(Z=b`
      animation: ${0} 1.4s linear infinite;
    `),S))),P=(0,u.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),I=(0,u.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.circle,t[`circle${(0,l.Z)(n.variant)}`],n.disableShrink&&t.circleDisableShrink]}})((({ownerState:e,theme:t})=>(0,r.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(k||(k=b`
      animation: ${0} 1.4s ease-in-out infinite;
    `),j))),C=a.forwardRef((function(e,t){const n=(0,d.i)({props:e,name:"MuiCircularProgress"}),{className:a,color:c="primary",disableShrink:u=!1,size:m=40,style:p,thickness:v=3.6,value:y=0,variant:Z="indeterminate"}=n,k=(0,o.Z)(n,f),b=(0,r.Z)({},n,{color:c,disableShrink:u,size:m,thickness:v,value:y,variant:Z}),S=(e=>{const{classes:t,variant:n,color:o,disableShrink:r}=e,a={root:["root",n,`color${(0,l.Z)(o)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(n)}`,r&&"circleDisableShrink"]};return(0,s.Z)(a,h,t)})(b),j={},C={},D={};if("determinate"===Z){const e=2*Math.PI*((x-v)/2);j.strokeDasharray=e.toFixed(3),D["aria-valuenow"]=Math.round(y),j.strokeDashoffset=`${((100-y)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,g.jsx)(w,(0,r.Z)({className:(0,i.Z)(S.root,a),style:(0,r.Z)({width:m,height:m},C,p),ownerState:b,ref:t,role:"progressbar"},D,k,{children:(0,g.jsx)(P,{className:S.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,g.jsx)(I,{className:S.circle,style:j,ownerState:b,cx:x,cy:x,r:(x-v)/2,fill:"none",strokeWidth:v})})}))}))},15861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var o=n(80102),r=n(83117),a=n(67294),i=n(63961),s=n(87893),c=n(94780),l=n(90948),d=n(28628),u=n(98216),m=n(1588),p=n(34867);function h(e){return(0,p.ZP)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(85893);const f=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],v=(0,l.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t[`align${(0,u.Z)(n.align)}`],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,r.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},k=a.forwardRef((function(e,t){const n=(0,d.i)({props:e,name:"MuiTypography"}),a=(e=>Z[e]||e)(n.color),l=(0,s.Z)((0,r.Z)({},n,{color:a})),{align:m="inherit",className:p,component:k,gutterBottom:b=!1,noWrap:x=!1,paragraph:S=!1,variant:j="body1",variantMapping:w=y}=l,P=(0,o.Z)(l,f),I=(0,r.Z)({},l,{align:m,color:a,className:p,component:k,gutterBottom:b,noWrap:x,paragraph:S,variant:j,variantMapping:w}),C=k||(S?"p":w[j]||y[j])||"span",D=(e=>{const{align:t,gutterBottom:n,noWrap:o,paragraph:r,variant:a,classes:i}=e,s={root:["root",a,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,n&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,c.Z)(s,h,i)})(I);return(0,g.jsx)(v,(0,r.Z)({as:C,ref:t,ownerState:I,className:(0,i.Z)(D.root,p)},P))}))},50700:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(67294);const r=function(e,t){var n,r;return o.isValidElement(e)&&-1!==t.indexOf(null!=(n=e.type.muiName)?n:null==(r=e.type)||null==(r=r._payload)||null==(r=r.value)?void 0:r.muiName)}},49299:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n(19032).Z},27909:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});const o=n(92996).Z},19032:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(67294);function r({controlled:e,default:t,name:n,state:r="value"}){const{current:a}=o.useRef(void 0!==e),[i,s]=o.useState(t);return[a?e:i,o.useCallback((e=>{a||s(e)}),[])]}},95069:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var o=n(97582),r=n(85893),a=n(67294),i=n(29360),s=n(90948),c=n(94253),l=n(15861),d=n(77931),u=n(94184),m=n.n(u),p=n(49877),h=n(99960),g=n(51206),f=n(8860),v=n(85472),y=n(75459),Z=n(86896),k=n(44012),b=n(96828);const x="SCAccountDelete",S={root:`${x}-root`,message:`${x}-message`,confirm:`${x}-confirm`,button:`${x}-button`},j=(0,s.ZP)(c.Z,{name:x,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const w=function(e){const t=(0,i.Z)({props:e,name:x}),{className:n="",onLogout:s,onDeleteAccount:u}=t,w=(0,o._T)(t,["className","onLogout","onDeleteAccount"]),P=(0,g.LD)(),I=(0,f.ko)(),C=(0,a.useMemo)((()=>I.preferences&&v.QX in I.preferences?I.preferences[v.QX].value:null),[I.preferences]),[D,M]=(0,a.useState)(!1),[N,A]=(0,a.useState)(null),[L,$]=(0,a.useState)(""),R=P.user?P.user.id:null,_=(0,Z.Z)(),B=(0,a.useCallback)((()=>{M(!0),A(null),p.Z.userDelete(P.user.id,0).then((()=>{M(!1),u&&u(P.user),T()})).catch((e=>{A(_.formatMessage({id:"ui.common.error.action",defaultMessage:"ui.common.error.action"})),h.Y.error(y.J,e)})).then((()=>M(!1)))}),[M,A,u]),T=(0,a.useCallback)((()=>{P.logout(),s&&s()}),[P.logout,s]),O=(0,a.useCallback)((e=>$(e.target.value)),[$]);return R?(0,r.jsxs)(j,Object.assign({className:m()(S.root,n)},w,{children:[(0,r.jsx)(l.Z,Object.assign({className:S.message,component:c.Z},{children:(0,r.jsx)(k.Z,{id:"ui.accountDelete.message",defaultMessage:"ui.accountDelete.message",values:{communityName:C,li:e=>(0,r.jsx)("li",{children:e}),ul:e=>(0,r.jsx)("ul",{children:e})}})})),(0,r.jsxs)(l.Z,Object.assign({className:S.confirm,component:c.Z},{children:[(0,r.jsx)(k.Z,{id:"ui.accountDelete.confirmMessage",defaultMessage:"ui.accountDelete.confirmMessage",values:{username:P.user.username,b:e=>(0,r.jsx)("b",{children:e})}}),(0,r.jsx)(d.Z,{name:"confirm",value:L,onChange:O,autoComplete:"off",size:"small"})]})),N&&(0,r.jsx)(l.Z,Object.assign({color:"error"},{children:N})),(0,r.jsx)(b.Z,Object.assign({className:S.button,size:"small",disabled:D||L!==P.user.username,variant:"outlined",onClick:B},{children:(0,r.jsx)(k.Z,{id:"ui.accountDelete.buttonLabel",defaultMessage:"ui.accountDelete.buttonLabel"})}))]})):null}},75459:(e,t,n)=>{"use strict";n.d(t,{J:()=>o});const o="@selfcommunity/react-ui"},94184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=r.apply(null,n);i&&e.push(i)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)o.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);