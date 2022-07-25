var preScrollps=window.pageYOffset;
window.onscroll=function(){
var currentScrollpos = window.pageYOffset;
    if (preScrollps > currentScrollpos) {
        document.getElementById('pop').style.top = "0";
    }else {
        document.getElementById('pop').style.top = "-50"
    }
   
}
preScrollps = currentScrollpos;