"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[5394],{5394:function(e,t,o){o.d(t,{WD:function(){return R},Yo:function(){return C},S5:function(){return x},Rc:function(){return H},YD:function(){return te},YK:function(){return ae},pk:function(){return xe},pz:function(){return Pe},Iw:function(){return Te}});var n=o(67294),r=o(87357),s=o(11496),i=o(89050);const a="SCCategoryFeedTemplateSkeleton",c={root:`${a}-root`},l=(0,s.ZP)(i.pM,{name:a,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));function p(){return n.createElement(l,{className:c.root,sidebar:n.createElement(n.Fragment,null,n.createElement(i.AU,{sx:{mb:2}}),n.createElement(i.AU,{sx:{mb:2}}))},n.createElement(i.y_,null),Array.from({length:5}).map(((e,t)=>n.createElement(i.t7,{key:t,template:i.r4.DETAIL}))))}const m="SCCategoryTemplateSkeleton",d={root:`${m}-root`},u=(0,s.ZP)(r.Z,{name:m,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));function g(){return n.createElement(u,{className:d.root},n.createElement(i.vP,null),n.createElement(p,null))}var b=o(71328),P=o(6696),f=o(84926),y=o(29628),O=o(94184),E=o.n(O);const S="SCCategoryFeedTemplate",j={root:"SCCategoryFeedTemplate-root"},v=(0,s.ZP)(i.fR,{name:S,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),h=[{type:"widget",component:i.sA,componentProps:{},column:"left",position:0},{type:"widget",component:i.d7,componentProps:{},column:"right",position:0},{type:"widget",component:i.wu,componentProps:{},column:"right",position:1}];var C=function(e){const t=(0,y.Z)({props:e,name:S}),{id:o="category_feed",className:r,category:s,categoryId:a,widgets:c=h,FeedObjectProps:l={},FeedSidebarProps:m=null}=t,d=(0,n.useRef)(),{scCategory:u}=(0,P._l)({id:a,category:s}),[g,O]=(0,n.useState)([]);(0,n.useEffect)((()=>{null!==u&&O(c.map((e=>e.component===i.sA?Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{defaultValue:{categories:[u]},onSuccess:C})}):Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{categoryId:u.id})}))))}),[u,c]);const C=e=>{if(-1===e.categories.findIndex((e=>e.id===u.id)))return;const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};d&&d.current&&d.current.addFeedData(t)};return null===u?n.createElement(p,null):n.createElement(v,{id:o,className:E()(j.root,r),ref:d,endpoint:Object.assign(Object.assign({},b.AN.CategoryFeed),{url:()=>b.AN.CategoryFeed.url({id:u.id})}),widgets:g,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:l,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:m,CustomAdvProps:{position:f.nG.POSITION_FEED,categoriesId:[u.id]}})};const w="SCCategoryTemplate",F={root:"SCCategoryTemplate-root"},T=(0,s.ZP)(r.Z,{name:w,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));var R=function(e){const t=(0,y.Z)({props:e,name:w}),{id:o="category",className:r,category:s,categoryId:a,widgets:c,FeedObjectProps:l,FeedSidebarProps:p}=t,{scCategory:m,setSCCategory:d}=(0,P._l)({id:a,category:s});return null===m?n.createElement(g,null):n.createElement(T,{id:o,className:E()(F.root,r)},n.createElement(i.Wt,{category:m}),n.createElement(C,{category:m,widgets:c,FeedObjectProps:l,FeedSidebarProps:p}))};const I="SCExploreFeedTemplateSkeleton";(0,s.ZP)(i.pM,{name:I,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const Z="SCExploreFeedTemplate",N={root:"SCExploreFeedTemplate-root"},_=(0,s.ZP)(i.fR,{name:Z,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),k=[{type:"widget",component:i.sA,componentProps:{},column:"left",position:0},{type:"widget",component:i.t4,componentProps:{},column:"right",position:0},{type:"widget",component:i.jb,componentProps:{},column:"right",position:1},{type:"widget",component:i.Jx,componentProps:{},column:"right",position:2},{type:"widget",component:i.qK,componentProps:{},column:"right",position:3}];var x=function(e){const t=(0,y.Z)({props:e,name:Z}),{id:o="explore_feed",className:r,widgets:s=k,FeedObjectProps:a={},FeedSidebarProps:c=null}=t,[l,p]=(0,n.useState)([]),m=(0,n.useRef)();(0,n.useEffect)((()=>{p(s.map((e=>e.component===i.sA?Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{onSuccess:d})}):Object.assign(Object.assign({},e),{componentProps:Object.assign({},e.componentProps)}))))}),[s]);const d=e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};m&&m.current&&m.current.addFeedData(t)};return n.createElement(_,{id:o,className:E()(N.root,r),ref:m,endpoint:b.AN.ExploreFeed,widgets:l,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:a,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:c})},M=o(86886);const A="SCFeedObjectDetailTemplateSkeleton",U={root:"SCFeedObjectDetailTemplateSkeleton-root"},D=(0,s.ZP)(r.Z,{name:A,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));function G(e){const{FeedObjectSkeletonProps:t={},CommentsFeedObjectSkeletonProps:o={},RelatedFeedObjectsSkeletonProps:r={}}=e;return n.createElement(D,{className:U.root},n.createElement(M.ZP,{container:!0,spacing:2},n.createElement(M.ZP,{item:!0,xs:12,md:6},n.createElement(i.t7,Object.assign({template:i.r4.DETAIL},t)),n.createElement(i.Ny,Object.assign({count:4},o))),n.createElement(M.ZP,{item:!0,xs:12,md:6},n.createElement(i.lT,Object.assign({},r)))))}var B=o(50456),$=o(3238),W=o(40673),Y=o(44012);const L="SCFeedObjectDetailTemplate",K={root:"SCFeedObjectDetailTemplate-root"},V=(0,s.ZP)(r.Z,{name:L,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),z=[P.Y_.Rl,P.Y_.OM];var H=function(e){const t=(0,y.Z)({props:e,name:L}),{id:o="feed_object_page",className:s,feedObjectId:a,feedObject:c,feedObjectType:l,FeedObjectProps:p={},CommentsFeedObjectProps:m={},RelatedFeedObjectProps:d={autoHide:!1}}=t,u=(0,P.LD)(),g=(0,P.ko)(),{obj:b,setObj:O,error:S}=(0,P.MF)({id:a,feedObject:c,feedObjectType:l}),[j,v]=(0,n.useState)([]),h=(0,n.useMemo)((()=>{const e={};return z.map((t=>e[t]=t in g.preferences?g.preferences[t].value:null)),e}),[g.preferences]);return S?n.createElement(r.Z,null,n.createElement(Y.Z,{id:"templates.feedObjectDetail.contributionNotFound",defaultMessage:"templates.feedObjectDetail.contributionNotFound"})):b?n.createElement(V,{id:o,className:E()(K.root,s)},n.createElement(M.ZP,{container:!0,spacing:2},n.createElement(M.ZP,{item:!0,xs:12,md:7},n.createElement(i.hi,Object.assign({},p,{feedObject:b,template:i.r4.DETAIL,onReply:function(e){v([...j,e]),setTimeout((()=>{const t=document.getElementById(`comment_object_${e.id}`);t&&(0,W.z)(t,{behavior:"smooth",block:"center",inline:"center"})}),300)}})),h[P.Y_.Rl]&&(h[P.Y_.OM]&&null===u.user||!h[P.Y_.OM])?n.createElement(i.Vt,Object.assign({position:f.nG.POSITION_BELOW_FEED_OBJECT},b.categories.length&&{categoriesId:b.categories.map((e=>e.id))})):null,n.createElement(i.P4,Object.assign({showTitle:!0,feedObject:b,comments:j},m))),n.createElement(M.ZP,{item:!0,xs:12,md:5},n.createElement(B.Z,{mdDown:!0},n.createElement($.Z,{enabled:!0,top:15,bottomBoundary:`#${o}`},n.createElement(i.cu,Object.assign({feedObject:b},d))))))):n.createElement(G,null)};const Q="SCMainFeedTemplateSkeleton";(0,s.ZP)(i.pM,{name:Q,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const q="SCMainFeedTemplate",J={root:"SCMainFeedTemplate-root"},X=(0,s.ZP)(i.fR,{name:q,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),ee=[{type:"widget",component:i.sA,componentProps:{},column:"left",position:0},{type:"widget",component:i.t4,componentProps:{},column:"right",position:0},{type:"widget",component:i.jb,componentProps:{},column:"right",position:1},{type:"widget",component:i.Qu,componentProps:{},column:"right",position:2},{type:"widget",component:i.qK,componentProps:{},column:"right",position:3}];var te=function(e){const t=(0,y.Z)({props:e,name:q}),{id:o="main_feed",className:r,widgets:s=ee,FeedObjectProps:a={},FeedSidebarProps:c=null}=t;return(0,n.useContext)(P.K8).user?n.createElement(X,{id:o,className:E()(J.root,r),endpoint:b.AN.MainFeed,widgets:s,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:a,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:c}):null};const oe="SCNotificationFeedTemplateSkeleton";(0,s.ZP)(i.pM,{name:oe,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));const ne="SCNotificationFeedTemplate",re={root:"SCNotificationFeedTemplate-root"},se=(0,s.ZP)(i.fR,{name:ne,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),ie=[{type:"widget",component:i.qj,componentProps:{subscriptionChannel:f.Ed.INTERACTION,publicationChannel:"notifications_feed"},column:"left",position:0,publishEvents:!0},{type:"widget",component:i.oY,componentProps:{subscriptionChannel:"notification_feed"},column:"left",position:1},{type:"widget",component:i.t4,componentProps:{},column:"right",position:0},{type:"widget",component:i.jb,componentProps:{},column:"right",position:1},{type:"widget",component:i.Qu,componentProps:{},column:"right",position:2},{type:"widget",component:i.qK,componentProps:{},column:"right",position:3}];var ae=function(e){const t=(0,y.Z)({props:e,name:ne}),{id:o="notification_feed",className:r,widgets:s=ie,NotificationProps:a={},FeedSidebarProps:c=null}=t;return(0,n.useContext)(P.K8).user?n.createElement(se,{id:o,className:E()(re.root,r),endpoint:b.AN.UserNotificationList,widgets:s,ItemComponent:i.P_,itemPropsGenerator:(e,t)=>({notificationObject:t}),itemIdGenerator:e=>e.sid,ItemProps:a,ItemSkeleton:i.i_,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:c}):null};const ce="SCUserFeedTemplateSkeleton",le={root:"SCUserFeedTemplateSkeleton-root"},pe=(0,s.ZP)(i.pM,{name:ce,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));function me(){return n.createElement(pe,{className:le.root,sidebar:n.createElement(n.Fragment,null,n.createElement(i.AU,{sx:{mb:2}}),n.createElement(i.AU,{sx:{mb:2}}))},n.createElement(i.y_,null),Array.from({length:5}).map(((e,t)=>n.createElement(i.t7,{key:t,template:i.r4.DETAIL}))))}const de="SCUserFeedTemplate",ue={root:"SCUserFeedTemplate-root"},ge=(0,s.ZP)(i.fR,{name:de,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),be=[{type:"widget",component:i.QO,componentProps:{},column:"right",position:0},{type:"widget",component:i.bG,componentProps:{},column:"right",position:1},{type:"widget",component:i.t1,componentProps:{},column:"right",position:2}];var Pe=function(e){const t=(0,y.Z)({props:e,name:de}),{id:o="user_feed",className:r,userId:s,user:a,widgets:c=be,FeedObjectProps:l={},FeedSidebarProps:p=null}=t,{scUser:m}=(0,P.z3)({id:s,user:a}),[d,u]=(0,n.useState)([]),g=(0,n.useRef)();(0,n.useEffect)((()=>{null!==m&&u(c.map((e=>e.component===i.sA?Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{onSuccess:f})}):Object.assign(Object.assign({},e),{componentProps:Object.assign(Object.assign({},e.componentProps),{userId:m.id})}))))}),[m,c]);const f=e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};g&&g.current&&g.current.addFeedData(t)};return null===m?n.createElement(me,null):n.createElement(ge,{id:o,className:E()(ue.root,r),ref:g,endpoint:Object.assign(Object.assign({},b.AN.UserFeed),{url:()=>b.AN.UserFeed.url({id:m.id})}),widgets:d,ItemComponent:i.hi,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null}),itemIdGenerator:e=>e[e.type].id,ItemProps:l,ItemSkeleton:i.t7,ItemSkeletonProps:{template:i.r4.PREVIEW},FeedSidebarProps:p})};const fe="SCUserProfileTemplateSkeleton",ye={root:"SCUserProfileTemplateSkeleton-root"},Oe=(0,s.ZP)(r.Z,{name:fe,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})));function Ee(){return n.createElement(Oe,{className:ye.root},n.createElement(i.O4,null),n.createElement(me,null))}var Se=o(26447),je=o(83321);const ve="SCUserProfileTemplate",he={root:"SCUserProfileTemplate-root",actions:"SCUserProfileTemplate-actions"},Ce=(0,s.ZP)(r.Z,{name:ve,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2),[`& .${he.actions}`]:{margin:e.spacing(2),justifyContent:"space-around"}}))),we=[{type:"widget",component:i.QO,componentProps:{},column:"right",position:0},{type:"widget",component:i.bG,componentProps:{},column:"right",position:1}],Fe=[{type:"widget",component:i.sA,componentProps:{},column:"left",position:0},{type:"widget",component:i.QO,componentProps:{},column:"right",position:0},{type:"widget",component:i.bG,componentProps:{},column:"right",position:1},{type:"widget",component:i.t1,componentProps:{},column:"right",position:2}];var Te=function(e){const t=(0,y.Z)({props:e,name:ve}),{id:o="user_profile",className:r,user:s,userId:a,widgets:c=null,FeedObjectProps:l,FeedSidebarProps:p,UserProfileHeaderProps:m={},UserProfileInfoProps:d={},onEditClick:u=null}=t,g=(0,P.RM)(),b=(0,P.LD)(),{scUser:f}=(0,P.z3)({id:a,user:s});if(null===f)return n.createElement(Ee,null);let O=c;null===O&&(O=(()=>{let e=[];return e=null===b.user?[]:b.user.id===f.id?[...Fe]:[...we],e})());const S=b.user&&f.id===b.user.id,j=b.user&&b.user.role,v=j&&(j.includes("admin")||j.includes("moderator"));return n.createElement(Ce,{id:o,className:E()(he.root,r)},n.createElement(i.FZ,Object.assign({user:f},m)),n.createElement(i.J4,Object.assign({user:f},d)),n.createElement(Se.Z,{direction:"row",spacing:2,className:he.actions},S?n.createElement(je.Z,{variant:"outlined",color:"secondary",onClick:()=>{u&&u(f)}},n.createElement(Y.Z,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"})):n.createElement(i.WO,{user:f}),v&&n.createElement(je.Z,{variant:"contained",color:"secondary",component:"a",href:`${g.settings.portal}/platform/access?next=/moderation/user/?username=${f.username}`,target:"_blank"},n.createElement(Y.Z,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"}))),n.createElement(Pe,{user:f,widgets:O,FeedObjectProps:l,FeedSidebarProps:p}))},Re=o(67564),Ie=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o};const Ze="SCPrivateMessagesTemplate",Ne={root:"SCPrivateMessagesTemplate-root",snippetsBox:"SCPrivateMessagesTemplate-snippets-box",threadBox:"SCPrivateMessagesTemplate-thread-box",newMessage:"SCPrivateMessagesTemplate-new-message",selected:"SCPrivateMessagesTemplate-selected"},_e=(0,s.ZP)(r.Z,{name:Ze,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({height:"100%",display:"flex",flexFlow:"row",[`& .${Ne.snippetsBox}`]:{flexGrow:0,flexShrink:1,flexBasis:"auto"},[`& .${Ne.threadBox}`]:{flexGrow:1,flexShrink:1,flexBasis:"auto"},[`& .${Ne.newMessage}`]:{width:"100%",justifyContent:"flex-start","& .MuiIcon-root":{marginRight:"5px"}},[`& .${Ne.selected}`]:{background:e.palette.grey.A200,justifyContent:"flex-start",width:"100%","& .MuiIcon-root":{marginRight:"5px"}}})));const ke="SCPrivateMessagesTemplateSkeleton";(0,s.ZP)(i.AU,{name:ke,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})));var xe=function(e){const t=(0,y.Z)({props:e,name:Ze}),{autoHide:o=!1,className:s=null}=t,a=Ie(t,["autoHide","className"]),[c,l]=(0,n.useState)(null),[p,m]=(0,n.useState)(null),[d,u]=(0,n.useState)(!1),[g,b]=(0,n.useState)(!1),f=(0,n.useContext)(P.K8),O=e=>{l(e),u(!1)},S=()=>{u(!d),l(null)},j=e=>{m(e.message)};return!o&&f.user?n.createElement(_e,Object.assign({},a,{className:E()(Ne.root,s)}),n.createElement(r.Z,{className:Ne.snippetsBox},n.createElement(je.Z,{className:d?Ne.selected:Ne.newMessage,onClick:S},n.createElement(Re.Z,null,"add_circle_outline"),n.createElement(Y.Z,{id:"templates.privateMessages.button.new",defaultMessage:"templates.privateMessages.button.new"})),n.createElement(i.B6,{onSnippetClick:O,threadId:c?c.id:null,getSnippetHeadline:p,shouldUpdate:g})),n.createElement(r.Z,{className:Ne.threadBox},n.createElement(i.jz,{id:c?c.id:null,receiverId:c&&!d?c.receiver.id:null,openNewMessage:d,onNewMessageSent:d?l:null,onMessageSent:j,shouldUpdate:b}))):null}}}]);