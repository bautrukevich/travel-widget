(()=>{"use strict";var e,t,n,_,l={},o=[],r=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function i(e,t){for(var n in t)e[n]=t[n];return e}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n){var _,l,o,r=arguments,i={};for(o in t)"key"==o?_=t[o]:"ref"==o?l=t[o]:i[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(r[o]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return c(e,i,_,l,null)}function c(t,n,_,l,o){var r={type:t,props:n,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function a(e){return e.children}function p(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?f(e):null}function d(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return d(e)}}function h(l){(!l.__d&&(l.__d=!0)&&t.push(l)&&!v.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||n)(v)}function v(){for(var e;v.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,_,l,o,r;e.__d&&(o=(l=(t=e).__v).__e,(r=t.__P)&&(n=[],(_=i({},l)).__v=l.__v+1,S(r,l,_,t.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,n,null==o?f(l):o,l.__h),C(n,l),l.__e!=o&&d(l)))}))}function y(e,t,n,_,r,i,u,s,p,d){var h,v,y,b,k,w,x,C=_&&_.__k||o,P=C.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(b=n.__k[h]=null==(b=t[h])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?c(null,b,null,null,b):Array.isArray(b)?c(a,{children:b},null,null,null):b.__b>0?c(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(y=C[h])||y&&b.key==y.key&&b.type===y.type)C[h]=void 0;else for(v=0;v<P;v++){if((y=C[v])&&b.key==y.key&&b.type===y.type){C[v]=void 0;break}y=null}S(e,b,y=y||l,r,i,u,s,p,d),k=b.__e,(v=b.ref)&&y.ref!=v&&(x||(x=[]),y.ref&&x.push(y.ref,null,b),x.push(v,b.__c||k,b)),null!=k?(null==w&&(w=k),"function"==typeof b.type&&null!=b.__k&&b.__k===y.__k?b.__d=p=g(b,p,e):p=m(e,b,y,C,k,p),d||"option"!==n.type?"function"==typeof n.type&&(n.__d=p):e.value=""):p&&y.__e==p&&p.parentNode!=e&&(p=f(y))}for(n.__e=w,h=P;h--;)null!=C[h]&&("function"==typeof n.type&&null!=C[h].__e&&C[h].__e==n.__d&&(n.__d=f(_,h+1)),D(C[h],C[h]));if(x)for(h=0;h<x.length;h++)$(x[h],x[++h],x[++h])}function g(e,t,n){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,t="function"==typeof l.type?g(l,t,n):m(n,l,l,e.__k,l.__e,t));return t}function m(e,t,n,_,l,o){var r,i,u;if(void 0!==t.__d)r=t.__d,t.__d=void 0;else if(null==n||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function b(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||r.test(t)?n:n+"px"}function k(e,t,n,_,l){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||b(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||b(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?x:w,o):e.removeEventListener(t,o?x:w,o);else if("dangerouslySetInnerHTML"!==t){if(l)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function w(t){this.l[t.type+!1](e.event?e.event(t):t)}function x(t){this.l[t.type+!0](e.event?e.event(t):t)}function S(t,n,_,l,o,r,u,s,c){var f,d,h,v,g,m,b,k,w,x,S,C=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(c=_.__h,s=n.__e=_.__e,n.__h=null,r=[s]),(f=e.__b)&&f(n);try{e:if("function"==typeof C){if(k=n.props,w=(f=C.contextType)&&l[f.__c],x=f?w?w.props.value:f.__:l,_.__c?b=(d=n.__c=_.__c).__=d.__E:("prototype"in C&&C.prototype.render?n.__c=d=new C(k,x):(n.__c=d=new p(k,x),d.constructor=C,d.render=M),w&&w.sub(d),d.props=k,d.state||(d.state={}),d.context=x,d.__n=l,h=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=C.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=i({},d.__s)),i(d.__s,C.getDerivedStateFromProps(k,d.__s))),v=d.props,g=d.state,h)null==C.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==C.getDerivedStateFromProps&&k!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,x),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,x)||n.__v===_.__v){d.props=k,d.state=d.__s,n.__v!==_.__v&&(d.__d=!1),d.__v=n,n.__e=_.__e,n.__k=_.__k,d.__h.length&&u.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,x),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(v,g,m)}))}d.context=x,d.props=k,d.state=d.__s,(f=e.__r)&&f(n),d.__d=!1,d.__v=n,d.__P=t,f=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(l=i(i({},l),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(m=d.getSnapshotBeforeUpdate(v,g)),S=null!=f&&f.type===a&&null==f.key?f.props.children:f,y(t,Array.isArray(S)?S:[S],n,_,l,o,r,u,s,c),d.base=n.__e,n.__h=null,d.__h.length&&u.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==r&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=P(_.__e,n,_,l,o,r,u,c);(f=e.diffed)&&f(n)}catch(t){n.__v=null,(c||null!=r)&&(n.__e=s,n.__h=!!c,r[r.indexOf(s)]=null),e.__e(t,n,_)}}function C(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function P(e,t,n,_,r,i,s,c){var a,p,f,d,h=n.props,v=t.props,g=t.type,m=0;if("svg"===g&&(r=!0),null!=i)for(;m<i.length;m++)if((a=i[m])&&(a===e||(g?a.localName==g:3==a.nodeType))){e=a,i[m]=null;break}if(null==e){if(null===g)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,v.is&&v),i=null,c=!1}if(null===g)h===v||c&&e.data===v||(e.data=v);else{if(i=i&&o.slice.call(e.childNodes),p=(h=n.props||l).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,_,l){var o;for(o in n)"children"===o||"key"===o||o in t||k(e,o,null,n[o],_);for(o in t)l&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||k(e,o,t[o],n[o],_)}(e,v,h,r,c),f)t.__k=[];else if(m=t.props.children,y(e,Array.isArray(m)?m:[m],t,n,_,r&&"foreignObject"!==g,i,s,e.firstChild,c),null!=i)for(m=i.length;m--;)null!=i[m]&&u(i[m]);c||("value"in v&&void 0!==(m=v.value)&&(m!==e.value||"progress"===g&&!m)&&k(e,"value",m,h.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==e.checked&&k(e,"checked",m,h.checked,!1))}return e}function $(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function D(t,n,_){var l,o,r;if(e.unmount&&e.unmount(t),(l=t.ref)&&(l.current&&l.current!==t.__e||$(l,null,n)),_||"function"==typeof t.type||(_=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(l=t.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(t){e.__e(t,n)}l.base=l.__P=null}if(l=t.__k)for(r=0;r<l.length;r++)l[r]&&D(l[r],n,_);null!=o&&u(o)}function M(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,_,l;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),l=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),l=n.__d),l)return n.__E=n}catch(t){e=t}throw e},__v:0},p.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=i({},this.state),"function"==typeof e&&(e=e(i({},n),this.props)),e&&i(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),h(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),h(this))},p.prototype.render=a,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0;var E=function(e,t,n,_){var l;t[0]=0;for(var o=1;o<t.length;o++){var r=t[o++],i=t[o]?(t[0]|=r?1:2,n[t[o++]]):t[++o];3===r?_[0]=i:4===r?_[1]=Object.assign(_[1]||{},i):5===r?(_[1]=_[1]||{})[t[++o]]=i:6===r?_[1][t[++o]]+=i+"":r?(l=e.apply(i,E(e,i,n,["",null])),_.push(l),i[0]?t[0]|=2:(t[o-2]=0,t[o]=l)):_.push(i)}return _},H=new Map;const T=function(e){var t=H.get(this);return t||(t=new Map,H.set(this,t)),(t=E(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,_=1,l="",o="",r=[0],i=function(e){1===_&&(e||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?r.push(0,e,l):3===_&&(e||l)?(r.push(3,e,l),_=2):2===_&&"..."===l&&e?r.push(4,e,0):2===_&&l&&!e?r.push(5,0,!0,l):_>=5&&((l||!e&&5===_)&&(r.push(_,0,l,n),_=6),e&&(r.push(_,e,0,n),_=6)),l=""},u=0;u<e.length;u++){u&&(1===_&&i(),i(u));for(var s=0;s<e[u].length;s++)t=e[u][s],1===_?"<"===t?(i(),r=[r],_=3):l+=t:4===_?"--"===l&&">"===t?(_=1,l=""):l=t+l[0]:o?t===o?o="":l+=t:'"'===t||"'"===t?o=t:">"===t?(i(),_=1):_&&("="===t?(_=5,n=l,l=""):"/"===t&&(_<5||">"===e[u][s+1])?(i(),3===_&&(r=r[0]),_=r,(r=r[0]).push(2,0,_),_=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(i(),_=2):l+=t),3===_&&"!--"===l&&(_=4,r=r[0])}return i(),r}(e)),t),arguments,[])).length>1?t:t[0]}.bind(s),U=({text:e})=>T`
    <p class='title widget__title'>${e}</p>`,L=({text:e})=>T`
    <p class="description widget__description">${e}</p>`,N=({placeholder:e,tabIndex:t})=>T`
    <label class="widget__form-label">
      <input type="text" class="input widget__form-input" readonly
             placeholder=${e} tabindex=${t}/>
      <svg class="icon widget__input-icon" width="15" height="17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 7.998s.002 7.25 0 7.002l11.003-.001c-.002 0-.006-7-.006-7L2 7.998zM8 11h4v3H8v-3zm7-5v9a2 2 0 01-2 2H2a2 2 0 01-2-2V6h15zm-3-4V1a1 1 0 00-1-1h-1a1 1 0 00-1 1v1H6V1a1 1 0 00-1-1H4a1 1 0 00-1 1v1H2a2 2 0 00-2 2h15a2 2 0 00-2-2h-1z"
          fill="currentColor" fill-rule="evenodd"/>
      </svg>
    </label>`,W=({action:e,children:t})=>T`
    <form action="${e}" class="widget__form">${t}</form>`;!function(t,n,_){var r,i,u;e.__&&e.__(t,n),i=(r="function"==typeof _)?null:_&&_.__k||n.__k,u=[],S(n,t=(!r&&_||n).__k=s(a,null,[t]),i||l,l,void 0!==n.ownerSVGElement,!r&&_?[_]:i?null:n.firstChild?o.slice.call(n.childNodes):null,u,!r&&_?_:i?i.__e:n.firstChild,r),C(u,t)}(T`
  <${()=>T`
    <div class="widget">
      <${U} text="Where does it come from? Why do we use it?"/>
      <div class="widget__body">
        <${W} action="">
          <div class="widget__form-controls">
            <${N} placeholder="Depart date" tabIndex="1"/>
            <${N} placeholder="Return date" tabIndex="2"/>
          </div>
          <button class="button widget__submit-button" type="submit" tabindex="3">Search</button>
        </
        />
        <${L}
          text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
      </div>
    </div>`}/>`,document.body)})();