let world = document.getElementById("header");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    world.style.top = value * 1 + 'px';
});
