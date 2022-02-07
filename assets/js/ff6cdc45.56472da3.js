"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[8611],{33262:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var i=n(83117),s=n(80102),a=(n(67294),n(3905)),r=n(26396),o=n(58215),l=["components"],c={sidebar_label:"Show a Specific Discussion",sidebar_position:23,title:"Show a Specific Discussion"},d=void 0,p={unversionedId:"apireference/v2/discussion/show_a_specific_discussion",id:"apireference/v2/discussion/show_a_specific_discussion",isDocsHomePage:!1,title:"Show a Specific Discussion",description:"This Endpoint shows the Discussion for the logged user. The discussion must be in hidden state.",source:"@site/docs/apireference/v2/discussion/show_a_specific_discussion.md",sourceDirName:"apireference/v2/discussion",slug:"/apireference/v2/discussion/show_a_specific_discussion",permalink:"/docs/apireference/v2/discussion/show_a_specific_discussion",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/discussion/show_a_specific_discussion.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_label:"Show a Specific Discussion",sidebar_position:23,title:"Show a Specific Discussion"},sidebar:"apireferenceSidebar",previous:{title:"Get List of Suspended Discussions",permalink:"/docs/apireference/v2/discussion/get_list_of_suspended_discussions"},next:{title:"Get Hide Status for a Specific Discussion",permalink:"/docs/apireference/v2/discussion/get_hide_status_for_a_specific_discussion"}},u=[{value:"HTTP Request",id:"http-request",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Example Request",id:"example-request",children:[],level:3}],level:2},{value:"Responses",id:"responses",children:[],level:2}],m={toc:u};function h(e){var t=e.components,n=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This Endpoint shows the ",(0,a.kt)("a",{parentName:"p",href:"../schemas/discussion"},"Discussion")," for the logged user. The discussion must be in hidden state."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This operation requires authentication"))),(0,a.kt)("h2",{id:"http-request"},"HTTP Request"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/v2/discussion/{id}/hide/")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"In"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"true"),(0,a.kt)("td",{parentName:"tr",align:null},"A unique integer value identifying this discussion.")))),(0,a.kt)("h3",{id:"example-request"},"Example Request"),(0,a.kt)(r.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Bash",value:"bash"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const headers = {\n  'Accept':'application/json',\n  'Authorization': 'Bearer {access_token}'\n};\n\nfetch('/api/v2/discussion/{id}/hide/',\n{\n  method: 'POST',\n  headers: headers\n})\n.then(function(res) {\n    return res.json();\n}).then(function(body) {\n    console.log(body);\n});\n\n"))),(0,a.kt)(o.Z,{value:"bash",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# You can also use wget\ncurl -X POST /api/v2/discussion/{id}/hide/ \\\n  -H 'Accept: application/json' \\\n  -H 'Authorization: Bearer {access_token}' \\\n")))),(0,a.kt)("h2",{id:"responses"},"Responses"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Meaning"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"204"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://tools.ietf.org/html/rfc7231#section-6.3.5"},"No Content")),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))))}h.isMDXComponent=!0}}]);