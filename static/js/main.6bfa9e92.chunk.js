(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),o=n(5),s=n.n(o),r=(n(11),n(4)),i=n.n(r),u=n(6),l=n(2),b=(n(13),n(0));var d=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)("I attribute my success to this: I never gave or took any excuse."),s=Object(l.a)(o,2),r=s[0],d=s[1],h=Object(c.useState)("Wayne Gretzky"),j=Object(l.a)(h,2),f=j[0],m=j[1],p=Object(c.useState)("27ae60"),O=Object(l.a)(p,2),x=O[0],g=O[1],v=Object(c.useState)(100),w=Object(l.a)(v,2),y=w[0],k=w[1],q=["#16a085","#27ae60","#2c3e50","#f39c12","#e74c3c","#9b59b6","#FB6964","#342224","#472E32","#BDBB99","#77B1A9","#73A857"],N=function(){var t=Object(u.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(t){return t.json()})).then((function(t){return a(t.quotes)}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0.message);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),C=function(){return n[Math.floor(Math.random()*n.length)]},I=function(){g(q[Math.floor(Math.random()*q.length)])};return Object(c.useEffect)((function(){N()}),[]),Object(b.jsxs)("div",{className:"App",style:{background:x,transition:"background 1.2s"},children:[Object(b.jsx)("div",{className:"change-color",children:Object(b.jsx)("button",{className:"btn float-end",style:{background:"transparent"},onClick:I,children:Object(b.jsx)("i",{className:"fa fa-refresh","aria-hidden":"true",title:"Change color"})})}),Object(b.jsxs)("div",{id:"quote-box",children:[Object(b.jsxs)("div",{className:"quote-text",style:{opacity:y/100,color:x,transition:"opacity 1.2s, color 1.2s"},children:[Object(b.jsx)("i",{className:"fa fa-quote-left"}),Object(b.jsx)("span",{id:"text",children:r})]}),Object(b.jsx)("div",{className:"author-text",style:{opacity:y/100,color:x,transition:"opacity 1.2s, color 1.2s"},children:Object(b.jsxs)("span",{id:"author",children:["- ",f]})}),Object(b.jsxs)("div",{className:"btns",children:[Object(b.jsx)("button",{id:"new-quote",className:"btn",style:{background:x,transition:"background 1.2s"},onClick:function(){var t=setInterval((function(){k(y-=10),console.log(y),10===y&&(clearInterval(t),setTimeout((function(){d(C().quote),m(C().author),I(),k(100)}),500)),y<=0&&clearInterval(t)}),50)},children:"New Quote"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="'.concat(encodeURIComponent(r),'" ').concat(f),className:"btn",id:"tweet-quote",title:"Tweet this quote!",target:"_top",style:{background:x,transition:"background 1.2s"},children:Object(b.jsx)("i",{className:"fa fa-twitter"})}),Object(b.jsx)("a",{href:"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=".concat(encodeURIComponent(f),"&content=").concat(encodeURIComponent(r),"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"),className:"btn",id:"tumblr-quote",title:"Post this quote on tumblr!",target:"_blank",rel:"noreferrer",style:{background:x,transition:"background 1.2s"},children:Object(b.jsx)("i",{className:"fa fa-tumblr"})})]})]})]}),Object(b.jsx)("div",{className:"footer mt-3",children:Object(b.jsx)("span",{className:"text-white",children:"Created by Sabil"})})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.6bfa9e92.chunk.js.map