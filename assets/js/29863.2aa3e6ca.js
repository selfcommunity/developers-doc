"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[29863],{44267:(e,t,o)=>{o.d(t,{Z:()=>C});var r=o(83117),s=o(80102),n=o(67294),i=o(63961),a=o(94780),l=o(90948),d=o(71657),c=o(1588),u=o(34867);function g(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var m=o(85893);const h=["className","component"],y=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}}))),C=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=o,c=(0,s.Z)(o,h),u=(0,r.Z)({},o,{component:l}),C=(e=>{const{classes:t}=e;return(0,a.Z)({root:["root"]},g,t)})(u);return(0,m.jsx)(y,(0,r.Z)({as:l,className:(0,i.Z)(C.root,n),ownerState:u,ref:t},c))}))},96514:(e,t,o)=>{o.d(t,{Z:()=>C});var r=o(83117),s=o(80102),n=o(67294),i=o(98885),a=o(2734),l=o(30577),d=o(51705),c=o(85893);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function g(e){return`scale(${e}, ${e**2})`}const m={entering:{opacity:1,transform:g(1)},entered:{opacity:1,transform:"none"}},h="undefined"!=typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),y=n.forwardRef((function(e,t){const{addEndListener:o,appear:y=!0,children:C,easing:p,in:_,onEnter:v,onEntered:Z,onEntering:E,onExit:f,onExited:S,onExiting:b,style:N,timeout:O="auto",TransitionComponent:L=i.ZP}=e,T=(0,s.Z)(e,u),w=n.useRef(),P=n.useRef(),R=(0,a.Z)(),A=n.useRef(null),x=(0,d.Z)(A,C.ref,t),j=e=>t=>{if(e){const o=A.current;void 0===t?e(o):e(o,t)}},$=j(E),I=j(((e,t)=>{(0,l.n)(e);const{duration:o,delay:r,easing:s}=(0,l.C)({style:N,timeout:O,easing:p},{mode:"enter"});let n;"auto"===O?(n=R.transitions.getAutoHeightDuration(e.clientHeight),P.current=n):n=o,e.style.transition=[R.transitions.create("opacity",{duration:n,delay:r}),R.transitions.create("transform",{duration:h?n:.666*n,delay:r,easing:s})].join(","),v&&v(e,t)})),F=j(Z),U=j(b),W=j((e=>{const{duration:t,delay:o,easing:r}=(0,l.C)({style:N,timeout:O,easing:p},{mode:"exit"});let s;"auto"===O?(s=R.transitions.getAutoHeightDuration(e.clientHeight),P.current=s):s=t,e.style.transition=[R.transitions.create("opacity",{duration:s,delay:o}),R.transitions.create("transform",{duration:h?s:.666*s,delay:h?o:o||.333*s,easing:r})].join(","),e.style.opacity=0,e.style.transform=g(.75),f&&f(e)})),D=j(S);return n.useEffect((()=>()=>{clearTimeout(w.current)}),[]),(0,c.jsx)(L,(0,r.Z)({appear:y,in:_,nodeRef:A,onEnter:I,onEntered:F,onEntering:$,onExit:W,onExited:D,onExiting:U,addEndListener:e=>{"auto"===O&&(w.current=setTimeout(e,P.current||0)),o&&o(A.current,e)},timeout:"auto"===O?null:O},T,{children:(e,t)=>n.cloneElement(C,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:g(.75),visibility:"exited"!==e||_?void 0:"hidden"},m[e],N,C.props.style),ref:x},t))}))}));y.muiSupportAuto=!0;const C=y},78462:(e,t,o)=>{o.d(t,{Z:()=>p});var r=o(80102),s=o(83117),n=o(67294),i=o(63961),a=o(94780),l=o(90948),d=o(71657),c=o(59773),u=o(1588),g=o(34867);function m(e){return(0,g.Z)("MuiList",e)}(0,u.Z)("MuiList",["root","padding","dense","subheader"]);var h=o(85893);const y=["children","className","component","dense","disablePadding","subheader"],C=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})((({ownerState:e})=>(0,s.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),p=n.forwardRef((function(e,t){const o=(0,d.Z)({props:e,name:"MuiList"}),{children:l,className:u,component:g="ul",dense:p=!1,disablePadding:_=!1,subheader:v}=o,Z=(0,r.Z)(o,y),E=n.useMemo((()=>({dense:p})),[p]),f=(0,s.Z)({},o,{component:g,dense:p,disablePadding:_}),S=(e=>{const{classes:t,disablePadding:o,dense:r,subheader:s}=e,n={root:["root",!o&&"padding",r&&"dense",s&&"subheader"]};return(0,a.Z)(n,m,t)})(f);return(0,h.jsx)(c.Z.Provider,{value:E,children:(0,h.jsxs)(C,(0,s.Z)({as:g,className:(0,i.Z)(S.root,u),ref:t,ownerState:f},Z,{children:[v,l]}))})}))},98704:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(97582),s=o(24085),n=o(91705),i=o(66821);class a{static getAllCategories(e,t){const o=(0,i.B)(e);return(0,n.N)(Object.assign({url:`${s.Z.CategoryList.url({})}?${o.toString()}`,method:s.Z.CategoryList.method},t))}static searchCategory(e,t){const o=(0,i.B)(e);return(0,n.N)(Object.assign({url:`${s.Z.SearchCategory.url({})}?${o.toString()}`,method:s.Z.SearchCategory.method},t))}static createCategory(e,t){return(0,n.N)(Object.assign({url:s.Z.CreateCategory.url({}),method:s.Z.CreateCategory.method,data:e},t))}static getSpecificCategory(e,t){return(0,n.N)(Object.assign({url:s.Z.Category.url({id:e}),method:s.Z.Category.method},t))}static updateASpecificCategory(e,t,o){return(0,n.N)(Object.assign({url:s.Z.UpdateCategory.url({id:e}),method:s.Z.UpdateCategory.method,data:t},o))}static patchASpecificCategory(e,t,o){return(0,n.N)(Object.assign({url:s.Z.PatchCategory.url({id:e}),method:s.Z.PatchCategory.method,data:t},o))}static deleteASpecificCategory(e,t){return(0,n.N)(Object.assign({url:s.Z.DeleteCategory.url({id:e}),method:s.Z.DeleteCategory.method},t))}static getCategoryAudience(e,t){return(0,n.N)(Object.assign({url:s.Z.CategoryAudience.url({id:e}),method:s.Z.CategoryAudience.method},t))}static getCategoryFollowers(e,t,o){return(0,n.N)(Object.assign({url:s.Z.CategoryFollowers.url({id:e}),method:s.Z.CategoryFollowers.method,params:t},o))}static getCategoryFeed(e,t,o){return(0,n.N)(Object.assign({url:s.Z.CategoryFeed.url({id:e}),method:s.Z.CategoryFeed.method,params:t},o))}static getCategoryTrendingFeed(e,t,o){const r=(0,i.B)(t);return(0,n.N)(Object.assign({url:`${s.Z.CategoryTrendingFeed.url({id:e})}?${r.toString()}`,method:s.Z.CategoryTrendingFeed.method},o))}static getCategoryTrendingFollowers(e,t,o){return(0,n.N)(Object.assign({url:s.Z.CategoryTrendingPeople.url({id:e}),method:s.Z.CategoryTrendingPeople.method,params:t},o))}static followCategory(e,t){return(0,n.N)(Object.assign({url:s.Z.FollowCategory.url({id:e}),method:s.Z.FollowCategory.method},t))}static checkCategoryIsFollowed(e,t){return(0,n.N)(Object.assign({url:s.Z.CheckCategoryIsFollowed.url({id:e}),method:s.Z.CheckCategoryIsFollowed.method},t))}static getFollowedCategories(e,t){const o=(0,i.B)(e);return(0,n.N)(Object.assign({url:`${s.Z.CategoriesFollowed.url({})}?${o.toString()}`,method:s.Z.CategoriesFollowed.method},t))}static getPopularCategories(e,t){const o=(0,i.B)(e);return(0,n.N)(Object.assign(Object.assign({},t),{url:`${s.Z.PopularCategories.url({})}?${o.toString()}`,method:s.Z.PopularCategories.method}))}}class l{static getAllCategories(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getAllCategories(e,t)}))}static searchCategory(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.searchCategory(e,t)}))}static createCategory(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.createCategory(e,t)}))}static getSpecificCategory(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getSpecificCategory(e,t)}))}static updateASpecificCategory(e,t,o){return(0,r.mG)(this,void 0,void 0,(function*(){return a.updateASpecificCategory(e,t,o)}))}static patchASpecificCategory(e,t,o){return(0,r.mG)(this,void 0,void 0,(function*(){return a.patchASpecificCategory(e,t,o)}))}static deleteASpecificCategory(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.deleteASpecificCategory(e,t)}))}static getCategoryAudience(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getCategoryAudience(e,t)}))}static getCategoryFollowers(e,t,o){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getCategoryFollowers(e,t,o)}))}static getCategoryFeed(e,t,o){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getCategoryFeed(e,t,o)}))}static getCategoryTrendingFeed(e,t,o){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getCategoryTrendingFeed(e,t,o)}))}static getCategoryTrendingFollowers(e,t,o){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getCategoryTrendingFollowers(e,t,o)}))}static followCategory(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.followCategory(e,t)}))}static checkCategoryIsFollowed(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.checkCategoryIsFollowed(e,t)}))}static getFollowedCategories(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getFollowedCategories(e,t)}))}static getPopularCategories(e,t){return(0,r.mG)(this,void 0,void 0,(function*(){return a.getPopularCategories(e,t)}))}}},69721:(e,t,o)=>{o.d(t,{AL:()=>i,DC:()=>f,G8:()=>Z,Gp:()=>T,I$:()=>b,L4:()=>c,M7:()=>y,NX:()=>a,Nj:()=>N,Nm:()=>$,Ny:()=>l,R4:()=>L,Rg:()=>m,Tb:()=>P,X5:()=>E,Z4:()=>C,ZV:()=>S,_Z:()=>p,_j:()=>r,eg:()=>_,ht:()=>s,hu:()=>I,k5:()=>h,mK:()=>v,oE:()=>A,ol:()=>w,t9:()=>g,u5:()=>d,wp:()=>x,wv:()=>O,xh:()=>j,zj:()=>R});const r=(e,t)=>`_fo_${t}_${e}`,s=e=>`_co_${e}`,n="_cos_",i=(e,t,o)=>`${n}${t}_${e}_${o}`,a=(e,t)=>`${n}${t}_${e}`,l=()=>"_cas_",d=e=>`_ca_${e}`,c=e=>`_inc_${e}`,u="_contr_",g=(e,t,o)=>`${u}${t}_${e}_${o}`,m=()=>"_bcms_",h=(e,t)=>`_feed_${e}_${t}`,y=e=>`_feed_st_${e}`,C=e=>`_virtualized_scroll_st_${e}`,p=e=>`_feed_spos_${e}`,_=e=>`_adv_${e}`,v=()=>"_pmss_",Z=e=>`_pms_${e}`,E="_cFolWidget_",f="_cSugWidget_",S="_cPopWidget_",b="_uFolWidget_",N="_uFoldWidget_",O="_uConWidget_",L="_uConReqWidget_",T="_uConReqSentWidget_",w="_fTrendWidget_",P="_rFeedWidget_",R="_pTrendWidget_",A="_pSugWidget_",x="_iListWidget_",j="_iSugWidget_",$="_pSugWidget_",I=(e,t=void 0)=>`${e}${void 0!==t?t:""}`},98365:(e,t,o)=>{o.d(t,{Z:()=>m});var r=o(67294),s=o(74482),n=o(65001),i=o(24085),a=o(59219),l=o(96570),d=o(99960),c=o(69721),u=o(87620),g=o(68689);function m({id:e=null,category:t=null,cacheStrategy:o=a.n2.CACHE_FIRST}){const m=t?t.id:e,h=(0,g.LD)(),y=h.user?h.user.id:null,C=(0,c.u5)(m),p=y?t:(0,l.Kd)(t,["followed"]),[_,v]=(0,r.useState)(o!==a.n2.NETWORK_ONLY?a.ZP.get(C,p):null),[Z,E]=(0,r.useState)(null),f=(0,r.useMemo)((()=>()=>n.Z.request({url:i.Z.Category.url({id:m}),method:i.Z.Category.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[m]);return(0,r.useEffect)((()=>{m&&(!_||_&&m!==_.id)&&f().then((e=>{const t=y?e:(0,l.Kd)(e,["followed"]);v(t),a.ZP.set(C,t)})).catch((t=>{a.ZP.delete(C),E(`Category with id ${e} not found`),d.Y.error(s.h,`Category with id ${e} not found`),d.Y.error(s.h,t.message)}))}),[m]),(0,u.F_)((()=>{if(t){const e=y?t:(0,l.Kd)(t,["followed"]);v(e),a.ZP.set(C,e)}}),[t]),{scCategory:_,setSCCategory:v,error:Z}}},14459:(e,t,o)=>{o.d(t,{Z:()=>m});var r=o(67294),s=o(63902),n=o(78462),i=o(90948),a=o(50353),l=o(44267),d=o(97212),c=o(33584);const u={root:`${c.B}-skeleton-root`,list:`${c.B}-list`},g=(0,i.ZP)(s.Z,{name:c.B,slot:"SkeletonRoot"})((()=>({})));function m(e){return r.createElement(g,Object.assign({className:u.root},e),r.createElement(l.Z,null,r.createElement(n.Z,{className:u.list},[...Array(4)].map(((e,t)=>r.createElement(d.ZP,{key:t},r.createElement(a.Z,{elevation:0})))))))}},33584:(e,t,o)=>{o.d(t,{B:()=>r});const r="SCCategoryTrendingUsersWidget"},12673:(e,t,o)=>{o.d(t,{Z:()=>M});var r=o(97582),s=o(67294),n=o(90948),i=o(78462),a=o(2734),l=o(98396),d=o(44267),c=o(15861),u=o(97212),g=o(69417),m=o(63902),h=o(98704),y=o(65001),C=o(24085),p=o(69721),_=o(68689),v=o(66380),Z=o(85472),E=o(98365),f=o(44012),S=o(37089),b=o(50353),N=o(94184),O=o.n(N),L=o(39154),T=o(79558),w=o(14459),P=o(29628),R=o(54545),A=o(59219),x=o(99960),j=o(5840),$=o(15927),I=o(75459),F=o(33584);const U={root:`${F.B}-root`,title:`${F.B}-title`,noResults:`${F.B}-no-results`,showMore:`${F.B}-show-more`,dialogRoot:`${F.B}-dialog-root`,endMessage:`${F.B}-end-message`},W=(0,n.ZP)(m.Z,{name:F.B,slot:"Root"})((()=>({}))),D=(0,n.ZP)(L.Z,{name:F.B,slot:"DialogRoot"})((()=>({})));const M=function(e){const t=(0,P.Z)({props:e,name:F.B}),{className:o=null,categoryId:n=null,autoHide:m=null,limit:N=3,UserProps:L={},cacheStrategy:M=A.n2.CACHE_FIRST,onHeightChange:k,onStateChange:K,DialogProps:G={}}=t,B=(0,r._T)(t,["className","categoryId","autoHide","limit","UserProps","cacheStrategy","onHeightChange","onStateChange","DialogProps"]),[X,z]=(0,s.useReducer)($.Xi,{isLoadingNext:!1,next:null,cacheKey:p.hu(p.zj,n),cacheStrategy:M,visibleItems:N},$.Mv),[H,V]=(0,s.useState)(!1),Y=(0,_.LD)(),q=(0,v.ko)(),J=(0,s.useMemo)((()=>Z.Ao in q.preferences&&q.preferences[Z.Ao].value),[q]),Q=(0,a.Z)(),ee=(0,l.Z)(Q.breakpoints.down("md")),{scCategory:te}=(0,E.Z)({id:n}),oe=te?te.id:null,re=(0,s.useMemo)((()=>()=>{X.initialized||X.isLoadingNext||(z({type:$.dK.LOADING_NEXT}),h.Z.getCategoryTrendingFollowers(oe,{limit:N}).then((e=>{z({type:$.dK.LOAD_NEXT_SUCCESS,payload:Object.assign(Object.assign({},e),{initialized:!0})})})).catch((e=>{z({type:$.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),x.Y.error(I.J,e)})))}),[oe,X.isLoadingNext,X.initialized,N,z]);(0,s.useEffect)((()=>{var e;let t;if(void 0!==Y.user&&oe&&(J||!J&&(null===(e=Y.user)||void 0===e?void 0:e.id)))return t=setTimeout(re),()=>{t&&clearTimeout(t)}}),[oe,Y.user,J]),(0,s.useEffect)((()=>{H&&X.next&&X.results.length===N&&X.initialized&&(z({type:$.dK.LOADING_NEXT}),h.Z.getCategoryTrendingFollowers(oe,{offset:N,limit:10}).then((e=>{z({type:$.dK.LOAD_NEXT_SUCCESS,payload:e})})).catch((e=>{z({type:$.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),x.Y.error(I.J,e)})))}),[H,N,X.next,X.initialized,X.results.length,oe]),(0,s.useEffect)((()=>{k&&k()}),[X.results]),(0,s.useEffect)((()=>{(J||Y.user)&&(0,j.U)(oe)&&M===A.n2.NETWORK_ONLY&&K&&K({cacheStrategy:A.n2.CACHE_FIRST})}),[J,M,oe,Y.user]);const se=(0,s.useMemo)((()=>()=>{z({type:$.dK.LOADING_NEXT}),y.Z.request({url:X.next,method:C.Z.CategoryTrendingPeople.method}).then((e=>{z({type:$.dK.LOAD_NEXT_SUCCESS,payload:e.data})}))}),[z,X.next]),ne=()=>{V((e=>!e))};if(!J&&!Y.user||m&&!X.count&&X.initialized)return s.createElement(R.Z,null);if(!X.initialized)return s.createElement(w.Z,null);const ie=s.createElement(d.Z,null,s.createElement(c.Z,{className:U.title,variant:"h5"},s.createElement(f.Z,{id:"ui.categoryTrendingUsersWidget.title",defaultMessage:"ui.categoryTrendingUsersWidget.title"})),X.count?s.createElement(s.Fragment,null,s.createElement(i.Z,null,X.results.slice(0,X.visibleItems).map((e=>s.createElement(u.ZP,{key:e.id},s.createElement(S.Z,Object.assign({elevation:0,user:e},L)))))),X.count>X.visibleItems&&s.createElement(g.Z,{className:U.showMore,onClick:ne},s.createElement(f.Z,{id:"ui.categoryTrendingUsersWidget.button.showAll",defaultMessage:"ui.categoryTrendingUsersWidget.button.showAll"}))):s.createElement(c.Z,{className:U.noResults,variant:"body2"},s.createElement(f.Z,{id:"ui.categoryTrendingUsersWidget.noResults",defaultMessage:"ui.categoryTrendingUsersWidget.noResults"})),H&&s.createElement(D,Object.assign({className:U.dialogRoot,title:s.createElement(f.Z,{defaultMessage:"ui.categoryTrendingUsersWidget.title",id:"ui.categoryTrendingUsersWidget.title",values:{total:X.count}}),onClose:ne,open:H},G),s.createElement(T.Z,{dataLength:X.results.length,next:se,hasMoreNext:Boolean(X.next),loaderNext:s.createElement(b.Z,Object.assign({elevation:0},L)),height:ee?"100%":400,endMessage:s.createElement(c.Z,{className:U.endMessage},s.createElement(f.Z,{id:"ui.categoryTrendingUsersWidget.noMoreResults",defaultMessage:"ui.categoryTrendingUsersWidget.noMoreResults"}))},s.createElement(i.Z,null,X.results.map((e=>s.createElement(u.ZP,{key:e.id},s.createElement(S.Z,Object.assign({elevation:0,user:e},L)))))))));return s.createElement(W,Object.assign({className:O()(U.root,o)},B),ie)}},39154:(e,t,o)=>{o.d(t,{Z:()=>E});var r=o(97582),s=o(67294),n=o(90948),i=o(64666),a=o(31425),l=o(6514),d=o(98396),c=o(94184),u=o.n(c),g=o(2734),m=o(37645),h=o(93946),y=o(67564);const C="SCBaseDialog",p={root:`${C}-root`,titleRoot:`${C}-title-root`},_=(0,n.ZP)(m.Z,{name:C,slot:"Root",overridesResolver:(e,t)=>t.titleRoot})((({theme:e})=>({}))),v=({children:e=null,onClose:t=null})=>{const o=(0,g.Z)(),r=(0,d.Z)(o.breakpoints.down("md"),{noSsr:"undefined"!=typeof window});return s.createElement(_,{className:p.titleRoot},s.createElement("span",null,e),t?s.createElement(h.Z,{"aria-label":"close",onClick:t},s.createElement(y.Z,null,r?"arrow_back":"close")):null)},Z=(0,n.ZP)(i.Z,{name:C,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const E=function(e){const t=(0,g.Z)(),o=(0,d.Z)(t.breakpoints.down("md"),{noSsr:"undefined"!=typeof window}),n=o,{className:i="",title:c="",subtitle:m=null,DialogContentProps:h={dividers:!o},open:y=!1,onClose:C=null,actions:_=null,children:E,maxWidth:f="sm",scroll:S="body"}=e,b=(0,r._T)(e,["className","title","subtitle","DialogContentProps","open","onClose","actions","children","maxWidth","scroll"]);return s.createElement(Z,Object.assign({className:u()(p.root,i),fullScreen:n,fullWidth:!0,open:y,onClose:C,maxWidth:f,scroll:S},b),s.createElement(v,{onClose:C},c),m&&m,s.createElement(l.Z,Object.assign({},h),E),_&&s.createElement(a.Z,null,_))}},54545:(e,t,o)=>{o.d(t,{Z:()=>n});var r=o(67294);const s=(0,o(90948).ZP)("div",{name:"SCHiddenPlaceholder",slot:"Root",overridesResolver:(e,t)=>[t.root]})((()=>({height:1,width:"100%",display:"none"})));function n(e){return r.createElement(s,Object.assign({},e))}},15927:(e,t,o)=>{o.d(t,{Mv:()=>i,Xi:()=>n,dK:()=>s});var r=o(59219);const s={LOADING_NEXT:"_loading_next",LOADING_PREVIOUS:"_loading_previous",LOAD_NEXT_SUCCESS:"_load_next_success",LOAD_PREVIOUS_SUCCESS:"_load_previous_success",LOAD_NEXT_FAILURE:"_load_next_failure",LOAD_PREVIOUS_FAILURE:"_load_previous_failure",SET_RESULTS:"_set_results",SET_VISIBLE_ITEMS:"_set_visible_items",RESET:"_reset"};function n(e,t){var o;let n=Object.assign({},e);switch(t.type){case s.LOADING_NEXT:n=Object.assign(Object.assign({},e),{isLoadingNext:!0,errorLoadNext:null});break;case s.LOADING_PREVIOUS:n=Object.assign(Object.assign({},e),{isLoadingPrevious:!0,errorLoadPrevious:null});break;case s.LOAD_NEXT_SUCCESS:n=Object.assign(Object.assign({},e),{isLoadingNext:!1,count:t.payload.count,next:t.payload.next?t.payload.next:null,results:[...e.results,...t.payload.results],errorLoadNext:null,initialized:(null===(o=t.payload)||void 0===o?void 0:o.initialized)||!0});break;case s.LOAD_PREVIOUS_SUCCESS:n=Object.assign(Object.assign({},e),{isLoadingPrevious:!1,count:t.payload.count,previous:t.payload.previous?t.payload.previous:null,results:[...t.payload.results,...e.results],errorPreviousNext:null});break;case s.SET_RESULTS:n=Object.assign(Object.assign(Object.assign({},e),{results:[...t.payload.results]}),t.payload.count?{count:t.payload.count}:{});break;case s.SET_VISIBLE_ITEMS:n=Object.assign(Object.assign({},e),{visibleItems:t.payload.visibleItems});break;case s.LOAD_NEXT_FAILURE:n=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadNext:t.payload.error});break;case s.LOAD_PREVIOUS_FAILURE:n=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadPrevious:t.payload.error});break;case s.RESET:n={isLoadingNext:!1,next:null,results:[],count:0,errorLoadNext:null,initialized:!1}}return r.ZP.set(n.cacheKey,n),n}function i(e){let t={cacheKey:e.cacheKey?e.cacheKey:null,count:e.count?e.count:0,results:e.results?e.results:[],next:e.next?e.next:null,previous:e.previous?e.previous:null,isLoadingNext:!!e.isLoadingNext&&e.isLoadingNext,isLoadingPrevious:!!e.isLoadingPrevious&&e.isLoadingPrevious,visibleItems:e.visibleItems?e.visibleItems:null,initialized:!1};if(t.cacheKey&&r.ZP.hasKey(t.cacheKey)&&e.cacheStrategy!==r.n2.NETWORK_ONLY){const e=r.ZP.get(t.cacheKey);return Object.assign(Object.assign({},t),e)}return t}},59219:(e,t,o)=>{o.d(t,{ZP:()=>s,n2:()=>r});var r;!function(e){e.CACHE_FIRST="Cache-first",e.NETWORK_ONLY="Network-only",e.STALE_WHILE_REVALIDATE="Stale-While-Revalidate"}(r||(r={}));const s=new class{constructor(e=1e4){this.values=new Map,this.maxEntries=e,this.ssr="undefined"==typeof window,this.ssr||(window.__viewSCCache=this.values)}get(e,t,o={noSsr:!0}){let r;return this.values.has(e)?(r=this.values.get(e),this.values.delete(e),this.values.set(e,r)):t&&(r=t,(!this.ssr||!o.noSsr)&&this.values.set(e,r)),r}set(e,t,o={noSsr:!0}){if(!this.ssr||!o.noSsr){if(this.values.size>=this.maxEntries){const e=this.values.keys().next().value;this.values.delete(e)}this.values.set(e,t)}}hasKey(e){return this.values.has(e)}delete(e){this.values.has(e)&&this.values.delete(e)}deleteKeys(e){e.forEach((e=>{this.values.has(e)&&this.values.delete(e)}))}deleteKeysWithPrefix(e){this.values.forEach(((t,o)=>{o.startsWith(e)&&this.values.delete(o)}))}clean(){this.values=new Map}evaluate(){console.log(this.values)}}},5840:(e,t,o)=>{function r(e){return!isNaN(e)&&parseInt(String(Number(e)))==e&&!isNaN(parseInt(String(e),10))}o.d(t,{U:()=>r})}}]);