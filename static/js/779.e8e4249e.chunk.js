"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{687:function(e,n,t){t.d(n,{Df:function(){return s},M1:function(){return p},Pg:function(){return o},UN:function(){return i},tx:function(){return f}});var r=t(861),a=t(757),u=t.n(a),c=t(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"7fd4f410c4ec08626e88dd82651b1178",language:"en-US"},c.Z.defaults.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmQ0ZjQxMGM0ZWMwODYyNmU4OGRkODI2NTFiMTE3OCIsInN1YiI6IjY1NmEzZWNhNTY4NDYzMDBlZTExYzRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iYhBZwX53rUY3z7-sh1Tm3eSJwK0Zg0dZSk27-YoCmw",accept:"application/json"};var s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/week");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie",{params:{query:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n),{params:{append_to_response:"poster_path"}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits"),{params:{append_to_response:"poster_path"}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},779:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r,a=t(861),u=t(439),c=t(757),s=t.n(c),i=t(791),o=t(689),p=t(687),f=t(168),h=t(867).ZP.ul(r||(r=(0,f.Z)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 10px;\n"]))),d=t(184),l=function(){var e=(0,i.useState)([]),n=(0,u.Z)(e,2),t=n[0],r=n[1],c=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.tx)(c);case 3:n=e.sent,t=n.results,r((function(){return t.map((function(e){return{author:e.author,id:e.id,content:e.content}}))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]),(0,d.jsx)("div",{children:(0,d.jsx)(h,{children:t.length>0?t.map((function(e){var n=e.author,t=e.id,r=e.content;return(0,d.jsxs)("li",{children:[(0,d.jsx)("h4",{children:n}),(0,d.jsx)("p",{children:r})]},t)})):(0,d.jsx)("p",{children:"We don't have any reviews for this movie."})})})}}}]);
//# sourceMappingURL=779.e8e4249e.chunk.js.map