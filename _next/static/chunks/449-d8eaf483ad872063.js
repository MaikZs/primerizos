(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{3449:(e,a,s)=>{"use strict";s.d(a,{default:()=>u});var n=s(5155),l=s(2115),r=s(8173),i=s.n(r),o=s(5565),t=s(7058),c=s(9949),d=s(4565),m=s(909);s(5933);let u=()=>{let e=e=>"".concat("/primerizos").concat(e),[a,s]=(0,l.useState)(null),[r,u]=(0,l.useState)(!1),[h,j]=(0,l.useState)(!1),[b,p]=(0,l.useState)({nombre:"",edad:"",sexo:"",puntaje:""}),[x,N]=(0,l.useState)({}),[f,g]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=localStorage.getItem("userName");e&&s({name:e,initial:e.charAt(0).toUpperCase()})},[]),(0,l.useEffect)(()=>{a&&r&&p(e=>({...e,nombre:a.name}))},[r,a]),(0,l.useEffect)(()=>(h?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[h]);let v=async()=>{try{await (0,d.CI)(m.j),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),localStorage.removeItem("userPhoto"),s(null),window.location.href="/primerizos/"}catch(e){console.error("Error al cerrar sesi\xf3n:",e),alert("Error al cerrar sesi\xf3n. Por favor, intenta de nuevo.")}},C=()=>{let e={};(!b.nombre||b.nombre.length<2)&&(e.nombre="El nombre debe tener al menos 2 caracteres");let a=parseInt(b.edad);(!b.edad||isNaN(a)||a<=18||0===a)&&(e.edad="La edad debe ser un n\xfamero mayor a 18");let s=parseInt(b.puntaje);return(!b.puntaje||isNaN(s)||s<1||s>7)&&(e.puntaje="El puntaje debe ser un n\xfamero entre 1 y 7"),e},k=async e=>{e.preventDefault();let a=C();if(0===Object.keys(a).length){g(!0);try{let e={...b,timestamp:new Date,edad:parseInt(b.edad),puntaje:parseInt(b.puntaje)};await (0,t.gS)((0,t.rJ)(c.db,"ratings"),e),u(!1),p({nombre:"",edad:"",sexo:"",puntaje:""}),alert("\xa1Gracias por tu calificaci\xf3n!")}catch(e){console.error("Error al guardar:",e),alert("Error al guardar: ".concat(e.message))}finally{g(!1)}}else N(a)},y=e=>{let{name:a,value:s}=e.target;p(e=>({...e,[a]:s})),x[a]&&N(e=>({...e,[a]:""}))};return(0,n.jsxs)("header",{className:"navbar",children:[(0,n.jsx)("div",{className:"menu-container",children:(0,n.jsxs)("div",{className:"menu-top",children:[(0,n.jsxs)("div",{className:"menu-links",children:[(0,n.jsx)(i(),{href:"/",className:"menu-link",children:"INICIO"}),(0,n.jsx)(i(),{href:"/modulos",className:"menu-link",children:"MODULOS"}),(0,n.jsx)(i(),{href:"/valoracion",className:"menu-link",children:"VALORACI\xd3N"})]}),(0,n.jsx)("div",{className:"menu-logo",children:(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)(o.default,{src:e("/inicio/logo.png"),alt:"Baby Life",width:100,height:40,className:"logo"})})}),(0,n.jsxs)("div",{className:"menu-links",children:[(0,n.jsx)(i(),{href:"/consejosRapidos",className:"menu-link",children:"CONSEJO R\xc1PIDO"}),(0,n.jsx)(i(),{href:"/contacto",className:"menu-link",children:"CONTACTO"}),(0,n.jsx)("button",{className:"rate-button",onClick:()=>u(!0),children:"Calificar App"}),a?(0,n.jsx)("button",{className:"user-button",onClick:v,children:a.initial}):(0,n.jsx)(i(),{href:"/login",className:"login-button",children:"LOGIN"})]})]})}),(0,n.jsxs)("div",{className:"mobile-menu-container",children:[(0,n.jsx)("button",{className:"mobile-rate-button",onClick:()=>u(!0),children:"Calificar App"}),(0,n.jsx)("div",{className:"mobile-logo",children:(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)(o.default,{src:e("/inicio/logo.png"),alt:"Baby Life",width:100,height:40,className:"logo"})})}),(0,n.jsxs)("button",{className:"hamburger-button",onClick:()=>j(!0),"aria-label":"Abrir men\xfa",children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]})]}),(0,n.jsx)("div",{className:"slide-menu-overlay ".concat(h?"active":""),onClick:()=>j(!1)}),(0,n.jsxs)("div",{className:"slide-menu ".concat(h?"active":""),children:[(0,n.jsxs)("div",{className:"slide-menu-header",children:[(0,n.jsx)(i(),{href:"/",onClick:()=>j(!1),children:(0,n.jsx)(o.default,{src:e("/inicio/logo.png"),alt:"Baby Life",width:100,height:40,className:"logo"})}),(0,n.jsx)("button",{className:"close-menu",onClick:()=>j(!1),"aria-label":"Cerrar men\xfa",children:"✕"})]}),(0,n.jsxs)("nav",{className:"slide-menu-nav",children:[(0,n.jsx)(i(),{href:"/",className:"slide-menu-link",onClick:()=>j(!1),children:"INICIO"}),(0,n.jsx)(i(),{href:"/modulos",className:"slide-menu-link",onClick:()=>j(!1),children:"MODULOS"}),(0,n.jsx)(i(),{href:"/valoracion",className:"slide-menu-link",onClick:()=>j(!1),children:"VALORACI\xd3N"}),(0,n.jsx)(i(),{href:"/consejosRapidos",className:"slide-menu-link",onClick:()=>j(!1),children:"CONSEJO R\xc1PIDO"}),(0,n.jsx)(i(),{href:"/contacto",className:"slide-menu-link",onClick:()=>j(!1),children:"CONTACTO"})]}),(0,n.jsxs)("div",{className:"slide-menu-footer",children:[(0,n.jsx)("button",{className:"slide-menu-button rate",onClick:()=>{u(!0),j(!1)},children:"Calificar App"}),a?(0,n.jsxs)("button",{className:"slide-menu-button logout",onClick:()=>{v(),j(!1)},children:["Cerrar Sesi\xf3n (",a.name,")"]}):(0,n.jsx)(i(),{href:"/login",className:"slide-menu-button login",onClick:()=>j(!1),children:"LOGIN"})]})]}),r&&(0,n.jsx)("div",{className:"modal-overlay",onClick:e=>{e.target.classList.contains("modal-overlay")&&u(!1)},children:(0,n.jsxs)("div",{className:"modal-content",children:[(0,n.jsx)("h2",{className:"modal-title",children:"Califique la aplicaci\xf3n"}),(0,n.jsx)("button",{className:"modal-close",onClick:()=>u(!1),children:"✕"}),(0,n.jsxs)("form",{onSubmit:k,className:"rating-form",children:[(0,n.jsxs)("div",{className:"form-field",children:[(0,n.jsx)("label",{children:"Nombre *"}),(0,n.jsx)("input",{type:"text",name:"nombre",value:b.nombre,onChange:y,placeholder:"Ingrese su nombre",disabled:f}),x.nombre&&(0,n.jsx)("span",{className:"form-error",children:x.nombre})]}),(0,n.jsxs)("div",{className:"form-field",children:[(0,n.jsx)("label",{children:"Edad *"}),(0,n.jsx)("input",{type:"number",name:"edad",value:b.edad,onChange:y,placeholder:"Ingrese su edad",disabled:f}),x.edad&&(0,n.jsx)("span",{className:"form-error",children:x.edad})]}),(0,n.jsxs)("div",{className:"form-field",children:[(0,n.jsx)("label",{children:"Sexo"}),(0,n.jsx)("div",{className:"radio-options",children:["Masculino","Femenino","Otro"].map(e=>(0,n.jsxs)("label",{className:"radio-option",children:[(0,n.jsx)("input",{type:"radio",name:"sexo",value:e,checked:b.sexo===e,onChange:y,disabled:f}),(0,n.jsx)("span",{children:e})]},e))})]}),(0,n.jsxs)("div",{className:"form-field",children:[(0,n.jsx)("label",{children:"Puntaje (1-7) *"}),(0,n.jsx)("input",{type:"number",name:"puntaje",value:b.puntaje,onChange:y,min:"1",max:"7",placeholder:"Ingrese un puntaje del 1 al 7",disabled:f}),x.puntaje&&(0,n.jsx)("span",{className:"form-error",children:x.puntaje})]}),(0,n.jsxs)("div",{className:"form-buttons",children:[(0,n.jsx)("button",{type:"button",onClick:()=>{u(!1),p({nombre:"",edad:"",sexo:"",puntaje:""}),N({})},className:"form-button cancel",disabled:f,children:"Cancelar"}),(0,n.jsx)("button",{type:"submit",className:"form-button submit",disabled:f,children:f?"Enviando...":"Enviar"})]})]})]})})]})}},9949:(e,a,s)=>{"use strict";s.d(a,{db:()=>i});var n=s(9904),l=s(7058);let r=(0,n.Wp)({apiKey:"AIzaSyCC41BJIhBP_OB45j1ilmlv7KwY8i8dup8",authDomain:"mi-base-datos-firestore.firebaseapp.com",projectId:"mi-base-datos-firestore",storageBucket:"mi-base-datos-firestore.firebasestorage.app",messagingSenderId:"749560763217",appId:"1:749560763217:web:068113f5b519420e07b970",measurementId:"G-YVMG81B9VM"},"ratings"),i=(0,l.aU)(r)},909:(e,a,s)=>{"use strict";s.d(a,{j:()=>i});var n=s(9904),l=s(4565);let r=(0,n.Wp)({apiKey:"AIzaSyCHqa6nZr4kicTmSz-w4c1X69taVDr52ak",authDomain:"my-proyecto-01-23144.firebaseapp.com",projectId:"my-proyecto-01-23144",storageBucket:"my-proyecto-01-23144.firebasestorage.app",messagingSenderId:"434304040467",appId:"1:434304040467:web:949b61c4bdca34977cc9e6"}),i=(0,l.xI)(r)},5933:()=>{}}]);