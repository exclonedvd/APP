

// Themed confirm dialog returning a Promise<boolean>
function uiConfirm({title="Conferma", message="", confirmText="Sì", cancelText="Annulla"}={}){
  return new Promise((resolve)=>{
    const backdrop = document.createElement('div');
    backdrop.className = 'dialog-backdrop';
    const box = document.createElement('div');
    box.className = 'dialog';
    box.innerHTML = `<h3>${title}</h3><p>${message}</p>`;
    const actions = document.createElement('div');
    actions.className = 'actions';
    const btnCancel = document.createElement('button');
    btnCancel.className = 'button';
    btnCancel.textContent = cancelText;
    const btnOk = document.createElement('button');
    btnOk.className = 'button primary';
    btnOk.textContent = confirmText;
    actions.append(btnCancel, btnOk);
    box.append(actions);
    backdrop.append(box);
    document.body.append(backdrop);

    const prevFocus = document.activeElement;
    btnOk.focus();

    function close(ans){
      backdrop.remove();
      if(prevFocus && prevFocus.focus) try{ prevFocus.focus(); }catch(_){}
      resolve(ans);
    }
    btnOk.addEventListener('click', ()=>close(true));
    btnCancel.addEventListener('click', ()=>close(false));
    backdrop.addEventListener('click', (e)=>{ if(e.target===backdrop) close(false); });
    document.addEventListener('keydown', function onKey(e){
      if(!document.body.contains(backdrop)) { document.removeEventListener('keydown', onKey); return; }
      if(e.key==='Escape'){ e.preventDefault(); close(false); }
      if(e.key==='Enter'){ e.preventDefault(); close(true); }
    });
  });
}
