(this["webpackJsonpamplify-react-app"]=this["webpackJsonpamplify-react-app"]||[]).push([[0],{129:function(t,e,n){},131:function(t,e,n){},187:function(t,e,n){"use strict";n.r(e);var c=n(16),r=n.n(c),a=n(106),s=n.n(a),i=(n(129),n(55)),o=n(75),u=n(34),l=n.n(u),p=n(56),j=n(38),b=n(105),f=(n.p,n(131),n(10)),h=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(p.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("cryptoapi","/born");case 3:e=t.sent,console.log(e),r(e.borninfo),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(f.jsxs)("h2",{children:["The GitHub user ",n.login," was born on ",n.created_at]})},O=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],r=e[1],a=function(){var t=Object(p.a)(l.a.mark((function t(){var e,n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),e=O.limit,n=O.start,t.next=5,b.a.get("cryptoapi","/coins?limit=".concat(e,"&start=").concat(n));case 5:c=t.sent,r(c.coins),w(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){a()}),[]);var s=Object(c.useState)({limit:50,start:0}),u=Object(j.a)(s,2),O=u[0],d=u[1],g=function(t,e){d(Object(o.a)(Object(o.a)({},O),{},Object(i.a)({},t,e)))},x=Object(c.useState)(!0),m=Object(j.a)(x,2),v=m[0],w=m[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("input",{placeholder:"Enter a starting index",onChange:function(t){return g("start",t.target.value)}}),Object(f.jsx)("input",{onChange:function(t){return g("limit",t.target.value)},placeholder:"Enter a limit"}),Object(f.jsx)("button",{onClick:a,children:"Fetch Coins"}),v&&Object(f.jsx)("h2",{children:"Loading...."}),!v&&n.map((function(t,e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:[t.name," - ",t.symbol]}),Object(f.jsxs)("h5",{children:["$",t.price_usd]})]},e)}))]}),Object(f.jsx)(h,{})]})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))},g={aws_project_region:"us-east-2",aws_cloud_logic_custom:[{name:"cryptoapi",endpoint:"https://i1lrwjq024.execute-api.us-east-2.amazonaws.com/local",region:"us-east-2"}]};n(52).default.configure(g),s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),d()}},[[187,1,2]]]);
//# sourceMappingURL=main.360330d2.chunk.js.map