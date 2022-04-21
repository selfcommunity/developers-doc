"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[2665],{71871:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(67294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},76018:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(87462),a=t(67294),i=t(5730),o=t(62040),s=t(86010),l="tabItem_LplD";function u(e){var n,t,i,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:f.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(n=null!=d?d:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=f[0])?void 0:i.props.value;if(null!==_&&!v.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,h=k.setTabGroupChoices,N=(0,a.useState)(_),w=N[0],T=N[1],O=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=y[m];null!=j&&j!==w&&v.some((function(e){return e.value===j}))&&T(j)}var x=function(e){var n=e.currentTarget,t=O.indexOf(n),r=v[t].value;r!==w&&(E(n),T(r),null!=m&&h(m,r))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;t=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return O.push(e)},onKeyDown:D,onFocus:x,onClick:x},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function c(e){var n=(0,i.Z)();return a.createElement(u,(0,r.Z)({key:String(n)},e))}},81120:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(76018),s=t(71871),l=["components"],u={sidebar_label:"List of Discussion Events",sidebar_position:7,title:"List of Discussion Events"},c=void 0,d={unversionedId:"webhooks/ls_discussion_events",id:"webhooks/ls_discussion_events",title:"List of Discussion Events",description:"| Discussion          | Triggered When                          | Note                                                                          |",source:"@site/docs/webhooks/ls_discussion_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_discussion_events",permalink:"/docs/webhooks/ls_discussion_events",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_discussion_events.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"List of Discussion Events",sidebar_position:7,title:"List of Discussion Events"},sidebar:"webhookSidebar",previous:{title:"List of Connection Events",permalink:"/docs/webhooks/ls_connection_events"},next:{title:"List of Loyalty Events",permalink:"/docs/webhooks/ls_loyalty_events"}},p={},m=[],g={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Discussion"),(0,i.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,i.kt)("th",{parentName:"tr",align:null},"Note"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion.created"),(0,i.kt)("td",{parentName:"tr",align:null},"a new discussion is created"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,i.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion.updated"),(0,i.kt)("td",{parentName:"tr",align:null},"a discussion is updated"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,i.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion.deleted"),(0,i.kt)("td",{parentName:"tr",align:null},"a discussion is deleted"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,i.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion.restored"),(0,i.kt)("td",{parentName:"tr",align:null},"a discussion is restored after deletion"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,i.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion.follow"),(0,i.kt)("td",{parentName:"tr",align:null},"a discussion is followed by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,i.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"discussion.unfollow"),(0,i.kt)("td",{parentName:"tr",align:null},"a discussion is unfollowed by the user"),(0,i.kt)("td",{parentName:"tr",align:null},"This event is triggered only if ",(0,i.kt)("inlineCode",{parentName:"td"},"discussion_enabled")," community option is true")))),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"discussion.created"),(0,i.kt)("li",{parentName:"ul"},"discussion.updated"),(0,i.kt)("li",{parentName:"ul"},"discussion.deleted"),(0,i.kt)("li",{parentName:"ul"},"discussion.restored"))),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "id": 1,\n        "categories": [],\n        "medias": [],\n        "location": [],\n        "poll": [],\n        "last_activity_at": "2021-05-28T11:37:25.178645+02:00",\n        "author": {\n            "id": 100,\n            "username": "string",\n            "real_name": "string",\n            "date_joined": "2021-05-28T10:33:52.269304+02:00",\n            "bio":  "string",\n            "location": "string",\n            "location_lat_lng":  "string",\n            "position_lat_lng":  "string",\n            "date_of_birth": "string",\n            "description": "string",\n            "gender": "Male",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": "string",\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "added_at": "2021-05-28T11:37:25.178645+02:00",\n        "html":  "string",\n        "summary":  "string",\n        "deleted": true,\n        "collapsed": false,\n        "comment_count": 0,\n        "vote_count": 0,\n        "flag_count": 0,\n        "share_count": 0,\n        "addressing": [],\n        "title": "string",\n        "slug": "string",\n        "view_count": 0,\n        "follower_count": 0\n    }\n}\n')))),(0,i.kt)("blockquote",null,(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"discussion.follow"),(0,i.kt)("li",{parentName:"ul"},"discussion.unfollow"))),(0,i.kt)(o.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "added_at": "2021-06-07T09:46:39.536844+02:00",\n        "user": {\n            "id": 1,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 7,\n            "followers_counter": 2,\n            "posts_counter": 4,\n            "discussions_counter": 3,\n            "statuses_counter": 0,\n            "polls_counter": 1\n        },\n        "discussion": {\n            "id": 1,\n            "categories": [],\n            "medias": [],\n            "location": "string",\n            "poll": [],\n            "last_activity_at": "2021-06-07T09:44:59.016173+02:00",\n            "author": {\n                "id": 100,\n                "username": "string",\n                "real_name": "string",\n                "date_joined": "2021-05-28T10:33:52.269304+02:00",\n                "bio":  "string",\n                "location": "string",\n                "location_lat_lng":  "string",\n                "position_lat_lng":  "string",\n                "date_of_birth": "string",\n                "description": "string",\n                "gender": "Male",\n                "website": "https://example.com",\n                "avatar": "string",\n                "cover": "string",\n                "ext_id": "string",\n                "tags": [],\n                "reputation": 111,\n                "followings_counter": 7,\n                "followers_counter": 2,\n                "posts_counter": 4,\n                "discussions_counter": 3,\n                "statuses_counter": 0,\n                "polls_counter": 1\n            },\n            "added_at": "2021-06-07T09:44:59.016173+02:00",\n            "html":  "string",\n            "summary":  "string",\n            "deleted": true,\n            "collapsed": false,\n            "comment_count": 0,\n            "vote_count": 0,\n            "flag_count": 0,\n            "share_count": 0,\n            "addressing": [],\n            "title": "string",\n            "slug": "string",\n            "view_count": 0,\n            "follower_count": 0\n        }\n    }\n}\n')))))}f.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);