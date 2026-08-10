// Ambil ID dari URL
function getMobilIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'));
}

// Tampilkan detail mobil
function tampilkanDetailMobil() {
    const container = document.getElementById('detailContainer');
    if (!container) return;
    
    const mobilId = getMobilIdFromURL();
    const mobil = dataMobil.find(m => m.id === mobilId);
    
    if (!mobil) {
        container.innerHTML = `
            <div style="text-align: center; padding: 80px 20px;">
                <h2 style="color: var(--hijau-tua);">Mobil tidak ditemukan</h2>
                <p style="margin: 20px 0;">Maaf, mobil yang Anda cari tidak tersedia.</p>
                <a href="katalog.html" class="cta-button">Kembali ke Katalog</a>
            </div>
        `;
        return;
    }
    
    // Update judul halaman
    document.title = `${mobil.nama} - EVolution`;
    
    container.innerHTML = `
        <div class="detail-container">
            <div class="galeri">
                <img src="${mobil.gambar}" alt="${mobil.nama}" style="width: 100%; border-radius: var(--radius);">
            </div>
            
            <div class="spesifikasi">
                <h1>${mobil.nama}</h1>
                <p class="merek-detail">${mobil.merek}</p>
                <p class="harga-detail">${formatRupiah(mobil.harga)}</p>
                
                <h3 style="color: var(--hijau-tua); margin-bottom: 20px;">Spesifikasi Utama</h3>
                <ul class="spec-list">
                    <li>
                        <span>🔋 Kapasitas Baterai</span>
                        <span>${mobil.spesifikasi.baterai}</span>
                    </li>
                    <li>
                        <span>⚡ Daya Maksimal</span>
                        <span>${mobil.spesifikasi.daya}</span>
                    </li>
                    <li>
                        <span>🏁 Akselerasi</span>
                        <span>${mobil.spesifikasi.akselerasi}</span>
                    </li>
                    <li>
                        <span>🚀 Kecepatan Maks</span>
                        <span>${mobil.spesifikasi.kecepatanMaks}</span>
                    </li>
                    <li>
                        <span>🔌 Pengisian Daya</span>
                        <span>${mobil.spesifikasi.pengisian}</span>
                    </li>
                    <li>
                        <span>🛋️ Kapasitas Kursi</span>
                        <span>${mobil.spesifikasi.kursi}</span>
                    </li>
                    <li>
                        <span>📊 Jarak Tempuh</span>
                        <span>${mobil.jarakTempuh} km</span>
                    </li>
                    <li>
                        <span>🛡️ Garansi Baterai</span>
                        <span>${mobil.spesifikasi.garansi}</span>
                    </li>
                </ul>
                
                <div style="margin-top: 30px; display: flex; gap: 15px; flex-wrap: wrap;">
                    <a href="index.html#form-booking" class="btn-booking">Booking Test Drive</a>
                    <a href="katalog.html" style="display: inline-block; padding: 15px 40px; border: 2px solid var(--hijau); color: var(--hijau); text-decoration: none; border-radius: 50px; font-weight: 700; transition: var(--transition);">
                        ← Kembali ke Katalog
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Inisialisasi halaman detail
function initDetail() {
    tampilkanDetailMobil();
}

// Jalankan saat halaman detail dimuat
if (document.getElementById('detailContainer')) {
    initDetail();
}
