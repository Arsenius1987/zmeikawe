import"./style-e5ec309f.js";let o=[];const i=[];function s(){fetch("store.json").then(t=>t.json()).then(t=>{o=t;for(let n of t)document.body.insertAdjacentHTML("beforeend",c(n))}).catch(t=>console.log(t))}function c(t){return`
  <div style="display:flex; margin:0 auto; max-width: 700px; padding: 20px; gap: 20px">
    <img style="min-width:200px" src="${t.image}">
    <div>
      <h4>${t.name}</h4>  
      <p>${t.description}</p>
      <p style="display:flex; justify-content: space-between;">
        <span>${t.price}</span>
        <button data-id="${t.id}">Добавить в корзину</button>
      </p>
    </div>
  </div>
  `}document.body.addEventListener("click",t=>{const n=t.target;if(n.dataset.id){const d=i.find(e=>e.id==n.dataset.id);if(d)d.count++;else{const e=o.find(a=>a.id==n.dataset.id);e.count=1,i.push(e)}localStorage.korzina=JSON.stringify(i)}});s();
