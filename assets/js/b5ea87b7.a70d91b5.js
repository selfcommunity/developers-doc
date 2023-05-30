"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[93461],{32342:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>_});var r=n(87462),a=n(67294),o=n(86010),l=n(63735),s=n(16550),i=n(34423),u=n(20636),c=n(99200);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,u]=b({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),g=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var g=n(5730);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==s&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=f(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function _(e){const t=(0,g.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},82662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),o=n(71125),l=n(32342);const s={sidebar_label:"List of Post Events",sidebar_position:10,title:"List of Post Events"},i=void 0,u={unversionedId:"webhooks/ls_post_events",id:"webhooks/ls_post_events",title:"List of Post Events",description:"| Post          | Triggered When                    | Note                                                                    |",source:"@site/docs/webhooks/ls_post_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_post_events",permalink:"/docs/webhooks/ls_post_events",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_post_events.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"List of Post Events",sidebar_position:10,title:"List of Post Events"},sidebar:"webhookSidebar",previous:{title:"List of Poll Events",permalink:"/docs/webhooks/ls_poll_events"},next:{title:"List of Status Events",permalink:"/docs/webhooks/ls_status_events"}},c={},d=[],p={toc:d},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Post"),(0,a.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,a.kt)("th",{parentName:"tr",align:null},"Note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post.created"),(0,a.kt)("td",{parentName:"tr",align:null},"a new post is created"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"post_enabled")," community option is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post.updated"),(0,a.kt)("td",{parentName:"tr",align:null},"a post is updated"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"post_enabled")," community option is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post.deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"a post is deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"post_enabled")," community option is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"post.restored"),(0,a.kt)("td",{parentName:"tr",align:null},"a post is restored after deletion"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"post_enabled")," community option is true")))),(0,a.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "categories": [],\n        "medias": [],\n        "location": [],\n        "poll": [],\n        "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n        "last_edited_at": null,\n        "author": {\n            "id": 100,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2021-05-28T10:33:52.269304+02:00",\n            "bio":  "string",\n            "location": "string",\n            "location_lat_lng":  "string",\n            "position_lat_lng":  "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "added_at": "2021-05-28T11:37:25.178645+02:00",\n        "html":  "string",\n        "summary":  "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "tags": []\n    }\n}\n')))))}b.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);