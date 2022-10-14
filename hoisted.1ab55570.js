import{i as k,e as A,s as O,y as g,a as S,z as M,b as R,c as z,t as E,x as H}from"./chunks/color-box.9bd72e28.js";import"./chunks/Options.astro_astro_type_script_index_0_lang.0f5c6496.js";var N=Object.defineProperty,T=Object.getOwnPropertyDescriptor,B=(r,t,o,a)=>{for(var s=a>1?void 0:a?T(t,o):t,e=r.length-1,i;e>=0;e--)(i=r[e])&&(s=(a?i(t,o,s):i(s))||s);return a&&s&&N(t,o,s),s};const F="color-scheme";let p=class extends O{constructor(){super(...arguments),this.suffix=""}buildRoles(){return[[{name:"Primary",background:`--md-sys-color-primary${this.suffix}`,foreground:`--md-sys-color-on-primary${this.suffix}`},{name:"On Primary",background:`--md-sys-color-on-primary${this.suffix}`,foreground:`--md-sys-color-primary${this.suffix}`},{name:"Primary Container",background:`--md-sys-color-primary-container${this.suffix}`,foreground:`--md-sys-color-on-primary-container${this.suffix}`},{name:"On Primary Container",background:`--md-sys-color-on-primary-container${this.suffix}`,foreground:`--md-sys-color-primary-container${this.suffix}`}],[{name:"Secondary",background:`--md-sys-color-secondary${this.suffix}`,foreground:`--md-sys-color-on-secondary${this.suffix}`},{name:"On Secondary",background:`--md-sys-color-on-secondary${this.suffix}`,foreground:`--md-sys-color-secondary${this.suffix}`},{name:"Secondary Container",background:`--md-sys-color-secondary-container${this.suffix}`,foreground:`--md-sys-color-on-secondary-container${this.suffix}`},{name:"On Secondary Container",background:`--md-sys-color-on-secondary-container${this.suffix}`,foreground:`--md-sys-color-secondary-container${this.suffix}`}],[{name:"Tertiary",background:`--md-sys-color-tertiary${this.suffix}`,foreground:`--md-sys-color-on-tertiary${this.suffix}`},{name:"On Tertiary",background:`--md-sys-color-on-tertiary${this.suffix}`,foreground:`--md-sys-color-tertiary${this.suffix}`},{name:"Tertiary Container",background:`--md-sys-color-tertiary-container${this.suffix}`,foreground:`--md-sys-color-on-tertiary-container${this.suffix}`},{name:"On Tertiary Container",background:`--md-sys-color-on-tertiary-container${this.suffix}`,foreground:`--md-sys-color-tertiary-container${this.suffix}`}],[{name:"Error",background:`--md-sys-color-error${this.suffix}`,foreground:`--md-sys-color-on-error${this.suffix}`},{name:"On Error",background:`--md-sys-color-on-error${this.suffix}`,foreground:`--md-sys-color-error${this.suffix}`},{name:"Error Container",background:`--md-sys-color-error-container${this.suffix}`,foreground:`--md-sys-color-on-error-container${this.suffix}`},{name:"On Error Container",background:`--md-sys-color-on-error-container${this.suffix}`,foreground:`--md-sys-color-error-container${this.suffix}`}],[{name:"Background",background:`--md-sys-color-background${this.suffix}`,foreground:`--md-sys-color-on-background${this.suffix}`},{name:"On Background",background:`--md-sys-color-on-background${this.suffix}`,foreground:`--md-sys-color-background${this.suffix}`},{name:"Surface",background:`--md-sys-color-surface${this.suffix}`,foreground:`--md-sys-color-on-surface${this.suffix}`},{name:"On Surface",background:`--md-sys-color-on-surface${this.suffix}`,foreground:`--md-sys-color-surface${this.suffix}`}],[{name:"Surface Variant",background:`--md-sys-color-surface-variant${this.suffix}`,foreground:`--md-sys-color-on-surface-variant${this.suffix}`},{name:"On Surface Variant",background:`--md-sys-color-on-surface-variant${this.suffix}`,foreground:`--md-sys-color-surface-variant${this.suffix}`},{name:"Inverse Surface",background:`--md-sys-color-inverse-surface${this.suffix}`,foreground:`--md-sys-color-inverse-on-surface${this.suffix}`},{name:"Inverse On Surface",background:`--md-sys-color-inverse-on-surface${this.suffix}`,foreground:`--md-sys-color-inverse-surface${this.suffix}`}],[{name:"Outline",background:`--md-sys-color-outline${this.suffix}`,foreground:`--md-sys-color-surface${this.suffix}`},{name:"Outline Variant",background:`--md-sys-color-outline-variant${this.suffix}`,foreground:`--md-sys-color-on-surface${this.suffix}`},{name:"Shadow",background:`--md-sys-color-shadow${this.suffix}`,foreground:`--md-sys-color-surface${this.suffix}`},{name:"Scrim",background:`--md-sys-color-scrim${this.suffix}`,foreground:`--md-sys-color-surface${this.suffix}`}]]}render(){const r=this.buildRoles();return g`
      <div class="color-scheme">
        ${r.map(t=>g`
            <div class="row color-family">
              ${t.map(o=>g`
                  <color-box
                    name=${o.name}
                    background=${o.background}
                    foreground=${o.foreground}
                  ></color-box>
                `)}
            </div>
          `)}
      </div>
    `}};p.styles=k`
    :host {
      --radius: 16px;
    }

    .row {
      display: flex;
      flex-direction: row;
    }

    color-box:first-child {
      --padding-left: 1rem;
    }

    color-box:last-child {
      --padding-right: 1rem;
    }

    .color-scheme .color-family:first-child color-box:first-child,
    :where(.surfaces, .tonal-palette) color-box:first-child {
      --top-left-radius: var(--radius);
    }

    .color-scheme .color-family:first-child color-box:last-child,
    :where(.surfaces, .tonal-palette) color-box:last-child {
      --top-right-radius: var(--radius);
    }

    .color-scheme .color-family:last-child color-box:first-child,
    :where(.surfaces, .tonal-palette) color-box:first-child {
      --bottom-left-radius: var(--radius);
    }

    .color-scheme .color-family:last-child color-box:last-child,
    :where(.surfaces, .tonal-palette) color-box:last-child {
      --bottom-right-radius: var(--radius);
    }

    color-box {
      flex: 1;
    }
  `;B([A({type:String})],p.prototype,"suffix",2);p=B([S(F)],p);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:G}=M,D=()=>document.createComment(""),$=(r,t,o)=>{var a;const s=r._$AA.parentNode,e=t===void 0?r._$AB:t._$AA;if(o===void 0){const i=s.insertBefore(D(),e),f=s.insertBefore(D(),e);o=new G(i,f,r,r.options)}else{const i=o._$AB.nextSibling,f=o._$AM,m=f!==r;if(m){let l;(a=o._$AQ)===null||a===void 0||a.call(o,r),o._$AM=r,o._$AP!==void 0&&(l=r._$AU)!==f._$AU&&o._$AP(l)}if(i!==e||m){let l=o._$AA;for(;l!==i;){const x=l.nextSibling;s.insertBefore(l,e),l=x}}}return o},y=(r,t,o=r)=>(r._$AI(t,o),r),V={},U=(r,t=V)=>r._$AH=t,Q=r=>r._$AH,w=r=>{var t;(t=r._$AP)===null||t===void 0||t.call(r,!1,!0);let o=r._$AA;const a=r._$AB.nextSibling;for(;o!==a;){const s=o.nextSibling;o.remove(),o=s}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=(r,t,o)=>{const a=new Map;for(let s=t;s<=o;s++)a.set(r[s],s);return a},q=R(class extends z{constructor(r){if(super(r),r.type!==E.CHILD)throw Error("repeat() can only be used in text expressions")}ht(r,t,o){let a;o===void 0?o=t:t!==void 0&&(a=t);const s=[],e=[];let i=0;for(const f of r)s[i]=a?a(f,i):i,e[i]=o(f,i),i++;return{values:e,keys:s}}render(r,t,o){return this.ht(r,t,o).values}update(r,[t,o,a]){var s;const e=Q(r),{values:i,keys:f}=this.ht(t,o,a);if(!Array.isArray(e))return this.ut=f,i;const m=(s=this.ut)!==null&&s!==void 0?s:this.ut=[],l=[];let x,P,n=0,d=e.length-1,c=0,u=i.length-1;for(;n<=d&&c<=u;)if(e[n]===null)n++;else if(e[d]===null)d--;else if(m[n]===f[c])l[c]=y(e[n],i[c]),n++,c++;else if(m[d]===f[u])l[u]=y(e[d],i[u]),d--,u--;else if(m[n]===f[u])l[u]=y(e[n],i[u]),$(r,l[u+1],e[n]),n++,u--;else if(m[d]===f[c])l[c]=y(e[d],i[c]),$(r,e[n],e[d]),d--,c++;else if(x===void 0&&(x=I(f,c,u),P=I(m,n,d)),x.has(m[n]))if(x.has(m[d])){const h=P.get(f[c]),_=h!==void 0?e[h]:null;if(_===null){const C=$(r,e[n]);y(C,i[c]),l[c]=C}else l[c]=y(_,i[c]),$(r,e[n],_),e[h]=null;c++}else w(e[d]),d--;else w(e[n]),n++;for(;c<=u;){const h=$(r,l[u+1]);y(h,i[c]),l[c++]=h}for(;n<=d;){const h=e[n++];h!==null&&w(h)}return this.ut=f,U(r,l),H}});var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,j=(r,t,o,a)=>{for(var s=a>1?void 0:a?K(t,o):t,e=r.length-1,i;e>=0;e--)(i=r[e])&&(s=(a?i(t,o,s):i(s))||s);return a&&s&&J(t,o,s),s};const W="color-palette";let b=class extends O{constructor(){super(...arguments),this.group="error",this.values=[0,10,20,30,40,50,60,70,80,90,95,99,100]}render(){return g`<div class="row tonal-palette">
      ${q(this.values,r=>g`<color-box
            foreground=${r>=60?"--md-ref-palette-black":"--md-ref-palette-white"}
            background=${`--md-ref-palette-${this.group}${r}`}
            name=${`${r}`}
            >0</color-box
          >`)}
    </div>`}};b.styles=k`
    :host {
      --radius: 16px;
    }

    .row {
      display: flex;
      flex-direction: row;
    }

    color-box:first-child {
      --padding-left: 1rem;
    }

    color-box:last-child {
      --padding-right: 1rem;
    }

    .color-scheme .color-family:first-child color-box:first-child,
    :where(.surfaces, .tonal-palette) color-box:first-child {
      --top-left-radius: var(--radius);
    }

    .color-scheme .color-family:first-child color-box:last-child,
    :where(.surfaces, .tonal-palette) color-box:last-child {
      --top-right-radius: var(--radius);
    }

    .color-scheme .color-family:last-child color-box:first-child,
    :where(.surfaces, .tonal-palette) color-box:first-child {
      --bottom-left-radius: var(--radius);
    }

    .color-scheme .color-family:last-child color-box:last-child,
    :where(.surfaces, .tonal-palette) color-box:last-child {
      --bottom-right-radius: var(--radius);
    }

    color-box {
      flex: 1;
    }
  `;j([A()],b.prototype,"group",2);b=j([S(W)],b);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,L=(r,t,o,a)=>{for(var s=a>1?void 0:a?Y(t,o):t,e=r.length-1,i;e>=0;e--)(i=r[e])&&(s=(a?i(t,o,s):i(s))||s);return a&&s&&X(t,o,s),s};const Z="icons-preview";let v=class extends O{constructor(){super(...arguments),this.variant="material-icons",this.materialIcons=["3d_rotation","ac_unit","access_alarm","access_alarms","access_time","accessibility","accessibility_new","accessible","accessible_forward","account_balance","account_balance_wallet","account_box","account_circle","adb","add","add_a_photo","add_alarm","add_alert","add_box","add_circle","add_circle_outline","add_location","add_photo_alternate","add_shopping_cart"]}render(){return g`
      <link
        rel="stylesheet"
        href="https://rodydavis.github.io/material-design-lite/css/icons.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <div class="icon-grid">
        ${this.materialIcons.map(r=>g`<div class="icon">
            <i class=${this.variant}>${r}</i>
          </div>`)}
      </div>
    `}};v.styles=k`
    .icon-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 1rem;
      padding: 1rem;
      align-items: center;
      text-align: center;
    }
    i {
      font-style: normal;
      font-size: 2rem;
    }
  `;L([A()],v.prototype,"variant",2);v=L([S(Z)],v);
