/* Ocarina Product Lifecycle 1.0 */
(function(global){
  const ORDER=['idea','lab','qa','available','archived'];
  const LABELS={idea:'IDEA',lab:'LAB',qa:'QA',available:'AVAILABLE',archived:'ARCHIVED'};
  function files(p){return p&&p.file?[p.file]:(p&&Array.isArray(p.files)?p.files:[])}
  function normalizeStatus(s){return String(s||'idea').toLowerCase()}
  function gate(p){
    const issues=[]; const fs=files(p);
    if(!p) return ['Producto inexistente'];
    if(!p.sku)issues.push('SKU obligatorio');
    if(!p.name)issues.push('Nombre obligatorio');
    if(!p.category)issues.push('Familia obligatoria');
    if(normalizeStatus(p.status)==='available'&&!fs.length)issues.push('AVAILABLE requiere fuente maestra');
    if((p.customerFormats||['PDF','JPG']).some(f=>!['PDF','JPG'].includes(String(f).toUpperCase())))issues.push('Formato de cliente no permitido');
    if(p.category==='mapa'&&!/(artíst|cartograf)/i.test(p.description||''))issues.push('Mapa: declarar alcance artístico/cartográfico');
    return issues;
  }
  function canAdvance(p,target){
    const t=normalizeStatus(target), current=normalizeStatus(p&&p.status);
    if(!ORDER.includes(t))return {ok:false,issues:['Estado desconocido']};
    if(current==='archived'&&t!=='archived')return {ok:false,issues:['ARCHIVED es terminal']};
    const issues=gate(p);
    if(t==='available'&&issues.length)return {ok:false,issues};
    return {ok:true,issues:[]};
  }
  global.OCARINA_LIFECYCLE={ORDER,LABELS,files,gate,canAdvance};
})(window);
