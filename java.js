const container = document.querySelector(".container")
console.log(container);
for(let i=0; i < 256; i++){
    const cuadrado=document.createElement("div")
     container.appendChild(cuadrado)
cuadrado.addEventListener("mouseenter", () =>{
    cuadrado.style.backgroundColor ="lightblue";
    div.addEventListener("mouseleave", () => {
  div.style.backgroundColor = ""; // Esto quita el color de fondo
    })
    
})
    };
