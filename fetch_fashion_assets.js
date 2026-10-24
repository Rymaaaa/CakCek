const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const images = [
    { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=900', name: 'fashion_hero.jpg' },
    { url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600', name: 'fashion_sneaker.jpg' },
    { url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600', name: 'fashion_hoodie.jpg' },
    { url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600', name: 'fashion_watch.jpg' },
    { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600', name: 'fashion_jacket.jpg' },
    { url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=600', name: 'fashion_tshirt.jpg' },
    { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4b8a7a?auto=format&fit=crop&q=80&w=600', name: 'fashion_cap.jpg' },
    { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600', name: 'fashion_bag.jpg' },
];

const destFolder = path.join(__dirname, 'public', 'assets');

async function download() {
    for (const img of images) {
        try {
            const res = await fetch(img.url);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const dest = path.join(destFolder, img.name);
            const fileStream = fs.createWriteStream(dest, { flags: 'w' });
            await finished(Readable.fromWeb(res.body).pipe(fileStream));
            const size = fs.statSync(dest).size;
            if (size < 5000) throw new Error(`File too small: ${size} bytes`);
            console.log(`✓ ${img.name} (${size} bytes)`);
        } catch (e) {
            console.error(`✗ ${img.name}: ${e.message}`);
        }
    }
}

download();
