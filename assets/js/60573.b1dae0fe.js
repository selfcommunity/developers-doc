"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[60573],{10155:(e,t,n)=>{n.d(t,{Z:()=>Z});var o=n(80102),a=n(83117),r=n(67294),s=n(63961),i=n(94780),l=n(28628),c=n(90948),u=n(1588),m=n(34867);function g(e){return(0,m.ZP)("MuiToolbar",e)}(0,u.Z)("MuiToolbar",["root","gutters","regular","dense"]);var d=n(85893);const E=["className","component","disableGutters","variant"],p=(0,c.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableGutters&&t.gutters,t[n.variant]]}})((({theme:e,ownerState:t})=>(0,a.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48})),(({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar)),Z=r.forwardRef((function(e,t){const n=(0,l.i)({props:e,name:"MuiToolbar"}),{className:r,component:c="div",disableGutters:u=!1,variant:m="regular"}=n,Z=(0,o.Z)(n,E),S=(0,a.Z)({},n,{component:c,disableGutters:u,variant:m}),f=(e=>{const{classes:t,disableGutters:n,variant:o}=e,a={root:["root",!n&&"gutters",o]};return(0,i.Z)(a,g,t)})(S);return(0,d.jsx)(p,(0,a.Z)({as:c,className:(0,s.Z)(f.root,r),ref:t,ownerState:S},Z))}))},31924:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(97582),a=n(91705),r=n(24085),s=n(66821);class i{static getCategorySuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:r.Z.CategoriesSuggestion.url({}),method:r.Z.CategoriesSuggestion.method,params:e}))}static getIncubatorSuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:r.Z.GetIncubatorSuggestion.url({}),method:r.Z.GetIncubatorSuggestion.method,params:e}))}static getPollSuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:r.Z.PollSuggestion.url({}),method:r.Z.PollSuggestion.method,params:e}))}static getUserSuggestion(e,t){return(0,a.N)(Object.assign(Object.assign({},t),{url:r.Z.UserSuggestion.url({}),method:r.Z.UserSuggestion.method,params:e}))}static getSearchSuggestion(e,t,n){const o=(0,s.B)({search:e});return(0,a.N)(Object.assign(Object.assign({},n),{url:`${r.Z.SearchSuggestion.url({})}?${o.toString()}`,method:r.Z.UserSuggestion.method,params:t}))}}class l{static getCategorySuggestion(e,t){return(0,o.mG)(this,void 0,void 0,(function*(){return i.getCategorySuggestion(e,t)}))}static getIncubatorSuggestion(e,t){return(0,o.mG)(this,void 0,void 0,(function*(){return i.getIncubatorSuggestion(e,t)}))}static getPollSuggestion(e,t){return(0,o.mG)(this,void 0,void 0,(function*(){return i.getPollSuggestion(e,t)}))}static getUserSuggestion(e,t){return(0,o.mG)(this,void 0,void 0,(function*(){return i.getUserSuggestion(e,t)}))}static getSearchSuggestion(e,t,n){return(0,o.mG)(this,void 0,void 0,(function*(){return i.getSearchSuggestion(e,t,n)}))}}},98365:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(67294),a=n(74482),r=n(24243),s=n(24085),i=n(59219),l=n(96570),c=n(99960),u=n(69721),m=n(87620),g=n(13391);function d({id:e=null,category:t=null,cacheStrategy:n=i.n2.CACHE_FIRST}){const d=t?t.id:e,E=(0,g.LD)(),p=E.user?E.user.id:null,Z=(0,u.u5)(d),S=p?t:(0,l.Kd)(t,["followed"]),[f,v]=(0,o.useState)(n!==i.n2.NETWORK_ONLY?i.ZP.get(Z,S):null),[y,O]=(0,o.useState)(null),w=(0,o.useMemo)((()=>()=>r.Z.request({url:s.Z.Category.url({id:d}),method:s.Z.Category.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[d]);return(0,o.useEffect)((()=>{d&&(!f||f&&d!==f.id)&&w().then((e=>{const t=p?e:(0,l.Kd)(e,["followed"]);v(t),i.ZP.set(Z,t)})).catch((t=>{i.ZP.delete(Z),O(`Category with id ${e} not found`),c.Y.error(a.h,`Category with id ${e} not found`),c.Y.error(a.h,t.message)}))}),[d]),(0,m.F_)((()=>{if(t){const e=p?t:(0,l.Kd)(t,["followed"]);v(e),i.ZP.set(Z,e)}}),[t]),{scCategory:f,setSCCategory:v,error:y}}},74808:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(67294),a=n(90948),r=n(88078),s=n(2734),i=n(25662),l=n(115),c=n(40092);const u={root:`${c.B}-skeleton-root`,image:`${c.B}-image`,primary:`${c.B}-primary`,secondary:`${c.B}-secondary`,button:`${c.B}-button`,action:`${c.B}-action`},m=(0,a.ZP)(l.Z,{name:c.B,slot:"SkeletonRoot"})((()=>({})));function g(e){const t=(0,s.Z)();return o.createElement(m,Object.assign({className:u.root},e,{image:o.createElement(r.Z,{animation:"wave",variant:"rectangular",width:t.selfcommunity.category.icon.sizeMedium,height:t.selfcommunity.category.icon.sizeMedium,className:u.image}),primary:o.createElement(r.Z,{animation:"wave",height:10,width:120,className:u.primary}),secondary:o.createElement(r.Z,{animation:"wave",height:10,width:70,className:u.secondary}),actions:o.createElement(i.Z,{size:"small",variant:"outlined",disabled:!0,className:u.button},o.createElement(r.Z,{animation:"wave",height:10,width:50,className:u.action}))}))}},40092:(e,t,n)=>{n.d(t,{B:()=>o});const o="SCCategory"},42623:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(97582),a=n(67294),r=n(90948),s=n(87952),i=n(34386),l=n(15861),c=n(41538),u=n(98365),m=n(97265),g=n(12132),d=n(29409),E=n(74808),p=n(28145),Z=n(54490),S=n(86896),f=n(94184),v=n.n(f),y=n(29360),O=n(75427),w=n(40092);const R=(0,Z.vU)({categoryFollowers:{id:"ui.category.categoryFollowers",defaultMessage:"ui.category.categoryFollowers"}}),N={root:`${w.B}-root`,categoryImage:`${w.B}-category-image`,primary:`${w.B}-primary`,secondary:`${w.B}-secondary`,title:`${w.B}-title`,followed:`${w.B}-followed`,autoFollowed:`${w.B}-auto-followed`,actions:`${w.B}-actions`},_=(0,r.ZP)(O.Z,{name:w.B,slot:"Root"})((()=>({})));const h=function(e){const t=(0,y.Z)({props:e,name:w.B}),{categoryId:n=null,category:r=null,className:Z=null,elevation:f,autoHide:O=!1,categoryFollowButtonProps:h={},showFollowers:I=!0,showTooltip:C=!1,ButtonBaseProps:B=null}=t,M=(0,o._T)(t,["categoryId","category","className","elevation","autoHide","categoryFollowButtonProps","showFollowers","showTooltip","ButtonBaseProps"]),P=(0,c.sy)(),{scCategory:b,setSCCategory:T}=(0,u.Z)({id:n,category:r}),k=(0,a.useMemo)((()=>B||{component:m.Z,to:P.url(g.CATEGORY_ROUTE_NAME,b)}),[B,P,b]),F=(0,S.Z)();return b?O?null:a.createElement(_,Object.assign({disableTypography:C,elevation:f,className:v()(N.root,Z,{[N.followed]:b.followed},{[N.autoFollowed]:b.auto_follow===d.i.FORCED}),ButtonBaseProps:k,image:a.createElement(s.Z,{alt:b.name,src:b.image_medium,variant:"square",className:N.categoryImage}),primary:a.createElement(a.Fragment,null,C?a.createElement(i.Z,{title:b.name},a.createElement(l.Z,{className:N.primary,component:"span",variant:"body1"},b.name)):b.name),secondary:a.createElement(a.Fragment,null,C?a.createElement(l.Z,{className:N.secondary,component:"p",variant:"body2"},I?`${F.formatMessage(R.categoryFollowers,{total:b.followers_counter})}`:b.slogan):a.createElement(a.Fragment,null,I?`${F.formatMessage(R.categoryFollowers,{total:b.followers_counter})}`:b.slogan)),actions:a.createElement(p.Z,Object.assign({category:b},h))},M)):a.createElement(E.Z,{elevation:f})}},28145:(e,t,n)=>{n.d(t,{Z:()=>O});var o=n(97582),a=n(67294),r=n(90948),s=n(59219),i=n(99960),l=n(76171),c=n(13391),u=n(98365),m=n(75459),g=n(66090),d=n(44012),E=n(94184),p=n.n(E),Z=n(29360),S=n(29409);const f="SCCategoryFollowButton",v={root:`${f}-root`},y=(0,r.ZP)(g.Z,{name:f,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const O=function(e){const t=(0,Z.Z)({props:e,name:f}),{className:n,categoryId:r,category:g,onFollow:E}=t,O=(0,o._T)(t,["className","categoryId","category","onFollow"]),w=(0,l.RM)(),R=(0,c.LD)(),N=R.managers.categories,_=R.user?R.user.id:null,{scCategory:h,setSCCategory:I}=(0,u.Z)({id:r,category:g,cacheStrategy:_?s.n2.CACHE_FIRST:s.n2.STALE_WHILE_REVALIDATE}),[C,B]=(0,a.useState)(null);return(0,a.useEffect)((()=>{_&&B(N.isFollowed(h))}),[_,N.isFollowed]),!h||h&&C&&h.auto_follow===S.i.FORCED?null:a.createElement(y,Object.assign({size:"small",variant:"outlined",onClick:()=>{R.user?N.follow(h).then((()=>{E&&E(h,!C)})).catch((e=>{i.Y.error(m.J,e)})):w.settings.handleAnonymousAction()},loading:R.user?null===C||N.isLoading(h):null,className:p()(v.root,n)},O),C&&R.user?a.createElement(d.Z,{defaultMessage:"ui.categoryFollowButton.unfollow",id:"ui.categoryFollowButton.unfollow"}):a.createElement(d.Z,{defaultMessage:"ui.categoryFollowButton.follow",id:"ui.categoryFollowButton.follow"}))}},47634:(e,t,n)=>{n.d(t,{ZP:()=>J});var o=n(97582),a=n(67294),r=n(90948),s=n(93946),i=n(58826),l=n(67564),c=n(94253),u=n(67720),m=n(78462),g=n(94184),d=n.n(g),E=n(29360),p=n(88529),Z=n(15861),S=n(25662),f=n(83117),v=n(80102),y=n(98885),O=n(2734),w=n(30577),R=n(51705),N=n(85893);const _=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],h={entering:{transform:"none"},entered:{transform:"none"}},I=a.forwardRef((function(e,t){const n=(0,O.Z)(),o={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:i,easing:l,in:c,onEnter:u,onEntered:m,onEntering:g,onExit:d,onExited:E,onExiting:p,style:Z,timeout:S=o,TransitionComponent:I=y.ZP}=e,C=(0,v.Z)(e,_),B=a.useRef(null),M=(0,R.Z)(B,i.ref,t),P=e=>t=>{if(e){const n=B.current;void 0===t?e(n):e(n,t)}},b=P(g),T=P(((e,t)=>{(0,w.n)(e);const o=(0,w.C)({style:Z,timeout:S,easing:l},{mode:"enter"});e.style.webkitTransition=n.transitions.create("transform",o),e.style.transition=n.transitions.create("transform",o),u&&u(e,t)})),k=P(m),F=P(p),A=P((e=>{const t=(0,w.C)({style:Z,timeout:S,easing:l},{mode:"exit"});e.style.webkitTransition=n.transitions.create("transform",t),e.style.transition=n.transitions.create("transform",t),d&&d(e)})),U=P(E);return(0,N.jsx)(I,(0,f.Z)({appear:s,in:c,nodeRef:B,onEnter:T,onEntered:k,onEntering:b,onExit:A,onExited:U,onExiting:F,addEndListener:e=>{r&&r(B.current,e)},timeout:S},C,{children:(e,t)=>a.cloneElement(i,(0,f.Z)({style:(0,f.Z)({transform:"scale(0)",visibility:"exited"!==e||c?void 0:"hidden"},h[e],Z,i.props.style),ref:M},t))}))}));var C=n(97212),B=n(58952),M=n(41538),P=n(97265),b=n(12132),T=n(42623),k=n(44012),F=n(49145);const A="SCDefaultDrawerContent",U={root:`${A}-root`},L=(0,r.ZP)(c.Z,{name:A,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));function $(e){const t=(0,E.Z)({props:e,name:A}),{className:n,CategoryItemProps:r={showTooltip:!0}}=t,s=(0,o._T)(t,["className","CategoryItemProps"]),{categories:i}=(0,B.Z)(),[l,c]=(0,a.useState)([]),u=(0,M.sy)(),[m,g]=(0,a.useState)({});(0,a.useEffect)((()=>{c((0,F.p9)(i,"order"))}),[i]);return a.createElement(L,Object.assign({className:d()(n,U.root)},s),a.createElement(Z.Z,{variant:"subtitle1"},a.createElement("span",null,a.createElement(k.Z,{id:"ui.navigationMenuIconButton.defaultDrawerContent.category.title",defaultMessage:"ui.navigationMenuIconButton.defaultDrawerContent.category.title"}))," ",a.createElement(S.Z,{variant:"text",component:P.Z,color:"secondary",to:u.url(b.CATEGORIES_LIST_ROUTE_NAME,{})},a.createElement(k.Z,{id:"ui.navigationMenuIconButton.defaultDrawerContent.category.seeAll",defaultMessage:"ui.navigationMenuIconButton.defaultDrawerContent.category.seeAll"}))),l.map(((e,t)=>{return a.createElement(I,{in:!0,style:{transform:m[e.id]&&"scale(1.05)"},key:t},a.createElement(C.ZP,{key:e.id},a.createElement(T.Z,Object.assign({ButtonBaseProps:{component:P.Z,to:u.url(b.CATEGORY_ROUTE_NAME,e)},elevation:0,category:e,actions:null},r,(n=()=>(e=>{g((t=>Object.assign(Object.assign({},t),{[e]:!0})))})(e.id),o=()=>(e=>{g((t=>Object.assign(Object.assign({},t),{[e]:!1})))})(e.id),{onMouseEnter:n,onMouseLeave:o,onTouchStart:n,onTouchMove:o})))));var n,o})))}var j=n(66380),G=n(85472);const D="SCDefaultHeaderContent",x={root:`${D}-root`},Y=(0,r.ZP)(c.Z,{name:D,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));function H(e){const t=(0,E.Z)({props:e,name:D}),{className:n}=t,r=(0,o._T)(t,["className"]),s=(0,M.sy)(),i=(0,j.ko)(),l=(0,a.useMemo)((()=>G.dL in i.preferences?i.preferences[G.dL].value:null),[i.preferences]);return a.createElement(Y,Object.assign({className:d()(n,x.root)},r),a.createElement(P.Z,{to:s.url(b.HOME_ROUTE_NAME,{})},a.createElement("img",{src:l,alt:"logo"})))}var W=n(13391);const z="SCNavigationMenuIconButton",K={root:`${z}-root`,logo:`${z}-logo`,drawerRoot:`${z}-drawer-root`,drawerHeader:`${z}-drawer-header`,drawerHeaderAction:`${z}-drawer-header-action`,drawerContent:`${z}-drawer-content`},V=(0,r.ZP)(s.Z,{name:z,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),q=(0,r.ZP)(i.ZP,{name:z,slot:"Root",overridesResolver:(e,t)=>t.drawerRoot})((({theme:e})=>({})));const J=function(e){var t;const n=(0,E.Z)({props:e,name:z}),{className:r=null,DrawerProps:i={anchor:"left"},drawerHeaderContent:g=a.createElement(H,null),drawerContent:Z=a.createElement($,null),ScrollContainerProps:S={}}=n,f=(0,o._T)(n,["className","DrawerProps","drawerHeaderContent","drawerContent","ScrollContainerProps"]),[v,y]=(0,a.useState)(null),{preferences:O}=(0,j.ko)(),w=(0,W.LD)(),R=(0,a.useCallback)((e=>{y(e.currentTarget)}),[]),N=(0,a.useCallback)((()=>{y(null)}),[]);return O[G.Ao].value||(null===(t=w.user)||void 0===t?void 0:t.id)?a.createElement(a.Fragment,null,a.createElement(V,Object.assign({className:d()(K.root,r)},f,{onClick:R}),a.createElement(l.Z,null,"menu")),a.createElement(q,Object.assign({className:K.drawerRoot},i,{open:Boolean(v),onClose:N}),a.createElement(c.Z,{className:K.drawerHeader},g,a.createElement(s.Z,{className:K.drawerHeaderAction,onClick:N},a.createElement(l.Z,null,"close"))),a.createElement(u.Z,null),a.createElement(p.Z,Object.assign({},S),a.createElement(m.Z,{className:K.drawerContent,onClick:N},Z)))):null}},29664:(e,t,n)=>{n.d(t,{Z:()=>F});var o=n(97582),a=n(67294),r=n(90948),s=n(93946),i=n(44652),l=n(25464),c=n(2734),u=n(37292),m=n(97212),g=n(98619),d=n(67720),E=n(18972),p=n(67564),Z=n(78462),S=n(85472),f=n(13391),v=n(65580),y=n(41538),O=n(66380),w=n(97265),R=n(12132),N=n(94184),_=n.n(N),h=n(29360),I=n(44012),C=n(49877);const B="SCNavigationSettingsIconButton",M={root:`${B}-root`,drawerRoot:`${B}-drawer-root`,menuRoot:`${B}-menu-root`,paper:`${B}-paper`,item:`${B}-item`},P=(0,r.ZP)(s.Z,{name:B,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({}))),b=(0,r.ZP)(i.Z,{name:B,slot:"Root",overridesResolver:(e,t)=>t.drawerRoot})((()=>({}))),T=(0,r.ZP)(l.Z,{name:B,slot:"Root",overridesResolver:(e,t)=>t.menuRoot})((()=>({}))),k=[S.$0,S.y1,S.Ow,S.v0];const F=function(e){const t=(0,h.Z)({props:e,name:B}),{className:n=null,items:r=[]}=t,s=(0,o._T)(t,["className","items"]),[i,l]=(0,a.useState)(null),N=(0,f.LD)(),F=(0,a.useMemo)((()=>v.GJ(N.user)),[N.user]),A=(0,a.useMemo)((()=>v.vJ(N.user)),[N.user]),U=(0,c.Z)(),L=(0,u.Z)(U.breakpoints.down("md")),$=(0,y.sy)(),j=(0,O.ko)(),G=(0,a.useMemo)((()=>{const e={};return k.map((t=>e[t]=t in j.preferences?j.preferences[t].value:null)),e}),[j.preferences]),D=e=>{l(e.currentTarget)},x=()=>{l(null)},Y=e=>{C.Z.getCurrentUserPlatform(e).then((e=>{const t=e.platform_url;window.open(t,"_blank").focus()}))},H=()=>{N.logout()},W=()=>L?[a.createElement(m.ZP,{className:M.item,key:"profile"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PROFILE_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.profile",defaultMessage:"ui.navigationSettingsIconButton.profile"}))),G[S.$0]&&a.createElement(m.ZP,{className:M.item,key:"followings"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWINGS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.followings",defaultMessage:"ui.navigationSettingsIconButton.followings"}))),G[S.$0]&&a.createElement(m.ZP,{className:M.item,key:"followers"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWERS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.followers",defaultMessage:"ui.navigationSettingsIconButton.followers"}))),!G[S.$0]&&a.createElement(m.ZP,{className:M.item,key:"connections"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PROFILE_CONNECTIONS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.connections",defaultMessage:"ui.navigationSettingsIconButton.connections"}))),G[S.v0]&&a.createElement(m.ZP,{className:M.item,key:"loyaltyProgram"},a.createElement(g.Z,{component:w.Z,to:$.url(R.LOYALTY_ROUTE_NAME,{})},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.loyalty",defaultMessage:"ui.navigationSettingsIconButton.loyalty"}))),G[S.y1]&&a.createElement(m.ZP,{className:M.item,key:"followedPosts"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWED_POSTS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.postsFollowed",defaultMessage:"ui.navigationSettingsIconButton.postsFollowed"}))),G[S.Ow]&&a.createElement(m.ZP,{className:M.item,key:"followedDiscussions"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWED_DISCUSSIONS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.discussionsFollowed",defaultMessage:"ui.navigationSettingsIconButton.discussionsFollowed"}))),a.createElement(m.ZP,{className:M.item,key:"privateMessages"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PRIVATE_MESSAGES_ROUTE_NAME,{})},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.privateMessages",defaultMessage:"ui.navigationSettingsIconButton.privateMessages"}))),...r.map(((e,t)=>a.createElement(m.ZP,{className:M.item,key:`custom_item_${t}`},a.createElement(g.Z,{component:w.Z,to:e.href},e.label)))),...F?[a.createElement(d.Z,{key:"admin_divider"}),a.createElement(m.ZP,{className:M.item,key:"platform"},a.createElement(g.Z,{onClick:()=>Y("")},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.platform",defaultMessage:"ui.navigationSettingsIconButton.platform"})))]:[],...A||F?[a.createElement(d.Z,{key:"moderation_divider"}),a.createElement(m.ZP,{className:M.item,key:"moderation"},a.createElement(g.Z,{onClick:()=>Y("/moderation/flags/")},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.moderation",defaultMessage:"ui.navigationSettingsIconButton.moderation"})))]:[],a.createElement(m.ZP,{className:M.item,key:"settings"},a.createElement(g.Z,{component:w.Z,to:$.url(R.USER_PROFILE_SETTINGS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.settings",defaultMessage:"ui.navigationSettingsIconButton.settings"}))),a.createElement(d.Z,{key:"divider"}),a.createElement(m.ZP,{className:M.item,key:"logout"},a.createElement(g.Z,{onClick:H},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.logout",defaultMessage:"ui.navigationSettingsIconButton.logout"})))]:[a.createElement(E.Z,{className:M.item,key:"profile",component:w.Z,to:$.url(R.USER_PROFILE_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.profile",defaultMessage:"ui.navigationSettingsIconButton.profile"})),G[S.$0]&&a.createElement(E.Z,{className:M.item,key:"followings",component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWINGS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.followings",defaultMessage:"ui.navigationSettingsIconButton.followings"})),G[S.$0]&&a.createElement(E.Z,{className:M.item,key:"followers",component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWERS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.followers",defaultMessage:"ui.navigationSettingsIconButton.followers"})),!G[S.$0]&&a.createElement(E.Z,{className:M.item,key:"connections",component:w.Z,to:$.url(R.USER_PROFILE_CONNECTIONS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.connections",defaultMessage:"ui.navigationSettingsIconButton.connections"})),G[S.v0]&&a.createElement(E.Z,{className:M.item,key:"loyaltyProgram",component:w.Z,to:$.url(R.LOYALTY_ROUTE_NAME,{})},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.loyalty",defaultMessage:"ui.navigationSettingsIconButton.loyalty"})),G[S.y1]&&a.createElement(E.Z,{className:M.item,key:"followedPosts",component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWED_POSTS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.postsFollowed",defaultMessage:"ui.navigationSettingsIconButton.postsFollowed"})),G[S.Ow]&&a.createElement(E.Z,{className:M.item,key:"followedDiscussions",component:w.Z,to:$.url(R.USER_PROFILE_FOLLOWED_DISCUSSIONS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.discussionsFollowed",defaultMessage:"ui.navigationSettingsIconButton.discussionsFollowed"})),a.createElement(E.Z,{className:M.item,key:"privateMessages",component:w.Z,to:$.url(R.USER_PRIVATE_MESSAGES_ROUTE_NAME,{})},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.privateMessages",defaultMessage:"ui.navigationSettingsIconButton.privateMessages"})),...r.map(((e,t)=>a.createElement(E.Z,{className:M.item,key:`custom_item_${t}`,component:w.Z,to:e.href},e.label))),...F?[a.createElement(d.Z,{key:"platform_divider"}),a.createElement(E.Z,{className:M.item,key:"platform",onClick:()=>Y("")},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.platform",defaultMessage:"ui.navigationSettingsIconButton.platform"}))]:[],...A||F?[a.createElement(d.Z,{key:"moderation_divider"}),a.createElement(E.Z,{className:M.item,key:"moderation",onClick:()=>Y("/moderation/flags/")},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.moderation",defaultMessage:"ui.navigationSettingsIconButton.moderation"}))]:[],a.createElement(E.Z,{className:M.item,key:"settings",component:w.Z,to:$.url(R.USER_PROFILE_SETTINGS_ROUTE_NAME,N.user)},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.settings",defaultMessage:"ui.navigationSettingsIconButton.settings"})),a.createElement(d.Z,{key:"divider"}),a.createElement(E.Z,{className:M.item,key:"logout",onClick:H},a.createElement(I.Z,{id:"ui.navigationSettingsIconButton.logout",defaultMessage:"ui.navigationSettingsIconButton.logout"}))];return N.user?a.createElement(a.Fragment,null,a.createElement(P,Object.assign({className:_()(M.root,n)},s,{onClick:D}),a.createElement(p.Z,null,"more_vert")),L?a.createElement(b,{onClick:()=>l(null),className:M.drawerRoot,anchor:"bottom",open:Boolean(i),onClose:x,onOpen:D,PaperProps:{className:M.paper},disableSwipeToOpen:!0},a.createElement(Z.Z,null,W())):a.createElement(T,{onClick:()=>l(null),className:M.menuRoot,anchorEl:i,open:Boolean(i),onClose:x,PaperProps:{className:M.paper}},W())):null}},74891:(e,t,n)=>{n.d(t,{Z:()=>C});var o,a=n(97582),r=n(90948),s=n(6208),i=n(94253),l=n(87952),c=n(15861),u=n(77931),m=n(16628),g=n(93946),d=n(67564),E=n(67294),p=n(94184),Z=n.n(p),S=n(29360),f=n(54490),v=n(86896),y=n(44012);!function(e){e.USER="user",e.CATEGORY="category",e.GROUP="group"}(o||(o={}));var O=n(31924),w=n(66380),R=n(85472);const N=(0,f.vU)({placeholder:{id:"ui.searchAutocomplete.placeholder",defaultMessage:"ui.searchAutocomplete.placeholder"}}),_="SCSearchAutocomplete",h={root:`${_}-root`,icon:`${_}-icon`,input:`${_}-input`,clear:`${_}-clear`},I=(0,r.ZP)(s.Z,{name:_,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({[`& .${h.input}`]:{flexGrow:1}})));const C=function(e){const t=(0,S.Z)({props:e,name:_}),{id:n=`${_}-autocomplete`,className:r,blurOnSelect:s,autoFocus:p=!1,onSearch:f=null,onClear:C=null,onSuggestionSelect:B=(e=>null)}=t,M=(0,a._T)(t,["id","className","blurOnSelect","autoFocus","onSearch","onClear","onSuggestionSelect"]),P=(0,w.ko)(),[b,T]=(0,E.useState)(""),[k,F]=(0,E.useState)(!1),[A,U]=(0,E.useState)([]),L=(0,v.Z)(),$=e=>{T(""),U([]),C&&C()},j=e=>{let t={};return e.type===o.USER?(t.name=e[o.USER].username,t.image=e[o.USER].avatar,t.variant="circular"):e.type===o.CATEGORY?(t.name=e[o.CATEGORY].name,t.image=e[o.CATEGORY].image_medium,t.variant="square"):e.type===o.GROUP&&(t.name=e[o.GROUP].name,t.image=e[o.GROUP].image_big,t.variant="circular"),t};return(0,E.useEffect)((()=>{b&&(F(!0),O.Z.getSearchSuggestion(b).then((e=>{F(!1),U(e.results)})).catch((e=>{F(!1),console.log(e)})))}),[b]),E.createElement(I,Object.assign({id:n,className:Z()(h.root,r),blurOnSelect:s,onChange:(e,t,n,o)=>{switch(e.preventDefault(),e.stopPropagation(),n){case"selectOption":B&&B(t),$(e);break;case"createOption":f&&f(t),$(e)}return!1},onInputChange:(e,t,n)=>{if("input"===n)T(t),!t&&U([])},inputValue:b,freeSolo:!0,autoComplete:!0,disableClearable:!0,loading:k,loadingText:E.createElement(y.Z,{id:"ui.searchAutocomplete.loading",defaultMessage:"ui.searchAutocomplete.loading"}),noOptionsText:E.createElement(y.Z,{id:"ui.searchAutocomplete.noOptions",defaultMessage:"ui.searchAutocomplete.noOptions"}),options:A,getOptionLabel:e=>"string"==typeof e?e:(e=>{switch(e.type){case o.CATEGORY:return e[e.type].name_synonyms||e[e.type].name;case o.USER:return e[e.type].username&&e[e.type].real_name;default:return e[e.type].name}})(e),renderOption:(e,t)=>E.createElement(i.Z,Object.assign({component:"li"},e),E.createElement(l.Z,{alt:j(t).name,src:j(t).image,variant:j(t).variant}),E.createElement(c.Z,{ml:1},j(t).name)),renderInput:e=>E.createElement(u.Z,Object.assign({},e,{placeholder:`${L.formatMessage(N.placeholder,{community:P.preferences[R.QX].value})}`,InputProps:Object.assign(Object.assign({},e.InputProps),{autoFocus:p,name:"search-autocomplete",className:h.input,startAdornment:E.createElement(d.Z,{className:h.icon},"search"),endAdornment:E.createElement(m.Z,{in:b.length>0||Boolean(C),appear:!1},E.createElement(g.Z,{className:h.clear,onClick:$,size:"small"},E.createElement(d.Z,null,"close")))})}))},M))}},29409:(e,t,n)=>{var o;n.d(t,{i:()=>o}),function(e){e.NONE="none",e.DEFAULT="default",e.FORCED="forced"}(o||(o={}))},49145:(e,t,n)=>{n.d(t,{p9:()=>a,vM:()=>o});const o=(e,t)=>e.reduce((function(e,n){let o="function"==typeof t?t(n):n[t];return e.hasOwnProperty(o)||(e[o]=[]),e[o].push(n),e}),{}),a=(e,t,n=!0)=>{if(!Array.isArray(e))return e;const o=n?(e,n)=>e[t]-n[t]:(e,n)=>n[t]-e[t];return e.sort(o)}}}]);