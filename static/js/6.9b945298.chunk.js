(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{263:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return k});var l=a(21),n=a(0),o=a(2),c=a.n(o),r=a(53),i=a(269),m=a(80),s=a(297),u=a(36),d=a(130),b=a(300),v=a(302),E=a(305),h=a(58),f=a(266),g=a(126),N=a(310),T=a(128),C=a.n(T),p=a(276),x=a(105),S=c.a.bind(a(319));function k(){var e=Object(r.b)(),t=Object(l.a)(e,1)[0],a=n.useState(!1),o=Object(l.a)(a,2),c=o[0],T=o[1],k=n.useState(!1),w=Object(l.a)(k,2),y=w[0],F=w[1],O=n.useState(!1),B=Object(l.a)(O,2),j=B[0],A=B[1],_=n.useState("1"),L=Object(l.a)(_,2),z=L[0],R=L[1],D=n.useState("1"),M=Object(l.a)(D,2),I=M[0],W=M[1],G=n.useState("1"),J=Object(l.a)(G,2),P=J[0],V=J[1],q=n.useState(""),H=Object(l.a)(q,2),X=H[0],Y=H[1],K=n.useState(""),Q=Object(l.a)(K,2),U=Q[0],Z=Q[1],$=n.useState(""),ee=Object(l.a)($,2),te=ee[0],ae=ee[1],le=n.useState(""),ne=Object(l.a)(le,2),oe=ne[0],ce=ne[1],re=n.useContext(x.a);return n.createElement(n.Fragment,null,n.createElement("h1",{className:S("header")},t("navigation.home")),n.createElement("div",{className:S("control")},n.createElement(i.ToggleField,{name:"toggle",label:"Label",onChange:T,value:c})),n.createElement("div",{className:S("control")},n.createElement(m.Button,{onClick:function(){}},"Button")),n.createElement("div",{className:S("control")},n.createElement(m.Button,{onClick:function(){},primary:!0},"Button")),n.createElement("div",{className:S("control")},n.createElement(m.Button,{onClick:function(){},className:"btn-danger"},"Button")),n.createElement("div",{className:S("control")},n.createElement(m.Button,{onClick:function(){},disabled:!0},"Button")),n.createElement("div",{className:S("control")},n.createElement(m.Button,{onClick:function(){},primary:!0,disabled:!0},"Button")),n.createElement("div",{className:S("control")},n.createElement(m.Button,{onClick:function(){},disabled:!0,className:"btn-danger"},"Button")),n.createElement("div",{className:S("control")},n.createElement(u.ActionTriggerButton,{icon:"add",label:"Button"})),n.createElement("div",{className:S("control")},n.createElement(u.ActionTriggerLink,{icon:"add",label:"Link",href:""})),n.createElement("div",{className:S("control")},n.createElement(u.ActionTriggerButton,{icon:"add",label:"Button",disabled:!0})),n.createElement("div",{className:S("control")},n.createElement(s.Alert,{onClose:function(){}},"This is an alert!")),n.createElement("div",{className:S("control")},n.createElement(s.Alert,{onClose:function(){},type:s.AlertType.Warning},"This is an alert!")),n.createElement("div",{className:S("control")},n.createElement(s.Alert,{onClose:function(){},type:s.AlertType.Error},"This is an alert!")),("fluent-light"===re||"fluent-dark"===re)&&n.createElement("div",{className:S("control")},n.createElement(s.Alert,{onClose:function(){},type:s.AlertType.Success},"This is an alert!")),n.createElement("div",{className:S("control")},n.createElement(d.HorizontalLoader,null)),n.createElement("div",{className:S("control"),style:{width:"50px",height:"50px",position:"relative"}},n.createElement(b.Spinner,null)),n.createElement("div",{className:S("control")},n.createElement(v.Thumbnail,{size:"search-result",kind:"device"})),n.createElement("div",{className:S("control")},n.createElement(E.GalleryCard,{banner:"Comming Soon",background:n.createElement(E.SolidBackground,{backgroundColor:"blue",fixed:!0},n.createElement(h.Icon,{icon:"page",size:h.IconSize.large,centered:!0,className:S("icon")})),fixed:!0},n.createElement("header",null,"This is the title"),n.createElement("section",null,"We here explain what this card is and why you should use it without any issues"))),n.createElement("div",{className:S("control")},n.createElement(f.a,null)),n.createElement("div",{className:S("control")},n.createElement(g.Container,{expanded:y,onClick:y?function(){return F(!1)}:function(){return F(!0)}},n.createElement(g.Label,null,n.createElement(h.Icon,{icon:"info"})),n.createElement(g.Panel,{alignment:"left"},n.createElement("ul",{role:"listbox",className:S("option-list")},["One","Two","Three"].map(function(e,t){return n.createElement("li",{key:t,role:"presentation"},n.createElement("button",{"data-idx":t,className:S("inline-text-overflow")},e))}))))),n.createElement("div",{className:S("control")},n.createElement(N.PivotMenu,{links:[{key:"one",icon:"add",label:"One",href:""},{key:"two",icon:"remove",label:"Two",href:"",disabled:!0},{key:"three",icon:"checkMark",label:"Three",href:""}],active:"three"})),n.createElement("div",{className:S("control")},n.createElement(i.CheckboxField,{name:"checkbox",label:"Checkbox",value:j,onChange:function(){return A(function(e){return!e})}})),n.createElement("div",{className:S("control")},n.createElement(i.CheckboxField,{disabled:!0,name:"checkbox",label:"Checkbox",value:j,onChange:function(){return A(function(e){return!e})}})),n.createElement("div",{className:S("control")},n.createElement(i.ComboField,{name:"combo",value:z,label:"Combo",options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0},{label:"Four",value:"4"}],onChange:R,optionSelect:function(e,t){return!!t&&(e===t.value||!!t.label&&e===t.label.toString())}})),n.createElement("div",{className:S("control")},n.createElement(i.ComboField,{disabled:!0,name:"combo",value:z,label:"Combo",options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0},{label:"Four",value:"4"}],onChange:R,optionSelect:function(e,t){return!!t&&(e===t.value||!!t.label&&e===t.label.toString())}})),n.createElement("div",{className:S("control")},n.createElement(i.RadioField,{name:"radio",label:"Radio",value:I,options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0},{label:"Four",value:"4"}],onChange:W})),n.createElement("div",{className:S("control")},n.createElement(i.RadioField,{disabled:!0,name:"radio",label:"Radio",value:I,options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0},{label:"Four",value:"4"}],onChange:W})),n.createElement("div",{className:S("control")},n.createElement(i.SelectField,{name:"select",label:"Select",value:P,options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0},{label:"Four",value:"4"}],onChange:V})),n.createElement("div",{className:S("control")},n.createElement(i.SelectField,{disabled:!0,name:"select",label:"Select",value:P,options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3",disabled:!0},{label:"Four",value:"4"}],onChange:V})),n.createElement("div",{className:S("control")},n.createElement(i.TextAreaField,{name:"textarea",label:"TextArea",value:X,onChange:Y})),n.createElement("div",{className:S("control")},n.createElement(i.TextAreaField,{disabled:!0,name:"textarea",label:"TextArea",value:X,onChange:Y})),n.createElement("div",{className:S("control")},n.createElement(i.TextField,{name:"text",label:"Text",value:U,onChange:Z})),n.createElement("div",{className:S("control")},n.createElement(i.TextField,{disabled:!0,name:"text",label:"Text",value:U,onChange:Z})),n.createElement("div",{className:S("control")},n.createElement(i.TextField,{tooltip:"This is some text for the tooltip",error:"This is an error message",name:"text",label:"Text",required:!0,value:U,onChange:Z})),n.createElement("div",{className:S("control")},n.createElement(C.a,{label:"Search",onSubmit:function(){},onChange:ae,value:te})),n.createElement("div",{className:S("control")},n.createElement(p.DateTimeField,{name:"datetime",label:"DateTime",initialValue:oe,onChange:ce})),n.createElement("div",{className:S("control")},n.createElement(p.DateTimeField,{disabled:!0,name:"datetime",label:"DateTime",initialValue:oe,onChange:ce})))}},266:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var l=a(21),n=a(0),o=a(272),c=a(37),r=a(16),i=a(43);function m(){var e=n.useState(function(){return[{id:"foo",name:"Foo",location:"Seattle"},{id:"bar",name:"Bar",location:"Redmond"}]}),t=Object(l.a)(e,1)[0],a=n.useState(new Set),c=Object(l.a)(a,2),r=c[0],i=c[1];return n.createElement(n.Fragment,null,n.createElement("h2",null,"List"),n.createElement(o.GenericManagementList,{rows:t,columns:[{label:"Name",mapColumn:s},{label:"Location",mapColumn:"location"}],isSelected:function(e){return r.has(e.id)},onSelect:function(e){var t=new Set(r);t.delete(e.id)||t.add(e.id),i(t)},onSelectAll:function(){var e=new Set;if(t.length!==r.size){var a=!0,l=!1,n=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var m=o.value;e.add(m.id)}}catch(s){l=!0,n=s}finally{try{a||null==c.return||c.return()}finally{if(l)throw n}}}i(e)}}))}function s(e){return n.createElement(c.b,{to:Object(r.e)(i.a.examples.parameterized,{id:e.id}),className:"link"},e.name)}},319:function(e,t,a){e.exports={header:"home_header__1Yyyy",control:"home_control__2M1Wx",icon:"home_icon__3egXa"}}}]);
//# sourceMappingURL=6.9b945298.chunk.js.map