const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// Configura las credenciales de OAuth2 para acceder a tu cuenta de Gmail
const credentials = {
  clientId: 'TU_CLIENT_ID',
  clientSecret: 'TU_CLIENT_SECRET',
  refreshToken: 'TU_REFRESH_TOKEN',
};

module.exports = async (req, res) => {
  const { name, email, message } = req.body;

  // Crea el objeto OAuth2 utilizando las credenciales
  const oAuth2Client = new google.auth.OAuth2(
    credentials.clientId,
    credentials.clientSecret
  );
  oAuth2Client.setCredentials({ refresh_token: credentials.refreshToken });

  try {
    // Genera el acceso al token de Gmail
    const accessToken = await oAuth2Client.getAccessToken();

    // Configura el transporte de correo electrónico utilizando Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: email,
        clientId: credentials.clientId,
        clientSecret: credentials.clientSecret,
        refreshToken: credentials.refreshToken,
        accessToken: accessToken,
      },
    });

    // Configura los detalles del correo electrónico
    const mailOptions = {
      from: email,
      to: 'megliafrancisco@gmail.com',
      subject: 'Nuevo mensaje del formulario',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    // Envía el correo electrónico
    await transporter.sendMail(mailOptions);

    res.status(200).send('El mensaje ha sido enviado correctamente.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Hubo un error al enviar el mensaje.');
  }
};