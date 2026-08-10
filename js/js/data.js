// Data dummy mobil listrik
const dataMobil = [
    {
        id: 1,
        nama: "Tesla Model 3",
        merek: "Tesla",
        harga: 1500000000,
        jarakTempuh: 500,
        gambar: "https://via.placeholder.com/400x300/1B4332/FFFFFF?text=Tesla+Model+3",
        spesifikasi: {
            baterai: "75 kWh",
            daya: "283 HP",
            akselerasi: "0-100 km/h dalam 5.6 detik",
            kecepatanMaks: "225 km/h",
            pengisian: "Fast Charging 30 menit (10-80%)",
            kursi: "5 Kursi",
            garansi: "8 Tahun / 160.000 km"
        }
    },
    {
        id: 2,
        nama: "Hyundai IONIQ 5",
        merek: "Hyundai",
        harga: 750000000,
        jarakTempuh: 450,
        gambar: "https://via.placeholder.com/400x300/2D6A4F/FFFFFF?text=Hyundai+IONIQ+5",
        spesifikasi: {
            baterai: "58 kWh",
            daya: "170 HP",
            akselerasi: "0-100 km/h dalam 8.5 detik",
            kecepatanMaks: "185 km/h",
            pengisian: "Fast Charging 18 menit (10-80%)",
            kursi: "5 Kursi",
            garansi: "7 Tahun / 150.000 km"
        }
    },
    {
        id: 3,
        nama: "Wuling Air EV",
        merek: "Wuling",
        harga: 250000000,
        jarakTempuh: 300,
        gambar: "https://via.placeholder.com/400x300/40916C/FFFFFF?text=Wuling+Air+EV",
        spesifikasi: {
            baterai: "26.7 kWh",
            daya: "40 HP",
            akselerasi: "0-100 km/h dalam 14 detik",
            kecepatanMaks: "100 km/h",
            pengisian: "Pengisian 8 jam (0-100%)",
            kursi: "4 Kursi",
            garansi: "5 Tahun / 100.000 km"
        }
    },
    {
        id: 4,
        nama: "Tesla Model Y",
        merek: "Tesla",
        harga: 2000000000,
        jarakTempuh: 530,
        gambar: "https://via.placeholder.com/400x300/52B788/FFFFFF?text=Tesla+Model+Y",
        spesifikasi: {
            baterai: "82 kWh",
            daya: "384 HP",
            akselerasi: "0-100 km/h dalam 5.0 detik",
            kecepatanMaks: "217 km/h",
            pengisian: "Fast Charging 25 menit (10-80%)",
            kursi: "7 Kursi",
            garansi: "8 Tahun / 192.000 km"
        }
    },
    {
        id: 5,
        nama: "BMW i4",
        merek: "BMW",
        harga: 1800000000,
        jarakTempuh: 520,
        gambar: "https://via.placeholder.com/400x300/95D5B2/FFFFFF?text=BMW+i4",
        spesifikasi: {
            baterai: "83.9 kWh",
            daya: "340 HP",
            akselerasi: "0-100 km/h dalam 5.7 detik",
            kecepatanMaks: "190 km/h",
            pengisian: "Fast Charging 31 menit (10-80%)",
            kursi: "5 Kursi",
            garansi: "8 Tahun / 160.000 km"
        }
    },
    {
        id: 6,
        nama: "Nissan Leaf",
        merek: "Nissan",
        harga: 650000000,
        jarakTempuh: 385,
        gambar: "https://via.placeholder.com/400x300/D8F3DC/212529?text=Nissan+Leaf",
        spesifikasi: {
            baterai: "40 kWh",
            daya: "147 HP",
            akselerasi: "0-100 km/h dalam 7.9 detik",
            kecepatanMaks: "155 km/h",
            pengisian: "Fast Charging 40 menit (10-80%)",
            kursi: "5 Kursi",
            garansi: "8 Tahun / 160.000 km"
        }
    }
];

// Format harga ke Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(angka);
}
