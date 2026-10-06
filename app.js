const books=[
{id:1,title:"Rayuela",author:"Julio Cortázar",price:14500,category:"literatura",condition:"Muy bueno",seller:"Lucía",tone:"cream"},
{id:2,title:"La invención de Morel",author:"Adolfo Bioy Casares",price:9800,category:"literatura",condition:"Bueno",seller:"Martín",tone:"blue"},
{id:3,title:"El elogio de la sombra",author:"Junichiro Tanizaki",price:12000,category:"ensayo",condition:"Como nuevo",seller:"Sofía",tone:"rose"},
{id:4,title:"Modos de ver",author:"John Berger",price:16000,category:"arte",condition:"Muy bueno",seller:"Pablo",tone:"sand"},
{id:5,title:"La sociedad del espectáculo",author:"Guy Debord",price:11000,category:"filosofia",condition:"Bueno",seller:"Ana",tone:"grey"},
{id:6,title:"Las olas",author:"Virginia Woolf",price:13500,category:"literatura",condition:"Muy bueno",seller:"Clara",tone:"lilac"},
{id:7,title:"El arte de la guerra",author:"Sun Tzu",price:8500,category:"filosofia",condition:"Aceptable",seller:"Nicolás",tone:"olive"},
{id:8,title:"Historia del arte",author:"E. H. Gombrich",price:22000,category:"arte",condition:"Bueno",seller:"Diego",tone:"ochre"}];
const grid=document.querySelector("#book-grid"),search=document.querySelector("#search"),category=document.querySelector("#category");
const money=n=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(n);
function render(){const q=search.value.toLowerCase(),c=category.value;const list=books.filter(b=>(c==="all"||b.category===c)&&(!q||\`\${b.title} \${b.author}\`.toLowerCase().includes(q)));grid.innerHTML=list.map(b=>\`<article class="book-card" onclick="buyBook(\${b.id})"><div class="cover"><div class="cover-inner"><span class="mini-author">\${b.author}</span><strong>\${b.title}</strong><small>EDICIÓN USADA · LIBRO.</small></div></div><div class="book-info"><h3 class="book-title">\${b.title}</h3><p class="book-meta">\${b.author}</p><div class="book-bottom"><span class="price">\${money(b.price)}</span><span class="condition">\${b.condition}</span></div></div></article>\`).join("")||"<p>No encontramos ese libro.</p>";}
window.buyBook=id=>{const b=books.find(x=>x.id===id);if(confirm(b.title+" — "+money(b.price)+"\n\nEn la versión real, el pago quedará retenido hasta confirmar la entrega. ¿Continuar?"))alert("Demo: iniciaríamos el checkout protegido.");};
search.addEventListener("input",render);category.addEventListener("change",render);render();
document.querySelectorAll("[data-action=login]").forEach(b=>b.onclick=()=>document.querySelector("#login-modal").showModal());
document.querySelectorAll("[data-action=sell]").forEach(b=>b.onclick=()=>document.querySelector("#sell-modal").showModal());
document.querySelectorAll("[data-close]").forEach(b=>b.onclick=()=>b.closest("dialog").close());
document.querySelector("#login-form").onsubmit=e=>{e.preventDefault();alert("Demo: cuenta creada/iniciada. La autenticación real usará Neon Auth.");e.target.closest("dialog").close()};
document.querySelector("#sell-form").onsubmit=e=>{e.preventDefault();alert("Demo: el libro quedó preparado para publicar.");e.target.closest("dialog").close();e.target.reset()};