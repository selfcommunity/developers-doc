/*! For license information please see 86849.218ec88f.js.LICENSE.txt */
(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[86849],{44267:(e,t,a)=>{"use strict";a.d(t,{Z:()=>v});var n=a(83117),o=a(80102),r=a(67294),i=a(63961),s=a(58510),l=a(90948),c=a(71657),u=a(1977),d=a(8027);function g(e){return(0,d.ZP)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var m=a(85893);const p=["className","component"],h=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),v=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:r,component:l="div"}=a,u=(0,o.Z)(a,p),d=(0,n.Z)({},a,{component:l}),v=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"]},g,t)})(d);return(0,m.jsx)(h,(0,n.Z)({as:l,className:(0,i.Z)(v.root,r),ownerState:d,ref:t},u))}))},78445:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(80102),o=a(83117),r=a(67294),i=a(63961),s=a(58510),l=a(15861),c=a(71657),u=a(90948),d=a(1977),g=a(8027);function m(e){return(0,g.ZP)("MuiCardHeader",e)}const p=(0,d.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]);var h=a(85893);const v=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,t)=>(0,o.Z)({[`& .${p.title}`]:t.title,[`& .${p.subheader}`]:t.subheader},t.root)})({display:"flex",alignItems:"center",padding:16}),E=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,t)=>t.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),Z=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,t)=>t.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),S=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,t)=>t.content})({flex:"1 1 auto"}),b=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiCardHeader"}),{action:r,avatar:u,className:d,component:g="div",disableTypography:p=!1,subheader:b,subheaderTypographyProps:f,title:N,titleTypographyProps:O}=a,_=(0,n.Z)(a,v),P=(0,o.Z)({},a,{component:g,disableTypography:p}),x=(e=>{const{classes:t}=e;return(0,s.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)})(P);let C=N;null==C||C.type===l.Z||p||(C=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"h5",className:x.title,component:"span",display:"block"},O,{children:C})));let R=b;return null==R||R.type===l.Z||p||(R=(0,h.jsx)(l.Z,(0,o.Z)({variant:u?"body2":"body1",className:x.subheader,color:"text.secondary",component:"span",display:"block"},f,{children:R}))),(0,h.jsxs)(y,(0,o.Z)({className:(0,i.Z)(x.root,d),as:g,ref:t,ownerState:P},_,{children:[u&&(0,h.jsx)(E,{className:x.avatar,ownerState:P,children:u}),(0,h.jsxs)(S,{className:x.content,ownerState:P,children:[C,R]}),r&&(0,h.jsx)(Z,{className:x.action,ownerState:P,children:r})]}))}))},96514:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(83117),o=a(80102),r=a(67294),i=a(39192),s=a(98885),l=a(2734),c=a(30577),u=a(51705),d=a(85893);const g=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function m(e){return`scale(${e}, ${e**2})`}const p={entering:{opacity:1,transform:m(1)},entered:{opacity:1,transform:"none"}},h="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),v=r.forwardRef((function(e,t){const{addEndListener:a,appear:v=!0,children:y,easing:E,in:Z,onEnter:S,onEntered:b,onEntering:f,onExit:N,onExited:O,onExiting:_,style:P,timeout:x="auto",TransitionComponent:C=s.ZP}=e,R=(0,o.Z)(e,g),T=(0,i.Z)(),w=r.useRef(),L=(0,l.Z)(),j=r.useRef(null),M=(0,u.Z)(j,y.ref,t),I=e=>t=>{if(e){const a=j.current;void 0===t?e(a):e(a,t)}},A=I(f),B=I(((e,t)=>{(0,c.n)(e);const{duration:a,delay:n,easing:o}=(0,c.C)({style:P,timeout:x,easing:E},{mode:"enter"});let r;"auto"===x?(r=L.transitions.getAutoHeightDuration(e.clientHeight),w.current=r):r=a,e.style.transition=[L.transitions.create("opacity",{duration:r,delay:n}),L.transitions.create("transform",{duration:h?r:.666*r,delay:n,easing:o})].join(","),S&&S(e,t)})),$=I(b),U=I(_),W=I((e=>{const{duration:t,delay:a,easing:n}=(0,c.C)({style:P,timeout:x,easing:E},{mode:"exit"});let o;"auto"===x?(o=L.transitions.getAutoHeightDuration(e.clientHeight),w.current=o):o=t,e.style.transition=[L.transitions.create("opacity",{duration:o,delay:a}),L.transitions.create("transform",{duration:h?o:.666*o,delay:h?a:a||.333*o,easing:n})].join(","),e.style.opacity=0,e.style.transform=m(.75),N&&N(e)})),k=I(O);return(0,d.jsx)(C,(0,n.Z)({appear:v,in:Z,nodeRef:j,onEnter:B,onEntered:$,onEntering:A,onExit:W,onExited:k,onExiting:U,addEndListener:e=>{"auto"===x&&T.start(w.current||0,e),a&&a(j.current,e)},timeout:"auto"===x?null:x},R,{children:(e,t)=>r.cloneElement(y,(0,n.Z)({style:(0,n.Z)({opacity:0,transform:m(.75),visibility:"exited"!==e||Z?void 0:"hidden"},p[e],P,y.props.style),ref:M},t))}))}));v.muiSupportAuto=!0;const y=v},78462:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(80102),o=a(83117),r=a(67294),i=a(63961),s=a(58510),l=a(90948),c=a(71657),u=a(59773),d=a(1977),g=a(8027);function m(e){return(0,g.ZP)("MuiList",e)}(0,d.Z)("MuiList",["root","padding","dense","subheader"]);var p=a(85893);const h=["children","className","component","dense","disablePadding","subheader"],v=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,!a.disablePadding&&t.padding,a.dense&&t.dense,a.subheader&&t.subheader]}})((({ownerState:e})=>(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),y=r.forwardRef((function(e,t){const a=(0,c.Z)({props:e,name:"MuiList"}),{children:l,className:d,component:g="ul",dense:y=!1,disablePadding:E=!1,subheader:Z}=a,S=(0,n.Z)(a,h),b=r.useMemo((()=>({dense:y})),[y]),f=(0,o.Z)({},a,{component:g,dense:y,disablePadding:E}),N=(e=>{const{classes:t,disablePadding:a,dense:n,subheader:o}=e,r={root:["root",!a&&"padding",n&&"dense",o&&"subheader"]};return(0,s.Z)(r,m,t)})(f);return(0,p.jsx)(u.Z.Provider,{value:b,children:(0,p.jsxs)(v,(0,o.Z)({as:g,className:(0,i.Z)(N.root,d),ref:t,ownerState:f},S,{children:[Z,l]}))})}))},15861:(e,t,a)=>{"use strict";a.d(t,{Z:()=>S});var n=a(80102),o=a(83117),r=a(67294),i=a(63961),s=a(39707),l=a(58510),c=a(90948),u=a(71657),d=a(98216),g=a(1977),m=a(8027);function p(e){return(0,m.ZP)("MuiTypography",e)}(0,g.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var h=a(85893);const v=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],y=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,o.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),E={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},S=r.forwardRef((function(e,t){const a=(0,u.Z)({props:e,name:"MuiTypography"}),r=(e=>Z[e]||e)(a.color),c=(0,s.Z)((0,o.Z)({},a,{color:r})),{align:g="inherit",className:m,component:S,gutterBottom:b=!1,noWrap:f=!1,paragraph:N=!1,variant:O="body1",variantMapping:_=E}=c,P=(0,n.Z)(c,v),x=(0,o.Z)({},c,{align:g,color:r,className:m,component:S,gutterBottom:b,noWrap:f,paragraph:N,variant:O,variantMapping:_}),C=S||(N?"p":_[O]||E[O])||"span",R=(e=>{const{align:t,gutterBottom:a,noWrap:n,paragraph:o,variant:r,classes:i}=e,s={root:["root",r,"inherit"!==e.align&&`align${(0,d.Z)(t)}`,a&&"gutterBottom",n&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,p,i)})(x);return(0,h.jsx)(y,(0,o.Z)({as:C,ref:t,ownerState:x,className:(0,i.Z)(R.root,m)},P))}))},49299:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a(81222).Z},27909:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a(89326).Z},81222:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(67294);function o({controlled:e,default:t,name:a,state:o="value"}){const{current:r}=n.useRef(void 0!==e),[i,s]=n.useState(t);return[r?e:i,n.useCallback((e=>{r||s(e)}),[])]}},31924:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(97582),o=a(91705),r=a(24085),i=a(66821);class s{static getCategorySuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:r.Z.CategoriesSuggestion.url({}),method:r.Z.CategoriesSuggestion.method,params:e}))}static getIncubatorSuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:r.Z.GetIncubatorSuggestion.url({}),method:r.Z.GetIncubatorSuggestion.method,params:e}))}static getPollSuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:r.Z.PollSuggestion.url({}),method:r.Z.PollSuggestion.method,params:e}))}static getUserSuggestion(e,t){return(0,o.N)(Object.assign(Object.assign({},t),{url:r.Z.UserSuggestion.url({}),method:r.Z.UserSuggestion.method,params:e}))}static getSearchSuggestion(e,t,a){const n=(0,i.B)({search:e});return(0,o.N)(Object.assign(Object.assign({},a),{url:`${r.Z.SearchSuggestion.url({})}?${n.toString()}`,method:r.Z.UserSuggestion.method,params:t}))}}class l{static getCategorySuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return s.getCategorySuggestion(e,t)}))}static getIncubatorSuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return s.getIncubatorSuggestion(e,t)}))}static getPollSuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return s.getPollSuggestion(e,t)}))}static getUserSuggestion(e,t){return(0,n.mG)(this,void 0,void 0,(function*(){return s.getUserSuggestion(e,t)}))}static getSearchSuggestion(e,t,a){return(0,n.mG)(this,void 0,void 0,(function*(){return s.getSearchSuggestion(e,t,a)}))}}},45431:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(67294),o=a(63902),r=a(78462),i=a(90948),s=a(12805),l=a(44267),c=a(89546);const u={root:`${c.B}-skeleton-root`,list:`${c.B}-list`},d=(0,i.ZP)(o.Z,{name:c.B,slot:"SkeletonRoot"})((()=>({})));function g(e){return n.createElement(d,Object.assign({className:u.root},e),n.createElement(l.Z,null,n.createElement(r.Z,{className:u.list},[...Array(4)].map(((e,t)=>n.createElement(s.Z,{key:t,elevation:0}))))))}},89546:(e,t,a)=>{"use strict";a.d(t,{B:()=>n});const n="SCCategoryTrendingFeedWidget"},12805:(e,t,a)=>{"use strict";a.d(t,{Z:()=>y});var n=a(97582),o=a(67294),r=a(63902),i=a(90948),s=a(88078),l=a(37024),c=a(2734),u=a(78445),d=a(44267),g=a(94184),m=a.n(g),p=a(37540);const h={root:`${p.B}-skeleton-root`,media:`${p.B}-media`},v=(0,i.ZP)(r.Z,{name:p.B,slot:"SkeletonRoot"})((()=>({})));function y(e){const{template:t=l.r.SNIPPET}=e,a=(0,n._T)(e,["template"]),r=(0,c.Z)();let i;return i=t===l.r.PREVIEW||t===l.r.DETAIL||t===l.r.SEARCH?o.createElement(o.Fragment,null,o.createElement(u.Z,{avatar:o.createElement(s.Z,{animation:"wave",variant:"circular",width:r.selfcommunity.user.avatar.sizeMedium,height:r.selfcommunity.user.avatar.sizeMedium}),title:o.createElement(s.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:o.createElement(s.Z,{animation:"wave",height:10,width:"40%"})}),o.createElement(s.Z,{animation:"wave",variant:"rectangular",className:h.media}),o.createElement(d.Z,null,o.createElement(o.Fragment,null,o.createElement(s.Z,{animation:"wave",height:10,style:{marginBottom:6}}),o.createElement(s.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),o.createElement(s.Z,{animation:"wave",height:10,width:"60%"})))):o.createElement(o.Fragment,null,o.createElement(u.Z,{avatar:o.createElement(s.Z,{animation:"wave",variant:"circular",width:r.selfcommunity.user.avatar.sizeMedium,height:r.selfcommunity.user.avatar.sizeMedium}),title:o.createElement(s.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:o.createElement(s.Z,{animation:"wave",height:10,width:"40%"})}),o.createElement(d.Z,null,o.createElement(o.Fragment,null,o.createElement(s.Z,{animation:"wave",height:10,style:{marginBottom:6}}),o.createElement(s.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),o.createElement(s.Z,{animation:"wave",height:10,width:"60%",style:{marginBottom:6}})))),o.createElement(v,Object.assign({className:m()(h.root,`${p.B}-${t}`)},a),i)}},37540:(e,t,a)=>{"use strict";a.d(t,{B:()=>n});const n="SCFeedObject"},6247:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Q});var n=a(97582),o=a(67294),r=a(90948),i=a(78462),s=a(2734),l=a(61730),c=a(44267),u=a(15861),d=a(97212),g=a(25662),m=a(31924),p=a(24243),h=a(24085),v=a(59219),y=a(99960),E=a(69721),Z=a(68787),S=a(45431),b=a(75459),f=a(44012),N=a(94184),O=a.n(N),_=a(39154),P=a(79558),x=a(63902),C=a(29628),R=a(87952),T=a(5616),w=a(68269),L=a(41538),j=a(97265),M=a(12132),I=a(70050),A=a(91568),B=a(115),$=a(68585),U=a(68456);const W="SCPollSuggestionWidget",k={root:`${W}-poll-snippet-root`,avatar:`${W}-avatar`,username:`${W}-username`,title:`${W}-title`,activityAt:`${W}-activity-at`},D=(0,r.ZP)(B.Z,{name:W,slot:"PollSnippetRoot"})((()=>({})));const F=function(e){const{feedObj:t=null,className:a=null,autoHide:r=!1}=e,i=((0,n._T)(e,["feedObj","className","autoHide"]),(0,L.sy)()),[s,l]=(0,o.useState)(!1);return r?null:o.createElement(o.Fragment,null,o.createElement(D,{elevation:0,className:O()(k.root,a),image:o.createElement(j.Z,Object.assign({},!t.author.deleted&&{to:i.url(M.USER_PROFILE_ROUTE_NAME,t.author)},{onClick:t.author.deleted?()=>l(!0):null}),o.createElement(U.Z,{hide:!t.author.community_badge},o.createElement(R.Z,{alt:t.author.username,variant:"circular",src:t.author.avatar,className:k.avatar}))),primary:o.createElement(T.Z,null,o.createElement(j.Z,Object.assign({},!t.author.deleted&&{to:i.url(M.USER_PROFILE_ROUTE_NAME,t.author)},{className:k.username,onClick:t.author.deleted?()=>l(!0):null}),t.author.username),o.createElement(u.Z,{variant:"body2",className:k.title},t.poll.title)),disableTypography:!0,secondary:o.createElement(w.Z,{direction:"row",justifyContent:"space-between",spacing:2,alignItems:"center"},o.createElement(j.Z,{to:i.url((0,I.Ig)(t),(0,I.p3)(t)),className:k.activityAt},o.createElement(A.Z,{component:"span",date:t.added_at})),o.createElement(g.Z,{component:j.Z,to:i.url((0,I.Ig)(t),(0,I.p3)(t)),variant:"text",color:"secondary",size:"small"},o.createElement(f.Z,{id:"ui.pollSuggestionWidget.pollSnippet.button.seeItem",defaultMessage:"ui.pollSuggestionWidget.pollSnippet.button.seeItem"})))}),s&&o.createElement($.Z,{open:s,handleClose:()=>l(!1)}))};var H=a(88078);const K={root:"SCPollSnippetSkeleton-root"},z=(0,r.ZP)(B.Z)((({theme:e})=>({})));function X(e){const t=(0,s.Z)();return o.createElement(z,Object.assign({className:K.root},e,{image:o.createElement(H.Z,{animation:"wave",variant:"circular",width:t.selfcommunity.user.avatar.sizeMedium,height:t.selfcommunity.user.avatar.sizeMedium}),primary:o.createElement(H.Z,{animation:"wave",height:10,width:120,style:{marginBottom:10}}),secondary:o.createElement(H.Z,{animation:"wave",height:10,width:70,style:{marginBottom:10}})}))}var G=a(54545),V=a(15927);const Y={root:`${W}-root`,title:`${W}-title`,noResults:`${W}-no-results`,showMore:`${W}-show-more`,dialogRoot:`${W}-dialog-root`,endMessage:`${W}-end-message`,pollSnippet:`${W}-poll-snippet`},J=(0,r.ZP)(x.Z,{name:W,slot:"Root"})((()=>({}))),q=(0,r.ZP)(_.Z,{name:W,slot:"DialogRoot"})((()=>({})));const Q=function(e){const t=(0,C.Z)({props:e,name:W}),{autoHide:a=!0,limit:r=3,PollSnippetProps:N={},className:_,cacheStrategy:x=v.n2.NETWORK_ONLY,onHeightChange:R,onStateChange:T,DialogProps:w={}}=t,L=(0,n._T)(t,["autoHide","limit","PollSnippetProps","className","cacheStrategy","onHeightChange","onStateChange","DialogProps"]),[j,M]=(0,o.useReducer)(V.Xi,{isLoadingNext:!1,next:null,cacheKey:E.hu(E.Nm),cacheStrategy:x,visibleItems:r},V.Mv),[I,A]=(0,o.useState)(!1),B=(0,Z.LD)(),$=(0,s.Z)(),U=(0,l.Z)($.breakpoints.down("md")),k=(0,o.useMemo)((()=>()=>{j.initialized||j.isLoadingNext||(M({type:V.dK.LOADING_NEXT}),m.Z.getPollSuggestion({limit:r}).then((e=>{M({type:V.dK.LOAD_NEXT_SUCCESS,payload:Object.assign(Object.assign({},e),{initialized:!0})})})).catch((e=>{M({type:V.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),y.Y.error(b.J,e)})))}),[j.isLoadingNext,j.initialized,r,M]);(0,o.useEffect)((()=>{let e;if(B.user)return e=setTimeout(k),()=>{e&&clearTimeout(e)}}),[B.user]),(0,o.useEffect)((()=>{I&&j.next&&j.results.length===r&&j.initialized&&(M({type:V.dK.LOADING_NEXT}),m.Z.getPollSuggestion({offset:r,limit:10}).then((e=>{M({type:V.dK.LOAD_NEXT_SUCCESS,payload:e})})).catch((e=>{M({type:V.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),y.Y.error(b.J,e)})))}),[I,j.next,j.results.length,j.initialized,r]),(0,o.useEffect)((()=>{R&&R()}),[j.results]),(0,o.useEffect)((()=>{B.user&&x===v.n2.NETWORK_ONLY&&T&&T({cacheStrategy:v.n2.CACHE_FIRST})}),[B.user]);const D=(0,o.useMemo)((()=>()=>{M({type:V.dK.LOADING_NEXT}),p.Z.request({url:j.next,method:h.Z.PollSuggestion.method}).then((e=>{M({type:V.dK.LOAD_NEXT_SUCCESS,payload:e.data})}))}),[M,j.next,j.isLoadingNext,j.initialized]),H=()=>{A((e=>!e))};if(a&&!j.count&&j.initialized||!B.user)return o.createElement(G.Z,null);if(!j.initialized)return o.createElement(S.Z,null);const K=o.createElement(c.Z,null,o.createElement(u.Z,{className:Y.title,variant:"h5"},o.createElement(f.Z,{id:"ui.pollSuggestionWidget.title",defaultMessage:"ui.pollSuggestionWidget.title"})),j.count?o.createElement(o.Fragment,null,o.createElement(i.Z,null,j.results.slice(0,j.visibleItems).map((e=>o.createElement(d.ZP,{key:e.id},o.createElement(F,Object.assign({className:Y.pollSnippet,elevation:0,feedObj:e},N)))))),j.count>j.visibleItems&&o.createElement(g.Z,{className:Y.showMore,onClick:H},o.createElement(f.Z,{id:"ui.pollSuggestionWidget.button.showAll",defaultMessage:"ui.pollSuggestionWidget.button.showAll"}))):o.createElement(u.Z,{className:Y.noResults,variant:"body2"},o.createElement(f.Z,{id:"ui.pollSuggestionWidget.noResults",defaultMessage:"ui.pollSuggestionWidget.noResults"})),I&&o.createElement(q,Object.assign({className:Y.dialogRoot,title:o.createElement(f.Z,{defaultMessage:"ui.pollSuggestionWidget.title",id:"ui.pollSuggestionWidget.title"}),onClose:H,open:I},w),o.createElement(P.Z,{dataLength:j.results.length,next:D,hasMoreNext:Boolean(j.next),loaderNext:o.createElement(X,Object.assign({elevation:0},N)),height:U?"100%":400,endMessage:o.createElement(u.Z,{className:Y.endMessage},o.createElement(f.Z,{id:"ui.pollSuggestionWidget.noMoreResults",defaultMessage:"ui.pollSuggestionWidget.noMoreResults"}))},o.createElement(i.Z,null,j.results.map((e=>o.createElement(d.ZP,{key:e.id},o.createElement(F,Object.assign({className:Y.pollSnippet,elevation:0,feedObj:e},N)))))))));return o.createElement(J,Object.assign({className:O()(Y.root,_)},L),K)}},39154:(e,t,a)=>{"use strict";a.d(t,{Z:()=>b});var n=a(97582),o=a(67294),r=a(90948),i=a(64666),s=a(31425),l=a(6514),c=a(61730),u=a(94184),d=a.n(u),g=a(2734),m=a(37645),p=a(93946),h=a(67564);const v="SCBaseDialog",y={root:`${v}-root`,titleRoot:`${v}-title-root`},E=(0,r.ZP)(m.Z,{name:v,slot:"Root",overridesResolver:(e,t)=>t.titleRoot})((({theme:e})=>({}))),Z=({children:e=null,onClose:t=null})=>{const a=(0,g.Z)(),n=(0,c.Z)(a.breakpoints.down("md"),{noSsr:"undefined"!=typeof window});return o.createElement(E,{className:y.titleRoot},o.createElement("span",null,e),t?o.createElement(p.Z,{"aria-label":"close",onClick:t},o.createElement(h.Z,null,n?"arrow_back":"close")):null)},S=(0,r.ZP)(i.Z,{name:v,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const b=function(e){const t=(0,g.Z)(),a=(0,c.Z)(t.breakpoints.down("md"),{noSsr:"undefined"!=typeof window}),r=a,{className:i="",title:u="",subtitle:m=null,DialogContentProps:p={dividers:!a},open:h=!1,onClose:v=null,actions:E=null,children:b,maxWidth:f="sm",scroll:N="body"}=e,O=(0,n._T)(e,["className","title","subtitle","DialogContentProps","open","onClose","actions","children","maxWidth","scroll"]);return o.createElement(S,Object.assign({className:d()(y.root,i),fullScreen:r,fullWidth:!0,open:h,onClose:v,maxWidth:f,scroll:N},O),o.createElement(Z,{onClose:v},u),m&&m,o.createElement(l.Z,Object.assign({},p),b),E&&o.createElement(s.Z,null,E))}},115:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(97582),o=a(67294),r=a(90948),i=a(5616),s=a(15861),l=a(94184),c=a.n(l),u=a(63902),d=a(29628);const g="SCBaseItem",m={root:`${g}-root`,withActions:`${g}-with-actions`,content:`${g}-content`,image:`${g}-image`,text:`${g}-text`,primary:`${g}-primary`,secondary:`${g}-secondary`,actions:`${g}-actions`},p=(0,r.ZP)(u.Z,{name:g,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const h=function(e){const t=(0,d.Z)({props:e,name:g}),{id:a=null,className:r=null,image:l=null,disableTypography:u=!1,primary:h=null,primaryTypographyProps:v={component:"span",variant:"body1"},secondary:y=null,secondaryTypographyProps:E={component:"p",variant:"body2"},actions:Z=null}=t,S=(0,n._T)(t,["id","className","image","disableTypography","primary","primaryTypographyProps","secondary","secondaryTypographyProps","actions"]);return o.createElement(p,Object.assign({id:a},S,{className:c()(m.root,r,{[m.withActions]:Boolean(Z)})}),o.createElement(i.Z,{className:m.content},l&&o.createElement(i.Z,{className:m.image},l),o.createElement(i.Z,{className:m.text},h&&(u?h:o.createElement(s.Z,Object.assign({className:m.primary},v),h)),y&&(u?y:o.createElement(s.Z,Object.assign({className:m.secondary},E),y)))),Z&&o.createElement(i.Z,{className:m.actions},Z))}},54545:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(67294);const o=(0,a(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function r(e){return n.createElement(o,Object.assign({},e))}},37024:(e,t,a)=>{"use strict";var n,o;a.d(t,{F:()=>o,r:()=>n}),function(e){e.SNIPPET="snippet",e.PREVIEW="preview",e.DETAIL="detail",e.SEARCH="search",e.SHARE="share"}(n||(n={})),function(e){e.RELEVANCE_ACTIVITIES="relevant_activities",e.RECENT_COMMENTS="recent_comments",e.FIRST_COMMENTS="first_comments",e.CONNECTIONS_COMMENTS="connections_comments"}(o||(o={}))},15927:(e,t,a)=>{"use strict";a.d(t,{Mv:()=>i,Xi:()=>r,dK:()=>o});var n=a(59219);const o={LOADING_NEXT:"_loading_next",LOADING_PREVIOUS:"_loading_previous",LOAD_NEXT_SUCCESS:"_load_next_success",LOAD_PREVIOUS_SUCCESS:"_load_previous_success",LOAD_NEXT_FAILURE:"_load_next_failure",LOAD_PREVIOUS_FAILURE:"_load_previous_failure",SET_RESULTS:"_set_results",SET_VISIBLE_ITEMS:"_set_visible_items",RESET:"_reset"};function r(e,t){var a;let r=Object.assign({},e);switch(t.type){case o.LOADING_NEXT:r=Object.assign(Object.assign({},e),{isLoadingNext:!0,errorLoadNext:null});break;case o.LOADING_PREVIOUS:r=Object.assign(Object.assign({},e),{isLoadingPrevious:!0,errorLoadPrevious:null});break;case o.LOAD_NEXT_SUCCESS:r=Object.assign(Object.assign({},e),{isLoadingNext:!1,count:t.payload.count,next:t.payload.next?t.payload.next:null,results:[...e.results,...t.payload.results],errorLoadNext:null,initialized:(null===(a=t.payload)||void 0===a?void 0:a.initialized)||!0});break;case o.LOAD_PREVIOUS_SUCCESS:r=Object.assign(Object.assign({},e),{isLoadingPrevious:!1,count:t.payload.count,previous:t.payload.previous?t.payload.previous:null,results:[...t.payload.results,...e.results],errorPreviousNext:null});break;case o.SET_RESULTS:r=Object.assign(Object.assign(Object.assign({},e),{results:[...t.payload.results]}),t.payload.count?{count:t.payload.count}:{});break;case o.SET_VISIBLE_ITEMS:r=Object.assign(Object.assign({},e),{visibleItems:t.payload.visibleItems});break;case o.LOAD_NEXT_FAILURE:r=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadNext:t.payload.error});break;case o.LOAD_PREVIOUS_FAILURE:r=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadPrevious:t.payload.error});break;case o.RESET:r={isLoadingNext:!1,next:null,results:[],count:0,errorLoadNext:null,initialized:!1}}return n.ZP.set(r.cacheKey,r),r}function i(e){let t={cacheKey:e.cacheKey?e.cacheKey:null,count:e.count?e.count:0,results:e.results?e.results:[],next:e.next?e.next:null,previous:e.previous?e.previous:null,isLoadingNext:!!e.isLoadingNext&&e.isLoadingNext,isLoadingPrevious:!!e.isLoadingPrevious&&e.isLoadingPrevious,visibleItems:e.visibleItems?e.visibleItems:null,initialized:!1};if(t.cacheKey&&n.ZP.hasKey(t.cacheKey)&&e.cacheStrategy!==n.n2.NETWORK_ONLY){const e=n.ZP.get(t.cacheKey);return Object.assign(Object.assign({},t),e)}return t}},94184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var i=o.apply(null,a);i&&e.push(i)}}else if("object"===r){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},44012:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(25719),o=a(67294),r=a(86896),i=a(680);function s(e){var t=(0,r.Z)(),a=t.formatMessage,n=t.textComponent,i=void 0===n?o.Fragment:n,s=e.id,l=e.description,c=e.defaultMessage,u=e.values,d=e.children,g=e.tagName,m=void 0===g?i:g,p=a({id:s,description:l,defaultMessage:c},u,{ignoreTag:e.ignoreTag});return"function"==typeof d?d(Array.isArray(p)?p:[p]):m?o.createElement(m,null,o.Children.toArray(p)):o.createElement(o.Fragment,null,p)}s.displayName="FormattedMessage";var l=o.memo(s,(function(e,t){var a=e.values,o=(0,n._T)(e,["values"]),r=t.values,s=(0,n._T)(t,["values"]);return(0,i.wU)(r,a)&&(0,i.wU)(o,s)}));l.displayName="MemoizedFormattedMessage";const c=l},70828:(e,t,a)=>{"use strict";function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e)){var r=e.length;for(t=0;t<r;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a)}else for(a in e)e[a]&&(o&&(o+=" "),o+=a);return o}a.d(t,{Z:()=>o});const o=function(){for(var e,t,a=0,o="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}}}]);