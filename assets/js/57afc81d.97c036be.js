"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[99305],{5186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=n(85893),o=n(11151);const l={},r="VoteButton",d={id:"sdk/community-js/react-ui/component_API/VoteButton",title:"VoteButton",description:"Interfaces",source:"@site/docs/sdk/community-js/react-ui/component_API/VoteButton.md",sourceDirName:"sdk/community-js/react-ui/component_API",slug:"/sdk/community-js/react-ui/component_API/VoteButton",permalink:"/docs/sdk/community-js/react-ui/component_API/VoteButton",draft:!1,unlisted:!1,editUrl:"https://github.com/selfcommunity/developers-doc/tree/main/docs/sdk/community-js/react-ui/component_API/VoteButton.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"VoteAudienceButton",permalink:"/docs/sdk/community-js/react-ui/component_API/VoteAudienceButton"},next:{title:"Widget",permalink:"/docs/sdk/community-js/react-ui/component_API/Widget"}},i={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"VoteButtonProps",id:"votebuttonprops",level:3},{value:"Extends",id:"extends",level:4},{value:"Indexable",id:"indexable",level:4},{value:"Properties",id:"properties",level:4},{value:"Functions",id:"functions",level:2},{value:"VoteButton()",id:"votebutton-1",level:3},{value:"Import",id:"import",level:4},{value:"Component Name",id:"component-name",level:4},{value:"CSS",id:"css",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Source",id:"source",level:4}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"votebutton",children:"VoteButton"}),"\n",(0,s.jsx)(t.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,s.jsx)(t.h3,{id:"votebuttonprops",children:"VoteButtonProps"}),"\n",(0,s.jsx)(t.h4,{id:"extends",children:"Extends"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Pick"}),"<",(0,s.jsx)(t.code,{children:"LoadingButtonProps"}),", ",(0,s.jsx)(t.code,{children:"Exclude"}),"<keyof ",(0,s.jsx)(t.code,{children:"LoadingButtonProps"}),", ",(0,s.jsx)(t.code,{children:'"onClick"'})," | ",(0,s.jsx)(t.code,{children:'"disabled"'})," | ",(0,s.jsx)(t.code,{children:'"loading"'}),">>"]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"indexable",children:"Indexable"}),"\n",(0,s.jsxs)(t.p,{children:["[",(0,s.jsx)(t.code,{children:"p"}),": ",(0,s.jsx)(t.code,{children:"string"}),"]: ",(0,s.jsx)(t.code,{children:"any"})]}),"\n",(0,s.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"contribution?"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,s.jsx)(t.code,{children:"SCCommentType"})," | ",(0,s.jsx)(t.code,{children:"SCFeedObjectType"})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Contribution object to vote",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Default"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"null"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"contributionId"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"number"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Id of the contribution object to vote",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Default"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"null"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"contributionType"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"SCContributionType"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Type of the contribution object to vote",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Default"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"null"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"onVote?"})}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["(",(0,s.jsx)(t.code,{children:"contribution"}),": ",(0,s.jsx)(t.code,{children:"SCCommentType"})," | ",(0,s.jsx)(t.code,{children:"SCFeedObjectType"}),") => ",(0,s.jsx)(t.code,{children:"any"})]}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["onVote callback",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Default"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"null"})]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,s.jsx)(t.h3,{id:"votebutton-1",children:"VoteButton()"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VoteButton"}),"(",(0,s.jsx)(t.code,{children:"inProps"}),"): ",(0,s.jsx)(t.code,{children:"JSX.Element"})]}),"\n"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"API documentation for the Community-JS Vote Button component. Learn about the available props and the CSS API."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"import",children:"Import"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:"import {VoteAudienceButton} from '@selfcommunity/react-ui';\n"})}),"\n",(0,s.jsx)(t.h4,{id:"component-name",children:"Component Name"}),"\n",(0,s.jsxs)(t.p,{children:["The name ",(0,s.jsx)(t.code,{children:"SCVoteButton"})," can be used when providing style overrides in the theme."]}),"\n",(0,s.jsx)(t.h4,{id:"css",children:"CSS"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Rule Name"}),(0,s.jsx)(t.th,{children:"Global class"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"root"}),(0,s.jsx)(t.td,{children:".SCVoteButton-root"}),(0,s.jsx)(t.td,{children:"Styles applied to the root element."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"voted"}),(0,s.jsx)(t.td,{children:".SCVoteButton-voted"}),(0,s.jsx)(t.td,{children:"Styles applied to the root element when the user has vote the contribution."})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Parameter"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.code,{children:"inProps"})}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"/docs/sdk/community-js/react-ui/component_API/VoteButton#votebuttonprops",children:(0,s.jsx)(t.code,{children:"VoteButtonProps"})})}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,s.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"JSX.Element"})}),"\n",(0,s.jsx)(t.h4,{id:"source",children:"Source"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/selfcommunity/community-js/blob/88ddf460a21d4471fb84839f097f9d428e19bd86/packages/react-ui/src/components/VoteButton/VoteButton.tsx#L88",children:"packages/react-ui/src/components/VoteButton/VoteButton.tsx:88"})})]})}function x(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var s=n(67294);const o={},l=s.createContext(o);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);