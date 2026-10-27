function pilihMenu() {

//1.MULA

//2.PAPARKAN pilihan  menu

//3.BACA pilihan menu pengguna
    let pilih = document.getElementById('pilihan').value;
    let hasilPilihan; 

//4.SEMAK pilhan pengguna

    switch(pilih) {
        case '1' : 
            pilih = "Anda memilih Buah Naga";
            break;
        case '2' : 
            pilih = "Anda memilih Buah Kiwi";
            break;
        case '3' : 
            pilih = "Anda memilih Buah Epal";
            break;
        default  : 
            pilih = "Sila pilih menu yang betul!";
            break;
    }
    document.getElementById('hasilPilihan').innerHTML = "Pilihan anda: " + pilih;
}
//5.TAMAT

