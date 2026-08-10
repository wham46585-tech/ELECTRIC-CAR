// Tampilkan semua mobil di katalog
function tampilkanKatalog(data = dataMobil) {
    const container = document.getElementById('gridKatalog');
    const noResult = document.getElementById('noResult');
    
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = '';
        noResult.style.display = 'block';
        return;
    }
    
    noResult.style.display = 'none';
    
    container.innerHTML = data.map(mobil => `
        <div class="card-produk" onclick="window.location.href='detail.html?id=${mobil.id}'">
            <img src="${mobil.gambar}" alt="${mobil.nama}" loading="lazy">
            <div class="info">
                <h3>${mobil.nama}</h3>
                <p class="merek">${mobil.merek}</p>
                <p class="harga">${formatRupiah(mobil.harga)}</p>
                <p class="jarak">🔋 ${mobil.jarakTempuh} km</p>
                <a href="detail.html?id=${mobil.id}" class="btn-detail">Lihat Detail</a>
            </div>
        </div>
    `).join('');
}

// Fungsi filter
function filterKatalog() {
    const filterMerek = document.getElementById('filterMerek').value;
    const filterHarga = document.getElementById('filterHarga').value;
    
    let hasilFilter = dataMobil;
    
    // Filter berdasarkan merek
    if (filterMerek !== 'semua') {
        hasilFilter = hasilFilter.filter(mobil => mobil.merek === filterMerek);
    }
    
    // Filter berdasarkan harga
    if (filterHarga !== 'semua') {
        const [min, max] = filterHarga.split('-').map(Number);
        hasilFilter = hasilFilter.filter(mobil => {
            const hargaJuta = mobil.harga / 1000000;
            return hargaJuta >= min && hargaJuta <= max;
        });
    }
    
    tampilkanKatalog(hasilFilter);
}

// Event listeners untuk filter
function initFilter() {
    const filterMerek = document.getElementById('filterMerek');
    const filterHarga = document.getElementById('filterHarga');
    
    if (filterMerek) {
        filterMerek.addEventListener('change', filterKatalog);
    }
    
    if (filterHarga) {
        filterHarga.addEventListener('change', filterKatalog);
    }
}

// Inisialisasi halaman katalog
function initKatalog() {
    tampilkanKatalog();
    initFilter();
}

// Jalankan saat halaman katalog dimuat
if (document.getElementById('gridKatalog')) {
    initKatalog();
}
