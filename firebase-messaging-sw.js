// Import the Firebase scripts
importScripts( https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js );
importScripts( https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js );

// Initialize Firebase
firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
});

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log( Received background message  , payload);
  // Customize notification
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon:  /firebase-logo.png 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
