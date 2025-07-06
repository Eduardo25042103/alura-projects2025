let listaNombresGastos = [];
let listaValoresGastos = [];


function clickBoton()
{
    let expenseName = document.getElementById("nombreGasto").value;
    let expenseValue = document.getElementById("valorGasto").value;
    
    listaNombresGastos.push(expenseName);
    listaValoresGastos.push(expenseValue);

    actualizarListaGastos();

}


function actualizarListaGastos()
{
    const listaElementos = document.getElementById("listaDeGastos");
    const totalElementos = document.getElementById("totalGastos");
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => 
        {
            const valorGasto = Number(listaValoresGastos[posicion]);
            htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
                          <button onclick="eliminarGasto(${posicion});">Eliminar</button>             
                         </li>`;

            totalGastos += parseFloat(valorGasto);
            console.log(totalGastos);
        }); 
        listaElementos.innerHTML = htmlLista;
        totalElementos.innerHTML = totalGastos.toFixed(2);
        limpiar();
}


function limpiar()
{
    document.getElementById("nombreGasto").value = '';
    document.getElementById("valorGasto").value = '';
}


function eliminarGasto(posicion)
{
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}


