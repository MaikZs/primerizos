"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6907:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(5155);s(2115);var r=s(5565),l=s(8173),n=s.n(l);let i=()=>(0,t.jsx)("footer",{className:"w-full bg-gradient-to-r from-[#824058] to-[#a46372] mt-20",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 py-12",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 text-white",children:[(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h3",{className:"text-2xl font-bold text-[#FF6FB0]",children:"BabyCare"}),(0,t.jsx)("p",{className:"text-sm opacity-90",children:"Tu compa\xf1ero esencial en la aventura de la paternidad. Ofrecemos recursos pr\xe1cticos y cursos accesibles para padres primerizos."})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h4",{className:"text-lg font-semibold text-[#FF6FB0]",children:"Enlaces R\xe1pidos"}),(0,t.jsx)("ul",{className:"space-y-2",children:["Inicio","Modulos","Consejos Rapidos","Contacto","Libro de Reclamaciones"].map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(n(),{href:"#",className:"hover:text-[#FF6FB0] transition-colors",children:e})},e))})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h4",{className:"text-lg font-semibold text-[#FF6FB0]",children:"Contacto"}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(r.default,{src:"/incons/email.svg",alt:"Email",width:20,height:20}),"info@babycare.com"]}),(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(r.default,{src:"/incons/telefono.svg",alt:"Tel\xe9fono",width:20,height:20}),"+51 987 654 321"]}),(0,t.jsxs)("p",{className:"flex items-center gap-2",children:[(0,t.jsx)(r.default,{src:"/incons/location.svg",alt:"Ubicaci\xf3n",width:20,height:20}),"Distrito Miraflores, Lima-Per\xfa"]})]})]}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsx)("h4",{className:"text-lg font-semibold text-[#FF6FB0]",children:"S\xedguenos"}),(0,t.jsx)("div",{className:"flex space-x-4",children:[{name:"facebook",url:"https://facebook.com/tu-pagina",icon:"/incons/fb.svg"},{name:"instagram",url:"https://instagram.com/tu-cuenta",icon:"/incons/ig.svg"},{name:"twitter",url:"https://twitter.com/tu-usuario",icon:"/incons/x.svg"},{name:"youtube",url:"https://youtube.com/tu-canal",icon:"/incons/yt.svg"}].map(e=>(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"p-2 rounded-full bg-[#FF6FB0] hover:bg-[#e55a9d] transition-colors",children:(0,t.jsx)(r.default,{src:e.icon,alt:"Icono ".concat(e.name),width:24,height:24})},e.name))})]})]}),(0,t.jsx)("div",{className:"border-t border-[#FF6FB0]/30 my-8"}),(0,t.jsx)("div",{className:"text-center text-sm opacity-75",children:(0,t.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," BabyCare. Todos los derechos reservados. |",(0,t.jsx)(n(),{href:"#",className:"hover:text-[#FF6FB0] ml-2",children:"Pol\xedtica de Privacidad"})]})})]})})},3449:(e,a,s)=>{s.d(a,{default:()=>d});var t=s(5155),r=s(2115),l=s(8173),n=s.n(l),i=s(5565),o=s(7058),c=s(9949);let d=()=>{let[e,a]=(0,r.useState)(null),[s,l]=(0,r.useState)(!1),[d,m]=(0,r.useState)({nombre:"",edad:"",sexo:"",puntaje:""}),[x,h]=(0,r.useState)({}),[u,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=localStorage.getItem("userName");e&&a({name:e,initial:e.charAt(0).toUpperCase()})},[]),(0,r.useEffect)(()=>{e&&s&&m(a=>({...a,nombre:e.name}))},[s,e]);let b=()=>{let e={};(!d.nombre||d.nombre.length<2)&&(e.nombre="El nombre debe tener al menos 2 caracteres");let a=parseInt(d.edad);(!d.edad||isNaN(a)||a<=18||0===a)&&(e.edad="La edad debe ser un n\xfamero mayor a 18");let s=parseInt(d.puntaje);return(!d.puntaje||isNaN(s)||s<1||s>7)&&(e.puntaje="El puntaje debe ser un n\xfamero entre 1 y 7"),e},g=async e=>{e.preventDefault();let a=b();if(0===Object.keys(a).length){p(!0);try{let e={...d,timestamp:new Date,edad:parseInt(d.edad),puntaje:parseInt(d.puntaje)};await (0,o.gS)((0,o.rJ)(c.db,"ratings"),e),l(!1),m({nombre:"",edad:"",sexo:"",puntaje:""}),alert("\xa1Gracias por tu calificaci\xf3n!")}catch(e){console.error("Error detallado:",{message:e.message,code:e.code,stack:e.stack}),alert("Error al guardar: ".concat(e.message,". Por favor, verifica la conexi\xf3n a Firestore."))}finally{p(!1)}}else h(a)},f=e=>{let{name:a,value:s}=e.target;m(e=>({...e,[a]:s})),x[a]&&h(e=>({...e,[a]:""}))};return(0,t.jsxs)("header",{className:"w-full px-8 py-6 bg-white shadow-lg",children:[(0,t.jsxs)("nav",{className:"max-w-7xl mx-auto flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex space-x-6",children:[(0,t.jsx)(n(),{href:"/",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"INICIO"}),(0,t.jsx)(n(),{href:"/modulos",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"MODULOS"}),(0,t.jsx)(n(),{href:"/valoracion",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"VALORACI\xd3N"})]}),(0,t.jsx)(n(),{href:"/",className:"flex-shrink-0",children:(0,t.jsx)(i.default,{src:"/inicio/logo.png",alt:"Baby Life",width:128,height:128,quality:100,className:"h-16 w-auto"})}),(0,t.jsxs)("div",{className:"flex space-x-6 items-center",children:[(0,t.jsx)(n(),{href:"/consejosRapidos",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"CONSEJO R\xc1PIDO"}),(0,t.jsx)(n(),{href:"/contacto",className:"text-black text-lg font-semibold hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110",children:"CONTACTO"}),(0,t.jsx)("button",{onClick:()=>l(!0),className:"bg-[#FF6FB0] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#e55a9d] transition-all duration-300",children:"Calificar App"}),e?(0,t.jsxs)("div",{className:"relative group",children:[(0,t.jsx)("button",{className:"w-10 h-10 rounded-full bg-[#FF6FB0] text-white flex items-center justify-center text-lg font-semibold hover:bg-[#e55a9d] transition-colors",children:e.initial}),(0,t.jsx)("div",{className:"absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50",children:(0,t.jsxs)("div",{className:"py-1",children:[(0,t.jsx)("p",{className:"px-4 py-2 text-sm text-gray-700 border-b",children:e.name}),(0,t.jsx)("button",{onClick:()=>{localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),localStorage.removeItem("userPhoto"),a(null),window.location.href="/"},className:"w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100",children:"Cerrar Sesi\xf3n"})]})})]}):(0,t.jsx)(n(),{href:"/login",className:"bg-blue-500 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105",children:"LOGIN"})]})]}),s&&(0,t.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:(0,t.jsxs)("div",{className:"bg-white rounded-lg p-8 max-w-md w-full",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-[#824058] mb-6",children:"Califique la aplicaci\xf3n"}),(0,t.jsxs)("form",{onSubmit:g,className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 mb-2",children:"Nombre *"}),(0,t.jsx)("input",{type:"text",name:"nombre",value:d.nombre,onChange:f,className:"w-full border rounded-md p-2",placeholder:"Ingrese su nombre",disabled:u}),x.nombre&&(0,t.jsx)("p",{className:"text-red-500 text-sm mt-1",children:x.nombre})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 mb-2",children:"Edad *"}),(0,t.jsx)("input",{type:"number",name:"edad",value:d.edad,onChange:f,className:"w-full border rounded-md p-2",placeholder:"Ingrese su edad",disabled:u}),x.edad&&(0,t.jsx)("p",{className:"text-red-500 text-sm mt-1",children:x.edad})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 mb-2",children:"Sexo"}),(0,t.jsx)("div",{className:"flex space-x-4",children:["Masculino","Femenino","Otro"].map(e=>(0,t.jsxs)("label",{className:"flex items-center space-x-2",children:[(0,t.jsx)("input",{type:"radio",name:"sexo",value:e,checked:d.sexo===e,onChange:f,className:"text-[#FF6FB0]",disabled:u}),(0,t.jsx)("span",{children:e})]},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-gray-700 mb-2",children:"Puntaje (1-7) *"}),(0,t.jsx)("input",{type:"number",name:"puntaje",value:d.puntaje,onChange:f,min:"1",max:"7",className:"w-full border rounded-md p-2",placeholder:"Ingrese un puntaje del 1 al 7",disabled:u}),x.puntaje&&(0,t.jsx)("p",{className:"text-red-500 text-sm mt-1",children:x.puntaje})]}),(0,t.jsxs)("div",{className:"flex justify-end space-x-4 mt-6",children:[(0,t.jsx)("button",{type:"button",onClick:()=>{l(!1),m({nombre:"",edad:"",sexo:"",puntaje:""}),h({})},className:"px-4 py-2 text-gray-600 hover:text-gray-800",disabled:u,children:"Cancelar"}),(0,t.jsx)("button",{type:"submit",className:"px-4 py-2 bg-[#FF6FB0] text-white rounded-md hover:bg-[#e55a9d] transition-colors disabled:opacity-50",disabled:u,children:u?"Enviando...":"Enviar"})]})]})]})})]})}},9949:(e,a,s)=>{s.d(a,{db:()=>n});var t=s(9904),r=s(7058);let l=(0,t.Wp)({apiKey:"AIzaSyCC41BJIhBP_OB45j1ilmlv7KwY8i8dup8",authDomain:"mi-base-datos-firestore.firebaseapp.com",projectId:"mi-base-datos-firestore",storageBucket:"mi-base-datos-firestore.firebasestorage.app",messagingSenderId:"749560763217",appId:"1:749560763217:web:068113f5b519420e07b970",measurementId:"G-YVMG81B9VM"},"ratings"),n=(0,r.aU)(l)},3155:(e,a,s)=>{function t(e){let{src:a}=e;return"/primerizos".concat(a)}s.r(a),s.d(a,{default:()=>t})}}]);