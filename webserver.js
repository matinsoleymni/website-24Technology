/* WEBSERVER  */
if($.URL == domin|| $.URL == domin+'#' || $.URL == domin+'index.html'){
    fetch("./assets/layouts/index.html", { method: "GET" })
    .then(res => res.text())
    .then(txt => ROOT.innerHTML = txt);

}else if ($.URL == domin+'#home' || $.URl == domin+'index.html#home'){
    fetch("/assets/layouts/work.html", { method: "GET" })
    .then(res => res.text())
    .then(txt => ROOT.innerHTML = txt);
}else {
    APP.innerHTML = '403'
}

window.addEventListener('locationchange' , ()=> {
    if($.URL == domin|| $.URL == domin+'#' || $.URL == domin+'index.html'){
        fetch("./assets/layouts/index.html", { method: "GET" })
        .then(res => res.text())
        .then(txt => ROOT.innerHTML = txt);
    
    }else if ($.URL == domin+'#home' || $.URl == domin+'index.html#home'){
        fetch("/assets/layouts/work.html", { method: "GET" })
        .then(res => res.text())
        .then(txt => ROOT.innerHTML = txt);
    }else {
        APP.innerHTML = '403'
    }
})