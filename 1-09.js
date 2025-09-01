const botonGuardar = document.getElementById('guardarBtn');

//2 añadir un escuchador de eventos al boton

botonGuardar.addEventListener('click', function() {
    //3. obtener el elemento input

    const inputNombre = document.getElementById('nombre');

    //4. Obtener el valor de input

    const valorInput = inputNombre.value;

    //5. guardar el valor en Localstore

    localStorage.setItem('nombreUsuario', valorInput); // 'NombreUsuario es la clave'

    alert ('Nombre guardado en local Storage');

    console.log(localStorage.getItem('nombreUsuario'))

});
