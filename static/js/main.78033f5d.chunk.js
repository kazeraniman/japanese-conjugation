(this["webpackJsonpjapanese-conjugation"]=this["webpackJsonpjapanese-conjugation"]||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(8),a=n(0),r=n.n(a),s=n(12),i=n.n(s),o=(n(41),n(42),n(68)),u=n(66),j=n(69),g=n(70),l=n(67),d=n(21),b=n(28),O=n(13),f=["Present/Future","Past"],h="settings:conjugations:",p=Object(O.b)({name:"settings",initialState:{conjugations:f.reduce((function(e,t){var n;return Object(b.a)(Object(b.a)({},e),{},Object(d.a)({},t,JSON.parse(null!==(n=localStorage.getItem(h+t))&&void 0!==n?n:"true")))}),{})},reducers:{setConjugationSetting:function(e,t){e.conjugations[t.payload.key]=t.payload.value}}}),m=p.actions.setConjugationSetting,x=function(e){return e.settings.conjugations},v=p.reducer,w=n(20);function S(){var e=Object(w.c)(x),t=Object(w.b)();function n(e){localStorage.setItem(h+e.target.name,JSON.stringify(e.target.checked)),t(m({key:e.target.name,value:e.target.checked}))}return Object(c.jsx)("div",{className:"settings",children:Object(c.jsx)(o.a,{component:"fieldset",children:Object(c.jsxs)(u.a,{children:[Object(c.jsx)(j.a,{component:"legend",children:"Conjugations/Transformations"}),f.map((function(t,a){return Object(c.jsx)(g.a,{control:Object(c.jsx)(l.a,{checked:e[t],onChange:n,name:t}),label:t},a)}))]})})})}var k=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(S,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},C=Object(O.b)({name:"answer",initialState:{writtenAnswer:""},reducers:{setWrittenAnswer:function(e,t){e.writtenAnswer=t.payload}}}),A=(C.actions.setWrittenAnswer,C.reducer),F=Object(O.a)({reducer:{answer:A,settings:v}});i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(w.a,{store:F,children:Object(c.jsx)(k,{})})}),document.getElementById("root")),y()}},[[48,1,2]]]);
//# sourceMappingURL=main.78033f5d.chunk.js.map