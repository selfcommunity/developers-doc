"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[16100],{32342:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var s=n(36905);const r={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(67294),r=n(36905),a=n(63735),i=n(16550),o=n(20613),l=n(34423),u=n(20636),d=n(99200);function c(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[u,c]=g({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,d.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),f=(()=>{const e=u??b;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),m(e)}),[c,m,a]),tabValues:a}}var m=n(5730);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=n(85893);function x(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==s&&(u(t),i(r))},c=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:c,onClick:d,...a,className:(0,r.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=b(e);return(0,_.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,_.jsx)(x,{...e,...t}),(0,_.jsx)(v,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,_.jsx)(j,{...e,children:c(e.children)},String(t))}},11505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var s=n(85893),r=n(11151),a=n(71125),i=n(32342);const o={sidebar_label:"List of Status Events",sidebar_position:1,title:"List of Status Events"},l=void 0,u={id:"webhooks/ls_status_events",title:"List of Status Events",description:"| Event            | Triggered When                                       | Note                                                                      |",source:"@site/docs/webhooks/ls_status_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_status_events",permalink:"/docs/webhooks/ls_status_events",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_status_events.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"List of Status Events",sidebar_position:1,title:"List of Status Events"},sidebar:"webhookSidebar",previous:{title:"List of Post Events",permalink:"/docs/webhooks/ls_post_events"},next:{title:"List of User Events",permalink:"/docs/webhooks/ls_user_events"}},d={},c=[];function h(e){const t={blockquote:"blockquote",code:"code",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Event"}),(0,s.jsx)(t.th,{children:"Triggered When"}),(0,s.jsx)(t.th,{children:"Note"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.created"}),(0,s.jsx)(t.td,{children:"a new status is created"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.updated"}),(0,s.jsx)(t.td,{children:"a status is updated"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.deleted"}),(0,s.jsx)(t.td,{children:"a status is deleted"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.restored"}),(0,s.jsx)(t.td,{children:"a status is restored after deletion"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.follow"}),(0,s.jsx)(t.td,{children:"a status is followed by the user"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.unfollow"}),(0,s.jsx)(t.td,{children:"a status is unfollowed by the user"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.suspend"}),(0,s.jsx)(t.td,{children:"a status's notifications are suspended by the user"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"status.unsuspend"}),(0,s.jsx)(t.td,{children:"a status's notifications are unsuspended by the user"}),(0,s.jsxs)(t.td,{children:["This event is triggered only if ",(0,s.jsx)(t.code,{children:"status_enabled"})," community option is true"]})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"status.created"}),"\n",(0,s.jsx)(t.li,{children:"status.updated"}),"\n",(0,s.jsx)(t.li,{children:"status.deleted"}),"\n",(0,s.jsx)(t.li,{children:"status.restored"}),"\n"]}),"\n"]}),"\n","\n","\n",(0,s.jsx)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,s.jsx)(i.Z,{value:"json",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "categories": [],\n        "medias": [],\n        "location": [],\n        "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n        "last_edited_at": null,\n        "author": {\n            "id": 100,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2021-05-28T10:33:52.269304+02:00",\n            "bio":  "string",\n            "location": "string",\n            "location_lat_lng":  "string",\n            "position_lat_lng":  "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "added_at": "2021-05-28T11:37:25.178645+02:00",\n        "html":  "string",\n        "summary":  "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "tags": []\n    }\n}\n'})})})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"status.follow"}),"\n",(0,s.jsx)(t.li,{children:"status.unfollow"}),"\n",(0,s.jsx)(t.li,{children:"status.suspend"}),"\n",(0,s.jsx)(t.li,{children:"status.unsuspend"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,s.jsx)(i.Z,{value:"json",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "added_at": "2021-06-07T09:46:39.536844+02:00",\n        "user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "status": {\n            "id": 1,\n            "categories": [],\n            "medias": [],\n            "location": [],\n            "poll": [],\n            "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n            "last_edited_at": null,\n            "author": {\n                "id": 100,\n                "username": "string",\n                "real_name": "string",\n                "date_joined": "2021-05-28T10:33:52.269304+02:00",\n                "bio":  "string",\n                "location": "string",\n                "location_lat_lng":  "string",\n                "position_lat_lng":  "string",\n                "date_of_birth": "string",\n                "description": "string",\n                "gender": "Male",\n                "website": "https://example.com",\n                "avatar": "string",\n                "cover": "string",\n                "ext_id": "string",\n                "tags": [],\n                "reputation": 111,\n                "followings_counter": 7,\n                "followers_counter": 2,\n                "posts_counter": 4,\n                "discussions_counter": 3,\n                "statuses_counter": 0,\n                "polls_counter": 1\n            },\n            "added_at": "2021-05-28T11:37:25.178645+02:00",\n            "html":  "string",\n            "summary":  "string",\n            "deleted": true,\n            "collapsed": false,\n            "comment_count": 0,\n            "vote_count": 0,\n            "flag_count": 0,\n            "share_count": 0,\n            "addressing": [],\n            "tags": []\n        }\n    }\n}\n'})})})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(67294);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);