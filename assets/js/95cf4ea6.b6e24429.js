"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[3198],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(9443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=function(e){var t,n=e.lazy,r=e.block,p=e.defaultValue,c=e.values,u=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=p?p:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=i(),h=v.tabGroupChoices,k=v.setTabGroupChoices,g=(0,a.useState)(b),y=g[0],N=g[1],_=[];if(null!=u){var x=h[u];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&N(x)}var T=function(e){var t=e.currentTarget,n=_.indexOf(t),a=f[n].value;N(a),null!=u&&(k(u,a),setTimeout((function(){var e,n,a,r,i,l,o,p;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=_.indexOf(e.target)+1;n=_[a]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.target)-1;n=_[r]||_[_.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:j,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5813:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(5064),o=n(8215),s=["components"],p={sidebar_label:"Update a specific Embed",sidebar_position:5,title:"Update a specific Embed"},c=void 0,u={unversionedId:"apireference/v2/embed/update_a_specific_embed",id:"apireference/v2/embed/update_a_specific_embed",isDocsHomePage:!1,title:"Update a specific Embed",description:"This endpoint updates a specific Embed",source:"@site/docs/apireference/v2/embed/update_a_specific_embed.md",sourceDirName:"apireference/v2/embed",slug:"/apireference/v2/embed/update_a_specific_embed",permalink:"/docs/apireference/v2/embed/update_a_specific_embed",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/apireference/v2/embed/update_a_specific_embed.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Update a specific Embed",sidebar_position:5,title:"Update a specific Embed"},sidebar:"apireferenceSidebar",previous:{title:"Get a specific Embed",permalink:"/docs/apireference/v2/embed/get_a_specific_embed"},next:{title:"Patch a Specific Embed",permalink:"/docs/apireference/v2/embed/patch_a_specific_embed"}},d=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Example Request",id:"example-request",children:[]}]},{value:"Responses",id:"responses",children:[{value:"Example responses",id:"example-responses",children:[]}]}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This endpoint updates a specific Embed"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This operation requires authentication only if ",(0,i.kt)("inlineCode",{parentName:"p"},"content_availability")," community option is false"))),(0,i.kt)("h2",{id:"http-request"},"HTTP Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PUT /api/v2/embed/{id}/")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"In"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this embed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb url"),(0,i.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Url for the resource, if any")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\xbb metadata"),(0,i.kt)("td",{parentName:"tr",align:null},"json"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata associated to this embed. It mus be a valid json object")))),(0,i.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,i.kt)(l.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "url": "https://example.com",\n  "metadata": {}\n}\n')))),(0,i.kt)("h3",{id:"example-request"},"Example Request"),(0,i.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = '{\n  \"url\": \"https://example.com\",\n  \"metadata\": {}\n}';\nconst headers = {\n  'Content-Type':'application/json',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/embed/{id}/',\n{\n  method: 'PUT',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,i.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X PUT /api/v2/embed/{id}/ \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --data-raw '{\n    \"url\": \"https://example.com\",\n    \"metadata\": {}\n  }'\n")))),(0,i.kt)("h2",{id:"responses"},"Responses"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"200"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#schemaupdateembed"},"UpdateEmbed"))))),(0,i.kt)("h3",{id:"example-responses"},"Example responses"),(0,i.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "embed_type": "string",\n  "embed_id": "string",\n  "url": "https://example.com",\n  "metadata": {}\n}\n')))))}f.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);