"use strict";(self.webpackChunkdevelopers_doc=self.webpackChunkdevelopers_doc||[]).push([[82848],{82848:(e,t,n)=>{n.d(t,{Z:()=>B});var s=n(67294),o=n(90948),i=n(5616),c=n(86886),r=n(50456),a=n(44854),d=n(38509),l=n(37024),u=n(14022),m=n(64434),b=n(44470),O=n(12805),j=n(52532),g=n(6073);const h={root:`${g.B}-skeleton-root`},f=(0,o.ZP)(j.Z,{name:g.B,slot:"SkeletonRoot"})((()=>({})));function p(e){return s.createElement(f,Object.assign({className:h.root},e))}var F=n(4105);const Z="SCFeedObjectDetailTemplate",S={root:`${Z}-skeleton-root`},E=(0,o.ZP)(i.Z,{name:Z,slot:"SkeletonRoot"})((()=>({})));function v(e){const{FeedObjectSkeletonProps:t={},CommentsFeedObjectSkeletonProps:n={},RelatedFeedObjectsSkeletonProps:o={}}=e;return s.createElement(E,{className:S.root},s.createElement(c.ZP,{container:!0,spacing:2},s.createElement(c.ZP,{item:!0,xs:12,md:7},s.createElement(O.Z,Object.assign({template:l.r.DETAIL},t)),s.createElement(p,Object.assign({count:4},n))),s.createElement(c.ZP,{item:!0,xs:12,md:5},s.createElement(F.Z,Object.assign({},o)))))}var N=n(29628),L=n(94184),y=n.n(L),_=n(44012),C=n(83781),P=n(85472),T=n(68787),I=n(66380),R=n(31498);const x={root:`${Z}-root`},A=(0,o.ZP)(i.Z,{name:Z,slot:"Root"})((()=>({}))),k=[P.Rl,P.OM];const B=function(e){const t=(0,N.Z)({props:e,name:Z}),{id:n="feed_object_page",className:o,feedObjectId:O,feedObject:j,feedObjectType:g,FeedObjectProps:h={},FeedSidebarProps:f={},CommentsFeedObjectProps:p={},RelatedFeedObjectProps:F={autoHide:!1}}=t,S=(0,T.LD)(),E=(0,I.ko)(),{obj:L,setObj:B,error:$}=(0,R.Z)({id:O,feedObject:j,feedObjectType:g}),[D,U]=(0,s.useState)([]),M=(0,s.useMemo)((()=>{const e={};return k.map((t=>e[t]=t in E.preferences?E.preferences[t].value:null)),e}),[E.preferences]);return $?s.createElement(i.Z,null,s.createElement(_.Z,{id:"templates.feedObjectDetail.contributionNotFound",defaultMessage:"templates.feedObjectDetail.contributionNotFound"})):L?s.createElement(A,{id:n,className:y()(x.root,o)},s.createElement(c.ZP,{container:!0,spacing:2},s.createElement(c.ZP,{item:!0,xs:12,md:7},s.createElement(d.Z,Object.assign({},h,{feedObject:L,template:l.r.DETAIL,onReply:function(e){U([...D,e]),setTimeout((()=>{const t=document.getElementById(`comment_object_${e.id}`);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),300)}})),M[P.Rl]&&(M[P.OM]&&null===S.user||!M[P.OM])?s.createElement(a.Z,Object.assign({position:C.n.POSITION_BELOW_FEED_OBJECT},L.categories.length&&{categoriesId:L.categories.map((e=>e.id))})):null,s.createElement(u.Z,Object.assign({key:`comments_${L.id}`,showTitle:!0,feedObject:L,comments:D},p))),s.createElement(c.ZP,{item:!0,xs:12,md:5},s.createElement(r.Z,{mdDown:!0},s.createElement(m.Z,Object.assign({},f),s.createElement(b.Z,Object.assign({key:`related_${L.id}`,feedObject:L},F))))))):s.createElement(v,null)}},45431:(e,t,n)=>{n.d(t,{Z:()=>m});var s=n(67294),o=n(63902),i=n(78462),c=n(90948),r=n(12805),a=n(44267),d=n(89546);const l={root:`${d.B}-skeleton-root`,list:`${d.B}-list`},u=(0,c.ZP)(o.Z,{name:d.B,slot:"SkeletonRoot"})((()=>({})));function m(e){return s.createElement(u,Object.assign({className:l.root},e),s.createElement(a.Z,null,s.createElement(i.Z,{className:l.list},[...Array(4)].map(((e,t)=>s.createElement(r.Z,{key:t,elevation:0}))))))}},89546:(e,t,n)=>{n.d(t,{B:()=>s});const s="SCCategoryTrendingFeedWidget"},6073:(e,t,n)=>{n.d(t,{B:()=>s});const s="SCCommentsFeedObject"},14022:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(97582),o=n(67294),i=n(90948),c=n(44012),r=n(87459),a=n(5616),d=n(20166),l=n(94184),u=n.n(l),m=n(29628),b=n(80317),O=n(75459),j=n(15861),g=n(70050),h=n(24243),f=n(24085),p=n(59219),F=n(99960),Z=n(47189),S=n(51294),E=n(49794),v=n(72871),N=n(6073);const L={root:`${N.B}-root`,noComments:`${N.B}-no-comments`,commentNotFound:`${N.B}-comment-not-found`},y=(0,i.ZP)(a.Z,{name:N.B,slot:"Root"})((()=>({})));const _=function(e){const t=(0,m.Z)({props:e,name:N.B}),{id:n=`comments_object_${t.feedObjectType?t.feedObjectType:t.feedObject?t.feedObject.type:""}_${t.feedObjectId?t.feedObjectId:t.feedObject?t.feedObject.id:""}`,className:i,feedObjectId:l,feedObject:_,feedObjectType:C=E.q.POST,commentObjectId:P,commentObject:T,CommentComponent:I=r.Z,CommentComponentProps:R={variant:"outlined",linkableCommentDateTime:!1},CommentObjectSkeletonProps:x={elevation:0,WidgetProps:{variant:"outlined"}},renderNoComments:A,renderCommentNotFound:k,page:B=1,commentsPageCount:$=v.ig,commentsOrderBy:D=d.p.ADDED_AT_ASC,showTitle:U=!1,infiniteScrolling:M=!0,onChangePage:G,comments:w=[],cacheStrategy:V=p.n2.NETWORK_ONLY}=t,K=(0,s._T)(t,["id","className","feedObjectId","feedObject","feedObjectType","commentObjectId","commentObject","CommentComponent","CommentComponentProps","CommentObjectSkeletonProps","renderNoComments","renderCommentNotFound","page","commentsPageCount","commentsOrderBy","showTitle","infiniteScrolling","onChangePage","comments","cacheStrategy"]),W=(0,Z.Z)({id:l,feedObject:_,feedObjectType:C,offset:(B-1)*$,pageSize:$,orderBy:D,onChangePage:G,cacheStrategy:V}),[X,H]=(0,o.useState)(!1),[z,Y]=(0,o.useState)(null),{obj:q,error:J}=(0,S.Z)({id:P,commentObject:T,cacheStrategy:V}),[Q,ee]=(0,o.useState)(null),te=W.feedObject?W.feedObject.id:null,ne=q?q.id:null,se=(0,o.useRef)(),oe=W.total+w.length,ie=(0,o.useMemo)((()=>()=>U?o.createElement(j.Z,{variant:"h6",gutterBottom:!0,color:"inherit"},o.createElement(c.Z,{id:"ui.commentsObject.title",defaultMessage:"ui.commentsObject.title",values:{total:oe}})):null),[oe,X]),ce=(0,o.useMemo)((()=>e=>h.Z.request({url:f.Z.Comment.url({id:e}),method:f.Z.Comment.method}).then((e=>e.status>=300?Promise.reject(e):Promise.resolve(e.data)))),[W.feedObject,P,q]);function re(e){setTimeout((()=>{const t=se.current?se.current.querySelector(`#comment_object_${e.id}`):null;t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}),300)}(0,o.useEffect)((()=>{null===te||X||(P||q?q?q.parent?(H(!0),ce(q.parent).then((e=>{const t=Object.assign({},e);t.latest_comments=[q],(0,g.P$)(e).id===W.feedObject.id?(Y(t),re(q)):ee(!0),H(!1)})).catch((e=>{H(!1),F.Y.error(O.J,e)}))):((0,g.P$)(q).id===W.feedObject.id?(Y(q),re(q)):ee(!0),H(!1)):J&&H(!1):X||W.getNextPage())}),[te,ne]);let ae=o.createElement(o.Fragment,null);return ae=!W.componentLoaded||oe||W.isLoadingNext||X?o.createElement(o.Fragment,null,Boolean((Q||J)&&!X&&!oe)&&o.createElement(o.Fragment,null,k?k():o.createElement(a.Z,{className:L.commentNotFound},o.createElement(c.Z,{id:"ui.commentsObject.commentNotFound",defaultMessage:"ui.commentsObject.commentNotFound"}))),o.createElement(b.Z,{feedObject:W.feedObject,comments:W.comments,endComments:[...z?[z]:[],...D===d.p.ADDED_AT_ASC?w:[]],startComments:[...D===d.p.ADDED_AT_ASC?[]:w],previous:W.previous,handlePrevious:W.getPreviousPage,isLoadingPrevious:W.isLoadingPrevious,next:W.next,isLoadingNext:W.isLoadingNext,handleNext:W.getNextPage,page:W.page,previousPage:W.previousPage,nextPage:W.nextPage,infiniteScrolling:M&&W.total>0&&!z&&!w.length,CommentComponent:I,CommentComponentProps:R,CommentObjectSkeletonProps:x})):o.createElement(o.Fragment,null,A?A():o.createElement(a.Z,{className:L.noComments},o.createElement(c.Z,{id:"ui.commentsObject.noComments",defaultMessage:"ui.commentsObject.noComments"}))),o.createElement(y,Object.assign({id:n,className:u()(L.root,i)},K,{ref:se}),ie(),ae)}},4105:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(67294),o=n(45431),i=n(90948),c=n(31713);const r={root:`${c.B}-skeleton-root`},a=(0,i.ZP)(o.Z,{name:c.B,slot:"SkeletonRoot"})((()=>({})));function d(){return s.createElement(a,{className:r.root})}},31713:(e,t,n)=>{n.d(t,{B:()=>s});const s="SCRelatedFeedObjectsWidget"},44470:(e,t,n)=>{n.d(t,{Z:()=>X});var s=n(97582),o=n(67294),i=n(90948),c=n(78462),r=n(2734),a=n(61730),d=n(97212),l=n(44267),u=n(15861),m=n(25662),b=n(75459),O=n(85472),j=n(69721),g=n(68787),h=n(66380),f=n(31498),p=n(38509),F=n(12805),Z=n(44012),S=n(37024),E=n(44854),v=n(94184),N=n.n(v),L=n(39154),y=n(79558),_=n(63902),C=n(29628),P=n(91705),T=n(24085),I=n(66821);class R{static getAllFeedObjects(e,t,n){const s=(0,I.B)(t);return(0,P.N)(Object.assign(Object.assign({},n),{url:`${T.Z.FeedObjectList.url({type:e})}?${s.toString()}`,method:T.Z.FeedObjectList.method}))}static getUncommentedFeedObjects(e,t,n){const s=(0,I.B)(t);return(0,P.N)(Object.assign(Object.assign({},n),{url:`${T.Z.FeedObjectsUncommented.url({type:e})}?${s.toString()}`,method:T.Z.FeedObjectsUncommented.method}))}static searchFeedObject(e,t,n){const s=(0,I.B)(t);return(0,P.N)(Object.assign(Object.assign({},n),{url:`${T.Z.SearchFeedObject.url({type:e})}?${s.toString()}`,method:T.Z.SearchFeedObject.method}))}static createFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.CreateFeedObject.url({type:e}),method:T.Z.CreateFeedObject.method,data:t}))}static getSpecificFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.FeedObject.url({type:e,id:t}),method:T.Z.FeedObject.method}))}static updateFeedObject(e,t,n,s){return(0,P.N)(Object.assign(Object.assign({},s),{url:T.Z.UpdateFeedObject.url({id:t,type:e}),method:T.Z.UpdateFeedObject.method,data:n}))}static deleteFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.DeleteFeedObject.url({type:e,id:t}),method:T.Z.DeleteFeedObject.method}))}static feedObjectContributorsList(e,t,n,s){const o=(0,I.B)(n);return(0,P.N)(Object.assign(Object.assign({},s),{url:`${T.Z.FeedObjectContributorsList.url({type:e,id:t})}?${o.toString()}`,method:T.Z.FeedObjectContributorsList.method}))}static feedObjectSharesList(e,t,n,s){const o=(0,I.B)(n);return(0,P.N)(Object.assign(Object.assign({},s),{url:`${T.Z.FeedObjectSharesList.url({type:e,id:t})}?${o.toString()}`,method:T.Z.FeedObjectSharesList.method}))}static feedObjectUserSharesList(e,t,n,s){const o=(0,I.B)(n);return(0,P.N)(Object.assign(Object.assign({},s),{url:`${T.Z.FeedObjectUserSharesList.url({type:e,id:t})}?${o.toString()}`,method:T.Z.FeedObjectUserSharesList.method}))}static restoreFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.RestoreFeedObject.url({type:e,id:t}),method:T.Z.RestoreFeedObject.method}))}static relatedFeedObjects(e,t,n,s){const o=(0,I.B)(n);return(0,P.N)(Object.assign(Object.assign({},s),{url:`${T.Z.RelatedFeedObjects.url({type:e,id:t})}?${o.toString()}`,method:T.Z.RelatedFeedObjects.method}))}static voteFeedObject(e,t,n,s){const o=(0,I.B)(Object.assign({},n&&{reaction:n}));return(0,P.N)(Object.assign(Object.assign({},s),{url:`${T.Z.Vote.url({type:e,id:t})}?${o.toString()}`,method:T.Z.Vote.method}))}static feedObjectVotes(e,t,n,s){const o=(0,I.B)(n);return(0,P.N)(Object.assign(Object.assign({},s),{url:`${T.Z.VotesList.url({type:e,id:t})}?${o.toString()}`,method:T.Z.VotesList.method}))}static feedObjectPollVote(e,t,n,s){return(0,P.N)(Object.assign(Object.assign({},s),{url:T.Z.PollVote.url({type:e,id:t}),method:T.Z.PollVote.method,data:{choice:n}}))}static feedObjectPollVotesList(e,t,n,s){const o=(0,I.B)(n);return(0,P.N)(Object.assign(Object.assign({},s),{url:`${T.Z.PollVotesList.url({type:e,id:t})}?${o.toString()}`,method:T.Z.PollVotesList.method}))}static followFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.FollowContribution.url({id:t}),method:T.Z.FollowContribution.method}))}static feedObjectFollowingList(e,t,n){const s=(0,I.B)(t);return(0,P.N)(Object.assign(Object.assign({},n),{url:`${T.Z.FeedObjectFollowingList.url({type:e})}?${s.toString()}`,method:T.Z.FeedObjectFollowingList.method}))}static checkIfFollowingFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.CheckIfFollowingFeedObject.url({type:e,id:t}),method:T.Z.CheckIfFollowingFeedObject.method}))}static suspendFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.UserSuspendContributionNotification.url({type:e,id:t}),method:T.Z.UserSuspendContributionNotification.method}))}static checkIfSuspendedFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.UserCheckContributionNotificationSuspended.url({type:e,id:t}),method:T.Z.UserCheckContributionNotificationSuspended.method}))}static feedObjectSuspendedList(e,t,n){const s=(0,I.B)(t);return(0,P.N)(Object.assign(Object.assign({},n),{url:`${T.Z.UserListContributionNotificationSuspended.url({type:e})}?${s.toString()}`,method:T.Z.UserListContributionNotificationSuspended.method}))}static flagFeedObject(e,t,n,s){return(0,P.N)(Object.assign(Object.assign({},s),{url:T.Z.Flag.url({type:e,id:t}),method:T.Z.Flag.method,data:n}))}static feedObjectFlagStatus(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.FlagStatus.url({type:e,id:t}),method:T.Z.FlagStatus.method}))}static feedObjectFlagList(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.FeedObjectFlagList.url({type:e,id:t}),method:T.Z.FeedObjectFlagList.method}))}static hideFeedObject(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.HideFeedObject.url({type:e,id:t}),method:T.Z.HideFeedObject.method}))}static feedObjectHideStatus(e,t,n){return(0,P.N)(Object.assign(Object.assign({},n),{url:T.Z.FeedObjectHideStatus.url({type:e,id:t}),method:T.Z.FeedObjectHideStatus.method}))}}class x{static getAllFeedObjects(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.getAllFeedObjects(e,t,n)}))}static getUncommentedFeedObjects(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.getUncommentedFeedObjects(e,t,n)}))}static searchFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.searchFeedObject(e,t,n)}))}static createFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.createFeedObject(e,t,n)}))}static getSpecificFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.getSpecificFeedObject(e,t,n)}))}static updateFeedObject(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.updateFeedObject(e,t,n,o)}))}static deleteFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.deleteFeedObject(e,t,n)}))}static feedObjectContributorsList(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectContributorsList(e,t,n,o)}))}static feedObjectSharesList(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectSharesList(e,t,n,o)}))}static feedObjectUserSharesList(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectUserSharesList(e,t,n)}))}static restoreFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.restoreFeedObject(e,t,n)}))}static relatedFeedObjects(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.relatedFeedObjects(e,t,n,o)}))}static voteFeedObject(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.voteFeedObject(e,t,n,o)}))}static feedObjectVotes(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectVotes(e,t,n,o)}))}static feedObjectPollVote(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectPollVote(e,t,n,o)}))}static feedObjectPollVotesList(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectPollVotesList(e,t,n,o)}))}static followFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.followFeedObject(e,t,n)}))}static feedObjectFollowingList(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectFollowingList(e,t,n)}))}static checkIfFollowingFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.checkIfFollowingFeedObject(e,t,n)}))}static suspendFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.suspendFeedObject(e,t,n)}))}static checkIfSuspendedFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.checkIfSuspendedFeedObject(e,t,n)}))}static feedObjectSuspendedList(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectSuspendedList(e,t,n)}))}static flagFeedObject(e,t,n,o){return(0,s.mG)(this,void 0,void 0,(function*(){return R.flagFeedObject(e,t,n,o)}))}static feedObjectFlagList(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectFlagList(e,t,n)}))}static feedObjectFlagStatus(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectFlagStatus(e,t,n)}))}static hideFeedObject(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.hideFeedObject(e,t,n)}))}static feedObjectHideStatus(e,t,n){return(0,s.mG)(this,void 0,void 0,(function*(){return R.feedObjectHideStatus(e,t,n)}))}}var A=n(24243),k=n(59219),B=n(99960),$=n(83781),D=n(54545),U=n(15927),M=n(4105),G=n(31713);const w={root:`${G.B}-root`,title:`${G.B}-title`,noResults:`${G.B}-no-results`,showMore:`${G.B}-show-more`,dialogRoot:`${G.B}-dialog-root`,endMessage:`${G.B}-end-message`},V=(0,i.ZP)(_.Z,{name:G.B,slot:"Root"})((()=>({}))),K=(0,i.ZP)(L.Z,{name:G.B,slot:"DialogRoot"})((()=>({}))),W=[O.Rl,O.OM,O.Ao];const X=function(e){const t=(0,C.Z)({props:e,name:G.B}),{feedObject:n,feedObjectId:i,feedObjectType:v,template:L=S.r.SNIPPET,className:_=null,autoHide:P=null,limit:I=5,FeedObjectProps:R={template:S.r.SNIPPET},cacheStrategy:X=k.n2.CACHE_FIRST,onHeightChange:H,onStateChange:z,DialogProps:Y={}}=t,q=(0,s._T)(t,["feedObject","feedObjectId","feedObjectType","template","className","autoHide","limit","FeedObjectProps","cacheStrategy","onHeightChange","onStateChange","DialogProps"]),[J,Q]=(0,o.useReducer)(U.Xi,{isLoadingNext:!1,next:null,cacheKey:j.hu(j.Tb,i),cacheStrategy:X,visibleItems:I},U.Mv),[ee,te]=(0,o.useState)(!1),ne=(0,g.LD)(),se=(0,h.ko)(),{obj:oe}=(0,f.Z)({id:i,feedObject:n,feedObjectType:v}),ie=(0,r.Z)(),ce=(0,a.Z)(ie.breakpoints.down("md")),re=oe?oe.id:null,ae=(0,o.useMemo)((()=>{const e={};return W.map((t=>e[t]=t in se.preferences?se.preferences[t].value:null)),e}),[se.preferences]),de=(0,o.useMemo)((()=>()=>{J.initialized||J.isLoadingNext||(Q({type:U.dK.LOADING_NEXT}),x.relatedFeedObjects(oe.type,oe.id,{limit:I}).then((e=>{Q({type:U.dK.LOAD_NEXT_SUCCESS,payload:Object.assign(Object.assign({},e),{initialized:!0})})})).catch((e=>{Q({type:U.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),B.Y.error(b.J,e)})))}),[re,J.initialized,J.isLoadingNext,I,Q]);(0,o.useEffect)((()=>{var e;let t;if(void 0!==ne.user&&re&&ae&&(ae[O.Ao]||!ae[O.Ao]&&(null===(e=ne.user)||void 0===e?void 0:e.id)))return t=setTimeout(de),()=>{t&&clearTimeout(t)}}),[re,ne.user,ae]),(0,o.useEffect)((()=>{ee&&J.next&&J.results.length===I&&J.initialized&&(Q({type:U.dK.LOADING_NEXT}),x.relatedFeedObjects(oe.type,oe.id,{offset:I,limit:10}).then((e=>{Q({type:U.dK.LOAD_NEXT_SUCCESS,payload:e})})).catch((e=>{Q({type:U.dK.LOAD_NEXT_FAILURE,payload:{errorLoadNext:e}}),B.Y.error(b.J,e)})))}),[ee,I,J.next,J.initialized,J.results.length,oe]),(0,o.useEffect)((()=>{H&&H()}),[J.results]),(0,o.useEffect)((()=>{(ae[O.Ao]||ne.user)&&null!==(null==oe?void 0:oe.id)&&X===k.n2.NETWORK_ONLY&&z&&z({cacheStrategy:k.n2.CACHE_FIRST})}),[null==oe?void 0:oe.id,ae,X,ne.user]);const le=(0,o.useMemo)((()=>()=>{Q({type:U.dK.LOADING_NEXT}),A.Z.request({url:J.next,method:T.Z.RelatedFeedObjects.method}).then((e=>{Q({type:U.dK.LOAD_NEXT_SUCCESS,payload:e.data})}))}),[Q,J.next]),ue=()=>{te((e=>!e))};if(!ae[O.Ao]&&!ne.user||P&&!J.count&&J.initialized)return o.createElement(D.Z,null);if(!J.initialized)return o.createElement(M.Z,null);const me=()=>ae[O.Rl]&&(ae[O.OM]&&null===ne.user||!ae[O.OM])?o.createElement(d.ZP,null,o.createElement(E.Z,Object.assign({position:$.n.POSITION_RELATED_POSTS_COLUMN},oe.categories.length&&{categoriesId:oe.categories.map((e=>e.id))}))):null,be=Math.floor(Math.random()*(Math.min(J.count,5)-1+1)+1),Oe=o.createElement(l.Z,null,o.createElement(u.Z,{className:w.title,variant:"h5"},o.createElement(Z.Z,{id:"ui.relatedFeedObjectsWidget.title",defaultMessage:"ui.relatedFeedObjectsWidget.title"})),J.count?o.createElement(o.Fragment,null,o.createElement(c.Z,null,J.results.slice(0,J.visibleItems).map(((e,t)=>o.createElement(o.Fragment,{key:t},o.createElement(d.ZP,{key:e.id},o.createElement(p.Z,Object.assign({elevation:0,feedObject:e,template:L},R))),be===t&&me())))),J.count>J.visibleItems&&o.createElement(m.Z,{className:w.showMore,onClick:ue},o.createElement(Z.Z,{id:"ui.categoryTrendingFeedWidget.button.showAll",defaultMessage:"ui.categoryTrendingFeedWidget.button.showAll"}))):o.createElement(u.Z,{className:w.noResults,variant:"body2"},o.createElement(Z.Z,{id:"ui.relatedFeedObjectsWidget.noResults",defaultMessage:"ui.relatedFeedObjectsWidget.noResults"})),ee&&o.createElement(K,Object.assign({className:w.dialogRoot,title:o.createElement(Z.Z,{defaultMessage:"ui.categoryTrendingFeedWidget.title",id:"ui.categoryTrendingFeedWidget.title",values:{total:J.count}}),onClose:ue,open:ee},Y),o.createElement(y.Z,{dataLength:J.results.length,next:le,hasMoreNext:Boolean(J.next),loaderNext:o.createElement(F.Z,Object.assign({elevation:0},R)),height:ce?"100%":400,endMessage:o.createElement(u.Z,{className:w.endMessage},o.createElement(Z.Z,{id:"ui.categoryTrendingFeedWidget.noMoreResults",defaultMessage:"ui.categoryTrendingFeedWidget.noMoreResults"}))},o.createElement(c.Z,null,J.results.map((e=>o.createElement(d.ZP,{key:e.id},o.createElement(p.Z,Object.assign({elevation:0,feedObject:e},R)))))))));return o.createElement(V,Object.assign({className:N()(w.root,_)},q),Oe)}},15927:(e,t,n)=>{n.d(t,{Mv:()=>c,Xi:()=>i,dK:()=>o});var s=n(59219);const o={LOADING_NEXT:"_loading_next",LOADING_PREVIOUS:"_loading_previous",LOAD_NEXT_SUCCESS:"_load_next_success",LOAD_PREVIOUS_SUCCESS:"_load_previous_success",LOAD_NEXT_FAILURE:"_load_next_failure",LOAD_PREVIOUS_FAILURE:"_load_previous_failure",SET_RESULTS:"_set_results",SET_VISIBLE_ITEMS:"_set_visible_items",RESET:"_reset"};function i(e,t){var n;let i=Object.assign({},e);switch(t.type){case o.LOADING_NEXT:i=Object.assign(Object.assign({},e),{isLoadingNext:!0,errorLoadNext:null});break;case o.LOADING_PREVIOUS:i=Object.assign(Object.assign({},e),{isLoadingPrevious:!0,errorLoadPrevious:null});break;case o.LOAD_NEXT_SUCCESS:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,count:t.payload.count,next:t.payload.next?t.payload.next:null,results:[...e.results,...t.payload.results],errorLoadNext:null,initialized:(null===(n=t.payload)||void 0===n?void 0:n.initialized)||!0});break;case o.LOAD_PREVIOUS_SUCCESS:i=Object.assign(Object.assign({},e),{isLoadingPrevious:!1,count:t.payload.count,previous:t.payload.previous?t.payload.previous:null,results:[...t.payload.results,...e.results],errorPreviousNext:null});break;case o.SET_RESULTS:i=Object.assign(Object.assign(Object.assign({},e),{results:[...t.payload.results]}),t.payload.count?{count:t.payload.count}:{});break;case o.SET_VISIBLE_ITEMS:i=Object.assign(Object.assign({},e),{visibleItems:t.payload.visibleItems});break;case o.LOAD_NEXT_FAILURE:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadNext:t.payload.error});break;case o.LOAD_PREVIOUS_FAILURE:i=Object.assign(Object.assign({},e),{isLoadingNext:!1,errorLoadPrevious:t.payload.error});break;case o.RESET:i={isLoadingNext:!1,next:null,results:[],count:0,errorLoadNext:null,initialized:!1}}return s.ZP.set(i.cacheKey,i),i}function c(e){let t={cacheKey:e.cacheKey?e.cacheKey:null,count:e.count?e.count:0,results:e.results?e.results:[],next:e.next?e.next:null,previous:e.previous?e.previous:null,isLoadingNext:!!e.isLoadingNext&&e.isLoadingNext,isLoadingPrevious:!!e.isLoadingPrevious&&e.isLoadingPrevious,visibleItems:e.visibleItems?e.visibleItems:null,initialized:!1};if(t.cacheKey&&s.ZP.hasKey(t.cacheKey)&&e.cacheStrategy!==s.n2.NETWORK_ONLY){const e=s.ZP.get(t.cacheKey);return Object.assign(Object.assign({},t),e)}return t}}}]);