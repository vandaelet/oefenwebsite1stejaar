/* =====================================================================
   INSTELLINGEN VAN DE OEFENSITE
   Plak hieronder de gegevens van je Firebase-project
   (Firebase-console > Projectinstellingen > Je apps > SDK-configuratie).

   Zolang hier "PLAK-HIER" staat, werkt de site in DEMOMODUS:
   er is dan geen echte login en niets wordt op de server bewaard.
   ===================================================================== */
window.OEFENSITE_CONFIG = {
  firebase: {
    apiKey: "AIzaSyD2oxh85WDLumQMwcDQjkcR8UvYO2FIl6M",
  authDomain: "wiskunde-oefensite-1ste-jaar.firebaseapp.com",
  projectId: "wiskunde-oefensite-1ste-jaar",
  storageBucket: "wiskunde-oefensite-1ste-jaar.firebasestorage.app",
  messagingSenderId: "98735435302",
  appId: "1:98735435302:web:7ed31a194603b83cd800e7"
  },

  // Alleen Google-accounts van dit domein mogen aanmelden.
  domein: "svsl.be",

  // Niveaugroepen waaruit een leerling kiest bij het aanmelden.
  groepen: ["NG1", "NG2a", "NG2b", "NG2c", "NG2d", "NG2e", "NG3"],

  titel: "Oefensite wiskunde"
};
