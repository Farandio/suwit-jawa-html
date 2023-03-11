let player,
    comp,
    hasil;

player = prompt('pilih satu diantara (gajah, orang semut)');

comp = Math.random();
console.log(comp);

switch ( player ) {
    case 'gajah':
        if (comp < 0.34){
            hasil = 'SERI!';
        } else if (comp >= 0.34 && comp < 0.67){
            hasil = 'MENANG!';
        } else {
            hasil = 'KALAH!';
        }
        break;
    case 'orang' :
        if (comp < 0.34){
            hasil = 'KALAH!';
        } else if (comp >= 0.34 && comp < 0.67){
            hasil = 'SERI!';
        } else {
            hasil = 'MENANG!';
        }
        break;
    case 'semut' :
        if (comp < 0.34){
            hasil = 'MENANG!';
        } else if (comp >= 0.34 && comp < 0.67){
            hasil = 'KALAH!';
        } else {
            hasil = 'SERI!';
        }
        break;
    default:
        hasil = 'WUTO PO PIE SAK JANE, DIOMONGI KON NGISI ANTARA 3 KUI, GAJAH WONG OPO SEMUT!';
        break;
}

alert(hasil);