var fRegistro = document.getElementById('formRegistro')

fRegistro.addEventListener('submit',function(e){
    e.preventDefault()
    
    var datos = new FormData(fRegistro)
    console.log(datos.get('Nombre'))
    console.log(datos.get('Correo'))
    console.log(datos.get('Telefono'))
    console.log(datos.get('Regimen Fiscal'))
    console.log(datos.get('Servicio de interes'))

    var mensaje = document.getElementById("mensaje")

    mensaje.innerHTML = `
        <br>
        <center><h4>Mensaje enviado, pronto nos contactaremos contigo</h4></center>
        <p>Esto esta solo para que se vea que si se registran los datos :) </p>
        <p>Nombre: ${datos.get('Nombre')}<br>
            Correo: ${datos.get('Correo')}<br>
            Telefono: ${datos.get('Telefono')}<br>
            Regimen Fiscal: ${datos.get('Regimen Fiscal')}<br>
            Servicio de interes: ${datos.get('Servicio de interes')}</p>
    `
})