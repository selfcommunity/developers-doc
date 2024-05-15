"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[37089],{45412:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(67294),a=r(74482),o=r(24243),s=r(24085),i=r(96570),l=r(99960),c=r(68787);function u({id:e=null,user:t=null}){const r=(0,c.LD)(),u=r.user?r.user.id:null,m=(0,n.useMemo)((()=>u?t:(0,i.Kd)(t,["connection_status"])),[t]),[d,p]=(0,n.useState)(m),[f,g]=(0,n.useState)(null),[h,E]=(0,n.useState)(!1),y=(0,n.useMemo)((()=>()=>o.Z.request({url:s.Z.User.url({id:t?t.id:e}),method:s.Z.User.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[e,t]),v=(0,n.useMemo)((()=>()=>h?Promise.reject():(E(!0),y().then((e=>{E(!1),p(u?e:(0,i.Kd)(e,["connection_status"]))})).catch((t=>{E(!1),g(`Unable to refresh user with id ${e}`),l.Y.error(a.h,`Unable to refresh user with id ${e}`),l.Y.error(a.h,t.message)})))),[y,h]);return(0,n.useEffect)((()=>{e?y().then((e=>{p(u?e:(0,i.Kd)(e,["connection_status"]))})).catch((t=>{g(`User with id ${e} not found`),l.Y.error(a.h,`User with id ${e} not found`),l.Y.error(a.h,t.message)})):p(m)}),[e,m]),{scUser:d,setSCUser:p,refresh:v,refreshing:h,error:f}}},65580:(e,t,r)=>{r.d(t,{B2:()=>u,GJ:()=>l,IT:()=>m,vJ:()=>c});var n=r(38146);const a="admin",o="moderator",s="editor";function i(e){if(e&&e.role){const t=e.role;if(t===a)return a;if(t===o)return o;if(t===s)return s}return null}function l(e){return i(e)===a}function c(e){return i(e)===o}function u(e){return l(e)||c(e)||function(e){return i(e)===s}(e)}function m(e){return e&&e.status&&e.status===n.m.BLOCKED}},5101:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(97582),a=r(67294),o=r(90948),s=r(66380),i=r(85472),l=r(5616),c=r(75459),u=r(31812),m=r(44012),d=r(20377),p=r(94184),f=r.n(p),g=r(99960),h=r(29628),E=r(56581),y=r(53704),v=r(68787),Z=r(45412),N=r(65580);const b="SCFollowUserButton",B={root:`${b}-root`},w=(0,o.ZP)(u.Z,{name:b,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const T=function(e){const t=(0,h.Z)({props:e,name:b}),{className:r,userId:o,user:s,onFollow:i}=t,l=(0,n._T)(t,["className","userId","user","onFollow"]),u=(0,y.RM)(),p=(0,a.useContext)(v.K8),T=p.managers.followed,{enqueueSnackbar:C}=(0,d.Ds)(),{scUser:U}=(0,Z.Z)({id:o,user:s}),[P,$]=(0,a.useState)(null),[D,F]=(0,a.useState)(!1),M=p.user?p.user.id:null;return(0,a.useEffect)((()=>{p.user&&p.user.id!==U.id&&$(T.isFollowed(U))}),[M,T.isFollowed]),p.user&&p.user.id===U.id?null:a.createElement(w,Object.assign({size:"small",variant:"outlined",onClick:()=>{p.user?!P&&N.IT(p.user)?C(a.createElement(m.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3}):T.follow(U).then((()=>{i&&i(U,!P)})).catch((e=>{g.Y.error(c.J,e),(0,E.w)(e,p.managers.blockedUsers.isBlocked(U),C)?F(!0):C(a.createElement(m.Z,{id:"ui.common.actionToUserDeleted",defaultMessage:"ui.common.actionToUserDeleted"}),{variant:"warning",autoHideDuration:3e3})})):u.settings.handleAnonymousAction()},loading:p.user?null===P||T.isLoading(U):null,disabled:D,className:f()(B.root,r)},l),p.user&&P?a.createElement(m.Z,{defaultMessage:"ui.followUserButton.unfollow",id:"ui.followUserButton.unfollow"}):a.createElement(m.Z,{defaultMessage:"ui.followUserButton.follow",id:"ui.followUserButton.follow"}))};var C=r(87082);const U="SCFriendshipUserButton",P={root:`${U}-root`},$=(0,o.ZP)(u.Z,{name:U,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const D=function(e){const t=(0,h.Z)({props:e,name:U}),{className:r,userId:o,user:s}=t,i=(0,n._T)(t,["className","userId","user"]),l=(0,y.RM)(),u=(0,a.useContext)(v.K8),p=u.managers.connections,{enqueueSnackbar:b}=(0,d.Ds)(),{scUser:B}=(0,Z.Z)({id:o,user:s}),[w,T]=(0,a.useState)(null),[D,F]=(0,a.useState)(!1),M=u.user?u.user.id:null;return(0,a.useEffect)((()=>{if(M&&M!==B.id){const e=p.status(B);T(e)}}),[M,p.status]),u.user&&u.user.id===B.id?null:a.createElement($,Object.assign({size:"small",variant:"outlined",disabled:D,loading:u.user?p.isLoading(B):null,onClick:()=>{if(u.user)if(N.IT(u.user))b(a.createElement(m.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3});else{let e;w===C.V.CONNECTED?e=p.removeConnection:w===C.V.CONNECTION_REQUEST_SENT?e=p.cancelRequestConnection:w===C.V.CONNECTION_REQUEST_RECEIVED?e=p.acceptConnection:null===w&&(e=p.requestConnection),e(B).catch((e=>{g.Y.error(c.J,e),(0,E.w)(e,u.managers.blockedUsers.isBlocked(B),b)?F(!0):b(a.createElement(m.Z,{id:"ui.common.actionToUserDeleted",defaultMessage:"ui.common.actionToUserDeleted"}),{variant:"warning",autoHideDuration:3e3})}))}else l.settings.handleAnonymousAction()},className:f()(P.root,r)},i),(()=>{let e;switch(w){case C.V.CONNECTED:e=a.createElement(m.Z,{defaultMessage:"ui.friendshipUserButton.removeConnection",id:"ui.friendshipUserButton.removeConnection"});break;case C.V.CONNECTION_REQUEST_SENT:e=a.createElement(m.Z,{defaultMessage:"ui.friendshipUserButton.cancelConnectionRequest",id:"ui.friendshipUserButton.cancelConnectionRequest"});break;case C.V.CONNECTION_REQUEST_RECEIVED:e=a.createElement(m.Z,{defaultMessage:"ui.friendshipUserButton.acceptConnection",id:"ui.friendshipUserButton.acceptConnection"});break;default:e=a.createElement(m.Z,{defaultMessage:"ui.friendshipUserButton.requestConnection",id:"ui.friendshipUserButton.requestConnection"})}return e})())},F="SCConnectionUserButton";(0,o.ZP)(l.Z,{name:F,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const M=function(e){const t=(0,h.Z)({props:e,name:F}),{user:r=null,followConnectUserButtonProps:o={}}=t,l=(0,n._T)(t,["user","followConnectUserButtonProps"]),c=(0,a.useContext)(s.Tt),u=i.$0 in c.preferences&&c.preferences[i.$0].value;return a.createElement(a.Fragment,null,u?a.createElement(T,Object.assign({user:r},o,l)):a.createElement(D,Object.assign({user:r},o,l)))}},50353:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(67294),a=r(2734),o=r(25662),s=r(90948),i=r(88078),l=r(115),c=r(45259);const u={root:`${c.B}-skeleton-root`},m=(0,s.ZP)(l.Z,{name:c.B,slot:"SkeletonRoot"})((()=>({})));function d(e){const t=(0,a.Z)();return n.createElement(m,Object.assign({className:u.root},e,{image:n.createElement(i.Z,{animation:"wave",variant:"circular",width:t.selfcommunity.user.avatar.sizeMedium,height:t.selfcommunity.user.avatar.sizeMedium}),primary:n.createElement(i.Z,{animation:"wave",height:10,width:120,style:{marginBottom:10}}),secondary:n.createElement(i.Z,{animation:"wave",height:10,width:70,style:{marginBottom:10}}),actions:n.createElement(o.Z,{size:"small",variant:"outlined",disabled:!0},n.createElement(i.Z,{animation:"wave",height:10,width:30,style:{marginTop:5,marginBottom:5}}))}))}},45259:(e,t,r)=>{r.d(t,{B:()=>n});const n="SCUser"},37089:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(97582),a=r(67294),o=r(90948),s=r(50353),i=r(25662),l=r(90263),c=r(87952),u=r(87918),m=r(85472),d=r(45412),p=r(41538),f=r(66380),g=r(97265),h=r(12132),E=r(54490),y=r(86896),v=r(44012),Z=r(94184),N=r.n(Z),b=r(5101),B=r(29628),w=r(75427),T=r(68585),C=r(68456),U=r(45259);const P=(0,E.vU)({userFollowers:{id:"ui.user.userFollowers",defaultMessage:"ui.user.userFollowers"}}),$={root:`${U.B}-root`,avatar:`${U.B}-avatar`,staffBadgeLabel:`${U.B}-staff-badge-label`,groupAdminBadgeLabel:`${U.B}-group-admin-badge-label`},D=(0,o.ZP)(w.Z,{name:U.B,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({}))),F=[m.R6,m.tJ];const M=function(e){const t=(0,B.Z)({props:e,name:U.B}),{userId:r=null,user:o=null,handleIgnoreAction:E,className:Z=null,followConnectUserButtonProps:w={},showFollowers:M=!1,elevation:R,badgeContent:k=null,actions:O=null,isGroupAdmin:_=!1,buttonProps:S=null}=t,I=(0,n._T)(t,["userId","user","handleIgnoreAction","className","followConnectUserButtonProps","showFollowers","elevation","badgeContent","actions","isGroupAdmin","buttonProps"]),{scUser:j,setSCUser:A}=(0,d.Z)({id:r,user:o}),L=(0,p.sy)(),q=(0,f.ko)(),x=(0,a.useMemo)((()=>{const e={};return F.map((t=>e[t]=t in q.preferences?q.preferences[t].value:null)),e}),[q.preferences]),z=j&&j.community_badge,[V,H]=(0,a.useState)(!1),J=(0,y.Z)();return j?a.createElement(a.Fragment,null,a.createElement(D,Object.assign({elevation:R},I,{className:N()($.root,Z),ButtonBaseProps:null!=S?S:j.deleted?{onClick:()=>H(!0)}:{component:g.Z,to:L.url(h.USER_PROFILE_ROUTE_NAME,j)},image:k?a.createElement(l.Z,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:k},a.createElement(c.Z,{alt:j.username,src:j.avatar,className:$.avatar})):a.createElement(C.Z,{hide:!z},a.createElement(c.Z,{alt:j.username,src:j.avatar,className:$.avatar})),primary:z&&x||_?a.createElement(a.Fragment,null,j.username,a.createElement(u.Z,{component:"span",className:_?$.groupAdminBadgeLabel:$.staffBadgeLabel,size:"small",label:_?a.createElement(v.Z,{defaultMessage:"ui.user.group.admin",id:"ui.user.group.admin"}):x[m.R6]})):j.username,secondary:M?`${J.formatMessage(P.userFollowers,{total:j.followers_counter})}`:j.description,actions:null!=O?O:a.createElement(a.Fragment,null,E&&a.createElement(i.Z,{size:"small",onClick:E},a.createElement(v.Z,{defaultMessage:"ui.user.ignore",id:"ui.user.ignore"})),a.createElement(b.Z,Object.assign({user:j},w)))})),V&&a.createElement(T.Z,{open:V,handleClose:()=>H(!1)})):a.createElement(s.Z,{elevation:R})}},115:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(97582),a=r(67294),o=r(90948),s=r(5616),i=r(15861),l=r(94184),c=r.n(l),u=r(63902),m=r(29628);const d="SCBaseItem",p={root:`${d}-root`,withActions:`${d}-with-actions`,content:`${d}-content`,image:`${d}-image`,text:`${d}-text`,primary:`${d}-primary`,secondary:`${d}-secondary`,actions:`${d}-actions`},f=(0,o.ZP)(u.Z,{name:d,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const g=function(e){const t=(0,m.Z)({props:e,name:d}),{id:r=null,className:o=null,image:l=null,disableTypography:u=!1,primary:g=null,primaryTypographyProps:h={component:"span",variant:"body1"},secondary:E=null,secondaryTypographyProps:y={component:"p",variant:"body2"},actions:v=null}=t,Z=(0,n._T)(t,["id","className","image","disableTypography","primary","primaryTypographyProps","secondary","secondaryTypographyProps","actions"]);return a.createElement(f,Object.assign({id:r},Z,{className:c()(p.root,o,{[p.withActions]:Boolean(v)})}),a.createElement(s.Z,{className:p.content},l&&a.createElement(s.Z,{className:p.image},l),a.createElement(s.Z,{className:p.text},g&&(u?g:a.createElement(i.Z,Object.assign({className:p.primary},h),g)),E&&(u?E:a.createElement(i.Z,Object.assign({className:p.secondary},y),E)))),v&&a.createElement(s.Z,{className:p.actions},v))}},75427:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(97582),a=r(67294),o=r(90948),s=r(49990),i=r(5616),l=r(15861),c=r(94184),u=r.n(c),m=r(63902),d=r(29628);const p="SCBaseItemButton",f={root:`${p}-root`,withActions:`${p}-with-actions`,content:`${p}-content`,image:`${p}-image`,text:`${p}-text`,primary:`${p}-primary`,secondary:`${p}-secondary`,actions:`${p}-actions`},g=(0,o.ZP)(m.Z,{name:p,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const h=function(e){const t=(0,d.Z)({props:e,name:p}),{id:r=null,className:o=null,ButtonBaseProps:c={},image:m=null,disableTypography:h=!1,primary:E=null,primaryTypographyProps:y={component:"span",variant:"body1"},secondary:v=null,secondaryTypographyProps:Z={component:"p",variant:"body2"},actions:N=null}=t,b=(0,n._T)(t,["id","className","ButtonBaseProps","image","disableTypography","primary","primaryTypographyProps","secondary","secondaryTypographyProps","actions"]);return a.createElement(g,Object.assign({id:r},b,{className:u()(f.root,o,{[f.withActions]:Boolean(N)})}),a.createElement(s.Z,Object.assign({className:f.content},c),m&&a.createElement(i.Z,{className:f.image},m),a.createElement(i.Z,{className:f.text},E&&(h?E:a.createElement(l.Z,Object.assign({className:f.primary},y),E)),v&&(h?v:a.createElement(l.Z,Object.assign({className:f.secondary},Z),v)))),N&&a.createElement(i.Z,{className:f.actions},N))}},56581:(e,t,r)=>{r.d(t,{w:()=>o});var n=r(67294),a=r(44012);function o(e,t,r){let o=!1;return e&&e.response&&e.response&&e.response.status&&403===e.response.status&&(r(t?n.createElement(a.Z,{id:"ui.common.actionToUserBlockedByMe",defaultMessage:"ui.common.actionToUserBlockedByMe"}):n.createElement(a.Z,{id:"ui.common.actionToUserHasBlockedMe",defaultMessage:"ui.common.actionToUserHasBlockedMe"}),{variant:"warning",autoHideDuration:3e3}),o=!0),o}},54490:(e,t,r)=>{r.d(t,{Ji:()=>d,qN:()=>p,vU:()=>m});var n,a,o=r(25719),s=r(67294),i=r(86896);!function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"}(n||(n={})),function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"}(a||(a={}));var l=function(e){var t=(0,i.Z)(),r=e.value,n=e.children,a=(0,o._T)(e,["value","children"]);return n(t.formatNumberToParts(r,a))};l.displayName="FormattedNumberParts";function c(e){var t=function(t){var r=(0,i.Z)(),n=t.value,a=t.children,s=(0,o._T)(t,["value","children"]),l="string"==typeof n?new Date(n||0):n;return a("formatDate"===e?r.formatDateToParts(l,s):r.formatTimeToParts(l,s))};return t.displayName=a[e],t}function u(e){var t=function(t){var r=(0,i.Z)(),n=t.value,a=t.children,l=(0,o._T)(t,["value","children"]),c=r[e](n,l);if("function"==typeof a)return a(c);var u=r.textComponent||s.Fragment;return s.createElement(u,null,c)};return t.displayName=n[e],t}function m(e){return e}l.displayName="FormattedNumberParts";var d=u("formatDate"),p=u("formatTime");u("formatNumber"),u("formatList"),u("formatDisplayName"),c("formatDate"),c("formatTime")}}]);