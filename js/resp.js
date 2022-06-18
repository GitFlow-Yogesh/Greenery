burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
nlist=document.querySelector('.n-list')
rnav=document.querySelector('.rnav')


burger.addEventListener("click",()=>{
    rnav.classList.toggle('v-nav');
    nlist.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');

})