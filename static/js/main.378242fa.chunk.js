(this["webpackJsonpmovie-app-2020"]=this["webpackJsonpmovie-app-2020"]||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},55:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),i=a.n(o),l=a(7),c=a(1),s=a(15),m=a.n(s),u=a(29),p=a(10),v=a(11),g=a(13),d=a(12),E=a(30),y=a.n(E);a(55);var h=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,i=e.poster,c=e.genres,s=void 0===c?[]:c,m=o.slice(0,260);return o=m.length>=260?o.slice(0,255)+".....":m,r.a.createElement("li",{className:"movie-list","data-id":t},r.a.createElement(l.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:o,poster:i,genres:s}}},r.a.createElement("div",{className:"movie-img"},r.a.createElement("img",{src:i,alt:n,title:n})),r.a.createElement("div",{className:"movie-txt"},r.a.createElement("h3",{className:"movie-txt-title"},n),r.a.createElement("p",{className:"movie-txt-year"},a),r.a.createElement("ul",{className:"movie-genres"},s.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie-genres-genre"},e)}))),r.a.createElement("h4",{className:"movie-txt-summary"},o))))},x=(a(61),function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){console.log("HOME \ucef4\ud3ec\ub10c\ud2b8 \ub9c8\uc6b4\ud2b8!"),this.getMovies()}},{key:"componentWillUnmount",value:function(){console.log("HOME \ucef4\ud3ec\ub10c\ud2b8 \uc5b8\ub9c8\uc6b4\ud2b8!")}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"section movie"},r.a.createElement("ul",{className:"movie-list-box"},t?r.a.createElement("li",{className:"loader-box"},r.a.createElement("span",{className:"loader-text"},"Loading...")):a.map((function(e){return r.a.createElement(h,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var b=function(e){return r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"white",width:"25%",margin:"20px auto",height:"150px",padding:"10px",boxShadow:"1px 1px 30px #ccc"}},r.a.createElement("p",{style:{fontSize:"2em",margin:"20px 0"}},"SPA menu test"),r.a.createElement("p",null,"About this page : i built it beacause I love movie"))};a(62);var f=function(){return r.a.createElement("nav",{className:"gnb-box"},r.a.createElement("ul",{className:"gnb"},r.a.createElement("li",null,r.a.createElement(l.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/About"},"About"))))},N=function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;console.log(this.props,"this props"),void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;if(e.state){var t=e.state.title;return r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"white",width:"25%",margin:"20px auto",padding:"10px",boxShadow:"1px 1px 30px #ccc"}},r.a.createElement("p",{style:{fontSize:"2em",margin:"20px 0"}},"movie detail state test"),r.a.createElement("p",{style:{marginBottom:"10px"}},e.state.id),r.a.createElement("p",{style:{marginBottom:"10px"}},e.state.year),r.a.createElement("p",{style:{marginBottom:"10px"}},t),r.a.createElement("p",{style:{marginBottom:"10px"}},e.state.summary),r.a.createElement("img",{src:e.state.poster,alt:t,title:t}),e.state.genres.map((function(e,t){return r.a.createElement("p",{style:{marginBottom:"10px"},key:t},e)})))}return null}}]),a}(r.a.Component);var k=function(){return r.a.createElement(l.a,null,r.a.createElement(f,null),r.a.createElement(c.a,{path:"/",exact:!0,component:x}),r.a.createElement(c.a,{path:"/about",component:b}),r.a.createElement(c.a,{path:"/movie/:id",component:N}))};a(63);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.378242fa.chunk.js.map