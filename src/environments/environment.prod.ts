export const environment = {
  production: true,

  firebaseConfig: {
    apiKey: "AIzaSyD6auG2sTGF88QVwgjNqNQzWXhCLLqJ5zU",
    authDomain: "classeiw.firebaseapp.com",
    projectId: "classeiw",
    storageBucket: "classeiw.appspot.com",
    messagingSenderId: "1093970021840",
    appId: "1:1093970021840:web:66ca9620f407e968e6bdd5"
  },

  firebaseMessage:{
    'auth/user-not-found': `Identifiants incorrect`,
    'auth/invalid-email': `Le champ email n'est pas correctement formatté`,
    'auth/wrong-password': `Mot de passe incorrect`,
    'auth/weak-password': `Le mot de passe doit contenir au moins 6 caractères`,
    'auth/email-already-in-use': `Cette adresse mail est déjà utilisé !`
  }
};
