import { createTransport } from 'nodemailer';
import express from 'express';
import { urlencoded } from 'body-parser';

const app = express();

// Configura el middleware para analizar los datos enviados en el cuerpo del formulario
app.use(urlencoded({ extended: false }));

// Configura las rutas y el controlador para enviar el correo electrónico
app.post('/enviar-correo', (req, res) => {
  const { name, email, message } = req.body;

  // Configura el transporte de correo electrónico
  const transporter = createTransport({
    service: 'Gmail',
    auth: {
      user: 'megliafrancisco@gmail.com',
      pass: 'scorpion2004ggg'
    }
  });

  // Configura los detalles del correo electrónico
  const mailOptions = {
    from: email,
    to: 'megliafrancisco@gmail.com',
    subject: 'Nuevo mensaje del formulario',
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
  };

  // Envía el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Hubo un error al enviar el mensaje.');
    } else {
      console.log('El mensaje ha sido enviado correctamente.');
      res.send('El mensaje ha sido enviado correctamente.');
    }
  });
});

// Inicia el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});