// function search() {
//     let filter = document.getElementsById('find').value.toUpperCase();

//     let item = document.querySelectorAll ('.product');

//     let l = document.getElementsByTagName ('h3');

//     for ( var i = 0;i<=l.length; i++) {
//         let a=item [i] .getElementsByTagName (h3)[0];

//         let value=a.innerHTML || a.innerHTML || a.textContent;

//         if (value.toUpperCase().indexOf(filter) > -1) {
//             item[i].style.display= "";

//         }
//         else 
//         {

//             item[i].style.display="none";            
//         }
//     }

// }



//Buscador de Conentenido//

//Declaramos variables

bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

// Funcion para ejecutar el buscador

document.getElementById("icon-search").addEventListener("click")

//Creando filtrado de busqueda


document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);


function buscador_interno() {

    filter = inputSearch.value.toUpperCase();
    li = box_search.getElementByTagName("li");

    //Recorriendo elementos a filtrar mediante los "li"

    for (i = 0; i < li.lenght; i++) {

        a = li[i].getElementByTagName("a")[0];
        textValue = a.textContent || a.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1){

            li[i].style.display = "";

        } else {
        li[i].style.display = "none";

    }

  }

    }



// Funcion comparar si es verdadero o falso. Devuelve true o false. 

let compare = (a, b) => { return a > b }
console.log(compare(10, 16));

//

// function ejecuta (parametro, numero){
//     parametro(numero)
    
// }
// ejecuta(console.log, "catv");

//Metodo repetidor para ARRAYSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS

const fechaHoy = new Date("2023-03")
console.log(fechaHoy);