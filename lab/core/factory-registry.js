/* Ocarina Factory Registry 1.0
   Central, browser-only integration layer for catalog, lifecycle and QA.
   No buyer data is stored here. */
(function(global){
  const STATUS={idea:'IDEA',lab:'LAB',qa:'QA',available:'AVAILABLE',archived:'ARCHIVED',soon:'SOON'};
  const CUSTOMER_FORMATS=['PDF','JPG'];
  const INTERNAL_EXTENSIONS=['svg'];
  function filesOf(p){return p&&p.file?[p.file]:(p&&Array.isArray(p.files)?p.files:[])}
  function normalize(p){return Object.assign({},p,{files:filesOf(p),customerFormats:p.customerFormats||CUSTOMER_FORMATS})}
  async function loadCatalog(base='../'){
    const r=await fetch(base+'products.json',{cache:'no-store'});
    if(!r.ok) throw new Error('No se pudo cargar el catálogo ('+r.status+')');
    const j=await r.json();
    return {meta:j,products:(j.products||[]).map(normalize)};
  }
  function skuAudit(products){
    const map={}; products.forEach(p=>{if(p.sku)map[p.sku]=(map[p.sku]||0)+1});
    return Object.keys(map).filter(k=>map[k]>1);
  }
  function productAudit(p){
    const issues=[];
    if(!p.sku)issues.push('Falta SKU');
    if(!p.name)issues.push('Falta nombre');
    if(p.status==='available'&&!filesOf(p).length)issues.push('Disponible sin master');
    if((p.customerFormats||[]).some(x=>!CUSTOMER_FORMATS.includes(String(x).toUpperCase())))issues.push('Formato de cliente no permitido');
    if(p.category==='mapa'&&!p.description?.toLowerCase().includes('artíst')&&!p.description?.toLowerCase().includes('cartograf'))issues.push('Mapa sin alcance editorial claro');
    if(filesOf(p).some(f=>INTERNAL_EXTENSIONS.includes((f.split('.').pop()||'').toLowerCase())))issues.push('Fuente interna SVG: no entregar al cliente');
    return issues;
  }
  function audit(products){
    const duplicates=skuAudit(products), rows=products.map(p=>({sku:p.sku,name:p.name,status:p.status,issues:productAudit(p)}));
    return {duplicates,rows,errors:rows.filter(r=>r.issues.length)};
  }
  function find(products,sku){return products.find(p=>p.sku===sku)||null}
  function deliveryAllowed(p){return !!p&&p.status==='available'&&filesOf(p).length>0&&productAudit(p).filter(x=>x!=='Fuente interna SVG: no entregar al cliente').length===0}
  function lifecycle(p){if(!p)return 'UNKNOWN';if(p.status==='available')return 'AVAILABLE';if(p.status==='lab')return 'LAB';if(p.status==='soon')return 'SOON';return String(p.status||'UNKNOWN').toUpperCase()}
  global.OCARINA_REGISTRY={STATUS,CUSTOMER_FORMATS,loadCatalog,filesOf,skuAudit,productAudit,audit,find,deliveryAllowed,lifecycle};
})(window);
