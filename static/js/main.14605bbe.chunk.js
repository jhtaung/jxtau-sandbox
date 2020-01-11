(this.webpackJsonpjxtau=this.webpackJsonpjxtau||[]).push([[0],{1060:function(e,a,t){"use strict";t.r(a);t(618),t(627);var n=t(0),r=t.n(n),c=t(26),l=t.n(c),i=t(72),o=t(143),s=t(214),m=t(541),d=function(){return r.a.createElement("div",{style:{height:"700px"}},r.a.createElement(m.a,{axisBottom:{orient:"bottom",tickSize:5,tickPadding:5,tickRotation:0,legend:"transportation",legendOffset:36,legendPosition:"middle"},axisLeft:{orient:"left",tickSize:5,tickPadding:5,tickRotation:0,legend:"count",legendOffset:-40,legendPosition:"middle"},axisRight:null,axisTop:null,colors:{scheme:"nivo"},data:[{id:"japan",color:"hsl(327, 70%, 50%)",data:[{x:"plane",y:160},{x:"helicopter",y:285},{x:"boat",y:207},{x:"train",y:101},{x:"subway",y:269},{x:"bus",y:233},{x:"car",y:106},{x:"moto",y:94},{x:"bicycle",y:291},{x:"horse",y:293},{x:"skateboard",y:158},{x:"others",y:190}]},{id:"france",color:"hsl(320, 70%, 50%)",data:[{x:"plane",y:237},{x:"helicopter",y:57},{x:"boat",y:268},{x:"train",y:21},{x:"subway",y:190},{x:"bus",y:56},{x:"car",y:211},{x:"moto",y:208},{x:"bicycle",y:246},{x:"horse",y:248},{x:"skateboard",y:19},{x:"others",y:143}]},{id:"us",color:"hsl(268, 70%, 50%)",data:[{x:"plane",y:255},{x:"helicopter",y:130},{x:"boat",y:48},{x:"train",y:177},{x:"subway",y:114},{x:"bus",y:216},{x:"car",y:157},{x:"moto",y:221},{x:"bicycle",y:217},{x:"horse",y:279},{x:"skateboard",y:54},{x:"others",y:20}]},{id:"germany",color:"hsl(135, 70%, 50%)",data:[{x:"plane",y:251},{x:"helicopter",y:181},{x:"boat",y:293},{x:"train",y:61},{x:"subway",y:31},{x:"bus",y:168},{x:"car",y:62},{x:"moto",y:80},{x:"bicycle",y:92},{x:"horse",y:290},{x:"skateboard",y:255},{x:"others",y:76}]},{id:"norway",color:"hsl(225, 70%, 50%)",data:[{x:"plane",y:2},{x:"helicopter",y:212},{x:"boat",y:79},{x:"train",y:295},{x:"subway",y:19},{x:"bus",y:177},{x:"car",y:172},{x:"moto",y:112},{x:"bicycle",y:4},{x:"horse",y:190},{x:"skateboard",y:113},{x:"others",y:135}]}],legends:[{anchor:"bottom-right",direction:"column",justify:!1,translateX:100,translateY:0,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)",effects:[{on:"hover",style:{itemBackground:"rgba(0, 0, 0, .03)",itemOpacity:1}}]}],margin:{top:50,right:110,bottom:50,left:60},pointBorderColor:{from:"serieColor"},pointBorderWidth:2,pointColor:{theme:"background"},pointLabel:"y",pointLabelYOffset:-12,pointSize:10,useMesh:!0,xScale:{type:"point"},yScale:{type:"linear",min:"auto",max:"auto",stacked:!0,reverse:!1}}))},u=t(566),b=t(4),f=t(555),p=t(291),h=t(1118),E=t(1123),g=t(1124),y=t(124),x=t(1151),v=t(1125),w=t(218),j=t(46),O=t(553),N=t(220),S=t(539),k=t(502),C=t(503),T=t(504),B=t(505),R=t(506),D=t(600),W=t(368),I=t(1117),L=Object(D.a)((function(){return{root:{padding:"20px"}}})),M=function(e){var a=Object(O.a)({},e),t=L(),c=Object(n.useState)({start:"07:30",startTime:"",endTime:"",timeLeft:""}),l=Object(j.a)(c,2),i=l[0],o=l[1],s=function(e){return o(Object(w.a)({},i,{},e))},m=function(){var e=Object(W.default)(new Date,"MM-dd-yyyy"),a=new Date(e+" "+i.start),t=Object(I.a)(a,{hours:9,minutes:30});s({startTime:Object(W.default)(a,"hh:mm aa"),endTime:Object(W.default)(t,"hh:mm aa")})};return Object(n.useEffect)((function(){return m()}),[]),Object(n.useEffect)((function(){var e=setInterval((function(){return function(){var e=Object(W.default)(new Date,"MM-dd-yyyy"),a=new Date(e+" "+i.start),t=Object(I.a)(a,{hours:9,minutes:30}),n=new Date,r=Math.abs(t.getTime()-n.getTime()),c=Math.floor(r/1e3/60/60);r-=1e3*c*60*60;var l=Math.floor(r/1e3/60);r-=1e3*l*60;var s=c+":"+l+":"+Math.floor(r/1e3);o(Object(w.a)({},i,{timeLeft:s}))}()}),1e3);return function(){return clearInterval(e)}}),[i]),r.a.createElement(N.a,Object.assign({className:t.root},a),r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,lg:2,md:4,sm:6,xl:2,xs:12},r.a.createElement(S.a,{label:"Start Time",onChange:function(e){return s({start:e.target.value})},style:{marginRight:"20px"},value:i.start,variant:"outlined"})),r.a.createElement(h.a,{item:!0,lg:1,md:2,sm:6,xl:1,xs:12},r.a.createElement(k.a,{color:"primary",label:"Enter",onClick:function(){return m()},variant:"contained"},"Enter")),r.a.createElement(h.a,{item:!0,lg:3,md:6,sm:6,xl:3,xs:12},r.a.createElement(C.a,{size:"small"},r.a.createElement(T.a,null,r.a.createElement(B.a,null,r.a.createElement(R.a,null,"Start Time:"),r.a.createElement(R.a,null,i.startTime)),r.a.createElement(B.a,null,r.a.createElement(R.a,null,"End Time:"),r.a.createElement(R.a,null,i.endTime)),r.a.createElement(B.a,null,r.a.createElement(R.a,null,"Time Left:"),r.a.createElement(R.a,null,i.timeLeft)))))))},z=Object(f.a)((function(e){return{root:{height:"100%",backgroundColor:e.palette.white,color:e.palette.black},avatar:{height:56,width:56,color:e.palette.white,backgroundColor:p.a[500]},card:{minWidth:275},content:{alignItems:"center",display:"flex"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},icon:{height:32,width:32},pos:{marginBottom:12},title:{fontSize:14,fontWeight:"bold"}}})),P=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=z();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{container:!0,spacing:3},["BUDGET","ROI","DEBT","TOTAL"].map((function(e){return r.a.createElement(h.a,{item:!0,key:e,lg:3,md:6,sm:6,xl:3,xs:12},r.a.createElement(E.a,Object.assign({},t,{className:Object(b.a)(n.root,a)}),r.a.createElement(g.a,null,r.a.createElement(h.a,{container:!0,justify:"space-between"},r.a.createElement(h.a,{item:!0},r.a.createElement(y.a,{className:n.title,gutterBottom:!0},e),r.a.createElement(y.a,{component:"h2",variant:"h5"},"24,000"),r.a.createElement(y.a,{component:"p",variant:"body2"},"12% Since Last Month")),r.a.createElement(h.a,{item:!0},r.a.createElement(x.a,{className:n.avatar},r.a.createElement(v.a,{className:n.icon})))))))}))),r.a.createElement(M,{style:{marginTop:"20px"}}))},A=t(123),F=t(1134),_=t(1135),Y=t(507),J=t(508),q=t(1152),U=t(1122),G=t(1095),Q=t(1140),H=t(509),X=t(1141),K=t(1126),Z=t(1127),$=t(1128),V=t(1129),ee=t(1130),ae=t(1131),te=t(1132),ne=t(1133),re=t(1136),ce=t(1137),le=t(1138),ie=Object(f.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},content:{flexGrow:1,padding:e.spacing(3)},drawer:{flexShrink:0,width:240,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(A.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),list:{paddingTop:"75px"},listItem:{paddingLeft:"23px"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},toolbar:Object(w.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}})),oe=Object(o.g)((function(e){var a,t,n=e.content,c=e.location,l=ie(),i=r.a.useState(!1),o=Object(j.a)(i,2),m=o[0],d=o[1],u=c.pathname,f=[{title:"Dashboard",path:"/dashboard",icon:r.a.createElement(K.a,null)},{title:"Profile",path:"/profile",icon:r.a.createElement(Z.a,null)},{title:"Login",path:"/login",icon:r.a.createElement($.a,null)},{title:"Register",path:"/register",icon:r.a.createElement(V.a,null)},{title:"Tables",path:"/tables",icon:r.a.createElement(ee.a,null)},{title:"Charts",path:"/charts",icon:r.a.createElement(ae.a,null)},{title:"Manga",path:"/manga",icon:r.a.createElement(te.a,null)},{title:"Not Found",path:"/not-found",icon:r.a.createElement(ne.a,null)}];return r.a.createElement("div",{className:l.root},r.a.createElement(F.a,null),r.a.createElement(_.a,{className:Object(b.a)(l.appBar,Object(A.a)({},l.appBarShift,m)),position:"fixed"},r.a.createElement(Y.a,null,r.a.createElement(J.a,{"aria-label":"open drawer",className:l.menuButton,color:"inherit",edge:"start",onClick:function(){return d(!m)}},r.a.createElement(re.a,null)),r.a.createElement(y.a,{className:l.title,noWrap:!0,variant:"h6"},"JXTAU"),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(ce.a,null)),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(le.a,null)),r.a.createElement(k.a,{color:"inherit"},"Logout"))),r.a.createElement(q.a,{className:Object(b.a)(l.drawer,(a={},Object(A.a)(a,l.drawerOpen,m),Object(A.a)(a,l.drawerClose,!m),a)),classes:{paper:Object(b.a)((t={},Object(A.a)(t,l.drawerOpen,m),Object(A.a)(t,l.drawerClose,!m),t))},open:m,variant:"permanent"},r.a.createElement(U.a,{className:l.list},f.map((function(e,a){return r.a.createElement(G.a,{button:!0,className:l.listItem,component:s.b,key:a,selected:(t=e.path,u===t||"/dashboard"===t&&"/"===u),to:e.path},r.a.createElement(Q.a,null,e.icon),r.a.createElement(H.a,{primary:e.title}));var t}))),r.a.createElement(X.a,null)),r.a.createElement("div",{className:l.content},r.a.createElement("div",{className:l.toolbar}),n))})),se=t(1142),me=Object(D.a)((function(e){return{root:{padding:e.spacing(2)},row:{marginBottom:e.spacing(1)}}})),de=function(){var e=me();return r.a.createElement(h.a,{container:!0,justify:"center",spacing:3},r.a.createElement(h.a,{item:!0,lg:8,md:8,sm:12,xl:4,xs:12},r.a.createElement(N.a,{className:e.root},r.a.createElement(y.a,{className:e.row,variant:"h5"},"Sign in "),r.a.createElement(y.a,{className:e.row,variant:"subtitle1"},"Sign in on the internal platform"),r.a.createElement(S.a,{className:e.row,fullWidth:!0,label:"Email Address",variant:"outlined"}),r.a.createElement(S.a,{className:e.row,fullWidth:!0,label:"Password",type:"password",variant:"outlined"}),r.a.createElement(k.a,{color:"primary",fullWidth:!0,variant:"contained"},"SIGN IN"),r.a.createElement(X.a,{style:{margin:"20px 0px"}}),r.a.createElement(se.a,{href:"/register"},"Don't have an account?"))))},ue=t(1143),be=t(1144),fe=t(1145),pe=t(1146),he=function(){return r.a.createElement(ue.a,{maxWidth:"lg"},r.a.createElement(h.a,{alignItems:"center",container:!0,spacing:2},r.a.createElement(h.a,{item:!0},"Web Developer ",r.a.createElement("br",null),"John Doe"),r.a.createElement(h.a,{item:!0,style:{flexGrow:1}}),r.a.createElement(h.a,{item:!0},r.a.createElement(k.a,{color:"primary",startIcon:r.a.createElement(be.a,null),variant:"contained"},"Send Message")),r.a.createElement(h.a,{item:!0},r.a.createElement(k.a,{color:"primary",startIcon:r.a.createElement(fe.a,null),variant:"contained"},"Add Connection")),r.a.createElement(h.a,{item:!0},r.a.createElement(J.a,{"aria-label":"More Options"},r.a.createElement(pe.a,null)))),r.a.createElement(X.a,{style:{margin:"20px"}}),r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(S.a,{fullWidth:!0,label:"What's on your mind?",variant:"outlined"}))),r.a.createElement(X.a,{style:{margin:"20px"}}))},Ee=t(83),ge=t.n(Ee),ye=t(557),xe=t.n(ye),ve=Object(f.a)((function(e){return{paperRoot:{padding:e.spacing(2),marginTop:e.spacing(2)},dividerRoot:{margin:e.spacing(2)}}})),we=function(){var e=ve();return r.a.createElement(N.a,{className:e.paperRoot},r.a.createElement(y.a,{variant:"h4"},"Manga"),r.a.createElement(X.a,{className:e.dividerRoot}),r.a.createElement("a",{href:"https://anilist.co/api/v2/oauth/authorize?client_id=3056&redirect_uri=http://localhost:3000/manga&response_type=code"},"Login with AniList"),r.a.createElement(X.a,{className:e.dividerRoot}),r.a.createElement(k.a,{color:"primary",onClick:function(){return function(){var e,a;return ge.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return"3056","S6ewA9HevgQ5BUtc0bDtFQiBbZ6yUj5v1e3ScTaq","http://localhost:3000/manga","def5020087f4b56e2d1327d33f10a5dcf28cc3f2daf1c25985279eecb68a79d31e079eab34aaa524930b659c9f39048c069104634b25c2a6f517a6e5446f4276e9d43f4c2baa965e7188477f65314789f7a8835b3630be69fde684d71c1752e5852c102ae257af83d6e100f4a6c532d5dacbbd5a2ea2331a5be9f1ec2d6b9209b2a04ed4590960046ba5b9f063096a27638e0fcfc824603991ab6dafaece345b8357ed38bda4d4ed862bf6cb24ee24958d51acc2ed580d39ec25cdc77a50dc87b0f475eb91726cc9ec6b2f4e2eaa942d2ff1c5717790c4d6615918cde965086178d5cd43e0ae31de046558be033b033e9690b29cbfe4a841ef56fc9fd160ae33ddf12960b9267165ca4f3ab058417ae1e6fca8a6d43d9e0efacac5e65722cad8ba9a888011d45e0337f5ce4731a817e73f7cbe20d4c12186c7a33169cb95a96ea5ebe445108e6aa9c3be1315d7e0e02e665c7ab726e8a25697b17c7fc9e9eaf85b64ba58aa",e={url:"https://anilist.co/api/v2/oauth/token",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},json:{grant_type:"authorization_code",client_id:"3056",client_secret:"S6ewA9HevgQ5BUtc0bDtFQiBbZ6yUj5v1e3ScTaq",redirect_uri:"http://localhost:3000/manga",code:"def5020087f4b56e2d1327d33f10a5dcf28cc3f2daf1c25985279eecb68a79d31e079eab34aaa524930b659c9f39048c069104634b25c2a6f517a6e5446f4276e9d43f4c2baa965e7188477f65314789f7a8835b3630be69fde684d71c1752e5852c102ae257af83d6e100f4a6c532d5dacbbd5a2ea2331a5be9f1ec2d6b9209b2a04ed4590960046ba5b9f063096a27638e0fcfc824603991ab6dafaece345b8357ed38bda4d4ed862bf6cb24ee24958d51acc2ed580d39ec25cdc77a50dc87b0f475eb91726cc9ec6b2f4e2eaa942d2ff1c5717790c4d6615918cde965086178d5cd43e0ae31de046558be033b033e9690b29cbfe4a841ef56fc9fd160ae33ddf12960b9267165ca4f3ab058417ae1e6fca8a6d43d9e0efacac5e65722cad8ba9a888011d45e0337f5ce4731a817e73f7cbe20d4c12186c7a33169cb95a96ea5ebe445108e6aa9c3be1315d7e0e02e665c7ab726e8a25697b17c7fc9e9eaf85b64ba58aa"}},console.log("requesting..."),console.log(e),t.prev=7,t.next=10,ge.a.awrap(xe()(e));case 10:a=t.sent,console.log(a),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(7),console.error(t.t0);case 17:console.log("----");case 18:case"end":return t.stop()}}),null,null,[[7,14]])}()},variant:"contained"},"Request Token"))},je=t(501),Oe=t(1147),Ne=t(518),Se=t(538),ke=Object(D.a)((function(e){return{root:{padding:e.spacing(2)},row:{marginBottom:e.spacing(1)},divider:{margin:"20px 0px"}}})),Ce=function(){var e=ke();return r.a.createElement(h.a,{container:!0,justify:"center",spacing:3},r.a.createElement(h.a,{item:!0,lg:8,md:8,sm:12,xl:4,xs:12},r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{className:e.row,variant:"h5"},"Sign up"),r.a.createElement(y.a,{className:e.row,variant:"subtitle1"},"Sign up on the internal platform"),r.a.createElement(S.a,{className:e.row,fullWidth:!0,label:"First Name",variant:"outlined"}),r.a.createElement(S.a,{className:e.row,fullWidth:!0,label:"Last Name",variant:"outlined"}),r.a.createElement(S.a,{className:e.row,fullWidth:!0,label:"Email Address",variant:"outlined"}),r.a.createElement(S.a,{className:e.row,fullWidth:!0,label:"Password",type:"password",variant:"outlined"}),r.a.createElement(je.a,{className:e.row,component:"fieldset",required:!0},r.a.createElement(Oe.a,null,r.a.createElement(Ne.a,{control:r.a.createElement(Se.a,{color:"primary"}),label:"I have read the Terms and Condition."}))),r.a.createElement(k.a,{color:"primary",fullWidth:!0,variant:"contained"},"Create Account"),r.a.createElement(X.a,{className:e.divider}),r.a.createElement(se.a,{href:"/login"},"Have an account?")))))},Te=t(377),Be=t.n(Te),Re=function(){var e=Object(n.useRef)(),a=Object(n.useState)({selectedRow:null}),t=Object(j.a)(a,2),c=t[0],l=t[1],i={rowStyle:function(e){return{backgroundColor:c.selectedRow&&c.selectedRow.tableData.id===e.tableData.id?"#EEE":"#FFF"}},search:!0,sorting:!0};return r.a.createElement("div",{style:{maxWidth:"100%"}},r.a.createElement(Be.a,{columns:[{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Birth Year",field:"birthYear",type:"numeric"},{title:"Birth City",field:"birthCity",lookup:{34:"Daly City",63:"San Francisco"}}],data:[{name:"Jonathan",surname:"John",birthYear:1987,birthCity:63},{name:"John Paul",surname:"JP",birthYear:1972,birthCity:34},{name:"Stanley",surname:"Stan",birthYear:1994,birthCity:63},{name:"Daisy",surname:"Day",birthYear:2e3,birthCity:63},{name:"Kyle",surname:"Kyle",birthYear:2010,birthCity:34},{name:"Joseph",surname:"Joe",birthYear:1992,birthCity:34},{name:"Elizabeth",surname:"Liz",birthYear:1983,birthCity:63}],onRowClick:function(e,a){return l({selectedRow:a})},options:i,title:"Demo Title"}),r.a.createElement(X.a,{style:{margin:"20px"}}),r.a.createElement(Be.a,{actions:[{icon:"refresh",tooltip:"Refresh Data",isFreeAction:!0,onClick:function(){return e.current&&e.current.onQueryChange()}}],columns:[{title:"Avatar",field:"avatar",render:function(e){return r.a.createElement("img",{alt:e.first_name,src:e.avatar,style:{height:36,borderRadius:"50%"}})}},{title:"Id",field:"id"},{title:"First Name",field:"first_name"},{title:"Last Name",field:"last_name"}],data:function(e){return new Promise((function(a){var t="https://reqres.in/api/users?";t+="per_page="+e.pageSize,t+="&page="+(e.page+1),fetch(t).then((function(e){return e.json()})).then((function(e){a({data:e.data,page:e.page-1,totalCount:e.total})}))}))},tableRef:e,title:"Refresh Data Preview"}))},De=function(){return r.a.createElement(r.a.Fragment,null,"Work In Progress...")},We=function(){return r.a.createElement(s.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/"},r.a.createElement(oe,{content:r.a.createElement(P,null)})),r.a.createElement(o.b,{exact:!0,path:"/charts"},r.a.createElement(oe,{content:r.a.createElement(d,null)})),r.a.createElement(o.b,{exact:!0,path:"/dashboard"},r.a.createElement(oe,{content:r.a.createElement(P,null)})),r.a.createElement(o.b,{exact:!0,path:"/login"},r.a.createElement(oe,{content:r.a.createElement(de,null)})),r.a.createElement(o.b,{exact:!0,path:"/manga"},r.a.createElement(oe,{content:r.a.createElement(we,null)})),r.a.createElement(o.b,{exact:!0,path:"/profile"},r.a.createElement(oe,{content:r.a.createElement(he,null)})),r.a.createElement(o.b,{exact:!0,path:"/register"},r.a.createElement(oe,{content:r.a.createElement(Ce,null)})),r.a.createElement(o.b,{exact:!0,path:"/tables"},r.a.createElement(oe,{content:r.a.createElement(Re,null)})),r.a.createElement(o.b,{exact:!0,path:"/not-found"},r.a.createElement(oe,{content:r.a.createElement(De,null)})),r.a.createElement(o.a,{to:"/not-found"})))},Ie=t(565),Le=t(1149),Me=t(290),ze=Object(Ie.a)({palette:{primary:{main:Me.a[500]},background:{paper:"#fff",default:"#e6e6e6"}}}),Pe=Object(i.a)(),Ae=function(){return r.a.createElement(Le.a,{theme:ze},r.a.createElement(o.c,{history:Pe},r.a.createElement(We,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},617:function(e,a,t){e.exports=t(1060)}},[[617,1,2]]]);
//# sourceMappingURL=main.14605bbe.chunk.js.map