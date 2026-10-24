const fs = require('fs');
const path = require('path');

const filesToProcess = [
    'index.html',
    'src/components/hero.html',
    'src/components/keunggulan.html',
    'src/components/harga.html',
    'demos/kuliner.html',
    'demos/jasa.html',
    'demos/retail.html'
];

filesToProcess.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;

    let content = fs.readFileSync(filePath, 'utf8');

    // Hero Mockup Fixes (hero.html)
    content = content.replace('Kopi Nusantara', 'Specialty Coffee');
    content = content.replace('Awali Harimu <br>Dengan Inspirasi', 'Pesan Cepat. <br>Tanpa Antre.');
    content = content.replace('Menu Terlaris 🔥', 'Paling Laris');
    
    // Copywriting (hero.html & index.html)
    content = content.replace('kelas Enterprise yang dioptimasi untuk mengalirkan', 'yang dirancang khusus untuk mengalirkan');
    content = content.replace('Otomatisasi Penjualan Anda', 'Solusi Landing Page UMKM');

    // Kuliner Demo (demos/kuliner.html)
    content = content.replace('Awali Harimu Dengan Inspirasi', 'Racikan Lokal, Rasa Premium');
    content = content.replace('Kopi Nusantara', 'Spesialis Kopi');
    content = content.replace('Racikan kopi lokal terbaik dari petani Indonesia, diseduh sepenuh hati untuk menemani setiap produktivitas dan waktu santaimu.', 'Kopi susu gula aren andalan, diseduh segar setiap hari. Pesan sekarang langsung diantar ke meja atau rumah Anda.');
    content = content.replace('Menu Terlaris 🔥', 'Menu Favorit');
    content = content.replace('Kata Mereka', 'Testimoni');
    
    // UI/UX Fixes - Emojis & Shadows (Global)
    // We will reduce shadows from shadow-2xl to shadow-lg where they are overused
    // Remove "animate-radar" where it might be annoying, maybe keep it only on the main WA button
    // The instructions say "Jangan tambahkan emoji secara acak", I will remove the fire emojis and others that look like slop.
    content = content.replace(/🔥/g, '');
    content = content.replace(/✨/g, '');
    content = content.replace(/🚀/g, '');
    
    // Jasa Demo (demos/jasa.html)
    content = content.replace('Jangan biarkan keluarga kepanasan.', 'AC rumah atau kantor bermasalah?');
    
    // Harga (src/components/harga.html)
    // Let's check for any "Solusi Terdepan" or "Mulus"
    content = content.replace(/Mulus/g, 'Lancar');
    content = content.replace(/Solusi Terdepan/g, 'Layanan Profesional');
    content = content.replace(/Revolusioner/g, 'Terbaik');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned AI Slop in: ${file}`);
});
