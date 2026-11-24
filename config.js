/* Nubeltia · cuentas en la nube (Firebase)

   Mientras esto sea null, cada cuenta se guarda solo en el teléfono o computadora donde se creó.
   Para que las cuentas funcionen en cualquier dispositivo (y para entrar con Google y recuperar la
   contraseña por correo), pega aquí la configuración de tu app web de Firebase:
   Consola de Firebase → Configuración del proyecto → Tus apps → App web → Configuración del SDK → Config.

   Esta configuración es pública por diseño (no es una contraseña); lo que protege los datos son las
   reglas de Firestore (archivo firestore.rules de este repositorio).

   Ejemplo:
   window.NB_FIREBASE = {
     apiKey: "AIza...",
     authDomain: "tu-proyecto.firebaseapp.com",
     projectId: "tu-proyecto",
     appId: "1:1234567890:web:abc123"
   };
*/
window.NB_FIREBASE = null;
