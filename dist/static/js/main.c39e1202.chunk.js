(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),i=(a(22),a(2)),s=a(3),o=a(5),m=a(4),u=a(6),d=function(e){return r.a.createElement("nav",{className:"Header teal lighten-2 "},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"brand-logo center "},"Search Images ")))},h=function(e){var t=r.a.createElement("h5",null,"Images");return e.images&&(t=r.a.createElement("div",null,r.a.createElement("div",{class:"preloader-wrapper big active container center"},r.a.createElement("div",{class:"spinner-layer spinner-blue-only"},r.a.createElement("div",{class:"circle-clipper left"},r.a.createElement("div",{class:"circle"})),r.a.createElement("div",{class:"gap-patch"},r.a.createElement("div",{class:"circle"})),r.a.createElement("div",{class:"circle-clipper right"},r.a.createElement("div",{class:"circle"})))))),e.images&&(t=e.images.map(function(e){return r.a.createElement("img",{src:e.urls.regular,key:e.id,className:" responsive-img materialboxed",alt:""})})),r.a.createElement("div",{className:"images container section "},t)},p=a(15),v=a.n(p),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={term:"",images:null},a.changeHandler=function(e){a.setState({term:e.target.value})},a.submitHandler=function(e){e.preventDefault();var t=a.state.term;v.a.get("https://api.unsplash.com/search/photos",{params:{query:t},headers:{Authorization:"Client-ID 8baf756fd48ee56cc641103d303070dd10e96ab51b4970d6c72f8888064d8696"}}).then(function(e){a.setState({images:e.data.results})}),a.setState({term:""})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:" Dashboard row section container "},r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("div",{className:"input-field col s10  l10  "},r.a.createElement("label",{htmlFor:"image"},"Enter name to search for images"),r.a.createElement("input",{id:"image",type:"text",value:this.state.term,onChange:this.changeHandler})),r.a.createElement("div",{className:"input-field col l2  "},r.a.createElement("button",{className:" Button waves-effect waves-light btn"},"Search")))),r.a.createElement(h,{images:this.state.images,isLoading:this.state.isLoading}))}}]),t}(n.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.c39e1202.chunk.js.map