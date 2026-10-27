function nomborAjaib() {
    //1.BACA nilai 
    let pilih = document.getElementById("nombor").value;
    
    let text = "";

    for (let i = 0; i < pilih ; i++) {
        text += "Nombor Ajaib Anda adalah " + i + "<br>";
    }
    document.getElementById("Keputusan").innerHTML = text;
}