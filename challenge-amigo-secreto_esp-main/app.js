// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo()
{
    let amigo = document.getElementById('amigo').value;
    
    if (amigo === '')
    {
        alert('Por favor, inserte un nombre.');
    }
    else
    {
       amigos.push(amigo);
       actualizarLista();
    }
    document.getElementById('amigo').value = '';

}

function actualizarLista()
{
    let htmlLista = '';
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((elemento, posicion) => 
        {

            htmlLista += `<li>${elemento}</li>`;

        }); 
        listaAmigos.innerHTML = htmlLista;
        console.log(htmlLista)
    
}
function sortearAmigo()
{
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');





    if (amigos.length > 0){
        resultado.innerHTML = `<li>${amigos[numeroAleatorio]} </li>`;}
    else{
        alert("Lista vacía, porfavor ingresar mínimo 1")
    }

}

