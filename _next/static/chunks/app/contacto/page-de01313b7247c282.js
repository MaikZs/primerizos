(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[61,570,974],{7020:(e,a,t)=>{Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.t.bind(t,7970,23)),Promise.resolve().then(t.bind(t,3449))},3449:(e,a,t)=>{"use strict";t.d(a,{default:()=>c});var s=t(5155),r=t(2115),l=t(8173),n=t.n(l),i=t(5565),o=t(7058),d=t(9949);let c=()=>{var e;let[a,t]=(0,r.useState)(null),[l,c]=(0,r.useState)(!1),[m,x]=(0,r.useState)({nombre:"",edad:"",sexo:"",puntaje:""}),[u,b]=(0,r.useState)({}),[h,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=localStorage.getItem("userName");e&&t({name:e,initial:e.charAt(0).toUpperCase()})},[]),(0,r.useEffect)(()=>{a&&l&&x(e=>({...e,nombre:a.name}))},[l,a]);let g=()=>{let e={};(!m.nombre||m.nombre.length<2)&&(e.nombre="El nombre debe tener al menos 2 caracteres");let a=parseInt(m.edad);(!m.edad||isNaN(a)||a<=18||0===a)&&(e.edad="La edad debe ser un n\xfamero mayor a 18");let t=parseInt(m.puntaje);return(!m.puntaje||isNaN(t)||t<1||t>7)&&(e.puntaje="El puntaje debe ser un n\xfamero entre 1 y 7"),e},f=async e=>{e.preventDefault();let a=g();if(0===Object.keys(a).length){p(!0);try{let e={...m,timestamp:new Date,edad:parseInt(m.edad),puntaje:parseInt(m.puntaje)};await (0,o.gS)((0,o.rJ)(d.db,"ratings"),e),c(!1),x({nombre:"",edad:"",sexo:"",puntaje:""}),alert("\xa1Gracias por tu calificaci\xf3n!")}catch(e){console.error("Error detallado:",{message:e.message,code:e.code,stack:e.stack}),alert("Error al guardar: ".concat(e.message,". Por favor, verifica la conexi\xf3n a Firestore."))}finally{p(!1)}}else b(a)},j=e=>{let{name:a,value:t}=e.target;x(e=>({...e,[a]:t})),u[a]&&b(e=>({...e,[a]:""}))};return(0,s.jsxs)("header",{className:"w-full px-8 py-6 bg-white shadow-lg",children:[(0,s.jsxs)("nav",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex space-x-6",children:[(0,s.jsx)(n(),{href:"/",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"INICIO"}),(0,s.jsx)(n(),{href:"/modulos",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"MODULOS"}),(0,s.jsx)(n(),{href:"/valoracion",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"VALORACI\xd3N"})]}),(0,s.jsx)(n(),{href:"/",className:"flex-shrink-0",children:(0,s.jsx)(i.default,{src:(e="/inicio/logo.png","".concat("/primerizos").concat(e)),alt:"Baby Life",width:128,height:128,quality:100,priority:!0,className:"h-16 w-auto"})}),(0,s.jsxs)("div",{className:"flex space-x-6 items-center",children:[(0,s.jsx)(n(),{href:"/consejosRapidos",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"CONSEJO R\xc1PIDO"}),(0,s.jsx)(n(),{href:"/contacto",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"CONTACTO"}),(0,s.jsx)("button",{onClick:()=>c(!0),className:"bg-[#FF6FB0] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e55a9d] transition-all duration-300",children:"Calificar App"}),a?(0,s.jsxs)("div",{className:"relative group",children:[(0,s.jsx)("button",{className:"w-10 h-10 rounded-full bg-[#FF6FB0] text-white flex items-center justify-center text-lg font-semibold hover:bg-[#e55a9d] transition-colors",children:a.initial}),(0,s.jsx)("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50",children:(0,s.jsxs)("div",{className:"py-1",children:[(0,s.jsx)("p",{className:"px-4 py-2 text-sm text-gray-700 border-b",children:a.name}),(0,s.jsx)("button",{onClick:()=>{localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),localStorage.removeItem("userPhoto"),t(null),window.location.href="/"},className:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100",children:"Cerrar Sesi\xf3n"})]})})]}):(0,s.jsx)(n(),{href:"/login",className:"bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105",children:"LOGIN"})]})]}),l&&(0,s.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,s.jsxs)("div",{className:"bg-white rounded-lg p-8 max-w-md w-full",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold text-[#824058] mb-6",children:"Califique la aplicaci\xf3n"}),(0,s.jsxs)("form",{onSubmit:f,className:"space-y-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Nombre *"}),(0,s.jsx)("input",{type:"text",name:"nombre",value:m.nombre,onChange:j,className:"w-full border rounded-md p-2",placeholder:"Ingrese su nombre",disabled:h}),u.nombre&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:u.nombre})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Edad *"}),(0,s.jsx)("input",{type:"number",name:"edad",value:m.edad,onChange:j,className:"w-full border rounded-md p-2",placeholder:"Ingrese su edad",disabled:h}),u.edad&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:u.edad})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Sexo"}),(0,s.jsx)("div",{className:"flex space-x-4",children:["Masculino","Femenino","Otro"].map(e=>(0,s.jsxs)("label",{className:"flex items-center space-x-2",children:[(0,s.jsx)("input",{type:"radio",name:"sexo",value:e,checked:m.sexo===e,onChange:j,className:"text-[#FF6FB0]",disabled:h}),(0,s.jsx)("span",{children:e})]},e))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{className:"block text-gray-700 mb-2",children:"Puntaje (1-7) *"}),(0,s.jsx)("input",{type:"number",name:"puntaje",value:m.puntaje,onChange:j,min:"1",max:"7",className:"w-full border rounded-md p-2",placeholder:"Ingrese un puntaje del 1 al 7",disabled:h}),u.puntaje&&(0,s.jsx)("p",{className:"text-red-500 text-sm mt-1",children:u.puntaje})]}),(0,s.jsxs)("div",{className:"flex justify-end space-x-4 mt-6",children:[(0,s.jsx)("button",{type:"button",onClick:()=>{c(!1),x({nombre:"",edad:"",sexo:"",puntaje:""}),b({})},className:"px-4 py-2 text-gray-600 hover:text-gray-800",disabled:h,children:"Cancelar"}),(0,s.jsx)("button",{type:"submit",className:"px-4 py-2 bg-[#FF6FB0] text-white rounded-md hover:bg-[#e55a9d] transition-colors disabled:opacity-50",disabled:h,children:h?"Enviando...":"Enviar"})]})]})]})})]})}},9949:(e,a,t)=>{"use strict";t.d(a,{db:()=>n});var s=t(9904),r=t(7058);let l=(0,s.Wp)({apiKey:"AIzaSyCC41BJIhBP_OB45j1ilmlv7KwY8i8dup8",authDomain:"mi-base-datos-firestore.firebaseapp.com",projectId:"mi-base-datos-firestore",storageBucket:"mi-base-datos-firestore.firebasestorage.app",messagingSenderId:"749560763217",appId:"1:749560763217:web:068113f5b519420e07b970",measurementId:"G-YVMG81B9VM"},"ratings"),n=(0,r.aU)(l)}},e=>{var a=a=>e(e.s=a);e.O(0,[992,970,189,441,517,358],()=>a(7020)),_N_E=e.O()}]);