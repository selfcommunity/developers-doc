"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[37089],{45412:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(67294),o=n(74482),r=n(65001),a=n(24085),l=n(96570),i=n(99960),u=n(68689);function c({id:e=null,user:t=null}){const n=(0,u.LD)(),c=n.user?n.user.id:null,d=(0,s.useMemo)((()=>c?t:(0,l.Kd)(t,["connection_status"])),[t]),[m,f]=(0,s.useState)(d),[E,g]=(0,s.useState)(null),[h,Z]=(0,s.useState)(!1),C=(0,s.useMemo)((()=>()=>r.Z.request({url:a.Z.User.url({id:t?t.id:e}),method:a.Z.User.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[e,t]),w=(0,s.useMemo)((()=>()=>h?Promise.reject():(Z(!0),C().then((e=>{Z(!1),f(c?e:(0,l.Kd)(e,["connection_status"]))})).catch((t=>{Z(!1),g(`Unable to refresh user with id ${e}`),i.Y.error(o.h,`Unable to refresh user with id ${e}`),i.Y.error(o.h,t.message)})))),[C,h]);return(0,s.useEffect)((()=>{e?C().then((e=>{f(c?e:(0,l.Kd)(e,["connection_status"]))})).catch((t=>{g(`User with id ${e} not found`),i.Y.error(o.h,`User with id ${e} not found`),i.Y.error(o.h,t.message)})):f(d)}),[e,d]),{scUser:m,setSCUser:f,refresh:w,refreshing:h,error:E}}},5101:(e,t,n)=>{n.d(t,{Z:()=>O});var s=n(97582),o=n(67294),r=n(90948),a=n(66380),l=n(85472),i=n(5616),u=n(75459),c=n(31812),d=n(44012),m=n(20377),f=n(94184),E=n.n(f),g=n(99960),h=n(29628),Z=n(56581),C=n(53704),w=n(68689),v=n(45412),p=n(65580);const U="SCFollowUserButton",B={root:`${U}-root`},N=(0,r.ZP)(c.Z,{name:U,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const b=function(e){const t=(0,h.Z)({props:e,name:U}),{className:n,userId:r,user:a,onFollow:l}=t,i=(0,s._T)(t,["className","userId","user","onFollow"]),c=(0,C.RM)(),f=(0,o.useContext)(w.K8),b=f.managers.followed,{enqueueSnackbar:R}=(0,m.Ds)(),{scUser:T}=(0,v.Z)({id:r,user:a}),[k,S]=(0,o.useState)(null),[M,_]=(0,o.useState)(!1),O=f.user?f.user.id:null;return(0,o.useEffect)((()=>{f.user&&f.user.id!==T.id&&S(b.isFollowed(T))}),[O,b.isFollowed]),f.user&&f.user.id===T.id?null:o.createElement(N,Object.assign({size:"small",variant:"outlined",onClick:()=>{f.user?!k&&p.IT(f.user)?R(o.createElement(d.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3}):b.follow(T).then((()=>{l&&l(T,!k)})).catch((e=>{g.Y.error(u.J,e),(0,Z.w)(e,f.managers.blockedUsers.isBlocked(T),R)?_(!0):R(o.createElement(d.Z,{id:"ui.common.actionToUserDeleted",defaultMessage:"ui.common.actionToUserDeleted"}),{variant:"warning",autoHideDuration:3e3})})):c.settings.handleAnonymousAction()},loading:f.user?null===k||b.isLoading(T):null,disabled:M,className:E()(B.root,n)},i),f.user&&k?o.createElement(d.Z,{defaultMessage:"ui.followUserButton.unfollow",id:"ui.followUserButton.unfollow"}):o.createElement(d.Z,{defaultMessage:"ui.followUserButton.follow",id:"ui.followUserButton.follow"}))};var R=n(87082);const T="SCFriendshipUserButton",k={root:`${T}-root`},S=(0,r.ZP)(c.Z,{name:T,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const M=function(e){const t=(0,h.Z)({props:e,name:T}),{className:n,userId:r,user:a}=t,l=(0,s._T)(t,["className","userId","user"]),i=(0,C.RM)(),c=(0,o.useContext)(w.K8),f=c.managers.connections,{enqueueSnackbar:U}=(0,m.Ds)(),{scUser:B}=(0,v.Z)({id:r,user:a}),[N,b]=(0,o.useState)(null),[M,_]=(0,o.useState)(!1),O=c.user?c.user.id:null;return(0,o.useEffect)((()=>{if(O&&O!==B.id){const e=f.status(B);b(e)}}),[O,f.status]),c.user&&c.user.id===B.id?null:o.createElement(S,Object.assign({size:"small",variant:"outlined",disabled:M,loading:c.user?f.isLoading(B):null,onClick:()=>{if(c.user)if(p.IT(c.user))U(o.createElement(d.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3});else{let e;N===R.V.CONNECTED?e=f.removeConnection:N===R.V.CONNECTION_REQUEST_SENT?e=f.cancelRequestConnection:N===R.V.CONNECTION_REQUEST_RECEIVED?e=f.acceptConnection:null===N&&(e=f.requestConnection),e(B).catch((e=>{g.Y.error(u.J,e),(0,Z.w)(e,c.managers.blockedUsers.isBlocked(B),U)?_(!0):U(o.createElement(d.Z,{id:"ui.common.actionToUserDeleted",defaultMessage:"ui.common.actionToUserDeleted"}),{variant:"warning",autoHideDuration:3e3})}))}else i.settings.handleAnonymousAction()},className:E()(k.root,n)},l),(()=>{let e;switch(N){case R.V.CONNECTED:e=o.createElement(d.Z,{defaultMessage:"ui.friendshipUserButton.removeConnection",id:"ui.friendshipUserButton.removeConnection"});break;case R.V.CONNECTION_REQUEST_SENT:e=o.createElement(d.Z,{defaultMessage:"ui.friendshipUserButton.cancelConnectionRequest",id:"ui.friendshipUserButton.cancelConnectionRequest"});break;case R.V.CONNECTION_REQUEST_RECEIVED:e=o.createElement(d.Z,{defaultMessage:"ui.friendshipUserButton.acceptConnection",id:"ui.friendshipUserButton.acceptConnection"});break;default:e=o.createElement(d.Z,{defaultMessage:"ui.friendshipUserButton.requestConnection",id:"ui.friendshipUserButton.requestConnection"})}return e})())},_="SCConnectionUserButton";(0,r.ZP)(i.Z,{name:_,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const O=function(e){const t=(0,h.Z)({props:e,name:_}),{user:n=null,followConnectUserButtonProps:r={}}=t,i=(0,s._T)(t,["user","followConnectUserButtonProps"]),u=(0,o.useContext)(a.Tt),c=l.$0 in u.preferences&&u.preferences[l.$0].value;return o.createElement(o.Fragment,null,c?o.createElement(b,Object.assign({user:n},r,i)):o.createElement(M,Object.assign({user:n},r,i)))}},50353:(e,t,n)=>{n.d(t,{Z:()=>m});var s=n(67294),o=n(2734),r=n(69417),a=n(90948),l=n(88078),i=n(115),u=n(45259);const c={root:`${u.B}-skeleton-root`},d=(0,a.ZP)(i.Z,{name:u.B,slot:"SkeletonRoot"})((()=>({})));function m(e){const t=(0,o.Z)();return s.createElement(d,Object.assign({className:c.root},e,{image:s.createElement(l.Z,{animation:"wave",variant:"circular",width:t.selfcommunity.user.avatar.sizeMedium,height:t.selfcommunity.user.avatar.sizeMedium}),primary:s.createElement(l.Z,{animation:"wave",height:10,width:120,style:{marginBottom:10}}),secondary:s.createElement(l.Z,{animation:"wave",height:10,width:70,style:{marginBottom:10}}),actions:s.createElement(r.Z,{size:"small",variant:"outlined",disabled:!0},s.createElement(l.Z,{animation:"wave",height:10,width:30,style:{marginTop:5,marginBottom:5}}))}))}},45259:(e,t,n)=>{n.d(t,{B:()=>s});const s="SCUser"},37089:(e,t,n)=>{n.d(t,{Z:()=>O});var s=n(97582),o=n(67294),r=n(90948),a=n(50353),l=n(69417),i=n(90263),u=n(87952),c=n(87918),d=n(85472),m=n(45412),f=n(41538),E=n(66380),g=n(97265),h=n(12132),Z=n(54490),C=n(86896),w=n(44012),v=n(94184),p=n.n(v),U=n(5101),B=n(29628),N=n(75427),b=n(68585),R=n(68456),T=n(45259);const k=(0,Z.vU)({userFollowers:{id:"ui.user.userFollowers",defaultMessage:"ui.user.userFollowers"}}),S={root:`${T.B}-root`,avatar:`${T.B}-avatar`,staffBadgeLabel:`${T.B}-staff-badge-label`},M=(0,r.ZP)(N.Z,{name:T.B,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),_=[d.R6,d.tJ];const O=function(e){const t=(0,B.Z)({props:e,name:T.B}),{userId:n=null,user:r=null,handleIgnoreAction:Z,className:v=null,followConnectUserButtonProps:N={},showFollowers:O=!1,elevation:F,badgeContent:I=null}=t,D=(0,s._T)(t,["userId","user","handleIgnoreAction","className","followConnectUserButtonProps","showFollowers","elevation","badgeContent"]),{scUser:P,setSCUser:y}=(0,m.Z)({id:n,user:r}),$=(0,f.sy)(),j=(0,E.ko)(),q=(0,o.useMemo)((()=>{const e={};return _.map((t=>e[t]=t in j.preferences?j.preferences[t].value:null)),e}),[j.preferences]),z=P&&P.community_badge,[V,A]=(0,o.useState)(!1),L=(0,C.Z)();return P?o.createElement(o.Fragment,null,o.createElement(M,Object.assign({elevation:F},D,{className:p()(S.root,v),ButtonBaseProps:P.deleted?{onClick:()=>A(!0)}:{component:g.Z,to:$.url(h.USER_PROFILE_ROUTE_NAME,P)},image:I?o.createElement(i.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:I},o.createElement(u.Z,{alt:P.username,src:P.avatar,className:S.avatar})):o.createElement(R.Z,{hide:!z},o.createElement(u.Z,{alt:P.username,src:P.avatar,className:S.avatar})),primary:z&&q?o.createElement(o.Fragment,null,P.username,o.createElement(c.Z,{component:"span",className:S.staffBadgeLabel,size:"small",label:q[d.R6]})):P.username,secondary:O?`${L.formatMessage(k.userFollowers,{total:P.followers_counter})}`:P.description,actions:o.createElement(o.Fragment,null,Z&&o.createElement(l.Z,{size:"small",onClick:Z},o.createElement(w.Z,{defaultMessage:"ui.user.ignore",id:"ui.user.ignore"})),o.createElement(U.Z,Object.assign({user:P},N)))})),V&&o.createElement(b.Z,{open:V,handleClose:()=>A(!1)})):o.createElement(a.Z,{elevation:F})}}}]);