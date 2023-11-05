//FUNCION QUE MUESTRA EL MUENU RESPONSIVE 
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

// FUNCION DESCUENTO 

document.addEventListener("DOMContentLoaded", function () {

  // Obtener referencias a los elementos del formulario
  const cantidadInput = document.getElementById("cantidad");
  const categoriaSelect = document.getElementById("categoria");
  const totalLabel = document.getElementById("total");

  // Agregar un evento de cambio al elemento cantidad y categoria
  cantidadInput.addEventListener("change", calcularTotal);
  categoriaSelect.addEventListener("change", calcularTotal);

  // Función para calcular el total
  function calcularTotal() {
    const cantidad = parseInt(cantidadInput.value);
    const categoria = categoriaSelect.value;
    let descuento = 0;

    // Calcular el descuento según la categoría seleccionada
    switch (categoria) {
      case "Estudiante":
        descuento = 0.8;
        break;
      case "Trainee":
        descuento = 0.5;
        break;
      case "Junior":
        descuento = 0.15;
        break;
      default:
        descuento = 0;
    }

    // Calcular el precio total
    const precioUnitario = 200;
    const precioTotal = cantidad * precioUnitario * (1 - descuento);

    // Mostrar el precio total en el elemento 
    totalLabel.textContent = `Total a Pagar : $ ${precioTotal.toFixed(2)}`;
  }


  // FUNCION DE SETEAR LOS CAMPOS

  //Obtener referencia de los elementos del formulario
  const inputSetear = document.getElementById("setear");

  // Agregar evento para resetear los campos
  inputSetear.addEventListener("click",resetear)

  // Funcion para resetear los campos del formulario
  function resetear(){
  totalLabel.textContent = `Total a Pagar : $ `; 
  }

});

