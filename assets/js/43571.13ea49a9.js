"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[43571],{44267:(e,t,o)=>{o.d(t,{Z:()=>_});var s=o(83117),n=o(80102),a=o(67294),l=o(63961),r=o(94780),i=o(90948),c=o(71657),u=o(1588),d=o(34867);function g(e){return(0,d.Z)("MuiCardContent",e)}(0,u.Z)("MuiCardContent",["root"]);var m=o(85893);const h=["className","component"],v=(0,i.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),_=a.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:a,component:i="div"}=o,u=(0,n.Z)(o,h),d=(0,s.Z)({},o,{component:i}),_=(e=>{const{classes:t}=e;return(0,r.Z)({root:["root"]},g,t)})(d);return(0,m.jsx)(v,(0,s.Z)({as:i,className:(0,l.Z)(_.root,a),ownerState:d,ref:t},u))}))},78462:(e,t,o)=>{o.d(t,{Z:()=>f});var s=o(80102),n=o(83117),a=o(67294),l=o(63961),r=o(94780),i=o(90948),c=o(71657),u=o(59773),d=o(1588),g=o(34867);function m(e){return(0,g.Z)("MuiList",e)}(0,d.Z)("MuiList",["root","padding","dense","subheader"]);var h=o(85893);const v=["children","className","component","dense","disablePadding","subheader"],_=(0,i.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})((({ownerState:e})=>(0,n.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),f=a.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiList"}),{children:i,className:d,component:g="ul",dense:f=!1,disablePadding:p=!1,subheader:Z}=o,y=(0,s.Z)(o,v),E=a.useMemo((()=>({dense:f})),[f]),S=(0,n.Z)({},o,{component:g,dense:f,disablePadding:p}),w=(e=>{const{classes:t,disablePadding:o,dense:s,subheader:n}=e,a={root:["root",!o&&"padding",s&&"dense",n&&"subheader"]};return(0,r.Z)(a,m,t)})(S);return(0,h.jsx)(u.Z.Provider,{value:E,children:(0,h.jsxs)(_,(0,n.Z)({as:g,className:(0,l.Z)(w.root,d),ref:t,ownerState:S},y,{children:[Z,i]}))})}))},98396:(e,t,o)=>{var s;o.d(t,{Z:()=>d});var n=o(67294),a=o(34168),l=o(20539),r=o(58974);function i(e,t,o,s,a){const[l,i]=n.useState((()=>a&&o?o(e).matches:s?s(e).matches:t));return(0,r.Z)((()=>{let t=!0;if(!o)return;const s=o(e),n=()=>{t&&i(s.matches)};return n(),s.addListener(n),()=>{t=!1,s.removeListener(n)}}),[e,o]),l}const c=(s||(s=o.t(n,2))).useSyncExternalStore;function u(e,t,o,s,a){const l=n.useCallback((()=>t),[t]),r=n.useMemo((()=>{if(a&&o)return()=>o(e).matches;if(null!==s){const{matches:t}=s(e);return()=>t}return l}),[l,e,s,a,o]),[i,u]=n.useMemo((()=>{if(null===o)return[l,()=>()=>{}];const t=o(e);return[()=>t.matches,e=>(t.addListener(e),()=>{t.removeListener(e)})]}),[l,o,e]);return c(u,i,r)}function d(e,t={}){const o=(0,a.Z)(),s="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:n=!1,matchMedia:r=(s?window.matchMedia:null),ssrMatchMedia:d=null,noSsr:g=!1}=(0,l.Z)({name:"MuiUseMediaQuery",props:t,theme:o});let m="function"==typeof e?e(o):e;m=m.replace(/^@media( ?)/m,"");return(void 0!==c?u:i)(m,n,r,d,g)}},88169:(e,t,o)=>{o.d(t,{Z:()=>Z});var s=o(83117),n=o(67294),a=o(80102),l=o(63961),r=o(94780),i=o(98216),c=o(71657),u=o(90948),d=o(1588),g=o(34867);function m(e){return(0,g.Z)("MuiSvgIcon",e)}(0,d.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=o(85893);const v=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],_=(0,u.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"inherit"!==o.color&&t[`color${(0,i.Z)(o.color)}`],t[`fontSize${(0,i.Z)(o.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var o,s,n,a,l,r,i,c,u,d,g,m,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(o=e.transitions)||null==(s=o.create)?void 0:s.call(o,"fill",{duration:null==(n=e.transitions)||null==(n=n.duration)?void 0:n.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(r=e.typography)||null==(i=r.pxToRem)?void 0:i.call(r,24))||"1.5rem",large:(null==(c=e.typography)||null==(u=c.pxToRem)?void 0:u.call(c,35))||"2.1875rem"}[t.fontSize],color:null!=(d=null==(g=(e.vars||e).palette)||null==(g=g[t.color])?void 0:g.main)?d:{action:null==(m=(e.vars||e).palette)||null==(m=m.action)?void 0:m.active,disabled:null==(h=(e.vars||e).palette)||null==(h=h.action)?void 0:h.disabled,inherit:void 0}[t.color]}})),f=n.forwardRef((function(e,t){const o=(0,c.Z)({props:e,name:"MuiSvgIcon"}),{children:u,className:d,color:g="inherit",component:f="svg",fontSize:p="medium",htmlColor:Z,inheritViewBox:y=!1,titleAccess:E,viewBox:S="0 0 24 24"}=o,w=(0,a.Z)(o,v),C=n.isValidElement(u)&&"svg"===u.type,N=(0,s.Z)({},o,{color:g,component:f,fontSize:p,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:S,hasSvgAsChild:C}),b={};y||(b.viewBox=S);const L=(e=>{const{color:t,fontSize:o,classes:s}=e,n={root:["root","inherit"!==t&&`color${(0,i.Z)(t)}`,`fontSize${(0,i.Z)(o)}`]};return(0,r.Z)(n,m,s)})(N);return(0,h.jsxs)(_,(0,s.Z)({as:f,className:(0,l.Z)(L.root,d),focusable:"false",color:Z,"aria-hidden":!E||void 0,role:E?"img":void 0,ref:t},b,w,C&&u.props,{ownerState:N,children:[C?u.props.children:u,E?(0,h.jsx)("title",{children:E}):null]}))}));f.muiName="SvgIcon";const p=f;function Z(e,t){function o(o,n){return(0,h.jsx)(p,(0,s.Z)({"data-testid":`${t}Icon`,ref:n},o,{children:e}))}return o.muiName=p.muiName,n.memo(n.forwardRef(o))}},69721:(e,t,o)=>{o.d(t,{AL:()=>l,DC:()=>S,G8:()=>y,Gp:()=>R,I$:()=>C,L4:()=>u,M7:()=>v,NX:()=>r,Nj:()=>N,Nm:()=>I,Ny:()=>i,R4:()=>L,Rg:()=>m,Tb:()=>P,X5:()=>E,Z4:()=>_,ZV:()=>w,_Z:()=>f,_j:()=>s,eg:()=>p,ht:()=>n,hu:()=>T,k5:()=>h,mK:()=>Z,oE:()=>$,ol:()=>O,t9:()=>g,u5:()=>c,wp:()=>M,wv:()=>b,xh:()=>F,zj:()=>x});const s=(e,t)=>`_fo_${t}_${e}`,n=e=>`_co_${e}`,a="_cos_",l=(e,t,o)=>`${a}${t}_${e}_${o}`,r=(e,t)=>`${a}${t}_${e}`,i=()=>"_cas_",c=e=>`_ca_${e}`,u=e=>`_inc_${e}`,d="_contr_",g=(e,t,o)=>`${d}${t}_${e}_${o}`,m=()=>"_bcms_",h=(e,t)=>`_feed_${e}_${t}`,v=e=>`_feed_st_${e}`,_=e=>`_virtualized_scroll_st_${e}`,f=e=>`_feed_spos_${e}`,p=e=>`_adv_${e}`,Z=()=>"_pmss_",y=e=>`_pms_${e}`,E="_cFolWidget_",S="_cSugWidget_",w="_cPopWidget_",C="_uFolWidget_",N="_uFoldWidget_",b="_uConWidget_",L="_uConReqWidget_",R="_uConReqSentWidget_",O="_fTrendWidget_",P="_rFeedWidget_",x="_pTrendWidget_",$="_pSugWidget_",M="_iListWidget_",F="_iSugWidget_",I="_pSugWidget_",T=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},98365:(e,t,o)=>{o.d(t,{Z:()=>m});var s=o(67294),n=o(74482),a=o(65001),l=o(24085),r=o(59219),i=o(96570),c=o(99960),u=o(69721),d=o(87620),g=o(68689);function m({id:e=null,category:t=null,cacheStrategy:o=r.n2.CACHE_FIRST}){const m=t?t.id:e,h=(0,g.LD)(),v=h.user?h.user.id:null,_=(0,u.u5)(m),f=v?t:(0,i.Kd)(t,["followed"]),[p,Z]=(0,s.useState)(o!==r.n2.NETWORK_ONLY?r.ZP.get(_,f):null),[y,E]=(0,s.useState)(null),S=(0,s.useMemo)((()=>()=>a.Z.request({url:l.Z.Category.url({id:m}),method:l.Z.Category.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[m]);return(0,s.useEffect)((()=>{m&&(!p||p&&m!==p.id)&&S().then((e=>{const t=v?e:(0,i.Kd)(e,["followed"]);Z(t),r.ZP.set(_,t)})).catch((t=>{r.ZP.delete(_),E(`Category with id ${e} not found`),c.Y.error(n.h,`Category with id ${e} not found`),c.Y.error(n.h,t.message)}))}),[m]),(0,d.F_)((()=>{if(t){const e=v?t:(0,i.Kd)(t,["followed"]);Z(e),r.ZP.set(_,e)}}),[t]),{scCategory:p,setSCCategory:Z,error:y}}},95475:(e,t,o)=>{o.d(t,{Z:()=>m});var s=o(67294),n=o(78462),a=o(90948),l=o(74808),r=o(63902),i=o(44267),c=o(97212),u=o(3928);const d={root:`${u.B}-skeleton-root`,list:`${u.B}-list`},g=(0,a.ZP)(r.Z,{name:u.B,slot:"SkeletonRoot"})((()=>({})));function m(e){return s.createElement(g,Object.assign({className:d.root},e),s.createElement(i.Z,null,s.createElement(n.Z,{className:d.list},[...Array(4)].map(((e,t)=>s.createElement(c.ZP,{key:t},s.createElement(l.Z,{elevation:0})))))))}},3928:(e,t,o)=>{o.d(t,{B:()=>s});const s="SCCategoriesSuggestionWidget"},74808:(e,t,o)=>{o.d(t,{Z:()=>g});var s=o(67294),n=o(90948),a=o(88078),l=o(2734),r=o(69417),i=o(115),c=o(40092);const u={root:`${c.B}-skeleton-root`,image:`${c.B}-image`,primary:`${c.B}-primary`,secondary:`${c.B}-secondary`,button:`${c.B}-button`,action:`${c.B}-action`},d=(0,n.ZP)(i.Z,{name:c.B,slot:"SkeletonRoot"})((()=>({})));function g(e){const t=(0,l.Z)();return s.createElement(d,Object.assign({className:u.root},e,{image:s.createElement(a.Z,{animation:"wave",variant:"rectangular",width:t.selfcommunity.category.icon.sizeMedium,height:t.selfcommunity.category.icon.sizeMedium,className:u.image}),primary:s.createElement(a.Z,{animation:"wave",height:10,width:120,className:u.primary}),secondary:s.createElement(a.Z,{animation:"wave",height:10,width:70,className:u.secondary}),actions:s.createElement(r.Z,{size:"small",variant:"outlined",disabled:!0,className:u.button},s.createElement(a.Z,{animation:"wave",height:10,width:50,className:u.action}))}))}},40092:(e,t,o)=>{o.d(t,{B:()=>s});const s="SCCategory"},42623:(e,t,o)=>{o.d(t,{Z:()=>w});var s=o(97582),n=o(67294),a=o(90948),l=o(87952),r=o(41538),i=o(98365),c=o(97265),u=o(12132),d=o(74808),g=o(75802),m=o(54490),h=o(86896),v=o(94184),_=o.n(v),f=o(29628),p=o(75427),Z=o(40092);const y=(0,m.vU)({categoryFollowers:{id:"ui.category.categoryFollowers",defaultMessage:"ui.category.categoryFollowers"}}),E={root:`${Z.B}-root`,categoryImage:`${Z.B}-category-image`,title:`${Z.B}-title`,actions:`${Z.B}-actions`},S=(0,a.ZP)(p.Z,{name:Z.B,slot:"Root"})((()=>({})));const w=function(e){const t=(0,f.Z)({props:e,name:Z.B}),{categoryId:o=null,category:a=null,className:m=null,elevation:v,autoHide:p=!1,categoryFollowButtonProps:w={},showFollowers:C=!0,ButtonBaseProps:N=null}=t,b=(0,s._T)(t,["categoryId","category","className","elevation","autoHide","categoryFollowButtonProps","showFollowers","ButtonBaseProps"]),L=(0,r.sy)(),{scCategory:R,setSCCategory:O}=(0,i.Z)({id:o,category:a}),P=(0,n.useMemo)((()=>N||{component:c.Z,to:L.url(u.CATEGORY_ROUTE_NAME,R)}),[N,L,R]),x=(0,h.Z)();return R?p?null:n.createElement(S,Object.assign({elevation:v,className:_()(E.root,m),ButtonBaseProps:P,image:n.createElement(l.Z,{alt:R.name,src:R.image_medium,variant:"square",className:E.categoryImage}),primary:R.name,secondary:C?`${x.formatMessage(y.categoryFollowers,{total:R.followers_counter})}`:R.slogan,actions:n.createElement(g.Z,Object.assign({category:R},w))},b)):n.createElement(d.Z,{elevation:v})}},75802:(e,t,o)=>{o.d(t,{Z:()=>E});var s,n=o(97582),a=o(67294),l=o(90948),r=o(59219),i=o(99960),c=o(53704),u=o(68689),d=o(98365),g=o(75459),m=o(31812),h=o(44012),v=o(94184),_=o.n(v),f=o(29628);!function(e){e.NONE="none",e.DEFAULT="default",e.FORCED="forced"}(s||(s={}));const p="SCCategoryFollowButton",Z={root:`${p}-root`},y=(0,l.ZP)(m.Z,{name:p,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const E=function(e){const t=(0,f.Z)({props:e,name:p}),{className:o,categoryId:l,category:m,onFollow:v}=t,E=(0,n._T)(t,["className","categoryId","category","onFollow"]),S=(0,c.RM)(),w=(0,u.LD)(),C=w.managers.categories,N=w.user?w.user.id:null,{scCategory:b,setSCCategory:L}=(0,d.Z)({id:l,category:m,cacheStrategy:N?r.n2.CACHE_FIRST:r.n2.STALE_WHILE_REVALIDATE}),[R,O]=(0,a.useState)(null);return(0,a.useEffect)((()=>{N&&O(C.isFollowed(b))}),[N,C.isFollowed]),!b||b&&R&&b.auto_follow===s.FORCED?null:a.createElement(y,Object.assign({size:"small",variant:"outlined",onClick:()=>{w.user?C.follow(b).then((()=>{v&&v(b,!R)})).catch((e=>{i.Y.error(g.J,e)})):S.settings.handleAnonymousAction()},loading:w.user?null===R||C.isLoading(b):null,className:_()(Z.root,o)},E),R&&w.user?a.createElement(h.Z,{defaultMessage:"ui.categoryFollowButton.unfollow",id:"ui.categoryFollowButton.unfollow"}):a.createElement(h.Z,{defaultMessage:"ui.categoryFollowButton.follow",id:"ui.categoryFollowButton.follow"}))}},43076:(e,t,o)=>{o.d(t,{Z:()=>j});var s=o(97582),n=o(67294),a=o(90948),l=o(78462),r=o(44267),i=o(15861),c=o(97212),u=o(69417),d=o(49877),g=o(59219),m=o(99960),h=o(5840),v=o(68689),_=o(66380),f=o(85472),p=o(69721),Z=o(15927),y=o(42623),E=o(74808),S=o(75459),w=o(44012),C=o(95475);const N="SCUserFollowedCategoriesWidgetSkeleton",b={root:`${N}-skeleton-root`},L=(0,a.ZP)(C.Z,{name:N,slot:"SkeletonRoot"})((()=>({})));function R(e){return n.createElement(L,Object.assign({className:b.root},e))}var O=o(94184),P=o.n(O),x=o(39154),$=o(63902),M=o(29628),F=o(54545);const I="SCUserCategoriesFollowedWidget",T={root:`${I}-root`,title:`${I}-title`,noResults:`${I}-no-results`,showMore:`${I}-show-more`,dialogRoot:`${I}-dialog-root`,endMessage:`${I}-end-message`},A=(0,a.ZP)($.Z,{name:I,slot:"Root"})((()=>({}))),B=(0,a.ZP)(x.Z,{name:I,slot:"DialogRoot"})((()=>({})));const j=function(e){const t=(0,M.Z)({props:e,name:I}),{userId:o,autoHide:a,limit:C=3,className:N,CategoryProps:b={},cacheStrategy:L=g.n2.NETWORK_ONLY,onHeightChange:O,onStateChange:x,DialogProps:$={}}=t,j=(0,s._T)(t,["userId","autoHide","limit","className","CategoryProps","cacheStrategy","onHeightChange","onStateChange","DialogProps"]),W=(0,v.LD)(),k=(0,n.useMemo)((()=>W.user&&o===W.user.id),[W.user,o]),z=(0,n.useContext)(_.Tt),D=(0,n.useMemo)((()=>f.Ao in z.preferences&&z.preferences[f.Ao].value),[z]),[U,K]=(0,n.useReducer)(Z.Xi,{isLoadingNext:!1,next:null,cacheKey:p.hu(p.X5,o),cacheStrategy:L},Z.Mv),[V,H]=(0,n.useState)(!1),X=(0,n.useMemo)((()=>()=>{U.initialized||U.isLoadingNext||d.Z.getUserFollowedCategories(o,null).then((e=>{K({type:Z.dK.LOAD_NEXT_SUCCESS,payload:{count:e.length,results:e,initialized:!0}})})).catch((e=>{K({type:Z.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),m.Y.error(S.J,e)}))}),[U.isLoadingNext,U.initialized,o,K]);(0,n.useEffect)((()=>{var e;let t;if((D||!D&&(null===(e=W.user)||void 0===e?void 0:e.id))&&(0,h.U)(o)&&void 0!==W.user)return t=setTimeout(X),()=>{t&&clearTimeout(t)}}),[W.user,D,o]),(0,n.useEffect)((()=>{O&&O()}),[U.results.length]),(0,n.useEffect)((()=>{(D||W.user)&&(0,h.U)(o)&&L===g.n2.NETWORK_ONLY&&x&&x({cacheStrategy:g.n2.CACHE_FIRST})}),[D,L,W.user,o]);const Y=e=>{if(k){const t=[...U.results],o=t.findIndex((t=>t.id===e.id));-1!==o&&(e.followed?(t[o].followers_counter=e.followers_counter-1,t[o].followed=!e.followed):(t[o].followers_counter=e.followers_counter+1,t[o].followed=!e.followed),K({type:Z.dK.SET_RESULTS,payload:{results:t}}))}},G=()=>{H((e=>!e))};if(a&&!U.count&&U.initialized||!o)return n.createElement(F.Z,null);if(!U.initialized)return n.createElement(R,null);const q=n.createElement(r.Z,null,n.createElement(i.Z,{className:T.title,variant:"h5"},n.createElement(w.Z,{id:"ui.userFollowedCategoriesWidget.title",defaultMessage:"ui.userFollowedCategoriesWidget.title",values:{total:k?U.results.filter((e=>e.followed)).length:U.count}})),U.count?n.createElement(n.Fragment,null,n.createElement(l.Z,null,U.results.slice(0,C).map((e=>n.createElement(c.ZP,{key:e.id},n.createElement(y.Z,Object.assign({elevation:0,category:e,categoryFollowButtonProps:{onFollow:Y}},b)))))),C<U.count&&n.createElement(u.Z,{className:T.showMore,onClick:G},n.createElement(w.Z,{id:"ui.userFollowedCategoriesWidget.button.showAll",defaultMessage:"ui.userFollowedCategoriesWidget.button.showAll"})),V&&n.createElement(B,Object.assign({className:T.dialogRoot,title:n.createElement(w.Z,{id:"ui.userFollowedCategoriesWidget.title",defaultMessage:"ui.userFollowedCategoriesWidget.title",values:{total:U.count}}),onClose:G,open:V,scroll:"paper"},$),n.createElement(l.Z,null,U.results.map((e=>n.createElement(c.ZP,{key:e.id},n.createElement(y.Z,Object.assign({elevation:0,category:e,categoryFollowButtonProps:{onFollow:Y}},b))))),U.isLoadingNext&&n.createElement(c.ZP,null,n.createElement(E.Z,Object.assign({elevation:0},b)))),n.createElement(i.Z,{className:T.endMessage},n.createElement(w.Z,{id:"ui.userFollowedCategoriesWidget.noMoreResults",defaultMessage:"ui.userFollowedCategoriesWidget.noMoreResults"})))):n.createElement(i.Z,{className:T.noResults,variant:"body2"},n.createElement(w.Z,{id:"ui.userFollowedCategoriesWidget.subtitle.noResults",defaultMessage:"ui.userFollowedCategoriesWidget.subtitle.noResults"})));return n.createElement(A,Object.assign({className:P()(T.root,N)},j),q)}},39154:(e,t,o)=>{o.d(t,{Z:()=>E});var s=o(97582),n=o(67294),a=o(90948),l=o(64666),r=o(31425),i=o(6514),c=o(98396),u=o(94184),d=o.n(u),g=o(2734),m=o(37645),h=o(93946),v=o(67564);const _="SCBaseDialog",f={root:`${_}-root`,titleRoot:`${_}-title-root`},p=(0,a.ZP)(m.Z,{name:_,slot:"Root",overridesResolver:(e,t)=>t.titleRoot})((({theme:e})=>({}))),Z=({children:e=null,onClose:t=null})=>{const o=(0,g.Z)(),s=(0,c.Z)(o.breakpoints.down("md"),{noSsr:"undefined"!=typeof window});return n.createElement(p,{className:f.titleRoot},n.createElement("span",null,e),t?n.createElement(h.Z,{"aria-label":"close",onClick:t},n.createElement(v.Z,null,s?"arrow_back":"close")):null)},y=(0,a.ZP)(l.Z,{name:_,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const E=function(e){const t=(0,g.Z)(),o=(0,c.Z)(t.breakpoints.down("md"),{noSsr:"undefined"!=typeof window}),a=o,{className:l="",title:u="",subtitle:m=null,DialogContentProps:h={dividers:!o},open:v=!1,onClose:_=null,actions:p=null,children:E,maxWidth:S="sm",scroll:w="body"}=e,C=(0,s._T)(e,["className","title","subtitle","DialogContentProps","open","onClose","actions","children","maxWidth","scroll"]);return n.createElement(y,Object.assign({className:d()(f.root,l),fullScreen:a,fullWidth:!0,open:v,onClose:_,maxWidth:S,scroll:w},C),n.createElement(Z,{onClose:_},u),m&&m,n.createElement(i.Z,Object.assign({},h),E),p&&n.createElement(r.Z,null,p))}},54545:(e,t,o)=>{o.d(t,{Z:()=>a});var s=o(67294);const n=(0,o(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function a(e){return s.createElement(n,Object.assign({},e))}},15927:(e,t,o)=>{o.d(t,{Mv:()=>l,Xi:()=>a,dK:()=>n});var s=o(59219);const n={LOADING_NEXT:"_loading_next",LOADING_PREVIOUS:"_loading_previous",LOAD_NEXT_SUCCESS:"_load_next_success",LOAD_PREVIOUS_SUCCESS:"_load_previous_success",LOAD_NEXT_FAILURE:"_load_next_failure",LOAD_PREVIOUS_FAILURE:"_load_previous_failure",SET_RESULTS:"_set_results",SET_VISIBLE_ITEMS:"_set_visible_items",RESET:"_reset"};function a(e,t){var o;let a=Object.assign({},e);switch(t.type){case n.LOADING_NEXT:a=Object.assign(Object.assign({},e),{isLoadingNext:!0,errorLoadNext:null});break;case n.LOADING_PREVIOUS:a=Object.assign(Object.assign({},e),{isLoadingPrevious:!0,errorLoadPrevious:null});break;case n.LOAD_NEXT_SUCCESS:a=Object.assign(Object.assign({},e),{isLoadingNext:!1,count:t.payload.count,next:t.payload.next?t.payload.next:null,results:[...e.results,...t.payload.results],errorLoadNext:null,initialized:(null===(o=t.payload)||void 0===o?void 0:o.initialized)||!0});break;case n.LOAD_PREVIOUS_SUCCESS:a=Object.assign(Object.assign({},e),{isLoadingPrevious:!1,count:t.payload.count,previous:t.payload.previous?t.payload.previous:null,results:[...t.payload.results,...e.results],errorPreviousNext:null});break;case n.SET_RESULTS:a=Object.assign(Object.assign(Object.assign({},e),{results:[...t.payload.results]}),t.payload.count?{count:t.payload.count}:{});break;case n.SET_VISIBLE_ITEMS:a=Object.assign(Object.assign({},e),{visibleItems:t.payload.visibleItems});break;case n.LOAD_NEXT_FAILURE:a=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadNext:t.payload.error});break;case n.LOAD_PREVIOUS_FAILURE:a=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadPrevious:t.payload.error});break;case n.RESET:a={isLoadingNext:!1,next:null,results:[],count:0,errorLoadNext:null,initialized:!1}}return s.ZP.set(a.cacheKey,a),a}function l(e){let t={cacheKey:e.cacheKey?e.cacheKey:null,count:e.count?e.count:0,results:e.results?e.results:[],next:e.next?e.next:null,previous:e.previous?e.previous:null,isLoadingNext:!!e.isLoadingNext&&e.isLoadingNext,isLoadingPrevious:!!e.isLoadingPrevious&&e.isLoadingPrevious,visibleItems:e.visibleItems?e.visibleItems:null,initialized:!1};if(t.cacheKey&&s.ZP.hasKey(t.cacheKey)&&e.cacheStrategy!==s.n2.NETWORK_ONLY){const e=s.ZP.get(t.cacheKey);return Object.assign(Object.assign({},t),e)}return t}},59219:(e,t,o)=>{o.d(t,{ZP:()=>n,n2:()=>s});var s;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(s||(s={}));const n=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,o={noSsr:!0}){let s;return this.values.has(e)?(s=this.values.get(e),this.values.delete(e),this.values.set(e,s)):t&&(s=t,(!this.ssr||!o.noSsr)&&this.values.set(e,s)),s}set(e,t,o={noSsr:!0}){if(!this.ssr||!o.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,o)=>{o.startsWith(e)&&this.values.delete(o)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}},5840:(e,t,o)=>{function s(e){return!isNaN(e)&&parseInt(String(Number(e)))==e&&!isNaN(parseInt(String(e),10))}o.d(t,{U:()=>s})}}]);