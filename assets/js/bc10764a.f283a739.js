"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[92665],{32342:(e,n,s)=>{s.d(n,{Z:()=>o});s(67294);var t=s(36905);const i={tabItem:"tabItem_Ymn6"};var r=s(85893);function o(e){let{children:n,hidden:s,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,o),hidden:s,children:n})}},71125:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(67294),i=s(36905),r=s(63735),o=s(16550),l=s(20613),a=s(34423),d=s(20636),c=s(99200);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function g(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const i=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,r=h(e),[o,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[d,u]=p({queryString:s,groupId:i}),[m,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Nk)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),b=(()=>{const e=d??m;return g({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{b&&a(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=s(5730);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=s(85893);function v(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:l}=e;const a=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,s=a.indexOf(n),i=l[s].value;i!==t&&(d(n),o(i))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:u,onClick:c,...r,className:(0,i.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function x(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function j(e){const n=m(e);return(0,_.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,_.jsx)(v,{...e,...n}),(0,_.jsx)(x,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,_.jsx)(j,{...e,children:u(e.children)},String(n))}},86144:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var t=s(85893),i=s(11151),r=s(71125),o=s(32342);const l={sidebar_label:"List of Discussion Events",sidebar_position:1,title:"List of Discussion Events"},a=void 0,d={id:"webhooks/ls_discussion_events",title:"List of Discussion Events",description:"| Event                | Triggered When                                           | Note                                                                          |",source:"@site/docs/webhooks/ls_discussion_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_discussion_events",permalink:"/docs/webhooks/ls_discussion_events",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_discussion_events.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"List of Discussion Events",sidebar_position:1,title:"List of Discussion Events"},sidebar:"webhookSidebar",previous:{title:"List of Custom Page Events",permalink:"/docs/webhooks/ls_custom_page_events"},next:{title:"List of Dynamic Preference Events",permalink:"/docs/webhooks/ls_dynamic_preference_events"}},c={},u=[];function h(e){const n={blockquote:"blockquote",code:"code",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Event"}),(0,t.jsx)(n.th,{children:"Triggered When"}),(0,t.jsx)(n.th,{children:"Note"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.created"}),(0,t.jsx)(n.td,{children:"a new discussion is created"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.updated"}),(0,t.jsx)(n.td,{children:"a discussion is updated"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.deleted"}),(0,t.jsx)(n.td,{children:"a discussion is deleted"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.restored"}),(0,t.jsx)(n.td,{children:"a discussion is restored after deletion"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.follow"}),(0,t.jsx)(n.td,{children:"a discussion is followed by the user"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.unfollow"}),(0,t.jsx)(n.td,{children:"a discussion is unfollowed by the user"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.suspend"}),(0,t.jsx)(n.td,{children:"a discussion's notifications are suspended by the user"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"discussion.unsuspend"}),(0,t.jsx)(n.td,{children:"a discussion's notifications are unsuspended by the user"}),(0,t.jsxs)(n.td,{children:["This event is triggered only if ",(0,t.jsx)(n.code,{children:"discussion_enabled"})," community option is true"]})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"discussion.created"}),"\n",(0,t.jsx)(n.li,{children:"discussion.updated"}),"\n",(0,t.jsx)(n.li,{children:"discussion.deleted"}),"\n",(0,t.jsx)(n.li,{children:"discussion.restored"}),"\n"]}),"\n"]}),"\n","\n","\n",(0,t.jsx)(r.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,t.jsx)(o.Z,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "categories": [],\n        "medias": [],\n        "location": [],\n        "poll": [],\n        "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n        "last_edited_at": null,\n        "author": {\n            "id": 100,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2021-05-28T10:33:52.269304+02:00",\n            "bio":  "string",\n            "location": "string",\n            "location_lat_lng":  "string",\n            "position_lat_lng":  "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "added_at": "2021-05-28T11:37:25.178645+02:00",\n        "html":  "string",\n        "summary":  "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "tags": [],\n        "title": "string",\n        "slug": "string",\n        "view_count": 0,\n        "follower_count": 0\n    }\n}\n'})})})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"discussion.follow"}),"\n",(0,t.jsx)(n.li,{children:"discussion.unfollow"}),"\n",(0,t.jsx)(n.li,{children:"discussion.suspend"}),"\n",(0,t.jsx)(n.li,{children:"discussion.unsuspend"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,t.jsx)(o.Z,{value:"json",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "added_at": "2021-06-07T09:46:39.536844+02:00",\n        "user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "discussion": {\n            "id": 1,\n            "categories": [],\n            "medias": [],\n            "location": "string",\n            "poll": [],\n            "last_activity_at": "2021-06-07T09:44:59.016173+02:00",\n            "last_edited_at": null,\n            "author": {\n                "id": 100,\n                "username": "string",\n                "real_name": "string",\n                "date_joined": "2021-05-28T10:33:52.269304+02:00",\n                "bio":  "string",\n                "location": "string",\n                "location_lat_lng":  "string",\n                "position_lat_lng":  "string",\n                "date_of_birth": "string",\n                "description": "string",\n                "gender": "Male",\n                "website": "https://example.com",\n                "avatar": "string",\n                "cover": "string",\n                "ext_id": "string",\n                "tags": [],\n                "reputation": 111,\n                "followings_counter": 7,\n                "followers_counter": 2,\n                "posts_counter": 4,\n                "discussions_counter": 3,\n                "statuses_counter": 0,\n                "polls_counter": 1\n            },\n            "added_at": "2021-06-07T09:44:59.016173+02:00",\n            "html":  "string",\n            "summary":  "string",\n            "deleted": true,\n            "collapsed": false,\n            "comment_count": 0,\n            "vote_count": 0,\n            "flag_count": 0,\n            "share_count": 0,\n            "addressing": [],\n            "tags": [],\n            "title": "string",\n            "slug": "string",\n            "view_count": 0,\n            "follower_count": 0\n        }\n    }\n}\n'})})})})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(67294);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);