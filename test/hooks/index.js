var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "./chatAppServiceAccount.json",
    databaseURL: "https://chat-app-65385.firebaseio.com" 
});

var ref = firebase.database().ref();
var messagesRef = ref.child('messages');

messagesRef.on('child_added', function(snap){
    var compare = snap.child("text").val();
    if (compare == 'hello'){
        messagesRef.push({
            text: 'hello back from server'
        })
    }
});
