"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[6507],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,m=p["".concat(u,".").concat(h)]||p[h]||l[h]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7131:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={sidebar_label:"Build a Webhook Endpoint",sidebar_position:2,title:"Build a Webhook Endpoint"},u=void 0,d={unversionedId:"webhooks/build_a_webhook_endpoint",id:"webhooks/build_a_webhook_endpoint",isDocsHomePage:!1,title:"Build a Webhook Endpoint",description:"Build a webhook endpoint",source:"@site/docs/webhooks/build_a_webhook_endpoint.md",sourceDirName:"webhooks",slug:"/webhooks/build_a_webhook_endpoint",permalink:"/docs/webhooks/build_a_webhook_endpoint",editUrl:"https://github.com/selfcommunity/developers_doc/edit/main/docs/webhooks/build_a_webhook_endpoint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Build a Webhook Endpoint",sidebar_position:2,title:"Build a Webhook Endpoint"},sidebar:"webhookSidebar",previous:{title:"Introduction",permalink:"/docs/webhooks/intro"},next:{title:"Adding Webhooks",permalink:"/docs/webhooks/adding_webhooks"}},c=[{value:"Build a webhook endpoint",id:"build-a-webhook-endpoint",children:[]}],l={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"build-a-webhook-endpoint"},"Build a webhook endpoint"),(0,r.kt)("p",null,"*For testing purpose you can create a webhook receiver using ",(0,r.kt)("a",{parentName:"p",href:"https://requestbin.com/"},"RequestBin")),(0,r.kt)("p",null,"The first step to adding webhooks to your SeflCommunity integration is to build your own custom endpoint. Creating a webhook endpoint on your server is no different from creating any page on your website. "),(0,r.kt)("h4",{id:"expected-data"},"Expected data"),(0,r.kt)("p",null,"For each event occurrence, SelfCommunity POSTs the webhook data to your endpoint in JSON format. The full event details are included and can be used directly after parsing the JSON. Thus, at minimum, the webhook endpoint needs to expect data through a POST request and confirm successful receipt of that data."),(0,r.kt)("h4",{id:"response-code"},"Response code"),(0,r.kt)("p",null,"To acknowledge receipt of an event, your endpoint must return a 2xx HTTP status code to SelfCommunity. All response codes outside this range, including 3xx codes, indicate to SelfCommunity that you did not receive the event."),(0,r.kt)("p",null,"If SelfCommunity does not receive a 2xx HTTP status code, the notification attempt is repeated. We will try 5 more times: after 5, 25, 125, 625, 3125 seconds. If it still fails for each of those attempts, it is counted as one non-successful delivery."),(0,r.kt)("p",null,"Because properly acknowledging receipt of the webhook notification is so important, your endpoint should return a 2xx HTTP status code prior to any complex logic that could cause a timeout."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A URL redirection or a \u201cNot Modified\u201d response is treated as a failure. SelfCommunity ignores any other information returned in the request headers or request body."))),(0,r.kt)("h4",{id:"check-the-webhook-signatures"},"Check the webhook signatures"),(0,r.kt)("p",null,"SelfCommunity sign the webhook events it sends to your endpoints by including a signature in each event\u2019s SelfCommunity-Signature header. This allows you to verify that the events were sent by SelfCommunity, not by a third party. "),(0,r.kt)("p",null,"Before you can verify signatures, you need to retrieve your endpoint\u2019s secret from your Dashboard\u2019s Webhooks settings. Select an endpoint that you want to obtain the secret for, then click the Click to reveal button."),(0,r.kt)("p",null,"SelfCommunity generates a unique secret key for each endpoint. If you use multiple endpoints, you must obtain a secret for each one you want to verify signatures on. After this setup, SelfCommunity starts to sign each webhook it sends to the endpoint."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature Verification"),"\nThe SelfCommunity-Signature header included in each signed event contains a timestamp and one or more signatures. The timestamp is prefixed by t=, and each signature is prefixed by a scheme. Schemes start with v, followed by an integer. Currently, the only valid live signature scheme is v1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SelfCommunity-Signature:\nt=1492774577,\nv1=5257a869e7ecebeda32affa62cdca3fa51cad7e77a0e56ff536d0ce8e108d8bd,\nv0=6ffbb59b2300aae63f272406069a9788598b792a944a07aba816edb039989a39\n")),(0,r.kt)("p",null,"Note that newlines have been added for clarity, but a real SelfCommunity-Signature header is on a single line."),(0,r.kt)("p",null,"SelfCommunity generates signatures using a hash-based message authentication code (HMAC) with SHA-256."),(0,r.kt)("p",null,"To verify webhook event signatures, you can create a custom solution by following these steps."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Step 1: Extract the timestamp and signatures from the header"),"\nSplit the header, using the , character as the separator, to get a list of elements. Then split each element, using the = character as the separator, to get a prefix and value pair."),(0,r.kt)("p",null,"The value for the prefix t corresponds to the timestamp, and v1 corresponds to the signature (or signatures). You can discard all other elements."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Step 2: Prepare the signed_payload string"),"\nThe signed_payload string is created by concatenating:"),(0,r.kt)("p",null,"The timestamp (as a string)\nThe character .\nThe actual JSON payload (i.e., the request body)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Step 3: Determine the expected signature"),"\nCompute an HMAC with the SHA256 hash function. Use the endpoint\u2019s signing secret as the key, and use the signed_payload string as the message."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Step 4: Compare the signatures"),"\nCompare the signature (or signatures) in the header to the expected signature. For an equality match, compute the difference between the current timestamp and the received timestamp, then decide if the difference is within your tolerance."),(0,r.kt)("p",null,"To protect against timing attacks, use a constant-time string comparison to compare the expected signature to each of the received signatures."))}p.isMDXComponent=!0}}]);