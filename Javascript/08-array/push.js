// Beberapa metode yang bisa digunakan untuk memanipulasi array dalam JavaScript antara lain:
// delete() Kita dapat menghapus data dengan nomer indeks tertentu dengan,Kekurangan dari delete, ia akan menciptakan ruang kosong di dalam array.
// push() untuk menambahkan elemen baru di akhir array
// pop() untuk menghapus elemen terakhir dari array
// shift() untuk menghapus elemen pertama dari array
// unshift() untuk menambahkan elemen baru di awal array
// splice() untuk menambahkan, menghapus, atau mengganti elemen di posisi tertentu dalam array
// concat() untuk menggabungkan dua atau lebih array menjadi satu
// slice() untuk mengambil sebagian atau seluruh elemen dari array dan membuat array baru

var bunga = ["Mawar", "Melati", "Anggrek", "Sakura"];

var foo = bunga.push("Sena");
console.log(foo);
// Output => 4
console.log(bunga);
// Output => [ 'Java', 'PHP', 'Python', 'JS' ]
