"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5394],{5394:function(e,t,o){o.d(t,{WD:function(){return R},Yo:function(){return h},S5:function(){return x},Rc:function(){return q},YD:function(){return te},YK:function(){return ae},pk:function(){return xe},pz:function(){return be},Iw:function(){return we}});var n=o(67294),r=o(87357),s=o(11496),i=o(17950);const a="SCCategoryFeedTemplateSkeleton",c={root:`${a}-root`},l=(0,s.ZP)(i.pM,{name:a,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));function p(){return n.createElement(l,{className:c.root,sidebar:n.createElement(n.Fragment,null,n.createElement(i.AU,{sx:{mb:2}}),n.createElement(i.AU,{sx:{mb:2}}))},n.createElement(i.y_,null),Array.from({length:5}).map(((e,t)=>n.createElement(i.t7,{key:t,template:i.r4.DETAIL}))))}const m="SCCategoryTemplateSkeleton",d={root:`${m}-root`},u=(0,s.ZP)(r.Z,{name:m,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));function g(){return n.createElement(u,{className:d.root},n.createElement(i.vP,null),n.createElement(p,null))}var P=o(53324),b=o(43299),f=o(84926),y=o(29628),O=o(94184),E=o.n(O);const j="SCCategoryFeedTemplate",S={root:"SCCategoryFeedTemplate-root"},v=(0,s.ZP)(i.fR,{name:j,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),C=[{type:"widget",component:i.d7,componentProps:{},column:"right",position:0},{type:"widget",component:i.wu,componentProps:{},column:"right",position:1}];var h=function(e){const t=(0,y.Z)({props:e,name:j}),{id:o="category_feed",className:r,category:s,categoryId:a,widgets:c=C,FeedObjectProps:l={},FeedSidebarProps:m=null,FeedProps:d={}}=t,u=(0,n.useRef)(),{scCategory:g}=(0,b._l)({id:a,category:s}),O=(0,n.useMemo)((()=>c.map((e=>g?Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{categoryId:g.id})}):e))),[c,g]);return g?n.createElement(v,Object.assign({id:o,className:E()(S.root,r),ref:u,endpoint:Object.assign(Object.assign({},P.AN.CategoryFeed),{url:()=>P.AN.CategoryFeed.url({id:g.id})}),widgets:O,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:l,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:m,HeaderComponent:n.createElement(i.sA,{onSuccess:e=>{if(-1===e.categories.findIndex((e=>e.id===g.id)))return;const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};u&&u.current&&u.current.addFeedData(t,!0)},defaultValue:{categories:[g]}}),CustomAdvProps:{position:f.nG.POSITION_FEED,categoriesId:[g.id]}},d)):n.createElement(p,null)};const F="SCCategoryTemplate",T={root:"SCCategoryTemplate-root"},w=(0,s.ZP)(r.Z,{name:F,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));var R=function(e){const t=(0,y.Z)({props:e,name:F}),{id:o="category",className:r,category:s,categoryId:a,widgets:c,FeedObjectProps:l,FeedSidebarProps:p,CategoryFeedProps:m={}}=t,{scCategory:d}=(0,b._l)({id:a,category:s});return d?n.createElement(w,{id:o,className:E()(T.root,r)},n.createElement(i.Wt,{category:d}),n.createElement(h,Object.assign({category:d,widgets:c,FeedObjectProps:l,FeedSidebarProps:p},m))):n.createElement(g,null)};const I="SCExploreFeedTemplateSkeleton";(0,s.ZP)(i.pM,{name:I,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const Z="SCExploreFeedTemplate",_={root:"SCExploreFeedTemplate-root"},k=(0,s.ZP)(i.fR,{name:Z,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),N=[{type:"widget",component:i.t4,componentProps:{},column:"right",position:0},{type:"widget",component:i.jb,componentProps:{},column:"right",position:1},{type:"widget",component:i.Jx,componentProps:{},column:"right",position:2},{type:"widget",component:i.qK,componentProps:{},column:"right",position:3}];var x=function(e){const t=(0,y.Z)({props:e,name:Z}),{id:o="explore_feed",className:r,widgets:s=N,FeedObjectProps:a={},FeedSidebarProps:c=null,FeedProps:l={}}=t,p=(0,n.useRef)(),m=(0,n.useMemo)((()=>s.map((e=>Object.assign(Object.assign({},e),{componentProps:Object.assign({},e.componentProps)})))),[s]);return n.createElement(k,Object.assign({id:o,className:E()(_.root,r),ref:p,endpoint:P.AN.ExploreFeed,widgets:m,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:a,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW},HeaderComponent:n.createElement(i.sA,{onSuccess:e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};p&&p.current&&p.current.addFeedData(t,!0)}}),FeedSidebarProps:c},l))},M=o(86886);const A="SCFeedObjectDetailTemplateSkeleton",U={root:"SCFeedObjectDetailTemplateSkeleton-root"},D=(0,s.ZP)(r.Z,{name:A,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));function G(e){const{FeedObjectSkeletonProps:t={},CommentsFeedObjectSkeletonProps:o={},RelatedFeedObjectsSkeletonProps:r={}}=e;return n.createElement(D,{className:U.root},n.createElement(M.ZP,{container:!0,spacing:2},n.createElement(M.ZP,{item:!0,xs:12,md:6},n.createElement(i.t7,Object.assign({template:i.r4.DETAIL},t)),n.createElement(i.Ny,Object.assign({count:4},o))),n.createElement(M.ZP,{item:!0,xs:12,md:6},n.createElement(i.lT,Object.assign({},r)))))}var $=o(50456),B=o(3238),H=o(40673),L=o(44012);const W="SCFeedObjectDetailTemplate",Y={root:"SCFeedObjectDetailTemplate-root"},K=(0,s.ZP)(r.Z,{name:W,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),V=[b.Y_.Rl,b.Y_.OM];var q=function(e){const t=(0,y.Z)({props:e,name:W}),{id:o="feed_object_page",className:s,feedObjectId:a,feedObject:c,feedObjectType:l,FeedObjectProps:p={},CommentsFeedObjectProps:m={},RelatedFeedObjectProps:d={autoHide:!1}}=t,u=(0,b.LD)(),g=(0,b.ko)(),{obj:P,setObj:O,error:j}=(0,b.MF)({id:a,feedObject:c,feedObjectType:l}),[S,v]=(0,n.useState)([]),C=(0,n.useMemo)((()=>{const e={};return V.map((t=>e[t]=t in g.preferences?g.preferences[t].value:null)),e}),[g.preferences]);return j?n.createElement(r.Z,null,n.createElement(L.Z,{id:"templates.feedObjectDetail.contributionNotFound",defaultMessage:"templates.feedObjectDetail.contributionNotFound"})):P?n.createElement(K,{id:o,className:E()(Y.root,s)},n.createElement(M.ZP,{container:!0,spacing:2},n.createElement(M.ZP,{item:!0,xs:12,md:7},n.createElement(i.hi,Object.assign({},p,{feedObject:P,template:i.r4.DETAIL,onReply:function(e){v([...S,e]),setTimeout((()=>{const t=document.getElementById(`comment_object_${e.id}`);t&&(0,H.z)(t,{behavior:"smooth",block:"center",inline:"center"})}),300)}})),C[b.Y_.Rl]&&(C[b.Y_.OM]&&null===u.user||!C[b.Y_.OM])?n.createElement(i.Vt,Object.assign({position:f.nG.POSITION_BELOW_FEED_OBJECT},P.categories.length&&{categoriesId:P.categories.map((e=>e.id))})):null,n.createElement(i.P4,Object.assign({key:`comments_${P.id}`,showTitle:!0,feedObject:P,comments:S},m))),n.createElement(M.ZP,{item:!0,xs:12,md:5},n.createElement($.Z,{mdDown:!0},n.createElement(B.Z,{enabled:!0,top:15,bottomBoundary:`#${o}`},n.createElement(i.cu,Object.assign({key:`related_${P.id}`,feedObject:P},d))))))):n.createElement(G,null)};const z="SCMainFeedTemplateSkeleton";(0,s.ZP)(i.pM,{name:z,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const Q="SCMainFeedTemplate",J={root:"SCMainFeedTemplate-root"},X=(0,s.ZP)(i.fR,{name:Q,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),ee=[{type:"widget",component:i.t4,componentProps:{},column:"right",position:0},{type:"widget",component:i.jb,componentProps:{},column:"right",position:1},{type:"widget",component:i.Qu,componentProps:{},column:"right",position:2},{type:"widget",component:i.qK,componentProps:{},column:"right",position:3}];var te=function(e){const t=(0,y.Z)({props:e,name:Q}),{id:o="main_feed",className:r,widgets:s=ee,FeedObjectProps:a={},FeedSidebarProps:c=null,FeedProps:l={}}=t;return(0,n.useContext)(b.K8).user?n.createElement(X,Object.assign({id:o,className:E()(J.root,r),endpoint:P.AN.MainFeed,widgets:s,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:a,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:c,HeaderComponent:n.createElement(i.sA,null),requireAuthentication:!0},l)):null};const oe="SCNotificationFeedTemplateSkeleton";(0,s.ZP)(i.pM,{name:oe,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const ne="SCNotificationFeedTemplate",re={root:"SCNotificationFeedTemplate-root"},se=(0,s.ZP)(i.fR,{name:ne,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),ie=[{type:"widget",component:i.qj,componentProps:{subscriptionChannel:f.Ed.INTERACTION,publicationChannel:"notifications_feed"},column:"left",position:0,publishEvents:!0},{type:"widget",component:i.oY,componentProps:{subscriptionChannel:"notification_feed"},column:"left",position:0},{type:"widget",component:i.t4,componentProps:{},column:"right",position:0},{type:"widget",component:i.jb,componentProps:{},column:"right",position:1},{type:"widget",component:i.Qu,componentProps:{},column:"right",position:2},{type:"widget",component:i.qK,componentProps:{},column:"right",position:3}];var ae=function(e){const t=(0,y.Z)({props:e,name:ne}),{id:o="notification_feed",className:r,widgets:s=ie,NotificationProps:a={},FeedSidebarProps:c=null,FeedProps:l={}}=t;return(0,n.useContext)(b.K8).user?n.createElement(se,Object.assign({id:o,className:E()(re.root,r),endpoint:P.AN.UserNotificationList,widgets:s,ItemComponent:i.P_,itemPropsGenerator:(e,t)=>({notificationObject:t}),itemIdGenerator:e=>e.sid,ItemProps:a,ItemSkeleton:i.i_,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:c,requireAuthentication:!0},l)):null};const ce="SCUserFeedTemplateSkeleton",le={root:"SCUserFeedTemplateSkeleton-root"},pe=(0,s.ZP)(i.pM,{name:ce,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));function me(){return n.createElement(pe,{className:le.root,sidebar:n.createElement(n.Fragment,null,n.createElement(i.AU,{sx:{mb:2}}),n.createElement(i.AU,{sx:{mb:2}}))},n.createElement(i.y_,null),Array.from({length:5}).map(((e,t)=>n.createElement(i.t7,{key:t,template:i.r4.DETAIL}))))}const de="SCUserFeedTemplate",ue={root:"SCUserFeedTemplate-root"},ge=(0,s.ZP)(i.fR,{name:de,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),Pe=[{type:"widget",component:i.QO,componentProps:{},column:"right",position:0},{type:"widget",component:i.bG,componentProps:{},column:"right",position:1},{type:"widget",component:i.t1,componentProps:{},column:"right",position:2}];var be=function(e){const t=(0,y.Z)({props:e,name:de}),{id:o="user_feed",className:r,userId:s,user:a,widgets:c=Pe,FeedObjectProps:l={},FeedSidebarProps:p=null,FeedProps:m={}}=t,d=(0,b.LD)(),{scUser:u}=(0,b.z3)({id:s,user:a}),g=(0,n.useRef)(),f=(0,n.useMemo)((()=>c.map((e=>Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{userId:u?u.id:s})})))),[u,c]);return null===u?n.createElement(me,null):n.createElement(ge,Object.assign({id:o,className:E()(ue.root,r),ref:g,endpoint:Object.assign(Object.assign({},P.AN.UserFeed),{url:()=>P.AN.UserFeed.url({id:u.id})}),widgets:f,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null}),itemIdGenerator:e=>e[e.type].id,ItemProps:l,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW}},d.user?{HeaderComponent:n.createElement(i.sA,{onSuccess:e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};g&&g.current&&g.current.addFeedData(t,!0)}})}:{},{FeedSidebarProps:p},m))};const fe="SCUserProfileTemplateSkeleton",ye={root:"SCUserProfileTemplateSkeleton-root"},Oe=(0,s.ZP)(r.Z,{name:fe,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));function Ee(){return n.createElement(Oe,{className:ye.root},n.createElement(i.O4,null),n.createElement(me,null))}var je=o(26447),Se=o(83321);const ve="SCUserProfileTemplate",Ce={root:"SCUserProfileTemplate-root",actions:"SCUserProfileTemplate-actions"},he=(0,s.ZP)(r.Z,{name:ve,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2),[`& .${Ce.actions}`]:{margin:e.spacing(2),justifyContent:"space-around"}}))),Fe=[{type:"widget",component:i.QO,componentProps:{},column:"right",position:0},{type:"widget",component:i.bG,componentProps:{},column:"right",position:1}],Te=[{type:"widget",component:i.QO,componentProps:{},column:"right",position:0},{type:"widget",component:i.bG,componentProps:{},column:"right",position:1},{type:"widget",component:i.t1,componentProps:{},column:"right",position:2}];var we=function(e){const t=(0,y.Z)({props:e,name:ve}),{id:o="user_profile",className:r,user:s,userId:a,widgets:c=null,FeedObjectProps:l,FeedSidebarProps:p,UserProfileHeaderProps:m={},UserProfileInfoProps:d={},onEditClick:u=null,UserFeedProps:g={}}=t,P=(0,b.RM)(),f=(0,b.LD)(),{scUser:O}=(0,b.z3)({id:a,user:s});if(null===O)return n.createElement(Ee,null);let j=c;null===j&&(j=(()=>{let e=[];return e=null===f.user?[]:f.user.id===O.id?[...Te]:[...Fe],e.map((e=>Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{userId:O.id})})))})());const S=f.user&&O.id===f.user.id,v=f.user&&f.user.role,C=v&&(v.includes("admin")||v.includes("moderator"));return S||(g.FeedProps=Object.assign({HeaderComponent:null},g.FeedProps)),n.createElement(he,{id:o,className:E()(Ce.root,r)},n.createElement(i.FZ,Object.assign({user:O},m)),n.createElement(i.J4,Object.assign({user:O},d)),n.createElement(je.Z,{key:`actions_${O.id}`,direction:"row",spacing:2,className:Ce.actions},S?n.createElement(Se.Z,{variant:"outlined",color:"secondary",onClick:()=>{u&&u(O)}},n.createElement(L.Z,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"})):n.createElement(i.WO,{user:O}),C&&n.createElement(Se.Z,{variant:"contained",color:"secondary",component:"a",href:`${P.settings.portal}/platform/access?next=/moderation/user/?username=${O.username}`,target:"_blank"},n.createElement(L.Z,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"}))),n.createElement(be,Object.assign({key:`feed_${O.id}`,user:O,widgets:j,FeedObjectProps:l,FeedSidebarProps:p},g)))},Re=o(67564),Ie=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Ze="SCPrivateMessagesTemplate",_e={root:"SCPrivateMessagesTemplate-root",snippetsBox:"SCPrivateMessagesTemplate-snippets-box",threadBox:"SCPrivateMessagesTemplate-thread-box",newMessage:"SCPrivateMessagesTemplate-new-message",selected:"SCPrivateMessagesTemplate-selected"},ke=(0,s.ZP)(r.Z,{name:Ze,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({height:"100%",display:"flex",flexFlow:"row",[`& .${_e.snippetsBox}`]:{flexGrow:0,flexShrink:1,flexBasis:"auto"},[`& .${_e.threadBox}`]:{flexGrow:1,flexShrink:1,flexBasis:"auto"},[`& .${_e.newMessage}`]:{width:"100%",justifyContent:"flex-start","& .MuiIcon-root":{marginRight:"5px"}},[`& .${_e.selected}`]:{background:e.palette.grey.A200,justifyContent:"flex-start",width:"100%","& .MuiIcon-root":{marginRight:"5px"}}})));const Ne="SCPrivateMessagesTemplateSkeleton";(0,s.ZP)(i.AU,{name:Ne,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));var xe=function(e){const t=(0,y.Z)({props:e,name:Ze}),{autoHide:o=!1,className:s=null}=t,a=Ie(t,["autoHide","className"]),[c,l]=(0,n.useState)(null),[p,m]=(0,n.useState)(null),[d,u]=(0,n.useState)(!1),[g,P]=(0,n.useState)(!1),f=(0,n.useContext)(b.K8),O=e=>{l(e),u(!1)},j=()=>{u(!d),l(null)},S=e=>{m(e.message)};return!o&&f.user?n.createElement(ke,Object.assign({},a,{className:E()(_e.root,s)}),n.createElement(r.Z,{className:_e.snippetsBox},n.createElement(Se.Z,{className:d?_e.selected:_e.newMessage,onClick:j},n.createElement(Re.Z,null,"add_circle_outline"),n.createElement(L.Z,{id:"templates.privateMessages.button.new",defaultMessage:"templates.privateMessages.button.new"})),n.createElement(i.B6,{onSnippetClick:O,threadId:c?c.id:null,getSnippetHeadline:p,shouldUpdate:g})),n.createElement(r.Z,{className:_e.threadBox},n.createElement(i.jz,{id:c?c.id:null,receiverId:c&&!d?c.receiver.id:null,openNewMessage:d,onNewMessageSent:d?l:null,onMessageSent:S,shouldUpdate:P}))):null}}}]);