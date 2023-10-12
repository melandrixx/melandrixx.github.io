var waktuMasuk = document.getElementById("waktuMasuk");
var waktuKeluar = document.getElementById("waktuKeluar");
var absenButton = document.getElementById("absenButton");

absenButton.addEventListener("click", function() {
    var now = new Date();
    var waktuSekarang = now.toLocaleTimeString();
    
    if (!waktuMasuk.innerText) {
        waktuMasuk.innerText = waktuSekarang;
    } else if (!waktuKeluar.innerText) {
        waktuKeluar.innerText = waktuSekarang;
    } else {
        alert("Anda sudah absen masuk dan keluar hari ini.");
    }
});
