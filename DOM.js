let boton = document.querySelector('#botonImagen')
boton.onclick = function()
{
    alert('Comprar')
    console.log('Comprar')
    botonImagen.style.backgroundColor = 'dark'
    botonImagen.style.fontSize = '50px'
    botonImagen.style.fontFamily = 'serif'
}


let titulo = document.querySelector('#empanada')
titulo.innerText = 'Hola Alumnos'


let parrafo = document.querySelector("#parrafo")
parrafo.style.color = "blue";
parrafo.style.fontFamily = "serif";


botonImagen = document.querySelector('#botonImagen')
botonImagen.style.color = 'red'


let cambiarImagen = document.querySelector('#imagen')
cambiarImagen.src = 'albahaca.jfif'


let imagen = document.querySelector('img')

let edadUsuario = Number(prompt('Ingresa tu edad'))
if(edadUsuario >= 18){
    console.log('Podes tomar')
    alert('Podes tomar')
}else{
    console.log('Sos muy pequeño/a, no podes tomar')
    alert('Sos muy pequeño/a, no podes tomar')
}

/*ej*/
if(edadUsuario >= 18){
    TextDecoder.textContent = 'emoji contento'
}else{
    texto.textContent = 'emoji triste'
}

/*Pasos para el examen
1)Creamos el archivo html y css
2)Incluimos el archivo js en el html fuera del body
3)Colocar identificadores y clases a los elementos html
4)a)id llamado con el # (#identificador)
  b)clases llamadas con el punto (.nombre de la clase)
  c)elementos en html llamados con su nombre de elemento comun (elemento)
5)Verificar q las variables utilizadas esten creadas con la palabra reservada de 'let'
6)Verificar q los elementos esten bien escritos
7)Leer la teoría
*/

/*function PALABRAx()
if{
    condicion
}else{
    alert
    return
}*/