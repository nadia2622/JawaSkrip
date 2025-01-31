let dataString = "data";
console.log(dataString);

// 1. escaping string
let data1 = 'ucup berkata \t "apa kabar dunia?"';
// console.log(data1); \t untuk nambahin tab
let data2 = "otong berkata \"tetep asyiiiek\""
console.log(data2);
let data3 = "ucup berjalan di tepi pantai, \nkereeen";
console.log(data3); // \n untuk new line

// 2. literal string (template literal string)
let namaDepan = "otong";
let namaBelakang = "Surotong";
let umur = 7;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur
console.log(namaLengkap);

// yg lebih elegan agar ga bikin eror
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);