function saludo()
{
    let nombre = prompt('Ingresa tu nombre por favor.')
    return 'Bienvenido ' + nombre
}
alert(saludo())

function compra()
{
    let docena = prompt('¿Cuántas docenas desea comprar?')
    return 'Tienes que pagar' + ' ' + docena * 3000
}
alert(compra())