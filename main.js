  let empleados = [
        {
            nombre:'randy',
            apellido:'graterol',
            edad:25,
            genero:'M'
        },
        {
            nombre:'Margaret',
            apellido:'marquez',
            edad:22,
            genero:'F'
        },
        {
            nombre:'jose',
            apellido:'alvarado',
            edad:34,
            genero:'M'
        },
        {
            nombre:'Albert',
            apellido:'machado',
            edad:25,
            genero:'M'
        }];
        
        //scope
        let tr,td1,td2,td3,td4;
        //identificando el contenedor
        const tablebody = document.getElementById('tablebody');
        
        empleados.forEach(empleado=>{

            td1 = document.createElement('TD');
            td2 = document.createElement('TD');
            td3 = document.createElement('TD');
            td4 = document.createElement('TD');

            tr = document.createElement('TR');

            td1.textContent=empleado.nombre;
            td2.textContent=empleado.apellido;
            td3.textContent=empleado.edad;
            td4.textContent=empleado.genero;

            td1.classList.add('centrado');
            td2.classList.add('centrado');
            td3.classList.add('centrado');
            td4.classList.add('centrado');
            
            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);

            tablebody.append(tr);
        });