let userName = prompt("Lütfen Adınızı Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi :("}`


let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];


function showTime() {
    const today = new Date();  
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    let dd = days[today.getDay()];
    let info = document.querySelector("#myClock")
    info.innerHTML = `${hh} : ${mm} : ${ss} ${dd}`
  }
  
  setInterval(showTime, 1000);

  showTime();