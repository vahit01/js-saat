

let userName = prompt('Adinizi giriniz:')
let myName = document.querySelector('#myName')

if (userName){
    myName.innerHTML = `${userName}`
} else {
    alert("Bos birakilmaz. Lutfen adinizi giriniz.")
    location.reload()
}

const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
function showTime() {
    let tarih = new Date()
    let gun = gunler[tarih.getDay()]
    let saat = tarih.getHours()
    let dakika = tarih.getMinutes()
    let saniye = tarih.getSeconds()
    
    saat = (saat < 10) ? "0" + saat : saat;
    dakika = (dakika < 10) ? "0" + dakika : dakika;
    saniye = (saniye < 10) ? "0" + saniye : saniye;

    document.querySelector("#myClock").innerHTML = `${saat}:${dakika}:${saniye} ${gun}`;
}


setInterval(showTime, 1000)
showTime()


