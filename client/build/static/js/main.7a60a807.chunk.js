(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},39:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),o=a(5);var i=function({children:e}){return l.a.createElement("div",{style:{clear:"both",padding:20,textAlign:"center"},className:"jumbotron"},e)},m=a(4),s=a.n(m),u=function(e){return s.a.get("https://www.googleapis.com/books/v1/volumes?q= ".concat(e))},d=function(){return s.a.get("/api/books")},E=function(e){return s.a.delete("/api/books/"+e)},v=function(e){return s.a.post("/api/books",e)};function f({size:e,children:t}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},t)}function b({fluid:e,children:t}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},t)}function h({fluid:e,children:t}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},t)}a(39);function p({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function g({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function k(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function N(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var y=function(){const e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),m=Object(o.a)(c,2),s=m[0],d=m[1];return console.log("searchResult",a),l.a.createElement(b,{fluid:!0},l.a.createElement(h,null,l.a.createElement(f,{size:"md-12"},l.a.createElement(i,null,l.a.createElement("h1",null,"Google Book Search!!!!!"),l.a.createElement("br",null),l.a.createElement("h4",null,'"Please enter Book Title"')),l.a.createElement("form",null,l.a.createElement(k,{onChange:function(e){const t=e.target.value;d(t),console.log(s)},name:"bookTitle",placeholder:"Harry Potter",value:s}),l.a.createElement(N,{disabled:!s,onClick:function(e){e.preventDefault(),s&&u(s).then(e=>{const t=e.data.items.map(e=>{var t,a,n,l,r,c,o;return console.log(e),{id:e.id,title:null===e||void 0===e||null===(t=e.volumeInfo)||void 0===t?void 0:t.title,author:(null===e||void 0===e||null===(a=e.volumeInfo)||void 0===a?void 0:a.authors)?null===e||void 0===e||null===(n=e.volumeInfo)||void 0===n?void 0:n.authors[0]:"",image:(null===e||void 0===e||null===(l=e.volumeInfo)||void 0===l?void 0:l.imageLinks)?null===e||void 0===e||null===(r=e.volumeInfo)||void 0===r?void 0:r.imageLinks.smallThumbnail:"",description:null===e||void 0===e||null===(c=e.volumeInfo)||void 0===c?void 0:c.description,link:null===e||void 0===e||null===(o=e.volumeInfo)||void 0===o?void 0:o.infoLink}});r(t)}).catch(e=>console.log(e))}},"Search"))),l.a.createElement(f,{size:"sm-12"},l.a.createElement(i,null,l.a.createElement("h1",null,"Search List")),l.a.createElement(p,null,a.map(e=>l.a.createElement(g,{key:e.id},l.a.createElement("div",null,l.a.createElement("a",{href:"/books/"+e._id}),l.a.createElement(h,null,l.a.createElement(f,{size:"sm-6"},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(f,{size:"sm-6"},l.a.createElement("a",{href:e.link},l.a.createElement("button",{className:"btn btn-primary"},"View")),l.a.createElement("button",{className:"btn btn-primary",onClick:()=>(e=>{v(e).then(()=>{alert("Book saved")})})(e)},"Save"))),l.a.createElement(h,null,l.a.createElement(f,{size:"sm-3"},l.a.createElement("img",{src:e.image})),l.a.createElement(f,{size:"sm-9"},e.description)))))))))};var z=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Home Page"),l.a.createElement("a",{className:"navbar-brand",href:"/saved"},"Saved Books"))},j=a(46),w=a(47);var O=function(){const e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];function c(){d().then(e=>r(e.data)).catch(e=>console.log(e))}return Object(n.useEffect)(()=>{c()},[]),l.a.createElement(b,{fluid:!0},l.a.createElement(h,null,l.a.createElement(f,{size:"sm-12"},l.a.createElement(i,null,l.a.createElement("h1",null,"Save Result")),l.a.createElement(p,null,a.map(e=>l.a.createElement(g,{key:e._id},l.a.createElement("div",null,l.a.createElement(h,null,l.a.createElement(f,{size:"sm-6"},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(f,{size:"sm-6"},l.a.createElement("a",{href:e.link},l.a.createElement("button",{className:"btn btn-primary"},"View")),l.a.createElement("button",{className:"btn btn-primary",onClick:()=>function(e){E(e._id).then(e=>c()).catch(e=>console.log(e))}(e)},"Delete"))),l.a.createElement(h,null,l.a.createElement(f,{size:"sm-3"},l.a.createElement("img",{src:e.image})),l.a.createElement(f,{size:"sm-9"},e.description)))))))))};var S=function(){return l.a.createElement(j.a,null,l.a.createElement("div",null,l.a.createElement(z,null),l.a.createElement(w.a,{exact:!0,path:"/",component:y}),l.a.createElement(w.a,{exact:!0,path:"/saved",component:O})))};c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7a60a807.chunk.js.map