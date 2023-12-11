"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[80645],{42973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(85893),s=n(11151);const a={sidebar_label:"OAuth 2.0",sidebar_position:3},r="OAuth 2.0",o={id:"api/authentication/oauth",title:"OAuth 2.0",description:"To allow applications to manage individual user data, the Community provides direct support to OAuth2.0, the industry-standard authorization protocol that allows applications to obtain requested access to user accounts over HTTP.",source:"@site/docs/api/authentication/oauth.md",sourceDirName:"api/authentication",slug:"/api/authentication/oauth",permalink:"/docs/api/authentication/oauth",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/api/authentication/oauth.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"OAuth 2.0",sidebar_position:3},sidebar:"apiSidebar",previous:{title:"JWT",permalink:"/docs/api/authentication/jwt"}},c={},h=[{value:"Create an OAuth 2.0 App",id:"create-an-oauth-20-app",level:2},{value:"Testing OAuth 2.0 App",id:"testing-oauth-20-app",level:2},{value:"Getting an Access Token",id:"getting-an-access-token",level:3},{value:"Authorization Code",id:"authorization-code",level:3},{value:"Implicit",id:"implicit",level:3},{value:"Password",id:"password",level:3},{value:"Using an Access Token",id:"using-an-access-token",level:3},{value:"Refreshing an Access Token",id:"refreshing-an-access-token",level:3},{value:"Revoking an Access Token",id:"revoking-an-access-token",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"oauth-20",children:"OAuth 2.0"}),"\n",(0,i.jsx)("a",{id:"selfcommunity-api-authentication-oauth"}),"\n",(0,i.jsx)(t.p,{children:"To allow applications to manage individual user data, the Community provides direct support to OAuth2.0, the industry-standard authorization protocol that allows applications to obtain requested access to user accounts over HTTP."}),"\n",(0,i.jsx)(t.p,{children:"OAuth apps are typically end-user applications which allow secure integration with Community APIs to access authorized data for each user. As a developer, you can use OAuth to allow access to users\u2019 information related to their Community accounts, upon granting permission."}),"\n",(0,i.jsx)(t.p,{children:"OAuth apps can either be installed and managed across an account by account admins as an account-level app or by end-users individually as a user-managed app."}),"\n",(0,i.jsx)(t.h2,{id:"create-an-oauth-20-app",children:"Create an OAuth 2.0 App"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Register Your App"})}),"\n",(0,i.jsxs)(t.p,{children:["To register your app, visit the ",(0,i.jsx)(t.a,{href:"https://make.selfcommunity.com",children:"https://make.selfcommunity.com"})," and click on the Community Apis option under Integrations in the left menu.\nEnable Community Apis and Authentcation api if they are disabled."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Switch API Enabled",src:n(42168).Z+"",width:"2362",height:"746"})}),"\n",(0,i.jsx)(t.p,{children:"Go to OAuth 2.0 subpanel and click on 'ADD NEW APP'."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Select Client Type"})}),"\n",(0,i.jsx)(t.p,{children:"The first thing you are asked to specify when you want to create an oauth2 app is the Client Type."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Oauth Authentication Step 1",src:n(14585).Z+"",width:"1478",height:"1486"})}),"\n",(0,i.jsxs)(t.p,{children:["The OAuth 2.0 framework specifies several grant types for different use cases. \u2013 ",(0,i.jsx)(t.a,{href:"https://oauth.net/2/grant-types/",children:"Grant types"})]}),"\n",(0,i.jsx)(t.p,{children:"In OAuth 2.0, the term \u201cgrant type\u201d refers to the way an application gets an access token.\nOAuth 2.0 defines several grant types and each grant type is designed for a particular use case, whether that\u2019s a web app, a mobile or desktop app, or server-to-server applications.\nCommunity Authentication supports three types of grants:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Authorization-code"}),"\n",(0,i.jsx)(t.li,{children:"Implicit"}),"\n",(0,i.jsx)(t.li,{children:"Password"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Authorization Code"})}),"\n",(0,i.jsx)(t.p,{children:"The Authorization Code grant type is used by confidential and public clients to exchange an authorization code for an access token. After the user returns to the client via the redirect URL, the application will get the authorization code from the URL and use it to request an access token."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Implicit"})}),"\n",(0,i.jsx)(t.p,{children:"The Implicit flow was a simplified OAuth flow previously recommended for native apps and JavaScript apps where the access token was returned immediately without an extra authorization code exchange step. It is not recommended to use the implicit flow (and some servers prohibit this flow entirely) due to the inherent risks of returning access tokens in an HTTP redirect without any confirmation that it has been received by the client. Public clients such as native apps and JavaScript apps should now use the authorization code flow."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Password"})}),"\n",(0,i.jsx)(t.p,{children:"The Password grant type is a way to exchange a user's credentials for an access token. Because the client application has to collect the user's password and send it to the authorization server, it is not recommended that this grant be used at all anymore. This flow provides no mechanism for things like multifactor authentication or delegated accounts, so is quite limiting in practice."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Enter basic app information"})}),"\n",(0,i.jsx)(t.p,{children:"Provide app related information and get client credentials\nThe windows that follow will ask you to provide a series of information."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Oauth Authentication Step 2",src:n(73734).Z+"",width:"1482",height:"1718"})}),"\n",(0,i.jsx)(t.p,{children:"Only the application name is required unless otherwise noted.\nDescriptions of each field are provided below:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"App Name: provide your app\u2019s name here. The name is not unique, but it is required. Max 255 characters."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"App Description: description of the app. It is optionals. Max 255 characters.\nIt will only appear during the OAuth 2.0 flow on the authorization page."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"App Image: image representing the app. It is optionals.\nIf not present, a default image will be shown.\nIt will only appear during the OAuth 2.0 flow on the authorization page."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Set Redirect URIs (not required if app grant type is password)"})}),"\n",(0,i.jsx)(t.p,{children:"Redirect URIs are a critical part of the OAuth flow.\nAfter a user successfully authorizes an application, the authorization server will redirect the user back to the application with either an authorization code or access token in the URL. Because the redirect URL will contain sensitive information, it is critical that the service doesn\u2019t redirect the user to arbitrary locations."}),"\n",(0,i.jsx)(t.p,{children:"The best way to ensure the user will only be directed to appropriate locations is to require to register one or more redirect URLs when they create the application."}),"\n",(0,i.jsxs)(t.p,{children:["Redirect URIs are required only for client of grant type authorization-flow.\nYou can enter a ",(0,i.jsx)(t.strong,{children:"list of URIs, space separated"}),".\nRedirect URIs determines where the API server redirects the user after the user completes the authorization flow.\nThe value must exactly match one of the authorized redirect URIs for the OAuth 2.0 client, which you configured in your app. If this value doesn't match an authorized redirect URI for the provided client_id you will get a redirect_uri_mismatch error."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Oauth Authentication Step 3",src:n(49959).Z+"",width:"1486",height:"1184"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Submission"})}),"\n",(0,i.jsx)(t.p,{children:"After you provide the information mentioned above, app credentials (Client ID/Secret Key) will be automatically generated for your app."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Oauth Authentication Step 4",src:n(48938).Z+"",width:"1282",height:"1242"})}),"\n",(0,i.jsx)(t.h2,{id:"testing-oauth-20-app",children:"Testing OAuth 2.0 App"}),"\n",(0,i.jsx)(t.h3,{id:"getting-an-access-token",children:"Getting an Access Token"}),"\n",(0,i.jsx)(t.p,{children:"Depending on the type of client type for there are different ways to get a token."}),"\n",(0,i.jsx)(t.p,{children:"For the following examples let's assume we have created an app with the following credentials:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"client_id: vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8"}),"\n",(0,i.jsx)(t.li,{children:"secret_key: DZFpuNjRdt5xUEzxXovAp40bU3lQvoMvF3awEStn61RXWE0Ses4RgzHWKJKTvUCHfRkhcBi3ebsEfSjfEO96vo2Sh6pZlxJ6f7KcUbhvqMMPoVxRwv4vfdWEoWMGPeIO"}),"\n",(0,i.jsxs)(t.li,{children:["redirect URIs: ",(0,i.jsx)(t.a,{href:"https://127.0.0.1:8000/callback",children:"https://127.0.0.1:8000/callback"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"authorization-code",children:"Authorization Code"}),"\n",(0,i.jsx)(t.p,{children:"To start the Authorization code flow got to this URL with is the same as show bellow:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://<community_hostname>/oauth/authorize/?response_type=code&client_id=vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8&redirect_uri=https://127.0.0.1:8000/callback\n"})}),"\n",(0,i.jsx)(t.p,{children:"Note the parameters we pass:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"response_type: code"}),"\n",(0,i.jsx)(t.li,{children:"client_id: vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8"}),"\n",(0,i.jsxs)(t.li,{children:["redirect_uri: ",(0,i.jsx)(t.a,{href:"https://127.0.0.1:8000/callback",children:"https://127.0.0.1:8000/callback"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This identifies the application, the user is asked to authorize your application to access its resources."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Oauth Authorize",src:n(11872).Z+"",width:"1244",height:"1196"})}),"\n",(0,i.jsxs)(t.p,{children:["Remember we used ",(0,i.jsx)(t.a,{href:"https://127.0.0.1:8000/callback",children:"https://127.0.0.1:8000/callback"})," as redirect_uri you will get a Page not found (404) but it worked if you get a url like:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"https://127.0.0.1:8000/callback?code=uVqLxiHDKIirldDZQfSnDsmYW1Abj2"})}),"\n",(0,i.jsx)(t.p,{children:"This is the OAuth2 provider trying to give you a code, in this case uVqLxiHDKIirldDZQfSnDsmYW1Abj2."}),"\n",(0,i.jsx)(t.p,{children:"Now that you have the user authorization is time to get an access token:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/token/"\n    -d "client_id=${ID}"\n    -d "client_secret=${SECRET}"\n    -d "code=${CODE}"\n    -d "redirect_uri=https://127.0.0.1:8000/callback"\n    -d "grant_type=authorization_code"\n'})}),"\n",(0,i.jsx)(t.p,{children:"The OAuth2 provider will return the follow response:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "access_token": "jooqrnOrNa0BrNWlg68u9sl6SkdFZg",\n  "expires_in": 36000,\n  "token_type": "Bearer",\n  "scope": "read write",\n  "refresh_token": "HNvDQjjsnvDySaK0miwG4lttJEl9yD"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"To access the user resources we just use the access_token."}),"\n",(0,i.jsx)(t.p,{children:"Set the HTTP Authorization header as Bearer to access the protected resources as in the example below:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'curl -H "Authorization: Bearer jooqrnOrNa0BrNWlg68u9sl6SkdFZg"     -X GET https://<community_hostname>/api/v2/<resource>'})}),"\n",(0,i.jsx)(t.h3,{id:"implicit",children:"Implicit"}),"\n",(0,i.jsx)(t.p,{children:"To start the Implicit flow got to this URL with is the same as show below:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://<community_hostname>/oauth/authorize?client_id=vW1RcAl7Mb0d5gyHNQIAcH110lWoOW2BmWJIero8&redirect_uri=https://127.0.0.1:8000/callback&response_type=token\n"})}),"\n",(0,i.jsx)(t.p,{children:"This identifies the application, the user is asked to authorize your application to access its resources as in the authorize-code flow.\nAfter the user has granted the authorization, the server responds with a redirect to redirect_uri.\nThe only difference, respect to the authorization-code flow, is that in this case the access token will appear in the url fragment of the redirect_uri."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"https://127.0.0.1:8000/callback#access_token=uPYzDyan1nJfqRulCG6pMuCT6pwbpN&expires_in=36000&token_type=Bearer&scope=read+write\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"# fragment values\naccess_token=uPYzDyan1nJfqRulCG6pMuCT6pwbpN\nexpires_in=36000\ntoken_type=Bearer\nscope=read+write\n"})}),"\n",(0,i.jsx)(t.p,{children:"In this case, a refresh token will not be issued.\nThis flow is ideal for accessing the community APIs from a client."}),"\n",(0,i.jsx)(t.h3,{id:"password",children:"Password"}),"\n",(0,i.jsx)(t.p,{children:"The Password grant is one of the simplest OAuth grants and involves only one step: the application presents a traditional username and password login form to collect the user\u2019s credentials and makes a POST request to the server to exchange the password for an access token.\nThe POST request that the application makes looks like the example below."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/token/"\n    -d "client_id=${ID}"\n    -d "username=${username}"\n    -d "password=${password}"\n    -d "grant_type=password"\n'})}),"\n",(0,i.jsx)(t.p,{children:"To start the Password Credential flow you call /token/ endpoint direct:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'curl -X POST -H "Cache-Control: no-cache" -H "Content-Type: application/x-www-form-urlencoded" "https://<community_hostname>/oauth/token/" -d "grant_type=password"'})}),"\n",(0,i.jsx)(t.p,{children:"The POST parameters in this request are explained below."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"grant_type=password - This tells the server we\u2019re using the Password grant type"}),"\n",(0,i.jsx)(t.li,{children:"username= - The user\u2019s username that they entered in the application"}),"\n",(0,i.jsx)(t.li,{children:"password= - The user\u2019s password that they entered in the application"}),"\n",(0,i.jsx)(t.li,{children:"client_id= - The public identifier of the application that the developer obtained during registration"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The server replies with an access token in the same format as the other grant types."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "access_token": "jooqrnOrNa0BrNWlg68u9sl6SkdFZg",\n  "expires_in": 36000,\n  "token_type": "Bearer",\n  "scope": "read write",\n  "refresh_token": "HNvDQjjsnvDySaK0miwG4lttJEl9yD"\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"using-an-access-token",children:"Using an Access Token"}),"\n",(0,i.jsxs)(t.p,{children:["Regardless of which grant type you used, if you have an OAuth 2.0 Bearer Token you can use with the authenticated API.\nSet the HTTP Authorization header as Bearer ",(0,i.jsx)(t.code,{children:"<TOKEN>"})," to access the protected resources as in the example below:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl -H "Authorization: Bearer jooqrnOrNa0BrNWlg68u9sl6SkdFZg"\n    -X GET https://<community_hostname>/api/v2/<resource>\n'})}),"\n",(0,i.jsx)(t.h3,{id:"refreshing-an-access-token",children:"Refreshing an Access Token"}),"\n",(0,i.jsx)(t.p,{children:"A refresh request from a public client would omit that secret, and take the form:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/token/"\n    -d "client_id=${ID}"\n    -d "refresh_token=${REFRESH_TOKEN}"\n    -d "grant_type=refresh_token"\n'})}),"\n",(0,i.jsx)(t.p,{children:"The server will respond wih a 200 status code on successful refresh."}),"\n",(0,i.jsx)(t.h3,{id:"revoking-an-access-token",children:"Revoking an Access Token"}),"\n",(0,i.jsx)(t.p,{children:"A revoke request from a public client would omit that secret, and take the form:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'curl -X POST\n    -H "Cache-Control: no-cache"\n    -H "Content-Type: application/x-www-form-urlencoded"\n    "https://<community_hostname>/oauth/revoke_token/"\n    -d "client_id=${ID}"\n    -d "token=${TOKEN}"\n'})}),"\n",(0,i.jsx)(t.p,{children:"The server will respond wih a 200 status code on successful revocation."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11872:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/authorize-fa37814ca7f423d0f9d1dc57f8a54773.png"},14585:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oauth_step_1-7f2684a0159a0b8c406dc3058dda6263.png"},73734:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oauth_step_2-4f0e3ca162c10b8789301b2dab4d528b.png"},49959:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oauth_step_3-813f708e4e5ff3a92341d7ad06d62ef7.png"},48938:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/oauth_step_4-6e5b313d9de43b413e47793926fd75fc.png"},42168:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/switch_api_enable-86fb318e845559b36d4b412abaae21b2.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);