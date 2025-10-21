// --- Nav mobile ---
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger?.addEventListener('click', () => {
  const willOpen = !menu.classList.contains('show');
  menu.classList.toggle('show', willOpen);
  burger.setAttribute('aria-expanded', String(willOpen));
});

document.querySelectorAll('.menu a').forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('show');
    burger?.setAttribute('aria-expanded', 'false');
  });
});

// Année dynamique
document.getElementById('year').textContent = new Date().getFullYear();

// --- Données produits ---
const PRODUCTS = [

  {id:2,cat:"Menus",name:"Menu Gourmand 🏷️ 3",desc:"5 pièces de poulet + 10 wings + 10 tenders + 4 frites + 1,5L",price:"27,90",img:"images/3.png",tag:"menu"},
  {id:3,cat:"Menus",name:"Menu Big Family  🏷️ 5A",desc:"45 Hot Wings + 4 frites + 1,5L",price:"23,90",img:"images/5A.png",tag:"family"},
  {id:4,cat:"Menus",name:"Menu Trio Box 🏷️ 6A ",desc:"30 Hot Wings + 3 frites + 1,5L",price:"18,90",img:"images/6AA.png",tag:"box"},
  {id:5,cat:"Menus",name:"Menu Chicken Mixte (XL) 🏷️ 4",desc:"10 pièces de poulet + 10 wings + 4 frites + 1,5L",price:"22,90",img:"images/4.png",tag:"menu"},
  {id:6,cat:"Menus",name:"Menu Big Family 🏷️ 5B",desc:"15 pièces de poulet + 4 frites + 1,5L",price:"22,90",img:"images/5bbb.png",tag:"family"},
  {id:7,cat:"Menus",name:"Menu Trio Box 🏷️ 6B",desc:"5 pièces de poulet + 15 wings + 3 frites  + 1,5L",price:"18,90",img:"images/6B.png",tag:"box"},
  {id:8,cat:"Menus",name:"Menu Sweet Family 🏷️ 7",desc:"10 pièces de poulet + 3 frites + 1,5L",price:"16,90",img:"images/7.png",tag:"family"},
  {id:18,cat:"Menus",name:"Menu Tenders XL 🏷️ 14B /🏷️ 14C",desc:"15 tenders + 4 frites + 1,5L",price:"22,90",img:"images/14.png",tag:"tenders"},
  {id:1,cat:"Menus",name:"Menu Chicken Mixte 🏷️ 1",desc:"2 pièces de poulet + 3 wings + frites + boisson",price:"7,50",img:"images/1.png",tag:"menu"},

  {id:9,cat:"Burgers",name:"Fish Burger 🏷️ 9",desc:"1 Fish Burger + frites + boisson",price:"7,00",img:"images/9.png",tag:"burger"},
  {id:10,cat:"Burgers",name:"Chicken Burger 🏷️ 11",desc:"1 chicken burger + frites + boisson",price:"6,50",img:"images/11.png",tag:"burger"},
  {id:11,cat:"Burgers",name:"Double Steack 🏷️ 13",desc:"Double steack + cheese burger + frites + boisson",price:"7,50",img:"images/13.png",tag:"burger"},
  {id:12,cat:"Burgers",name:"Classic Steack 🏷️ 12",desc:"Cheese burger + frites + boisson",price:"6,50",img:"images/12.png",tag:"burger"},
  {id:13,cat:"Burgers",name:"Chicken Filet 🏷️ 8A / 🏷️ 8B",desc:"Classic",price:" 7,00 ",img:"images/8.png",tag:"burger"},
  {id:14,cat:"Burgers",name:"Double Filet 🏷️ 10A / 🏷️ 10B",desc:"2 saveurs au choix",price:"8,00",img:"images/10.png",tag:"burger"},
  {id:37,cat:"Burgers",name:"Burger (unité)",desc:"Burger",price:"2,00",img:"images/Burger.png",tag:"extra"},

  {id:15,cat:"Wings & Co",name:"Hot'n Spicy Wings x6 🏷️ 2A",desc:"A - avec boisson",price:"6,50",img:"images/6.png",tag:"wings"},
  {id:16,cat:"Wings & Co",name:"Hot'n Spicy Wings x10 🏷️ 2B",desc:"B - avec boisson",price:"7,50",img:"images/2b.png",tag:"wings"},
  {id:17,cat:"Wings & Co",name:"Menu Tenders 🏷️ 14A",desc:"5 tenders  + frites + boisson",price:"7,50",img:"images/14a.png",tag:"tenders"},

  {id:19,cat:"Wings & Co",name:"Nuggets x6 🏷️ 15",desc:"6 nuggets + boisson",price:"6,50",img:"images/15.png",tag:"nuggets"},

  {id:20,cat:"Wraps",name:"Chicken Wrap 🏷️ 16A🏷️ 16B",desc:"Chicken wrap + Frites + boisson",price:"7,50",img:"images/tsenderswrap.png",tag:"wrap"},
  {id:21,cat:"Wraps",name:"Tenders Wrap (menu)",desc:"Nouveau",price:"8,00",img:"images/16AB.png",tag:"wrap"},
  {id:22,cat:"Wraps",name:"Kefta Wrap 🏷️ 17",desc:"Boeuf ou Poulet + Frites + boisson",price:"7,50",img:"images/17.png",tag:"wrap"},
  {id:23,cat:"Wraps",name:"Chawarma Wrap 🏷️ 18",desc:"Poulet ou bœuf + Frites + boisson",price:"7,50",img:"images/18.png",tag:"wrap"},

  {id:24,cat:"Enfant",name:"Menu Enfant 🏷️ 19",desc:"Avec surprise",price:"6,00",img:"images/enfant.png",tag:"kids"},

  {id:25,cat:"Nans",name:"Nan Simple 🏷️ 27",desc:"Pain nature",price:"1,50",img:"images/27.png",tag:"nan"},
  {id:26,cat:"Nans",name:"Nan Fromage 🏷️ 28",desc:"Généreux & fondant",price:"3,00",img:"images/28.png",tag:"nan"},
  {id:27,cat:"Nans",name:"Chicken Nan 🏷️ 26",desc:"Nan + crudités + chicken + sauces + frites + boisson",price:"8,50",img:"images/26.png",tag:"nan"},
  {id:28,cat:"Nans",name:"Kefta Nan 🏷️ 25",desc:"Bœuf/kefta + crudités + frites + boisson",price:"8,50",img:"images/25.png",tag:"nan"},
  {id:29,cat:"Nans",name:"Kebab Nan 🏷️ 24",desc:"Viande au choix + crudités + frites + boisson",price:"8,50",img:"images/24.png",tag:"nan"},
  {id:30,cat:"Nans",name:"Steak Nan 🏷️ 23",desc:"Steak + crudités + frites + boisson",price:"8,50",img:"images/23.png",tag:"nan"},
  {id:31,cat:"Nans",name:"Fish Nan Fromage 🏷️ 22",desc:"Fish + fromage + crudités + frites + boisson",price:"8,50",img:"images/22.png",tag:"nan"},
  {id:32,cat:"Nans",name:"Chicken Tandoori 🏷️ 21",desc:"Tandoori + viande de poulet + sauce + crudités + frites + boisson",price:"8,50",img:"images/21.png",tag:"nan"},

  {id:33,cat:"Accompagnements",name:"Piment au fromage (x5) 🏷️ A",price:"4,00",img:"images/PimentFromage1.png",tag:"side"},
  {id:34,cat:"Accompagnements",name:"Bâtonnets de mozzarella 🏷️ B",price:"3,50",img:"images/B.png",tag:"side"},
  {id:35,cat:"Accompagnements",name:"Bouchées de camembert 🏷️ C",price:"3,50",img:"images/C.png",tag:"side"},
  {id:36,cat:"Accompagnements",name:"Anneaux d’oignons 🏷️ D",price:"3,50",img:"images/D.png",tag:"side"},

  {id:38,cat:"Accompagnements",name:"Wings (x5)",price:"4,50",img:"images/WINGS5.png",tag:"extra"},
  {id:39,cat:"Accompagnements",name:"Tenders (x3)",price:"5,00",img:"images/TENDERS5.png",tag:"extra"},
  {id:40,cat:"Accompagnements",name:"Nugget’s (x6)",price:"3,00",img:"images/NUGGETS5.png",tag:"extra"},
  {id:41,cat:"Accompagnements",name:"Épi de maïs",price:"2,00",img:"images/m.png",tag:"extra"},
  {id:42,cat:"Accompagnements",name:"Potatoes croustillantes",price:"3,00",img:"images/po.png",tag:"extra"},
];

