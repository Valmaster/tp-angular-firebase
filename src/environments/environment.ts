// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: "AIzaSyCC3PpNMbcx-0kIG7mXnzrgQq33Ln58jYc",
    authDomain: "pwa-esgi-fa7e3.firebaseapp.com",
    projectId: "pwa-esgi-fa7e3",
    storageBucket: "pwa-esgi-fa7e3.appspot.com",
    messagingSenderId: "636354802033",
    appId: "1:636354802033:web:982ce1c1a9e8a26473c6d0",
  },

  firebaseMessage:{
    'auth/user-not-found': `Identifiants incorrect`,
    'auth/invalid-email': `Le champ email n'est pas correctement formatté`,
    'auth/wrong-password': `Mot de passe incorrect`,
    'auth/weak-password': `Le mot de passe doit contenir au moins 6 caractères`,
    'auth/email-already-in-use': `Cette adresse mail est déjà utilisé !`
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
