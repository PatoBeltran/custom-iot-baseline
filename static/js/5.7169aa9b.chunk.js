(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{264:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a(0),i=a(38),o=a(12),r=a(2),c=a.n(r),u=a(53),m=a(17),d=a(266);function s(e){var t=e.match;return l.createElement("h4",null,"This is a parameterized route for: ",t.params.id)}var p=a(269),b=a(276),f=r.bind(a(320));function v(){var e=l.useState(""),t=Object(n.a)(e,2),a=t[0],i=t[1],o=l.useState(!0),r=Object(n.a)(o,2),c=r[0],u=r[1],m=l.useState(!0),d=Object(n.a)(m,2),s=d[0],v=d[1],E=l.useState("option1"),x=Object(n.a)(E,2),F=x[0],S=x[1],g=l.useState(""),O=Object(n.a)(g,2),j=O[0],w=O[1];return l.createElement("div",{className:f("container")},l.createElement("h2",null,"Inputs"),l.createElement(p.TextField,{name:"textField",value:a,onChange:i,label:"Text Field",tooltip:"Description for a text field",required:!0}),l.createElement(p.CheckboxField,{name:"checkboxField",value:c,onChange:u,label:"Checkbox Field"}),l.createElement(p.ToggleField,{name:"toggleField",value:s,onChange:v,label:"Toggle Field",onLabel:"Enabled",offLabel:"Disabled"}),l.createElement(p.RadioField,{name:"radioField",value:F,onChange:S,label:"Radio Field",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}]}),l.createElement(h,null),l.createElement(b.DateTimeField,{name:"dateTimeField",initialValue:j,onChange:w,label:"Date Time Field"}))}function h(){var e=l.useState(""),t=Object(n.a)(e,2),a=t[0],i=t[1],o=l.useState([{value:"",label:"Loading\u2026",disabled:!0,hidden:!0}]),r=Object(n.a)(o,2),c=r[0],u=r[1];return l.useEffect(function(){var e=setTimeout(function(){u([{value:"",label:"Select an option",hidden:!0,disabled:!0},{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}])},2e3);return function(){return clearTimeout(e)}},[u]),l.createElement(p.SelectField,{name:"selectField",value:a,onChange:i,label:"Select Field",options:c})}a.d(t,"default",function(){return x});var E=c.a.bind(a(321));function x(){var e=Object(u.b)(),t=Object(n.a)(e,1)[0];return l.createElement("div",{className:E("container")},l.createElement("h1",{className:E("header")},l.createElement(i.b,{to:m.a.examples.index,className:"link"},t("navigation.examples"))),l.createElement(o.c,null,l.createElement(o.a,{path:m.a.examples.index,exact:!0,component:F}),l.createElement(o.a,{path:m.a.examples.list,component:d.a}),l.createElement(o.a,{path:m.a.examples.inputs,component:v}),l.createElement(o.a,{path:m.a.examples.parameterized,component:s})))}function F(){return l.createElement("ul",null,l.createElement("li",null,l.createElement(i.b,{to:m.a.examples.list,className:"link"},"List")),l.createElement("li",null,l.createElement(i.b,{to:m.a.examples.inputs,className:"link"},"Inputs")))}},266:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(22),l=a(0),i=a(272),o=a(38),r=a(12),c=a(17);function u(){var e=l.useState(function(){return[{id:"foo",name:"Foo",location:"Seattle"},{id:"bar",name:"Bar",location:"Redmond"}]}),t=Object(n.a)(e,1)[0],a=l.useState(new Set),o=Object(n.a)(a,2),r=o[0],c=o[1];return l.createElement(l.Fragment,null,l.createElement("h2",null,"List"),l.createElement(i.GenericManagementList,{rows:t,columns:[{label:"Name",mapColumn:m},{label:"Location",mapColumn:"location"}],isSelected:function(e){return r.has(e.id)},onSelect:function(e){var t=new Set(r);t.delete(e.id)||t.add(e.id),c(t)},onSelectAll:function(){var e=new Set;if(t.length!==r.size){var a=!0,n=!1,l=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var u=i.value;e.add(u.id)}}catch(m){n=!0,l=m}finally{try{a||null==o.return||o.return()}finally{if(n)throw l}}}c(e)}}))}function m(e){return l.createElement(o.b,{to:Object(r.e)(c.a.examples.parameterized,{id:e.id}),className:"link"},e.name)}},320:function(e,t,a){e.exports={container:"inputs_container__3HOhf"}},321:function(e,t,a){e.exports={container:"examples_container__TqAyc",header:"examples_header__I1t_G"}}}]);
//# sourceMappingURL=5.7169aa9b.chunk.js.map