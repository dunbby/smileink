let world = document.getElementById("world");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    world.style.top = value * 1 + 'px';
});