const formPeminjaman = document.getElementById('form-peminjaman');
const hasil = document.getElementById('hasil');

const mobil = [
 { nama: 'Avanza', harga: 500000 },
 { nama: 'Innova', harga: 700000 },
 { nama: 'Xenia', harga: 400000 },
];

formPeminjaman.addEventListener('submit', (e) => {
 e.preventDefault();
 const nama = document.getElementById('nama').value;
 const tanggalPinjam = document.getElementById('tanggal-pinjam').value;
 const tanggalKembali = document.getElementById('tanggal-kembali').value;
 const jenisMobil = document.getElementById('jenis-mobil').value;

 const mobilDipilih = mobil.find((m) => m.nama === jenisMobil);
 if (mobilDipilih) {
 const harga = hitungHarga(tanggalPinjam, tanggalKembali, mobilDipilih.harga);
 const hasilPeminjaman = `Nama: ${nama}\nTanggal Pinjam: ${tanggalPinjam}\nTanggal Kembali: ${tanggalKembali}\nJenis Mobil: ${jenisMobil}\nHarga: Rp${harga.toLocaleString()}`;
 hasil.innerText = hasilPeminjaman;
 } else {
 alert('Jenis mobil tidak tersedia!');
 }
});

function hitungHarga(tanggalPinjam, tanggalKembali, harga) {
 const selisihHari = Math.abs(new Date(tanggalKembali) - new Date(tanggalPinjam)) / (1000 * 60 * 60 * 24);
 return selisihHari * harga;
}