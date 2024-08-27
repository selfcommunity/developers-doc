"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[23367],{92991:(e,o,t)=>{t.d(o,{Z:()=>d});var n=t(67294),s=t(27331),a=t(5730);function r(e,o){void 0===e&&(e=""),void 0===o&&(o={});const t=Object.keys(o).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(o[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:t})}function i(){if((0,a.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:s.r.user.client_id,grant_type:"refresh_token"};return r(`${s.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,a.Z)(),[o,t]=(0,n.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,n.useEffect)((()=>{e&&(!o||1e3*o.expiresIn<Date.now()?r(`${s.r.portal}/oauth/token/`,s.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{t(e)})):e&&t(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(o))}),[e,o]),o}var l=t(76171),u=t(89521),m=t(19666),p=t(85893);function d(e){let{children:o}=e;const t=c(),n={portal:s.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:s.r.user.client_id,authToken:t,handleRefreshToken:i},theme:u.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,p.jsx)(m.Z,{children:()=>(0,p.jsx)(l.ZP,{conf:n,children:o})})}},27331:(e,o,t)=>{t.d(o,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},80309:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>K,contentTitle:()=>z,default:()=>ee,frontMatter:()=>W,metadata:()=>X,toc:()=>Y});var n=t(85893),s=t(11151),a=t(92991),r=t(97582),i=t(90948),c=t(83117),l=t(80102),u=t(67294),m=(t(76607),t(63961)),p=t(94780),d=t(28628),h=t(1588),f=t(34867);function g(e){return(0,f.ZP)("MuiBottomNavigation",e)}(0,h.Z)("MuiBottomNavigation",["root"]);const v=["children","className","component","onChange","showLabels","value"],E=(0,i.ZP)("div",{name:"MuiBottomNavigation",slot:"Root",overridesResolver:(e,o)=>o.root})((({theme:e})=>({display:"flex",justifyContent:"center",height:56,backgroundColor:(e.vars||e).palette.background.paper}))),k=u.forwardRef((function(e,o){const t=(0,d.i)({props:e,name:"MuiBottomNavigation"}),{children:s,className:a,component:r="div",onChange:i,showLabels:h=!1,value:f}=t,k=(0,l.Z)(t,v),N=(0,c.Z)({},t,{component:r,showLabels:h}),_=(e=>{const{classes:o}=e;return(0,p.Z)({root:["root"]},g,o)})(N);return(0,n.jsx)(E,(0,c.Z)({as:r,className:(0,m.Z)(_.root,a),ref:o,ownerState:N},k,{children:u.Children.map(s,((e,o)=>{if(!u.isValidElement(e))return null;const t=void 0===e.props.value?o:e.props.value;return u.cloneElement(e,{selected:t===f,showLabel:void 0!==e.props.showLabel?e.props.showLabel:h,value:t,onChange:i})}))}))})),N=k;var _=t(49990);function b(e){return(0,f.ZP)("MuiBottomNavigationAction",e)}const y=(0,h.Z)("MuiBottomNavigationAction",["root","iconOnly","selected","label"]),Z=["className","icon","label","onChange","onClick","selected","showLabel","value"],C=(0,i.ZP)(_.Z,{name:"MuiBottomNavigationAction",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,!t.showLabel&&!t.selected&&o.iconOnly]}})((({theme:e,ownerState:o})=>(0,c.Z)({transition:e.transitions.create(["color","padding-top"],{duration:e.transitions.duration.short}),padding:"0px 12px",minWidth:80,maxWidth:168,color:(e.vars||e).palette.text.secondary,flexDirection:"column",flex:"1"},!o.showLabel&&!o.selected&&{paddingTop:14},!o.showLabel&&!o.selected&&!o.label&&{paddingTop:0},{[`&.${y.selected}`]:{color:(e.vars||e).palette.primary.main}}))),w=(0,i.ZP)("span",{name:"MuiBottomNavigationAction",slot:"Label",overridesResolver:(e,o)=>o.label})((({theme:e,ownerState:o})=>(0,c.Z)({fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(12),opacity:1,transition:"font-size 0.2s, opacity 0.2s",transitionDelay:"0.1s"},!o.showLabel&&!o.selected&&{opacity:0,transitionDelay:"0s"},{[`&.${y.selected}`]:{fontSize:e.typography.pxToRem(14)}}))),R=u.forwardRef((function(e,o){const t=(0,d.i)({props:e,name:"MuiBottomNavigationAction"}),{className:s,icon:a,label:r,onChange:i,onClick:u,value:h}=t,f=(0,l.Z)(t,Z),g=t,v=(e=>{const{classes:o,showLabel:t,selected:n}=e,s={root:["root",!t&&!n&&"iconOnly",n&&"selected"],label:["label",!t&&!n&&"iconOnly",n&&"selected"]};return(0,p.Z)(s,b,o)})(g);return(0,n.jsxs)(C,(0,c.Z)({ref:o,className:(0,m.Z)(v.root,s),focusRipple:!0,onClick:e=>{i&&i(e,h),u&&u(e)},ownerState:g},f,{children:[a,(0,n.jsx)(w,{className:v.label,ownerState:g,children:r})]}))})),S=R;var B=t(67564),x=t(19529),T=t(13391),j=t(41538),M=t(66380),O=t(97265),A=t(12132),I=t(85472),P=t(65580),U=t(29360),L=t(94184),$=t.n(L),D=t(72951),G=t(64635),q=t(68501);const F="SCBottomNavigation",J={root:`${F}-root`,ios:`${F}-ios`,action:`${F}-action`,composer:`${F}-composer`},H=(0,i.ZP)(N,{name:F,slot:"Root",overridesResolver:(e,o)=>o.root})((()=>({})));const V=function(e){const o=(0,U.Z)({props:e,name:F}),{className:t,children:n=null}=o,s=(0,r._T)(o,["className","children"]),a=(0,T.LD)(),i=(0,j.sy)(),{preferences:c,features:l}=(0,M.ko)(),m=(0,u.useMemo)((()=>l.includes(D.$.PRIVATE_MESSAGING)),[l]),p=(0,u.useMemo)((()=>l.includes(D.$.GROUPING)&&l.includes(D.$.TAGGING)),[l]),d=(0,u.useMemo)((()=>(0,G.g)()),[]);return u.createElement(H,Object.assign({className:$()(t,J.root,{[J.ios]:d})},s),n||[u.createElement(S,{key:"home",className:J.action,component:O.Z,to:a.user?i.url(A.HOME_ROUTE_NAME,{}):"/",value:a.user?i.url(A.HOME_ROUTE_NAME,{}):"/",icon:u.createElement(B.Z,null,"home")}),(a.user||c[I.Ao].value)&&c[I.Y9].value?u.createElement(S,{key:"explore",className:J.action,component:O.Z,to:i.url(A.EXPLORE_ROUTE_NAME,{}),value:i.url(A.EXPLORE_ROUTE_NAME,{}),icon:u.createElement(B.Z,null,"explore")}):null,!c[I.Kq].value||P.B2(a.user)&&c[I.Kq].value?u.createElement(S,{key:"composer",className:$()(J.composer,J.action),component:q.Z,disableRipple:!0}):null,p&&a.user?u.createElement(S,{key:"groups",className:J.action,component:O.Z,to:i.url(A.GROUPS_SUBSCRIBED_ROUTE_NAME,{}),value:i.url(A.GROUPS_SUBSCRIBED_ROUTE_NAME,{}),icon:u.createElement(B.Z,null,"groups")}):null,a.user&&!p?u.createElement(S,{key:"notifications",className:J.action,component:O.Z,to:i.url(A.USER_NOTIFICATIONS_ROUTE_NAME,{}),value:i.url(A.USER_NOTIFICATIONS_ROUTE_NAME,{}),icon:u.createElement(x.Z,{badgeContent:a.user.unseen_notification_banners_counter+a.user.unseen_interactions_counter,color:"secondary"},u.createElement(B.Z,null,"notifications_active"))}):null,m&&a.user?u.createElement(S,{key:"messages",className:J.action,component:O.Z,to:i.url(A.USER_PRIVATE_MESSAGES_ROUTE_NAME,{}),value:i.url(A.USER_PRIVATE_MESSAGES_ROUTE_NAME,{}),icon:u.createElement(x.Z,{badgeContent:0,color:"secondary"},u.createElement(B.Z,null,"email"))}):null])},W={sidebar_label:"Bottom Navigation",sidebar_position:1,title:"Bottom Navigation"},z=void 0,X={id:"sdk/community-js/react-ui/Components/BottomNavigation",title:"Bottom Navigation",description:"The Bottom Navigation component renders the bottom navigation bar when browsing from mobile.",source:"@site/docs/sdk/community-js/react-ui/Components/BottomNavigation.mdx",sourceDirName:"sdk/community-js/react-ui/Components",slug:"/sdk/community-js/react-ui/Components/BottomNavigation",permalink:"/docs/sdk/community-js/react-ui/Components/BottomNavigation",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/Components/BottomNavigation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Bottom Navigation",sidebar_position:1,title:"Bottom Navigation"},sidebar:"sdkSidebar",previous:{title:"Account Reset",permalink:"/docs/sdk/community-js/react-ui/Components/AccountReset"},next:{title:"Broadcast Messages",permalink:"/docs/sdk/community-js/react-ui/Components/BroadcastMessages"}},K={},Y=[{value:"Usage",id:"usage",level:4}];function Q(e){const o={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["The Bottom Navigation component renders the bottom navigation bar when browsing from mobile.",(0,n.jsx)("br",{}),"\nBottom Navigation allows users to navigate through the entire application through shortcuts that refer to the main sections (such as home, feed, messages and notifications)."]}),"\n"]}),"\n","\n","\n",(0,n.jsx)(a.Z,{children:(0,n.jsx)(V,{})}),"\n",(0,n.jsx)(o.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {BottomNavigation} from '@selfcommunity/react-ui';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><BottomNavigation /></SCContextProvider>\n   );\n }\n"})})]})}function ee(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(Q,{...e})}):Q(e)}},68501:(e,o,t)=>{t.d(o,{Z:()=>Z});var n=t(97582),s=t(67294),a=t(90948),r=t(93946),i=t(67564),c=t(13391),l=t(76171),u=t(41538),m=t(65580),p=t(97265),d=t(12132),h=t(94184),f=t.n(h),g=t(29360),v=t(44012),E=t(91290),k=t(20377),N=t(70050);const _="SCComposerIconButton",b={root:`${_}-root`},y=(0,a.ZP)(r.Z,{name:_,slot:"Root"})((()=>({}))),Z=s.forwardRef((function(e,o){const t=(0,g.Z)({props:e,name:_}),{className:a=null,ComposerProps:r={},onClick:h}=t,Z=(0,n._T)(t,["className","ComposerProps","onClick"]),[C,w]=(0,s.useState)(!1),R=(0,c.LD)(),S=(0,l.RM)(),B=(0,u.sy)(),{enqueueSnackbar:x}=(0,k.Ds)(),T=(0,s.useCallback)((e=>{R.user?m.IT(R.user)?x(s.createElement(v.Z,{id:"ui.common.userBlocked",defaultMessage:"ui.common.userBlocked"}),{variant:"warning",autoHideDuration:3e3}):w(!0):S.settings.handleAnonymousAction(),h&&h(e)}),[h,x,S.settings,R.user]),j=(0,s.useCallback)((()=>{w(!1)}),[]),M=(0,s.useMemo)((()=>e=>{w(!1),x(s.createElement(v.Z,{id:"ui.composerIconButton.composer.success",defaultMessage:"ui.composerIconButton.composer.success"}),{action:o=>s.createElement(p.Z,{to:B.url(d[`${e.type.toUpperCase()}_ROUTE_NAME`],(0,N.p3)(e))},s.createElement(v.Z,{id:"ui.composerIconButton.composer.viewContribute",defaultMessage:"ui.composerIconButton.composer.viewContribute"})),variant:"success",autoHideDuration:7e3})}),[]);return s.createElement(s.Fragment,null,s.createElement(y,Object.assign({className:f()(b.root,a)},Z,{onClick:T,ref:o}),s.createElement(i.Z,null,"add_circle_outline")),s.createElement(E.Z,Object.assign({open:C,fullWidth:!0,onClose:j,onSuccess:M},r)))}))}}]);