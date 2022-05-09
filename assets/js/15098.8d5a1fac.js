"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[15098],{44541:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,c.default)({props:e,name:f}),{id:o="category",className:n,category:a,categoryId:p,widgets:g,FeedObjectProps:O,FeedSidebarProps:b}=t,{scCategory:P,setSCCategory:v}=(0,u.useSCFetchCategory)({id:p,category:a});if(null===P)return r.default.createElement(i.default,null);return r.default.createElement(y,{id:o,className:(0,d.default)(m.root,n)},r.default.createElement(l.CategoryHeader,{category:P}),r.default.createElement(s.default,{category:P,widgets:g,FeedObjectProps:O,FeedSidebarProps:b}))};var r=p(o(67294)),n=o(37667),a=o(10640),l=o(78812),s=p(o(45422)),u=o(46105),i=p(o(74135)),c=p(o(71657)),d=p(o(94184));function p(e){return e&&e.__esModule?e:{default:e}}const f="SCCategoryTemplate",m={root:`${f}-root`},y=(0,n.styled)(a.Box,{name:f,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},74135:function(e,t,o){t.__esModule=!0,t.default=function(){return r.default.createElement(d,{className:c.root},r.default.createElement(s.CategoryHeaderSkeleton,null),r.default.createElement(l.default,null))};var r=u(o(67294)),n=o(10640),a=o(37667),l=u(o(15591)),s=o(78812);function u(e){return e&&e.__esModule?e:{default:e}}const i="SCCategoryTemplateSkeleton",c={root:`${i}-root`},d=(0,a.styled)(n.Box,{name:i,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},12451:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(74135))&&r.__esModule?r:{default:r};t.CategorySkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(44541));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.CategoryProps=a.CategoryProps;var s=a.default;t.default=s},23253:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,u.default)({props:e,name:p}),{id:o="category_feed",className:n,category:c,categoryId:d,widgets:g=y,FeedObjectProps:O={},FeedSidebarProps:b=null}=t,P=(0,r.useRef)(),{scCategory:v}=(0,l.useSCFetchCategory)({id:d,category:c}),[_,j]=(0,r.useState)([]);(0,r.useEffect)((()=>{null!==v&&j(g.map((e=>e.component===a.InlineComposer?Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{defaultValue:{categories:[v]},onSuccess:S})}):Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{categoryId:v.id})}))))}),[v,g]);const S=e=>{if(-1===e.categories.findIndex((e=>e.id===v.id)))return;const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};P&&P.current&&P.current.addFeedData(t)};if(null===v)return r.default.createElement(s.CategoryFeedSkeleton,null);return r.default.createElement(m,{id:o,className:(0,i.default)(f.root,n),ref:P,endpoint:Object.assign({},l.Endpoints.CategoryFeed,{url:()=>l.Endpoints.CategoryFeed.url({id:v.id})}),widgets:_,ItemComponent:a.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:O,ItemSkeleton:a.FeedObjectSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:b,CustomAdvProps:{position:l.SCCustomAdvPosition.POSITION_FEED,categoriesId:[v.id]}})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=d(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(67294)),n=o(37667),a=o(78812),l=o(46105),s=o(45422),u=c(o(71657)),i=c(o(94184));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(d=function(e){return e?o:t})(e)}const p="SCCategoryFeedTemplate",f={root:`${p}-root`},m=(0,n.styled)(a.Feed,{name:p,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),y=[{type:"widget",component:a.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:a.TrendingPeople,componentProps:{},column:"right",position:0},{type:"widget",component:a.TrendingFeed,componentProps:{},column:"right",position:1}]},15591:function(e,t,o){t.__esModule=!0,t.default=function(){return n.default.createElement(i,{className:u.root,sidebar:n.default.createElement(n.default.Fragment,null,n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},n.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>n.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,n=(r=o(67294))&&r.__esModule?r:{default:r},a=o(37667),l=o(78812);const s="SCCategoryFeedTemplateSkeleton",u={root:`${s}-root`},i=(0,a.styled)(l.FeedSkeleton,{name:s,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},45422:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(15591))&&r.__esModule?r:{default:r};t.CategoryFeedSkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(23253));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.CategoryFeedProps=a.CategoryFeedProps;var s=a.default;t.default=s},88783:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,s.default)({props:e,name:d}),{id:o="explore_feed",className:n,widgets:i=m,FeedObjectProps:c={},FeedSidebarProps:y=null}=t,[g,O]=(0,r.useState)([]),b=(0,r.useRef)();(0,r.useEffect)((()=>{O(i.map((e=>e.component===a.InlineComposer?Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{onSuccess:P})}):Object.assign({},e,{componentProps:Object.assign({},e.componentProps)}))))}),[i]);const P=e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};b&&b.current&&b.current.addFeedData(t)};return r.default.createElement(f,{id:o,className:(0,u.default)(p.root,n),ref:b,endpoint:l.Endpoints.ExploreFeed,widgets:g,ItemComponent:a.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:c,ItemSkeleton:a.FeedObjectSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:y})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=c(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(67294)),n=o(37667),a=o(78812),l=o(46105),s=i(o(71657)),u=i(o(94184));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(c=function(e){return e?o:t})(e)}const d="SCExploreFeedTemplate",p={root:`${d}-root`},f=(0,n.styled)(a.Feed,{name:d,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),m=[{type:"widget",component:a.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:a.Platform,componentProps:{},column:"right",position:0},{type:"widget",component:a.LoyaltyProgram,componentProps:{},column:"right",position:1},{type:"widget",component:a.CategoriesPopular,componentProps:{},column:"right",position:2},{type:"widget",component:a.PeopleSuggestion,componentProps:{},column:"right",position:3}]},80057:function(e,t,o){t.__esModule=!0,t.default=function(){return n.default.createElement(i,{className:u.root,sidebar:n.default.createElement(n.default.Fragment,null,n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},n.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>n.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,n=(r=o(67294))&&r.__esModule?r:{default:r},a=o(37667),l=o(78812);const s="SCExploreFeedTemplateSkeleton",u={root:`${s}-root`},i=(0,a.styled)(l.FeedSkeleton,{name:s,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},57270:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(80057))&&r.__esModule?r:{default:r};t.ExploreFeedSkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(88783));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.ExploreFeedProps=a.ExploreFeedProps;var s=a.default;t.default=s},39566:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,u.default)({props:e,name:y}),{id:o="feed_object_page",className:n,feedObjectId:p,feedObject:f,feedObjectType:P,FeedObjectProps:v={},CommentsFeedObjectProps:_={},RelatedFeedObjectProps:j={autoHide:!1}}=t,S=(0,d.useSCUser)(),M=(0,d.useSCPreferences)(),{obj:w,setObj:k}=(0,d.useSCFetchFeedObject)({id:p,feedObject:f,feedObjectType:P}),[F,E]=(0,r.useState)([]),C=(0,r.useMemo)((()=>{const e={};return b.map((t=>e[t]=t in M.preferences?M.preferences[t].value:null)),e}),[M.preferences]);if(!w)return r.default.createElement(s.default,null);return r.default.createElement(O,{id:o,className:(0,i.default)(g.root,n)},r.default.createElement(a.Grid,{container:!0,spacing:2},r.default.createElement(a.Grid,{item:!0,xs:12,md:7},r.default.createElement(c.FeedObject,m({},v,{feedObject:w,template:c.SCFeedObjectTemplateType.DETAIL,onReply:function(e){E([...F,e]),setTimeout((()=>{const t=document.getElementById(`comment_object_${e.id}`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})}),300)}})),C[d.SCPreferences.ADVERTISING_CUSTOM_ADV_ENABLED]&&(C[d.SCPreferences.ADVERTISING_CUSTOM_ADV_ONLY_FOR_ANONYMOUS_USERS_ENABLED]&&null===S.user||!C[d.SCPreferences.ADVERTISING_CUSTOM_ADV_ONLY_FOR_ANONYMOUS_USERS_ENABLED])?r.default.createElement(c.CustomAdv,m({position:d.SCCustomAdvPosition.POSITION_BELOW_FEED_OBJECT},w.categories.length&&{categoriesId:w.categories.map((e=>e.id))})):null,r.default.createElement(c.CommentsFeedObject,m({showTitle:!0,feedObject:w,comments:F},_))),r.default.createElement(a.Grid,{item:!0,xs:12,md:5},r.default.createElement(a.Hidden,{smDown:!0},r.default.createElement(l.default,{enabled:!0,top:15,bottomBoundary:`#${o}`},r.default.createElement(c.RelatedFeedObjects,m({feedObject:w},j)))))))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=f(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(67294)),n=o(37667),a=o(10640),l=p(o(3238)),s=p(o(63327)),u=p(o(71657)),i=p(o(94184)),c=o(78812),d=o(46105);function p(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(f=function(e){return e?o:t})(e)}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},m.apply(this,arguments)}const y="SCFeedObjectDetailTemplate",g={root:`${y}-root`},O=(0,n.styled)(a.Box,{name:y,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),b=[d.SCPreferences.ADVERTISING_CUSTOM_ADV_ENABLED,d.SCPreferences.ADVERTISING_CUSTOM_ADV_ONLY_FOR_ANONYMOUS_USERS_ENABLED]},63327:function(e,t,o){t.__esModule=!0,t.default=function(e){const{FeedObjectSkeletonProps:t={},CommentsFeedObjectSkeletonProps:o={},RelatedFeedObjectsSkeletonProps:r={}}=e;return n.default.createElement(d,{className:c.root},n.default.createElement(l.Grid,{container:!0,spacing:2},n.default.createElement(l.Grid,{item:!0,xs:12,md:6},n.default.createElement(a.FeedObjectSkeleton,u({template:a.SCFeedObjectTemplateType.DETAIL},t)),n.default.createElement(a.CommentsFeedObjectSkeleton,u({count:4},o))),n.default.createElement(l.Grid,{item:!0,xs:12,md:6},n.default.createElement(a.RelatedFeedObjectsSkeleton,r))))};var r,n=(r=o(67294))&&r.__esModule?r:{default:r},a=o(78812),l=o(10640),s=o(37667);function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},u.apply(this,arguments)}const i="SCFeedObjectDetailTemplateSkeleton",c={root:`${i}-root`},d=(0,s.styled)(l.Box,{name:i,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},12796:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(63327))&&r.__esModule?r:{default:r};t.FeedObjectDetailSkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(39566));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.FeedObjectDetailProps=a.FeedObjectDetailProps;var s=a.default;t.default=s},60056:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,s.default)({props:e,name:d}),{id:o="main_feed",className:n,widgets:i=m,FeedObjectProps:c={},FeedSidebarProps:y=null}=t;if(!(0,r.useContext)(l.SCUserContext).user)return null;return r.default.createElement(f,{id:o,className:(0,u.default)(p.root,n),endpoint:l.Endpoints.MainFeed,widgets:i,ItemComponent:a.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:c,ItemSkeleton:a.FeedObjectSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:y})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=c(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(67294)),n=o(37667),a=o(78812),l=o(46105),s=i(o(71657)),u=i(o(94184));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(c=function(e){return e?o:t})(e)}const d="SCMainFeedTemplate",p={root:`${d}-root`},f=(0,n.styled)(a.Feed,{name:d,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),m=[{type:"widget",component:a.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:a.Platform,componentProps:{},column:"right",position:0},{type:"widget",component:a.LoyaltyProgram,componentProps:{},column:"right",position:1},{type:"widget",component:a.CategoriesSuggestion,componentProps:{},column:"right",position:2},{type:"widget",component:a.PeopleSuggestion,componentProps:{},column:"right",position:3}]},87526:function(e,t,o){t.__esModule=!0,t.default=function(){return n.default.createElement(i,{className:u.root,sidebar:n.default.createElement(n.default.Fragment,null,n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},n.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>n.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,n=(r=o(67294))&&r.__esModule?r:{default:r},a=o(37667),l=o(78812);const s="SCMainFeedTemplateSkeleton",u={root:`${s}-root`},i=(0,a.styled)(l.FeedSkeleton,{name:s,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},98554:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(87526))&&r.__esModule?r:{default:r};t.MainFeedSkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(60056));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.MainFeedProps=a.MainFeedProps;var s=a.default;t.default=s},64842:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,s.default)({props:e,name:d}),{id:o="notification_feed",className:n,widgets:i=m,NotificationProps:c={},FeedSidebarProps:y=null}=t;if(!(0,r.useContext)(l.SCUserContext).user)return null;return r.default.createElement(f,{id:o,className:(0,u.default)(p.root,n),endpoint:l.Endpoints.UserNotificationList,widgets:i,ItemComponent:a.Notification,itemPropsGenerator:(e,t)=>({notificationObject:t}),itemIdGenerator:e=>e.sid,ItemProps:c,ItemSkeleton:a.NotificationSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:y})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=c(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(67294)),n=o(37667),a=o(78812),l=o(46105),s=i(o(71657)),u=i(o(94184));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(c=function(e){return e?o:t})(e)}const d="SCNotificationFeedTemplate",p={root:`${d}-root`},f=(0,n.styled)(a.Feed,{name:d,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),m=[{type:"widget",component:a.FeedUpdates,componentProps:{subscriptionChannel:l.SCNotificationTopicType.INTERACTION,publicationChannel:"notifications_feed"},column:"left",position:0,publishEvents:!0},{type:"widget",component:a.BroadcastMessages,componentProps:{subscriptionChannel:"notification_feed"},column:"left",position:1},{type:"widget",component:a.Platform,componentProps:{},column:"right",position:0},{type:"widget",component:a.LoyaltyProgram,componentProps:{},column:"right",position:1},{type:"widget",component:a.CategoriesSuggestion,componentProps:{},column:"right",position:2},{type:"widget",component:a.PeopleSuggestion,componentProps:{},column:"right",position:3}]},74440:function(e,t,o){t.__esModule=!0,t.default=function(){return n.default.createElement(i,{className:u.root,sidebar:n.default.createElement(n.default.Fragment,null,n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},Array.from({length:5}).map(((e,t)=>n.default.createElement(l.NotificationSkeleton,{key:t}))))};var r,n=(r=o(67294))&&r.__esModule?r:{default:r},a=o(37667),l=o(78812);const s="SCNotificationFeedTemplateSkeleton",u={root:`${s}-root`},i=(0,a.styled)(l.FeedSkeleton,{name:s,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},32635:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(74440))&&r.__esModule?r:{default:r};t.NotificationFeedSkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(64842));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.NotificationFeedProps=a.NotificationFeedProps;var s=a.default;t.default=s},82912:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,d.default)({props:e,name:g}),{autoHide:o=!1,className:n=null}=t,f=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(t,p),[m,P]=(0,r.useState)(null),[v,_]=(0,r.useState)(null),[j,S]=(0,r.useState)(!1),[M,w]=(0,r.useState)(!1),k=(0,r.useContext)(i.SCUserContext),F=e=>{P(e),S(!1)},E=()=>{S(!j),P(null)},C=e=>{_(e.message)};if(!o&&k.user)return r.default.createElement(b,y({},f,{className:(0,c.default)(O.root,n)}),r.default.createElement(a.Box,{className:O.snippetsBox},r.default.createElement(a.Button,{className:j?O.selected:O.newMessage,onClick:E},r.default.createElement(u.default,null,"add_circle_outline"),r.default.createElement(s.FormattedMessage,{id:"templates.privateMessages.button.new",defaultMessage:"templates.privateMessages.button.new"})),r.default.createElement(l.Snippets,{onSnippetClick:F,threadId:m?m.id:null,getSnippetHeadline:v,shouldUpdate:M})),r.default.createElement(a.Box,{className:O.threadBox},r.default.createElement(l.Thread,{id:m?m.id:null,receiverId:m&&!j?m.receiver.id:null,openNewMessage:j,onNewMessageSent:j?P:null,onMessageSent:C,shouldUpdate:w})));return null};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=m(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(67294)),n=o(37667),a=o(10640),l=o(78812),s=o(76105),u=f(o(95754)),i=o(46105),c=f(o(94184)),d=f(o(71657));const p=["autoHide","className"];function f(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(m=function(e){return e?o:t})(e)}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},y.apply(this,arguments)}const g="SCPrivateMessagesTemplate",O={root:`${g}-root`,snippetsBox:`${g}-snippets-box`,threadBox:`${g}-thread-box`,newMessage:`${g}-new-message`,selected:`${g}-selected`},b=(0,n.styled)(a.Box,{name:g,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({height:"100%",display:"flex",flexFlow:"row",[`& .${O.snippetsBox}`]:{flexGrow:0,flexShrink:1,flexBasis:"auto"},[`& .${O.threadBox}`]:{flexGrow:1,flexShrink:1,flexBasis:"auto"},[`& .${O.newMessage}`]:{width:"100%",justifyContent:"flex-start","& .MuiIcon-root":{marginRight:"5px"}},[`& .${O.selected}`]:{background:e.palette.grey.A200,justifyContent:"flex-start",width:"100%","& .MuiIcon-root":{marginRight:"5px"}}})))},34643:function(e,t,o){t.__esModule=!0,t.default=function(){return n.default.createElement(i,{className:u.root})};var r,n=(r=o(67294))&&r.__esModule?r:{default:r},a=o(78812),l=o(37667);const s="SCPrivateMessagesTemplateSkeleton",u={root:`${s}-root`},i=(0,l.styled)(a.GenericSkeleton,{name:s,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},19957:function(e,t,o){t.__esModule=!0,t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(82912));t.PrivateMessagesProps=r.PrivateMessagesProps;var n,a=(n=o(34643))&&n.__esModule?n:{default:n};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.PrivateMessagesSkeleton=a.default;var s=r.default;t.default=s},87679:function(e,t,o){t.__esModule=!0,t.default=function(){return n.default.createElement(i,{className:u.root,sidebar:n.default.createElement(n.default.Fragment,null,n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),n.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},n.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>n.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,n=(r=o(67294))&&r.__esModule?r:{default:r},a=o(37667),l=o(78812);const s="SCUserFeedTemplateSkeleton",u={root:`${s}-root`},i=(0,a.styled)(l.FeedSkeleton,{name:s,slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},30201:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,u.default)({props:e,name:p}),{id:o="user_feed",className:n,userId:c,user:d,widgets:g=y,FeedObjectProps:O={},FeedSidebarProps:b=null}=t,{scUser:P}=(0,a.useSCFetchUser)({id:c,user:d}),[v,_]=(0,r.useState)([]),j=(0,r.useRef)();(0,r.useEffect)((()=>{null!==P&&_(g.map((e=>e.component===l.InlineComposer?Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{onSuccess:S})}):Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{userId:P.id})}))))}),[P,g]);const S=e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};j&&j.current&&j.current.addFeedData(t)};if(null===P)return r.default.createElement(s.UserFeedSkeleton,null);return r.default.createElement(m,{id:o,className:(0,i.default)(f.root,n),ref:j,endpoint:Object.assign({},a.Endpoints.UserFeed,{url:()=>a.Endpoints.UserFeed.url({id:P.id})}),widgets:v,ItemComponent:l.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null}),itemIdGenerator:e=>e[e.type].id,ItemProps:O,ItemSkeleton:l.FeedObjectSkeleton,ItemSkeletonProps:{template:l.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:b})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=d(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(67294)),n=o(37667),a=o(46105),l=o(78812),s=o(25519),u=c(o(71657)),i=c(o(94184));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(d=function(e){return e?o:t})(e)}const p="SCUserFeedTemplate",f={root:`${p}-root`},m=(0,n.styled)(l.Feed,{name:p,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),y=[{type:"widget",component:l.CategoriesFollowed,componentProps:{},column:"right",position:0},{type:"widget",component:l.UsersFollowed,componentProps:{},column:"right",position:1},{type:"widget",component:l.UserFollowers,componentProps:{},column:"right",position:2}]},25519:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(87679))&&r.__esModule?r:{default:r};t.UserFeedSkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(30201));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.UserFeedProps=a.UserFeedProps;var s=a.default;t.default=s},93181:function(e,t,o){t.__esModule=!0,t.default=function(){return r.default.createElement(d,{className:c.root},r.default.createElement(l.UserProfileHeaderSkeleton,null),r.default.createElement(s.default,null))};var r=u(o(67294)),n=o(10640),a=o(37667),l=o(78812),s=u(o(87679));function u(e){return e&&e.__esModule?e:{default:e}}const i="SCUserProfileTemplateSkeleton",c={root:`${i}-root`},d=(0,a.styled)(n.Box,{name:i,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},52007:function(e,t,o){t.__esModule=!0,t.default=function(e){const t=(0,p.default)({props:e,name:y}),{id:o="user_profile",className:n,user:f,userId:v,widgets:_=null,FeedObjectProps:j,FeedSidebarProps:S,UserProfileHeaderProps:M={},UserProfileInfoProps:w={},onEditClick:k=null}=t,F=(0,u.useSCContext)(),E=(0,u.useSCUser)(),{scUser:C}=(0,u.useSCFetchUser)({id:v,user:f});if(null===C)return r.default.createElement(i.default,null);let h=_;null===h&&(h=(()=>{let e=[];return e=null===E.user?[]:E.user.id===C.id?[...P]:[...b],e})());const T=E.user&&C.id===E.user.id,I=E.user&&E.user.role,D=I&&(I.includes("admin")||I.includes("moderator"));return r.default.createElement(O,{id:o,className:(0,c.default)(g.root,n)},r.default.createElement(l.UserProfileHeader,m({user:C},M)),r.default.createElement(l.UserProfileInfo,m({user:C},w)),r.default.createElement(a.Stack,{direction:"row",spacing:2,className:g.actions},T?r.default.createElement(a.Button,{variant:"outlined",color:"secondary",onClick:()=>{k&&k(C)}},r.default.createElement(d.FormattedMessage,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"})):r.default.createElement(l.ConnectionUserButton,{user:C}),D&&r.default.createElement(a.Button,{variant:"contained",color:"secondary",component:"a",href:`${F.settings.portal}/platform/access?next=/moderation/user/?username=${C.username}`,target:"_blank"},r.default.createElement(d.FormattedMessage,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"}))),r.default.createElement(s.default,{user:C,widgets:h,FeedObjectProps:j,FeedSidebarProps:S}))};var r=f(o(67294)),n=o(37667),a=o(10640),l=o(78812),s=f(o(25519)),u=o(46105),i=f(o(93181)),c=f(o(94184)),d=o(76105),p=f(o(71657));function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},m.apply(this,arguments)}const y="SCUserProfileTemplate",g={root:`${y}-root`,actions:`${y}-actions`},O=(0,n.styled)(a.Box,{name:y,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2),[`& .${g.actions}`]:{margin:e.spacing(2),justifyContent:"space-around"}}))),b=[{type:"widget",component:l.CategoriesFollowed,componentProps:{},column:"right",position:0},{type:"widget",component:l.UsersFollowed,componentProps:{},column:"right",position:1}],P=[{type:"widget",component:l.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:l.CategoriesFollowed,componentProps:{},column:"right",position:0},{type:"widget",component:l.UsersFollowed,componentProps:{},column:"right",position:1},{type:"widget",component:l.UserFollowers,componentProps:{},column:"right",position:2}]},73659:function(e,t,o){t.__esModule=!0,t.default=void 0;var r,n=(r=o(93181))&&r.__esModule?r:{default:r};t.UserProfileSkeleton=n.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=l(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=n?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(r,a,s):r[a]=e[a]}r.default=e,o&&o.set(e,r);return r}(o(52007));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(l=function(e){return e?o:t})(e)}t.UserProfileProps=a.UserProfileProps;var s=a.default;t.default=s},15098:function(e,t,o){var r=f(o(12451));t.WD=r.default,r.CategoryProps,r.CategorySkeleton;var n=f(o(45422));t.Yo=n.default,n.CategoryFeedProps,n.CategoryFeedSkeleton;var a=f(o(57270));t.S5=a.default,a.ExploreFeedProps,a.ExploreFeedSkeleton;var l=f(o(12796));t.Rc=l.default,l.FeedObjectDetailProps,l.FeedObjectDetailSkeleton;var s=f(o(98554));t.YD=s.default,s.MainFeedProps,s.MainFeedSkeleton;var u=f(o(32635));t.YK=u.default,u.NotificationFeedProps,u.NotificationFeedSkeleton;var i=f(o(25519));t.pz=i.default,i.UserFeedProps,i.UserFeedSkeleton;var c=f(o(73659));t.Iw=c.default,c.UserProfileProps,c.UserProfileSkeleton;var d=f(o(19957));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,o=new WeakMap;return(p=function(e){return e?o:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var o=p(t);if(o&&o.has(e))return o.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,o&&o.set(e,r),r}t.pk=d.default,d.PrivateMessagesProps,d.PrivateMessagesSkeleton}}]);