function profile(){
    var mail=sessionStorage.getItem('User')
   
    var apiurl="https://retoolapi.dev/Yb0ZQB/userdata"
    if(mail!=undefined){
     
        document.getElementById('showprofile').style.visibility='visible'
      
     
      }
    
    var aapi=apiurl+"?mail="+mail
    fetch(aapi)
    .then((response)=>{
      return response.json()})
      .then((data)=>opendata(data))

  }
  function opendata(data){
    for(let x of data){
     var fname=x.fname;
     var lname=x.lname;
     document.getElementById("username").innerHTML = fname+lname ;
     document.getElementById("email").value = x.mail ;
     document.getElementById("phone").value = x.mobno ;
     
    }
  }

  function logout(){
    sessionStorage.removeItem('User');
    window.location.href='index.html';

  }
     
function himalayan() {
Booking("Himalayan");
}

function bullet() {
Booking("RE bullet 350");
}

function ktm() {
Booking("KTM 390");
}

function hondaactiva() {
Booking("Honda Activa");
}

function hondashine() {
Booking("Honda Shine");
}

function yamahar15() {
Booking("Yamaha R15");
}

function kawasaki() {
Booking("Kawasaki Ninja Z900");
}

function yamaharayzr() {
Booking("Yamaha RayZR");
}

function tvs() {
Booking("Tvs Xl 100");
}

function etergo() {
Booking("Etergo");
}

function scooty() {
Booking("Scooty pep plus");
}

function okinawa() {
Booking("Okinawa");
}

function Booking(product) {
var mail = sessionStorage.getItem('User');
if (mail == undefined) {
alert("Login first, then book.");
window.location = '/HTML/login.html';
}
if (mail != undefined) {
sessionStorage.setItem('product', product);
sessionStorage.setItem('User', mail);
window.location = '/HTML/booking.html';
}
}