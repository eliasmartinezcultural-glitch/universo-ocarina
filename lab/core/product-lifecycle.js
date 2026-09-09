/* Ocarina Product Lifecycle 2.1 — controlled publication gates */
(function(global){
  const ORDER=['idea','lab','qa','available','archived'];
  const LABELS={idea:'IDEA',lab:'LAB',qa:'QA',available:'AVAILABLE',archived:'ARCHIVED'};
  const MODES=['faithful','faithful_photo','faithful_illustration','faithful_pixel'];
  const CUSTOMER_FORMATS=['PDF','JPG'];
  const PERSONALIZATION_FIELDS=['nombre','apellido','familia','dedicatoria','fecha','frase','lugar','fotografia_propia_o_autorizada','variante','orientacion','tamano','numero_de_edicion'];
  function files(p){return p&&p.file?[p.file]:(p&&Array.isArray(p.files)?p.files:[])}
  function normalizeStatus(s){return String(s||'idea').toLowerCase()}
  function referenceGate(p){
    const issues=[];
    if(p.sourceRequired===true){
      if(!MODES.includes(String(p.representationMode||'')))issues.push('Producto con fuente obligatoria sin modo fiel');
      if(p.referenceStatus!=='verified')issues.push('Referencia real no verificada');
      if(!Array.isArray(p.visualReferenceIds)||!p.visualReferenceIds.length)issues.push('Faltan referencias visuales verificadas');
      if(!p.referenceRequirement)issues.push('Falta requisito de referencia');
      if(p.category==='mapa'&&p.referenceType!=='cartographic_verified')issues.push('Mapa requiere referencia cartográfica verificada');
    }
    return issues;
  }
  function personalizationGate(p){
    if(p.personalizable!==true)return [];
    const opts=Array.isArray(p.personalizationOptions)?p.personalizationOptions:[];
    const issues=[];
    if(!opts.length)issues.push('Producto personalizable sin campos definidos');
    opts.forEach(x=>{if(!PERSONALIZATION_FIELDS.includes(x))issues.push('Campo de personalización no permitido: '+x)});
    return issues;
  }
  function gate(p){
    const issues=[]; const fs=files(p);
    if(!p)return ['Producto inexistente'];
    if(!p.sku)issues.push('SKU obligatorio');
    if(!p.name)issues.push('Nombre obligatorio');
    if(!p.category)issues.push('Familia obligatoria');
    if(normalizeStatus(p.status)==='available'&&!fs.length)issues.push('AVAILABLE requiere fuente maestra');
    if((p.customerFormats||CUSTOMER_FORMATS).some(f=>!CUSTOMER_FORMATS.includes(String(f).toUpperCase())))issues.push('Formato de cliente no permitido');
    if(p.representationMode&&!MODES.includes(p.representationMode))issues.push('Modo de representación no permitido');
    if(p.category==='mapa'&&!/(artíst|cartograf)/i.test(p.description||''))issues.push('Mapa: declarar alcance artístico/cartográfico');
    if(p.factoryAudience&&p.factoryAudience!=='OCARINA_TEAM_ONLY')issues.push('La fábrica es de uso exclusivo del equipo Ocarina');
    if(p.customerAccess&&p.customerAccess!=='FINISHED_PRODUCT_ONLY')issues.push('El cliente solo debe recibir el producto terminado');
    issues.push(...referenceGate(p),...personalizationGate(p));
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
  global.OCARINA_LIFECYCLE={ORDER,LABELS,MODES,CUSTOMER_FORMATS,PERSONALIZATION_FIELDS,files,referenceGate,personalizationGate,gate,canAdvance};
})(window);
