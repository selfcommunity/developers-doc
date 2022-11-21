"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[71483],{71871:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(83117),a=n(67294),o=n(5730),l=n(69143),i=n(86010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,l.UB)(),k=h.tabGroupChoices,_=h.setTabGroupChoices,w=(0,a.useState)(y),N=w[0],O=w[1],E=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=k[m];null!=j&&j!==N&&b.some((function(e){return e.value===j}))&&O(j)}var x=function(e){var t=e.currentTarget,n=E.indexOf(t),r=b[n].value;r!==N&&(T(t),O(r),null!=m&&_(m,r))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},g)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return E.push(e)},onKeyDown:C,onFocus:x,onClick:x},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},63771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=n(76018),i=n(71871),s=["components"],u={sidebar_label:"List of Category Events",sidebar_position:5,title:"List of Category Events"},c=void 0,d={unversionedId:"webhooks/ls_category_events",id:"webhooks/ls_category_events",title:"List of Category Events",description:"| Category          | Triggered When                       | Note |",source:"@site/docs/webhooks/ls_category_events.md",sourceDirName:"webhooks",slug:"/webhooks/ls_category_events",permalink:"/docs/webhooks/ls_category_events",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/webhooks/ls_category_events.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"List of Category Events",sidebar_position:5,title:"List of Category Events"},sidebar:"webhookSidebar",previous:{title:"Webhook Payload",permalink:"/docs/webhooks/webhook_payload"},next:{title:"List of Comment Events",permalink:"/docs/webhooks/ls_comment_events"}},p={},m=[],g={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Triggered When"),(0,o.kt)("th",{parentName:"tr",align:null},"Note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"category.created"),(0,o.kt)("td",{parentName:"tr",align:null},"a category is created"),(0,o.kt)("td",{parentName:"tr",align:null},"---")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"category.updated"),(0,o.kt)("td",{parentName:"tr",align:null},"a category is updated"),(0,o.kt)("td",{parentName:"tr",align:null},"---")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"category.deleted"),(0,o.kt)("td",{parentName:"tr",align:null},"a category is deleted"),(0,o.kt)("td",{parentName:"tr",align:null},"---")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"category.follow"),(0,o.kt)("td",{parentName:"tr",align:null},"a category is followed by the user"),(0,o.kt)("td",{parentName:"tr",align:null},"---")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"category.unfollow"),(0,o.kt)("td",{parentName:"tr",align:null},"a category is unfollowed by the user"),(0,o.kt)("td",{parentName:"tr",align:null},"---")))),(0,o.kt)(l.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"json",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "event_id": 0,\n    "type": "string",\n    "created": 1625471209.139224,\n    "data": {\n        "category": {\n              "id": 1,\n              "tags": [],\n              "followed": false,\n              "order": 123,\n              "name": "string",\n              "name_synonyms": "string",\n              "slug": "string",\n              "slogan": "string",\n              "html_info": "string",\n              "seo_title": "string",\n              "seo_description": "string",\n              "auto_follow": "none",\n              "active": true,\n              "image_original": "string",\n              "image_bigger": "string",\n              "image_big": "string",\n              "image_medium": "string",\n              "image_small": "string",\n              "emotional_image_original": "string",\n              "emotional_image_position": 0,\n              "lastmod_datetime": "2019-08-24T14:15:22Z",\n              "stream_order_by": "recent",\n              "followers_counter": 13\n        },\n        "user": {\n            "id": 100,\n            "username": "string",\n            "real_name": "string",\n            "email": "user@example.com",\n            "email_isvalid": true,\n            "date_joined": "2019-08-24T14:15:22Z",\n            "bio": "string",\n            "location": "string",\n            "location_lat_lng": "string",\n            "position_lat_lng": "string",\n            "date_of_birth": "2019-09-23",\n            "description": "string",\n            "gender": "Male",\n            "status": "a",\n            "website": "https://example.com",\n            "avatar": "string",\n            "cover": "string",\n            "ext_id": 3,\n            "tags": [],\n            "reputation": 111,\n            "followings_counter": 1,\n            "followers_counter": 1,\n            "posts_counter": 3,\n            "discussions_counter": 5,\n            "statuses_counter": 1,\n            "polls_counter": 8\n        },\n        "added_at": "2021-05-28T11:15:10.126738+02:00"\n    }\n}\n')))))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);