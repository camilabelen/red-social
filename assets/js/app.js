  /*$(".pageini").hide() esto ira cuando el registro este funcional*/

$(".inicio").hide() //esto esta mientras termino el registro

$(document).ready(function(){
  $(".login").show()

$(".send").click(function(){
  $('#signupmodal').modal('toggle')
})
$(".loginbtn").click(function(){
  $('#loginmodal').modal('toggle')
})
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAd7xNUJssjA3v-i8zDfhpY6Lg3R5MGQy8",
    authDomain: "fine-climber-188103.firebaseapp.com",
    databaseURL: "https://fine-climber-188103.firebaseio.com",
    projectId: "fine-climber-188103",
    storageBucket: "fine-climber-188103.appspot.com",
    messagingSenderId: "693407936885"
  };
  firebase.initializeApp(config);


$(".send").click(function(){
var email = document.getElementById("email").value;
var contrasena = document.getElementById("contrasena").value;

firebase.auth().createUserWithEmailAndPassword(email, contrasena)
.then(function(){
  verificar()
})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});
});


$(".loginbtn").click(function(){
  var email2 = document.getElementById("email2").value;
  var contrasena2 = document.getElementById("contrasena2").value;

firebase.auth().signInWithEmailAndPassword(email2, contrasena2).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorCode);
  console.log(errorMessage);
});
});


function observador(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("existe usuario activo")
    aparece(user);
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    console.log("**************");
    console.log(user.emailVerified)
    console.log("**************");
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    console.log("no existe usuario activo")
    // ...
  }
});
}
observador();

function aparece(user){
  var user = user;
  var contenido = document.getElementById("contenido");
  if(user.emailVerified){
contenido.innerHTML = `
  <p>Bienvenido!</p>

  <button click="cerrar()" class="closes">Cerrar sesión</button>
  `
  }


$(".closes").click(function(){
firebase.auth().signOut()
.then(function(){
console.log("saliendo...")
})
.catch(function(error){
console.log(error)
})
});
}

function verificar(){
  var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("enviando correo...");
}).catch(function(error) {
  // An error happened.
  console.log("error");
});
}
//modal para subir archivos
 $('#modal1').modal(options){
    showPreview: false,
    showUpload: false,
    elErrorContainer: '#kartik-file-errors',
    allowedFileExtensions: ["jpg", "png", "gif"]
    //uploadUrl: '/site/file-upload-single'
  };

});

