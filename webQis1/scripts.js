// scripts.js

// Inisialisasi peta
const map = L.map('map').setView([-6.6774, 110.6715], 13); // Koordinat Desa Troso

// Tambahkan tile layer OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Tambahkan marker contoh lokasi pengrajin
const locations = [
    {
        name: "Pengrajin Tenun 1",
        coords: [-6.6778, 110.6705],
        description: "Pengrajin kain tenun dengan motif tradisional."
    },
    {
        name: "Pengrajin Tenun 2",
        coords: [-6.6759, 110.6728],
        description: "Spesialis tenun dengan warna alami."
    }
];

locations.forEach(location => {
    L.marker(location.coords).addTo(map)
        .bindPopup(`<b>${location.name}</b><br>${location.description}`);
});
