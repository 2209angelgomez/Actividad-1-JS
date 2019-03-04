console.log('1');
(function(){
    'use strict'
    document.addEventListener('DOMContentLoaded', function(){
        console.log('2');
    })
})();
console.log('3');

document.getElementById('barra');
var barra=document.getElementById('barra');
console.log(barra);
console.log(barra.hasAttribute('class'));
console.log(barra.getAttribute('class'));

barra.setAttribute('class', 'barra2');
console.log(barra);

var navegacionPrincipal =
document.querySelector('.navegacionPrincipal');
navegacionPrincipal.style.display='none';

var contenedor =
document.getElementsByClassName('contenedor');
console.log(contenedor);
console.log(contenedor[2]);

var contenedor =
document.getElementsByClassName
('contenidoPrincipal');
console.log(contenedor[0]);

contenedor[2].style.display='none';

var enlaces = document.getElementsByTagName
('a');
console.log(enlaces);
for (const iterator of enlaces) {
    iterator.setAttribute('target', '-blank');
}

var enlacesSidebar = document.getElementById
('sidebar').getElementsByTagName('a');
console.log(enlacesSidebar);

var enlacesSidebar = document.getElementById
('sidebar').getElementsByTagNameNS('a');
console.log(enlacesSidebar);
for (const iterator of enlacesSidebar) {
    iterator.setAttribute('href', 'http://www.google.com.co');
}

var enlacesSidebar = document.querySelectorAll('#sidebar .otrasEntradas ul li a');
console.log(enlacesSidebar);
for (const iterator of enlacesSidebar) {
    iterator.setAttribute('href', 'http://www.google.com.co');
}

var encDos = document.querySelectorAll('h2');
console.log(encDos[1].ennerText);
console.log(encDos[1].innerHTML);

var masUno = document.querySelectorAll('h2, footer p');
console.log(masUno);
console.log(masUno);

var enlaces = document.querySelectorAll('a');
console.log(enlaces);

var enlaces = document.querySelectorAll('a');
console.log(enlaces);
enlaces.forEach(element => {
    console.log(element.innerText);
});

var enlaces = document.querySelectorAll('a');
console.log(enlaces);
enlaces.forEach(element => {
    console.log(element.innerText);
});

var enlacesMenu = document.querySelectorAll('#nav a')
console.log(enlacesMenu[1].nodeType);
console.log(enlacesMenu[1].nodeName);
console.log(enlacesMenu[1].attributes);
console.log(enlacesMenu[1].attributes[0]);
console.log(enlacesMenu[3].firstChild);
console.log(enlacesMenu[3].firstChild.nodeValue);
enlacesMenu[3].firstChild.nodeValue = "Contactenos";

var sidebar = document.querySelector('aside');
var postVisitados = document.createElement('h2');
var listPost = document.createElement ('ul');
var textVisitados = document.createTextNode('Post más visitados');
postVisitados.appendChild(textVisitados);
sidebar.insertBefore(postVisitados,sidebar.childNodes[0]);

var contenido = document.querySelectorAll('main h2');
console.log(contenido);
contenido.forEach((element,key) => {
    var nuevoElemento = document.createElement('li');
    var nuevoTexto = document.createTextNode(contenido[key]
        .firstChild.nodeValue);
        console.log(nuevoTexto);
        nuevoElemento.appendChild(nuevoTexto);
        listPost.appendChild(nuevoElemento);
});
sidebar.incertBefore(listPost,sidebar.childNodes[1]);

var primerArticulo = document.querySelector('main article');
console.log(primerArticulo);

var primerArticulo = document.querySelector('main article');
console.log(primerArticulo);
var parent = primerArticulo.parentNode;
console.log(parent);
parent.removeChild(primerArticulo);