"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[56043],{92991:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(67294),s=n(27331),a=n(5730);function r(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function i(){if((0,a.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return r(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,a.Z)(),[t,n]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?r(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):e&&n(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var u=n(53704),l=n(21367),d=n(19666),m=n(85893);function b(e){let{children:t}=e;const n=c(),o={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:n,handleRefreshToken:i},theme:l.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,m.jsx)(d.Z,{children:()=>(0,m.jsx)(u.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},10067:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>de,contentTitle:()=>ue,default:()=>ge,frontMatter:()=>ce,metadata:()=>le,toc:()=>me});var o=n(85893),s=n(11151),a=n(92991),r=n(97582),i=n(67294),c=n(90948),u=n(2734),l=n(98396),d=n(5616),m=n(15861),b=n(93946),g=n(78462),p=n(97212),h=n(69417),f=n(44267),I=n(91705),Z=n(24085),E=n(66821);class S{static getAllIncubators(e,t){const n=(0,E.B)(e);return(0,I.N)(Object.assign(Object.assign({},t),{url:`${Z.Z.GetAllIncubators.url({})}?${n.toString()}`,method:Z.Z.GetAllIncubators.method}))}static searchIncubators(e,t){const n=(0,E.B)(e);return(0,I.N)(Object.assign(Object.assign({},t),{url:`${Z.Z.SearchIncubators.url({})}?${n.toString()}`,method:Z.Z.SearchIncubators.method}))}static getSpecificIncubator(e,t){return(0,I.N)(Object.assign(Object.assign({},t),{url:Z.Z.GetASpecificIncubator.url({id:e}),method:Z.Z.GetASpecificIncubator.method}))}static createIncubator(e,t){return(0,I.N)(Object.assign(Object.assign({},t),{url:Z.Z.CreateAnIncubator.url({}),method:Z.Z.CreateAnIncubator.method,data:e}))}static getIncubatorSubscribers(e,t){return(0,I.N)(Object.assign(Object.assign({},t),{url:Z.Z.GetIncubatorSubscribers.url({id:e}),method:Z.Z.GetIncubatorSubscribers.method}))}static subscribeToIncubator(e,t){return(0,I.N)(Object.assign(Object.assign({},t),{url:Z.Z.SubscribeToIncubator.url({id:e}),method:Z.Z.SubscribeToIncubator.method}))}static checkIncubatorSubscription(e,t){return(0,I.N)(Object.assign(Object.assign({},t),{url:Z.Z.CheckIncubatorSubscription.url({id:e}),method:Z.Z.CheckIncubatorSubscription.method}))}}class k{static getAllIncubators(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return S.getAllIncubators(e,t)}))}static searchIncubators(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return S.searchIncubators(e,t)}))}static getSpecificIncubator(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return S.getSpecificIncubator(e,t)}))}static createIncubator(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return S.createIncubator(e,t)}))}static getIncubatorSubscribers(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return S.getIncubatorSubscribers(e,t)}))}static subscribeToIncubator(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return S.subscribeToIncubator(e,t)}))}static checkIncubatorSubscription(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return S.checkIncubatorSubscription(e,t)}))}}var v=n(65001),L=n(59219),y=n(99960),C=n(61137),N=n(63902);const j="SCIncubatorListWidget",x={root:`${j}-skeleton-root`,list:`${j}-list`},_=(0,c.ZP)(N.Z,{name:j,slot:"SkeletonRoot"})((()=>({})));function O(e){return i.createElement(_,Object.assign({className:x.root},e),i.createElement(f.Z,null,i.createElement(g.Z,{className:x.list},[...Array(4)].map(((e,t)=>i.createElement(C.Z,{key:t,elevation:0}))))))}var T=n(75459),w=n(44012),A=n(94184),M=n.n(A),D=n(39154),P=n(79558),W=n(94586),$=n(14564),R=n(67564),G=n(29628),B=n(54490),U=n(86896),K=n(53457),z=n(77931),X=n(68689),F=n(31812);const J=(0,B.vU)({name:{id:"ui.incubatorListWidget.createIncubatorDialog.formPlaceholder.name",defaultMessage:"ui.incubatorListWidget.createIncubatorDialog.formPlaceholder.name"},slogan:{id:"ui.incubatorListWidget.createIncubatorDialog.formPlaceholder.slogan",defaultMessage:"ui.incubatorListWidget.createIncubatorDialog.formPlaceholder.slogan"}}),q={root:`${j}-create-dialog-root`,form:`${j}-form`,name:`${j}-name`,slogan:`${j}-slogan`,intro:`${j}-intro`,submittedMessage:`${j}-submitted-message`},H=(0,c.ZP)(D.Z,{name:j,slot:"CreateDialogRoot"})((()=>({})));const Y=function(e){const{className:t,open:n,onClose:o}=e,s=(0,r._T)(e,["className","open","onClose"]),a=(0,X.LD)(),c=(0,U.Z)(),[u,l]=(0,i.useState)(""),[d,b]=(0,i.useState)(""),[g,p]=(0,i.useState)(!1),[h,f]=(0,i.useState)(!1),[I,E]=(0,i.useState)(""),S=e=>{e.preventDefault(),p(!0),v.Z.request({url:Z.Z.CreateAnIncubator.url(),method:Z.Z.CreateAnIncubator.method,data:{name:u,slogan:d}}).then((e=>{p(!1),f(!0)})).catch((e=>{E(e),p(!1),y.Y.error(T.J,e)}))};if(!a.user)return null;let k;return k=h?i.createElement(m.Z,{variant:"subtitle2",className:q.submittedMessage},i.createElement(w.Z,{id:"ui.incubatorListWidget.createIncubatorDialog.propose.success",defaultMessage:"ui.incubatorListWidget.createIncubatorDialog.propose.success"})):i.createElement(i.Fragment,null,i.createElement(m.Z,{component:"span",className:q.intro},i.createElement(w.Z,{id:"ui.incubatorsListDialog.createIncubatorDialog.intro",defaultMessage:"ui.incubatorsListDialog.createIncubatorDialog.intro"})),i.createElement(K.Z,{className:q.form},i.createElement(z.Z,{required:!0,error:Boolean(I),className:q.name,placeholder:`${c.formatMessage(J.name)}`,margin:"normal",value:u,onChange:e=>l(e.target.value)}),i.createElement(z.Z,{multiline:!0,error:Boolean(I),className:q.slogan,placeholder:`${c.formatMessage(J.slogan)}`,margin:"normal",value:d,onChange:e=>b(e.target.value)})),i.createElement(F.Z,{loading:g,disabled:!u||Boolean(I),variant:"contained",onClick:S},i.createElement(w.Z,{id:"ui.incubatorListWidget.createIncubatorDialog.button",defaultMessage:"ui.incubatorListWidget.createIncubatorDialog.button"}))),i.createElement(H,Object.assign({title:i.createElement(w.Z,{id:"ui.incubatorListWidget.createIncubatorDialog.title",defaultMessage:"ui.incubatorListWidget.createIncubatorDialog.title"}),open:n,onClose:o,className:M()(q.root,t)},s),k)};var Q=n(82213),V=n(15927),ee=n(66380),te=n(85472),ne=n(69721),oe=n(54545);const se={root:`${j}-root`,header:`${j}-header`,title:`${j}-title`,noResults:`${j}-no-results`,showMore:`${j}-show-more`,actions:`${j}-actions`,helpPopover:`${j}-help-popover`,dialogRoot:`${j}-dialog-root`,endMessage:`${j}-end-message`,createDialog:`${j}-create-dialog`},ae=(0,c.ZP)(N.Z,{name:j,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),re=(0,c.ZP)(D.Z,{name:j,slot:"DialogRoot"})((({theme:e})=>({})));const ie=function(e){const t=(0,G.Z)({props:e,name:j}),{autoHide:n=!0,limit:o=3,className:s,IncubatorProps:a={},cacheStrategy:c=L.n2.CACHE_FIRST,onHeightChange:I,onStateChange:E,DialogProps:S={}}=t,N=(0,r._T)(t,["autoHide","limit","className","IncubatorProps","cacheStrategy","onHeightChange","onStateChange","DialogProps"]),x=(0,i.useContext)(X.K8),_=(0,i.useContext)(ee.Tt),A=te.Ao in _.preferences&&_.preferences[te.Ao].value,[D,B]=(0,i.useReducer)(V.Xi,{isLoadingNext:!1,next:null,cacheKey:ne.hu(ne.wp),cacheStrategy:c,visibleItems:o},V.Mv),[U,K]=(0,i.useState)(!1),[z,F]=(0,i.useState)(!1),[J,q]=(0,i.useState)(!1),[H,ie]=i.useState(null),ce=Boolean(H),[ue,le]=(0,i.useState)(null),de=(0,u.Z)(),me=(0,l.Z)(de.breakpoints.down("md")),be=(0,i.useMemo)((()=>()=>{D.initialized||D.isLoadingNext||(B({type:V.dK.LOADING_NEXT}),k.getAllIncubators({limit:o}).then((e=>{B({type:V.dK.LOAD_NEXT_SUCCESS,payload:Object.assign(Object.assign({},e),{initialized:!0})})})).catch((e=>{B({type:V.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),y.Y.error(T.J,e)})))}),[D.isLoadingNext,D.initialized,o,B]);(0,i.useEffect)((()=>{let e;if(void 0!==x.user)return e=setTimeout(be),()=>{e&&clearTimeout(e)}}),[x.user]),(0,i.useEffect)((()=>{U&&D.next&&D.initialized&&D.results.length===o&&(B({type:V.dK.LOADING_NEXT}),k.getAllIncubators({offset:o,limit:10}).then((e=>{B({type:V.dK.LOAD_NEXT_SUCCESS,payload:e})})).catch((e=>{B({type:V.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),y.Y.error(T.J,e)})))}),[U,D.next,D.initialized,D.results.length,o]),(0,i.useEffect)((()=>{I&&I()}),[D.results]),(0,i.useEffect)((()=>{(A||x.user)&&c===L.n2.NETWORK_ONLY&&E&&E({cacheStrategy:L.n2.CACHE_FIRST})}),[A,x.user]);const ge=(0,i.useMemo)((()=>()=>{ie(null)}),[ie]),pe=(0,i.useMemo)((()=>()=>{F(!1)}),[F]),he=(0,i.useMemo)((()=>e=>{q(!0),K(!1),le(e)}),[q,K,le]),fe=(0,i.useMemo)((()=>()=>{q(!1)}),[q]),Ie=(0,i.useMemo)((()=>()=>{K((e=>!e))}),[K]),Ze=e=>{const t=[...D.results],n=t.findIndex((t=>t.id===e.id));-1!==n&&(e.subscribed?(t[n].subscribers_count=e.subscribers_count-1,t[n].subscribed=!e.subscribed):(t[n].subscribers_count=e.subscribers_count+1,t[n].subscribed=!e.subscribed),console.log(t),B({type:V.dK.SET_RESULTS,payload:{results:t}}))},Ee=(0,i.useMemo)((()=>()=>{B({type:V.dK.LOADING_NEXT}),v.Z.request({url:D.next,method:Z.Z.GetAllIncubators.method}).then((e=>{B({type:V.dK.LOAD_NEXT_SUCCESS,payload:e.data})}))}),[B,D.next,D.isLoadingNext,D.initialized]);if(!A&&!x.user||D.initialized&&n&&!D.count)return i.createElement(oe.Z,null);if(!D.initialized)return i.createElement(O,null);const Se=i.createElement(f.Z,null,i.createElement(d.Z,{className:se.header},i.createElement(m.Z,{className:se.title,variant:"h5"},i.createElement(w.Z,{id:"ui.incubatorListWidget.title",defaultMessage:"ui.incubatorListWidget.title"})),i.createElement(b.Z,{className:se.helpPopover,color:"primary","aria-label":"info",component:"span",onClick:e=>{ie(e.currentTarget)}},i.createElement(R.Z,{fontSize:"small"},"help_outline")),ce&&i.createElement($.ZP,{open:ce,anchorEl:H,onClose:ge,anchorOrigin:{vertical:"bottom",horizontal:"right"}},i.createElement(d.Z,{sx:{p:"10px"}},i.createElement(m.Z,{component:"span",sx:{whiteSpace:"pre-line"}},i.createElement(w.Z,{id:"ui.incubatorListWidget.popover",defaultMessage:"ui.incubatorListWidget.popover"}))))),D.count?i.createElement(i.Fragment,null,i.createElement(g.Z,null,D.results.slice(0,D.visibleItems).map((e=>i.createElement(p.ZP,{key:e.id},i.createElement(W.Z,Object.assign({elevation:0,incubator:e,subscribeButtonProps:{onSubscribe:Ze},ButtonProps:{onClick:()=>he(e)}},a)))))),i.createElement(d.Z,{className:se.actions},D.count>D.visibleItems&&i.createElement(h.Z,{className:se.showMore,onClick:Ie},i.createElement(w.Z,{id:"ui.incubatorListWidget.ShowAll",defaultMessage:"ui.incubatorListWidget.ShowAll"})),i.createElement(h.Z,{size:"small",onClick:()=>F(!0)},i.createElement(w.Z,{id:"ui.incubatorListWidget.SuggestNewTopic",defaultMessage:"ui.incubatorListWidget.SuggestNewTopic"})))):i.createElement(m.Z,{className:se.noResults,variant:"body2"},i.createElement(w.Z,{id:"ui.incubatorListWidget.noResults",defaultMessage:"ui.incubatorListWidget.noResults"})),U&&i.createElement(re,Object.assign({className:se.dialogRoot,title:i.createElement(w.Z,{id:"ui.incubatorListWidget.title",defaultMessage:"ui.incubatorListWidget.title"}),onClose:Ie,open:U},S),i.createElement(P.Z,{dataLength:D.results.length,next:Ee,hasMoreNext:Boolean(D.next),loaderNext:i.createElement(C.Z,Object.assign({elevation:0},a)),height:me?"100vh":400,endMessage:i.createElement(m.Z,{className:se.endMessage},i.createElement(w.Z,{id:"ui.incubatorListWidget.noMoreIncubators",defaultMessage:"ui.incubatorListWidget.noMoreIncubators"}))},i.createElement(g.Z,null,D.results.map((e=>i.createElement(p.ZP,{key:e.id},i.createElement(W.Z,Object.assign({elevation:0,incubator:e,subscribeButtonProps:{onSubscribe:Ze},ButtonProps:{onClick:()=>he(e)}},a)))))))),z&&i.createElement(Y,{className:se.createDialog,open:z,onClose:pe}),J&&i.createElement(Q.Z,{open:J,onClose:fe,incubator:ue,onSubscriptionsUpdate:Ze}));return i.createElement(ae,Object.assign({className:M()(se.root,s)},N),Se)},ce={sidebar_label:"Incubators List",sidebar_position:1,title:"Incubators List"},ue=void 0,le={id:"sdk/community-js/react-ui/Components/IncubatorsList",title:"Incubators List",description:"The Incubators List component renders a list of incubators.",source:"@site/docs/sdk/community-js/react-ui/Components/IncubatorsList.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/IncubatorsList",permalink:"/docs/sdk/community-js/react-ui/Components/IncubatorsList",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/IncubatorsList.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Incubators List",sidebar_position:1,title:"Incubators List"},sidebar:"sdkSidebar",previous:{title:"Incubator Suggestion",permalink:"/docs/sdk/community-js/react-ui/Components/IncubatorSuggestion"},next:{title:"Inline Composer",permalink:"/docs/sdk/community-js/react-ui/Components/InlineComposer"}},de={},me=[{value:"Usage",id:"usage",level:4}];function be(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The Incubators List component renders a list of incubators.",(0,o.jsx)("br",{}),"\nThis list is composed of items containing incubator's title, info, a subscription status bar and a subscribe button that allows users to subscribe/unsubscribe to an incubator.",(0,o.jsx)("br",{}),"\nBy clicking the incubator title it is possible to open a modal card showing the incubators details and a section where it is possible to share the item on social networks.",(0,o.jsx)("br",{}),'\nThe incubators are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.\nAt the card bottom there is also a "suggest a new topic" button that opens a modal composed of a form that allows users to propose a new interests.']}),"\n"]}),"\n","\n","\n",(0,o.jsx)(a.Z,{children:(0,o.jsx)(ie,{})}),"\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {IncubatorListWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><IncubatorListWidget /></SCContextProvider>\n   );\n }\n"})})]})}function ge(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(be,{...e})}):be(e)}}}]);