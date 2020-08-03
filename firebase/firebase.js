import firebase from 'firebase';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyB_xTryE_GI2DAqN2MMuvpvWQB1vU6Aqx0",
    authDomain: "shaunak-portfolio.firebaseapp.com",
    databaseURL: "https://shaunak-portfolio.firebaseio.com",
    projectId: "shaunak-portfolio",
    storageBucket: "shaunak-portfolio.appspot.com",
    messagingSenderId: "71254243626",
    appId: "1:71254243626:web:ca7e1454f1bc34e5098653",
    measurementId: "G-YMNRTD8TBY"
};
  
// Check that `window` is in scope for the analytics module!
if (typeof window !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
    if ('measurementId' in firebaseConfig) firebase.analytics()
}
  
export default firebase