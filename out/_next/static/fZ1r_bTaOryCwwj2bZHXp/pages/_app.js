(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"1TCz":function(t,n,e){"use strict";e.r(n);var r=e("Jo+v"),o=e.n(r),a=e("4mXO"),u=e.n(a),i=e("pLtp"),c=e.n(i),l=e("hfKm"),s=e.n(l);function f(t,n,e){return n in t?s()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=c()(e);"function"===typeof u.a&&(r=r.concat(u()(e).filter(function(t){return o()(e,t).enumerable}))),r.forEach(function(n){f(t,n,e[n])})}return t}function v(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),s()(t,r.key,r)}}var h=e("XVgq"),m=e.n(h),d=e("Z7t5"),y=e.n(d);function b(t){return(b="function"===typeof y.a&&"symbol"===typeof m.a?function(t){return typeof t}:function(t){return t&&"function"===typeof y.a&&t.constructor===y.a&&t!==y.a.prototype?"symbol":typeof t})(t)}function g(t){return(g="function"===typeof y.a&&"symbol"===b(m.a)?function(t){return b(t)}:function(t){return t&&"function"===typeof y.a&&t.constructor===y.a&&t!==y.a.prototype?"symbol":b(t)})(t)}function w(t,n){return!n||"object"!==g(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var k=e("Bhuq"),x=e.n(k),C=e("TRZx"),_=e.n(C);function P(t){return(P=_.a?x.a:function(t){return t.__proto__||x()(t)})(t)}var T=e("SqZg"),I=e.n(T);function N(t,n){return(N=_.a||function(t,n){return t.__proto__=n,t})(t,n)}var E=e("q1tI"),S=e.n(E),q=e("8Bbg"),B=e.n(q),G=e("z0J0"),J=S.a.createElement,O=function(){var t=Object(E.useContext)(G.a),n=t.time,e=t.colour;return J(S.a.Fragment,null,J("div",{style:{backgroundColor:e,transition:"background-color 0.9s ease"},className:"h-4 w-screen fixed inset-x-0 top-0"}),J("div",{style:{backgroundColor:e,transition:"background-color 0.9s ease"},className:"w-4 h-screen fixed inset-y-0 left-0"}),J("span",{className:"fixed top-0 right-0 text-xs font-light opacity-50 pr-2 text-white"},n," / ",e))},j=e("T8Fm"),D=e("weqx"),R=e("vypm"),U=S.a.createElement,X=function(){var t=Object(E.useContext)(G.a).colour;return U(D.a,null,U("nav",{className:"border-b-2",style:{borderBottomColor:t,transition:"border-color 0.9s ease"}},U("ul",{className:"mb-1"},R.items.map(function(t){return U("li",{className:"inline mr-4"},U(j.a,{text:t.title,href:t.link}))}))))};function Z(t){var n=new Date,e=n.getHours().toString(),r=n.getMinutes().toString(),o=n.getSeconds().toString();e<10&&(e="0".concat(e)),r<10&&(r="0".concat(r)),o<10&&(o="0".concat(o));var a="".concat(e,":").concat(r,":").concat(o),u=e+r+o,i=u.replace(/0/g,"a");return i=(i=i.replace(/1/g,"b")).replace(/2/g,"c"),{colour:"#".concat(t?u:i),time:a}}var z=S.a.createElement,A=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=w(this,P(n).call(this,t))).state={colour:"#fff",time:""},e}var e,r,o;return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=I()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&N(t,n)}(n,B.a),e=n,(r=[{key:"componentDidMount",value:function(){this.colourClock()}},{key:"componentWillUnmount",value:function(){var t=this.state.interval;clearInterval(t)}},{key:"colourClock",value:function(){var t=this;this.setState(p({},Z()));var n=setInterval(function(){t.setState(p({},Z()))},1e3);this.setState({interval:n})}},{key:"render",value:function(){var t=this.state,n=t.colour,e=t.time,r=this.props,o=r.Component,a=r.pageProps;return z(G.a.Provider,{value:{colour:n,time:e}},z(O,null),z(X,null),z(o,a)," ")}}])&&v(e.prototype,r),o&&v(e,o),n}();n.default=A},"8Bbg":function(t,n,e){t.exports=e("B5Ud")},B5Ud:function(t,n,e){"use strict";var r=e("/HRN"),o=e("WaGi"),a=e("ZDA2"),u=e("/+P4"),i=e("N9n2"),c=e("ln6h"),l=e("KI45");n.__esModule=!0,n.Container=function(t){0;return t.children},n.createUrl=g,n.default=void 0;var s=l(e("htGi")),f=l(e("+oT+")),p=l(e("q1tI")),v=l(e("17x9")),h=e("g/15");n.AppInitialProps=h.AppInitialProps;var m=e("nOHt");function d(t){return y.apply(this,arguments)}function y(){return(y=(0,f.default)(c.mark(function t(n){var e,r,o;return c.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.Component,r=n.ctx,t.next=3,(0,h.loadGetInitialProps)(e,r);case 3:return o=t.sent,t.abrupt("return",{pageProps:o});case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}var b=function(t){function n(){return r(this,n),a(this,u(n).apply(this,arguments))}return i(n,t),o(n,[{key:"getChildContext",value:function(){return{router:(0,m.makePublicRouterInstance)(this.props.router)}}},{key:"componentDidCatch",value:function(t,n){throw t}},{key:"render",value:function(){var t=this.props,n=t.router,e=t.Component,r=t.pageProps,o=g(n);return p.default.createElement(e,(0,s.default)({},r,{url:o}))}}]),n}(p.default.Component);function g(t){var n=t.pathname,e=t.asPath,r=t.query;return{get query(){return r},get pathname(){return n},get asPath(){return e},back:function(){t.back()},push:function(n,e){return t.push(n,e)},pushTo:function(n,e){var r=e?n:"",o=e||n;return t.push(r,o)},replace:function(n,e){return t.replace(n,e)},replaceTo:function(n,e){var r=e?n:"",o=e||n;return t.replace(r,o)}}}n.default=b,b.childContextTypes={router:v.default.object},b.origGetInitialProps=d,b.getInitialProps=d},GcxT:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return e("1TCz")}])},vypm:function(t){t.exports=JSON.parse('{"items":[{"title":"home","link":"/"},{"title":"resume / cv","link":"/resume"},{"title":"bero","link":"/bero"},{"title":"contact","link":"/contact"}]}')}},[["GcxT",1,0]]]);