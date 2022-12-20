"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[81356],{71871:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294);function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},76018:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(83117),l=a(67294),r=a(5730),i=a(87139),s=a(86010);const o="tabItem_LplD";function p(e){var t,a;const{lazy:r,block:p,defaultValue:u,values:d,groupId:m,className:c}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),k=(0,i.lx)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??(null==(a=g[0])?void 0:a.props.value);if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:b}=(0,i.UB)(),[N,y]=(0,l.useState)(f),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=m){const e=h[m];null!=e&&e!==N&&v.some((t=>t.value===e))&&y(e)}const w=e=>{const t=e.currentTarget,a=_.indexOf(t),n=v[a].value;n!==N&&(T(t),y(n),null!=m&&b(m,n))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]||_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]||_[_.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},c)},v.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>_.push(e),onKeyDown:x,onFocus:w,onClick:w},r,{className:(0,s.Z)("tabs__item",o,null==r?void 0:r.className,{"tabs__item--active":N===t})}),a??t)}))),r?(0,l.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function u(e){const t=(0,r.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}},68458:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=a(83117),l=(a(67294),a(3905)),r=a(76018),i=a(71871);const s={sidebar_label:"Get All Revisions of a Legal Page",sidebar_position:1,title:"Get All Revisions of a Legal Page"},o=void 0,p={unversionedId:"apireference/v2/legalpage/get_all_revisions_of_a_legal_page",id:"apireference/v2/legalpage/get_all_revisions_of_a_legal_page",title:"Get All Revisions of a Legal Page",description:"This endpoint retrieves all revisions of a legal page (ordered by last inserted revision).",source:"@site/docs/apireference/v2/legalpage/get_all_revisions_of_a_legal_page.md",sourceDirName:"apireference/v2/legalpage",slug:"/apireference/v2/legalpage/get_all_revisions_of_a_legal_page",permalink:"/docs/apireference/v2/legalpage/get_all_revisions_of_a_legal_page",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/legalpage/get_all_revisions_of_a_legal_page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Get All Revisions of a Legal Page",sidebar_position:1,title:"Get All Revisions of a Legal Page"},sidebar:"apireferenceSidebar",previous:{title:"Get All Legal pages",permalink:"/docs/apireference/v2/legalpage/get_all_legal_pages"},next:{title:"Get Last Revision of a Legal Page",permalink:"/docs/apireference/v2/legalpage/get_last_revision_of_a_legal_page"}},u={},d=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Response Schema",id:"response-schema",level:3},{value:"Example responses",id:"example-responses",level:3}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This endpoint retrieves all revisions of a legal page (ordered by last inserted revision)."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This operation does not require authentication.\nIf the user is authenticated the 'ack' field will be added to the response with the user's ack status for that document."))),(0,l.kt)("h2",{id:"http-request"},"HTTP Request"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"GET /api/v2/legal_page/{policy}/revisions/")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"In"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be one between cookies, tec or privacy.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"limit"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of results to return per page.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"offset"),(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The initial index from which to return the results.")))),(0,l.kt)("h3",{id:"example-request"},"Example Request"),(0,l.kt)(r.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\nconst headers = {\n  'Accept':'application/json'\n};\n\nfetch('/api/v2/legal_page/{policy}/revisions/',\n{\n  method: 'GET',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,l.kt)(i.Z,{value:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X GET /api/v2/legal_page/ \\\n  -H 'Accept: application/json'\n")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.1"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Inline")))),(0,l.kt)("h3",{id:"response-schema"},"Response Schema"),(0,l.kt)("p",null,"Status Code ",(0,l.kt)("strong",{parentName:"p"},"200")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Restrictions"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb count"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Total results count")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb next"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Next page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb previous"),(0,l.kt)("td",{parentName:"tr",align:null},"string(uri)\xa6null"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"Previous page url")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\xbb results"),(0,l.kt)("td",{parentName:"tr",align:null},"list(",(0,l.kt)("a",{parentName:"td",href:"/docs/apireference/v2/schemas/legal_page"},"Legal Page"),")"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"none"),(0,l.kt)("td",{parentName:"tr",align:null},"List of results")))),(0,l.kt)("h3",{id:"example-responses"},"Example responses"),(0,l.kt)(r.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"200",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 123,\n  "next": "string(uri)",\n  "previous": "string(uri)",\n  "results": [ \n    {\n      "id": 0,\n      "name_and_version": "string",\n      "icon_class": "string",\n      "label": "string",\n      "external_url": "string",\n      "html_summary": "string",\n      "html_body": "string",\n      "order": -2147483648,\n      "valid_from": "2019-08-24",\n      "valid_to": "2019-08-24",\n      "created_at": "2019-08-24T14:15:22Z",\n      "created_by": 0,\n      "ack": {\n          "id": 0,\n          "accepted_at": "2022-10-06T10:07:29.079128+02:00",\n          "not_accepted_at": null,\n          "policy_document": 0,\n          "user": 0\n      }        \n    }\n  ]\n}\n')))))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),c=l,g=m["".concat(o,".").concat(c)]||m[c]||d[c]||r;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);