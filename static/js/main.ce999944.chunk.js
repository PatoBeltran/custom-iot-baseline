(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(e,t,n){"use strict";var a=n(22),i=n(0),o=n(113),l=n(78),r=n(53),c=n(56),s=n(79),u=n(104),m={dark:"dark",light:"light",fluentLight:"fluent-light",fluentDark:"fluent-dark"};function d(e){var t=e.loc,n=e.onSave,o=e.onCancel,l=e.settings,r=i.useState(l.theme),d=Object(a.a)(r,2),f=d[0],h=d[1];return i.createElement(c.ContextPanel,{header:t("settings.title"),footer:i.createElement(i.Fragment,null,i.createElement(s.Button,{onClick:function(){return n({theme:f})},primary:!0},t("save")),i.createElement(s.Button,{onClick:o},t("cancel"))),onClose:o},i.createElement(u.SelectField,{name:"theme",label:t("settings.theme"),value:f,options:[{label:t("settings.themes.dark"),value:m.dark},{label:t("settings.themes.light"),value:m.light},{label:t("settings.themes.fluentLight"),value:m.fluentLight},{label:t("settings.themes.fluentDark"),value:m.fluentDark}],autoFocus:!0,onChange:h}))}function f(e){var t=e.loc,n=e.onCancel;return i.createElement(c.ContextPanel,{header:t("help.title"),onClose:n},i.createElement("a",{className:"link",href:"https://github.com/Azure/iot-ux-baseline",target:"_blank",rel:"noopener noreferrer"},t("help.getStarted")))}var h=n(17),v=n(2),g=n.n(v),p=n(38),x=g.a.bind(null);function b(e){var t=e.loc;return i.createElement(i.Fragment,null,i.createElement(k,{to:h.a.home.index,exact:!0,title:t("navigation.home"),icon:"icon-home",text:t("navigation.home")}),i.createElement(k,{to:h.a.examples.index,title:t("navigation.examples"),icon:"icon-education",text:t("navigation.examples")}),i.createElement(k,{to:h.a.fun1.index,title:t("navigation.examples"),icon:"icon-education",text:t("navigation.examples")}),i.createElement(k,{to:h.a.fun2.index,title:t("navigation.examples"),icon:"icon-education",text:t("navigation.examples")}),i.createElement(k,{to:h.a.fun3.index,title:t("navigation.examples"),icon:"icon-education",text:t("navigation.examples")}),i.createElement(k,{to:h.a.fun4.index,title:t("navigation.examples"),icon:"icon-education",text:t("navigation.examples")}))}function E(e){var t=e.loc;return i.createElement(k,{to:h.a.fun5.index,title:t("navigation.examples"),icon:"icon-education",text:t("navigation.examples")})}function k(e){var t=e.to,n=e.exact,a=e.title,o=e.icon,l=e.text;return i.createElement(p.c,{to:t,exact:n,title:a,className:"global-nav-item",activeClassName:"global-nav-item-active"},i.createElement("span",{className:x("global-nav-item-icon","icon",o)}),i.createElement("span",{className:x("inline-text-overflow","global-nav-item-text")},l))}n(261);var C=n(55),j=n(12);n.d(t,"a",function(){return w});var w=i.createContext(m.light);function O(e){e&&e.stopPropagation()}function P(e,t){return function(n){n&&n.stopPropagation(),t(e)}}t.b=Object(j.f)(function(){var e=Object(r.b)(),t=Object(a.a)(e,2),n=t[0],c=t[1],s=i.useState(""),u=Object(a.a)(s,2),v=u[0],g=u[1],p=i.useState({theme:m.light}),x=Object(a.a)(p,2),k=x[0],j=x[1];function S(){g("")}var y=function(e){var t=i.useState(!0),n=Object(a.a)(t,2),o=n[0],l=n[1];return{isExpanded:o,onClick:function(){l(!o)},attr:{navButton:{title:e(o?"navigation.collapse":"navigation.expand")}},children:i.createElement(b,{loc:e}),farBottomChildren:i.createElement(E,{loc:e})}}(n),N=function(e,t,n,a){return{branding:e("masthead"),more:{onClick:P("moreMenu",n),selected:"moreMenu"===t,title:e("more")},navigation:{isExpanded:"navMenu"===t,onClick:P("navMenu",n),attr:a.attr,children:a.children},toolbarItems:[{icon:"settings",label:e("settings.title"),onClick:P("settingsPanel",n),selected:"settingsPanel"===t,attr:{button:{"aria-label":e("settings.title")}}},{icon:"help",label:e("help.title"),onClick:P("helpPanel",n),selected:"helpPanel"===t,attr:{button:{"aria-label":e("help.title")}}}],user:void 0}}(n,v,g,y);return i.createElement(w.Provider,{value:k.theme},i.createElement(o.Shell,{theme:k.theme,isRtl:"rtl"===c.dir(),navigation:y,masthead:N,onClick:S},i.createElement(C.a,{message:n("errors.default")},i.createElement(i.Suspense,{fallback:i.createElement(l.HorizontalLoader,null)},i.createElement(h.b,null))),i.createElement("div",{onClick:O},"settingsPanel"===v&&i.createElement(d,{settings:k,onSave:function(e){j(e),S()},onCancel:S,loc:n}),"helpPanel"===v&&i.createElement(f,{onCancel:S,loc:n}))))})},134:function(e,t,n){e.exports=n(262)},17:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c});var a=n(0),i=n(12),o=a.lazy(function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,263))}),l=a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,264))}),r={home:{index:"/"},examples:{index:"/examples",parameterized:"/examples/parameterizedRoutes/:id",list:"/examples/list",inputs:"/examples/inputs"},fun1:{index:"/fun1"},fun2:{index:"/fun2"},fun3:{index:"/fun3"},fun4:{index:"/fun4"},fun5:{index:"/fun5"}};function c(){return a.createElement(i.c,null,a.createElement(i.a,{exact:!0,path:r.home.index,component:o}),a.createElement(i.a,{path:r.examples.index,component:l}))}},219:function(e,t,n){var a={"./de/translations.resjson":98,"./en/translations.resjson":99};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=219},220:function(e,t,n){var a={"./de/translations.resjson":98,"./en/translations.resjson":99};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=220},261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);n(135);var a=n(0),i=n(77),o=n(38),l=n(53),r=n(55),c=n(105);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a(),i.render(a.createElement(a.StrictMode,null,a.createElement(r.a,{message:"Something went wrong"},a.createElement(a.Suspense,{fallback:""},a.createElement(o.a,{basename:"/custom-iot-baseline"},a.createElement(c.b,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},53:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(22);var a,i=n(118),o=n(107),l=n.n(o),r=n(108),c=n.n(r),s=n(34);function u(){var e=n(219),t=[];e.keys().forEach(function(n){e(n);var a=n.split("/"),i=a[a.length-2];t.push(i)});(a=i.a.use(l.a).use(c.a).use(s.a)).on("languageChanged",function(e){document.documentElement.lang=e}),a.init({backend:{allowMultiLoading:!1,loadPath:function(e,t){try{return n(220)("./".concat(e[0],"/").concat(t[0],".resjson"))}catch(a){return"static/locales/".concat(e[0],"/").concat(t[0],".resjson.missing")}}},fallbackLng:"en",whitelist:t,ns:["translations"],defaultNS:"translations",debug:!1,interpolation:{escapeValue:!1},postProcess:[]})}n.d(t,"b",function(){return s.b})},55:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(110),i=n(111),o=n(119),l=n(112),r=n(120),c=n(0),s=n.n(c),u=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},n}return Object(r.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?s.a.createElement("h2",null,this.props.message):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(s.a.Component)},98:function(e,t,n){e.exports=n.p+"static/media/translations.16b4f74d.resjson"},99:function(e,t,n){e.exports=n.p+"static/media/translations.5a117aac.resjson"}},[[134,2,3]]]);
//# sourceMappingURL=main.ce999944.chunk.js.map