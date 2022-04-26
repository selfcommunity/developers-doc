"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[304],{23693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return f}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_label:"User's custom fields (metadata)",sidebar_position:1,title:"How it works"},l=void 0,u={unversionedId:"apireference/v2/usermetadata/usermetadata",id:"apireference/v2/usermetadata/usermetadata",title:"How it works",description:"It is possible to add custom fields to the predefined user's fields set.",source:"@site/docs/apireference/v2/usermetadata/usermetadata.md",sourceDirName:"apireference/v2/usermetadata",slug:"/apireference/v2/usermetadata/",permalink:"/docs/apireference/v2/usermetadata/",editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/apireference/v2/usermetadata/usermetadata.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"User's custom fields (metadata)",sidebar_position:1,title:"How it works"},sidebar:"apireferenceSidebar",previous:{title:"Mention",permalink:"/docs/apireference/v2/mention/"}},p={},c=[{value:"Define the structure of the additional custom fields",id:"define-the-structure-of-the-additional-custom-fields",level:4},{value:"Types available",id:"types-available",level:4},{value:"Update the user passing custom fileds",id:"update-the-user-passing-custom-fileds",level:4},{value:"Retrieve the user with custom fields",id:"retrieve-the-user-with-custom-fields",level:4}],d={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is possible to add custom fields to the predefined user's fields set. "),(0,i.kt)("p",null,"This can be useful for adding data to the user and thus saving custom information that are not part of the basic information provided by Selfcommunity."),(0,i.kt)("h4",{id:"define-the-structure-of-the-additional-custom-fields"},"Define the structure of the additional custom fields"),(0,i.kt)("p",null,"Before you can start adding custom data to the user, it is necessary to define the structure of the additional custom fields.\nAn example of a structure can be the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "company_name": {\n        "label": "Company name",\n        "mandatory": true\n    },\n    "company_website": {\n        "label": "Company website",\n        "type": "url"\n    },\n    "company_google_maps": {\n        "label": "Company Google Maps position url",\n        "type": "url"\n    },\n    "company_role": {\n        "label": "Role in the company",\n        "type": "enum",\n        "type_options": [\n            "Chief Executive Officer (CEO)",\n            "Chief Operating Officer (COO)",\n            "Chief Financial Officer (CFO) or Controller",\n            "Chief Marketing Officer (CMO)",\n            "Chief Technology Officer (CTO)",\n            "President",\n            "Vice President",\n            "Executive Assistant",\n            "Marketing manager",\n            "Product manager",\n            "Project manager",\n            "Finance manager",\n            "Human resources manager",\n            "Marketing specialist",\n            "Business analyst",\n            "Human resource personnel",\n            "Accountant",\n            "Sales representative",\n            "Customer service representative",\n            "Administrative assistant",\n            "Employee",\n            "Consultant"\n        ]\n    },\n    "phone_number": {\n        "label": "Telephone",\n        "type": "phone_number"\n    }\n}\n')),(0,i.kt)("p",null,"Starting from this example it is possible to notice that to define the fields it is necessary to choose a field name (the key of the json dictionary)\nand the type of field among those available:"),(0,i.kt)("h4",{id:"types-available"},"Types available"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A string (this is the default value for type and can be omitted in the metadata json definition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"An integer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,i.kt)("td",{parentName:"tr",align:null},"A phone number (eg: +39 376349****)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enum"),(0,i.kt)("td",{parentName:"tr",align:null},'An enumeration, it also needs a list of available options to be defined using "type_options".')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url"),(0,i.kt)("td",{parentName:"tr",align:null},"An URL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email"),(0,i.kt)("td",{parentName:"tr",align:null},"An email")))),(0,i.kt)("p",null,"To define custom fields it is also possible to define a field label."),(0,i.kt)("h4",{id:"update-the-user-passing-custom-fileds"},"Update the user passing custom fileds"),(0,i.kt)("p",null,"After defining the custom fields for the user you can finally pass them in the user PATCH "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/apireference/v2/user/patch_a_specific_user"},"Patch a specific User")),(0,i.kt)("p",null,"as if they were standard user fields."),(0,i.kt)("h4",{id:"retrieve-the-user-with-custom-fields"},"Retrieve the user with custom fields"),(0,i.kt)("p",null,"Now retrieving a user will resturn also the custom fields  "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/apireference/v2/user/get_a_specific_user"},"get a specific User")),(0,i.kt)("p",null,"as if they were standard user fields."))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);