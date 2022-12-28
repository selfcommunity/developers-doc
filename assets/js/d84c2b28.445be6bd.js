"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[51104],{71871:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294);function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},76018:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(83117),a=n(67294),o=n(5730),l=n(87139),s=n(86010);const i="tabItem_LplD";function u(e){var t,n;const{lazy:o,block:u,defaultValue:c,values:m,groupId:d,className:p}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,l.lx)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=b[0])?void 0:n.props.value);if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,l.UB)(),[k,_]=(0,a.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=d){const e=h[d];null!=e&&e!==k&&v.some((t=>t.value===e))&&_(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),r=v[n].value;r!==k&&(w(t),_(r),null!=d&&y(d,r))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]||N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},p)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>N.push(e),onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,s.Z)("tabs__item",i,null==o?void 0:o.className,{"tabs__item--active":k===t})}),n??t)}))),o?(0,a.cloneElement)(b.filter((e=>e.props.value===k))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function c(e){const t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},75899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=n(83117),a=(n(67294),n(3905)),o=n(76018),l=n(71871);const s={sidebar_label:"List of Comment Events",sidebar_position:5,title:"List of Comment Events"},i=void 0,u={unversionedId:"webhooks/ls_comment_events",id:"webhooks/ls_comment_events",title:"List of Comment Events",description:"| Comment          | Triggered When                       | Note |",source:"@site/docs/webhooks/ls_comment_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_comment_events",permalink:"/docs/webhooks/ls_comment_events",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_comment_events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"List of Comment Events",sidebar_position:5,title:"List of Comment Events"},sidebar:"webhookSidebar",previous:{title:"List of Category Events",permalink:"/docs/webhooks/ls_category_events"},next:{title:"List of Connection Events",permalink:"/docs/webhooks/ls_connection_events"}},c={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Comment"),(0,a.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,a.kt)("th",{parentName:"tr",align:null},"Note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"comment.created"),(0,a.kt)("td",{parentName:"tr",align:null},"a new comment is created"),(0,a.kt)("td",{parentName:"tr",align:null},"---")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"comment.updated"),(0,a.kt)("td",{parentName:"tr",align:null},"a comment is updated"),(0,a.kt)("td",{parentName:"tr",align:null},"---")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"comment.deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"a comment is deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"---")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"comment.restored"),(0,a.kt)("td",{parentName:"tr",align:null},"a comment is restored after deletion"),(0,a.kt)("td",{parentName:"tr",align:null},"---")))),(0,a.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 0,\n        "discussion": 11,\n        "author": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "description": "string",\n            "avatar": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 24,\n            "followings_counter": 1,\n            "followers_counter": 1,\n            "posts_counter": 3,\n            "discussions_counter": 5,\n            "statuses_counter": 1,\n            "polls_counter": 8\n        },\n        "added_at": "2021-06-07T10:14:52.772383+02:00",\n        "html":  "string",\n        "summary":  "string",\n        "deleted": true,\n        "collapsed": false,\n        "parent": "string",\n        "in_reply_to": "string",\n        "comment_count": 0,\n        "vote_count": 0,\n        "flag_count": 0\n    }\n}\n')))))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);