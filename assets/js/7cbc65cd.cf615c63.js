"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[80645],{70982:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_label:"OAuth 2.0",sidebar_position:3},i="OAuth 2.0",s={unversionedId:"api/authentication/oauth",id:"api/authentication/oauth",title:"OAuth 2.0",description:"To allow applications to manage individual user data, the Community provides direct support to OAuth2.0, the industry-standard authorization protocol that allows applications to obtain requested access to user accounts over HTTP.",source:"@site/docs/api/authentication/oauth.md",sourceDirName:"api/authentication",slug:"/api/authentication/oauth",permalink:"/docs/api/authentication/oauth",draft:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/api/authentication/oauth.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"OAuth 2.0",sidebar_position:3},sidebar:"apiSidebar",previous:{title:"JWT",permalink:"/docs/api/authentication/jwt"}},l={},p=[{value:"Create an OAuth 2.0 App",id:"create-an-oauth-20-app",level:2},{value:"Testing OAuth 2.0 App",id:"testing-oauth-20-app",level:2},{value:"Getting an Access Token",id:"getting-an-access-token",level:3},{value:"Authorization Code",id:"authorization-code",level:3},{value:"Implicit",id:"implicit",level:3},{value:"Password",id:"password",level:3},{value:"Using an Access Token",id:"using-an-access-token",level:3},{value:"Refreshing an Access Token",id:"refreshing-an-access-token",level:3},{value:"Revoking an Access Token",id:"revoking-an-access-token",level:3}],c={toc:p},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"oauth-20"},"OAuth 2.0"),(0,r.kt)("a",{id:"selfcommunity-api-authentication-oauth"}),(0,r.kt)("p",null,"To allow applications to manage individual user data, the Community provides direct support to OAuth2.0, the industry-standard authorization protocol that allows applications to obtain requested access to user accounts over HTTP."),(0,r.kt)("p",null,"OAuth apps are typically end-user applications which allow secure integration with Community APIs to access authorized data for each user. As a developer, you can use OAuth to allow access to users\u2019 information related to their Community accounts, upon granting permission."),(0,r.kt)("p",null,"OAuth apps can either be installed and managed across an account by account admins as an account-level app or by end-users individually as a user-managed app."),(0,r.kt)("h2",{id:"create-an-oauth-20-app"},"Create an OAuth 2.0 App"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Register Your App")),(0,r.kt)("p",null,"To register your app, visit the ",(0,r.kt)("a",{parentName:"p",href:"https://make.selfcommunity.com"},"https://make.selfcommunity.com")," and click on the Community Apis option under Integrations in the left menu.\nEnable Community Apis and Authentcation api if they are disabled."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Switch API Enabled",src:a(42168).Z,width:"2362",height:"746"})),(0,r.kt)("p",null,"Go to OAuth 2.0 subpanel and click on 'ADD NEW APP'."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select Client Type")),(0,r.kt)("p",null,"The first thing you are asked to specify when you want to create an oauth2 app is the Client Type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Oauth Authentication Step 1",src:a(14585).Z,width:"1478",height:"1486"})),(0,r.kt)("p",null,"The OAuth 2.0 framework specifies several grant types for different use cases. \u2013 ",(0,r.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/"},"Grant types")),(0,r.kt)("p",null,"In OAuth 2.0, the term \u201cgrant type\u201d refers to the way an application gets an access token.\nOAuth 2.0 defines several grant types and each grant type is designed for a particular use case, whether that\u2019s a web app, a mobile or desktop app, or server-to-server applications.\nCommunity Authentication supports three types of grants:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Authorization-code"),(0,r.kt)("li",{parentName:"ul"},"Implicit"),(0,r.kt)("li",{parentName:"ul"},"Password")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Authorization Code")),(0,r.kt)("p",null,"The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token. After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Implicit")),(0,r.kt)("p",null,"The Implicit flow was a simplified OAuth flow previously recommended for native apps and JavaScript apps where the access token was returned immediately without an extra authorization code exchange step. It is not recommended to use the implicit flow (and some servers prohibit this flow entirely) due to the inherent risks of returning access tokens in an HTTP redirect without any confirmation that it has been received by the client. Public clients such as native apps and JavaScript apps should now use the authorization code flow."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Password")),(0,r.kt)("p",null,"The Password grant type is a way to exchange a user's credentials for an access token. Because the client application has to collect the user's password and send it to the authorization server, it is not recommended that this grant be used at all anymore. This flow provides no mechanism for things like multifactor authentication or delegated accounts, so is quite limiting in practice."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enter basic app information")),(0,r.kt)("p",null,"Provide app related information and get client credentials\nThe windows that follow will ask you to provide a series of information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Oauth Authentication Step 2",src:a(73734).Z,width:"1482",height:"1718"})),(0,r.kt)("p",null,"Only the application name is required unless otherwise noted.\nDescriptions of each field are provided below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"App Name: provide your app\u2019s name here. The name is not unique, but it is required. Max 255 characters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"App Description: description of the app. It is optionals. Max 255 characters.\nIt will only appear during the OAuth 2.0 flow on the authorization page.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"App Image: image representing the app. It is optionals.\nIf not present, a default image will be shown.\nIt will only appear during the OAuth 2.0 flow on the authorization page."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Set Redirect URIs (not required if app grant type is password)")),(0,r.kt)("p",null,"Redirect URIs are a critical part of the OAuth flow.\nAfter a user successfully authorizes an application, the authorization server will redirect the user back to the application with either an authorization code or access token in the URL. Because the redirect URL will contain sensitive information, it is critical that the service doesn\u2019t redirect the user to arbitrary locations."),(0,r.kt)("p",null,"The best way to ensure the user will only be directed to appropriate locations is to require to register one or more redirect URLs when they create the application."),(0,r.kt)("p",null,"Redirect URIs are required only for client of grant type authorization-flow.\nYou can enter a ",(0,r.kt)("strong",{parentName:"p"},"list of URIs, space separated"),".\nRedirect URIs determines where the API server redirects the user after the user completes the authorization flow.\nThe value must exactly match one of the authorized redirect URIs for the OAuth 2.0 client, which you configured in your app. If this value doesn't match an authorized redirect URI for the provided client_id you will get a redirect_uri_mismatch error."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Oauth Authentication Step 3",src:a(49959).Z,width:"1486",height:"1184"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Submission")),(0,r.kt)("p",null,"After you provide the information mentioned above, app credentials (Client ID/Secret Key) will be automatically generated for your app."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Oauth Authentication Step 4",src:a(48938).Z,width:"1282",height:"1242"})),(0,r.kt)("h2",{id:"testing-oauth-20-app"},"Testing OAuth 2.0 App"),(0,r.kt)("h3",{id:"getting-an-access-token"},"Getting an Access Token"),(0,r.kt)("p",null,"Depending on the type of client type for there are different ways to get a token."),(0,r.kt)("p",null,"For the following examples let's assume we have created an app with the following credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"client_id: vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8"),(0,r.kt)("li",{parentName:"ul"},"secret_key: DZFpuNjRdt5xUEzxXovAp40bU3lQvoMvF3awEStn61RXWE0Ses4RgzHWKJKTvUCHfRkhcBi3ebsEfSjfEO96vo2Sh6pZlxJ6f7KcUbhvqMMPoVxRwv4vfdWEoWMGPeIO"),(0,r.kt)("li",{parentName:"ul"},"redirect URIs: ",(0,r.kt)("a",{parentName:"li",href:"https://127.0.0.1:8000/callback"},"https://127.0.0.1:8000/callback"))),(0,r.kt)("h3",{id:"authorization-code"},"Authorization Code"),(0,r.kt)("p",null,"To start the Authorization code flow got to this URL with is the same as show bellow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://<community_hostname>/oauth/authorize/?response_type=code&client_id=vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8&redirect_uri=https://127.0.0.1:8000/callback\n")),(0,r.kt)("p",null,"Note the parameters we pass:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"response_type: code"),(0,r.kt)("li",{parentName:"ul"},"client_id: vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8"),(0,r.kt)("li",{parentName:"ul"},"redirect_uri: ",(0,r.kt)("a",{parentName:"li",href:"https://127.0.0.1:8000/callback"},"https://127.0.0.1:8000/callback"))),(0,r.kt)("p",null,"This identifies the application, the user is asked to authorize your application to access its resources."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Oauth Authorize",src:a(11872).Z,width:"1244",height:"1196"})),(0,r.kt)("p",null,"Remember we used ",(0,r.kt)("a",{parentName:"p",href:"https://127.0.0.1:8000/callback"},"https://127.0.0.1:8000/callback")," as redirect_uri you will get a Page not found (404) but it worked if you get a url like:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:8000/callback?code=uVqLxiHDKIirldDZQfSnDsmYW1Abj2")),(0,r.kt)("p",null,"This is the OAuth2 provider trying to give you a code, in this case uVqLxiHDKIirldDZQfSnDsmYW1Abj2."),(0,r.kt)("p",null,"Now that you have the user authorization is time to get an access token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/token/"\n    -d "client_id=${ID}"\n    -d "client_secret=${SECRET}"\n    -d "code=${CODE}"\n    -d "redirect_uri=https://127.0.0.1:8000/callback"\n    -d "grant_type=authorization_code"\n')),(0,r.kt)("p",null,"The OAuth2 provider will return the follow response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jooqrnOrNa0BrNWlg68u9sl6SkdFZg",\n  "expires_in": 36000,\n  "token_type": "Bearer",\n  "scope": "read write",\n  "refresh_token": "HNvDQjjsnvDySaK0miwG4lttJEl9yD"\n}\n')),(0,r.kt)("p",null,"To access the user resources we just use the access_token."),(0,r.kt)("p",null,"Set the HTTP Authorization header as Bearer to access the protected resources as in the example below:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'curl -H "Authorization: Bearer jooqrnOrNa0BrNWlg68u9sl6SkdFZg"\n    -X GET https://<community_hostname>/api/v2/<resource>')),(0,r.kt)("h3",{id:"implicit"},"Implicit"),(0,r.kt)("p",null,"To start the Implicit flow got to this URL with is the same as show below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://<community_hostname>/oauth/authorize?client_id=vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8&redirect_uri=https://127.0.0.1:8000/callback&response_type=token\n")),(0,r.kt)("p",null,"This identifies the application, the user is asked to authorize your application to access its resources as in the authorize-code flow.\nAfter the user has granted the authorization, the server responds with a redirect to redirect_uri.\nThe only difference, respect to the authorization-code flow, is that in this case the access token will appear in the url fragment of the redirect_uri."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://127.0.0.1:8000/callback#access_token=uPYzDyan1nJfqRulCG6pMuCT6pwbpN&expires_in=36000&token_type=Bearer&scope=read+write\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# fragment values\naccess_token=uPYzDyan1nJfqRulCG6pMuCT6pwbpN\nexpires_in=36000\ntoken_type=Bearer\nscope=read+write\n")),(0,r.kt)("p",null,"In this case, a refresh token will not be issued.\nThis flow is ideal for accessing the community APIs from a client."),(0,r.kt)("h3",{id:"password"},"Password"),(0,r.kt)("p",null,"The Password grant is one of the simplest OAuth grants and involves only one step: the application presents a traditional username and password login form to collect the user\u2019s credentials and makes a POST request to the server to exchange the password for an access token.\nThe POST request that the application makes looks like the example below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/token/"\n    -d "client_id=${ID}"\n    -d "username=${username}"\n    -d "password=${password}"\n    -d "grant_type=password"\n')),(0,r.kt)("p",null,"To start the Password Credential flow you call /token/ endpoint direct:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'curl -X POST -H "Cache-Control: no-cache" -H "Content-Type: application/x-www-form-urlencoded" "https://<community_hostname>/oauth/token/" -d "grant_type=password"')),(0,r.kt)("p",null,"The POST parameters in this request are explained below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"grant_type=password - This tells the server we\u2019re using the Password grant type"),(0,r.kt)("li",{parentName:"ul"},"username= - The user\u2019s username that they entered in the application"),(0,r.kt)("li",{parentName:"ul"},"password= - The user\u2019s password that they entered in the application"),(0,r.kt)("li",{parentName:"ul"},"client_id= - The public identifier of the application that the developer obtained during registration")),(0,r.kt)("p",null,"The server replies with an access token in the same format as the other grant types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jooqrnOrNa0BrNWlg68u9sl6SkdFZg",\n  "expires_in": 36000,\n  "token_type": "Bearer",\n  "scope": "read write",\n  "refresh_token": "HNvDQjjsnvDySaK0miwG4lttJEl9yD"\n}\n')),(0,r.kt)("h3",{id:"using-an-access-token"},"Using an Access Token"),(0,r.kt)("p",null,"Regardless of which grant type you used, if you have an OAuth 2.0 Bearer Token you can use with the authenticated API.\nSet the HTTP Authorization header as Bearer ",(0,r.kt)("inlineCode",{parentName:"p"},"<TOKEN>")," to access the protected resources as in the example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -H "Authorization: Bearer jooqrnOrNa0BrNWlg68u9sl6SkdFZg"\n    -X GET https://<community_hostname>/api/v2/<resource>\n')),(0,r.kt)("h3",{id:"refreshing-an-access-token"},"Refreshing an Access Token"),(0,r.kt)("p",null,"A refresh request from a public client would omit that secret, and take the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/token/"\n    -d "client_id=${ID}"\n    -d "refresh_token=${REFRESH_TOKEN}"\n    -d "grant_type=refresh_token"\n')),(0,r.kt)("p",null,"The server will respond wih a 200 status code on successful refresh."),(0,r.kt)("h3",{id:"revoking-an-access-token"},"Revoking an Access Token"),(0,r.kt)("p",null,"A revoke request from a public client would omit that secret, and take the form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/revoke_token/"\n    -d "client_id=${ID}"\n    -d "token=${TOKEN}"\n')),(0,r.kt)("p",null,"The server will respond wih a 200 status code on successful revocation."))}h.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11872:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/authorize-fa37814ca7f423d0f9d1dc57f8a54773.png"},14585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth_step_1-7f2684a0159a0b8c406dc3058dda6263.png"},73734:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth_step_2-4f0e3ca162c10b8789301b2dab4d528b.png"},49959:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth_step_3-813f708e4e5ff3a92341d7ad06d62ef7.png"},48938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth_step_4-6e5b313d9de43b413e47793926fd75fc.png"},42168:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/switch_api_enable-86fb318e845559b36d4b412abaae21b2.png"}}]);