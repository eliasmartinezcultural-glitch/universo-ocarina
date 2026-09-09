/* Ocarina Product Lifecycle 2.0 — controlled publication gates */
(function(global){
  const ORDER=['idea','lab','qa','available','archived'];
  const LABELS={idea:'IDEA',lab:'LAB',qa:'QA',available:'AVAILABLE',archived:'ARCHIVED'};
  const MODES=['faithful','faithful_photo','faithful_illustration','faithful_pixel'];
  const CUSTOMER_FORMATS=['PDF','JPG'];
  function files(p){return p&&p.file?[p.file]:(p&&Array.isArray(p.files)?p.files:[])}
  function normalizeStatus(s){return String(s||'idea').toLowerCase()}
  function verifiedReference(p){return !!(p&&(p.referenceStatus==='verified'||p.referenceVerified===true))}
  function gate(p){
    const issues=[]; const fs=files(p);
    if(!p)return ['Producto inexistente'];
    if(!p.sku)issues.push('SKU obligatorio');
    if(!p.name)issues.push('Nombre obligatorio');
    if(!p.category)issues.push('Familia obligatoria');
    if(normalizeStatus(p.status)==='available'&&!fs.length)issues.push('AVAILABLE requiere fuente maestra');
    if((p.customerFormats||CUSTOMER_FORMATS).some(f=>!CUSTOMER_FORMATS.includes(String(f).toUpperCase())))issues.push('Formato de cliente no permitido');
    if(p.representationMode&&!MODES.includes(p.representationMode))issues.push('Modo de representación no permitido');
    if(p.sourceRequired===true&&!verifiedReference(p))issues.push('Referencia real no verificada: producto no publicable');
    if(p.category==='mapa'&&p.sourceRequired===true&&!verifiedReference(p))issues.push('Mapa bloqueado: requiere cartografía/referencia verificada');
    if(p.category==='mapa'&&!/(artíst|cartograf)/i.test(p.description||''))issues.push('Mapa: declarar alcance artístico/cartográfico');
    if(p.personalizable===true&&!Array.isArray(p.personalizationOptions))issues.push('Personalización declarada sin opciones definidas');
    if(p.factoryAudience&&p.factoryAudience!=='OCARINA_TEAM_ONLY')issues.push('La fábrica es de uso exclusivo del equipo Ocarina');
    if(p.customerAccess&&p.customerAccess!=='FINISHED_PRODUCT_ONLY')issues.push('El cliente solo debe recibir el producto terminado');
    return [...new Set(issues)];
  }
  function canAdvance(p,target){
    const t=normalizeStatus(target),current=normalizeStatus(p&&p.status);
    if(!ORDER.includes(t))return {ok:false,issues:['Estado desconocido']};
    if(current==='archived'&&t!=='archived')return {ok:false,issues:['ARCHIVED es terminal']};
    const issues=gate(p);
    if(t==='available'&&issues.length)return {ok:false,issues};
    return {ok:true,issues:[]};
  }
  global.OCARINA_LIFECYCLE={ORDER,LABELS,files,verifiedReference,gate,canAdvance};
})(window);
