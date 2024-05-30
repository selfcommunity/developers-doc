"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[15610],{32342:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},71125:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),s=n(36905),a=n(63735),o=n(16550),i=n(20613),l=n(34423),u=n(20636),c=n(99200);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=p({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=u??m;return f({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function _(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==r&&(u(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(_,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},45903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(85893),s=n(11151),a=n(71125),o=n(32342);const i={sidebar_label:"List of Vote Events",sidebar_position:1,title:"List of Vote Events"},l=void 0,u={id:"webhooks/ls_vote_events",title:"List of Vote Events",description:"| Event        | Triggered When                                                                                                                                                                                                                       | Note |",source:"@site/docs/webhooks/ls_vote_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_vote_events",permalink:"/docs/webhooks/ls_vote_events",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_vote_events.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"List of Vote Events",sidebar_position:1,title:"List of Vote Events"},sidebar:"webhookSidebar",previous:{title:"List of User Events",permalink:"/docs/webhooks/ls_user_events"},next:{title:"Build a Webhook Endpoint",permalink:"/docs/webhooks/build_a_webhook_endpoint"}},c={},d=[];function h(e){const t={a:"a",code:"code",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Event"}),(0,r.jsx)(t.th,{children:"Triggered When"}),(0,r.jsx)(t.th,{children:"Note"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vote.created"}),(0,r.jsxs)(t.td,{children:["a user votes a contribute (",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/discussion",children:"Discussion"}),", ",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/post",children:"Post"}),",  ",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/status",children:"Status"})," or ",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/comment",children:"Comment"}),")"]}),(0,r.jsx)(t.td,{children:"---"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"vote.deleted"}),(0,r.jsxs)(t.td,{children:["a user remove the vote from a contribute (",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/discussion",children:"Discussion"}),", ",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/post",children:"Post"}),", ",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/status",children:"Status"})," or ",(0,r.jsx)(t.a,{href:"../apireference/v2/schemas/comment",children:"Comment"})]}),(0,r.jsx)(t.td,{children:"---"})]})]})]}),"\n","\n","\n",(0,r.jsx)(a.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,r.jsx)(o.Z,{value:"json",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n    "event_id": 0,\n    "type": "vote.created",\n    "created": 1623060368.026038,\n    "data": {\n        "user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "voted_at": "2021-06-07T12:06:07.849533+02:00",\n        "object_type": "discussion",\n        "discussion": {\n            "id": 3,\n            "categories": [],\n            "medias": [],\n            "location": [],\n            "poll": [],\n            "last_activity_at": "2021-05-28T02:41:00+02:00",\n            "last_edited_at": null,\n            "author": {\n                "id": 92,\n                "username": "string",\n                "real_name": "string",\n                "date_joined": "2021-05-28T10:33:52.269304+02:00",\n                "bio":  "string",\n                "location": "string",\n                "location_lat_lng":  "string",\n                "position_lat_lng":  "string",\n                "date_of_birth": "string",\n                "description": "string",\n                "gender": "Male",\n                "website": "https://example.com",\n                "avatar": "string",\n                "cover": "string",\n                "ext_id": "string",\n                "tags": [],\n                "reputation": 111,\n                "followings_counter": 7,\n                "followers_counter": 2,\n                "posts_counter": 4,\n                "discussions_counter": 3,\n                "statuses_counter": 0,\n                "polls_counter": 1\n            },\n            "added_at": "string",\n            "html": "string",\n            "summary": "string",\n            "deleted": false,\n            "collapsed": false,\n            "comment_count": 6,\n            "vote_count": 2,\n            "flag_count": 0,\n            "share_count": 0,\n            "addressing": [],\n            "tags": [],\n            "title": "string",\n            "slug": "string",\n            "view_count": 7,\n            "follower_count": 0\n        }\n    }\n}\n'})})})})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);