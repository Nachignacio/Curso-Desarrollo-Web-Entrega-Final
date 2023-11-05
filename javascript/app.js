//Mostrar animacion al scrollear
//Este código lo saqué de Internet, no se JavaScript

var scroll = window.requestAnimationFrame;
var elementsToShow = document.querySelectorAll('.showOnScroll');

function loop(){
    Array.prototype.forEach.call(elementsToShow,function(element){ //Esta función lo que parece hacer es agregar la clase "visible" a los elementos
        //que esten fuera del viewport y les saca la clase "visible" a los elementos que se encuentren dentro del viewport
        if (isElementInViewport(element)){
            element.classList.add('visible');
        }
        else{
            element.classLis.remove('visible');
        }
    });
    scroll(loop);
}
loop();

function isElementInViewport(element){
    var rectangle = element.getBoundingClientRect();
    var height = window.innerHeight || document.documentElement.clientHeight;
    var top = rectangle.top;
    var bottom = rectangle.bottom;

    return (top <= 0 && bottom >=0) || (bottom >= height && top <= height ) || (top >= 0 && bottom <= height);
}