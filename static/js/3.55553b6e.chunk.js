(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[3],{121:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(11),a=c(54),s=c(22),i=c.n(s),o=c(13),l=c(23),b=c(1);t.default=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.popular.results})),c=Object(n.c)((function(e){return e.popular.currentPage})),s=(Object(n.c)((function(e){return e.popular.pageSize})),Object(n.c)((function(e){return e.popular.totalPagesCount})));Object(r.useEffect)((function(){e(Object(a.a)(c))}),[c]);for(var u=function(t){e(a.b.setCurrentPage(t)),Object(a.a)(c)},j=[],d=1;d<=s;d++)j.push(d);return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:i.a.pages__row,children:Object(b.jsx)("div",{className:"btn-group mr-2",role:"group","aria-label":"First group",children:j.map((function(e){return Object(b.jsx)("button",{onClick:function(){return u(e)},type:"button",className:"btn btn-secondary",children:e},e.number)}))})}),Object(b.jsx)("div",{className:i.a.main__row,children:t?t.map((function(e){return Object(b.jsx)("div",{className:i.a.movie__block,children:Object(b.jsxs)("div",{className:i.a.row,children:[Object(b.jsx)("div",{children:Object(b.jsx)(o.b,{to:"/movieblock/"+e.id,children:Object(b.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path)})})}),Object(b.jsxs)("div",{className:i.a.text__block,children:[Object(b.jsx)("div",{className:i.a.title,children:e.title}),Object(b.jsx)("div",{className:i.a.date,children:e.release_date})]})]})},e.id)})):null}),Object(b.jsx)("div",{className:i.a.pages__row,children:Object(b.jsx)("div",{className:"btn-group mr-2",role:"group","aria-label":"First group",children:j.map((function(e){return Object(b.jsx)("button",{onClick:function(){return u(e)},type:"button",className:"btn btn-secondary",children:e},e.number)}))})})]}):Object(b.jsx)(l.a,{})})}}}]);
//# sourceMappingURL=3.55553b6e.chunk.js.map