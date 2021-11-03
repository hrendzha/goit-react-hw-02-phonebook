(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={field:"ContactForm_field__2c9Zi",fieldWrapper:"ContactForm_fieldWrapper__iMy9i",label:"ContactForm_label__378f8",contactForm:"ContactForm_contactForm__OrlO3"}},,,,,,,,function(t,e,n){t.exports={field:"Filter_field__1fRnc",label:"Filter_label__3DcZT"}},,,function(t,e,n){t.exports={btnDelete:"ContactListItem_btnDelete__3JKCV"}},function(t,e,n){t.exports={listItem:"ContactList_listItem__29Cbr"}},function(t,e,n){t.exports={container:"Container_container__3RIox"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),i=n.n(r),s=(n(20),n(21),n(3)),o=n(11),l=n(5),u=n(6),b=n(8),d=n(7),j=n(25),h=n(4),m=n(2),f=n.n(m),p=n(0),O={name:"",number:""},x=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(s.a)({},O),t.handleInputChange=function(e){return t.setState(Object(h.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.onSubmit,a=t.state.name;t.isContactNameExist()?alert("".concat(a," is already in contacts")):(n(t.state),t.resetState())},t.resetState=function(){return t.setState(Object(s.a)({},O))},t.isContactNameExist=function(){return t.props.contacts.find((function(e){return e.name===t.state.name}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:f.a.contactForm,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("div",{className:f.a.fieldWrapper,children:[Object(p.jsxs)("label",{className:f.a.field,children:[Object(p.jsx)("span",{className:f.a.label,children:"Name"}),Object(p.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleInputChange})]}),Object(p.jsxs)("label",{className:f.a.field,children:[Object(p.jsx)("span",{className:f.a.label,children:"Number"}),Object(p.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleInputChange})]})]}),Object(p.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=x,v=n(10),_=n.n(v);var g=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:_.a.field,children:[Object(p.jsx)("span",{className:_.a.label,children:"Find contacts by name"}),Object(p.jsx)("input",{type:"text",name:"filter",value:e,onChange:n})]})},F=n(13),y=n.n(F);var N=function(t){var e=t.name,n=t.number,a=t.onClick;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("span",{children:[e,": ",n]}),Object(p.jsx)("button",{className:y.a.btnDelete,type:"button",onClick:a,children:"Delete"})]})},S=n(14),k=n.n(S);var D=function(t){var e=t.contacts,n=t.onContactDelete;return Object(p.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsx)("li",{className:k.a.listItem,children:Object(p.jsx)(N,{name:a,number:c,onClick:function(){return n(e)}})},e)}))})},I=n(15),w=n.n(I);var A=function(t){var e=t.children;return Object(p.jsx)("div",{className:w.a.container,children:e})},Z=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleFormSubmit=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(o.a)(n),[Object(s.a)({id:Object(j.a)()},e)])}}))},t.handleFilterChange=function(e){return t.setState({filter:e.target.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.handleContactDelete=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(p.jsxs)(A,{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(C,{onSubmit:this.handleFormSubmit,contacts:Object(o.a)(e)}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(g,{value:n,onChange:this.handleFilterChange}),Object(p.jsx)(D,{contacts:this.getFilteredContacts(),onContactDelete:this.handleContactDelete})]})}}]),n}(a.Component),z=Z;i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.365c442d.chunk.js.map