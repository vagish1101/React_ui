(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{2100:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r(1),o=r.n(n),a=r(2101),i=r.n(a);r(2293),r(2292);function u(e){return o.a.createElement("span",{className:"BootstrapSliderWrapper"},o.a.createElement(i.a,e))}},2292:function(e,t,r){},2713:function(e,t,r){"use strict";r.d(t,"b",function(){return p}),r.d(t,"a",function(){return f}),r.d(t,"c",function(){return y});var n=r(2903),o=r(21),a=r(2716);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=.25,s={LAT_MIN:-90,LAT_MAX:90,LNG_MIN:-180,LNG_MAX:180};function l(e){var t=o.extent(e,function(e){return e[1]}),r=o.extent(e,function(e){return e[0]}),n=t[0]===t[1]?function(e){return[e[0]-c<s.LAT_MIN?s.LAT_MIN:e[0]-c,e[1]+c>s.LAT_MAX?s.LAT_MAX:e[1]+c]}(t):t,a=r[0]===r[1]?function(e){return[e[0]-c<s.LNG_MIN?s.LNG_MIN:e[0]-c,e[1]+c>s.LNG_MAX?s.LNG_MAX:e[1]+c]}(r):r;return[[a[0],n[0]],[a[1],n[1]]]}function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;try{var o=l(t);return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e,{},Object(n.a)({height:e.height,width:e.width,padding:r,bounds:o}))}catch(t){return console.error("Could not auto zoom",t),e}}function f(e,t,r,n){var o,i,u=e,c=r;return u.js_tooltip&&(c=Object(a.a)(u.js_tooltip)),c&&(o=function(e){e.picked?t({content:c(e),x:e.x,y:e.y+30}):t(null)}),u.js_onclick_href?i=function(e){var t=Object(a.a)(u.js_onclick_href)(e);window.open(t)}:u.table_filter&&void 0!==n&&(i=function(e){return n(e.object[u.line_column])}),{onClick:i,onHover:o,pickable:Boolean(o)}}var b={p1:.01,p5:.05,p95:.95,p99:.99};function y(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"sum",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"count"===t?function(e){return e.length}:(e=t in b?function(e,n){var a;return a=r?e.sort(function(e,t){return o.ascending(r(e),r(t))}):e.sort(o.ascending),o.quantile(a,b[t],n)}:o[t],r?function(t){return e(t.map(r))}:function(t){return e(t)})}},2716:function(e,t,r){"use strict";r.d(t,"a",function(){return f});var n=r(2745),o=r.n(n),a=r(2746),i=r.n(a),u=r(21),c=r(2717);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={console:console,_:i.a,colors:c,d3array:u};function f(e,t,r){var n={},a="SAFE_EVAL_"+Math.floor(1e6*Math.random());n[a]={};var i=a+"="+e,u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},p,{},t);Object.keys(u).forEach(function(e){n[e]=u[e]});try{return o.a.runInNewContext(i,n,r),n[a]}catch(e){return function(){return e}}}},2717:function(e,t,r){"use strict";r.r(t),r.d(t,"hexToRGB",function(){return o});var n=r(100);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;if(!e)return[0,0,0,t];var r=Object(n.f)(e);return[r.r,r.g,r.b,t]}},2721:function(e,t,r){"use strict";r.d(t,"a",function(){return j});var n=r(191),o=r.n(n),a=r(1),i=r.n(a),u=r(0),c=r.n(u),s=r(2740),l=r(2723);r(2741),r(2730);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(r,!0).forEach(function(t){d(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=2e3,O={viewport:c.a.object.isRequired,layers:c.a.array.isRequired,setControlValue:c.a.func,mapStyle:c.a.string,mapboxApiAccessToken:c.a.string.isRequired,onViewportChange:c.a.func},j=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=v(t).call(this,e))||"object"!==p(o)&&"function"!=typeof o?m(n):o).tick=r.tick.bind(m(r)),r.onViewportChange=r.onViewportChange.bind(m(r)),r.state={previousViewport:e.viewport,timer:setInterval(r.tick,w)},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,i.a.Component),r=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){return e.viewport!==t.viewport?{viewport:y({},e.viewport),previousViewport:t.viewport}:null}}],(n=[{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"onViewportChange",value:function(e){var t=Object.assign({},e),r=y({},this.state.previousViewport,{},t);this.props.onViewportChange(r)}},{key:"tick",value:function(){var e=this;if(this.state&&!o()(this.state.previousViewport,this.props.viewport)){var t=this.props.setControlValue,r=this.props.viewport;t&&t("viewport",r),this.setState(function(){return{previousViewport:e.props.viewport}})}}},{key:"layers",value:function(){return this.props.layers.some(function(e){return"function"==typeof e})?this.props.layers.map(function(e){return"function"==typeof e?e():e}):this.props.layers}},{key:"render",value:function(){var e=this.props.viewport;return i.a.createElement(s.b,f({},e,{mapStyle:this.props.mapStyle,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiAccessToken}),i.a.createElement(l.i,f({},e,{layers:this.layers(),initWebGLParameters:!0})))}}])&&h(r.prototype,n),a&&h(r,a),t}();j.propTypes=O,j.defaultProps={mapStyle:"light",onViewportChange:function(){},setControlValue:function(){}}},2726:function(e,t,r){"use strict";r.d(t,"a",function(){return b});var n=r(1),o=r.n(n),a=r(0),i=r.n(a);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f={label:i.a.string.isRequired,value:i.a.string.isRequired},b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.PureComponent),r=t,(n=[{key:"render",value:function(){return o.a.createElement("div",null,this.props.label,o.a.createElement("strong",null,this.props.value))}}])&&c(r.prototype,n),a&&c(r,a),t}();b.propTypes=f},2730:function(e,t,r){},2731:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(8),o=r.n(n);function a(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=[1,0,1,0,0,0,0];function u(e,t){var r=parseInt(o()(t).format("x"),10);return parseInt(o()(t).add(e).format("x"),10)-r}var c=function(e,t){var r,n,c=o()(Math.min.apply(Math,a(e))),s=o()(Math.max.apply(Math,a(e)));if(-1!==t.indexOf("/")){var l=t.split("/",2);l[0].endsWith("Z")?(n=o()(l[0]),r=o.a.duration(l[1])):(n=o()(l[1]),r=o.a.duration(l[0]))}else n=function(e,t){var r=o()(e).subtract(t),n=e.toArray(),a=r.toArray(),u=n.map(function(e,t){return a[t]!==e}).indexOf(!0),c=n.map(function(e,t){if(t===u){var r=e-a[t];return e-(e-i[t])%r}return t<u||-1===u?e:i[t]});return o()(c)}(c,r=o.a.duration(t));for(var p=o()(n);p<c;)p.add(r);for(;p>c;)p.subtract(r);for(var f=o()(n);f>s;)f.subtract(r);for(;f<s;)f.add(r);var b=null!=t?[p,o()(p).add(r)]:[p,f],y=e.every(function(e){return null===e});return{start:parseInt(p.format("x"),10),end:parseInt(f.format("x"),10),getStep:u.bind(this,r),values:b.map(function(e){return parseInt(e.format("x"),10)}),disabled:y}}},2732:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(0),i=r.n(a),u=r(2721),c=r(1662),s=r.n(c),l=r(26),p=r(2100);r(2734);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v={start:i.a.number.isRequired,step:i.a.number.isRequired,end:i.a.number.isRequired,values:i.a.array.isRequired,onChange:i.a.func,loopDuration:i.a.number,maxFrames:i.a.number,orientation:i.a.oneOf(["horizontal","vertical"]),reversed:i.a.bool,disabled:i.a.bool,range:i.a.bool},m=function(e){function t(e){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=y(t).call(this,e))||"object"!==f(o)&&"function"!=typeof o?d(n):o).state={intervalId:null};var a=e.end-e.start,i=Math.min(e.maxFrames,a/e.step),u=a/i;return r.intervalMilliseconds=e.loopDuration/i,r.increment=u<e.step?e.step:u-u%e.step,r.onChange=r.onChange.bind(d(r)),r.play=r.play.bind(d(r)),r.pause=r.pause.bind(d(r)),r.stepBackward=r.stepBackward.bind(d(r)),r.stepForward=r.stepForward.bind(d(r)),r.getPlayClass=r.getPlayClass.bind(d(r)),r.formatter=r.formatter.bind(d(r)),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,o.a.PureComponent),r=t,(n=[{key:"componentDidMount",value:function(){s.a.bind(["space"],this.play)}},{key:"componentWillUnmount",value:function(){s.a.unbind(["space"])}},{key:"onChange",value:function(e){this.props.onChange(e.target.value),null!=this.state.intervalId&&this.pause()}},{key:"getPlayClass",value:function(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}},{key:"play",value:function(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{var e=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:e})}}},{key:"pause",value:function(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}},{key:"stepForward",value:function(){var e=this,t=this.props,r=t.start,n=t.end,o=t.step,a=t.values;if(!t.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(t){return t+e.increment}),u=i[1]>n?i[0]-r:0;this.props.onChange(i.map(function(e){return e-u}))}}},{key:"stepBackward",value:function(){var e=this,t=this.props,r=t.start,n=t.end,o=t.step,a=t.values;if(!t.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(t){return t-e.increment}),u=i[0]<r?n-i[1]:0;this.props.onChange(i.map(function(e){return e+u}))}}},{key:"formatter",value:function(e){if(this.props.disabled)return Object(l.b)("Data has no time steps");var t=e;return Array.isArray(e)?e[0]===e[1]&&(t=[e[0]]):t=[e],t.map(function(e){return new Date(e).toUTCString()}).join(" : ")}},{key:"render",value:function(){var e=this.props,t=e.start,r=e.end,n=e.step,a=e.orientation,i=e.reversed,u=e.disabled,c=e.range,s=e.values;return o.a.createElement("div",{className:"play-slider"},o.a.createElement("div",{className:"play-slider-controls padded"},o.a.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),o.a.createElement("i",{className:this.getPlayClass(),onClick:this.play}),o.a.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),o.a.createElement("div",{className:"play-slider-scrobbler padded"},o.a.createElement(p.a,{value:c?s:s[0],range:c,formatter:this.formatter,change:this.onChange,min:t,max:r,step:n,orientation:a,reversed:i,disabled:u?"disabled":"enabled"})))}}])&&b(r.prototype,n),a&&b(r,a),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){j(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}m.propTypes=v,m.defaultProps={onChange:function(){},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0},r.d(t,"a",function(){return E});var k={getLayers:i.a.func.isRequired,start:i.a.number.isRequired,end:i.a.number.isRequired,getStep:i.a.func,values:i.a.array.isRequired,aggregation:i.a.bool,disabled:i.a.bool,viewport:i.a.object.isRequired,children:i.a.node,mapStyle:i.a.string,mapboxApiAccessToken:i.a.string.isRequired,setControlValue:i.a.func,onViewportChange:i.a.func,onValuesChange:i.a.func},E=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=_(t).call(this,e))||"object"!==g(o)&&"function"!=typeof o?C(n):o).onViewportChange=r.onViewportChange.bind(C(r)),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,o.a.Component),r=t,(n=[{key:"onViewportChange",value:function(e){var t=this.props.disabled?O({},e):O({},e,{height:e.height+20});this.props.onViewportChange(t)}},{key:"render",value:function(){var e=this.props,t=e.start,r=e.end,n=e.getStep,a=e.disabled,i=e.aggregation,c=e.children,s=e.getLayers,l=e.values,p=e.onValuesChange,f=e.viewport,b=e.setControlValue,y=e.mapStyle,d=e.mapboxApiAccessToken,h=s(l),v=O({},f,{height:a?f.height:f.height-20});return o.a.createElement("div",null,o.a.createElement(u.a,{viewport:v,layers:h,setControlValue:b,mapStyle:y,mapboxApiAccessToken:d,onViewportChange:this.onViewportChange}),!a&&o.a.createElement(m,{start:t,end:r,step:n(t),values:l,range:!i,onChange:p}),c)}}])&&P(r.prototype,n),a&&P(r,a),t}();E.propTypes=k,E.defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:function(){},onViewportChange:function(){},onValuesChange:function(){}}},2734:function(e,t,r){},2742:function(e,t){},2743:function(e,t){},2744:function(e,t){},2820:function(e,t,r){"use strict";r.r(t),r.d(t,"getLayer",function(){return P});var n=r(1),o=r.n(n),a=r(0),i=r.n(a),u=r(2723),c=r(26),s=r(2732),l=r(2731),p=r(2716),f=r(2713),b=r(2726);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(r,!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){return o.a.createElement("div",{className:"deckgl-tooltip"},o.a.createElement(b.a,{label:"".concat(Object(c.b)("Longitude and Latitude"),": "),value:"".concat(e.object.position[0],", ").concat(e.object.position[1])}),o.a.createElement(b.a,{label:"".concat(Object(c.b)("Weight"),": "),value:"".concat(e.object.weight)}))}function P(e,t,r,n,o,a,i){var c=e,s=c.color_picker,l=t.data.features.map(function(e){return w({},e,{color:[s.r,s.g,s.b,255*s.a]})});if(c.js_data_mutator){var b=Object(p.a)(c.js_data_mutator);l=b(l)}return null!=i&&i.forEach(function(e){l=l.filter(e)}),new u.h(w({id:"screengrid-layer-".concat(c.slice_id),data:l,pickable:!0,cellSizePixels:c.grid_size,minColor:[s.r,s.g,s.b,0],maxColor:[s.r,s.g,s.b,255*s.a],outline:!1,getWeight:function(e){return e.weight||0}},Object(f.a)(c,n,j)))}var _={formData:i.a.object.isRequired,payload:i.a.object.isRequired,setControlValue:i.a.func.isRequired,viewport:i.a.object.isRequired,onAddFilter:i.a.func,setTooltip:i.a.func},C=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=h(t).call(this,e))||"object"!==y(o)&&"function"!=typeof o?v(n):o).state=t.getDerivedStateFromProps(e),r.getLayers=r.getLayers.bind(v(r)),r.onValuesChange=r.onValuesChange.bind(v(r)),r.onViewportChange=r.onViewportChange.bind(v(r)),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,o.a.PureComponent),r=t,a=[{key:"getDerivedStateFromProps",value:function(e,t){if(t&&e.payload.form_data===t.formData)return null;var r=e.payload.data.features||[],n=r.map(function(e){return e.__timestamp}),o=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",a=Object(l.a)(n,o);return{start:a.start,end:a.end,getStep:a.getStep,values:a.values,disabled:a.disabled,viewport:e.formData.autozoom?Object(f.b)(e.viewport,r.map(function(e){return e.position})):e.viewport,selected:[],lastClick:0,formData:e.payload.form_data}}}],(n=[{key:"onValuesChange",value:function(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})}},{key:"onViewportChange",value:function(e){this.setState({viewport:e})}},{key:"getLayers",value:function(e){var t=[];return e[0]===e[1]||e[1]===this.end?t.push(function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]}):t.push(function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]}),[P(this.props.formData,this.props.payload,this.props.onAddFilter,this.props.setTooltip)]}},{key:"render",value:function(){var e=this.props,t=e.formData,r=e.payload,n=e.setControlValue;return o.a.createElement("div",null,o.a.createElement(s.a,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,onValuesChange:this.onValuesChange,disabled:this.state.disabled,viewport:this.state.viewport,onViewportChange:this.onViewportChange,mapboxApiAccessToken:r.data.mapboxApiKey,mapStyle:t.mapbox_style,setControlValue:n,aggregation:!0}))}}])&&d(r.prototype,n),a&&d(r,a),t}();C.propTypes=_,C.defaultProps={onAddFilter:function(){},setTooltip:function(){}},t.default=C}}]);