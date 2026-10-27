function pilihMenu() {

//1.MULA

//2.PAPARKAN pilihan  menu

//3.BACA pilihan menu pengguna
    let pilih = document.getElementById('pilihan').value;
    let hasilPilihan; 

//4.SEMAK pilhan pengguna

    switch(pilih) {
        case '1' : 
            pilih = "Buah Naga sedia untuk masuk ke rumah anda!";
            break;
        case '2' : 
            pilih = "Buah Kiwi ini tak boleh terbang tapi <b>bole di makan</b>";
            break;
        case '3' : 
            pilih = "SILA BUKA MULUT, <i>Buah Epal</i> akan di lempar ke dalam mulut anda!";
            break;
        default  : 
            pilih = "<b>Sila pilih menu yang betul!</b>";
            break;
    }
    document.getElementById('hasilPilihan').innerHTML = "" + pilih;
}
//5.TAMAT

