importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDIzeINHRm-0jAfbsB0-7flr5sOasaEEy4",
  authDomain: "vmdatting.firebaseapp.com",
  projectId: "vmdatting",
  messagingSenderId: "876437607489",
  appId: "1:876437607489:web:46ad641659f621618562c0"
});

const messaging = firebase.messaging();
