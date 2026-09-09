/* Ocarina Factory Analytics 1.0 — browser/local only. */
(function(global){
 const KEY='ocarina_lab_orders_30';
 function orders(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return[]}}
 function summary(products){const os=orders();const by=(s)=>os.filter(o=>o.status===s).length;return {products:products.length,available:products.filter(p=>p.status==='available').length,lab:products.filter(p=>p.status==='lab').length,soon:products.filter(p=>p.status==='soon').length,orders:os.length,active:os.filter(o=>!['done','cancelled'].includes(o.status)).length,qa:by('qa'),ready:by('ready'),delivered:by('done'),cancelled:by('cancelled'),pendingPayment:os.filter(o=>['pending','partial'].includes(o.payment)).length}}
 global.OCARINA_ANALYTICS={orders,summary};
})(window);
