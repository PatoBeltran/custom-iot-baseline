(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{105:function(e,t,n){"use strict";var a=n(21),r=n(0),o=n(113),l=n(79),i=n(53),c=n(56),s=n(80),u=n(104),m={dark:"dark",light:"light",fluentLight:"fluent-light",fluentDark:"fluent-dark"};function d(e){var t=e.loc,n=e.onSave,o=e.onCancel,l=e.settings,i=r.useState(l.theme),d=Object(a.a)(i,2),h=d[0],f=d[1];return r.createElement(c.ContextPanel,{header:t("settings.title"),footer:r.createElement(r.Fragment,null,r.createElement(s.Button,{onClick:function(){return n({theme:h})},primary:!0},t("save")),r.createElement(s.Button,{onClick:o},t("cancel"))),onClose:o},r.createElement(u.SelectField,{name:"theme",label:t("settings.theme"),value:h,options:[{label:t("settings.themes.dark"),value:m.dark},{label:t("settings.themes.light"),value:m.light},{label:t("settings.themes.fluentLight"),value:m.fluentLight},{label:t("settings.themes.fluentDark"),value:m.fluentDark}],autoFocus:!0,onChange:f}))}function h(e){var t=e.loc,n=e.onCancel;return r.createElement(c.ContextPanel,{header:t("help.title"),onClose:n},r.createElement("a",{className:"link",href:"https://github.com/Azure/iot-ux-baseline",target:"_blank",rel:"noopener noreferrer"},t("help.getStarted")))}var f=n(43),g=n(2),p=n.n(g),v=n(37),b=p.a.bind(null);function E(e){var t=e.loc;return r.createElement(r.Fragment,null,r.createElement(x,{to:f.a.home.index,exact:!0,title:t("navigation.home"),icon:"icon-home",text:t("navigation.home")}),r.createElement(x,{to:f.a.examples.index,title:t("navigation.examples"),icon:"icon-education",text:t("navigation.examples")}))}function x(e){var t=e.to,n=e.exact,a=e.title,o=e.icon,l=e.text;return r.createElement(v.c,{to:t,exact:n,title:a,className:"global-nav-item",activeClassName:"global-nav-item-active"},r.createElement("span",{className:b("global-nav-item-icon","icon",o)}),r.createElement("span",{className:b("inline-text-overflow","global-nav-item-text")},l))}n(261);var k=n(55);n.d(t,"a",function(){return C}),n.d(t,"b",function(){return j});var C=r.createContext(m.light);function j(){var e=Object(i.b)(),t=Object(a.a)(e,2),n=t[0],c=t[1],s=r.useState(""),u=Object(a.a)(s,2),g=u[0],p=u[1],v=r.useState({theme:m.light}),b=Object(a.a)(v,2),x=b[0],j=b[1];function P(){p("")}var S=function(e){var t=r.useState(!0),n=Object(a.a)(t,2),o=n[0],l=n[1];return{isExpanded:o,onClick:function(){l(!o)},attr:{navButton:{title:e(o?"navigation.collapse":"navigation.expand")}},children:r.createElement(E,{loc:e})}}(n),y=function(e,t,n,a){return{branding:e("masthead"),more:{onClick:O("moreMenu",n),selected:"moreMenu"===t,title:e("more")},navigation:{isExpanded:"navMenu"===t,onClick:O("navMenu",n),attr:a.attr,children:a.children},toolbarItems:[{icon:"settings",label:e("settings.title"),onClick:O("settingsPanel",n),selected:"settingsPanel"===t,attr:{button:{"aria-label":e("settings.title")}}},{icon:"help",label:e("help.title"),onClick:O("helpPanel",n),selected:"helpPanel"===t,attr:{button:{"aria-label":e("help.title")}}}],user:void 0}}(n,g,p,S);return r.createElement(C.Provider,{value:x.theme},r.createElement(o.Shell,{theme:x.theme,isRtl:"rtl"===c.dir(),navigation:S,masthead:y,onClick:P},r.createElement(k.a,{message:n("errors.default")},r.createElement(r.Suspense,{fallback:r.createElement(l.HorizontalLoader,null)},r.createElement(f.b,null))),r.createElement("div",{onClick:w},"settingsPanel"===g&&r.createElement(d,{settings:x,onSave:function(e){j(e),P()},onCancel:P,loc:n}),"helpPanel"===g&&r.createElement(h,{onCancel:P,loc:n}))))}function w(e){e&&e.stopPropagation()}function O(e,t){return function(n){n&&n.stopPropagation(),t(e)}}},134:function(e,t,n){e.exports=n(262)},219:function(e,t,n){var a={"./de/translations.resjson":98,"./en/translations.resjson":99};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=219},220:function(e,t,n){var a={"./de/translations.resjson":98,"./en/translations.resjson":99};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=220},261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);n(135);var a=n(0),r=n(78),o=n(37),l=n(53),i=n(55),c=n(105);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a(),r.render(a.createElement(a.StrictMode,null,a.createElement(i.a,{message:"Something went wrong"},a.createElement(a.Suspense,{fallback:""},a.createElement(o.a,{basename:"/custom-iot-baseline"},a.createElement(c.b,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},43:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c});var a=n(0),r=n(16),o=a.lazy(function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,263))}),l=a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,264))}),i={home:{index:"/"},examples:{index:"/examples",parameterized:"/examples/parameterizedRoutes/:id",list:"/examples/list",inputs:"/examples/inputs"}};function c(){return a.createElement(r.c,null,a.createElement(r.a,{exact:!0,path:i.home.index,component:o}),a.createElement(r.a,{path:i.examples.index,component:l}))}},53:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(21);var a,r=n(118),o=n(107),l=n.n(o),i=n(108),c=n.n(i),s=n(33);function u(){var e=n(219),t=[];e.keys().forEach(function(n){e(n);var a=n.split("/"),r=a[a.length-2];t.push(r)});(a=r.a.use(l.a).use(c.a).use(s.a)).on("languageChanged",function(e){document.documentElement.lang=e}),a.init({backend:{allowMultiLoading:!1,loadPath:function(e,t){try{return n(220)("./".concat(e[0],"/").concat(t[0],".resjson"))}catch(a){return"static/locales/".concat(e[0],"/").concat(t[0],".resjson.missing")}}},fallbackLng:"en",whitelist:t,ns:["translations"],defaultNS:"translations",debug:!1,interpolation:{escapeValue:!1},postProcess:[]})}n.d(t,"b",function(){return s.b})},55:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(110),r=n(111),o=n(119),l=n(112),i=n(120),c=n(0),s=n.n(c),u=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?s.a.createElement("h2",null,this.props.message):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(s.a.Component)},98:function(e,t,n){e.exports=n.p+"static/media/translations.16b4f74d.resjson"},99:function(e,t,n){e.exports=n.p+"static/media/translations.5a117aac.resjson"}},[[134,2,3]]]);
//# sourceMappingURL=main.6bf35b0d.chunk.js.map