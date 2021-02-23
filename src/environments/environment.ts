// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // 2. Add your credentials from step 1
  production: false,
  firebase: {
    apiKey: "AIzaSyCWk-yUgs2KZ_lCGqOO7D3o-Ys8mWuoDYQ",
    authDomain: "angular-learning-8acad.firebaseapp.com",
    projectId: "angular-learning-8acad",
    storageBucket: "angular-learning-8acad.appspot.com",
    messagingSenderId: "823839383752",
    appId: "1:823839383752:web:8215d9b58b9b16b8cd05fd",
    measurementId: "G-YX7Q3ER38K"
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


// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCWk-yUgs2KZ_lCGqOO7D3o-Ys8mWuoDYQ",
//     authDomain: "angular-learning-8acad.firebaseapp.com",
//     projectId: "angular-learning-8acad",
//     storageBucket: "angular-learning-8acad.appspot.com",
//     messagingSenderId: "823839383752",
//     appId: "1:823839383752:web:8215d9b58b9b16b8cd05fd",
//     measurementId: "G-YX7Q3ER38K"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>