(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},,function(n,e,t){},function(n,e,t){"use strict";t.r(e);var c=t(1),r=t.n(c),a=t(6),i=t.n(a),u=(t(12),t(13),t(7)),s=t(3);t(14),t(15);var o=t(0),l=function(n){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"square",onClick:n.onClick,children:n.value})})},j=function(n){var e=n.squares,t=n.onClick;return Object(o.jsx)("div",{className:"board",children:e.map((function(n,e){return Object(o.jsx)(l,{value:n,onClick:function(){t(e)}},e)}))})},b=(t(17),function(){var n=Object(c.useState)(Array(9).fill(null)),e=Object(s.a)(n,2),t=e[0],r=e[1],a=Object(c.useState)(!0),i=Object(s.a)(a,2),l=i[0],b=i[1],f=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var c=Object(s.a)(e[t],3),r=c[0],a=c[1],i=c[2];if(n[r]&&n[r]===n[a]&&n[a]===n[i])return n[r]}return null}(t);return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("button",{className:"ng_button",onClick:function(){return r(Array(9).fill(null))},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e"}),Object(o.jsx)(j,{squares:t,onClick:function(n){var e=Object(u.a)(t);f||e[n]||(e[n]=l?"X":"O",b(!l),r(e))}}),Object(o.jsx)("p",{className:"game_info",children:f?"\u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c: "+f:"\u0421\u0435\u0439\u0447\u0430\u0441 \u0445\u043e\u0434\u0438\u0442: "+(l?"X":"O")})]})});var f=function(){return Object(o.jsx)(b,{})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.ac20916c.chunk.js.map