"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[992],{71871:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},76018:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(83117),r=n(67294),l=n(5730),o=n(87139),i=n(86010);const s="tabItem_LplD";function m(e){var t,n;const{lazy:l,block:m,defaultValue:p,values:c,groupId:d,className:u}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.lx)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??(null==(n=v[0])?void 0:n.props.value);if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:N}=(0,o.UB)(),[b,y]=(0,r.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=d){const e=h[d];null!=e&&e!==b&&g.some((t=>t.value===e))&&y(e)}const x=e=>{const t=e.currentTarget,n=_.indexOf(t),a=g[n].value;a!==b&&(T(t),y(a),null!=d&&N(d,a))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]||_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]||_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},u)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>_.push(e),onKeyDown:w,onFocus:x,onClick:x},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":b===t})}),n??t)}))),l?(0,r.cloneElement)(v.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},57778:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),l=n(76018),o=n(71871);const i={sidebar_label:"Create a Comment",sidebar_position:2,title:"Create a Comment"},s=void 0,m={unversionedId:"apireference/v2/comment/create_a_comment",id:"apireference/v2/comment/create_a_comment",title:"Create a Comment",description:"This endpoint creates a comment.",source:"@site/docs/apireference/v2/comment/create_a_comment.md",sourceDirName:"apireference/v2/comment",slug:"/apireference/v2/comment/create_a_comment",permalink:"/docs/apireference/v2/comment/create_a_comment",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/comment/create_a_comment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Create a Comment",sidebar_position:2,title:"Create a Comment"},sidebar:"apireferenceSidebar",previous:{title:"Get All Comments",permalink:"/docs/apireference/v2/comment/get_all_comments"},next:{title:"Get a specific Comment",permalink:"/docs/apireference/v2/comment/get_a_specific_comment"}},p={},c=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint creates a comment."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"One of ",(0,r.kt)("inlineCode",{parentName:"p"},"discussion")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"post")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," parameter is required in every request (first-level or nested comment creation)."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," parameter is required only for nested comments."),(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"in_reply_to")," parameter is required only for create a reference in the nested comments (simulation of three levels of nesting)."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,r.kt)("h2",{id:"http-request"},"HTTP Request"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST /api/v2/comment/")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"In"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb discussion"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/discussion"},"Discussion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb post"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/post"},"Post"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb status"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/status"},"Status"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb parent"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of a ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"),", used for creating nested comments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb in_reply_to"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"integer\xa6null"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Id of a ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"),", used for reply in nested comments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xbb text"),(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"text for the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"),", html format, it can contain some mentions")))),(0,r.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,r.kt)(l.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "discussion": "integer",\n  "parent": "integer",\n  "in_reply_to": "integer",\n  "text": "string"\n}\n')))),(0,r.kt)("h3",{id:"example-request"},"Example Request"),(0,r.kt)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = '{\n  \"discussion\": \"integer\",\n  \"parent\": \"integer\",\n  \"in_reply_to\": \"integer\",\n  \"text\": \"string\"\n}';\nconst headers = {\n  'Content-Type':'application/json',\n  'Accept':'application/json',\n  'Authorization: 'Bearer {access_token}'\n};\n\nfetch('/api/v2/comment/',\n{\n  method: 'POST',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,r.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# You can also use wget\ncurl -X POST /api/v2/comment/ \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Accept: application/json\' \\\n  -H \'Authorization: Bearer {access_token}\' \\\n  --raw-data \'{\n    "discussion": "integer",\n    "parent": "integer",\n    "in_reply_to": "integer",\n    "text": "string"\n  }\'\n')))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},"Created")),(0,r.kt)("td",{parentName:"tr",align:null},"Response status code"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/comment"},"Comment"))))),(0,r.kt)("h3",{id:"example-responses"},"Example responses"),(0,r.kt)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "integer",\n    "author": {User},\n    "added_at": "string",\n    "last_edited_at": "string",\n    "html": "string",\n    "summary": "string",\n    "deleted": "boolean",\n    "collapsed": "boolean",\n    "parent": "integer",\n    "in_reply_to": "integer",\n    "comment_count": "integer",\n    "vote_count": "integer",\n    "reactions_count": [{Reaction}],\n    "flag_count": "integer",\n    "post": {\n        "id": "integer",\n        "slug": "string"\n    },\n    "latest_comments": [{CommentSummary}],\n    "type": "string",\n    "voted": "boolean",\n    "reaction": {Reaction}\n}\n')))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,v=d["".concat(s,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(v,o(o({ref:t},p),{},{components:n})):a.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);