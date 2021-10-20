"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4859],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(9443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=r.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),k=v.tabGroupChoices,h=v.setTabGroupChoices,b=(0,r.useState)(g),N=b[0],_=b[1],y=[];if(null!=p){var T=k[p];null!=T&&T!==N&&f.some((function(e){return e.value===T}))&&_(T)}var x=function(e){var t=e.currentTarget,n=y.indexOf(t),r=f[n].value;_(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,i,l,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,s=l.innerHeight,u=l.innerWidth,n>=0&&i<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=y.indexOf(e.target)+1;n=y[r]||y[0];break;case"ArrowLeft":var a=y.indexOf(e.target)-1;n=y[a]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":N===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},9185:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=n(5064),s=n(8215),o=["components"],u={sidebar_label:"Get List of Votes for a Specific Discussion",sidebar_position:10,title:"Get List of Votes for a Specific Discussion"},c=void 0,p={unversionedId:"apireference/v2/discussion/get_list_of_votes_for_a_specific_discussion",id:"apireference/v2/discussion/get_list_of_votes_for_a_specific_discussion",isDocsHomePage:!1,title:"Get List of Votes for a Specific Discussion",description:"This endpoint retrieves all votes for a specific discussion.",source:"@site/docs/apireference/v2/discussion/get_list_of_votes_for_a_specific_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/get_list_of_votes_for_a_specific_discussion",permalink:"/docs/apireference/v2/discussion/get_list_of_votes_for_a_specific_discussion",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/discussion/get_list_of_votes_for_a_specific_discussion.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"Get List of Votes for a Specific Discussion",sidebar_position:10,title:"Get List of Votes for a Specific Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Get list of related Discussions",permalink:"/docs/apireference/v2/discussion/get_list_of_related_discussions"},next:{title:"Upvote for a Specific Discussion",permalink:"/docs/apireference/v2/discussion/upvote_for_a_specific_discussion"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]},{value:"Response Schema",id:"response-schema",children:[]},{value:"Example responses",id:"example-responses",children:[]}]}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint retrieves all votes for a specific discussion."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,i.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/v2/discussion/{id}/vote/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this discussion.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"offset"),(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/discussion/{id}/vote/',\n{\n  method: 'GET',\n\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(s.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/discussion/{id}/vote/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}'\n")))),(0,i.kt)("h3",{id:"response-schema"},"Response Schema"),(0,i.kt)("p",null,"Status Code ",(0,i.kt)("strong",{parentName:"p"},"200")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Total results count")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,i.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,i.kt)("td",{parentName:"tr",align:null},"string\xa6null"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,i.kt)("td",{parentName:"tr",align:null},"list(",(0,i.kt)("a",{parentName:"td",href:"#schemavote"},"Vote"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"List of results")))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "string",\n  "previous": "string",\n  "results": [\n      {\n        "user": {\n          "id": 0,\n          "username": "string",\n          "real_name": "string",\n          "email": "user@example.com",\n          "email_isvalid": true,\n          "date_joined": "2019-08-24T14:15:22Z",\n          "bio": "string",\n          "location": "string",\n          "location_lat_lng": "string",\n          "position_lat_lng": "string",\n          "date_of_birth": "2019-08-24",\n          "description": "string",\n          "gender": "Male",\n          "status": "a",\n          "website": "https://example.com",\n          "avatar": "string",\n          "cover": "string",\n          "ext_id": "string",\n          "tags": [\n            {\n              "id": 0,\n              "active": true,\n              "type": "user",\n              "name": "string",\n              "description": "string",\n              "color": "string",\n              "visible": true,\n              "deleted": true,\n              "created_at": "2019-08-24T14:15:22Z"\n            }\n          ],\n          "reputation":111,\n          "followings_counter": 1,\n          "followers_counter": 1,\n          "posts_counter": 2,\n          "discussions_counter": 5,\n          "statuses_counter": 1,\n          "polls_counter": 7\n        },\n        "voted_at": "2019-08-24T14:15:22Z"\n      }\n  ]\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);