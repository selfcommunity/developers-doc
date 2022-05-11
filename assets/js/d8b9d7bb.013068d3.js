"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4157],{71871:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(83117),a=n(67294),l=n(5730),o=n(69143),i=n(86010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,y=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),h=k.tabGroupChoices,N=k.setTabGroupChoices,_=(0,a.useState)(g),w=_[0],T=_[1],O=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=h[m];null!=j&&j!==w&&v.some((function(e){return e.value===j}))&&T(j)}var x=function(e){var t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==w&&(E(t),T(r),null!=m&&N(m,r))},L=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},y)},v.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return O.push(e)},onKeyDown:L,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,l.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},83598:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),l=(n(67294),n(3905)),o=n(76018),i=n(71871),u=["components"],s={sidebar_label:"List of Loyalty Events",sidebar_position:8,title:"List of Loyalty Events"},c=void 0,p={unversionedId:"webhooks/ls_loyalty_events",id:"webhooks/ls_loyalty_events",title:"List of Loyalty Events",description:"| Loyalty                       | Triggered When                                 | Note                                                                                 |",source:"@site/docs/webhooks/ls_loyalty_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_loyalty_events",permalink:"/docs/webhooks/ls_loyalty_events",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_loyalty_events.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_label:"List of Loyalty Events",sidebar_position:8,title:"List of Loyalty Events"},sidebar:"webhookSidebar",previous:{title:"List of Discussion Events",permalink:"/docs/webhooks/ls_discussion_events"},next:{title:"List of Poll Events",permalink:"/docs/webhooks/ls_poll_events"}},d={},m=[],y={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Loyalty"),(0,l.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,l.kt)("th",{parentName:"tr",align:null},"Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loyalty.prize.created"),(0,l.kt)("td",{parentName:"tr",align:null},"a new prize has been created"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,l.kt)("inlineCode",{parentName:"td"},"loyalty_points_collection")," community option is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loyalty.prize.updated"),(0,l.kt)("td",{parentName:"tr",align:null},"a prize has been updated"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,l.kt)("inlineCode",{parentName:"td"},"loyalty_points_collection")," community option is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loyalty.prize_request.created"),(0,l.kt)("td",{parentName:"tr",align:null},"a new request of a prize has been created"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,l.kt)("inlineCode",{parentName:"td"},"loyalty_points_collection")," community option is true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loyalty.prize_request.updated"),(0,l.kt)("td",{parentName:"tr",align:null},"a request of a prize has been updated (status)"),(0,l.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,l.kt)("inlineCode",{parentName:"td"},"loyalty_points_collection")," community option is true")))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"loyalty.prize.created"),(0,l.kt)("li",{parentName:"ul"},"loyalty.prize.updated"))),(0,l.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "active": true,\n        "created_by": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "description": "string",\n            "avatar": "string"\n        },\n        "title": "string",\n        "description": "string",\n        "points": 200,\n        "link": "https://example.com",\n        "image": "string",\n        "created_at": "2021-06-07T10:36:29.850060+02:00",\n        "lastmod_datetime": "2021-06-07T10:36:29.850136+02:00"\n    }\n}\n')))),(0,l.kt)("blockquote",null,(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"loyalty.prize_request.created"),(0,l.kt)("li",{parentName:"ul"},"loyalty.prize_request.updated"))),(0,l.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "description": "string",\n            "avatar": "string"\n        },\n        "pending_at": "2021-06-07T11:11:06.148633+02:00",\n        "prize": {\n            "id": 2,\n            "active": true,\n            "title": "string",\n            "description": "string",\n            "points": 1,\n            "link": "https://example.com",\n            "image": "string"\n        },\n        "prize_points": 1,\n        "status": 0,\n        "status_description": "string"\n    }\n}\n')))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);