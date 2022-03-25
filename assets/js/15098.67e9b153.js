"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[15098],{44541:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="category",className:n,category:o,categoryId:a,widgets:c,FeedObjectProps:f,FeedSidebarProps:p}=e,{scCategory:m,setSCCategory:y}=(0,u.useSCFetchCategory)({id:a,category:o});if(null===m)return r.default.createElement(s.default,null);return r.default.createElement(d,{id:t,className:n},r.default.createElement(l.CategoryHeader,{category:m}),r.default.createElement(i.default,{category:m,widgets:c,FeedObjectProps:f,FeedSidebarProps:p}))};var r=c(n(67294)),o=n(37667),a=n(19651),l=n(78812),i=c(n(45422)),u=n(46105),s=c(n(74135));function c(e){return e&&e.__esModule?e:{default:e}}const d=(0,o.styled)(a.Box,{name:"SCCategoryTemplate",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},74135:function(e,t,n){t.__esModule=!0,t.default=function(){return r.default.createElement(s,null,r.default.createElement(i.CategoryHeaderSkeleton,null),r.default.createElement(l.default,null))};var r=u(n(67294)),o=n(19651),a=n(37667),l=u(n(15591)),i=n(78812);function u(e){return e&&e.__esModule?e:{default:e}}const s=(0,a.styled)(o.Box,{name:"SCCategoryTemplateSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},12451:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(74135))&&r.__esModule?r:{default:r};t.CategorySkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(44541));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.CategoryProps=a.CategoryProps;var i=a.default;t.default=i},23253:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="category_feed",className:n,category:o,categoryId:u,widgets:d=c,FeedObjectProps:f={},FeedSidebarProps:p=null}=e,m=(0,r.useRef)(),{scCategory:y}=(0,l.useSCFetchCategory)({id:u,category:o}),[g,O]=(0,r.useState)([]);(0,r.useEffect)((()=>{null!==y&&O(d.map((e=>e.component===a.InlineComposer?Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{defaultValue:{categories:[y]},onSuccess:P})}):Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{categoryId:y.id})}))))}),[y,d]);const P=e=>{if(-1===e.categories.findIndex((e=>e.id===y.id)))return;const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};m&&m.current&&m.current.addFeedData(t)};if(null===y)return r.default.createElement(i.CategoryFeedSkeleton,null);return r.default.createElement(s,{id:t,className:n,ref:m,endpoint:Object.assign({},l.Endpoints.CategoryFeed,{url:()=>l.Endpoints.CategoryFeed.url({id:y.id})}),widgets:g,ItemComponent:a.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:f,ItemSkeleton:a.FeedObjectSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:p,CustomAdvProps:{position:l.SCCustomAdvPosition.POSITION_FEED,categoriesId:[y.id]}})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=n(37667),a=n(78812),l=n(46105),i=n(45422);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}const s=(0,o.styled)(a.Feed,{name:"SCCategoryFeedTemplate",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),c=[{type:"widget",component:a.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:a.TrendingPeople,componentProps:{},column:"right",position:0},{type:"widget",component:a.TrendingFeed,componentProps:{},column:"right",position:1}]},15591:function(e,t,n){t.__esModule=!0,t.default=function(){return o.default.createElement(i,{sidebar:o.default.createElement(o.default.Fragment,null,o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},o.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>o.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(37667),l=n(78812);const i=(0,a.styled)(l.FeedSkeleton,{name:"SCNotificationFeedSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},45422:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(15591))&&r.__esModule?r:{default:r};t.CategoryFeedSkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(23253));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.CategoryFeedProps=a.CategoryFeedProps;var i=a.default;t.default=i},88783:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="explore_feed",className:n,widgets:o=s,FeedObjectProps:i={},FeedSidebarProps:c=null}=e,[d,f]=(0,r.useState)([]),p=(0,r.useRef)();(0,r.useEffect)((()=>{f(o.map((e=>e.component===a.InlineComposer?Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{onSuccess:m})}):Object.assign({},e,{componentProps:Object.assign({},e.componentProps)}))))}),[o]);const m=e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};p&&p.current&&p.current.addFeedData(t)};return r.default.createElement(u,{id:t,className:n,ref:p,endpoint:l.Endpoints.ExploreFeed,widgets:d,ItemComponent:a.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:i,ItemSkeleton:a.FeedObjectSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:c})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=n(37667),a=n(78812),l=n(46105);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}const u=(0,o.styled)(a.Feed,{name:"SCExploreFeedTemplate",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),s=[{type:"widget",component:a.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:a.Platform,componentProps:{},column:"right",position:0},{type:"widget",component:a.LoyaltyProgram,componentProps:{},column:"right",position:1},{type:"widget",component:a.CategoriesPopular,componentProps:{},column:"right",position:2},{type:"widget",component:a.PeopleSuggestion,componentProps:{},column:"right",position:3}]},80057:function(e,t,n){t.__esModule=!0,t.default=function(){return o.default.createElement(i,{sidebar:o.default.createElement(o.default.Fragment,null,o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},o.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>o.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(37667),l=n(78812);const i=(0,a.styled)(l.FeedSkeleton,{name:"SCNotificationFeedSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},57270:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(80057))&&r.__esModule?r:{default:r};t.ExploreFeedSkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(88783));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.ExploreFeedProps=a.ExploreFeedProps;var i=a.default;t.default=i},39566:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="feed_object_page",className:n,feedObjectId:o,feedObject:c,feedObjectType:d,FeedObjectProps:y={},CommentsObjectProps:g={}}=e,O=(0,u.useSCUser)(),P=(0,u.useSCPreferences)(),{obj:b,setObj:v}=(0,u.useSCFetchFeedObject)({id:o,feedObject:c,feedObjectType:d}),j=(0,r.useMemo)((()=>{const e={};return m.map((t=>e[t]=t in P.preferences?P.preferences[t].value:null)),e}),[P.preferences]);if(null===b)return r.default.createElement(s.default,null);return r.default.createElement(p,{id:t,className:n},r.default.createElement(a.Grid,{container:!0,spacing:2},r.default.createElement(a.Grid,{item:!0,xs:12,md:7},r.default.createElement(l.FeedObject,f({},y,{feedObject:b,template:l.SCFeedObjectTemplateType.DETAIL})),j[u.SCPreferences.ADVERTISING_CUSTOM_ADV_ENABLED]&&(j[u.SCPreferences.ADVERTISING_CUSTOM_ADV_ONLY_FOR_ANONYMOUS_USERS_ENABLED]&&null===O.user||!j[u.SCPreferences.ADVERTISING_CUSTOM_ADV_ONLY_FOR_ANONYMOUS_USERS_ENABLED])?r.default.createElement(l.CustomAdv,f({position:u.SCCustomAdvPosition.POSITION_BELOW_FEED_OBJECT},b.categories.length&&{categoriesId:b.categories.map((e=>e.id))})):null,r.default.createElement(l.CommentsObject,f({showTitle:!0,feedObject:b,commentsOrderBy:l.SCCommentsOrderBy.ADDED_AT_ASC,fixedPrimaryReply:!0},g))),r.default.createElement(a.Grid,{item:!0,xs:12,md:5},r.default.createElement(a.Hidden,{smDown:!0},r.default.createElement(i.default,{enabled:!0,top:15},r.default.createElement(l.RelatedDiscussion,{feedObjectId:o,feedObjectType:d}))))))};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=n(37667),a=n(19651),l=n(78812),i=c(n(3238)),u=n(46105),s=c(n(63327));function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}const p=(0,o.styled)(a.Box,{name:"SCFeedObjectDetailTemplate",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),m=[u.SCPreferences.ADVERTISING_CUSTOM_ADV_ENABLED,u.SCPreferences.ADVERTISING_CUSTOM_ADV_ONLY_FOR_ANONYMOUS_USERS_ENABLED]},63327:function(e,t,n){t.__esModule=!0,t.default=function(){return o.default.createElement(i,null,o.default.createElement(l.Grid,{container:!0,spacing:2},o.default.createElement(l.Grid,{item:!0,xs:12,md:7},o.default.createElement(a.FeedObjectSkeleton,{template:a.SCFeedObjectTemplateType.DETAIL}),o.default.createElement(a.CommentObjectSkeleton,null)),o.default.createElement(l.Grid,{item:!0,xs:12,md:5},o.default.createElement(l.Hidden,{smDown:!0},o.default.createElement(a.GenericSkeleton,null)))))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(78812),l=n(19651);const i=(0,n(37667).styled)(l.Box,{name:"SCFeedObjectDetailSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},12796:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(63327))&&r.__esModule?r:{default:r};t.FeedObjectDetailSkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(39566));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.FeedObjectDetailProps=a.FeedObjectDetailProps;var i=a.default;t.default=i},60056:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="main_feed",className:n,widgets:o=s,FeedObjectProps:i={},FeedSidebarProps:c=null}=e;if(!(0,r.useContext)(l.SCUserContext).user)return null;return r.default.createElement(u,{id:t,className:n,endpoint:l.Endpoints.MainFeed,widgets:o,ItemComponent:a.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null,markRead:e?!t.seen_by_id.includes(e.id):null}),itemIdGenerator:e=>e[e.type].id,ItemProps:i,ItemSkeleton:a.FeedObjectSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:c})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=n(37667),a=n(78812),l=n(46105);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}const u=(0,o.styled)(a.Feed,{name:"SCMainFeedTemplate",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),s=[{type:"widget",component:a.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:a.Platform,componentProps:{},column:"right",position:0},{type:"widget",component:a.LoyaltyProgram,componentProps:{},column:"right",position:1},{type:"widget",component:a.CategoriesSuggestion,componentProps:{},column:"right",position:2},{type:"widget",component:a.PeopleSuggestion,componentProps:{},column:"right",position:3}]},87526:function(e,t,n){t.__esModule=!0,t.default=function(){return o.default.createElement(i,{sidebar:o.default.createElement(o.default.Fragment,null,o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},o.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>o.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(37667),l=n(78812);const i=(0,a.styled)(l.FeedSkeleton,{name:"SCNotificationFeedSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},98554:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(87526))&&r.__esModule?r:{default:r};t.MainFeedSkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(60056));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.MainFeedProps=a.MainFeedProps;var i=a.default;t.default=i},64842:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="notification_feed",className:n,widgets:o=s,NotificationProps:i={},FeedSidebarProps:c=null}=e;if(!(0,r.useContext)(l.SCUserContext).user)return null;return r.default.createElement(u,{id:t,className:n,endpoint:l.Endpoints.UserNotificationList,widgets:o,ItemComponent:a.Notification,itemPropsGenerator:(e,t)=>({notificationObject:t}),itemIdGenerator:e=>e.sid,ItemProps:i,ItemSkeleton:a.NotificationSkeleton,ItemSkeletonProps:{template:a.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:c})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=n(37667),a=n(78812),l=n(46105);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}const u=(0,o.styled)(a.Feed,{name:"SCNotificationFeedTemplate",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),s=[{type:"widget",component:a.FeedUpdates,componentProps:{subscriptionChannel:l.SCNotificationTopicType.INTERACTION,publicationChannel:"notifications_feed"},column:"left",position:0,publishEvents:!0},{type:"widget",component:a.BroadcastMessages,componentProps:{subscriptionChannel:"notification_feed"},column:"left",position:1},{type:"widget",component:a.Platform,componentProps:{},column:"right",position:0},{type:"widget",component:a.LoyaltyProgram,componentProps:{},column:"right",position:1},{type:"widget",component:a.CategoriesSuggestion,componentProps:{},column:"right",position:2},{type:"widget",component:a.PeopleSuggestion,componentProps:{},column:"right",position:3}]},74440:function(e,t,n){t.__esModule=!0,t.default=function(){return o.default.createElement(i,{sidebar:o.default.createElement(o.default.Fragment,null,o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},Array.from({length:5}).map(((e,t)=>o.default.createElement(l.NotificationSkeleton,{key:t}))))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(37667),l=n(78812);const i=(0,a.styled)(l.FeedSkeleton,{name:"SCNotificationFeedSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},32635:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(74440))&&r.__esModule?r:{default:r};t.NotificationFeedSkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(64842));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.NotificationFeedProps=a.NotificationFeedProps;var i=a.default;t.default=i},82912:function(e,t,n){t.__esModule=!0,t.default=function(e){const{autoHide:t=!1,className:n=null}=e,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,d),[f,p]=(0,r.useState)(null),[y,P]=(0,r.useState)(!1),b=(0,r.useContext)(s.SCUserContext),v=e=>{p(e),P(!1)},j=()=>{P(!y),p(null)};if(!t&&b.user)return r.default.createElement(O,m({},o,{className:(0,c.default)(g.root,n)}),r.default.createElement(a.Box,{className:g.snippetsBox},r.default.createElement(a.Button,{className:y?g.selected:g.newMessage,onClick:j},r.default.createElement(u.default,null,"add_circle_outline"),r.default.createElement(i.FormattedMessage,{id:"ui.NewMessage.new",defaultMessage:"ui.NewMessage.new"})),r.default.createElement(l.Snippets,{onSnippetClick:v,threadId:f?f.id:null})),r.default.createElement(a.Box,{className:g.threadBox},r.default.createElement(l.Thread,{id:f?f.id:null,receiverId:f&&!y?f.receiver.id:null,openNewMessage:y,onNewMessageSent:y?p:null})));return null};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=n(37667),a=n(19651),l=n(78812),i=n(34730),u=f(n(95754)),s=n(46105),c=f(n(94184));const d=["autoHide","className"];function f(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}const y="SCPrivateMessages",g={root:`${y}-root`,snippetsBox:`${y}-snippetsBox`,threadBox:`${y}-threadBox`,newMessage:`${y}-newMessage`,selected:`${y}-selected`},O=(0,o.styled)(a.Box,{name:y,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({height:"100%",display:"flex",flexFlow:"row",[`& .${g.snippetsBox}`]:{flexGrow:0,flexShrink:1,flexBasis:"auto"},[`& .${g.threadBox}`]:{flexGrow:1,flexShrink:1,flexBasis:"auto"},[`& .${g.newMessage}`]:{width:"100%",justifyContent:"flex-start","& .MuiIcon-root":{marginRight:"5px"}},[`& .${g.selected}`]:{background:e.palette.grey.A200,justifyContent:"flex-start",width:"100%","& .MuiIcon-root":{marginRight:"5px"}}})))},34643:function(e,t,n){t.__esModule=!0,t.default=function(){return o.default.createElement(a.GenericSkeleton,null)};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(78812)},19957:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(82912));t.PrivateMessagesProps=r.PrivateMessagesProps;var o,a=(o=n(34643))&&o.__esModule?o:{default:o};function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.PrivateMessagesSkeleton=a.default;var i=r.default;t.default=i},87679:function(e,t,n){t.__esModule=!0,t.default=function(){return o.default.createElement(i,{sidebar:o.default.createElement(o.default.Fragment,null,o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}),o.default.createElement(l.GenericSkeleton,{sx:{mb:2}}))},o.default.createElement(l.InlineComposerSkeleton,null),Array.from({length:5}).map(((e,t)=>o.default.createElement(l.FeedObjectSkeleton,{key:t,template:l.SCFeedObjectTemplateType.DETAIL}))))};var r,o=(r=n(67294))&&r.__esModule?r:{default:r},a=n(37667),l=n(78812);const i=(0,a.styled)(l.FeedSkeleton,{name:"SCNotificationFeedSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({})))},30201:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="user_feed",className:n,userId:o,user:u,widgets:d=c,FeedObjectProps:f={},FeedSidebarProps:p=null}=e,{scUser:m}=(0,a.useSCFetchUser)({id:o,user:u}),[y,g]=(0,r.useState)([]),O=(0,r.useRef)();(0,r.useEffect)((()=>{null!==m&&g(d.map((e=>e.component===l.InlineComposer?Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{onSuccess:P})}):Object.assign({},e,{componentProps:Object.assign({},e.componentProps,{userId:m.id})}))))}),[m,d]);const P=e=>{const t={type:e.type,[e.type]:e,seen_by_id:[],has_boost:!1};O&&O.current&&O.current.addFeedData(t)};if(null===m)return r.default.createElement(i.UserFeedSkeleton,null);return r.default.createElement(s,{id:t,className:n,ref:O,endpoint:Object.assign({},a.Endpoints.UserFeed,{url:()=>a.Endpoints.UserFeed.url({id:m.id})}),widgets:y,ItemComponent:l.FeedObject,itemPropsGenerator:(e,t)=>({feedObject:t[t.type],feedObjectType:t.type,feedObjectActivities:t.activities?t.activities:null}),itemIdGenerator:e=>e[e.type].id,ItemProps:f,ItemSkeleton:l.FeedObjectSkeleton,ItemSkeletonProps:{template:l.SCFeedObjectTemplateType.PREVIEW},FeedSidebarProps:p})};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=n(37667),a=n(46105),l=n(78812),i=n(25519);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}const s=(0,o.styled)(l.Feed,{name:"SCUserFeedTemplate",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)}))),c=[{type:"widget",component:l.CategoriesFollowed,componentProps:{},column:"right",position:0},{type:"widget",component:l.UsersFollowed,componentProps:{},column:"right",position:1},{type:"widget",component:l.UserFollowers,componentProps:{},column:"right",position:2}]},25519:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(87679))&&r.__esModule?r:{default:r};t.UserFeedSkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(30201));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.UserFeedProps=a.UserFeedProps;var i=a.default;t.default=i},93181:function(e,t,n){t.__esModule=!0,t.default=function(){return r.default.createElement(s,null,r.default.createElement(l.UserProfileHeaderSkeleton,null),r.default.createElement(i.default,null))};var r=u(n(67294)),o=n(19651),a=n(37667),l=n(78812),i=u(n(87679));function u(e){return e&&e.__esModule?e:{default:e}}const s=(0,a.styled)(o.Box,{name:"SCUserProfileSkeleton",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2)})))},52007:function(e,t,n){t.__esModule=!0,t.default=function(e){const{id:t="user_profile",className:n,user:o,userId:f,widgets:m=null,FeedObjectProps:b,FeedSidebarProps:v,UserProfileHeaderProps:j={},UserProfileInfoProps:_={},onEditClick:S=null}=e,w=(0,u.useSCContext)(),M=(0,u.useSCUser)(),{scUser:k}=(0,u.useSCFetchUser)({id:f,user:o});if(null===k)return r.default.createElement(s.default,null);let E=m;null===E&&(E=(()=>{let e=[];return e=null===M.user?[]:M.user.id===k.id?[...P]:[...O],e})());const F=M.user&&k.id===M.user.id,C=M.user&&M.user.role,h=C&&(C.includes("admin")||C.includes("moderator"));return r.default.createElement(g,{id:t,className:(0,c.default)(y.root,n)},r.default.createElement(l.UserProfileHeader,p({user:k},j)),r.default.createElement(l.UserProfileInfo,p({user:k},_)),r.default.createElement(a.Stack,{direction:"row",spacing:2,className:y.actions},F?r.default.createElement(a.Button,{variant:"outlined",color:"secondary",onClick:()=>{S&&S(k)}},r.default.createElement(d.FormattedMessage,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"})):r.default.createElement(l.ConnectionUserButton,{user:k}),h&&r.default.createElement(a.Button,{variant:"contained",color:"secondary",component:"a",href:`${w.settings.portal}/platform/access?next=/moderation/user/?username=${k.username}`,target:"_blank"},r.default.createElement(d.FormattedMessage,{defaultMessage:"templates.userProfile.edit",id:"templates.userProfile.edit"}))),r.default.createElement(i.default,{user:k,widgets:E,FeedObjectProps:b,FeedSidebarProps:v}))};var r=f(n(67294)),o=n(37667),a=n(19651),l=n(78812),i=f(n(25519)),u=n(46105),s=f(n(93181)),c=f(n(94184)),d=n(34730);function f(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}const m="SCUserProfileTemplate",y={root:`${m}-root`,actions:`${m}-actions`},g=(0,o.styled)(a.Box,{name:m,slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({marginTop:e.spacing(2),[`& .${y.actions}`]:{margin:e.spacing(2),justifyContent:"space-around"}}))),O=[{type:"widget",component:l.CategoriesFollowed,componentProps:{},column:"right",position:0},{type:"widget",component:l.UsersFollowed,componentProps:{},column:"right",position:1}],P=[{type:"widget",component:l.InlineComposer,componentProps:{},column:"left",position:0},{type:"widget",component:l.CategoriesFollowed,componentProps:{},column:"right",position:0},{type:"widget",component:l.UsersFollowed,componentProps:{},column:"right",position:1},{type:"widget",component:l.UserFollowers,componentProps:{},column:"right",position:2}]},73659:function(e,t,n){t.__esModule=!0,t.default=void 0;var r,o=(r=n(93181))&&r.__esModule?r:{default:r};t.UserProfileSkeleton=o.default;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=l(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n(52007));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(l=function(e){return e?n:t})(e)}t.UserProfileProps=a.UserProfileProps;var i=a.default;t.default=i},15098:function(e,t,n){var r=p(n(12451));t.WD=r.default,r.CategoryProps,r.CategorySkeleton;var o=p(n(45422));t.Yo=o.default,o.CategoryFeedProps,o.CategoryFeedSkeleton;var a=p(n(57270));t.S5=a.default,a.ExploreFeedProps,a.ExploreFeedSkeleton;var l=p(n(12796));t.Rc=l.default,l.FeedObjectDetailProps,l.FeedObjectDetailSkeleton;var i=p(n(98554));t.YD=i.default,i.MainFeedProps,i.MainFeedSkeleton;var u=p(n(32635));t.YK=u.default,u.NotificationFeedProps,u.NotificationFeedSkeleton;var s=p(n(25519));t.pz=s.default,s.UserFeedProps,s.UserFeedSkeleton;var c=p(n(73659));t.Iw=c.default,c.UserProfileProps,c.UserProfileSkeleton;var d=p(n(19957));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}t.pk=d.default,d.PrivateMessagesProps,d.PrivateMessagesSkeleton}}]);