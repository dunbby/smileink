let world = document.getElementById("world");
let header = document.getElementById("header");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    world.style.top = value * 1 + 'px';
    header.style.top = value * 0.8 + 'px';
});
