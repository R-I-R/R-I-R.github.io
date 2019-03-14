//query selector
//query selector usa los mismos querys q css # para id o . para clase
const encabezado = document.querySelector("#encabezado");
//devuelve el primero q encuentre
console.log(encabezado);

//aplicar css
encabezado.style.background = '#300a';
encabezado.style.color = '#ffd';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los mejores cursos';

const enlaces = document.getElementsByClassName('enlace');
enlaces[3].textContent = 'Editado';
enlaces[2].style.background = '#faa5';
console.log(enlaces);

const botones = document.querySelectorAll(".info-card .button");
console.log(botones);
botones.forEach(function(boton){
    boton.style.backgroundColor = 'red';
});

console.log(document.getElementById('lista-cursos').children);//hijos
console.log(enlaces[0].parentElement);//padre

//creando elementos

const nEnlace = document.createElement('a');
nEnlace.className = 'enlace';
nEnlace.id = 'nuevoId';
nEnlace.setAttribute('href','#');
nEnlace.textContent = 'nuevo enlace';

//añadimos como hijo del elemento seleccionado
document.querySelector("#secundaria").appendChild(nEnlace);

console.log(nEnlace);

//reeemplazar elementos

const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = 'encabezado';
nuevoEncabezado.textContent = 'Los mejores cursos online';

//agregar texto lo mismo a lo q hice arriba creo
//nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos online'));

//elemento anterior (por reemplazar)
const anterior = document.querySelector('#encabezado');

//reemplazar (se debe reemplazar desde el padre)
anterior.parentElement.replaceChild(nuevoEncabezado,anterior);

console.log(nuevoEncabezado);

//borrar elementos (el elemto se borra a si mismo o a sus hijos
enlaces[8].remove();//borre el que cree mas arriba

//agregar y borrar clases
console.log(enlaces[0].className);
enlaces[0].classList.add('nuevaClase');
enlaces[0].classList.remove('nuevaClase');
console.log(enlaces[0].classList);

//agregar y borrar atributos
console.log(enlaces[0].getAttribute('href'));
enlaces[0].setAttribute('href','http://google.com');
console.log(enlaces[0]);
enlaces[1].setAttribute("inventado",25);//creo mi propio atributo
console.log(enlaces[1].hasAttribute('inventado'));
enlaces[1].removeAttribute('inventado');
console.log(enlaces[1]);

//event listener click
document.querySelector('#su')