(this["webpackJsonpcoronavirus-tracker"]=this["webpackJsonpcoronavirus-tracker"]||[]).push([[0],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),i=a(11),l=a.n(i),u=a(23),s=a(10),p=Object(n.createContext)(),d=p.Provider,m=(p.Consumer,function(e){var t=e.children,a=Object(n.useState)("Chile"),c=Object(s.a)(a,2),o=c[0],i=c[1];return r.a.createElement(d,{value:{country:o,setCountry:i}},t)}),f=function(){var e=Object(u.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,fetch("https://covid-193.p.rapidapi.com/statistics?country=".concat(t),{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"8656923db0msh06fbc7dc4818a43p11e5e7jsn94f1442e5d0c"}});case 3:return r=e.sent,e.next=6,r.json();case 6:r=e.sent,a(r.response),n(!1);case 9:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b=a(230),g=a(234),h=a(233),v=a(228),y=a(231),E=a(232),j=a(229),C=a(224),O=function(){var e,t=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(n.useContext)(p).country;return Object(n.useEffect)((function(){f(u,r,l)}),[u]),{data:a,country:u,isLoading:i}}(),a=t.data,c=(t.country,t.isLoading);if(console.log(a),!c){var o=function(e,t,a){return{name:e,quantity:t,perMillion:a}};e=[o("Population",a[0].population.toLocaleString(),Math.round(a[0].population/1e6).toLocaleString()),o("Actives",a[0].cases.active.toLocaleString(),Math.round(1e5*a[0].cases.active/a[0].population).toLocaleString()),o("Critical",a[0].cases.critical.toLocaleString(),Math.round(1e5*a[0].cases.critical/a[0].population).toLocaleString()),o("Recovered",a[0].cases.recovered.toLocaleString(),Math.round(1e5*a[0].cases.recovered/a[0].population).toLocaleString()),o("Tests",a[0].tests.total.toLocaleString(),Math.round(1e5*a[0].tests.total/a[0].population).toLocaleString())]}return r.a.createElement("div",null,c?r.a.createElement(C.a,null):r.a.createElement(v.a,{component:j.a},r.a.createElement(b.a,{"aria-label":"simple table"},r.a.createElement(y.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,null,a[0].country),r.a.createElement(h.a,{align:"right"},"Quantity"),r.a.createElement(h.a,{align:"right"},"Per Million"))),r.a.createElement(g.a,null,e.map((function(e){return r.a.createElement(E.a,{key:e.name},r.a.createElement(h.a,{component:"th",scope:"row"},e.name),r.a.createElement(h.a,{align:"right"},e.quantity),r.a.createElement(h.a,{align:"right"},e.perMillion))})))))," ")},x=a(235),S=a(236),k=a(237),L=function(){var e=Object(n.useContext)(p).setCountry,t=function(){var e=Object(n.useState)(["Chile"]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),i=o[0],p=o[1],d=Object(n.useState)(null),m=Object(s.a)(d,2),f=m[0],b=m[1],g=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://covid-193.p.rapidapi.com/countries",{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"8656923db0msh06fbc7dc4818a43p11e5e7jsn94f1442e5d0c"}});case 3:return t=e.sent,e.next=6,t.json();case 6:t=e.sent,r(t.response),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),b(e.t0.message);case 13:p(!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),{countries:a,isLoading:i,error:f}}(),a=t.countries,c=t.isLoading,o=(t.error,a.map((function(e,t){return r.a.createElement(k.a,{style:{paddingLeft:10},key:t,value:e},e)})));return r.a.createElement(S.a,{name:"country",defaultValue:"Chile",onChange:function(t){e(t.target.value)},id:"country",style:{width:300,textAlignLast:"center",fontSize:24}},o,c?r.a.createElement(k.a,null,"Cargando..."):null)},w=function(){var e=Object(u.a)(l.a.mark((function e(t,a,n){var r,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=new Date(2020,0,1),c=[];r.getTime()<=(new Date).getTime();)o=M(r,t),c.push(o),r.setDate(r.getDate()+4);return e.next=5,Promise.all(c);case 5:i=e.sent,a(i),n(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid-193.p.rapidapi.com/history?day=".concat(t.toISOString().substring(0,10),"&country=").concat(a),{method:"GET",headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"8656923db0msh06fbc7dc4818a43p11e5e7jsn94f1442e5d0c"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return n=e.sent,e.abrupt("return",n.response);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),T=a(79),A=function(){var e=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(n.useContext)(p).country;return Object(n.useEffect)((function(){l(!0),w(u,r,l)}),[u]),{countryData:a,country:u,isLoading:i}}(),t=e.country,a=e.countryData,c=e.isLoading,o=a.filter((function(e){return e[0]})).map((function(e){return e[0]})),i=o.map((function(e){return e.day})),l={label:"actives",data:o.map((function(e){return e.cases.active})),borderColor:"rgba(0,165,165,0.6)",backgroundColor:"rgba(0,165,165,0.2)"},u={label:"criticals",data:o.map((function(e){return e.cases.critical})),borderColor:"rgba(165,0,165,0.6)",backgroundColor:"rgba(165,0,165,0.2)"},d={label:"recovered",data:o.map((function(e){return e.cases.recovered})),borderColor:"rgba(0,255,0,0.6)",backgroundColor:"rgba(0,255,0,0.2)",hidden:!0},m={labels:i,datasets:[l,u,{label:"deaths",data:o.map((function(e){return e.deaths.total})),borderColor:"rgba(255,0,0,0.6)",backgroundColor:"rgba(255,0,0,0.2)"},d,{label:"tests",data:o.map((function(e){return e.tests.total})),borderColor:"rgba(255,255,0,0.6)",backgroundColor:"rgba(255,255,0,0.2)",hidden:!0}]};return r.a.createElement(x.a,{container:!0,border:.1,justify:"center",alignItems:"center",style:{height:400,borderColor:"black",borderRadius:10,backgroundColor:"#fafafa",padding:10,marginBottom:20}},c?r.a.createElement(C.a,null):r.a.createElement(T.Line,{data:m,options:{title:{display:!0,text:t},maintainAspectRatio:!1,elements:{point:{radius:2}}}}))},D=(a(77),a(44)),I=a(45),P=function(){return r.a.createElement(x.a,{className:"AppHeader",align:"center",style:{width:"100%"}},r.a.createElement("h1",null,"Welcome to my App"),r.a.createElement("h5",null,"A Timelapse Chart about Coronavirus in ",r.a.createElement("u",null," every country! ")),r.a.createElement("h5",null,"Check your country"," ",r.a.createElement(D.a,{icon:I.a,style:{fontSize:20,marginLeft:20}})))},R=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,null),r.a.createElement(m,null,r.a.createElement(x.a,{container:!0,justify:"center"},r.a.createElement(D.a,{icon:I.b,style:{fontSize:32,marginRight:10,paddingTop:2}}),r.a.createElement(x.a,{style:{marginBottom:40}},r.a.createElement(L,null))),r.a.createElement(x.a,{container:!0,spacing:5,justify:"center",alignItems:"center"},r.a.createElement(x.a,{item:!0,lg:4,md:5,sm:11,align:"center"},r.a.createElement(O,null)),r.a.createElement(x.a,{align:"center",item:!0,lg:6,md:5,sm:11},r.a.createElement(A,null)))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))},77:function(e,t,a){},86:function(e,t,a){e.exports=a(191)}},[[86,1,2]]]);
//# sourceMappingURL=main.d1f91f3d.chunk.js.map