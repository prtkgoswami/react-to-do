(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),s=c(12),i=c.n(s),a=(c(17),c(8)),l=c(11),o=(c(18),c(3)),x=c(4),d=c(0);var m=function(){var e=Object(n.useState)(["Sample Item For To-Do List","Click Item to Mark as Done","Click X Button to Delete Item"]),t=Object(l.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),i=Object(l.a)(s,2),m=i[0],j=i[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"relative text-left w-100 px-2 py-2 md:px-20 md:py-4",children:Object(d.jsx)("p",{className:"text-2xl md:text-4xl font-medium text-green-400 uppercase",children:"React To-Do"})}),Object(d.jsx)("div",{className:"new-item py-3 px-2 md:px-20",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);r((function(e){return[].concat(Object(a.a)(e),[t.get("title")])})),e.currentTarget.reset()},children:[Object(d.jsx)("input",{type:"text",name:"title",className:"w-full sm:w-2/3 py-2 px-2 md:px-4 md:mx-3 bg-transparent border-b text-white focus:outline-none",placeholder:"Enter Item...  ",required:!0}),Object(d.jsx)("input",{type:"submit",value:"Add Item",className:"py-2 px-3 sm:inline-block hidden md:px-4 bg-gray-900 text-green-300 mx-3 uppercase transition-colors duration-300 hover:bg-gray-700"})]})}),Object(d.jsxs)("div",{className:"item-container py-3 px-5 md:px-40",children:[Object(d.jsx)("div",{className:"title py-2 border-b mb-4",children:Object(d.jsx)("p",{className:"text-xl font-light uppercase text-green-300",children:"Pending"})}),Object(d.jsxs)("div",{className:"item-container flex flex-col items-center",children:[0==c.length&&Object(d.jsx)("p",{className:"p-5 text-green-100 text-md uppercase",children:"--- No Items Found ---"}),c.map((function(e,t){return Object(d.jsxs)("div",{className:"w-full md:w-5/6 flex flex-row my-2",children:[Object(d.jsx)("div",{className:"item-check py-2 px-5 flex-grow text-left",children:Object(d.jsx)("a",{className:"cursor-pointer",onClick:function(){r(c.filter((function(e,c){return c!==t}))),j((function(t){return[].concat(Object(a.a)(t),[e])}))},children:Object(d.jsx)("p",{className:"text-white",children:e})})}),Object(d.jsx)("button",{className:"py-2 px-5 text-white bg-red-700 transition-colors duration-300 hover:bg-red-500",onClick:function(){return r(c.filter((function(e,c){return c!==t})))},children:Object(d.jsx)(o.a,{icon:x.b})})]})}))]})]}),Object(d.jsxs)("div",{className:"done-container py-3 px-5 md:px-40",children:[Object(d.jsx)("div",{className:"title py-2 border-b mb-4",children:Object(d.jsx)("p",{className:"text-xl font-light uppercase text-green-300",children:"Complete"})}),Object(d.jsxs)("div",{className:"item-container flex flex-col items-center",children:[0==m.length&&Object(d.jsx)("p",{className:"p-5 text-green-100 text-md uppercase",children:"--- No Items Found ---"}),m.map((function(e,t){return Object(d.jsxs)("div",{className:"w-full md:w-5/6 flex flex-row my-2",children:[Object(d.jsx)("div",{className:"item-check py-2 px-5 flex-grow text-left",children:Object(d.jsx)("a",{className:"cursor-pointer",onClick:function(){j(m.filter((function(e,c){return c!==t}))),r((function(t){return[].concat(Object(a.a)(t),[e])}))},children:Object(d.jsx)("p",{className:"line-through text-gray-500",children:e})})}),Object(d.jsx)("button",{className:"py-2 px-5 text-white bg-red-700 transition-colors duration-300 hover:bg-red-500",onClick:function(){return j(m.filter((function(e,c){return c!==t})))},children:Object(d.jsx)(o.a,{icon:x.b})})]})}))]})]}),Object(d.jsx)("footer",{className:"relative bottom-0 p-2",children:Object(d.jsxs)("p",{className:"text-green-400",children:["Made with ",Object(d.jsx)(o.a,{icon:x.a,className:"text-red-500"})," by ",Object(d.jsx)("a",{href:"http://prtkgoswami.github.io/",children:"Pratik Goswami"})]})})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),j()}},[[25,1,2]]]);
//# sourceMappingURL=main.52195d7a.chunk.js.map