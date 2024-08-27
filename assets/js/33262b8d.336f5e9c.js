"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[73292],{92991:(e,t,s)=>{s.d(t,{Z:()=>m});var n=s(67294),o=s(27331),i=s(5730);function r(e,t){void 0===e&&(e=""),void 0===t&&(t={});const s=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:s})}function a(){if((0,i.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:o.r.user.client_id,grant_type:"refresh_token"};return r(`${o.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function l(){const e=(0,i.Z)(),[t,s]=(0,n.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,n.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?r(`${o.r.portal}/oauth/token/`,o.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{s(e)})):e&&s(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var c=s(76171),u=s(89521),d=s(19666),g=s(85893);function m(e){let{children:t}=e;const s=l(),n={portal:o.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:o.r.user.client_id,authToken:s,handleRefreshToken:a},theme:u.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,g.jsx)(d.Z,{children:()=>(0,g.jsx)(c.ZP,{conf:n,children:t})})}},27331:(e,t,s)=>{s.d(t,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},6153:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(85893),o=s(11151),i=s(92991),r=s(27807);const a={sidebar_label:"User Suggestion Widget",sidebar_position:1,title:"User Suggestion Widget"},l=void 0,c={id:"sdk/community-js/react-ui/Components/UserSuggestion",title:"User Suggestion Widget",description:"The User Suggestion Widget renders a list of suggested users.",source:"@site/docs/sdk/community-js/react-ui/Components/UserSuggestion.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/UserSuggestion",permalink:"/docs/sdk/community-js/react-ui/Components/UserSuggestion",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/UserSuggestion.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User Suggestion Widget",sidebar_position:1,title:"User Suggestion Widget"},sidebar:"sdkSidebar",previous:{title:"User Subscribed Groups Widget",permalink:"/docs/sdk/community-js/react-ui/Components/UserSubscribedGroups"},next:{title:"User Followed Users Widget",permalink:"/docs/sdk/community-js/react-ui/Components/UsersFollowed"}},u={},d=[{value:"Usage",id:"usage",level:4}];function g(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The User Suggestion Widget renders a list of suggested users.",(0,n.jsx)("br",{}),"\nThis list is composed of items containing user's avatar and username, info (or followers counter) and a follow button that allows users to follow/unfollow others.",(0,n.jsx)("br",{}),'\nThe categories are shown in an orderly manner: few items are shown in the main card while the others can be displayed in a modal card by clicking on the "show all" button.']}),"\n"]}),"\n","\n","\n",(0,n.jsx)(i.Z,{children:(0,n.jsx)(r.Z,{})}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {UserSuggestionWidget} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><UserSuggestionWidget /></SCContextProvider>\n   );\n }\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},44267:(e,t,s)=>{s.d(t,{Z:()=>p});var n=s(83117),o=s(80102),i=s(67294),r=s(63961),a=s(94780),l=s(90948),c=s(28628),u=s(1588),d=s(34867);function g(e){return(0,d.ZP)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var m=s(85893);const h=["className","component"],_=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),p=i.forwardRef((function(e,t){const s=(0,c.i)({props:e,name:"MuiCardContent"}),{className:i,component:l="div"}=s,u=(0,o.Z)(s,h),d=(0,n.Z)({},s,{component:l}),p=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},g,t)})(d);return(0,m.jsx)(_,(0,n.Z)({as:l,className:(0,r.Z)(p.root,i),ownerState:d,ref:t},u))}))},31924:(e,t,s)=>{s.d(t,{Z:()=>l});var n=s(97582),o=s(91705),i=s(24085),r=s(66821);class a{static getCategorySuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:i.Z.CategoriesSuggestion.url({}),method:i.Z.CategoriesSuggestion.method,params:e}))}static getIncubatorSuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:i.Z.GetIncubatorSuggestion.url({}),method:i.Z.GetIncubatorSuggestion.method,params:e}))}static getPollSuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:i.Z.PollSuggestion.url({}),method:i.Z.PollSuggestion.method,params:e}))}static getUserSuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:i.Z.UserSuggestion.url({}),method:i.Z.UserSuggestion.method,params:e}))}static getSearchSuggestion(e,t,s){const n=(0,r.B)({search:e});return(0,o.N)(Object.assign(Object.assign({},s),{url:`${i.Z.SearchSuggestion.url({})}?${n.toString()}`,method:i.Z.UserSuggestion.method,params:t}))}}class l{static getCategorySuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return a.getCategorySuggestion(e,t)}))}static getIncubatorSuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return a.getIncubatorSuggestion(e,t)}))}static getPollSuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return a.getPollSuggestion(e,t)}))}static getUserSuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return a.getUserSuggestion(e,t)}))}static getSearchSuggestion(e,t,s){return(0,n.mG)(this,void 0,void 0,(function*(){return a.getSearchSuggestion(e,t,s)}))}}},69721:(e,t,s)=>{s.d(t,{AL:()=>r,DC:()=>N,Em:()=>d,G8:()=>y,Gp:()=>L,I$:()=>j,L4:()=>g,M7:()=>S,NX:()=>a,Nj:()=>x,Nm:()=>W,Ny:()=>l,R4:()=>k,Rg:()=>_,Tb:()=>U,X5:()=>Z,Z4:()=>v,ZV:()=>O,_Z:()=>f,_j:()=>n,b0:()=>u,eg:()=>E,ht:()=>o,hu:()=>A,k5:()=>p,mK:()=>b,oE:()=>T,ol:()=>R,t9:()=>h,u5:()=>c,wp:()=>I,wv:()=>C,xh:()=>P,zL:()=>$,zj:()=>w});const n=(e,t)=>`_fo_${t}_${e}`,o=e=>`_co_${e}`,i="_cos_",r=(e,t,s)=>`${i}${t}_${e}_${s}`,a=(e,t)=>`${i}${t}_${e}`,l=()=>"_cas_",c=e=>`_ca_${e}`,u=e=>`_grp_${e}`,d=()=>"_grps_",g=e=>`_inc_${e}`,m="_contr_",h=(e,t,s)=>`${m}${t}_${e}_${s}`,_=()=>"_bcms_",p=(e,t)=>`_feed_${e}_${t}`,S=e=>`_feed_st_${e}`,v=e=>`_virtualized_scroll_st_${e}`,f=e=>`_feed_spos_${e}`,E=e=>`_adv_${e}`,b=()=>"_pmss_",y=e=>`_pms_${e}`,Z="_cFolWidget_",N="_cSugWidget_",O="_cPopWidget_",j="_uFolWidget_",x="_uFoldWidget_",C="_uConWidget_",k="_uConReqWidget_",L="_uConReqSentWidget_",R="_fTrendWidget_",U="_rFeedWidget_",w="_pTrendWidget_",T="_pSugWidget_",I="_iListWidget_",P="_iSugWidget_",W="_pSugWidget_",$="_gSubWidget_",A=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},27807:(e,t,s)=>{s.d(t,{Z:()=>M});var n=s(97582),o=s(67294),i=s(90948),r=s(2734),a=s(37292),l=s(44267),c=s(15861),u=s(78462),d=s(97212),g=s(25662),m=s(31924),h=s(24243),_=s(24085),p=s(69721),S=s(13391),v=s(66380),f=s(85472),E=s(50353),b=s(63902);const y="SCUserSuggestionWidget",Z={root:`${y}-skeleton-root`,list:`${y}-list`},N=(0,i.ZP)(b.Z,{name:y,slot:"SkeletonRoot"})((()=>({})));const O=function(e){return o.createElement(N,Object.assign({className:Z.root},e),o.createElement(l.Z,null,o.createElement(u.Z,{className:Z.list},[...Array(4)].map(((e,t)=>o.createElement(d.ZP,{key:t},o.createElement(E.Z,{elevation:0})))))))};var j=s(37089),x=s(44012),C=s(94184),k=s.n(C),L=s(29360),R=s(54545),U=s(59219),w=s(99960),T=s(15927),I=s(39154),P=s(75459),W=s(79558);const $={root:`${y}-root`,title:`${y}-title`,noResults:`${y}-no-results`,showMore:`${y}-show-more`,dialogRoot:`${y}-dialog-root`,endMessage:`${y}-end-message`},A=(0,i.ZP)(b.Z,{name:y,slot:"Root"})((()=>({}))),D=(0,i.ZP)(I.Z,{name:y,slot:"DialogRoot"})((()=>({})));const M=function(e){const t=(0,L.Z)({props:e,name:y}),{autoHide:s=!0,limit:i=3,className:b,UserProps:Z={},cacheStrategy:N=U.n2.NETWORK_ONLY,onHeightChange:C,onStateChange:I,DialogProps:M={}}=t,K=(0,n._T)(t,["autoHide","limit","className","UserProps","cacheStrategy","onHeightChange","onStateChange","DialogProps"]),[X,G]=(0,o.useReducer)(T.Xi,{isLoadingNext:!1,next:null,cacheKey:p.hu(p.oE),cacheStrategy:N,visibleItems:i},T.Mv),[F,z]=(0,o.useState)(!1),V=(0,S.LD)(),B=(0,v.ko)(),H=((0,o.useMemo)((()=>f.$0 in B.preferences&&B.preferences[f.$0].value),[B.preferences]),(0,r.Z)()),q=(0,a.Z)(H.breakpoints.down("md")),J=(0,o.useMemo)((()=>()=>{X.initialized||X.isLoadingNext||(G({type:T.dK.LOADING_NEXT}),m.Z.getUserSuggestion({limit:i}).then((e=>{G({type:T.dK.LOAD_NEXT_SUCCESS,payload:Object.assign(Object.assign({},e),{initialized:!0})})})).catch((e=>{G({type:T.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),w.Y.error(P.J,e)})))}),[X.isLoadingNext,X.initialized,i,G]);(0,o.useEffect)((()=>{let e;if(V.user)return e=setTimeout(J),()=>{e&&clearTimeout(e)}}),[V.user]),(0,o.useEffect)((()=>{F&&X.next&&X.results.length<=i&&X.initialized&&(G({type:T.dK.LOADING_NEXT}),m.Z.getUserSuggestion({offset:i,limit:10}).then((e=>{G({type:T.dK.LOAD_NEXT_SUCCESS,payload:e})})).catch((e=>{G({type:T.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),w.Y.error(P.J,e)})))}),[F,X.next,X.results.length,X.initialized,i]),(0,o.useEffect)((()=>{C&&C()}),[X.results]),(0,o.useEffect)((()=>{V.user&&N===U.n2.NETWORK_ONLY&&I&&I({cacheStrategy:U.n2.CACHE_FIRST})}),[V.user]);const Y=(0,o.useMemo)((()=>()=>{G({type:T.dK.LOADING_NEXT}),h.Z.request({url:X.next,method:_.Z.UserSuggestion.method}).then((e=>{G({type:T.dK.LOAD_NEXT_SUCCESS,payload:e.data})}))}),[G,X.next,X.isLoadingNext,X.initialized]),Q=()=>{z((e=>!e))};if(s&&!X.count&&X.initialized||!V.user)return o.createElement(R.Z,null);if(!X.initialized)return o.createElement(O,null);const ee=o.createElement(l.Z,null,o.createElement(c.Z,{className:$.title,variant:"h5"},o.createElement(x.Z,{id:"ui.userSuggestionWidget.title",defaultMessage:"ui.userSuggestionWidget.title"})),X.count?o.createElement(o.Fragment,null,o.createElement(u.Z,null,X.results.slice(0,X.visibleItems).map((e=>o.createElement(d.ZP,{key:e.id},o.createElement(j.Z,Object.assign({elevation:0,user:e},Z)))))),X.count>X.visibleItems&&o.createElement(g.Z,{className:$.showMore,onClick:Q},o.createElement(x.Z,{id:"ui.userSuggestionWidget.button.showAll",defaultMessage:"ui.userSuggestionWidget.button.showAll"}))):o.createElement(c.Z,{className:$.noResults,variant:"body2"},o.createElement(x.Z,{id:"ui.userSuggestionWidget.noResults",defaultMessage:"ui.userSuggestionWidget.noResults"})),F&&o.createElement(D,Object.assign({className:$.dialogRoot,title:o.createElement(x.Z,{defaultMessage:"ui.userSuggestionWidget.title",id:"ui.userSuggestionWidget.title"}),onClose:Q,open:F},M),o.createElement(W.Z,{dataLength:X.results.length,next:Y,hasMoreNext:Boolean(X.next),loaderNext:o.createElement(E.Z,Object.assign({elevation:0},Z)),height:q?"100%":400,endMessage:o.createElement(c.Z,{className:$.endMessage},o.createElement(x.Z,{id:"ui.userSuggestionWidget.noMoreResults",defaultMessage:"ui.userSuggestionWidget.noMoreResults"}))},o.createElement(u.Z,null,X.results.map((e=>o.createElement(d.ZP,{key:e.id},o.createElement(j.Z,Object.assign({elevation:0,user:e},Z)))))))));return o.createElement(A,Object.assign({className:k()($.root,b)},K),ee)}},39154:(e,t,s)=>{s.d(t,{Z:()=>y});var n=s(97582),o=s(67294),i=s(90948),r=s(64666),a=s(31425),l=s(6514),c=s(37292),u=s(94184),d=s.n(u),g=s(2734),m=s(37645),h=s(93946),_=s(67564),p=s(86879);const S="SCBaseDialog",v={root:`${S}-root`,titleRoot:`${S}-title-root`},f=(0,i.ZP)(m.Z,{name:S,slot:"Root",overridesResolver:(e,t)=>t.titleRoot})((({theme:e})=>({}))),E=({children:e=null,onClose:t=null})=>{const s=(0,g.Z)(),n=(0,c.Z)(s.breakpoints.down("md"),{noSsr:(0,p.rx)()});return o.createElement(f,{className:v.titleRoot},o.createElement("span",null,e),t?o.createElement(h.Z,{"aria-label":"close",onClick:t},o.createElement(_.Z,null,n?"arrow_back":"close")):null)},b=(0,i.ZP)(r.Z,{name:S,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const y=function(e){const t=(0,g.Z)(),s=(0,c.Z)(t.breakpoints.down("md"),{noSsr:(0,p.rx)()}),i=s,{className:r="",title:u="",subtitle:m=null,DialogContentProps:h={dividers:!s},open:_=!1,onClose:S=null,actions:f=null,children:y,maxWidth:Z="sm",scroll:N="body"}=e,O=(0,n._T)(e,["className","title","subtitle","DialogContentProps","open","onClose","actions","children","maxWidth","scroll"]);return o.createElement(b,Object.assign({className:d()(v.root,r),fullScreen:i,fullWidth:!0,open:_,onClose:S,maxWidth:Z,scroll:N},O),o.createElement(E,{onClose:S},u),m&&m,o.createElement(l.Z,Object.assign({},h),y),f&&o.createElement(a.Z,null,f))}},54545:(e,t,s)=>{s.d(t,{Z:()=>i});var n=s(67294);const o=(0,s(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function i(e){return n.createElement(o,Object.assign({},e))}},15927:(e,t,s)=>{s.d(t,{Mv:()=>r,Xi:()=>i,dK:()=>o});var n=s(59219);const o={LOADING_NEXT:"_loading_next",LOADING_PREVIOUS:"_loading_previous",LOAD_NEXT_SUCCESS:"_load_next_success",LOAD_PREVIOUS_SUCCESS:"_load_previous_success",LOAD_NEXT_FAILURE:"_load_next_failure",LOAD_PREVIOUS_FAILURE:"_load_previous_failure",SET_RESULTS:"_set_results",SET_VISIBLE_ITEMS:"_set_visible_items",RESET:"_reset"};function i(e,t){var s;let i=Object.assign({},e);switch(t.type){case o.LOADING_NEXT:i=Object.assign(Object.assign({},e),{isLoadingNext:!0,errorLoadNext:null});break;case o.LOADING_PREVIOUS:i=Object.assign(Object.assign({},e),{isLoadingPrevious:!0,errorLoadPrevious:null});break;case o.LOAD_NEXT_SUCCESS:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,count:t.payload.count,next:t.payload.next?t.payload.next:null,results:[...e.results,...t.payload.results],errorLoadNext:null,initialized:(null===(s=t.payload)||void 0===s?void 0:s.initialized)||!0});break;case o.LOAD_PREVIOUS_SUCCESS:i=Object.assign(Object.assign({},e),{isLoadingPrevious:!1,count:t.payload.count,previous:t.payload.previous?t.payload.previous:null,results:[...t.payload.results,...e.results],errorPreviousNext:null});break;case o.SET_RESULTS:i=Object.assign(Object.assign(Object.assign({},e),{results:[...t.payload.results]}),t.payload.count?{count:t.payload.count}:{});break;case o.SET_VISIBLE_ITEMS:i=Object.assign(Object.assign({},e),{visibleItems:t.payload.visibleItems});break;case o.LOAD_NEXT_FAILURE:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadNext:t.payload.error});break;case o.LOAD_PREVIOUS_FAILURE:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadPrevious:t.payload.error});break;case o.RESET:i={isLoadingNext:!1,next:null,results:[],count:0,errorLoadNext:null,initialized:!1}}return n.ZP.set(i.cacheKey,i),i}function r(e){let t={cacheKey:e.cacheKey?e.cacheKey:null,count:e.count?e.count:0,results:e.results?e.results:[],next:e.next?e.next:null,previous:e.previous?e.previous:null,isLoadingNext:!!e.isLoadingNext&&e.isLoadingNext,isLoadingPrevious:!!e.isLoadingPrevious&&e.isLoadingPrevious,visibleItems:e.visibleItems?e.visibleItems:null,initialized:!1};if(t.cacheKey&&n.ZP.hasKey(t.cacheKey)&&e.cacheStrategy!==n.n2.NETWORK_ONLY){const e=n.ZP.get(t.cacheKey);return Object.assign(Object.assign({},t),e)}return t}},59219:(e,t,s)=>{s.d(t,{ZP:()=>o,n2:()=>n});var n;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(n||(n={}));const o=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,s={noSsr:!0}){let n;return this.values.has(e)?(n=this.values.get(e),this.values.delete(e),this.values.set(e,n)):t&&(n=t,(!this.ssr||!s.noSsr)&&this.values.set(e,n)),n}set(e,t,s={noSsr:!0}){if(!this.ssr||!s.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,s)=>{s.startsWith(e)&&this.values.delete(s)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}}}]);