(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(4),s=n.n(a),l=(n(14),n(6)),i=n(2),r=n(8),o=(n(15),n(0)),j=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),a=n[0],s=n[1],l=Object(c.useState)(""),r=Object(i.a)(l,2),j=r[0],u=r[1],d=Object(c.useState)(""),b=Object(i.a)(d,2),x=b[0],m=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,amount:j,date:new Date(x)};e.onSaveExpenseData(n),s(""),u(""),m("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:a,onChange:function(e){s(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){u(e.target.value)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:x,onChange:function(e){m(e.target.value)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add Expense"})]})]})},u=(n(17),function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),a=n[0],s=n[1];return Object(o.jsxs)("div",{className:"new-expense",children:[!a&&Object(o.jsx)("button",{onClick:function(){s(!0)},children:"Add New Expense"}),a&&Object(o.jsx)(j,{onSaveExpenseData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),s(!1)},onCancel:function(){s(!1)}})]})}),d=(n(18),function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})}),b=(n(19),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})}),x=(n(20),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"backdrop"})})}),m=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("card",{className:"modal",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h2",{children:e.title})}),Object(o.jsx)("div",{className:"content",children:Object(o.jsx)("p",{children:e.message})}),Object(o.jsxs)("footer",{className:"actions",children:[Object(o.jsx)("button",{className:"actions-button",onClick:e.confirm,children:"Okay"}),"\xa0\xa0",Object(o.jsx)("button",{className:"actions-button",onClick:e.cancel,children:"Cancel"})]})]})})},O=function(e){return Object(o.jsxs)(o.Fragment,{children:[s.a.createPortal(Object(o.jsx)(x,{}),document.getElementById("backdrop")),s.a.createPortal(Object(o.jsx)(m,{title:e.title,message:e.message,cancel:e.onCancel,confirm:e.onConfirm}),document.getElementById("modal"))]})},h=(n(21),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),c=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:c}),Object(o.jsx)("div",{className:"expense-date__day",children:n})]})}),v=(n(22),function(e){var t=Object(c.useState)(null),n=Object(i.a)(t,2),a=n[0],s=n[1],l=function(){console.log("done ExpenseItem.js"),e.onDeleteItem(e.Id)};return Object(o.jsxs)("li",{children:[a&&Object(o.jsx)(O,{title:a.title,message:a.message,onConfirm:function(){l(),s(null)},onCancel:function(){s(null)}}),Object(o.jsxs)(d,{className:"expense-item",children:[Object(o.jsx)(h,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]}),Object(o.jsx)("button",{className:"deleteItem",type:"submit",onClick:function(){null!=a||s({message:"Do you want to delete this expense?",title:"Delete expense",id:e.Id})},children:"Delete"})]})]})]})}),p=(n(23),function(e){if(0===e.items.length)return Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."});var t=function(t){console.log("done ExpenseList.js"),e.onDeleteExpenses(t)};return Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(o.jsx)(v,{Id:e.id,title:e.title,amount:e.amount,date:e.date,onDeleteItem:t},e.id)}))})}),f=n(9),g=(n(24),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),N=(n(25),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(g,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),_=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],c=Object(f.a)(e.expenses);try{for(c.s();!(t=c.n()).done;){var a=t.value;n[a.date.getMonth()].value+=a.amount}}catch(s){c.e(s)}finally{c.f()}return Object(o.jsx)(N,{dataPoints:n})},y=(n(26),function(e){var t=Object(c.useState)("2020"),n=Object(i.a)(t,2),a=n[0],s=n[1],l=e.items.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(o.jsx)("div",{children:Object(o.jsxs)(d,{className:"expenses",children:[Object(o.jsx)(b,{selected:a,onChangeFilter:function(e){s(e)}}),Object(o.jsx)(_,{expenses:l}),Object(o.jsx)(p,{items:l,onDeleteExpenses:function(t){console.log("done Expenses.js"),e.onDelete(t)}})]})})}),C=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{onAddExpense:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(o.jsx)(y,{items:n,onDelete:function(e){console.log("done App.js"),a((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};s.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.ea562fdb.chunk.js.map