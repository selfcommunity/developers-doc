"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[34240],{92991:(e,t,n)=>{n.d(t,{Z:()=>E});var o=n(67294),a=n(27331),i=n(5730);function s(e,t){void 0===e&&(e=""),void 0===t&&(t={});const n=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:n})}function r(){if((0,i.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:a.r.user.client_id,grant_type:"refresh_token"};return s(`${a.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,i.Z)(),[t,n]=(0,o.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,o.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?s(`${a.r.portal}/oauth/token/`,a.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{n(e)})):e&&n(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,o.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var l=n(76171),m=n(89521),u=n(19666),p=n(85893);function E(e){let{children:t}=e;const n=c(),o={portal:a.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:a.r.user.client_id,authToken:n,handleRefreshToken:r},theme:m.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,p.jsx)(u.Z,{children:()=>(0,p.jsx)(l.ZP,{conf:o,children:t})})}},27331:(e,t,n)=>{n.d(t,{r:()=>o});const o={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},61353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>q,contentTitle:()=>Y,default:()=>z,frontMatter:()=>K,metadata:()=>H,toc:()=>Q});var o=n(85893),a=n(11151),i=n(92991),s=n(97582),r=n(90948),c=n(10155),l=n(94253),m=n(93946),u=n(25662),p=n(34386),E=n(87952),N=n(19529),f=n(67294),d=n(67564),_=n(29360),g=n(94184),O=n.n(g),T=n(88078);const h="SCNavigationToolbar",P={root:`${h}-skeleton-root`,logo:`${h}-logo`,navigation:`${h}-navigation`,avatar:`${h}-avatar`},b=(0,r.ZP)(c.Z,{name:h,slot:"SkeletonRoot"})((()=>({})));function Z(){return f.createElement(b,{className:P.root},f.createElement(T.Z,{className:P.logo,animation:"wave",variant:"rectangular"}),f.createElement(T.Z,{className:P.navigation,animation:"wave",variant:"rectangular"}),f.createElement(T.Z,{className:P.avatar,animation:"wave",variant:"rounded"}))}var S=n(44012),I=n(25464),v=n(41538),C=n(97265),R=n(12132),k=n(87430);const y={root:`${h}-notifications-menu-root`,paper:`${h}-paper`,notifications:`${h}-notifications`,link:`${h}-link`},M=(0,r.ZP)(I.Z,{name:h,slot:"NotificationsMenuRoot"})((()=>({})));function A(e){const t=(0,_.Z)({props:e,name:h}),{PaperProps:n={className:y.paper},MenuListProps:o={component:l.Z},SnippetNotificationsProps:a={}}=t,i=(0,s._T)(t,["PaperProps","MenuListProps","SnippetNotificationsProps"]),r=(0,v.sy)();return f.createElement(M,Object.assign({className:y.root,PaperProps:n,MenuListProps:o},i),f.createElement(k.Z,Object.assign({className:y.notifications},a)),f.createElement(u.Z,{className:y.link,component:C.Z,to:r.url(R.USER_NOTIFICATIONS_ROUTE_NAME,{}),variant:"text"},f.createElement(S.Z,{id:"ui.header.notifications.button.seeMore",defaultMessage:"ui.header.notifications.button.seeMore"})))}var j=n(74891),U=n(29664),L=n(68501),D=n(72951),J=n(85472),x=n(13391),$=n(66380),w=n(65580),B=n(47634);const F={root:`${h}-root`,logo:`${h}-logo`,customItem:`${h}-custom-item`,register:`${h}-register`,navigation:`${h}-navigation`,home:`${h}-home`,explore:`${h}-explore`,groups:`${h}-groups`,search:`${h}-search`,composer:`${h}-composer`,profile:`${h}-profile`,notification:`${h}-notification`,notificationsMenu:`${h}-notifications-menu`,messages:`${h}-messages`,settings:`${h}-settings`,active:`${h}-active`},G=(0,r.ZP)(c.Z,{name:h,slot:"Root"})((()=>({}))),V=[J.Y9,J.Ao,J.dL,J.Qm,J.fU,J.vP,J.xj,J.n9];const W=function(e){const t=(0,_.Z)({props:e,name:h}),{value:n="",className:o="",disableSearch:a=!1,disableComposer:i=!1,SearchAutocompleteProps:r={},startActions:c=null,endActions:g=null,NavigationSettingsIconButtonComponent:T=U.Z,NavigationMenuIconButtonComponent:P=B.ZP,children:b=null,NotificationMenuProps:I={},ComposerIconButtonProps:k={},onOpenNotificationMenu:y,onCloseNotificationMenu:M}=t,W=(0,s._T)(t,["value","className","disableSearch","disableComposer","SearchAutocompleteProps","startActions","endActions","NavigationSettingsIconButtonComponent","NavigationMenuIconButtonComponent","children","NotificationMenuProps","ComposerIconButtonProps","onOpenNotificationMenu","onCloseNotificationMenu"]),K=(0,x.LD)(),Y=(0,v.sy)(),H=(0,$.ko)(),q=(0,f.useMemo)((()=>{const e={};return V.map((t=>e[t]=t in H.preferences?H.preferences[t].value:null)),e}),[H.preferences]),Q=(0,f.useMemo)((()=>H.features.includes(D.$.PRIVATE_MESSAGING)),[H.features]),X=(0,f.useMemo)((()=>H.features&&H.features.includes(D.$.GROUPING)&&H.features.includes(D.$.TAGGING)),[H.features]),z=(0,f.useMemo)((()=>!i&&(!H.preferences[J.Kq].value||w.B2(K.user))),[H,i,K.user]),[ee,te]=f.useState(null),ne=()=>{te(null),M&&M()};if(K.loading)return f.createElement(Z,null);const oe=b||f.createElement(l.Z,{className:F.navigation},K.user&&f.createElement(m.Z,{className:O()(F.home,{[F.active]:n.startsWith(Y.url(R.HOME_ROUTE_NAME,{}))}),"aria-label":"Home",to:Y.url(R.HOME_ROUTE_NAME,{}),component:C.Z},f.createElement(d.Z,null,"home")),q[J.Y9]&&(q[J.Ao]||K.user)&&f.createElement(m.Z,{className:O()(F.explore,{[F.active]:n.startsWith(Y.url(R.EXPLORE_ROUTE_NAME,{}))}),"aria-label":"Explore",to:Y.url(R.EXPLORE_ROUTE_NAME,{}),component:C.Z},f.createElement(d.Z,null,"explore")),X&&K.user&&f.createElement(m.Z,{className:O()(F.groups,{[F.active]:n.startsWith(Y.url(R.GROUPS_SUBSCRIBED_ROUTE_NAME,{}))||n.startsWith(Y.url(R.GROUPS_ROUTE_NAME,{}))}),"aria-label":"Groups",to:Y.url(R.GROUPS_SUBSCRIBED_ROUTE_NAME,{}),component:C.Z},f.createElement(d.Z,null,"groups")));return f.createElement(G,Object.assign({className:O()(o,F.root)},W),f.createElement(P,null),f.createElement(C.Z,{to:Y.url(R.HOME_ROUTE_NAME,{}),className:F.logo},f.createElement("img",{src:q[J.dL],alt:"logo"})),!K.user&&!q[J.Qm]&&f.createElement(u.Z,{color:"inherit",component:C.Z,to:Y.url(R.SIGNUP_ROUTE_NAME,{}),className:F.register},f.createElement(S.Z,{id:"ui.appBar.navigation.register",defaultMessage:"ui.appBar.navigation.register"})),q[J.fU]&&f.createElement(f.Fragment,null,q[J.n9]?f.createElement(p.Z,{title:q[J.n9]},f.createElement(C.Z,{target:"blank",to:q[J.vP],className:F.customItem},f.createElement("img",{src:q[J.xj],alt:"custom_item"}))):f.createElement(C.Z,{target:"blank",to:q[J.vP],className:F.customItem},f.createElement("img",{src:q[J.xj],alt:"custom_item"}))),oe,!q[J.Ao]&&!K.user||a?f.createElement(l.Z,{className:F.search}):f.createElement(j.Z,Object.assign({className:F.search,blurOnSelect:!0},r)),c,K.user?f.createElement(f.Fragment,null,z&&f.createElement(L.Z,Object.assign({className:F.composer},k)),f.createElement(p.Z,{title:K.user.username},f.createElement(m.Z,{component:C.Z,to:Y.url(R.USER_PROFILE_ROUTE_NAME,K.user),"aria-label":"Profile",className:F.profile},f.createElement(E.Z,{alt:K.user.username,src:K.user.avatar}))),f.createElement(f.Fragment,null,f.createElement(m.Z,{className:O()(F.notification,{[F.active]:n.startsWith(Y.url(R.USER_NOTIFICATIONS_ROUTE_NAME,{}))}),"aria-label":"Notification",onClick:e=>{te(e.currentTarget),y&&y()}},f.createElement(N.Z,{badgeContent:K.user.unseen_notification_banners_counter+K.user.unseen_interactions_counter,color:"secondary"},f.createElement(d.Z,null,"notifications_active"))),f.createElement(A,Object.assign({className:F.notificationsMenu,id:"notification-menu",anchorEl:ee,open:Boolean(ee),onClose:ne,onClick:ne,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"}},I))),Q&&f.createElement(m.Z,{className:O()(F.messages,{[F.active]:n.startsWith(Y.url(R.USER_PRIVATE_MESSAGES_ROUTE_NAME,{}))}),"aria-label":"Messages",to:Y.url(R.USER_PRIVATE_MESSAGES_ROUTE_NAME,{}),component:C.Z},f.createElement(N.Z,{badgeContent:0,color:"secondary"},f.createElement(d.Z,null,"email"))),g,f.createElement(T,{className:F.settings})):f.createElement(f.Fragment,null,g,f.createElement(u.Z,{color:"inherit",component:C.Z,to:Y.url(R.SIGNIN_ROUTE_NAME,{})},f.createElement(S.Z,{id:"ui.appBar.navigation.login",defaultMessage:"ui.appBar.navigation.login"}))))},K={sidebar_label:"Navigation Toolbar",sidebar_position:1,title:"Navigation Toolbar"},Y=void 0,H={id:"sdk/community-js/react-ui/Components/NavigationToolbar",title:"Navigation Toolbar",description:"The Navigation Toolbar component renders the application header.",source:"@site/docs/sdk/community-js/react-ui/Components/NavigationToolbar.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/NavigationToolbar",permalink:"/docs/sdk/community-js/react-ui/Components/NavigationToolbar",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/NavigationToolbar.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Navigation Toolbar",sidebar_position:1,title:"Navigation Toolbar"},sidebar:"sdkSidebar",previous:{title:"Loyalty Program",permalink:"/docs/sdk/community-js/react-ui/Components/LoyaltyProgram"},next:{title:"Navigation Toolbar Mobile",permalink:"/docs/sdk/community-js/react-ui/Components/NavigationToolbarMobile"}},q={},Q=[{value:"Usage",id:"usage",level:4}];function X(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["The Navigation Toolbar component renders the application header.",(0,o.jsx)("br",{}),"\nNavigation Toolbar allows users to perform search action, to create contributes and to navigate through the entire application through shortcuts that refer to the main sections (such as home, feed, profile, notifications, etc)."]}),"\n"]}),"\n","\n","\n",(0,o.jsx)(i.Z,{children:(0,o.jsx)(W,{})}),"\n",(0,o.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {NavigationToolbar} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><NavigationToolbar /></SCContextProvider>\n   );\n }\n"})})]})}function z(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(X,{...e})}):X(e)}},68501:(e,t,n)=>{n.d(t,{Z:()=>Z});var o=n(97582),a=n(67294),i=n(90948),s=n(93946),r=n(67564),c=n(13391),l=n(76171),m=n(41538),u=n(65580),p=n(97265),E=n(12132),N=n(94184),f=n.n(N),d=n(29360),_=n(44012),g=n(91290),O=n(20377),T=n(70050);const h="SCComposerIconButton",P={root:`${h}-root`},b=(0,i.ZP)(s.Z,{name:h,slot:"Root"})((()=>({}))),Z=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:h}),{className:i=null,ComposerProps:s={},onClick:N}=n,Z=(0,o._T)(n,["className","ComposerProps","onClick"]),[S,I]=(0,a.useState)(!1),v=(0,c.LD)(),C=(0,l.RM)(),R=(0,m.sy)(),{enqueueSnackbar:k}=(0,O.Ds)(),y=(0,a.useCallback)((e=>{v.user?u.IT(v.user)?k(a.createElement(_.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3}):I(!0):C.settings.handleAnonymousAction(),N&&N(e)}),[N,k,C.settings,v.user]),M=(0,a.useCallback)((()=>{I(!1)}),[]),A=(0,a.useMemo)((()=>e=>{I(!1),k(a.createElement(_.Z,{id:"ui.composerIconButton.composer.success",defaultMessage:"ui.composerIconButton.composer.success"}),{action:t=>a.createElement(p.Z,{to:R.url(E[`${e.type.toUpperCase()}_ROUTE_NAME`],(0,T.p3)(e))},a.createElement(_.Z,{id:"ui.composerIconButton.composer.viewContribute",defaultMessage:"ui.composerIconButton.composer.viewContribute"})),variant:"success",autoHideDuration:7e3})}),[]);return a.createElement(a.Fragment,null,a.createElement(b,Object.assign({className:f()(P.root,i)},Z,{onClick:y,ref:t}),a.createElement(r.Z,null,"add_circle_outline")),a.createElement(g.Z,Object.assign({open:S,fullWidth:!0,onClose:M,onSuccess:A},s)))}))},87430:(e,t,n)=>{n.d(t,{Z:()=>se});var o=n(97582),a=n(67294),i=n(90948),s=n(16362),r=n(63084),c=n(29736),l=n(10930),m=n(87576),u=n(52227),p=n(32527),E=n(80101),N=n(39711),f=n(65499),d=n(88942),_=n(60241),g=n(75459),O=n(1798),T=n.n(O),h=n(56114),P=n(94253),b=n(84118),Z=n(18972),S=n(87952),I=n(15861),v=n(94944),C=n(94184),R=n.n(C),k=n(78462),y=n(2734),M=n(97212),A=n(88078),j=n(79467),U=n(68693);const L="SCSnippetNotifications",D={root:`${L}-skeleton-root`,list:`${L}-list`,item:`${L}-item`},J=(0,i.ZP)(k.Z,{name:L,slot:"SkeletonRoot"})((()=>({})));function x(e){const t=(0,y.Z)(),n=a.createElement(j.Z,{className:D.item,template:U.u.SNIPPET,image:a.createElement(A.Z,{animation:"wave",variant:"circular",width:t.selfcommunity.user.avatar.sizeSmall,height:t.selfcommunity.user.avatar.sizeSmall}),primary:a.createElement(A.Z,{animation:"wave",height:10,width:120,style:{marginBottom:10}}),secondary:a.createElement(A.Z,{animation:"wave",height:10,width:70,style:{marginBottom:10}})});return a.createElement(J,Object.assign({className:D.root},e),[...Array(7)].map(((e,t)=>a.createElement(M.ZP,{className:D.item,key:t},n))))}var $=n(88529),w=n(86896),B=n(44012),F=n(20342),G=n(24243),V=n(24085),W=n(99960),K=n(85472),Y=n(13391),H=n(41538),q=n(66380),Q=n(29234),X=n(97265),z=n(12132),ee=n(29360),te=n(36513),ne=n(654);const oe={root:`${L}-root`,notificationsWrap:`${L}-notifications-wrap`,emptyBoxNotifications:`${L}-empty-box-notifications`,list:`${L}-list`,broadcastMessagesBanner:`${L}-broadcast-messages-banner`,item:`${L}-item`},ae=(0,i.ZP)(P.Z,{name:L,slot:"Root"})((()=>({}))),ie=[K.iH,K.QX];const se=function(e){const t=(0,ee.Z)({props:e,name:L}),{id:n="snippetNotifications",className:i,showMax:O=20,handleCustomNotification:C,handleNotification:k,ScrollContainerProps:y={},onNotificationClick:M,onFetchNotifications:A}=t,D=(0,o._T)(t,["id","className","showMax","handleCustomNotification","handleNotification","ScrollContainerProps","onNotificationClick","onFetchNotifications"]),J=(0,Y.LD)(),se=(0,H.sy)(),[re,ce]=(0,a.useState)([]),[le,me]=(0,a.useState)(!1),[ue,pe]=(0,a.useState)(!1),Ee=(0,a.useRef)(null),Ne=(0,q.ko)(),fe=(0,a.useMemo)((()=>{const e={};return ie.map((t=>e[t]=t in Ne.preferences?Ne.preferences[t].value:null)),e}),[Ne.preferences]),de=(0,w.Z)(),_e=(0,a.useMemo)((()=>()=>G.Z.request({url:V.Z.UserNotificationList.url(),method:V.Z.UserNotificationList.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[]),ge=(0,a.useMemo)((()=>()=>{me(!0),ue||(pe(!0),_e().then((e=>{ce(e.results),pe(!1),J.refreshCounters(),A&&A(e.results)})).catch((e=>{W.Y.error(g.J,e)})))}),[ue,re.length,A,me]);(0,a.useEffect)((()=>{let e;if(J.user&&!le)return e=setTimeout(ge),()=>{e&&clearTimeout(e)}}),[J.user,le]);const Oe=(e,t)=>{t&&t.type===F.E.INTERACTION&&Q.hP[t.data.activity_type]&&!Q.$A.includes(t.data.activity_type)&&t.data.notification_obj&&ce([{is_new:!0,sid:"",aggregated:[t.data.notification_obj]},...re])};return(0,a.useEffect)((()=>(ue||(Ee.current=T().subscribe(F.E.INTERACTION,Oe)),()=>{Ee.current&&T().unsubscribe(Ee.current)})),[ue]),a.createElement(ae,Object.assign({id:n,className:R()(oe.root,i)},D),a.createElement(P.Z,{className:oe.notificationsWrap},!le||ue?a.createElement(x,{elevation:0}):a.createElement($.Z,Object.assign({},y),a.createElement(b.Z,{className:oe.list,disabledItemsFocusable:!0,disableListWrap:!0},J.user.unseen_notification_banners_counter?a.createElement(Z.Z,{className:R()(oe.item,oe.broadcastMessagesBanner),key:"banner",component:X.Z,to:se.url(z.USER_NOTIFICATIONS_ROUTE_NAME,{})},a.createElement(j.Z,{template:U.u.SNIPPET,isNew:!0,disableTypography:!0,image:a.createElement(S.Z,{alt:fe[K.QX],src:fe[K.iH]}),primary:a.createElement(I.Z,{component:"div"},de.formatMessage({id:"ui.snippetNotifications.broadcastMessages",defaultMessage:"ui.snippetNotifications.broadcastMessages"},{count:J.user.unseen_notification_banners_counter,b:(...e)=>a.createElement("strong",null,e),link:(...e)=>a.createElement(X.Z,{to:se.url(z.USER_NOTIFICATIONS_ROUTE_NAME,{})},e)}))})):null,0===re.length?a.createElement(Z.Z,{className:oe.emptyBoxNotifications},a.createElement(B.Z,{id:"ui.snippetNotifications.noNotifications",defaultMessage:"ui.snippetNotifications.noNotifications"})):re.slice(0,O).map(((e,t)=>e.aggregated.map(((e,n)=>a.createElement(Z.Z,{className:oe.item,key:n,onClick:t=>((e,t)=>{M&&M(e,t)})(t,e),disableRipple:!0,disableTouchRipple:!0},((e,t)=>{const n=e.type;let o;if(n===F.J.COMMENT||n===F.J.NESTED_COMMENT)o=a.createElement(s.Z,{notificationObject:e,key:t,index:t,template:U.u.SNIPPET});else if(n===F.J.FOLLOW)o=a.createElement(h.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.USER_FOLLOW)o=a.createElement(r.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.CONNECTION_REQUEST||n===F.J.CONNECTION_ACCEPT)o=a.createElement(m.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.VOTE_UP)o=a.createElement(_.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.KINDLY_NOTICE_ADVERTISING||n===F.J.KINDLY_NOTICE_AGGRESSIVE||n===F.J.KINDLY_NOTICE_POOR||n===F.J.KINDLY_NOTICE_VULGAR||n===F.J.KINDLY_NOTICE_OFFTOPIC)o=a.createElement(f.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.KINDLY_NOTICE_FLAG)o=a.createElement(d.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.DELETED_FOR_ADVERTISING||n===F.J.DELETED_FOR_AGGRESSIVE||n===F.J.DELETED_FOR_POOR||n===F.J.DELETED_FOR_VULGAR||n===F.J.DELETED_FOR_OFFTOPIC)o=a.createElement(l.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.UNDELETED_FOR)o=a.createElement(c.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.COLLAPSED_FOR_ADVERTISING||n===F.J.COLLAPSED_FOR_AGGRESSIVE||n===F.J.COLLAPSED_FOR_POOR||n===F.J.COLLAPSED_FOR_VULGAR||n===F.J.COLLAPSED_FOR_OFFTOPIC)o=a.createElement(N.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.PRIVATE_MESSAGE)o=a.createElement(u.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.BLOCKED_USER||n===F.J.UNBLOCKED_USER)o=a.createElement(p.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.MENTION)o=a.createElement(E.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.INCUBATOR_APPROVED)o=a.createElement(v.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(n===F.J.CUSTOM_NOTIFICATION&&C)o=C(e);else if(n===F.J.CONTRIBUTION)o=a.createElement(te.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});else if(e.type===F.J.USER_ADDED_TO_GROUP||e.type===F.J.USER_INVITED_TO_JOIN_GROUP||e.type===F.J.USER_ACCEPTED_TO_JOIN_GROUP||e.type===F.J.USER_REQUESTED_TO_JOIN_GROUP)return a.createElement(ne.Z,{notificationObject:e,key:t,template:U.u.SNIPPET});return n&&k&&(o=k(n,e,o)),o})(e,t))))))))))}}}]);