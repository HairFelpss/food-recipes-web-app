import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import 'firebase/storage';

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: 'AIzaSyDaFlTQ8pZrhXDzYKiadS0wR2nQ_MURBeU',
  authDomain: 'products-68d1f.firebaseapp.com',
  databaseURL: 'https://products-68d1f.firebaseio.com',
  projectId: 'products-68d1f',
  storageBucket: 'products-68d1f.appspot.com',
  messagingSenderId: '347039233703',
  appId: '1:347039233703:web:37a60a398af14591',
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);
const storage = firebase.storage();

export { firebase, storage };
