(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(e,t){!function(t){"use strict";var r,n=Object.prototype,i=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag",c="object"==typeof e,d=t.regeneratorRuntime;if(d)c&&(e.exports=d);else{(d=t.regeneratorRuntime=c?e.exports:{}).wrap=w;var u="suspendedStart",f="suspendedYield",h="executing",p="completed",g={},y={};y[a]=function(){return this};var m=Object.getPrototypeOf,b=m&&m(m(z([])));b&&b!==n&&i.call(b,a)&&(y=b);var v=k.prototype=L.prototype=Object.create(y);E.prototype=v.constructor=k,k.constructor=E,k[l]=E.displayName="GeneratorFunction",d.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===E||"GeneratorFunction"===(t.displayName||t.name))},d.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,l in e||(e[l]="GeneratorFunction")),e.prototype=Object.create(v),e},d.awrap=function(e){return{__await:e}},I(x.prototype),x.prototype[s]=function(){return this},d.AsyncIterator=x,d.async=function(e,t,r,n){var i=new x(w(e,t,r,n));return d.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},I(v),v[l]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},d.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},d.values=z,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,i){return s.type="throw",s.arg=e,t.next=n,i&&(t.method="next",t.arg=r),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:z(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function w(e,t,r,n){var i=t&&t.prototype instanceof L?t:L,o=Object.create(i.prototype),a=new $(n||[]);return o._invoke=function(e,t,r){var n=u;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=R(a,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var l=S(e,t,r);if("normal"===l.type){if(n=r.done?p:f,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(e,r,a),o}function S(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function E(){}function k(){}function I(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function x(e){var t;this._invoke=function(r,n){function o(){return new Promise(function(t,o){!function t(r,n,o,a){var s=S(e[r],e,n);if("throw"!==s.type){var l=s.arg,c=l.value;return c&&"object"==typeof c&&i.call(c,"__await")?Promise.resolve(c.__await).then(function(e){t("next",e,o,a)},function(e){t("throw",e,o,a)}):Promise.resolve(c).then(function(e){l.value=e,o(l)},function(e){return t("throw",e,o,a)})}a(s.arg)}(r,n,t,o)})}return t=t?t.then(o,o):o()}}function R(e,t){var n=e.iterator[t.method];if(n===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,R(e,t),"throw"===t.method))return g;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=S(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,g;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,g):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function z(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=r,t.done=!0,t};return o.next=o}}return{next:T}}function T(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")())},150:function(e,t,r){var n=r(24).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(17)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},156:function(e,t,r){e.exports=r(166)},157:function(e,t){function r(e,t,r,n,i,o,a){try{var s=e[o](a),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,i)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise(function(i,o){var a=e.apply(t,n);function s(e){r(a,i,o,s,l,"next",e)}function l(e){r(a,i,o,s,l,"throw",e)}s(void 0)})}}},158:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.default=void 0;var i,o=n(r(7)),a=n(r(51)),s=n(r(152)),l=n(r(153)),c=n(r(0)),d=n(r(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},h=function(e){var t=u(e),r=t.fluid?t.fluid.src:t.fixed.src;return f[r]||!1},p=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},y=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+r+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+r+"/>":"",o=e.title?'title="'+e.title+'" ':"",a=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+s+l+t+a+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var r=e.style,n=e.onLoad,i=e.onError,o=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},o,{onLoad:n,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,i=!1,o=t.fadeIn,s=h(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,i=!1);var l=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:n,imgLoaded:!1,IOSupported:i,fadeIn:o,hasNoScript:l,seenBefore:s},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,a.default)((0,a.default)(r))),r.handleRef=r.handleRef.bind((0,a.default)((0,a.default)(r))),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),r=t.fluid?t.fluid.src:t.fixed.src,f[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,n=e.className,i=e.style,o=void 0===i?{}:i,a=e.imgStyle,s=void 0===a?{}:a,d=e.placeholderStyle,f=void 0===d?{}:d,h=e.placeholderClassName,p=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.Tag,w=e.itemProp,S="boolean"==typeof b?"lightgray":b,L=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),k={title:t,alt:this.state.isVisible?"":r,style:L,className:h};if(p){var I=p;return c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),I.base64&&c.default.createElement(m,(0,l.default)({src:I.base64},k)),I.tracedSVG&&c.default.createElement(m,(0,l.default)({src:I.tracedSVG},k)),S&&c.default.createElement(v,{title:t,style:{backgroundColor:S,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),c.default.createElement(m,{alt:r,title:t,src:I.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:t},I))}}))}if(g){var x=g,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},o);return"inherit"===o.display&&delete R.display,c.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&c.default.createElement(m,(0,l.default)({src:x.base64},k)),x.tracedSVG&&c.default.createElement(m,(0,l.default)({src:x.tracedSVG},k)),S&&c.default.createElement(v,{title:t,style:{backgroundColor:S,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(m,{alt:r,title:t,width:x.width,height:x.height,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:y((0,l.default)({alt:r,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var S=b;t.default=S},166:function(e,t,r){var n=function(){return this||"object"==typeof self&&self}()||Function("return this")(),i=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,o=i&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(149),i)n.regeneratorRuntime=o;else try{delete n.regeneratorRuntime}catch(a){n.regeneratorRuntime=void 0}},167:function(e,t,r){var n=r(26),i=r(34);r(168)("keys",function(){return function(e){return i(n(e))}})},168:function(e,t,r){var n=r(11),i=r(16),o=r(25);e.exports=function(e,t){var r=(i.Object||{})[e]||Object[e],a={};a[e]=t(r),n(n.S+n.F*o(function(){r(1)}),"Object",a)}},169:function(e,t,r){var n,i,o;i=[t,e],void 0===(o="function"==typeof(n=function(e,t){"use strict";var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function i(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=e,a=t.timeout||r.timeout,s=t.jsonpCallback||r.jsonpCallback,l=void 0;return new Promise(function(r,c){var d=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),u=s+"_"+d;window[d]=function(e){r({ok:!0,json:function(){return Promise.resolve(e)}}),l&&clearTimeout(l),i(u),n(d)},o+=-1===o.indexOf("?")?"?":"&";var f=document.createElement("script");f.setAttribute("src",""+o+s+"="+d),t.charset&&f.setAttribute("charset",t.charset),f.id=u,document.getElementsByTagName("head")[0].appendChild(f),l=setTimeout(function(){c(new Error("JSONP request to "+e+" timed out")),n(d),i(u),window[d]=function(){n(d)}},a),f.onerror=function(){c(new Error("JSONP request to "+e+" failed")),n(d),i(u),l&&clearTimeout(l)}})}})?n.apply(t,i):n)||(e.exports=o)},175:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.default=t.createImageToLoad=void 0;var i=n(r(0)),o=n(r(4)),a=n(r(176));const s=e=>{let t=Object.assign({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},l=e=>{if("undefined"!=typeof window){const t=s(e),r=new Image;return r.complete||"function"!=typeof t.onLoad||r.addEventListener("load",t.onLoad),"function"==typeof t.onError&&r.addEventListener("error",t.onError),r.src=t.fluid?t.fluid.src:t.fixed.src,r}return null};t.createImageToLoad=l;const c={},d=e=>{const t=s(e),r=t.fluid?t.fluid.src:t.fixed.src;return c[r]||!1},u=e=>{const t=s(e),r=t.fluid?t.fluid.src:t.fixed.src;c[r]=!0};let f;const h=[];const p=(e,t)=>{(void 0===f&&"undefined"!=typeof window&&window.IntersectionObserver&&(f=new window.IntersectionObserver(e=>{e.forEach(e=>{h.forEach(t=>{t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),f).observe(e),h.push([e,t])},g=e=>{const t=e.src?`src="${e.src}" `:'src="" ',r=e.sizes?`sizes="${e.sizes}" `:"",n=e.srcSetWebp?`<source type='image/webp' srcSet="${e.srcSetWebp}" ${r}/>`:"",i=e.srcSet?`<source srcSet="${e.srcSet}" ${r}/>`:"",o=e.title?`title="${e.title}" `:"",a=e.alt?`alt="${e.alt}" `:'alt="" ',s=e.width?`width="${e.width}" `:"",l=e.height?`height="${e.height}" `:"",c=e.opacity?e.opacity:"1";return`<picture>${n}${i}<img ${s}${l}${t}${a}${o}style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:${e.transitionDelay?e.transitionDelay:"0.5s"};opacity:${c};width:100%;height:100%;object-fit:cover;object-position:center"/></picture>`},y=({classId:e,backgroundSize:t,backgroundRepeat:r,transitionDelay:n,bgImage:i,nextImage:o,afterOpacity:a,bgColor:s})=>`\n          .gatsby-background-image-${e}:before,\n          .gatsby-background-image-${e}:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            top: 0;\n            left: 0;\n            -webkit-background-size: ${t};\n            -moz-background-size: ${t};\n            -o-background-size: ${t};\n            background-size: ${t};\n            transition: opacity ${n} ease-in-out;\n            -webkit-transition: opacity ${n} ease-in-out;\n            -moz-transition: opacity ${n} ease-in-out;\n            -o-transition: opacity ${n} ease-in-out;\n          }\n          .gatsby-background-image-${e}:before {\n            z-index: -101;\n            background-color: ${s};\n            background-image: url(${i});\n            ${r}\n          }\n          .gatsby-background-image-${e}:after {\n            z-index: -100;\n            background-image: url(${o});\n            ${r}\n            opacity: ${a};\n          }\n        `;class m extends i.default.Component{constructor(e){super(e);let t=!0,r=!1,n=e.fadeIn;const i=d(e);!i&&"undefined"!=typeof window&&window.IntersectionObserver&&(t=!1,r=!0),"undefined"==typeof window&&(t=!1),e.critical&&(t=!0,r=!1);const o=!(this.props.critical&&!this.props.fadeIn);this.state={isVisible:t,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:o,seenBefore:i},this.bgImage="",this.backgroundStyles=(0,a.default)(this.props.className),this.imageRef=l(this.props),this.handleImageLoaded=this.handleImageLoaded.bind(this),this.handleRef=this.handleRef.bind(this)}componentDidMount(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:d(this.props)}),this.props.critical){const e=this.imageRef;e&&e.complete&&this.handleImageLoaded()}}handleRef(e){this.state.IOSupported&&e&&p(e,()=>{this.state.isVisible||"function"!=typeof this.props.onStartLoad||this.props.onStartLoad({wasCached:d(this.props)}),this.setState({isVisible:!0,imgLoaded:!1})})}handleImageLoaded(){u(this.props),this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()}render(){const e=s(this.props),t=e.title,r=e.alt,n=e.className,o=e.style,a=void 0===o?{}:o,l=e.fluid,c=e.fixed,d=e.backgroundColor,u=e.Tag,f=e.classId,h=void 0===f?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,7):f,p=e.children,m="boolean"==typeof d?"lightgray":d,b=this.backgroundStyles.hasOwnProperty("backgroundSize")?this.backgroundStyles.backgroundSize:"cover",v=`background-repeat: ${this.backgroundStyles.hasOwnProperty("backgroundRepeat")?this.backgroundStyles.backgroundRepeat:"no-repeat"};`,w=this.state.imgLoaded?"0.5s":"0.25s";if(l){const e=l;let o=this.bgImage,s=null;e.tracedSVG&&(s=`"${e.tracedSVG}"`),e.base64&&!e.tracedSVG&&(s=e.base64),this.state.isVisible&&(s=e.src);const c=s!==(o=""===o?s:this.bgImage)||!1===this.state.fadeIn?1:0;this.bgImage=o;const d={classId:h,backgroundSize:b,backgroundRepeat:v,transitionDelay:w,bgImage:o,nextImage:s,afterOpacity:c,bgColor:m};return i.default.createElement(u,{className:`${n||""} gatsby-background-image-${h} gatsby-image-wrapper`,style:Object.assign({position:"relative",overflow:"hidden"},a,this.backgroundStyles),ref:this.handleRef,key:`fluid-${JSON.stringify(e.srcSet)}`},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:y(d)}}),this.state.hasNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:r,title:t},e))}}),p)}if(c){const e=c,o=Object.assign({position:"relative",overflow:"hidden",display:"inline-block",width:e.width,height:e.height},a);"inherit"===a.display&&delete o.display;let s=this.bgImage,l="";e.tracedSVG&&(l=`'${e.tracedSVG}'`),e.base64&&!e.tracedSVG&&(l=e.base64),this.state.isVisible&&(l=e.src);const d=l!==(s=""===s?l:"")?1:0;this.bgImage=s;const f={classId:h,backgroundSize:b,backgroundRepeat:v,transitionDelay:w,bgImage:s,nextImage:l,afterOpacity:d};return i.default.createElement(u,{className:`${n||""} gatsby-background-image-${h} gatsby-image-wrapper`,style:Object.assign({},o,this.backgroundStyles),ref:this.handleRef,key:`fixed-${JSON.stringify(e.srcSet)}`},i.default.createElement("style",{dangerouslySetInnerHTML:{__html:y(f)}}),this.state.hasNoScript&&i.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g(Object.assign({alt:r,title:t,width:e.width,height:e.height},e))}}),p)}return null}}m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};const b=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),v=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});m.propTypes={resolutions:b,sizes:v,fixed:b,fluid:v,fadeIn:o.default.bool,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,classId:o.default.string};var w=m;t.default=w},176:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;const n=e=>{const t=function(e){if("undefined"!=typeof document){const t=document.implementation.createHTMLDocument(""),r=document.createElement("style");return r.textContent=e,t.body.appendChild(r),r.sheet.cssRules}return{}}((e=>{const t="undefined"!=typeof window?window.document.styleSheets:[];for(let n=0;n<t.length;n++){let i;try{i=void 0!==t[n].rules?t[n].rules:void 0!==t[n].cssRules?t[n].cssRules:""}catch(r){console.debug(`Unable to read stylesheet rules for ${t[n].href}`,r)}if(i)for(let t=0;t<i.length;t++)if(i[t].selectorText===e){const e=i[t].cssText?i[t].cssText:i[t].style.cssText;return-1===e.indexOf(i[t].selectorText)?`${i[t].selectorText}{${e}}`:e}}})(`.${e}`));return t.length>0&&void 0!==t[0].style?Object.keys((e=>{let t={};if(e.length>0&&void 0!==e[0].style)switch(e[0].style.constructor.name){case"CSS2Properties":Object.values(e[0].style).forEach(r=>{t[(e=>e.toLowerCase().replace(/(?:^\w|-|[A-Z]|\b\w)/g,(e,t)=>0===t?e.toLowerCase():e.toUpperCase()).replace(/\s|\W+/g,""))(r)]=e[0].style[r]});break;case"CSSStyleDeclaration":t=e[0].style;break;default:console.error("Unknown style object prototype")}return t})(t)).filter(e=>0===e.indexOf("background")&&""!==t[0].style[e]).reduce((e,r)=>(e[r]=t[0].style[r],e),{}):{}};var i=e=>{if("undefined"!=typeof window&&null!==e&&(e instanceof Object||e instanceof String||"string"==typeof e)&&!(e instanceof Array)){if(e.includes(" ")){const t=e.split(" ");let r=[];return t.forEach(e=>r.push(n(e))),Object.assign(...r)}return n(e)}return{}};t.default=i}}]);
//# sourceMappingURL=6-63d30658342abf6cf007.js.map