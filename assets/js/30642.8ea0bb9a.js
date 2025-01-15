"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[30642],{31924:(e,t,o)=>{o.d(t,{Z:()=>l});var s=o(97582),a=o(91705),i=o(24085),n=o(66821);class r{static getCategorySuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:i.Z.CategoriesSuggestion.url({}),method:i.Z.CategoriesSuggestion.method,params:e}))}static getIncubatorSuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:i.Z.GetIncubatorSuggestion.url({}),method:i.Z.GetIncubatorSuggestion.method,params:e}))}static getPollSuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:i.Z.PollSuggestion.url({}),method:i.Z.PollSuggestion.method,params:e}))}static getUserSuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:i.Z.UserSuggestion.url({}),method:i.Z.UserSuggestion.method,params:e}))}static getEventSuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:i.Z.EventSuggestion.url({}),method:i.Z.EventSuggestion.method,params:e}))}static getSearchSuggestion(e,t,o){const s=(0,n.B)({search:e});return(0,a.N)(Object.assign(Object.assign({},o),{url:`${i.Z.SearchSuggestion.url({})}?${s.toString()}`,method:i.Z.UserSuggestion.method,params:t}))}}class l{static getCategorySuggestion(e,t){return(0,s.mG)(this,void 0,void 0,(function*(){return r.getCategorySuggestion(e,t)}))}static getIncubatorSuggestion(e,t){return(0,s.mG)(this,void 0,void 0,(function*(){return r.getIncubatorSuggestion(e,t)}))}static getPollSuggestion(e,t){return(0,s.mG)(this,void 0,void 0,(function*(){return r.getPollSuggestion(e,t)}))}static getUserSuggestion(e,t){return(0,s.mG)(this,void 0,void 0,(function*(){return r.getUserSuggestion(e,t)}))}static getEventSuggestion(e,t){return(0,s.mG)(this,void 0,void 0,(function*(){return r.getEventSuggestion(e,t)}))}static getSearchSuggestion(e,t,o){return(0,s.mG)(this,void 0,void 0,(function*(){return r.getSearchSuggestion(e,t,o)}))}}},98365:(e,t,o)=>{o.d(t,{Z:()=>m});var s=o(67294),a=o(74482),i=o(24243),n=o(24085),r=o(59219),l=o(96570),c=o(99960),g=o(69721),u=o(87620),d=o(51206);function m({id:e=null,category:t=null,cacheStrategy:o=r.n2.CACHE_FIRST}){const m=t?t.id:e,y=(0,d.LD)(),h=y.user?y.user.id:null,S=(0,g.u5)(m),j=h?t:(0,l.Kd)(t,["followed"]),[O,Z]=(0,s.useState)(o!==r.n2.NETWORK_ONLY?r.ZP.get(S,j):null),[p,b]=(0,s.useState)(null),_=(0,s.useMemo)((()=>()=>i.Z.request({url:n.Z.Category.url({id:m}),method:n.Z.Category.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[m]);return(0,s.useEffect)((()=>{m&&(!O||O&&m!==O.id)&&_().then((e=>{const t=h?e:(0,l.Kd)(e,["followed"]);Z(t),r.ZP.set(S,t)})).catch((t=>{r.ZP.delete(S),b(`Category with id ${e} not found`),c.Y.error(a.h,`Category with id ${e} not found`),c.Y.error(a.h,t.message)}))}),[m]),(0,u.F_)((()=>{if(t){const e=h?t:(0,l.Kd)(t,["followed"]);Z(e),r.ZP.set(S,e)}}),[t]),{scCategory:O,setSCCategory:Z,error:p}}},95475:(e,t,o)=>{o.d(t,{Z:()=>m});var s=o(85893),a=o(78462),i=o(90948),n=o(74808),r=o(63902),l=o(44267),c=o(97212),g=o(3928);const u={root:`${g.B}-skeleton-root`,list:`${g.B}-list`},d=(0,i.ZP)(r.Z,{name:g.B,slot:"SkeletonRoot"})((()=>({})));function m(e){return(0,s.jsx)(d,Object.assign({className:u.root},e,{children:(0,s.jsx)(l.Z,{children:(0,s.jsx)(a.Z,Object.assign({className:u.list},{children:[...Array(4)].map(((e,t)=>(0,s.jsx)(c.ZP,{children:(0,s.jsx)(n.Z,{elevation:0})},t)))}))})}))}},3928:(e,t,o)=>{o.d(t,{B:()=>s});const s="SCCategoriesSuggestionWidget"},30642:(e,t,o)=>{o.d(t,{Z:()=>D});var s=o(97582),a=o(85893),i=o(67294),n=o(90948),r=o(2734),l=o(37292),c=o(44267),g=o(15861),u=o(78462),d=o(97212),m=o(25662),y=o(31924),h=o(24243),S=o(24085),j=o(51206),O=o(69721),Z=o(95475),p=o(42623),b=o(74808),_=o(44012),x=o(94184),N=o.n(x),v=o(63902),f=o(29360),E=o(54545),w=o(59219),L=o(99960),C=o(15927),I=o(39154),B=o(75459),P=o(79558),R=o(3928);const T={root:`${R.B}-root`,title:`${R.B}-title`,noResults:`${R.B}-no-results`,showMore:`${R.B}-show-more`,dialogRoot:`${R.B}-dialog-root`,endMessage:`${R.B}-end-message`},F=(0,n.ZP)(v.Z,{name:R.B,slot:"Root"})((()=>({}))),A=(0,n.ZP)(I.Z,{name:R.B,slot:"DialogRoot"})((()=>({})));const D=function(e){const t=(0,f.Z)({props:e,name:R.B}),{autoHide:o=!0,limit:n=3,className:x,CategoryProps:v={},cacheStrategy:I=w.n2.NETWORK_ONLY,onHeightChange:D,onStateChange:M,DialogProps:U={},categoryId:$}=t,K=(0,s._T)(t,["autoHide","limit","className","CategoryProps","cacheStrategy","onHeightChange","onStateChange","DialogProps","categoryId"]),k=(0,j.LD)(),[z,G]=(0,i.useReducer)(C.Xi,{isLoadingNext:!1,next:null,cacheKey:O.hu(O.DC),cacheStrategy:I,visibleItems:n},C.Mv),[W,X]=(0,i.useState)(!1),H=(0,r.Z)(),Y=(0,l.Z)(H.breakpoints.down("md")),V=(0,i.useMemo)((()=>()=>{z.initialized||z.isLoadingNext||(G({type:C.dK.LOADING_NEXT}),y.Z.getCategorySuggestion({limit:n}).then((e=>{G({type:C.dK.LOAD_NEXT_SUCCESS,payload:Object.assign(Object.assign({},e),{initialized:!0})})})).catch((e=>{G({type:C.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),L.Y.error(B.J,e)})))}),[z.isLoadingNext,z.initialized,n,G]);(0,i.useEffect)((()=>{let e;if(k.user)return e=setTimeout(V),()=>{e&&clearTimeout(e)}}),[k.user]),(0,i.useEffect)((()=>{W&&z.next&&z.results.length<=n&&z.initialized&&(G({type:C.dK.LOADING_NEXT}),y.Z.getCategorySuggestion({offset:n,limit:10}).then((e=>{G({type:C.dK.LOAD_NEXT_SUCCESS,payload:e})})).catch((e=>{G({type:C.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),L.Y.error(B.J,e)})))}),[W,z.next,z.results.length,z.initialized,n]),(0,i.useEffect)((()=>{D&&D()}),[z.results]),(0,i.useEffect)((()=>{k.user&&I===w.n2.NETWORK_ONLY&&M&&M({cacheStrategy:w.n2.CACHE_FIRST})}),[k.user]);const q=(0,i.useMemo)((()=>e=>{const t=[...z.results],o=t.findIndex((t=>t.id===e.id));-1!==o&&(e.followed?(t[o].followers_counter=e.followers_counter-1,t[o].followed=!e.followed):(t[o].followers_counter=e.followers_counter+1,t[o].followed=!e.followed),G({type:C.dK.SET_RESULTS,payload:{results:t}}))}),[G,z.count,z.results]),J=(0,i.useMemo)((()=>()=>{G({type:C.dK.LOADING_NEXT}),h.Z.request({url:z.next,method:S.Z.CategoriesSuggestion.method}).then((e=>{G({type:C.dK.LOAD_NEXT_SUCCESS,payload:e.data})}))}),[G,z.next,z.isLoadingNext,z.initialized]),Q=()=>{X((e=>!e))};if(o&&!z.count&&z.initialized||!k.user)return(0,a.jsx)(E.Z,{});if(!z.initialized)return(0,a.jsx)(Z.Z,{});const ee=(0,a.jsxs)(c.Z,{children:[(0,a.jsx)(g.Z,Object.assign({className:T.title,variant:"h5"},{children:(0,a.jsx)(_.Z,{id:"ui.categoriesSuggestionWidget.title",defaultMessage:"ui.categoriesSuggestionWidget.title"})})),z.count?(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(u.Z,{children:z.results.slice(0,z.visibleItems).map((e=>(0,a.jsx)(d.ZP,{children:(0,a.jsx)(p.Z,Object.assign({elevation:0,category:e,categoryFollowButtonProps:{onFollow:q}},v))},e.id)))}),z.count>z.visibleItems&&(0,a.jsx)(m.Z,Object.assign({className:T.showMore,onClick:Q},{children:(0,a.jsx)(_.Z,{id:"ui.categoriesSuggestionWidget.button.showAll",defaultMessage:"ui.categoriesSuggestionWidget.button.showAll"})}))]}):(0,a.jsx)(g.Z,Object.assign({className:T.noResults,variant:"body2"},{children:(0,a.jsx)(_.Z,{id:"ui.categoriesSuggestionWidget.noResults",defaultMessage:"ui.categoriesSuggestionWidget.noResults"})})),W&&(0,a.jsx)(A,Object.assign({className:T.dialogRoot,title:(0,a.jsx)(_.Z,{defaultMessage:"ui.categoriesSuggestionWidget.title",id:"ui.categoriesSuggestionWidget.title"}),onClose:Q,open:W},U,{children:(0,a.jsx)(P.Z,Object.assign({dataLength:z.results.length,next:J,hasMoreNext:Boolean(z.next),loaderNext:(0,a.jsx)(b.Z,Object.assign({elevation:0},v)),height:Y?"100%":400,endMessage:(0,a.jsx)(g.Z,Object.assign({className:T.endMessage},{children:(0,a.jsx)(_.Z,{id:"ui.categoriesSuggestionWidget.noMoreResults",defaultMessage:"ui.categoriesSuggestionWidget.noMoreResults"})}))},{children:(0,a.jsx)(u.Z,{children:z.results.map((e=>(0,a.jsx)(d.ZP,{children:(0,a.jsx)(p.Z,Object.assign({elevation:0,category:e},v,{categoryFollowButtonProps:{onFollow:q}}))},e.id)))})}))}))]});return(0,a.jsx)(F,Object.assign({className:N()(T.root,x)},K,{children:ee}))}},74808:(e,t,o)=>{o.d(t,{Z:()=>d});var s=o(85893),a=o(90948),i=o(88078),n=o(2734),r=o(25662),l=o(115),c=o(40092);const g={root:`${c.B}-skeleton-root`,image:`${c.B}-image`,primary:`${c.B}-primary`,secondary:`${c.B}-secondary`,button:`${c.B}-button`,action:`${c.B}-action`},u=(0,a.ZP)(l.Z,{name:c.B,slot:"SkeletonRoot"})((()=>({})));function d(e){const t=(0,n.Z)();return(0,s.jsx)(u,Object.assign({className:g.root},e,{image:(0,s.jsx)(i.Z,{animation:"wave",variant:"rectangular",width:t.selfcommunity.category.icon.sizeMedium,height:t.selfcommunity.category.icon.sizeMedium,className:g.image}),primary:(0,s.jsx)(i.Z,{animation:"wave",height:10,width:120,className:g.primary}),secondary:(0,s.jsx)(i.Z,{animation:"wave",height:10,width:70,className:g.secondary}),actions:(0,s.jsx)(r.Z,Object.assign({size:"small",variant:"outlined",disabled:!0,className:g.button},{children:(0,s.jsx)(i.Z,{animation:"wave",height:10,width:50,className:g.action})}))}))}},40092:(e,t,o)=>{o.d(t,{B:()=>s});const s="SCCategory"},42623:(e,t,o)=>{o.d(t,{Z:()=>E});var s=o(97582),a=o(85893),i=o(67294),n=o(90948),r=o(87952),l=o(34386),c=o(15861),g=o(41538),u=o(98365),d=o(97265),m=o(12132),y=o(29409),h=o(74808),S=o(28145),j=o(54490),O=o(86896),Z=o(94184),p=o.n(Z),b=o(29360),_=o(75427),x=o(40092);const N=(0,j.vU)({categoryFollowers:{id:"ui.category.categoryFollowers",defaultMessage:"ui.category.categoryFollowers"}}),v={root:`${x.B}-root`,categoryImage:`${x.B}-category-image`,primary:`${x.B}-primary`,secondary:`${x.B}-secondary`,title:`${x.B}-title`,followed:`${x.B}-followed`,autoFollowed:`${x.B}-auto-followed`,actions:`${x.B}-actions`},f=(0,n.ZP)(_.Z,{name:x.B,slot:"Root"})((()=>({})));const E=function(e){const t=(0,b.Z)({props:e,name:x.B}),{categoryId:o=null,category:n=null,className:j=null,elevation:Z,autoHide:_=!1,categoryFollowButtonProps:E={},showFollowers:w=!0,showTooltip:L=!1,ButtonBaseProps:C=null}=t,I=(0,s._T)(t,["categoryId","category","className","elevation","autoHide","categoryFollowButtonProps","showFollowers","showTooltip","ButtonBaseProps"]),B=(0,g.sy)(),{scCategory:P,setSCCategory:R}=(0,u.Z)({id:o,category:n}),T=(0,i.useMemo)((()=>C||{component:d.Z,to:B.url(m.CATEGORY_ROUTE_NAME,P)}),[C,B,P]),F=(0,O.Z)();return P?_?null:(0,a.jsx)(f,Object.assign({disableTypography:L,elevation:Z,className:p()(v.root,j,{[v.followed]:P.followed},{[v.autoFollowed]:P.auto_follow===y.i.FORCED}),ButtonBaseProps:T,image:(0,a.jsx)(r.Z,{alt:P.name,src:P.image_medium,variant:"square",className:v.categoryImage}),primary:(0,a.jsx)(a.Fragment,{children:L?(0,a.jsx)(l.Z,Object.assign({title:P.name},{children:(0,a.jsx)(c.Z,Object.assign({className:v.primary,component:"span",variant:"body1"},{children:P.name}))})):P.name}),secondary:(0,a.jsx)(a.Fragment,{children:L?(0,a.jsx)(c.Z,Object.assign({className:v.secondary,component:"p",variant:"body2"},{children:w?`${F.formatMessage(N.categoryFollowers,{total:P.followers_counter})}`:P.slogan})):(0,a.jsx)(a.Fragment,{children:w?`${F.formatMessage(N.categoryFollowers,{total:P.followers_counter})}`:P.slogan})}),actions:(0,a.jsx)(S.Z,Object.assign({category:P},E))},I)):(0,a.jsx)(h.Z,{elevation:Z})}},28145:(e,t,o)=>{o.d(t,{Z:()=>_});var s=o(97582),a=o(85893),i=o(67294),n=o(90948),r=o(59219),l=o(99960),c=o(62254),g=o(51206),u=o(98365),d=o(75459),m=o(96828),y=o(44012),h=o(94184),S=o.n(h),j=o(29360),O=o(29409);const Z="SCCategoryFollowButton",p={root:`${Z}-root`},b=(0,n.ZP)(m.Z,{name:Z,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const _=function(e){const t=(0,j.Z)({props:e,name:Z}),{className:o,categoryId:n,category:m,onFollow:h}=t,_=(0,s._T)(t,["className","categoryId","category","onFollow"]),x=(0,c.RM)(),N=(0,g.LD)(),v=N.managers.categories,f=N.user?N.user.id:null,{scCategory:E,setSCCategory:w}=(0,u.Z)({id:n,category:m,cacheStrategy:f?r.n2.CACHE_FIRST:r.n2.STALE_WHILE_REVALIDATE}),[L,C]=(0,i.useState)(null);return(0,i.useEffect)((()=>{f&&C(v.isFollowed(E))}),[f,v.isFollowed]),!E||E&&L&&E.auto_follow===O.i.FORCED?null:(0,a.jsx)(b,Object.assign({size:"small",variant:"outlined",onClick:()=>{N.user?v.follow(E).then((()=>{h&&h(E,!L)})).catch((e=>{l.Y.error(d.J,e)})):x.settings.handleAnonymousAction()},loading:N.user?null===L||v.isLoading(E):null,className:S()(p.root,o)},_,{children:L&&N.user?(0,a.jsx)(y.Z,{defaultMessage:"ui.categoryFollowButton.unfollow",id:"ui.categoryFollowButton.unfollow"}):(0,a.jsx)(y.Z,{defaultMessage:"ui.categoryFollowButton.follow",id:"ui.categoryFollowButton.follow"})}))}},15927:(e,t,o)=>{o.d(t,{Mv:()=>n,Xi:()=>i,dK:()=>a});var s=o(59219);const a={LOADING_NEXT:"_loading_next",LOADING_PREVIOUS:"_loading_previous",LOAD_NEXT_SUCCESS:"_load_next_success",LOAD_PREVIOUS_SUCCESS:"_load_previous_success",LOAD_NEXT_FAILURE:"_load_next_failure",LOAD_PREVIOUS_FAILURE:"_load_previous_failure",SET_RESULTS:"_set_results",SET_VISIBLE_ITEMS:"_set_visible_items",RESET:"_reset"};function i(e,t){var o;let i=Object.assign({},e);switch(t.type){case a.LOADING_NEXT:i=Object.assign(Object.assign({},e),{isLoadingNext:!0,errorLoadNext:null});break;case a.LOADING_PREVIOUS:i=Object.assign(Object.assign({},e),{isLoadingPrevious:!0,errorLoadPrevious:null});break;case a.LOAD_NEXT_SUCCESS:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,count:t.payload.count,next:t.payload.next?t.payload.next:null,results:[...e.results,...t.payload.results],errorLoadNext:null,initialized:(null===(o=t.payload)||void 0===o?void 0:o.initialized)||!0});break;case a.LOAD_PREVIOUS_SUCCESS:i=Object.assign(Object.assign({},e),{isLoadingPrevious:!1,count:t.payload.count,previous:t.payload.previous?t.payload.previous:null,results:[...t.payload.results,...e.results],errorPreviousNext:null});break;case a.SET_RESULTS:i=Object.assign(Object.assign(Object.assign({},e),{results:[...t.payload.results]}),t.payload.count?{count:t.payload.count}:{});break;case a.SET_VISIBLE_ITEMS:i=Object.assign(Object.assign({},e),{visibleItems:t.payload.visibleItems});break;case a.LOAD_NEXT_FAILURE:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadNext:t.payload.error});break;case a.LOAD_PREVIOUS_FAILURE:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadPrevious:t.payload.error});break;case a.RESET:i={isLoadingNext:!1,next:null,results:[],count:0,errorLoadNext:null,initialized:!1}}return s.ZP.set(i.cacheKey,i),i}function n(e){let t={cacheKey:e.cacheKey?e.cacheKey:null,count:e.count?e.count:0,results:e.results?e.results:[],next:e.next?e.next:null,previous:e.previous?e.previous:null,isLoadingNext:!!e.isLoadingNext&&e.isLoadingNext,isLoadingPrevious:!!e.isLoadingPrevious&&e.isLoadingPrevious,visibleItems:e.visibleItems?e.visibleItems:null,initialized:!1};if(t.cacheKey&&s.ZP.hasKey(t.cacheKey)&&e.cacheStrategy!==s.n2.NETWORK_ONLY){const e=s.ZP.get(t.cacheKey);return Object.assign(Object.assign({},t),e)}return t}},29409:(e,t,o)=>{var s;o.d(t,{i:()=>s}),function(e){e.NONE="none",e.DEFAULT="default",e.FORCED="forced"}(s||(s={}))}}]);