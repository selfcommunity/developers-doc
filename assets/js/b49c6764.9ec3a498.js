"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[4242],{79186:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(85893),n=r(11151);const s={sidebar_label:"Add an Avatar to My Avatars",sidebar_position:100,title:"Add an Avatar to My Avatars"},d=void 0,i={id:"apireference/v2/user/add_an_avatar",title:"Add an Avatar to My Avatars",description:"This endpoint adds an avatar to my avatars",source:"@site/docs/apireference/v2/user/add_an_avatar.md",sourceDirName:"apireference/v2/user",slug:"/apireference/v2/user/add_an_avatar",permalink:"/docs/apireference/v2/user/add_an_avatar",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/user/add_an_avatar.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_label:"Add an Avatar to My Avatars",sidebar_position:100,title:"Add an Avatar to My Avatars"},sidebar:"apireferenceSidebar",previous:{title:"Check email token",permalink:"/docs/apireference/v2/user/check_email_token"},next:{title:"Get All My Avatars",permalink:"/docs/apireference/v2/user/get_all_my_avatars"}},o={},l=[{value:"HTTP Request",id:"http-request",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example Request",id:"example-request",level:3},{value:"Responses",id:"responses",level:2},{value:"Example responses",id:"example-responses",level:3}];function c(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components},{TabItem:r,Tabs:s}=a;return r||u("TabItem",!0),s||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"This endpoint adds an avatar to my avatars"}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsx)(a.p,{children:"This operation requires authentication."})}),"\n",(0,t.jsx)(a.h2,{id:"http-request",children:"HTTP Request"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.code,{children:"POST /api/v2/user/avatar/"})}),"\n",(0,t.jsx)(a.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Name"}),(0,t.jsx)(a.th,{children:"In"}),(0,t.jsx)(a.th,{children:"Type"}),(0,t.jsx)(a.th,{children:"Required"}),(0,t.jsx)(a.th,{children:"Description"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"avatar"}),(0,t.jsx)(a.td,{children:"body/formdata"}),(0,t.jsx)(a.td,{children:"file"}),(0,t.jsx)(a.td,{children:"true"}),(0,t.jsx)(a.td,{children:"Avatar of the user"})]})})]}),"\n",(0,t.jsx)(a.h3,{id:"example-request",children:"Example Request"}),"\n",(0,t.jsxs)(s,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],children:[(0,t.jsx)(r,{value:"js",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",children:'var formdata = new FormData();\nformdata.append("avatar", fileInput.files[0], "URL");\n\nvar requestOptions = {\n  method: \'POST\',\n  body: formdata,\n  redirect: \'follow\'\n};\n\nfetch("/api/v2/user/avatar/", requestOptions)\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n'})})}),(0,t.jsx)(r,{value:"bash",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"# You can also use wget\ncurl --location --request POST '/api/v2/user/avatar/' \\\n--header 'Authorization: Bearer {access_token}' \\\n--form 'avatar=@\"URL\"'\n"})})})]}),"\n",(0,t.jsx)(a.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Status"}),(0,t.jsx)(a.th,{children:"Meaning"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Schema"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"201"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.a,{href:"https://tools.ietf.org/html/rfc7231#section-6.3.2",children:"Created"})}),(0,t.jsx)(a.td,{children:"Response status code"}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.a,{href:"/docs/apireference/v2/schemas/avatar",children:"Avatar"})})]})})]}),"\n",(0,t.jsx)(a.h3,{id:"example-responses",children:"Example responses"}),"\n",(0,t.jsx)(s,{defaultValue:"200",values:[{label:"200",value:"200"}],children:(0,t.jsx)(r,{value:"200",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n    "id": "integer",\n    "primary": "boolean",\n    "avatar": "string(uri)",\n    "date_uploaded": "string",\n    "user": "integer"\n}\n'})})})})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,a,r)=>{r.d(a,{Z:()=>i,a:()=>d});var t=r(67294);const n={},s=t.createContext(n);function d(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);