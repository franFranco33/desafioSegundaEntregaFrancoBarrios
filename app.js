class Cotizacion {
    constructor(id, nombre, precio, supply) {    
        this.id = id
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.supply = supply;
    }
}
const criptomoneda = []
criptomoneda.push(new Cotizacion('1', 'Bitcoin', '64000', '19000000'));
criptomoneda.push(new Cotizacion('2', 'Moc', '0.13', '1400000000'));
criptomoneda.push(new Cotizacion('3', 'Ether', '4000', '100000000'));
criptomoneda.push(new Cotizacion('4', 'Sol', '180', '400000000'));
criptomoneda.push(new Cotizacion('5', 'Sov', '25', '4200000'));
//console.log(Cotizacion)
//console.log(criptomoneda)

let seleccion = prompt("¡Too The Moon, su cotizador amigo! Conozca el precio en pesos argentinos de las siguientes criptomonedas: seleccione el número de la criptomeneda... \n 1 - Bitcoin \n 2 - Moc \n 3 - Ether \n 4 - Sol \n 5 - Sov");
for (let i = 0; i < criptomoneda.length; i++) {
    const cripto = criptomoneda [i];
    if (seleccion == cripto.id){
        let precio = cripto.precio * 200
        alert("$" + precio)
    } 
}

const enJSON = JSON.stringify(criptomoneda);
localStorage.setItem("criptomoneda", enJSON);

console.log(localStorage)
console.log(enJSON)
console.log(typeof criptomoneda)
console.log(typeof enJSON)


//console.dir(document)
//console.dir(document.head)
//console.dir(document.body)

//------------------------------------
//crear botón desde Js
const btnMensaje = document.createElement("button");
//asignar Id
btnMensaje.id = 'btnMensaje';
//asignar interior del botón
btnMensaje.innerHTML = 'Mensaje';
//escuchar el evento click
btnMensaje.addEventListener('click', function () {
const h4 = document.createElement('h4');
h4.innerHTML = 'Bitcoin es reserva de valor';
document.body.appendChild(h4);
})
//agregar el botón al DOM
document.body.appendChild(btnMensaje);

btnMensaje.onclick = () =>{console.log("El usuario hizo click")}















