const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { finished } = require('stream/promises');

const images = [
    { url: 'https://images.unsplash.com/photo-1555507036-ab1f4022115c?w=600&q=80', name: 'croissant.jpg' },
    { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80', name: 'coffee_hero.jpg' },
    { url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', name: 'cake.jpg' }
];

const destFolder = path.join(__dirname, 'public', 'assets');

async function downloadImages() {
    for (const img of images) {
        try {
            const res = await fetch(img.url);
            if (!res.ok) throw new Error(`Status ${res.status}`);
            const dest = path.join(destFolder, img.name);
            const fileStream = fs.createWriteStream(dest, { flags: 'w' });
            await finished(Readable.fromWeb(res.body).pipe(fileStream));
            console.log(`Downloaded ${img.name}`);
        } catch (err) {
            console.error(`Error downloading ${img.name}: ${err.message}`);
        }
    }
}

downloadImages();
