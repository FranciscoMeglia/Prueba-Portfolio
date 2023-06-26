<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["name"];
    $email = $_POST["email"];
    $mensaje = $_POST["message"];
    
    // Configura los detalles del correo electrónico
    $destinatario = "megliafrancisco@gmail.com";
    $asunto = "Nuevo mensaje del formulario";
    $cuerpoMensaje = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
    $cabeceras = "From: $email";
    
    // Envía el correo electrónico
    if (mail($destinatario, $asunto, $cuerpoMensaje, $cabeceras)) {
        echo "El mensaje ha sido enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje.";
    }
}
?>