const CATEGORIES = ["Tous","Menus","Burgers","Wraps","Wings & Co","Nans","Accompagnements","Enfant"];

// --- Menu interactif ---
const grid   = document.getElementById('grid');
const catbar = document.getElementById('catbar');
const search = document.getElementById('search');
const sort   = document.getElementById('sort');

let state = { cat:"Tous", q:"", sort:"default" };

CATEGORIES.forEach(c=>{
  const b=document.createElement('button');
  b.textContent=c;
  if(c==="Tous") b.classList.add('active');
  b.addEventListener('click', ()=>{
    [...catbar.children].forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    state.cat=c; render();
  });
  catbar.appendChild(b);
});

search.addEventListener('input', ()=>{ state.q=search.value.trim().toLowerCase(); render(); });
sort.addEventListener('change', ()=>{ state.sort=sort.value; render(); });

function euroToNumber(e){ return Number((e||"0").replace(",",".").replace(/[^\d.]/g,"")); }
function sortItems(list){
  switch(state.sort){
    case "price-asc":  return list.sort((a,b)=>euroToNumber(a.price)-euroToNumber(b.price));
    case "price-desc": return list.sort((a,b)=>euroToNumber(b.price)-euroToNumber(a.price));
    case "alpha":      return list.sort((a,b)=>a.name.localeCompare(b.name));
    default:           return list;
  }
}
function imgOrPlaceholder(x){
  return x.img
    ? `<img src="${x.img}" alt="${x.name}" loading="lazy">`
    : `<div class="placeholder">Mr Chicken</div>`;
}
function cardHTML(x){
  return `
    <article class="card">
      <div class="media">
        ${imgOrPlaceholder(x)}
        <span class="ribbon">${x.cat}</span>
      </div>
      <div class="content">
        <div class="title">
          <h3>${x.name}</h3>
          <div class="price">${x.price}€</div>
        </div>
        <p class="desc">${x.desc||""}</p>
        <div class="meta">
          ${x.tag?`<span class="pill">${x.tag}</span>`:""}
          <span class="pill">Mr Chicken</span>
        </div>
      </div>
    </article>`;
}
function render(){
  let items = PRODUCTS.slice();
  if(state.cat!=="Tous") items = items.filter(x=>x.cat===state.cat);
  if(state.q){
    const q = state.q;
    items = items.filter(x => (x.name + (x.desc||"") + x.cat).toLowerCase().includes(q));
  }
  items = sortItems(items);
  grid.innerHTML = items.length ? items.map(cardHTML).join('') : `<p>Aucun résultat.</p>`;
}
render();

// Slogan rotatif (respecte prefers-reduced-motion)
(function(){
  const el = document.querySelector(".promo-sub");
  if(!el) return;
  const lines = [
    "Poulet croustillant, sauces maison, service rapide.",
    "Fraîcheur du jour, goût authentique.",
    "Des wings qui claquent, des wraps qui régalent."
  ];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) { el.textContent = lines[0]; return; }
  let i = 0;
  setInterval(()=>{
    i = (i+1)%lines.length;
    el.style.opacity = 0;
    setTimeout(()=>{ el.textContent = lines[i]; el.style.opacity = 1; }, 250);
  }, 3500);
})();

// Effet ripple sur .btn (désactivé si réduction d’animations)
(function(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;
  document.addEventListener('click', (e)=>{
    const b = e.target.closest('.btn');
    if(!b) return;
    const rect = b.getBoundingClientRect();
    const d = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - d/2;
    const y = e.clientY - rect.top  - d/2;
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = d+'px';
    ripple.style.left = x+'px';
    ripple.style.top  = y+'px';
    b.appendChild(ripple);
    setTimeout(()=> ripple.remove(), 600);
  });
})();
