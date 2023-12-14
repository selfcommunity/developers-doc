"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[72715],{92991:(e,t,o)=>{o.d(t,{Z:()=>g});var n=o(67294),r=o(27331),a=o(5730);function s(e,t){void 0===e&&(e=""),void 0===t&&(t={});const o=Object.keys(t).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(t[e]))).join("&");return fetch(e,{method:"POST",headers:{accept:"application/json","content-type":"application/x-www-form-urlencoded"},body:o})}function l(){if((0,a.Z)()){const e={refresh_token:JSON.parse(window.localStorage.getItem("token")).refresh_token,client_id:r.r.user.client_id,grant_type:"refresh_token"};return s(`${r.r.portal}/oauth/token/`,e).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>Promise.reject(e)))}}function c(){const e=(0,a.Z)(),[t,o]=(0,n.useState)(e?JSON.parse(window.localStorage.getItem("token")):"");return(0,n.useEffect)((()=>{e&&(!t||1e3*t.expiresIn<Date.now()?s(`${r.r.portal}/oauth/token/`,r.r.user).then((e=>e.json())).then((e=>({accessToken:e.access_token,refreshToken:e.refresh_token,tokenType:e.token_type,expiresIn:e.expires_in}))).catch((e=>e)).then((e=>{o(e)})):e&&o(JSON.parse(window.localStorage.getItem("token"))))}),[e]),(0,n.useEffect)((()=>{e&&window.localStorage.setItem("token",JSON.stringify(t))}),[e,t]),t}var i=o(53704),m=o(21367),d=o(19666),u=o(85893);function g(e){let{children:t}=e;const o=c(),n={portal:r.r.portal,locale:{default:"en"},session:{type:"OAuth",clientId:r.r.user.client_id,authToken:o,handleRefreshToken:l},theme:m.Z,handleAnonymousAction:()=>{alert("Anonymous action")}};return(0,u.jsx)(d.Z,{children:()=>(0,u.jsx)(i.ZP,{conf:n,children:t})})}},27331:(e,t,o)=>{o.d(t,{r:()=>n});const n={user:{username:"beatrice",password:"Password!!Beatrice2021",client_id:"XJjPE54IBBjhibs0Rf0wZ969cZNPq6WjC02FrkaM",grant_type:"password"},portal:"https://api.fashionista.community"}},24210:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>N,contentTitle:()=>P,default:()=>I,frontMatter:()=>x,metadata:()=>B,toc:()=>S});var n=o(85893),r=o(11151),a=o(92991),s=o(67294),l=o(90948),c=o(5616),i=o(89587),m=o(14027),d=o(98365),u=o(69641),g=o(88078),p=o(75249);const y={root:`${p.B}-skeleton-root`},f=(0,l.ZP)(c.Z,{name:p.B,slot:"SkeletonRoot"})((()=>({})));function h(){return s.createElement(f,{className:y.root},s.createElement(g.Z,{sx:{height:270},animation:"wave",variant:"rectangular"}),s.createElement(c.Z,null,s.createElement(g.Z,{animation:"wave",sx:{height:20,maxWidth:300,width:"100%",margin:"0 auto"}})),s.createElement(c.Z,null,s.createElement(g.Z,{animation:"wave",sx:{height:20,maxWidth:300,width:"100%",margin:"0 auto"}})))}const w="SCCategoryTemplate",Z={root:`${w}-skeleton-root`},C=(0,l.ZP)(c.Z,{name:w,slot:"SkeletonRoot"})((()=>({})));function k(){return s.createElement(C,{className:Z.root},s.createElement(h,null),s.createElement(u.Z,null))}var E=o(29628),v=o(94184),j=o.n(v);const F={root:`${w}-root`,feed:`${w}-feed`},_=(0,l.ZP)(c.Z,{name:w,slot:"Root"})((()=>({})));const b=function(e){const t=(0,E.Z)({props:e,name:w}),{id:o="category",className:n,category:r,categoryId:a,widgets:l,FeedObjectProps:c,FeedSidebarProps:u,CategoryFeedProps:g={}}=t,{scCategory:p}=(0,d.Z)({id:a,category:r});return p?s.createElement(_,{id:o,className:j()(F.root,n)},s.createElement(i.Z,{category:p}),s.createElement(m.Z,Object.assign({className:F.feed,category:p,widgets:l,FeedObjectProps:c,FeedSidebarProps:u},g))):s.createElement(k,null)},x={sidebar_label:"Category",sidebar_position:1,title:"Category"},P=void 0,B={id:"sdk/community-js/react-templates/Components/Category",title:"Category",description:"The Category template renders the category page.",source:"@site/docs/sdk/community-js/react-templates/Components/Category.mdx",sourceDirName:"sdk/community-js/react-templates/Components",slug:"/sdk/community-js/react-templates/Components/Category",permalink:"/docs/sdk/community-js/react-templates/Components/Category",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-templates/Components/Category.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Category",sidebar_position:1,title:"Category"},sidebar:"sdkSidebar",previous:{title:"UserProfileProps",permalink:"/docs/sdk/community-js/react-templates/Component API/interfaces/UserProfile.UserProfileProps"},next:{title:"Category Feed",permalink:"/docs/sdk/community-js/react-templates/Components/CategoryFeed"}},N={},S=[{value:"Usage",id:"usage",level:4}];function O(e){const t={blockquote:"blockquote",code:"code",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"The Category template renders the category page."}),"\n"]}),"\n","\n","\n",(0,n.jsx)(a.Z,{children:(0,n.jsx)(b,{categoryId:3})}),"\n",(0,n.jsx)(t.h4,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:" import React from 'react';\n import {SCContextProvider} from '@selfcommunity/react-core';\n import {Category} from '@selfcommunity/react-templates';\n\n function App() {\n   const conf = {\n     portal: '<community-path>',\n     session: {\n       type: 'OAuth',\n       token: '<community-token>',\n       refreshToken: '<community-refresh-token>',\n       refreshTokenEndpoint: '<community-refresh-endpoint>',\n     },\n   };\n   return (\n     <SCContextProvider conf={conf}><Category/></SCContextProvider>\n   );\n }\n"})})]})}function I(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(O,{...e})}):O(e)}},75802:(e,t,o)=>{o.d(t,{Z:()=>k});var n,r=o(97582),a=o(67294),s=o(90948),l=o(59219),c=o(99960),i=o(53704),m=o(68689),d=o(98365),u=o(75459),g=o(31812),p=o(44012),y=o(94184),f=o.n(y),h=o(29628);!function(e){e.NONE="none",e.DEFAULT="default",e.FORCED="forced"}(n||(n={}));const w="SCCategoryFollowButton",Z={root:`${w}-root`},C=(0,s.ZP)(g.Z,{name:w,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({})));const k=function(e){const t=(0,h.Z)({props:e,name:w}),{className:o,categoryId:s,category:g,onFollow:y}=t,k=(0,r._T)(t,["className","categoryId","category","onFollow"]),E=(0,i.RM)(),v=(0,m.LD)(),j=v.managers.categories,F=v.user?v.user.id:null,{scCategory:_,setSCCategory:b}=(0,d.Z)({id:s,category:g,cacheStrategy:F?l.n2.CACHE_FIRST:l.n2.STALE_WHILE_REVALIDATE}),[x,P]=(0,a.useState)(null);return(0,a.useEffect)((()=>{F&&P(j.isFollowed(_))}),[F,j.isFollowed]),!_||_&&x&&_.auto_follow===n.FORCED?null:a.createElement(C,Object.assign({size:"small",variant:"outlined",onClick:()=>{v.user?j.follow(_).then((()=>{y&&y(_,!x)})).catch((e=>{c.Y.error(u.J,e)})):E.settings.handleAnonymousAction()},loading:v.user?null===x||j.isLoading(_):null,className:f()(Z.root,o)},k),x&&v.user?a.createElement(p.Z,{defaultMessage:"ui.categoryFollowButton.unfollow",id:"ui.categoryFollowButton.unfollow"}):a.createElement(p.Z,{defaultMessage:"ui.categoryFollowButton.follow",id:"ui.categoryFollowButton.follow"}))}},75249:(e,t,o)=>{o.d(t,{B:()=>n});const n="SCCategoryHeader"},89587:(e,t,o)=>{o.d(t,{Z:()=>U});var n=o(97582),r=o(67294),a=o(90948),s=o(5616),l=o(90629),c=o(15861),i=o(75802),m=o(44012),d=o(98365),u=o(94184),g=o.n(u),p=o(29628),y=o(69417),f=o(2734),h=o(51107),w=o(87952),Z=o(78462),C=o(97212),k=o(39154),E=o(79558),v=o(50353),j=o(37089),F=o(98704),_=o(65001),b=o(24085),x=o(59107),P=o(98396),B=o(99960),N=o(75459),S=o(87620);const O="SCCategoryFollowersButton",I={root:`${O}-root`,dialogRoot:`${O}-dialog-root`,endMessage:`${O}-end-message`},T=(0,a.ZP)(y.Z,{name:O,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({}))),R=(0,a.ZP)(k.Z,{name:O,slot:"Root",overridesResolver:(e,t)=>t.dialogRoot})((()=>({})));const $=function(e){const t=(0,p.Z)({props:e,name:O}),{className:o,categoryId:a,category:s,DialogProps:l={}}=t,i=(0,n._T)(t,["className","categoryId","category","DialogProps"]),[u,y]=(0,r.useState)(!0),[k,$]=(0,r.useState)(null),[M,A]=(0,r.useState)(null),[D,U]=(0,r.useState)([]),[J,L]=(0,r.useState)(!1),{scCategory:q}=(0,d.Z)({id:a,category:s});(0,S.F_)((()=>{q&&(0===D.length?F.Z.getCategoryFollowers(q.id,{limit:3}).then((e=>{U([...e.results]),A(3),y(!1)})):A(0))}),[q]),(0,r.useEffect)((()=>{J&&null!==M&&(y(!0),F.Z.getCategoryFollowers(q.id,{offset:M,limit:20}).then((e=>{U([...0===M?[]:D,...e.results]),$(e.next),y(!1),A(null)})))}),[J,D,M]);const H=(0,r.useMemo)((()=>()=>{k&&_.Z.request({url:k,method:b.Z.CategoryFollowers.method}).then((e=>{U([...D,...e.data.results]),$(e.data.next)})).catch((e=>B.Y.error(N.J,e))).then((()=>y(!1)))}),[D,q,k]),W=(0,r.useMemo)((()=>()=>{L((e=>!e))}),[L]),Y=(0,f.Z)(),z=(0,P.Z)(Y.breakpoints.down("md"));return r.createElement(r.Fragment,null,r.createElement(T,Object.assign({className:g()(I.root,o),onClick:W,disabled:u||!q||0===q.followers_counter},i),u||!q?r.createElement(x.Z,Object.assign({},i)):r.createElement(h.Z,{total:q.followers_counter},D.map((e=>r.createElement(w.Z,{key:e.id,alt:e.username,src:e.avatar}))))),J&&r.createElement(R,Object.assign({className:I.dialogRoot,title:r.createElement(m.Z,{defaultMessage:"ui.categoryFollowersButton.dialogTitle",id:"ui.categoryFollowersButton.dialogTitle",values:{total:q.followers_counter}}),onClose:W,open:J},l),r.createElement(E.Z,{dataLength:D.length,next:H,hasMoreNext:null!==k||u,loaderNext:r.createElement(v.Z,{elevation:0}),height:z?"100%":400,endMessage:r.createElement(c.Z,{className:I.endMessage},r.createElement(m.Z,{id:"ui.categoryFollowersButton.noOtherFollowers",defaultMessage:"ui.categoryFollowersButton.noOtherFollowers"}))},r.createElement(Z.Z,null,D.map((e=>r.createElement(C.ZP,{key:e.id},r.createElement(j.Z,{elevation:0,user:e}))))))))};var M=o(75249);const A={root:`${M.B}-root`,cover:`${M.B}-cover`,name:`${M.B}-name`,slogan:`${M.B}-slogan`,info:`${M.B}-info`,followedCounter:`${M.B}-followed-counter`,followed:`${M.B}-followed`,action:`${M.B}-action`},D=(0,a.ZP)(s.Z,{name:M.B,slot:"Root"})((()=>({})));const U=function(e){const t=(0,p.Z)({props:e,name:M.B}),{className:o,categoryId:a,category:u,CategoryFollowButtonProps:y={},CategoryFollowersButtonProps:f={}}=t,h=(0,n._T)(t,["className","categoryId","category","CategoryFollowButtonProps","CategoryFollowersButtonProps"]),{scCategory:w,setSCCategory:Z}=(0,d.Z)({id:a,category:u}),C=(0,r.useMemo)((()=>Object.assign({},w?{background:`url('${w.emotional_image_original}') center / cover`}:{})),[w]);return w?r.createElement(D,Object.assign({className:g()(A.root,o)},h),r.createElement(l.Z,{style:C,classes:{root:A.cover}}),r.createElement(s.Z,{className:A.info},r.createElement(c.Z,{variant:"h3",className:A.name,gutterBottom:!0},w.name),w.slogan&&r.createElement(c.Z,{variant:"h5",className:A.slogan},w.slogan),r.createElement(s.Z,{className:A.followed},r.createElement(c.Z,{className:A.followedCounter,component:"div"},r.createElement(m.Z,{id:"ui.categoryHeader.followedBy",defaultMessage:"ui.categoryHeader.followedBy",values:{total:w.followers_counter}})),r.createElement($,Object.assign({category:w,categoryId:null==w?void 0:w.id},f))),r.createElement(s.Z,{className:A.action},r.createElement(i.Z,Object.assign({category:w,onFollow:(e,t)=>{Z(Object.assign(Object.assign({},e),{followers_counter:e.followers_counter+(t?1:-1)}))}},y))))):null}}}]);