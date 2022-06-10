//Abrir conexão com o banco//

const log = console.log;
   // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
 
  const firebaseConfig = {
    apiKey: "AIzaSyBhekoqcD7n9poCFtKTVzS_SlUhdBpOO4M",
    authDomain: "teste-d61d3.firebaseapp.com",
    projectId: "teste-d61d3",
    storageBucket: "teste-d61d3.appspot.com",
    messagingSenderId: "824596716863",
    appId: "1:824596716863:web:f0ccb67a0e8666b80e478a",
    measurementId: "G-BF6MH2R1QN"
  };
 
 //Inicializar Firebase
 firebase.initializeApp(firebaseConfig);
 
 const db = firebase.firestore();
 
 //=======================
 
 log("conectado");
 log(db);
 
 let array = [];
 
 function consulta() {
	 log("Buscando user");
	 
	 const transaction = db.collection('Users');
 
     const busca = transaction.where("id", "==", 800).get();
 
 busca.then((query) => {
   query.forEach((doc) => {
    array.push(doc.data());
    
   });
   
   let usua = document.getElementById('users').value;
   let pass = document.getElementById('password').value;
   let arr = array[0].user;
   let arrs = array[0].senha;
   
   if(usua == arr && pass == arrs) {
     log("logado!");
	 location.href = "../pages/pagina-do-editor.html";
   }else{ log('usuario ou senha invalida') }
   
  // log(array[1].id);
   //log(array);
   

 })
 .catch((error) => {
  log("Erro ao buscar: ", error);
 });
 
 };
 
const element = document.getElementById('titulo');
element.addEventListener("click", home);

function home() {
	location.href="../index.html"
}