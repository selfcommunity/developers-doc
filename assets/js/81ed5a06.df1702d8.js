"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4849],{71871:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(67294);function o(e){var n=e.children,t=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),o=t(67294),a=t(5730),i=t(62040),l=t(86010),s="tabItem_LplD";function u(e){var n,t,a,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=p?p:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,i.lx)(_,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(n=null!=d?d:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!_.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+_.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),h=k.tabGroupChoices,y=k.setTabGroupChoices,N=(0,o.useState)(b),w=N[0],T=N[1],j=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var O=h[m];null!=O&&O!==w&&_.some((function(e){return e.value===O}))&&T(O)}var E=function(e){var n=e.currentTarget,t=j.indexOf(n),r=_[t].value;r!==w&&(x(n),T(r),null!=m&&y(m,r))},C=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.currentTarget)+1;t=j[r]||j[0];break;case"ArrowLeft":var o=j.indexOf(e.currentTarget)-1;t=j[o]||j[j.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},_.map((function(e){var n=e.value,t=e.label,a=e.attributes;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:E,onClick:E},a,{className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),u?(0,o.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,a.Z)();return o.createElement(u,(0,r.Z)({key:String(n)},e))}},68018:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return g}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(76018),l=t(71871),s=["components"],u={sidebar_label:"List of Connection Events",sidebar_position:6,title:"List of Connection Events"},c=void 0,d={unversionedId:"webhooks/ls_connection_events",id:"webhooks/ls_connection_events",title:"List of Connection Events",description:"| Connection                   | Triggered When                                          | Note                                                                       |",source:"@site/docs/webhooks/ls_connection_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_connection_events",permalink:"/docs/webhooks/ls_connection_events",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_connection_events.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"List of Connection Events",sidebar_position:6,title:"List of Connection Events"},sidebar:"webhookSidebar",previous:{title:"List of Comment Events",permalink:"/docs/webhooks/ls_comment_events"},next:{title:"List of Discussion Events",permalink:"/docs/webhooks/ls_discussion_events"}},p={},m=[],f={toc:m};function g(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Connection"),(0,a.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,a.kt)("th",{parentName:"tr",align:null},"Note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.created"),(0,a.kt)("td",{parentName:"tr",align:null},"a new connection request is created"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.rejected"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection request is rejected"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.restored"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection request that has been rejected is restored"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection_request.cancelled"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection request is cancelled by the creator"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.created"),(0,a.kt)("td",{parentName:"tr",align:null},"a new connection is created"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"a connection is deleted"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.follow"),(0,a.kt)("td",{parentName:"tr",align:null},"a user follows another user"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"connection.unfollow"),(0,a.kt)("td",{parentName:"tr",align:null},"a user unfollows another user"),(0,a.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,a.kt)("inlineCode",{parentName:"td"},"follow_enabled")," community option is true")))),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"connection_request.created"),(0,a.kt)("li",{parentName:"ul"},"connection_request.rejected"),(0,a.kt)("li",{parentName:"ul"},"connection_request.cancelled"),(0,a.kt)("li",{parentName:"ul"},"connection.created"),(0,a.kt)("li",{parentName:"ul"},"connection.deleted"))),(0,a.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "to_user": {\n            "id": 33,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        },\n        "from_user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        }\n    }\n}\n')))),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"connection.follow"),(0,a.kt)("li",{parentName:"ul"},"connection.unfollow "))),(0,a.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"json",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "to_user": {\n            "id": 114,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 14,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        },\n        "from_user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 81,\n            "connection_requests_sent_counter": 1,\n            "connection_requests_received_counter": 0,\n            "connections_counter": 0,\n            "posts_counter": 0,\n            "discussions_counter": 0,\n            "statuses_counter": 0,\n            "polls_counter": 0\n        }\n    }\n}\n')))))}g.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);