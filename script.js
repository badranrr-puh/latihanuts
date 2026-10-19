// Variabel global untuk pesanan
let jumlahItem = 0;
let totalHarga = 0;

// Fungsi Format Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(angka);
}

// Fungsi DOM: Filter Kategori
function filterMenu(kategori, elemenTombol) {
    // Mengatur efek tombol aktif
    const tombolFilter = document.querySelectorAll('.filter-btn');
    tombolFilter.forEach(btn => btn.classList.remove('active'));
    elemenTombol.classList.add('active');

    // Menyaring kartu berdasarkan data-kategori
    const kartuMenu = document.querySelectorAll('.card');
    kartuMenu.forEach(kartu => {
        const kategoriItem = kartu.getAttribute('data-kategori');
        if (kategori === 'semua' || kategori === kategoriItem) {
            kartu.classList.remove('hidden');
        } else {
            kartu.classList.add('hidden');
        }
    });
}

// Fungsi DOM: Penghitung Jumlah & Total Harga
function tambahPesanan(harga) {
    jumlahItem++;
    totalHarga += harga;

    // Memperbarui teks di HTML
    document.getElementById('total-item').innerText = jumlahItem;
    document.getElementById('total-harga').innerText = formatRupiah(totalHarga);
}

// Fungsi DOM: Reset Pesanan
function resetPesanan() {
    jumlahItem = 0;
    totalHarga = 0;
    
    // Kembalikan nilai di HTML ke 0
    document.getElementById('total-item').innerText = jumlahItem;
    document.getElementById('total-harga').innerText = formatRupiah(0);
}
