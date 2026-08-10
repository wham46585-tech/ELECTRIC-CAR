// Tampilkan 3 mobil unggulan di beranda
function tampilkanMobilUnggulan() {
    const container = document.getElementById('produkUnggulan');
    if (!container) return;
    
    const unggulan = dataMobil.slice(0, 3); // Ambil 3 mobil pertama
    
    container.innerHTML = unggulan.map(mobil => `
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

// Isi dropdown model di form booking
function isiDropdownModel() {
    const select = document.getElementById('model');
    if (!select) return;
    
    select.innerHTML = `
        <option value="">Pilih model mobil</option>
        ${dataMobil.map(mobil => `
            <option value="${mobil.nama}">${mobil.nama} - ${mobil.merek}</option>
        `).join('')}
    `;
}

// Set minimum date untuk booking (besok)
function setMinDate() {
    const inputTanggal = document.getElementById('tanggal');
    if (!inputTanggal) return;
    
    const besok = new Date();
    besok.setDate(besok.getDate() + 1);
    inputTanggal.min = besok.toISOString().split('T')[0];
}

// Form submission
function handleFormSubmit() {
    const form = document.getElementById('bookingForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validasi sederhana
        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const model = document.getElementById('model').value;
        const tanggal = document.getElementById('tanggal').value;
        
        if (!nama || !email || !model || !tanggal) {
            alert('Mohon isi semua field yang diperlukan!');
            return;
        }
        
        // Validasi email sederhana
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Mohon masukkan alamat email yang valid!');
            return;
        }
        
        // Tampilkan alert sukses
        alert(`✅ Booking Test Drive Berhasil!\n\nTerima kasih ${nama}!\n\nDetail Booking:\n📧 Email: ${email}\n🚗 Model: ${model}\n📅 Tanggal: ${tanggal}\n\nTim kami akan menghubungi Anda segera.`);
        
        // Reset form
        form.reset();
    });
}

// Inisialisasi halaman beranda
function initBeranda() {
    tampilkanMobilUnggulan();
    isiDropdownModel();
    setMinDate();
    handleFormSubmit();
}

// Jalankan saat halaman beranda dimuat
if (document.getElementById('produkUnggulan')) {
    initBeranda();
}
