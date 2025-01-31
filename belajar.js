// 1. variabel dgn let
let nama = "nadia tambunan";

// tampilkan data
console.log(nama);

// ubah nilai variabel
nama = "sangkam tambunan";
console.log(nama);

// 2. variabel dgn var
var namaDepan = "sitambun";
console.log(namaDepan);

// kelakuan let
let namaBelakang = "tambunan";
{
    let namaBelakang = "lumbantoruan";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan var
var namaTengah = "keren";
console.log(namaTengah);
{
    var namaTengah = "ganteng";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus. kalau tanpa keyword, dia akan jadi var
gorengan = "bakwan";
{
    gorengan = 'combro';
}
console.log(gorengan);

// 3. const
const TTL = "10 maret 2022";
console.log(TTL);
// gaboleh diubah, karena udh janji buat constant