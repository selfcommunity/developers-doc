"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4561],{71871:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},76018:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(83117),r=a(67294),l=a(5730),i=a(69143),o=a(86010),p="tabItem_LplD";function m(e){var t,a,l,m=e.lazy,s=e.block,d=e.defaultValue,u=e.values,c=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.UB)(),g=N.tabGroupChoices,y=N.setTabGroupChoices,T=(0,r.useState)(b),w=T[0],x=T[1],_=[],j=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=g[c];null!=E&&E!==w&&f.some((function(e){return e.value===E}))&&x(E)}var O=function(e){var t=e.currentTarget,a=_.indexOf(t),n=f[a].value;n!==w&&(j(t),x(n),null!=c&&y(c,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=_.indexOf(e.currentTarget)+1;a=_[n]||_[0];break;case"ArrowLeft":var r=_.indexOf(e.currentTarget)-1;a=_[r]||_[_.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},v)},f.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return _.push(e)},onKeyDown:C,onFocus:O,onClick:O},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),m?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function s(e){var t=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},8477:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return c}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(76018),o=a(71871),p=["components"],m={sidebar_label:"Create a Media",sidebar_position:3,title:"Create a Media"},s=void 0,d={unversionedId:"apireference/v2/media/create_a_media",id:"apireference/v2/media/create_a_media",title:"Create a Media",description:"This endpoint creates a Media",source:"@site/docs/apireference/v2/media/create_a_media.md",sourceDirName:"apireference/v2/media",slug:"/apireference/v2/media/create_a_media",permalink:"/docs/apireference/v2/media/create_a_media",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/media/create_a_media.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Create a Media",sidebar_position:3,title:"Create a Media"},sidebar:"apireferenceSidebar",previous:{title:"Chunk Upload Media Complete",permalink:"/docs/apireference/v2/media/chunk_upload_media_complete"},next:{title:"Click a specific Media",permalink:"/docs/apireference/v2/media/click_a_specific_media"}},u={},c=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Enumerated Values",id:"enumerated-values",level:4},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}],v={toc:c};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint creates a Media"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The allowed types for this endpoint are:"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"vimeo")," for video upload. The endpoint must receive the url of the video after the video is fully uploaded to vimeo servers by the client.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"url")," for url fetch. The endpoint retrieve metadata associated with the given url and create a preview.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"share")," for sharing a community object (",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/post"},"Post"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/discussion"},"Discussion")," or ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/status"},"Status"),"). The community object can't contain a media of type share.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"embed")," for external objects. The endpoint create an association with an external object using ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/embed"},"Embed")," format."))),(0,l.kt)("p",{parentName:"div"},"If ",(0,l.kt)("em",{parentName:"p"},"embed")," parameter are set and no ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/embed"},"Embed")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"embed_type")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"embed_id")," are in the community database this endpoint create an ",(0,l.kt)("a",{parentName:"p",href:"/docs/apireference/v2/schemas/embed"},"Embed")," object with the metadata passed."))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"POST /api/v2/media/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb type"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"none")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb url"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)"),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,l.kt)("em",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"Required for type url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb shared_object"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,l.kt)("em",{parentName:"td"},"share")),(0,l.kt)("td",{parentName:"tr",align:null},"Required for type share")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb embed"),(0,l.kt)("td",{parentName:"tr",align:null},"body"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/embed"},"Embed")),(0,l.kt)("td",{parentName:"tr",align:null},"if ",(0,l.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,l.kt)("em",{parentName:"td"},"embed")),(0,l.kt)("td",{parentName:"tr",align:null},"none")))),(0,l.kt)("h4",{id:"enumerated-values"},"Enumerated Values"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb type"),(0,l.kt)("td",{parentName:"tr",align:null},"vimeo"),(0,l.kt)("td",{parentName:"tr",align:null},"Vimeo video media type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb type"),(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"Url media type (used for any webpages, youtube or vimeo public videos)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb type"),(0,l.kt)("td",{parentName:"tr",align:null},"embed"),(0,l.kt)("td",{parentName:"tr",align:null},"External resource")))),(0,l.kt)("h4",{id:"example-body-parameters"},"Example Body Parameters"),(0,l.kt)(i.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"json",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "url",\n  "url": "https://example.com",\n  "embed": {\n    "id": 0,\n    "embed_type": "string",\n    "embed_id": "string",\n    "url": "https://example.com",\n    "metadata": {}\n  }\n}\n')))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(i.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const inputBody = '{\n  \"type\": \"url\",\n  \"url\": \"https://example.com\",\n  \"embed\": null\n}';\nconst headers = {\n  'Content-Type':'application/json',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/media/',\n{\n  method: 'POST',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X POST /api/v2/media/ \\\n  -H 'Content-Type: application/json' \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n  --data-raw '{\n    \"type\": \"url\",\n    \"url\": \"https://example.com\"\n  }'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"201"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.2"},"Created")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/media"},"Media"))))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(i.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 0,\n  "added_at": "2019-08-24T14:15:22Z",\n  "type": "vimeo",\n  "title": "string",\n  "description": "string",\n  "url": "https://example.com",\n  "image": "string",\n  "image_width": 0,\n  "image_height": 0,\n  "order": 0,\n  "embed": {\n    "id": 0,\n    "embed_type": "string",\n    "embed_id": "string",\n    "url": "string",\n    "metadata": {}\n  }\n}\n')))))}k.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),c=r,v=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return a?n.createElement(v,i(i({ref:t},s),{},{components:a})):n.createElement(v,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);