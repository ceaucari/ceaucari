(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{100:function(e,t,a){"use strict";a.r(t);a(12);var r=a(0),l=a.n(r),n=a(136),c=a(132);t.default=function(e){const{tags:t}=e,a={};Object.keys(t).forEach(e=>{const t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)});const r=Object.entries(a).sort(([e],[t])=>e===t?0:e>t?1:-1).map(([e,a])=>l.a.createElement("div",{key:e},l.a.createElement("h3",null,e),a.map(e=>l.a.createElement(c.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")),l.a.createElement("hr",null))).filter(e=>null!=e);return l.a.createElement(n.a,{title:"Tags",description:"Blog Tags"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement("h1",null,"Tags"),l.a.createElement("div",{className:"margin-vert--lg"},r)))))}},137:function(e,t,a){"use strict";var r=a(2),l=a(0),n=a.n(l),c=a(133),o=a.n(c),s=a(132),m=a(131),i=a(135),f=a(92),u=a.n(f);function E({to:e,href:t,label:a,prependBaseUrlToHref:l,...c}){const o=Object(i.a)(e),m=Object(i.a)(t,!0);return n.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:l?m:t}:{to:o},c),a)}const g=({url:e,alt:t})=>n.a.createElement("img",{className:"footer__logo",alt:t,src:e});t.a=function(){const e=Object(m.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:r}=a,{copyright:l,links:c=[],logo:s={}}=r||{},f=Object(i.a)(s.src);return r?n.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===r.style})},n.a.createElement("div",{className:"container"},c&&c.length>0&&n.a.createElement("div",{className:"row footer__links"},c.map((e,t)=>n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?n.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(E,e)))):null))),(s||l)&&n.a.createElement("div",{className:"text--center"},s&&s.src&&n.a.createElement("div",{className:"margin-bottom--sm"},s.href?n.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},n.a.createElement(g,{alt:s.alt,url:f})):n.a.createElement(g,{alt:s.alt,url:f})),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}})))):null}}}]);