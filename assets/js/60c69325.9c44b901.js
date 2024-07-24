"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[10684],{32342:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var a=r(36905);const t={tabItem:"tabItem_Ymn6"};var l=r(85893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,s),hidden:r,children:n})}},71125:(e,n,r)=>{r.d(n,{Z:()=>_});var a=r(67294),t=r(36905),l=r(63735),s=r(16550),c=r(20613),o=r(34423),i=r(20636),d=r(99200);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[i,u]=f({queryString:r,groupId:t}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,d.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),x=(()=>{const e=i??m;return h({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=r(5730);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function y(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),t=c[r].value;t!==a&&(i(n),s(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function g(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function _(e){const n=(0,b.Z)();return(0,j.jsx)(g,{...e,children:u(e.children)},String(n))}},20819:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=r(85893),t=r(11151),l=r(71125),s=r(32342);const c={sidebar_label:"Update Multi Dynamic Preferences",sidebar_position:1,title:"Update Multi Dynamic Preferences"},o=void 0,i={id:"apireference/v2/dynamicpreference/update_dynamic_preference",title:"Update Multi Dynamic Preferences",description:"This endpoint patches a specific dynamic preference or a set of dynamic preferences; only some preferences are",source:"@site/docs/apireference/v2/dynamicpreference/update_dynamic_preference.md",sourceDirName:"apireference/v2/dynamicpreference",slug:"/apireference/v2/dynamicpreference/update_dynamic_preference",permalink:"/docs/apireference/v2/dynamicpreference/update_dynamic_preference",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/dynamicpreference/update_dynamic_preference.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Update Multi Dynamic Preferences",sidebar_position:1,title:"Update Multi Dynamic Preferences"},sidebar:"apireferenceSidebar",previous:{title:"Search Dynamic Preferences",permalink:"/docs/apireference/v2/dynamicpreference/search_dynamic_preferences"},next:{title:"Create an Embed",permalink:"/docs/apireference/v2/embed/create_an_embed"}},d={},u=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Body Parameters",id:"example-body-parameters",level:4},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This endpoint patches a specific dynamic preference or a set of dynamic preferences; only some preferences are\nupdatable:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Section ",(0,a.jsx)(n.code,{children:"colors"}),":","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"colorback"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"colorprimary"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"colorsecondary"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"font_color"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"font_color_secondary"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"navbarback"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Section ",(0,a.jsx)(n.code,{children:"logo"}),":","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"navbar_logo"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"navbar_logo_mobile"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"This operation requires admin role."})}),"\n",(0,a.jsx)(n.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"PATCH /api/v2/dynamic_preference/"})}),"\n",(0,a.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"In"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"preference_name"}),(0,a.jsx)(n.td,{children:"body"}),(0,a.jsx)(n.td,{children:"preference_type"}),(0,a.jsx)(n.td,{children:"true"}),(0,a.jsxs)(n.td,{children:["Update the ",(0,a.jsx)(n.code,{children:"preference_name"})," dynamic preference with the relative value"]})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"example-body-parameters",children:"Example Body Parameters"}),"\n","\n","\n",(0,a.jsx)(l.Z,{defaultValue:"json",values:[{label:"JSON",value:"json"}],children:(0,a.jsx)(s.Z,{value:"json",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "colorback": "#fdfdfd",\n    "colorprimary": "#555555",\n    "colorsecondary": "#B20404",\n    "font_color": "#333333",\n    "font_color_secondary": "#666666",\n    "navbarback": "#ffffff"\n}\n'})})})}),"\n",(0,a.jsx)(n.h3,{id:"example-request",children:"Example Request"}),"\n",(0,a.jsxs)(l.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,a.jsx)(s.Z,{value:"js",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const inputBody = '{\n    \"name\": \"string\",\n    \"description\": \"string\",\n    \"color\": \"string\",\n    \"visible\": boolean\n}';\nconst headers = {\n  'Content-Type':'application/x-www-form-urlencoded',\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/dynamic_preference/',\n{\n  method: 'PATCH',\n  body: inputBody,\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"})})}),(0,a.jsx)(s.Z,{value:"bash",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# You can also use wget\ncurl -X PATCH /api/v2/dynamic_preference/ \\\n  -H 'Content-Type: application/x-www-form-urlencoded' \\\n  -H 'Accept: application/json'\n  -H 'Authorization: Bearer {access_token}'\n  --DATA '{body}'\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Status"}),(0,a.jsx)(n.th,{children:"Meaning"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Schema"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"200"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.1",children:"OK"})}),(0,a.jsx)(n.td,{children:"Response status code"}),(0,a.jsxs)(n.td,{children:["A dictionary of ",(0,a.jsx)(n.a,{href:"/docs/apireference/v2/schemas/dynamic_preference",children:"Dynamic Preference"})]})]})})]}),"\n",(0,a.jsx)(n.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,a.jsx)(l.Z,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,a.jsx)(s.Z,{value:"200",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "colorback": {\n        "section": "colors",\n        "name": "colorback",\n        "value": "#fdfdfd",\n        "help": "Originally gray.",\n        "type": "color"\n    },\n    "colorprimary": {\n        "section": "colors",\n        "name": "colorprimary",\n        "value": "#555555",\n        "help": "Originally ottanio.",\n        "type": "color"\n    },\n    "colorsecondary": {\n        "section": "colors",\n        "name": "colorsecondary",\n        "value": "#B20404",\n        "help": "Originally red.",\n        "type": "color"\n    },\n    "font_color": {\n        "section": "colors",\n        "name": "font_color",\n        "value": "#333333",\n        "help": "Font color (primary).",\n        "type": "color"\n    },\n    "font_color_secondary": {\n        "section": "colors",\n        "name": "font_color_secondary",\n        "value": "#666666",\n        "help": "Font color secondary (auto-generated from font_color).",\n        "type": "color"\n    },\n    "navbarback": {\n        "section": "colors",\n        "name": "navbarback",\n        "value": "#ffffff",\n        "help": "First main bar. Originally ottanio.",\n        "type": "color"\n    }\n}\n'})})})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var a=r(67294);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);