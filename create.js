//SCOPE alcance que tiene una variable
let registro;

btn.addEventListener('click',()=>{
    
    registro = document.querySelector('.registro');
    registro.classList.toggle('remove');

    registro.addEventListener('submit',event=>{

    event.preventDefault();

    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let edad = document.getElementById('edad').value;
    let genero = document.querySelector('#genero').value; 
    
    empleados.push({
     nombre,apellido,edad,genero   
    });
    console.log(empleados);
})
});



