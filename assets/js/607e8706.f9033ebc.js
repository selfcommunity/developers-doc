"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[87316],{71871:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(83117),r=n(67294),i=n(5730),o=n(69143),l=n(86010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,f=e.values,d=e.groupId,m=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,T=(0,r.useState)(g),w=T[0],x=T[1],E=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var _=y[d];null!=_&&_!==w&&b.some((function(e){return e.value===_}))&&x(_)}var j=function(e){var t=e.currentTarget,n=E.indexOf(t),a=b[n].value;a!==w&&(O(t),x(a),null!=d&&N(d,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:j,onClick:j},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},54958:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=n(76018),l=n(71871),u=["components"],s={sidebar_label:"Get Unseen Notifications",sidebar_position:3,title:"Get Unseen Notifications"},c=void 0,p={unversionedId:"apireference/v2/notification/get_unseen_notifications",id:"apireference/v2/notification/get_unseen_notifications",title:"Get Unseen Notifications",description:"This endpoint retrieves the number of unseen/unread notifications.",source:"@site/docs/apireference/v2/notification/get_unseen_notifications.md",sourceDirName:"apireference/v2/notification",slug:"/apireference/v2/notification/get_unseen_notifications",permalink:"/docs/apireference/v2/notification/get_unseen_notifications",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/notification/get_unseen_notifications.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Get Unseen Notifications",sidebar_position:3,title:"Get Unseen Notifications"},sidebar:"apireferenceSidebar",previous:{title:"Mark Read Notifications",permalink:"/docs/apireference/v2/notification/mark_read_notifications"},next:{title:"Create Custom notification",permalink:"/docs/apireference/v2/notification/create_custom_notification"}},f={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}],m={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint retrieves the number of unseen/unread notifications."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/notification/unseen/count/")),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(o.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization: Bearer <token>'\n};\n\nfetch('/api/v2/notification/unseen/count/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(l.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/notification/unseen/count/ \\\n  -H 'Accept: application/json'\n  -H \"Authorization: Bearer <token>\"\n\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"none")))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(o.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{"count":  3}\n')))))}v.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);