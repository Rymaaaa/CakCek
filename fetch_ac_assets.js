const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const images = [
    { url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800', name: 'ac_hero.jpg' },
    { url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600', name: 'ac_cuci.jpg' },
    { url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600', name: 'ac_freon.jpg' },
    { url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600', name: 'ac_bongkar.jpg' }
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
            console.log(`Saved ${img.name} (${fs.statSync(dest).size} bytes)`);
        } catch (e) {
            console.error(`Failed ${img.name}: ${e.message}`);
        }
    }
}

download();
