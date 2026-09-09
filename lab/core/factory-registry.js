/* Ocarina Factory Registry 2.0 — fidelity + delivery gates
   Browser-only integration layer. No buyer data is stored here. */
(function(global){
  const STATUS={idea:'IDEA',lab:'LAB',qa:'QA',available:'AVAILABLE',archived:'ARCHIVED',soon:'SOON'};
  const CUSTOMER_FORMATS=['PDF','JPG'];
  const INTERNAL_EXTENSIONS=['svg'];
  const REPRESENTATION_MODES=['faithful','faithful_photo','faithful_illustration','faithful_pixel'];
  const PERSONALIZATION_FIELDS=['nombre','apellido','dedicatoria','fecha','frase','lugar','fotografia_propia_o_autorizada','variante','orientacion','tamano','numero_de_edicion'];
  const INTERNAL_AUDIENCE='OCARINA_TEAM_ONLY';
  const CUSTOMER_ACCESS='FINISHED_PRODUCT_ONLY';
  function filesOf(p){return p&&p.file?[p.file]:(p&&Array.isArray(p.files)?p.files:[])}
  function normalize(p){return Object.assign({},p,{files:filesOf(p),customerFormats:p.customerFormats||CUSTOMER_FORMATS})}
  async function loadCatalog(base='../'){
    const r=await fetch(base+'products.json',{cache:'no-store'});
    if(!r.ok) throw new Error('No se pudo cargar el catálogo ('+r.status+')');
    const j=await r.json();
    return {meta:j,products:(j.products||[]).map(normalize)};
  }
  function skuAudit(products){const map={};products.forEach(p=>{if(p.sku)map[p.sku]=(map[p.sku]||0)+1});return Object.keys(map).filter(k=>map[k]>1)}
  function hasVerifiedReference(p){
    return p && p.sourceRequired===true && (
      p.referenceStatus==='verified' ||
      p.referenceVerified===true ||
      (Array.isArray(p.visualReferenceIds)&&p.visualReferenceIds.length>0)
    );
  }
  function personalizationAudit(p){
    const issues=[];
    if(p.personalizable===true){
      const opts=Array.isArray(p.personalizationOptions)?p.personalizationOptions:[];
      opts.forEach(x=>{if(!PERSONALIZATION_FIELDS.includes(x))issues.push('Campo de personalización no permitido: '+x)});
      if(p.personalization&&p.personalization.enabled===false)issues.push('Personalizable marcado pero motor deshabilitado');
    }
    return issues;
  }
  function productAudit(p){
    const issues=[]; const fs=filesOf(p);
    if(!p.sku)issues.push('Falta SKU');
    if(!p.name)issues.push('Falta nombre');
    if(p.status==='available'&&!fs.length)issues.push('Disponible sin master');
    if((p.customerFormats||CUSTOMER_FORMATS).some(x=>!CUSTOMER_FORMATS.includes(String(x).toUpperCase())))issues.push('Formato de cliente no permitido');
    if(p.representationMode&&!REPRESENTATION_MODES.includes(p.representationMode))issues.push('Modo de representación no permitido');
    if(p.sourceRequired===true&&!hasVerifiedReference(p))issues.push('Falta referencia visual/territorial verificada');
    if(p.category==='mapa'&&p.sourceRequired===true&&p.referenceStatus!=='verified'&&!p.referenceVerified)issues.push('Mapa bloqueado: cartografía/referencia debe estar verificada');
    if(p.category==='mapa'&&!/(artíst|cartograf)/i.test(p.description||''))issues.push('Mapa sin alcance editorial claro');
    if(filesOf(p).some(f=>INTERNAL_EXTENSIONS.includes((f.split('.').pop()||'').toLowerCase())))issues.push('Fuente interna SVG: no entregar al cliente');
    if(p.customerAccess&&p.customerAccess!=='FINISHED_PRODUCT_ONLY')issues.push('Acceso de cliente inválido');
    if(p.factoryAudience&&p.factoryAudience!==INTERNAL_AUDIENCE)issues.push('Audiencia de fábrica inválida');
    issues.push(...personalizationAudit(p));
    return issues;
  }
  function audit(products){const duplicates=skuAudit(products),rows=products.map(p=>({sku:p.sku,name:p.name,status:p.status,issues:productAudit(p)}));return {duplicates,rows,errors:rows.filter(r=>r.issues.length)}}
  function find(products,sku){return products.find(p=>p.sku===sku)||null}
  function deliveryAllowed(p){
    if(!p||p.status!=='available'||!filesOf(p).length)return false;
    return productAudit(p).filter(x=>x==='Fuente interna SVG: no entregar al cliente').length===0 &&
      productAudit(p).filter(x=>x!=='Fuente interna SVG: no entregar al cliente').length===0;
  }
  function lifecycle(p){if(!p)return 'UNKNOWN';if(p.status==='available')return 'AVAILABLE';if(p.status==='lab')return 'LAB';if(p.status==='soon')return 'SOON';return String(p.status||'UNKNOWN').toUpperCase()}
  global.OCARINA_REGISTRY={STATUS,CUSTOMER_FORMATS,REPRESENTATION_MODES,PERSONALIZATION_FIELDS,INTERNAL_AUDIENCE,CUSTOMER_ACCESS,loadCatalog,filesOf,skuAudit,hasVerifiedReference,personalizationAudit,productAudit,audit,find,deliveryAllowed,lifecycle};
})(window);
