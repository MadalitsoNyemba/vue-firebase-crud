import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCLREfBmNeuVNJH_y7Jj_qIBZ7loObs2yU",
        authDomain: "svcpul-8cef1.firebaseapp.com",
        databaseURL: "https://svcpul-8cef1.firebaseio.com",
        projectId: "svcpul-8cef1",
        storageBucket: "svcpul-8cef1.appspot.com",
        messagingSenderId: "894552113148",
        appId: "1:894552113148:web:5c03efa3395a5529a2bc79",
        measurementId: "G-C67R95CXVC"
};

firebase.initializeApp(config);

export default firebase.database();
