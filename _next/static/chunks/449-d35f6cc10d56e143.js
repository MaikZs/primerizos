"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{3449:(e,t,a)=>{a.d(t,{default:()=>x});var s=a(5155),r=a(2115),l=a(8173),n=a.n(l),i=a(5565),o=a(7058),d=a(9949),c=a(4565),m=a(909);let x=()=>{let[e,t]=(0,r.useState)(!1),[a,l]=(0,r.useState)(null),[x,h]=(0,r.useState)(!1),[b,u]=(0,r.useState)({nombre:"",edad:"",sexo:"",puntaje:""}),[p,f]=(0,r.useState)({}),[g,j]=(0,r.useState)(!1),y=e=>"".concat("/primerizos").concat(e);(0,r.useEffect)(()=>{let e=localStorage.getItem("userName");e&&l({name:e,initial:e.charAt(0).toUpperCase()})},[]),(0,r.useEffect)(()=>{a&&x&&u(e=>({...e,nombre:a.name}))},[x,a]);let N=async()=>{try{await (0,c.CI)(m.j),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),localStorage.removeItem("userPhoto"),l(null),window.location.href="/primerizos/"}catch(e){console.error("Error al cerrar sesi\xf3n:",e),alert("Error al cerrar sesi\xf3n. Por favor, intenta de nuevo.")}},v=()=>{let e={};(!b.nombre||b.nombre.length<2)&&(e.nombre="El nombre debe tener al menos 2 caracteres");let t=parseInt(b.edad);(!b.edad||isNaN(t)||t<=18||0===t)&&(e.edad="La edad debe ser un n\xfamero mayor a 18");let a=parseInt(b.puntaje);return(!b.puntaje||isNaN(a)||a<1||a>7)&&(e.puntaje="El puntaje debe ser un n\xfamero entre 1 y 7"),e},w=async e=>{e.preventDefault();let t=v();if(0===Object.keys(t).length){j(!0);try{let e={...b,timestamp:new Date,edad:parseInt(b.edad),puntaje:parseInt(b.puntaje)};await (0,o.gS)((0,o.rJ)(d.db,"ratings"),e),h(!1),u({nombre:"",edad:"",sexo:"",puntaje:""}),alert("\xa1Gracias por tu calificaci\xf3n!")}catch(e){console.error("Error detallado:",{message:e.message,code:e.code,stack:e.stack}),alert("Error al guardar: ".concat(e.message,". Por favor, verifica la conexi\xf3n a Firestore."))}finally{j(!1)}}else f(t)},k=e=>{let{name:t,value:a}=e.target;u(e=>({...e,[t]:a})),p[t]&&f(e=>({...e,[t]:""}))};return(0,s.jsxs)("header",{className:"w-full bg-white shadow-lg",children:[(0,s.jsxs)("div",{className:"md:hidden",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between px-4 py-3",children:[(0,s.jsx)("button",{onClick:()=>t(!e),className:"text-gray-600 hover:text-gray-900 focus:outline-none",children:(0,s.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:e?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16M4 18h16"})})}),(0,s.jsx)(n(),{href:"/",className:"flex-shrink-0",children:(0,s.jsx)(i.default,{src:y("/inicio/logo.png"),alt:"Baby Life",width:96,height:96,quality:100,priority:!0,className:"h-12 w-auto"})}),a?(0,s.jsx)("div",{className:"relative",children:(0,s.jsx)("button",{className:"w-8 h-8 rounded-full bg-[#FF6FB0] text-white flex items-center justify-center text-sm font-semibold",onClick:()=>t(!e),children:a.initial})}):(0,s.jsx)(n(),{href:"/login",className:"text-sm bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600",children:"LOGIN"})]}),(0,s.jsx)("div",{className:"".concat(e?"block":"hidden"," px-4 pt-2 pb-4 bg-white border-t border-gray-200"),children:(0,s.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,s.jsx)(n(),{href:"/",className:"text-black text-base font-semibold hover:text-gray-600",children:"INICIO"}),(0,s.jsx)(n(),{href:"/modulos",className:"text-black text-base font-semibold hover:text-gray-600",children:"MODULOS"}),(0,s.jsx)(n(),{href:"/valoracion",className:"text-black text-base font-semibold hover:text-gray-600",children:"VALORACI\xd3N"}),(0,s.jsx)(n(),{href:"/consejosRapidos",className:"text-black text-base font-semibold hover:text-gray-600",children:"CONSEJO R\xc1PIDO"}),(0,s.jsx)(n(),{href:"/contacto",className:"text-black text-base font-semibold hover:text-gray-600",children:"CONTACTO"}),(0,s.jsx)("button",{onClick:()=>{h(!0),t(!1)},className:"bg-[#FF6FB0] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e55a9d] w-full text-center",children:"Calificar App"}),a&&(0,s.jsx)("button",{onClick:N,className:"text-red-600 text-base font-semibold hover:text-red-700 text-left",children:"Cerrar Sesi\xf3n"})]})})]}),(0,s.jsx)("nav",{className:"hidden md:block max-w-7xl mx-auto px-4 py-6",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex space-x-6",children:[(0,s.jsx)(n(),{href:"/",className:"text-black text-lg font-semibold hover:text-gray-600 transition duration-300",children:"INICIO"}),(0,s.jsx)(n(),{href:"/modulos",className:"text-black text-lg font-semibold hover:text-gray-600 transition duration-300",children:"MODULOS"}),(0,s.jsx)(n(),{href:"/valoracion",className:"text-black text-lg font-semibold hover:text-gray-600 transition duration-300",children:"VALORACI\xd3N"})]}),(0,s.jsx)(n(),{href:"/",className:"flex-shrink-0",children:(0,s.jsx)(i.default,{src:y("/inicio/logo.png"),alt:"Baby Life",width:128,height:128,quality:100,priority:!0,className:"h-16 w-auto"})}),(0,s.jsxs)("div",{className:"flex items-center space-x-6",children:[(0,s.jsx)(n(),{href:"/consejosRapidos",className:"text-black text-lg font-semibold hover:text-gray-600 transition duration-300",children:"CONSEJO R\xc1PIDO"}),(0,s.jsx)(n(),{href:"/contacto",className:"text-black text-lg font-semibold hover:text-gray-600 transition duration-300",children:"CONTACTO"}),(0,s.jsx)("button",{onClick:()=>h(!0),className:"bg-[#FF6FB0] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e55a9d] transition-all duration-300",children:"Calificar App"}),a?(0,s.jsxs)("div",{className:"relative group",children:[(0,s.jsx)("button",{className:"w-10 h-10 rounded-full bg-[#FF6FB0] text-white flex items-center justify-center text-lg font-semibold hover:bg-[#e55a9d] transition-colors",children:a.initial}),(0,s.jsx)("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50",children:(0,s.jsxs)("div",{className:"py-1",children:[(0,s.jsx)("p",{className:"px-4 py-2 text-sm text-gray-700 border-b",children:a.name}),(0,s.jsx)("button",{onClick:N,className:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100",children:"Cerrar Sesi\xf3n"})]})})]}):(0,s.jsx)(n(),{href:"/login",className:"bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300",children:"LOGIN"})]})]})}),x&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto",children:[(0,s.jsx)("h2",{className:"text-xl md:text-2xl font-bold text-[#824058] mb-6",children:"Califique la aplicaci\xf3n"}),(0,s.jsxs)("form",{onSubmit:w,className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Nombre *"}),(0,s.jsx)("input",{type:"text",name:"nombre",value:b.nombre,onChange:k,className:"w-full border rounded-md p-2",placeholder:"Ingrese su nombre",disabled:g}),p.nombre&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:p.nombre})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Edad *"}),(0,s.jsx)("input",{type:"number",name:"edad",value:b.edad,onChange:k,className:"w-full border rounded-md p-2",placeholder:"Ingrese su edad",disabled:g}),p.edad&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:p.edad})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Sexo"}),(0,s.jsx)("div",{className:"flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0",children:["Masculino","Femenino","Otro"].map(e=>(0,s.jsxs)("label",{className:"flex items-center space-x-2",children:[(0,s.jsx)("input",{type:"radio",name:"sexo",value:e,checked:b.sexo===e,onChange:k,className:"text-[#FF6FB0]",disabled:g}),(0,s.jsx)("span",{children:e})]},e))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Puntaje (1-7) *"}),(0,s.jsx)("input",{type:"number",name:"puntaje",value:b.puntaje,onChange:k,min:"1",max:"7",className:"w-full border rounded-md p-2",placeholder:"Ingrese un puntaje del 1 al 7",disabled:g}),p.puntaje&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:p.puntaje})]}),(0,s.jsxs)("div",{className:"flex flex-col-reverse sm:flex-row justify-end space-y-4 space-y-reverse sm:space-y-0 sm:space-x-4 mt-6",children:[(0,s.jsx)("button",{type:"button",onClick:()=>{h(!1),u({nombre:"",edad:"",sexo:"",puntaje:""}),f({})},className:"px-4 py-2 text-gray-600 hover:text-gray-800 text-center",disabled:g,children:"Cancelar"}),(0,s.jsx)("button",{type:"submit",className:"px-4 py-2 bg-[#FF6FB0] text-white rounded-md hover:bg-[#e55a9d] transition-colors disabled:opacity-50 text-center",disabled:g,children:g?"Enviando...":"Enviar"})]})]})]})})]})}},9949:(e,t,a)=>{a.d(t,{db:()=>n});var s=a(9904),r=a(7058);let l=(0,s.Wp)({apiKey:"AIzaSyCC41BJIhBP_OB45j1ilmlv7KwY8i8dup8",authDomain:"mi-base-datos-firestore.firebaseapp.com",projectId:"mi-base-datos-firestore",storageBucket:"mi-base-datos-firestore.firebasestorage.app",messagingSenderId:"749560763217",appId:"1:749560763217:web:068113f5b519420e07b970",measurementId:"G-YVMG81B9VM"},"ratings"),n=(0,r.aU)(l)},909:(e,t,a)=>{a.d(t,{j:()=>n});var s=a(9904),r=a(4565);let l=(0,s.Wp)({apiKey:"AIzaSyCHqa6nZr4kicTmSz-w4c1X69taVDr52ak",authDomain:"my-proyecto-01-23144.firebaseapp.com",projectId:"my-proyecto-01-23144",storageBucket:"my-proyecto-01-23144.firebasestorage.app",messagingSenderId:"434304040467",appId:"1:434304040467:web:949b61c4bdca34977cc9e6"}),n=(0,r.xI)(l)}}]);