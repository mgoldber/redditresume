(function(t){function e(e){for(var s,i,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],s=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var s={},n={app:0},a=[];function i(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=s,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(o,s,function(e){return t[e]}.bind(null,s));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0cb7":function(t,e,o){t.exports=o.p+"img/selfierun.6b82d7eb.png"},"12f2":function(t,e,o){},1686:function(t,e,o){},1771:function(t,e,o){var s={"./EatMeSignUp.jpeg":"3b5c","./apple_logo.png":"425b","./headshot_1.jpg":"f4c2","./hootsuite_logo.png":"bc37","./junocollege_logo.jpg":"562b","./league_logo.png":"cc88","./magnetforensics_logo.png":"b048","./placeholder.png":"5b4d","./secondcloset_logo.png":"322c","./selfierun.png":"0cb7","./techingoutcover.png":"8438","./traderev_logo.png":"d1aa"};function n(t){var e=a(t);return o(e)}function a(t){if(!o.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="1771"},"203c":function(t,e,o){},"322c":function(t,e,o){t.exports=o.p+"img/secondcloset_logo.b1df1f4d.png"},"3b5c":function(t,e,o){t.exports=o.p+"img/EatMeSignUp.169bfd3b.jpeg"},"3d1a":function(t,e,o){},"3d5d":function(t,e,o){},"425b":function(t,e,o){t.exports=o.p+"img/apple_logo.77c18dcf.png"},"4b79":function(t,e,o){"use strict";var s=o("12f2"),n=o.n(s);n.a},"53d2":function(t,e,o){"use strict";var s=o("3d5d"),n=o.n(s);n.a},"562b":function(t,e,o){t.exports=o.p+"img/junocollege_logo.78d8480c.jpg"},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{staticClass:"container"},[o("navbar"),o("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{app:"",color:"white"}},[o("span",{staticClass:"icon"},[o("v-icon",{on:{click:function(e){return t.$router.push("/")}}},[t._v("mdi-rabbit")])],1),o("v-toolbar-title",{staticClass:"website-name hidden-xs-and-down",style:{cursor:"pointer"},attrs:{color:"primary"},on:{click:function(e){return t.$router.push("/")}}},[t._v("MARKIT")]),o("v-menu",{attrs:{disabled:t.disabled,absolute:t.absolute,"open-on-hover":t.openOnHover,"close-on-click":t.closeOnClick,"close-on-content-click":t.closeOnContentClick,"offset-x":t.offsetX,"offset-y":t.offsetY},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[o("v-btn",t._g({staticClass:"subredditBtn",attrs:{color:"transparent",depressed:""}},s),[o("v-icon",{attrs:{left:""},domProps:{textContent:t._s(t.getSubredditIcon(t.currentSubreddit))}}),t._v(" "+t._s(t.currentSubreddit)+" "),o("v-icon",{attrs:{right:""}},[t._v("mdi-menu-down")])],1)]}}]),model:{value:t.communities,callback:function(e){t.communities=e},expression:"communities"}},[o("v-list",t._l(t.subreddits,(function(e,s){return o("v-list-item",{key:s,attrs:{to:"/"+e.name+"/"+e._id,replace:""},on:{click:function(o){return t.setSubreddit(e.name)}}},[o("v-list-item-icon",[o("v-icon",{domProps:{textContent:t._s(t.getSubredditIcon(e.name))}})],1),o("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1),o("v-spacer"),o("v-spacer"),o("v-menu",{attrs:{disabled:t.disabled,absolute:t.absolute,"open-on-hover":t.openOnHover,"close-on-click":t.closeOnClick,"close-on-content-click":t.closeOnContentClick,"offset-x":t.offsetX,"offset-y":t.offsetY},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[o("v-btn",t._g({attrs:{icon:""}},s),[o("v-icon",{attrs:{size:"35"}},[t._v("mdi-account")])],1)]}}]),model:{value:t.user,callback:function(e){t.user=e},expression:"user"}},[o("v-list",[o("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.items,(function(e,s){return o("v-list-item",{key:s,attrs:{href:e.url,target:"Email"===e.title?"":"_blank"}},[o("v-list-item-icon",[o("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),o("v-list-item-content",[o("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}})],1)],1)})),1)],1)],1)],1)},r=[],c=(o("fb6a"),o("b0c0"),{name:"Navbar",data:function(){return{item:1,items:[{title:"LinkedIn",icon:"mdi-linkedin",url:"https://www.linkedin.com/in/markdgoldberg/"},{title:"Twitter",icon:"mdi-twitter",url:"https://twitter.com/mgoldber"},{title:"GitHub",icon:"mdi-github",url:"https://github.com/mgoldber"},{title:"Email",icon:"mdi-email",url:"mailto:hello@goldbergmark.com"}],subreddits:this.$store.state.subreddits,currentSubreddit:this.getSubreddit(),disabled:!1,absolute:!1,openOnHover:!1,user:!1,communities:!1,closeOnClick:!0,closeOnContentClick:!0,offsetX:!1,offsetY:!0}},created:function(){0===this.$store.state.subreddits.length&&this.$store.dispatch("fetch_all_subreddits")},watch:{$route:function(t){"ADetailedPost"===t.name?this.setSubreddit(t.params.subredditName):"homeSub"===t.name?this.setSubreddit("Home"):this.setSubreddit(t.name)}},methods:{setSubreddit:function(t){this.currentSubreddit=t},getSubreddit:function(){return"ADetailedPost"===this.$route.name?this.$route.params.subredditName:"homeSub"===this.$route.name?"Home":this.capitalizeFirst(this.$route.name)},capitalizeFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},getSubredditIcon:function(t){switch(t=this.capitalizeFirst(t),t){case"Home":return"mdi-rabbit";case"Jobs":return"mdi-briefcase";case"Projects":return"mdi-code-braces";case"AMA":return"mdi-account-heart";default:return"mdi-rabbit"}}}}),l=c,d=(o("6d39"),o("2877")),u=o("6544"),m=o.n(u),p=o("40dc"),f=o("8336"),v=o("132d"),b=o("8860"),h=o("da13"),g=o("5d23"),_=o("1baa"),C=o("34c3"),A=o("e449"),w=o("2fa4"),x=o("2a7f"),P=Object(d["a"])(l,i,r,!1,null,"8b7ab0e2",null),k=P.exports;m()(P,{VAppBar:p["a"],VBtn:f["a"],VIcon:v["a"],VList:b["a"],VListItem:h["a"],VListItemContent:g["a"],VListItemGroup:_["a"],VListItemIcon:C["a"],VListItemTitle:g["c"],VMenu:A["a"],VSpacer:w["a"],VToolbarTitle:x["a"]});var S={name:"App",components:{Navbar:k},data:function(){return{}}},y=S,V=(o("ab70"),o("7496")),O=Object(d["a"])(y,n,a,!1,null,"56121a9a",null),D=O.exports;m()(O,{VApp:V["a"]});var I=o("9483");Object(I["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var j=o("8c4f"),E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},t._l(t.posts,(function(t){return o("apost",{key:t._id,attrs:{post:t}})})),1)},T=[],N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto post-card",attrs:{flat:"",outlined:"","max-width":"750",link:"",hover:"",to:{path:"/post/"+t.post.subredditName+"/"+t.post._id}}},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{justify:"space-between"}},[o("v-col",{staticClass:"fill-height hidden-sm-and-down content-card upvote-bar",attrs:{cols:"12",md:"1",sm:"1",xs:"1"}},[o("v-row",{staticClass:"flex-column ma-0",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"px-0"},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-arrow-up-bold")])],1)],1),o("v-col",{staticClass:"px-0"},[o("v-btn",{attrs:{icon:""}},[o("span",[t._v(t._s(t.post.votes))])])],1),o("v-col",{staticClass:"px-0"},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-arrow-down-bold")])],1)],1)],1)],1),o("v-col",{staticClass:"content-card",attrs:{cols:"12",md:"11",sm:"11",xs:"11"}},[o("v-row",{staticClass:"flex-column ma-1 fill-height"},[o("v-card-subtitle",{staticClass:"pb-0 content-card",class:{"pl-3":t.$vuetify.breakpoint.smAndDown}},[o("v-icon",{domProps:{textContent:t._s(t.getSubredditIcon(t.post.subredditName))}}),t._v(" m/"+t._s(t.capitalizeFirst(t.post.subredditName))+" • Posted by u/"+t._s(t.post.author)+" • "+t._s(t.post.dateRange))],1),t.show?o("v-card-text",{staticClass:"text--primary heading",class:{"pl-3":t.$vuetify.breakpoint.smAndDown}},[o("div",[t._v(t._s(t.post.title))])]):t._e(),t.show?o("v-img",{staticClass:"white--text",attrs:{height:"300px",contain:"",src:t.getImageUrl.icon}}):o("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[o("v-card-text",{staticClass:"text--primary heading",class:{"pl-3":t.$vuetify.breakpoint.smAndDown}},[o("div",[t._v(t._s(t.post.title))])]),o("v-avatar",{staticClass:"ma-3",attrs:{size:"130",tile:""}},[o("v-img",{attrs:{src:t.getImageUrl.icon}})],1)],1),o("thepostactions",{attrs:{post:t.post,isDetailed:!1,numOfComments:t.post.comments.length}})],1)],1)],1)],1)],1)},M=[],F=o("5530"),L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card-actions",[o("v-row",{class:{"pl-3":t.$vuetify.breakpoint.smAndDown},attrs:{align:"center"}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-arrow-up-bold")])],1),o("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticClass:"subheading mr-2 interactive-item"},[t._v(t._s(t.post.votes))]),o("span",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-arrow-down-bold")])],1),o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-comment")]),t._v(t._s(t.numOfComments)+" comments")],1),t.isDetailed?o("v-btn",{staticClass:"action-btn",attrs:{depressed:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),t.award(e)}}},[o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-seal")]),t._v("Give award")],1)]):o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-seal")]),t._v("Give award")],1),o("adialogbox",{ref:"linkedinDialog",attrs:{dialogData:{title:"Wow an award!",body:"The only award I need is your friendship...",rejectText:"Don't connect",confirmText:"Connect on LinkedIn",sendFunc:function(e){t.submit("https://www.linkedin.com/in/markdgoldberg/")}}}}),t.isDetailed?o("v-btn",{staticClass:"action-btn",attrs:{depressed:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),t.share(e)}}},[o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-share")]),t._v("Share")],1)]):o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-share")]),t._v("Share")],1),o("adialogbox",{ref:"twitterDialog",attrs:{dialogData:{title:"Wow a share!",body:"Sounds like you want to be Twitter friends...",rejectText:"Don't follow",confirmText:"Connect on Twitter",sendFunc:function(e){t.submit("https://twitter.com/mgoldber")}}}}),t.isDetailed?o("v-btn",{staticClass:"action-btn",attrs:{depressed:"",color:"transparent"},on:{click:function(e){return e.stopPropagation(),t.save(e)}}},[o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-bookmark-plus")]),t._v("Save")],1)]):o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-bookmark-plus")]),t._v("Save")],1),o("adialogbox",{ref:"githubDialog",attrs:{dialogData:{title:"Saving for later?",body:"Sounds like version control. Connect on GitHub?",rejectText:"No way!",confirmText:"Connect on GitHub",sendFunc:function(e){t.submit("https://github.com/mgoldber")}}}})],1)],1)},$=[],B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{"max-width":"350"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-spacer"),o("v-card-title",{staticClass:"headline"},[t._v(t._s(t.dialogData.title))]),o("v-card-text",[t._v(t._s(t.dialogData.body))]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" "+t._s(t.dialogData.rejectText)+" ")]),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.dialogData.sendFunc}},[t._v(" "+t._s(t.dialogData.confirmText)+" ")])],1)],1)],1)},z=[],U={name:"ADialogBox",props:["dialogData"],data:function(){return{dialog:!1}},methods:{setValue:function(t){this.dialog=t}}},J=U,R=o("b0af"),G=o("99d9"),Q=o("169a"),K=Object(d["a"])(J,B,z,!1,null,null,null),H=K.exports;m()(K,{VBtn:f["a"],VCard:R["a"],VCardActions:G["a"],VCardText:G["c"],VCardTitle:G["d"],VDialog:Q["a"],VSpacer:w["a"]});var X={name:"ThePostActions",components:{adialogbox:H},props:["post","isDetailed","numOfComments"],data:function(){return{dialog:!1}},methods:{award:function(){this.$refs.linkedinDialog.setValue(!0)},share:function(){this.$refs.twitterDialog.setValue(!0)},save:function(){this.$refs.githubDialog.setValue(!0)},submit:function(t){window.open(t,"_blank"),this.$refs.dialogComp.setValue(!1)}}},q=X,W=(o("64cd"),o("0fd9")),Y=Object(d["a"])(q,L,$,!1,null,"6ebc92dc",null),Z=Y.exports;m()(Y,{VBtn:f["a"],VCardActions:G["a"],VIcon:v["a"],VRow:W["a"]});var tt={name:"APost",components:{thepostactions:Z},props:["post","subreddit"],data:function(){return{err:"",show:!1}},computed:{getImageUrl:function(){return Object(F["a"])(Object(F["a"])({},this.post),{},{icon:o("1771")("./"+this.post.img)})}},created:function(){"jobs"!==this.post.subredditName&&(this.show=!0)},methods:{capitalizeFirst:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},getSubredditIcon:function(t){switch(t=this.capitalizeFirst(t),t){case"Home":return"mdi-rabbit";case"Jobs":return"mdi-briefcase";case"Projects":return"mdi-code-braces";case"AMA":return"mdi-account-heart";default:return"mdi-rabbit"}}}},et=tt,ot=(o("9097"),o("8212")),st=o("62ad"),nt=o("a523"),at=o("adda"),it=Object(d["a"])(et,N,M,!1,null,"1d20f454",null),rt=it.exports;m()(it,{VAvatar:ot["a"],VBtn:f["a"],VCard:R["a"],VCardSubtitle:G["b"],VCardText:G["c"],VCol:st["a"],VContainer:nt["a"],VIcon:v["a"],VImg:at["a"],VRow:W["a"]});var ct={name:"TheHomePage",components:{apost:rt},data:function(){return{err:"",posts:this.$store.state.topPosts}},created:function(){0===this.$store.state.topPosts.length&&this.$store.dispatch("fetch_top_posts")}},lt=ct,dt=(o("c2d6"),Object(d["a"])(lt,E,T,!1,null,"2f3fc45e",null)),ut=dt.exports,mt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"jobs"},t._l(t.jobPosts,(function(t){return o("apost",{key:t._id,attrs:{post:t}})})),1)},pt=[],ft={name:"TheJobsPage",components:{apost:rt},data:function(){return{err:"",jobPosts:this.$store.state.jobPosts}},created:function(){0===this.$store.state.jobPosts.length&&this.$store.dispatch("fetch_posts_for_jobs",{subredditId:this.$route.params.subredditId})}},vt=ft,bt=(o("590b"),Object(d["a"])(vt,mt,pt,!1,null,"31cfecc6",null)),ht=bt.exports,gt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projects"},t._l(t.projectPosts,(function(t){return o("apost",{key:t._id,attrs:{post:t}})})),1)},_t=[],Ct={name:"TheProjectsPage",components:{apost:rt},data:function(){return{err:"",projectPosts:this.$store.state.projectPosts}},created:function(){0===this.$store.state.projectPosts.length&&this.$store.dispatch("fetch_posts_for_projects",{subredditId:this.$route.params.subredditId})}},At=Ct,wt=(o("d974"),Object(d["a"])(At,gt,_t,!1,null,"6c4f3882",null)),xt=wt.exports,Pt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ama"},t._l(t.amaPosts,(function(t){return o("apost",{key:t._id,attrs:{post:t}})})),1)},kt=[],St={name:"TheAMAPage",components:{apost:rt},data:function(){return{err:"",amaPosts:this.$store.state.amaPosts}},created:function(){0===this.$store.state.amaPosts.length&&this.$store.dispatch("fetch_posts_for_ama",{subredditId:this.$route.params.subredditId})}},yt=St,Vt=(o("9e2c"),Object(d["a"])(yt,Pt,kt,!1,null,"f7909c66",null)),Ot=Vt.exports,Dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"mx-auto post-wrapper",attrs:{flat:"",outlined:"","max-width":"750"}},[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{staticClass:"text-center pl-0 fill-height content-card upvote-bar d-none d-md-block",attrs:{cols:"12",md:"1"}},[o("v-row",{staticClass:"flex-column ma-0",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"px-0"},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-arrow-up-bold")])],1)],1),o("v-col",{staticClass:"px-0"},[o("v-btn",{attrs:{icon:""}},[o("span",[t._v(t._s(t.post.votes))])])],1),o("v-col",[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-arrow-down-bold")])],1)],1)],1)],1),o("v-col",{staticClass:"content-card",attrs:{cols:"12",md:"11"}},[o("v-row",{staticClass:"flex-column ma-1 fill-height"},[o("v-card-subtitle",{staticClass:"pb-0 content-card info-row"},[o("v-icon",{domProps:{textContent:t._s(t.getSubredditIcon(t.post.subredditName))}}),t._v(" m/"+t._s(t.capitalizeFirst(t.post.subredditName))+" • Posted by u/"+t._s(t.post.author)+" • "+t._s(t.post.dateRange))],1),t.show?o("v-card-title",{staticClass:"heading text--primary"},[o("p",[t._v(t._s(t.post.title))])]):t._e(),t.show?o("v-card-text",{staticClass:"text--primary"},[o("p",[t._v(t._s(t.post.body))])]):o("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"headline wrap-text-title mb-1"},[t._v(t._s(t.post.title))]),o("v-list-item-subtitle",{staticClass:"wrap-text"},[t._v(t._s(t.post.body))])],1),o("v-list-item-avatar",{staticClass:"ma-3 hidden-sm-and-down",attrs:{size:"100",tile:""}},[o("v-img",{attrs:{src:t.getImageUrl.icon,alt:t.post.author+" logo"}})],1)],1)],1),t.podcasts?o("v-card-text",{staticClass:"text--primary"},[o("div",{attrs:{id:"buzzsprout-large-player-842749"}})]):t._e(),t.show&&!t.podcasts?o("v-img",{staticClass:"white--text",attrs:{height:"300px",contain:"",src:t.getImageUrl.icon,alt:t.post.author+" logo"}}):t._e(),o("thepostactions",{attrs:{post:t.post,isDetailed:!0,numOfComments:t.comments.length}})],1)],1)],1),t.showCommentForm?o("acommentform"):t._e(),t._l(t.comments,(function(e){return o("v-row",{key:e._id},[o("acomment",{attrs:{comment:e,isSubComment:!1}}),t._l(t.getSubCommentArray(e._id),(function(t){return o("v-row",{key:t._id,attrs:{subComment:t}},[o("acomment",{attrs:{comment:t,isSubComment:!0}})],1)}))],2)}))],2)],1)},It=[],jt=(o("99af"),o("4de4"),o("bc3a")),Et=o.n(jt),Tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-form",{ref:"form",staticClass:"form-container"},[o("v-card",{attrs:{flat:""}},[o("v-row",[o("v-col",{attrs:{cols:"12",md:"3"}},[o("p",[t._v("Comment as:")])]),o("v-col",{attrs:{cols:"12",md:"6"}},[o("v-text-field",{staticClass:"comment-name",attrs:{placeholder:"MarkG (please use real name)",disabled:t.disabled,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),o("v-textarea",{staticClass:"comment-area",attrs:{"auto-grow":t.autoGrow,clearable:t.clearable,counter:!!t.counter&&t.counter,filled:t.filled,flat:t.flat,disabled:t.disabled,hint:t.hint,label:t.label,loading:t.loading,"no-resize":t.noResize,outlined:t.outlined,"persistent-hint":t.persistentHint,placeholder:t.placeholder,rounded:t.rounded,"row-height":t.rowHeight,rows:t.rows,shaped:t.shaped,"single-line":t.singleLine,solo:t.solo},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),o("v-card-actions",[o("v-row",[o("v-spacer"),o("v-btn",{staticClass:"mr-4 submit-btn",attrs:{color:"primary",disabled:t.disabled},on:{click:function(e){return e.stopPropagation(),t.submitComment(e)}}},[t._v("Comment ")])],1)],1),o("adialogbox",{ref:"dialogComp",attrs:{dialogData:{title:"Support Mark?",body:"Are you sure you want to submit this comment?",rejectText:"No, maybe later",confirmText:"Yes, absolutely",sendFunc:t.submit}}})],1)],1)},Nt=[],Mt={name:"ACommentForm",components:{adialogbox:H},data:function(){return{name:"",autoGrow:!1,autofocus:!0,clearable:!1,dialog:!1,counter:0,filled:!1,flat:!1,disabled:this.isDisabled(),hint:"",label:"",loading:!1,comment:"",noResize:!0,outlined:!1,persistentHint:!1,placeholder:"Write something nice about Mark here. \n\nThis form will send an email to Mark before actually showing up on the site.",rounded:!1,rowHeight:24,rows:5,shaped:!1,singleLine:!1,solo:!1}},methods:{submitComment:function(){this.$refs.dialogComp.setValue(!0)},submit:function(){this.$store.dispatch("send_comment_form",{name:this.name,comment:this.comment}),this.$refs.dialogComp.setValue(!1),this.name="",this.comment=""},isDisabled:function(){return this.$store.state.comments.length>0}}},Ft=Mt,Lt=(o("cdc7"),o("4bd4")),$t=o("8654"),Bt=o("a844"),zt=Object(d["a"])(Ft,Tt,Nt,!1,null,"c9ff6672",null),Ut=zt.exports;m()(zt,{VBtn:f["a"],VCard:R["a"],VCardActions:G["a"],VCol:st["a"],VForm:Lt["a"],VRow:W["a"],VSpacer:w["a"],VTextField:$t["a"],VTextarea:Bt["a"]});var Jt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-row",{staticClass:"comment",class:{"comment-row":t.isSubComment}},[o("v-col",{staticClass:"text-center pl-0 fill-height d-none d-md-block",attrs:{cols:"12",md:"1",sm:"1",xs:"1"}},[o("v-row",{staticClass:"flex=column ma-0",attrs:{"no-gutters":""}},[o("v-col",{staticClass:"px-0"},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-account")])],1)],1)],1)],1),o("v-col",{attrs:{cols:"12",md:"11",sm:"11",xs:"11"}},[o("v-row",{staticClass:"flex-column ma-1 fill-height"},[o("v-card-text",{staticClass:"comment-writer"},[t._v(" "+t._s(t.comment.author)+" "),o("v-icon",{class:{"is-visible":!t.isSubComment},attrs:{color:"blue"}},[t._v("mdi-pencil")])],1),o("v-card-text",{staticClass:"text--primary comment-body"},[t._v(" "+t._s(t.comment.body)+" ")]),o("v-card-actions",[o("v-row",{staticClass:"actions-row",attrs:{align:"center"}},[o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-arrow-up-bold")])],1),o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-arrow-down-bold")])],1),o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-comment")]),t._v("Reply")],1),o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-seal")]),t._v("Give award")],1),o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-share")]),t._v("Share")],1),o("span",{staticClass:"subheading mr-2 interactive-item"},[o("v-icon",{staticClass:"action-icon"},[t._v("mdi-bookmark-plus")]),t._v("Save")],1)])],1)],1)],1)],1)},Rt=[],Gt={name:"AComment",props:["comment","isSubComment"]},Qt=Gt,Kt=(o("4b79"),Object(d["a"])(Qt,Jt,Rt,!1,null,"30bc30f2",null)),Ht=Kt.exports;m()(Kt,{VBtn:f["a"],VCardActions:G["a"],VCardText:G["c"],VCol:st["a"],VIcon:v["a"],VRow:W["a"]});var Xt="https://redditresume.herokuapp.com/",qt={name:"ADetailedPost",components:{thepostactions:Z,acomment:Ht,acommentform:Ut},data:function(){return{post:{img:"placeholder.png"},show:!1,podcasts:!1,showCommentForm:!1,comments:[],subcomments:[]}},computed:{getImageUrl:function(){return Object(F["a"])(Object(F["a"])({},this.post),{},{icon:o("1771")("./"+this.post.img)})}},mounted:function(){this.injectScript("https://www.buzzsprout.com/842749.js?container_id=buzzsprout-large-player-842749&player=large")},created:function(){this.getPostDetails(this.$route.params.id),this.getPostComments(this.$route.params.id),this.getSubComments()},methods:{injectScript:function(t){var e=document.createElement("script");e.setAttribute("src",t),e.async=!0,document.head.appendChild(e)},getPostDetails:function(t){var e=this;Et.a.get("".concat(Xt,"api/v1/post/").concat(t)).then((function(t){e.post=t.data,"jobs"!==e.post.subredditName&&(e.show=!0),"jobs"===e.post.subredditName&&(e.showCommentForm=!0),"Teching Out Podcast"===e.post.title&&(e.podcasts=!0)})).catch((function(t){console.log(t)}))},getPostComments:function(t){var e=this;Et.a.get("".concat(Xt,"api/v1/comment/").concat(t)).then((function(t){e.comments=t.data})).catch((function(t){console.log(t)}))},getSubComments:function(){var t=this;Et.a.get("".concat(Xt,"api/v1/subcomment")).then((function(e){return t.subcomments=e.data,e})).catch((function(t){console.log(t)}))},getSubCommentArray:function(t){return this.subcomments.filter((function(e){return e.commentId===t}))},capitalizeFirst:function(t){if(t)return t.charAt(0).toUpperCase()+t.slice(1)},getSubredditIcon:function(t){switch(t=this.capitalizeFirst(t),t){case"Home":return"mdi-rabbit";case"Jobs":return"mdi-briefcase";case"Projects":return"mdi-code-braces";case"AMA":return"mdi-account-heart";default:return"mdi-rabbit"}}}},Wt=qt,Yt=(o("53d2"),o("8270")),Zt=Object(d["a"])(Wt,Dt,It,!1,null,"32ad5d4e",null),te=Zt.exports;m()(Zt,{VBtn:f["a"],VCard:R["a"],VCardSubtitle:G["b"],VCardText:G["c"],VCardTitle:G["d"],VCol:st["a"],VContainer:nt["a"],VIcon:v["a"],VImg:at["a"],VListItem:h["a"],VListItemAvatar:Yt["a"],VListItemContent:g["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VRow:W["a"]}),s["a"].use(j["a"]);var ee=[{path:"/",name:"home",meta:{public:!0},component:ut},{path:"/home/:subredditId",name:"homeSub",component:ut},{path:"/jobs/:subredditId",name:"jobs",component:ht},{path:"/projects/:subredditId",name:"projects",component:xt},{path:"/AMA/:subredditId",name:"ama",component:Ot},{path:"/post/:subredditName/:id/",name:"ADetailedPost",component:te}],oe=new j["a"]({mode:"history",base:"/",scrollBehavior:function(){return{x:0,y:0}},routes:ee}),se=oe,ne=o("2f62"),ae=(o("4160"),o("159b"),"https://redditresume.herokuapp.com/"),ie={fetch_top_posts:function(t){var e=t.commit;Et.a.get("".concat(ae,"api/v1/post/top")).then((function(t){t.data=t.data.sort((function(t,e){return e["votes"]-t["votes"]})),t.data.forEach((function(t){e("APPEND_TOP_POST",t)}))})).catch((function(t){console.log(t)}))},fetch_all_subreddits:function(t){var e=t.commit;Et.a.get("".concat(ae,"api/v1/subreddit")).then((function(t){t.data.forEach((function(t){t.name=t.name.charAt(0).toUpperCase()+t.name.slice(1),e("APPEND_SUBREDDIT",t)}))})).catch((function(t){console.log(t)}))},fetch_posts_for_jobs:function(t,e){var o=t.commit;Et.a.get("".concat(ae,"api/v1/post/subreddit/").concat(e.subredditId)).then((function(t){t.data=t.data.sort((function(t,e){return e["votes"]-t["votes"]})),t.data.forEach((function(t){o("APPEND_JOB_POST",t)}))})).catch((function(t){console.log(t)}))},fetch_posts_for_projects:function(t,e){var o=t.commit;Et.a.get("".concat(ae,"api/v1/post/subreddit/").concat(e.subredditId)).then((function(t){t.data.forEach((function(t){o("APPEND_PROJECTS_POST",t)}))})).catch((function(t){console.log(t)}))},fetch_posts_for_ama:function(t,e){var o=t.commit;Et.a.get("".concat(ae,"api/v1/post/subreddit/").concat(e.subredditId)).then((function(t){t.data.forEach((function(t){o("APPEND_AMA_POST",t)}))})).catch((function(t){console.log(t)}))},send_comment_form:function(t,e){var o=t.commit;Et.a.post("".concat(ae,"api/v1/contact"),{name:e.name,comment:e.comment}).then((function(){o("APPEND_SUBMITTED_COMMENT",{name:e.name,comment:e.comment})})).catch((function(t){console.log(t)}))}},re={APPEND_TOP_POST:function(t,e){t.topPosts.push(e)},APPEND_SUBREDDIT:function(t,e){t.subreddits.push(e)},APPEND_JOB_POST:function(t,e){t.jobPosts.push(e)},APPEND_PROJECTS_POST:function(t,e){t.projectPosts.push(e)},APPEND_AMA_POST:function(t,e){t.amaPosts.push(e)},APPEND_SUBMITTED_COMMENT:function(t,e){t.comments.push(e)}};s["a"].use(ne["a"]);var ce=new ne["a"].Store({state:{articles:[],topPosts:[],subreddits:[],jobPosts:[],projectPosts:[],amaPosts:[],postDetails:{},comments:[]},mutations:re,actions:ie}),le=o("f309");s["a"].use(le["a"]);var de=new le["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:se,vuetify:de,store:ce,render:function(t){return t(D)}}).$mount("#app")},"590b":function(t,e,o){"use strict";var s=o("cee1"),n=o.n(s);n.a},"5b4d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAJFBMVEXT09Pp6enR0dHr6+vu7u7V1dXy8vL29vbOzs79/f3t7e3m5uZinoPNAAABt0lEQVR4nO3d3YqDMBQA4RiNWn3/9137Cwtduq0EOyfz3XilniEqCILpdJrOxqvhYel/6T7XvzD82/iBKY1zTpu8uW2eSjv8edC3vX+iuUvjY7ey2RNSX3nhyQ5pTUNOX961Q8mpOxfGta2dhXD3wsD3oYV4FvJZyGchXyOFS/jC3kIyC/ks5LOQz0I+C/ks5LOQz0I+C/ks5LOQz0I+C/ks5GunMK5LYXf0FDVZyHcvDP6ksRDNQj4L+Szks5DPQj4L+Szks5DPQj4L+Szks5DPQj4L+Szks5DPQr5GCpv46stCLgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOS7FX77Xw93uBQu4b8YWo6eoqZGCuP/K8hCNAv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkM9CPgv5LOSzkK+dwrhuhXGXsJ01PHqMihq5SkcLySzks5DPQj4L+Szks5DPQj4L+Szks5DPQj4L+Szks5CvmcKjx6iomTWMX3j0GBVZyGchn4V8FvJZyGchXzuFcV+fSspb4dFTVJXLmsY5x71Oc5m7NPVrF9g6/AAh2BPCcBloxAAAAABJRU5ErkJggg=="},"64cd":function(t,e,o){"use strict";var s=o("de29"),n=o.n(s);n.a},"6d39":function(t,e,o){"use strict";var s=o("203c"),n=o.n(s);n.a},8438:function(t,e,o){t.exports=o.p+"img/techingoutcover.648d3935.png"},9097:function(t,e,o){"use strict";var s=o("eadf"),n=o.n(s);n.a},"9e2c":function(t,e,o){"use strict";var s=o("f36d"),n=o.n(s);n.a},a410:function(t,e,o){},ab70:function(t,e,o){"use strict";var s=o("1686"),n=o.n(s);n.a},b048:function(t,e,o){t.exports=o.p+"img/magnetforensics_logo.f69fa1b5.png"},bc37:function(t,e,o){t.exports=o.p+"img/hootsuite_logo.5a6dd76f.png"},c2d6:function(t,e,o){"use strict";var s=o("a410"),n=o.n(s);n.a},cc88:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABNVBMVEVQHNJPGtJNGNFNGdFQG9JPG9JlN9d/Wd5+WN56U91YJtSdf+b8+/76+f77+v7s5/ptQdlOGtKfgub////x7ftuQ9pRGdNJK843UsI2VMI2U8I4T8NLJ89sQNlMF9FOGdE7SMUEvaQCwqICwaIBwqIHtaZBPMlRGtP49v22oeynjOinjeipj+mScuNUIdMDvqMBw6IBxKIHt6XVyfRXJtQHt6bUx/QDv6MAxKIAxaEGuKWfg+bUyPQ9Q8cMrKgKsacJsacPpqpCOMqWd+Tt6Prs5vru6fvFtPBWJNRNItBFM8tGMsxOINFbKtVpPNhoPNhiNNdRHdJRG9JCOconc7kndLkmdLkrarxKKM41VMIAxqEAx6EJs6dFNMtRGtI8RsYVmK4Umq4bjLJILs1PHtFNI9BQHdIq7/5+AAAAAW9yTlQBz6J3mgAAAclJREFUeF7t2VlTE0EUhuEQJrigKC4DRBAQNYoLhEUTZFMBBTVqVBZBZf//P4ELAlyd7p5KJvXFep/rPlX91lxMV3cmAwAAAAAAAAAAAAAAAADh2rKm9sg3LCTXcemy5crVnG9cR7bz2nVD142b3b5xHdlbt0137hLSfISoIUQNIWoIUUOIGkLUEKKGEDWEqCFEDSFqCFFDiBpC1BCihpAmimKHs3fOFgiJenr78oa+e/21EmfIwP1Bv9Rj46HhByOGh48eF05XuUKePB195vX8xUv3PuoWD42NW4oTISFhJqdSfo53hkw3LuQVIYEISYiQUIQkREgoQhIiJBQhCRESipCECAlFSEKEhCIkIUJC/Uchr0uW8sx5yBvfRn1m0w4pzM0vWBbfvquFtL9fWq7LyoePKYdkVtdsnz7XFkVfKl/rUvn23bmLRqg6nC/KddepzbEDAIAhKjj4hoVUf/z8ZVnf2Ez7n9048Vbxd9mwvfPnr29eRpwfMY/IpYW1iwOAOkLUEKKGEDWEqCFEDSFqCFFDiBpC1BCihhA1hKiJt4rWRWNr3TQW/u3umfYPWueLZA6PbKvHvmkAAAAAAAAAAAAAAAAAgLITYUqcZynHrD8AAAAASUVORK5CYII="},cdc7:function(t,e,o){"use strict";var s=o("d10c"),n=o.n(s);n.a},cee1:function(t,e,o){},d10c:function(t,e,o){},d1aa:function(t,e,o){t.exports=o.p+"img/traderev_logo.16493faf.png"},d974:function(t,e,o){"use strict";var s=o("3d1a"),n=o.n(s);n.a},de29:function(t,e,o){},eadf:function(t,e,o){},f36d:function(t,e,o){},f4c2:function(t,e,o){t.exports=o.p+"img/headshot_1.9ccd2126.jpg"}});
//# sourceMappingURL=app.09e29064.js.map