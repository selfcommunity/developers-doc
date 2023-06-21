"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[16100],{32342:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function l(t){let{children:e,hidden:n,className:l}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n},e)}},71125:(t,e,n)=>{n.d(e,{Z:()=>h});var a=n(87462),r=n(67294),s=n(86010),l=n(63735),o=n(16550),i=n(34423),u=n(20636),d=n(99200);function c(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function p(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??c(n);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function m(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:n}=t;const a=(0,o.k6)(),s=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((t=>{if(!s)return;const e=new URLSearchParams(a.location.search);e.set(s,t),a.replace({...a.location,search:e.toString()})}),[s,a])]}function b(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,s=p(t),[l,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:s}))),[i,u]=g({queryString:n,groupId:a}),[c,b]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,s]=(0,d.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&s.set(t)}),[n,s])]}({groupId:a}),f=(()=>{const t=i??c;return m({value:t,tabValues:s})?t:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:s}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),b(t)}),[u,b,s]),tabValues:s}}var f=n(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(t){let{className:e,block:n,selectedValue:o,selectValue:i,tabValues:u}=t;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=t=>{const e=t.currentTarget,n=d.indexOf(e),a=u[n].value;a!==o&&(c(e),i(a))},m=t=>{let e=null;switch(t.key){case"Enter":p(t);break;case"ArrowRight":{const n=d.indexOf(t.currentTarget)+1;e=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(t.currentTarget)-1;e=d[n]??d[d.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},e)},u.map((t=>{let{value:e,label:n,attributes:l}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>d.push(t),onKeyDown:m,onClick:p},l,{className:(0,s.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===e})}),n??e)})))}function _(t){let{lazy:e,children:n,selectedValue:a}=t;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=s.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function y(t){const e=b(t);return r.createElement("div",{className:(0,s.Z)("tabs-container",v.tabList)},r.createElement(k,(0,a.Z)({},t,e)),r.createElement(_,(0,a.Z)({},t,e)))}function h(t){const e=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(e)},t))}},93717:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),s=n(71125),l=n(32342);const o={sidebar_label:"List of Status Events",sidebar_position:11,title:"List of Status Events"},i=void 0,u={unversionedId:"webhooks/ls_status_events",id:"webhooks/ls_status_events",title:"List of Status Events",description:"| Event            | Triggered When                                       | Note                                                                      |",source:"@site/docs/webhooks/ls_status_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_status_events",permalink:"/docs/webhooks/ls_status_events",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_status_events.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_label:"List of Status Events",sidebar_position:11,title:"List of Status Events"},sidebar:"webhookSidebar",previous:{title:"List of Post Events",permalink:"/docs/webhooks/ls_post_events"},next:{title:"List of Notification Events",permalink:"/docs/webhooks/ls_notification_events"}},d={},c=[],p={toc:c},m="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,r.kt)("th",{parentName:"tr",align:null},"Note"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.created"),(0,r.kt)("td",{parentName:"tr",align:null},"a new status is created"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.updated"),(0,r.kt)("td",{parentName:"tr",align:null},"a status is updated"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"a status is deleted"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.restored"),(0,r.kt)("td",{parentName:"tr",align:null},"a status is restored after deletion"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.follow"),(0,r.kt)("td",{parentName:"tr",align:null},"a status is followed by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.unfollow"),(0,r.kt)("td",{parentName:"tr",align:null},"a status is unfollowed by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.suspend"),(0,r.kt)("td",{parentName:"tr",align:null},"a status's notifications are suspended by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status.unsuspend"),(0,r.kt)("td",{parentName:"tr",align:null},"a status's notifications are unsuspended by the user"),(0,r.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,r.kt)("inlineCode",{parentName:"td"},"status_enabled")," community option is true")))),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"status.created"),(0,r.kt)("li",{parentName:"ul"},"status.updated"),(0,r.kt)("li",{parentName:"ul"},"status.deleted"),(0,r.kt)("li",{parentName:"ul"},"status.restored"))),(0,r.kt)(s.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "categories": [],\n        "medias": [],\n        "location": [],\n        "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n        "last_edited_at": null,\n        "author": {\n            "id": 100,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2021-05-28T10:33:52.269304+02:00",\n            "bio":  "string",\n            "location": "string",\n            "location_lat_lng":  "string",\n            "position_lat_lng":  "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "added_at": "2021-05-28T11:37:25.178645+02:00",\n        "html":  "string",\n        "summary":  "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "tags": []\n    }\n}\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"status.follow"),(0,r.kt)("li",{parentName:"ul"},"status.unfollow"),(0,r.kt)("li",{parentName:"ul"},"status.suspend"),(0,r.kt)("li",{parentName:"ul"},"status.unsuspend"))),(0,r.kt)(s.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "added_at": "2021-06-07T09:46:39.536844+02:00",\n        "user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "status": {\n            "id": 1,\n            "categories": [],\n            "medias": [],\n            "location": [],\n            "poll": [],\n            "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n            "last_edited_at": null,\n            "author": {\n                "id": 100,\n                "username": "string",\n                "real_name": "string",\n                "date_joined": "2021-05-28T10:33:52.269304+02:00",\n                "bio":  "string",\n                "location": "string",\n                "location_lat_lng":  "string",\n                "position_lat_lng":  "string",\n                "date_of_birth": "string",\n                "description": "string",\n                "gender": "Male",\n                "website": "https://example.com",\n                "avatar": "string",\n                "cover": "string",\n                "ext_id": "string",\n                "tags": [],\n                "reputation": 111,\n                "followings_counter": 7,\n                "followers_counter": 2,\n                "posts_counter": 4,\n                "discussions_counter": 3,\n                "statuses_counter": 0,\n                "polls_counter": 1\n            },\n            "added_at": "2021-05-28T11:37:25.178645+02:00",\n            "html":  "string",\n            "summary":  "string",\n            "deleted": true,\n            "collapsed": false,\n            "comment_count": 0,\n            "vote_count": 0,\n            "flag_count": 0,\n            "share_count": 0,\n            "addressing": [],\n            "tags": []\n        }\n    }\n}\n')))))}g.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(i,".").concat(m)]||c[m]||p[m]||s;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);