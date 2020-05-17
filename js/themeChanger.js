let trans = () =>{
    document.documentElement.classList.add('transition');
    window.setTimeout(()=>{
        document.documentElement.classList.remove('transition')
    }, 1000)
}
var checkbox = document.getElementById('switch1');
if(localStorage.getItem("darkTheme")=='true'){
    trans();
    checkbox.checked=true;
    document.documentElement.setAttribute('data-theme', 'dark');
}
else{
    document.documentElement.setAttribute('data-theme', 'light');
}
checkbox.addEventListener('click', ()=>{
    if(checkbox.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem("darkTheme", true);
    }
    else{
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem("darkTheme", null);
    }
})
